import React from 'react';
import Mocktail from './Mocktail';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BiMessageSquareAdd } from 'react-icons/bi';

function renderWithLineBreaks(inputText) {
    const textLines = Array.isArray(inputText) ? inputText : inputText.split('\n');
    return textLines.map((lineText, index) => (
        <span key={index}>
            {lineText}
            {index < textLines.length - 1 && <br />}
        </span>
    ));
}

function MocktailList({ mocktail, mocktails, onAdd, onDelete, onEdit }) {
    return (
        
        <table id="mocktails">
            <caption>You can add, edit, or delete projects from the current collection.</caption>
            <thead>
                <tr class="mocktail-list">
                    <th>Name</th>
                    <th></th>
                    <th>Stack</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th class="add"><button onClick={() => onAdd(mocktail)}><BiMessageSquareAdd class="icon"/></button></th>
                </tr>
            </thead>
            <tbody>
                {mocktails.map((mocktail, i) => (
                    <Mocktail 
                        key={mocktail._id || i}
                        mocktail={mocktail}
                        // onAdd={onAdd}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        renderWithLineBreaks={renderWithLineBreaks}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default MocktailList;


