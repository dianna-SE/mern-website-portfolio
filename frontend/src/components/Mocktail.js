import React, { useState }  from 'react';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { AiOutlineEdit, AiOutlinePlusCircle } from 'react-icons/ai';

// THIS SHOWS A PAGE OF EXISTING MOCKTAIL COLLECTIONS
function Mocktail({ mocktail, onAdd, onDelete, onEdit, renderWithLineBreaks }) {
    const date = useState(mocktail.date.slice(0, 10));

    return (
        <tr class="mocktail-table">
            <td>{mocktail.drink}</td>
            <td class="filler"></td>
            <td>{renderWithLineBreaks(mocktail.ingredients)}</td>
            <td>{renderWithLineBreaks(mocktail.instructions)}</td>
            <td>{mocktail.servings}</td>
            <td>{mocktail.preparationTime}</td>
            <td class="date">{date}</td>
            {/* <td class="action-button"><button onClick={() => onAdd(mocktail)}><AiOutlinePlusCircle class="icon"/></button></td> */}
            <td class="action-button"><button onClick={() => onEdit(mocktail)}><AiOutlineEdit class="icon"/></button></td>
            <td class="action-button"><button onClick={() => onDelete(mocktail._id)}><MdOutlineDeleteForever class="icon"/></button></td>
        </tr>
    );
}
export default Mocktail;
