import React, { useEffect, useRef, useState } from 'react';
import profilePic from '../data/profile-pic.jpg';
import othelloPic from '../data/grid.png';
import musePic from '../data/muse.png';
import dogPic from '../data/dog.png';

function formatDate(dateString) {
    const monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    
        const date = new Date(dateString);
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
    
        return `${monthNames[monthIndex]} ${year}`;
}


function HomePage() {

    const [projects, setProjects] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/projects'); 
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
        }

        fetchData();
    }, []);

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

        <div className="home-header">
            <img src={profilePic} alt="Profile" />
            <h1>Hi, I'm Dianna.</h1>
            <h2>CS student and developer</h2>
            <h2>based in California!</h2>

            <button>
                <a href="/Dianna_Pham_Resume.pdf" download className="home-button">
                Resume
                </a>
            </button>
            {/* <a class="github-button" href="https://github.com/dianna-SE" target="_blank" rel="noopener noreferrer">
                <AiFillGithub/>
            </a> */}
        </div>

        
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
                {projects.map(project => (
                <div key={project.id} class="project-details" onClick={() => window.open(project.link, '_blank')}>
                    <h5 class="bubble">{project.name}</h5>
                    <h3>{project.type}</h3>
                    <p>{project.description}</p>       
                    <div className='dot-container'>
                        <div class="tiny-dot"></div>
                        <button>{formatDate(project.startDate)} - {formatDate(project.endDate)}</button>
                    </div>
                </div>
                ))}
            </div>
        
        </article>
    </>
  );
}

export default HomePage;