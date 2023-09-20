import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { BiSolidDrink } from 'react-icons/bi';

export const EditMocktailPageForm = ({ mocktailToEdit }) => {

    const [drink, setDrink] = useState(mocktailToEdit.drink || '');
    const [ingredients, setIngredients] = useState(mocktailToEdit.ingredients || '');
    const [instructions, setInstructions] = useState(mocktailToEdit.instructions || '');
    const [servings, setServings] = useState(mocktailToEdit.servings || '');
    const [preparationTime, setPreparationTime] = useState(mocktailToEdit.preparationTime || '');
    const [date, setDate] = useState(mocktailToEdit.date || '');
    
    const redirect = useNavigate();

    const editMocktail = async () => {
        const requiredFields = {
            drink: 'Drink',
            ingredients: 'Ingredients',
            instructions: 'Instructions',
            servings: 'Servings',
            preparationTime: 'Preparation time',
            date: 'Current Date'
        };
    
        // loop through the required fields and check if null
        for (const key of Object.keys(requiredFields)) {
            if (!{drink, ingredients, instructions, servings, preparationTime, date}[key]) {
                alert(`There was an error updating the fields. Please fill in the fields and try again.`);
                return;
            }
        }


        const response = await fetch(`/mocktails/${mocktailToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                drink: drink,
                ingredients: ingredients,
                instructions: instructions,
                servings: servings,
                preparationTime: preparationTime,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Updated mocktail drink successful! This mocktail is now updated.`);
        } else {
            const errMessage = await response.json();
            alert(`There was an error updating the mocktail. Required details may be missing or incorrect. Please try again. ${response.status}. ${errMessage.Error}`);
            redirect("/update");
        }
        redirect("/mocktails");
        
    }



    return (
        <>
        <article>
            <form onSubmit={(e) => { e.preventDefault();}}>
                
                <fieldset class="edit-mocktail">
                    <legend>Update project</legend>

                    <label for="drink">Name</label>
                    <input
                        type="text"
                        value={drink}
                        onChange={e => setDrink(e.target.value)} 
                        id="drink" 
                        required />


                    <label for="instructions">Description</label>
                    <textarea
                        type="text"
                        value={instructions}
                        onChange={e => setInstructions(e.target.value)} 
                        id="instructions" 
                        required />

                    <label for="ingredients">Technologies</label>
                    <textarea
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value.split('\n'))}
                        id="ingredients" 
                        required />

                    <label for="ingredients">Website</label>
                    <input
                        type="text"
                        value={drink}
                        onChange={e => setDrink(e.target.value)} 
                        id="drink" 
                        required />

                    <label for="submit">
                    <button
                        class = "edit-button"
                        onClick={editMocktail}
                        id="submit"
                    >Save and update</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditMocktailPageForm;