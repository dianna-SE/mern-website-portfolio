import React, { useState, } from 'react';
import { useNavigate } from "react-router-dom";
import { BiSolidDrink } from 'react-icons/bi';


// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddMocktailPageForm = () => {

    const [drink, setDrink]       = useState('');
    const [ingredients, setIngredients]         = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [servings, setServings] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [date, setDate] = useState('');
    
    const redirect = useNavigate();

    const addMocktail = async () => {
        const newMocktail = { drink, ingredients, instructions, servings, preparationTime, date};
        const response = await fetch('/mocktails', {
            method: 'post',
            body: JSON.stringify(newMocktail),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if(response.status === 201){
            alert(`Successfully added the mocktail!`);
            redirect("/mocktails"); 
        } else {
            alert(`Error adding the mocktail into the collection. Required details may be incorrect or missing. Please try again. = ${response.status}`);
            redirect("/create"); 
        }
    };


    return (
        <>
        <article>

            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset class="edit-mocktail">
                    <legend>Project</legend>


                    <label for="drink">Name</label>
                    <input
                        type="text"
                        value={drink}
                        onChange={e => setDrink(e.target.value)} 
                        id="drink" 
                        required />

                    <label for="instructions">Description</label>
                    <textarea
                        value={instructions.join('\n')}
                        onChange={e => setInstructions(e.target.value.split('\n'))}
                        id="instructions" 
                        required />

                    <label for="ingredients">Technologies</label>
                    <textarea
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value.split('\n'))}
                        id="ingredients"  
                        required />

                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" 
                        required />

                    <label for="drink">URL link</label>
                    <input
                        type="text"
                        value={drink}
                        onChange={e => setDrink(e.target.value)} 
                        id="drink" 
                        required />


                    <label for="submit">
                    <button
                        class = "edit-button"
                        type="submit"
                        onClick={addMocktail}
                        id="submit"
                    >Create project</button></label>

                    
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddMocktailPageForm;