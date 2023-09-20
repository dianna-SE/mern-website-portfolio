import React from 'react';
import Mocktail from './Mocktail';

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


