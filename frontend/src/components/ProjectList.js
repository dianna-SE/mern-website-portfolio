import React from 'react';
import Project from './Project';

function renderWithLineBreaks(inputText) {
    const textLines = Array.isArray(inputText) ? inputText : inputText.split('\n');
    return textLines.map((lineText, index) => (
        <span key={index}>
            {lineText}
            {index < textLines.length - 1 && <br />}
        </span>
    ));
}

function ProjectList({ project, projects, onAdd, onDelete, onEdit }) {
    return (
        <>
        
        <table id="projects">
            <tbody>
                {projects.map((project, i) => (
                    <Project 
                        key={project._id || i}
                        project={project}
                        // onAdd={onAdd}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        renderWithLineBreaks={renderWithLineBreaks}
                    />
                ))}
            </tbody>
        </table>
    </>
    );
}

export default ProjectList;


