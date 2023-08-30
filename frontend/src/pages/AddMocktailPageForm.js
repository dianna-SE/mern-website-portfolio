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
            <h2>< BiSolidDrink/>  Add a mocktail</h2>
            <p>Fill in the details below to create a new mocktail. Once you've entered the drink, click 'Add' to include it in the collection.</p>


            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset class="edit-mocktail">
                    <legend>Add mocktails</legend>


                    <label for="drink">Mocktail</label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={drink}
                        onChange={e => setDrink(e.target.value)} 
                        id="drink" 
                        required />
                    


                    <label for="ingredients">Ingredients</label>
                    <textarea
                        value={ingredients}
                        placeholder="(e.g., '1 cup sugar')"
                        onChange={e => setIngredients(e.target.value.split('\n'))}
                        id="ingredients"  
                        required />



                    <label for="instructions">Instructions</label>
                    <textarea
                        placeholder="(e.g., 'Add the lemon juice'.)"
                        value={instructions.join('\n')}
                        onChange={e => setInstructions(e.target.value.split('\n'))}
                        id="instructions" 
                        required />



                    <label for="servings">Servings</label>
                    <input
                        type="number"
                        placeholder="(per drink)"
                        value={servings}
                        onChange={e => setServings(e.target.value)} 
                        min="1"
                        max="99"
                        id="servings" 
                        required/>

                    <label for="preparationTime">Preparation Time</label>
                    <input
                        type="text"
                        placeholder="(e.g., '60mins')"
                        value={preparationTime}
                        onChange={e => setPreparationTime(e.target.value)} 
                        min="1"
                        max="99"
                        id="preparationTime" 
                        required />

                    <label for="date">Date</label>
                    <input
                        type="date"
                        placeholder="YY/MM/DD"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" 
                        required />


                    <label for="submit">
                    <button
                        class = "edit-button"
                        type="submit"
                        onClick={addMocktail}
                        id="submit"
                    >Add drink</button></label>

                    
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddMocktailPageForm;