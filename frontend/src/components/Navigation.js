import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiFillGithub, AiFillLinkedin, AiFillLayout, AiFillPicture, AiFillHome } from 'react-icons/ai';
import { GrClose, GrGallery, GrProjects } from 'react-icons/gr';


function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <nav>
    <div class="left-group">
        <a href="/" title="Go to Home">
          <div class="logo-bubble">dp</div>
        </a>
    </div>




        <div class="center-group">
          {/* <NavLink to="../gallery" activeClassName="active" className="nav-link"><AiFillPicture/></NavLink>
          <NavLink to="../projects" activeClassName="active" className="nav-link"><AiFillLayout/></NavLink> */}
          {/* <NavLink to="/" activeClassName="active" className="nav-link" onClick={() => window.open('https://github.com/dianna-SE', '_blank')} ><AiFillGithub/></NavLink>
          <NavLink to="/" activeClassName="active" className="nav-link" onClick={() => window.open('https://www.linkedin.com/in/diannapham-se/', '_blank')}><AiFillLinkedin/></NavLink> */}
        </div>

        <div>
            <div className="menu-icon" onClick={() => setMenuOpen(true)}>
                <AiOutlineMenu />
            </div>

            {isMenuOpen && (
              
                <div className="sliding-menu">
                    <button onClick={closeMenu}><GrClose /></button>
                    <NavLink onClick={() => window.open('https://github.com/dianna-SE', '_blank')} >GitHub</NavLink>
                    <NavLink onClick={() => window.open('https://www.linkedin.com/in/diannapham-se/', '_blank')}>LinkedIn</NavLink>
                </div>
            )}

        </div>
    </nav>

    
  );
}

export default Navigation;
