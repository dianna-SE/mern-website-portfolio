import React, { useState, } from 'react';
import { useNavigate } from "react-router-dom";


// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddProjectPageForm = () => {

    const [name, setName]       = useState('');
    const [type, setType]       = useState('');
    const [description, setDescription]       = useState('');
    const [link, setLink] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
 
    const redirect = useNavigate();

    const addProject = async () => {
        const newProject = { name, type, description, link, startDate, endDate};
        const response = await fetch('/projects', {
            method: 'post',
            body: JSON.stringify(newProject),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if(response.status === 201){
            alert(`Successfully added the project!`);
            redirect("/"); 
        } else {
            alert(`Error adding the project into the collection. Required details may be incorrect or missing. Please try again. = ${response.status}`);
            redirect("/create"); 
        }
    };


    return (
        <>
        <article>

            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset class="edit-project">
                    <legend>Project</legend>


                    <label for="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="drink" 
                        required />

                    <label for="type">Project Type</label>
                    <input
                        type="text"
                        value={type}
                        onChange={e => setType(e.target.value)} 
                        id="drink" 
                        required />

                    <label for="description">Description</label>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value.split('\n'))}
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

                    <label for="link">URL link</label>
                    <input
                        type="text"
                        value={link}
                        onChange={e => setLink(e.target.value)} 
                        id="link" 
                        required />


                    <label for="submit">
                    <button
                        class = "edit-button"
                        type="submit"
                        onClick={addProject}
                        id="submit"
                    >Create project</button>
                    </label>

                    
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddProjectPageForm;