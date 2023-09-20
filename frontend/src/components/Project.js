import React, { useState, useRef, useEffect }  from 'react';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { AiOutlineEdit, AiOutlinePlusCircle } from 'react-icons/ai';

import profilePic from '../data/profile-pic.jpg';
import othelloPic from '../data/grid.png';
import musePic from '../data/muse.png';
import dogPic from '../data/dog.png';

// THIS SHOWS A PAGE OF EXISTING PROJECT COLLECTIONS
function Project({ project, onAdd, onDelete, onEdit, renderWithLineBreaks }) {

    const colorTransitionRef = useRef(null);

    useEffect(() => {
        const isElementAtTop = (el) => {
            const rect = el.getBoundingClientRect();
            return rect.top <= 0;
        };

        const setBackgroundColor = () => {
            let bgColor;
            const width = window.innerWidth;

            if (colorTransitionRef.current && isElementAtTop(colorTransitionRef.current)) {
                bgColor = '#FFFFFF';
            } 
            else if (width >= 1080) {
                bgColor = 'rgb(216, 216, 253)';
            } 
            else if (width >= 800) {
                bgColor = '#C2D7F2';
            } 
            else {
                bgColor = '#CCC5DA';
            }

            document.body.style.backgroundColor = bgColor;
        };

        window.addEventListener('scroll', setBackgroundColor);
        window.addEventListener('resize', setBackgroundColor);

        // Set initial background color on component mount
        setBackgroundColor();

        return () => {
            window.removeEventListener('scroll', setBackgroundColor);
            window.removeEventListener('resize', setBackgroundColor);
        };

    }, []);

    function handleContainerClick() {
        window.open('https://www.google.com', '_blank');
    }

    return (
        <>

        
        <article>


            <div class="home-works">

                <div class="project-details" onClick={() => window.open('{project.link}', '_blank')}>
                    <h5 class="bubble">{project.name}</h5>
                    <h3>{project.type}</h3> 
                    <p>{project.description}</p>       
                    <div class='dot-container'>
                        <div class="tiny-dot"></div>
                        <button>test</button>
                    </div>
                </div>
            </div>

            
        
        </article>
        </>
    );
}
export default Project;
