import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditProjectPageForm = ({ projectToEdit = {} }) => {  

    const [name, setName] = useState(projectToEdit.name || '');
    const [type, setType] = useState(projectToEdit.type || '');
    const [description, setDescription] = useState(projectToEdit.description || '');
    const [link, setLink] = useState(projectToEdit.link || '');
    const [startDate, setStartDate] = useState(projectToEdit.startDate || ''); 
    const [endDate, setEndDate] = useState(projectToEdit.endDate || '');      

    const redirect = useNavigate();

    const editProject = async () => {
        const projectDetails = { name, type, description, link, startDate, endDate };

        // loop through the required fields and check if null
        for (const key of Object.keys(projectDetails)) {
            if (!projectDetails[key]) {
                alert(`There was an error updating the fields. Please fill in the ${key} field and try again.`);
                return;
            }
        }

        const response = await fetch(`/projects/${projectToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(projectDetails),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            alert(`Successfully updated project!`);
        } else {
            const errMessage = await response.json();
            alert(`There was an error updating the project. Required details may be missing or incorrect. Please try again. ${response.status}. ${errMessage.Error}`);
            redirect("/update");
        }
        redirect("/");
    }



    return (
        <>
        <article>
            <form onSubmit={(e) => { e.preventDefault();}}>
                
                <fieldset class="edit-project">
                    <legend>Update project</legend>

                    <label for="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="drink" 
                        required />

                    <label for="name">Type</label>
                    <input
                        type="text"
                        value={type}
                        onChange={e => setType(e.target.value)} 
                        id="drink" 
                        required />


                    <label for="instructions">Description</label>
                    <textarea
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)} 
                        id="instructions" 
                        required />

                    <label for="start-date">Start date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)} 
                        id="date" 
                        required />

                    <label for="end-date">End date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)} 
                        id="date" 
                        required />

                    <label for="submit">
                    <button
                        class = "edit-button"
                        onClick={editProject}
                        id="submit"
                    >Save and update</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditProjectPageForm;