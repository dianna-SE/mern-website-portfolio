// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

import HomePage from './pages/HomePage.js';


// Define the function that renders the content in Routes, using State.
function App() {

  const [project, setProjectToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <Navigation />

          <main>
            <section>

                <Routes> 
                    <Route path="/" element={<HomePage/>} />
                    {/* <Route path="/create" element={<AddProjectPageForm />} /> 
                    <Route path="/update" element={<EditProjectPageForm projectToEdit={project} />} />
                    {/* <Route path="/projects" element={<ProjectsPage setProject={setProjectToEdit}/>} />
                    {/* <Route path="/" element={<HomePage/>} /> */}
                    {/* <Route path="/topics" element={<TopicsPage/>} /> */}
                    {/* <Route path="/projects" element={<ProjectsPage/>} /> */}
                    {/* <Route path="/gallery" element={<GalleryPage/>} />
                    <Route path="/order" element={<OrderPage/>} />
                    <Route path="/contact" element={<ContactPage/>} />  */}

                </Routes>

              </section>
          </main>

          <footer>
            <p>&copy; 2023 Dianna Pham</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;