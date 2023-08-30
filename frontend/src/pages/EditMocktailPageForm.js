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
            <h2><BiSolidDrink /> Edit a mocktail</h2>
            <p>Modify the details below to update this mocktail. Once you've made the changes, click 'Save and update' to apply them.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                
                <fieldset class="edit-mocktail">
                    <legend>Update a mocktail</legend>

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
                        placeholder="Update the ingredients for this drink. (e.g., '1 cup sugar')"
                        onChange={e => setIngredients(e.target.value.split('\n'))}
                        id="ingredients" 
                        required />



                    <label for="instructions">Instructions</label>
                    <textarea
                        type="text"
                        placeholder="(e.g., Add the lemon juice.)"
                        value={instructions}
                        onChange={e => setInstructions(e.target.value)} 
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
                        required />

                    <label for="preparationTime">Preparation Time</label>
                    <input
                        type="text"
                        placeholder="(eg., 60mins)"
                        value={preparationTime}
                        onChange={e => setPreparationTime(e.target.value)} 
                        min="1"
                        max="99"
                        id="preparationTime" 
                        required />

                    <label for="date">Current Date</label>
                    <input
                        type="date"
                        placeholder="Date the mocktail was created"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />


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