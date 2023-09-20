import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidDrink } from 'react-icons/bi';
import MocktailList from '../components/MocktailList';

function MocktailsPage({ setMocktail }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [mocktails, setMocktails] = useState([]);

    // RETRIEVE the entire list of mocktails
    const loadMocktails = async () => {
        const response = await fetch('/mocktails');
        const mocktails = await response.json();
        setMocktails(mocktails);
    } 

    // ADD a single mocktail 
    const onAddMocktail = async mocktail => {
        setMocktail(mocktail);
        redirect("/create")
    }

    // UPDATE a single mocktail
    const onEditMocktail = async mocktail => {
        setMocktail(mocktail);
        redirect("/update");
    }

    // DELETE a single mocktail  
    const onDeleteMocktail = async _id => {
        const response = await fetch(`/mocktails/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/mocktails');
            const mocktails = await getResponse.json();
            setMocktails(mocktails);

        } else {
            console.error(`There was an error deleting this mocktail drink. Please try again. = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the mocktails
    useEffect(() => {
        loadMocktails();
    }, []);
    
    // DISPLAY the mocktails
    return (
        <>
            {/* <h2>Projects</h2> */}
            <MocktailList 
                mocktails={mocktails} 
                onAdd={onAddMocktail}
                onEdit={onEditMocktail} 
                onDelete={onDeleteMocktail} 
            />
        </>
    );
}

export default MocktailsPage;