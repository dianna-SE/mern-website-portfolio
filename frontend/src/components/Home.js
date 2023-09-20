import React, { useState, useRef }  from 'react';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { AiOutlineEdit, AiOutlinePlusCircle } from 'react-icons/ai';


import othelloPic from '../data/grid.png';
import musePic from '../data/muse.png';
import dogPic from '../data/dog.png';



function Home({ mocktail, onAdd, onDelete, onEdit, renderWithLineBreaks }) {
    const date = useState(mocktail.date.slice(0, 10));

    const colorTransitionRef = useRef(null);
 
    return (
        <>
        <tr class="mocktail-table">
            <td>{mocktail.drink}</td> 
            <td class="filler"></td>
            <td>{renderWithLineBreaks(mocktail.instructions)}</td> 
            <td>{renderWithLineBreaks(mocktail.ingredients)}</td> 
            <td class="date">{date}</td>
            {/* <td class="action-button"><button onClick={() => onAdd(mocktail)}><AiOutlinePlusCircle class="icon"/></button></td> */}
            <td class="action-button"><button onClick={() => onEdit(mocktail)}><AiOutlineEdit class="icon"/></button></td>
            <td class="action-button"><button onClick={() => onDelete(mocktail._id)}><MdOutlineDeleteForever class="icon"/></button></td>
        </tr>

        <article>


            <div class="img-container">
                <div class="home-paragraphs">
                    <h3>More than an engineer</h3>
                    <p>I'm not just any engineer; I'm a leader with a proven work record. As a Shift Supervisor at Villa Dolce Melt LLC, I've transformed teams, honed communication, and turned customer concerns into satisfied solutions. I've found where tech meets passion, and that's my greatest strength.</p>
                </div>

                <img class="img" src={othelloPic}  alt="profile-pic"/>
            </div>

            <div class="img-container">
            <img class="muse" src={musePic}  alt="profile-pic"/>
                <div class="home-paragraphs">
                    <h3>Done more than you think</h3>
                    <p class="p2" >I've transformed complex computer science concepts into efficient, user-friendly applications. My projects showcase not just a student of the craft but a proactive problem solver, always delivering beyond expectations.</p>
                </div>
            </div>

            <div class="img-container">
                <div class="home-paragraphs">
                    <h3>What I offer</h3>
                    <p>Behind my education and work is a dedication to making an impact. Partner with me and you're not just getting skills—you're embracing passion and a commitment to results.</p>
                </div>

                <img class="img dog" id="color-transition" ref={colorTransitionRef}  src={dogPic}  alt="profile-pic"/>
            </div>

                <div class="works-intro">
                    <h3>Discover my work</h3>
                    <p>Every project is a fusion of creativity and technology. See where passion meets precision.</p>
                </div>

            <div class="home-works">

                {/* TEST!!!!!! */}
                <div class="project-details" onClick={() => window.open('https://github.com/dianna-SE/othello-pygame', '_blank')}>
                    <h5 class="bubble">{mocktail.drink}</h5>
                    <h3>{mocktail.drink}</h3>
                    <p>{mocktail.instructions}</p>       
                    <div class='dot-container'>
                        <div class="tiny-dot"></div>
                        <button>{date}</button>
                    </div>
                </div>
                {/* TEST!!!!!! */}

                <div class="project-details" onClick={() => window.open('https://github.com/dianna-SE/othello-pygame', '_blank')}>
                    <h5 class="bubble">Othello</h5>
                    <h3>Python PyGame Application</h3>
                    <p>Reinvented Othello with a refreshing take with contemporary tech, engaging users in a new digital experience.</p>       
                    <div class='dot-container'>
                        <div class="tiny-dot"></div>
                        <button>April 2023 - May 2023</button>
                    </div>
                </div>


                <div class="project-details" onClick={() => window.open('https://github.com/dianna-SE/osu-cs261-assignment-6', '_blank')}>
                    <h5 class="bubble">HashMap</h5>
                    <h3>Data Structure & Algorithms</h3>
                    <p>Tackled collisions through open addressing and separate chaining to deliver an efficient codebase ready for any challenge.</p>
                    <div class='dot-container'>
                        <div class="tiny-dot"></div>
                        <button>June 2023 - Aug 2023</button>
                    </div>
                </div>

                <div class="project-details" onClick={() => window.open('https://github.com/dianna-SE/music-app-demo', '_blank')}>
                    <h5 class="bubble">Muse</h5>
                    <h3>React Application</h3>
                    <p>Explore, discover, and indulge in a carefully curated selection of 20 handpicked songs.</p>
                    <div class='dot-container'>
                        <div class="tiny-dot"></div>
                        <button>June 2022 - Oct 2022</button>
                    </div>
                </div>

                <div class="project-details" onClick={() => window.open('https://github.com/dianna-SE/justpaws', '_blank')}>
                    <h5 class="bubble">justPaws</h5>
                    <h3>Full Stack Django Application</h3>
                    <p>A space where users connect, share, and engage through a universe of pups, all in a modern web environment.</p>
                    <div class='dot-container'>
                        <div class="tiny-dot"></div>
                        <button>April 2022 - May 2022</button>
                    </div>
                </div>

                <div class="project-details" onClick={() => window.open('https://github.com/dianna-SE/milk-project', '_blank')}>
                    <h5 class="bubble">Milk</h5>
                    <h3>React & Redux Application</h3>
                    <p>Infused modern chat mechanics with a dairy-themed delight, enabling users to converse in one single server. Smooth UI meets creamy conversation.</p>
                    <div class='dot-container'>
                        <div class="tiny-dot"></div>
                        <button>Feb 2022 - Mar 2023</button>
                    </div>
                </div>


            </div>
        
        </article>
        </>


    );
}
export default Home
