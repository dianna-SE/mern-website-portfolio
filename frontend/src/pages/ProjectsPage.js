import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectList from '../components/ProjectList';

function ProjectsPage({ setProject }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [projects, setProjects] = useState([]);

    // RETRIEVE the entire list of projects
    const loadProjects = async () => {
        const response = await fetch('/projects');
        const projects = await response.json();
        setProjects(projects);
    } 

    // ADD a single project 
    const onAddProject = async project => {
        setProject(project);
        redirect("/create")
    }

    // UPDATE a single project
    const onEditProject = async project => {
        setProject(project);
        redirect("/update");
    }

    // DELETE a single project  
    const onDeleteProject = async _id => {
        const response = await fetch(`/projects/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/projects');
            const projects = await getResponse.json();
            setProjects(projects);

        } else {
            console.error(`There was an error deleting this project. Please try again. = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the projects
    useEffect(() => {
        loadProjects();
    }, []);
    
    // DISPLAY the projects
    return (
        <>
            {/* <h2>Projects</h2> */}
            <ProjectList 
                projects={projects} 
                onAdd={onAddProject}
                onEdit={onEditProject} 
                onDelete={onDeleteProject} 
            />
        </>
    );
}

export default ProjectsPage;