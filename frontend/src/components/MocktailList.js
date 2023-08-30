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
            <caption>Collection of mocktail drinks.</caption>
            <thead>
                <tr class="mocktail-list">
                    <th>Drink</th>
                    <th></th>
                    <th>Ingredients</th>
                    <th>Instructions</th>
                    <th>Servings</th>
                    <th>Preparation Time</th>
                    <th>Date</th>
                    {/* <th>Add </th> */}
                    <th>Edit</th>
                    <th>Delete</th>
                    <th class="action-button"><button onClick={() => onAdd(mocktail)}><BiMessageSquareAdd class="icon"/></button></th>
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


