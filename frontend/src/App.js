// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';


import products from './data/products.js'
import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';
import GalleryPage from './pages/GalleryPage.js';
import OrderPage from './pages/OrderPage.js';
import ContactPage from './pages/ContactPage.js';
import ProjectsPage from './pages/ProjectsPage';
import AddMocktailPageForm from './pages/AddMocktailPageForm';
import EditMocktailPageForm from './pages/EditMocktailPageForm';


// Define the function that renders the content in Routes, using State.
function App() {

  const [mocktail, setMocktailToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <Navigation />

          <main>
            <section>

                <Routes> 

                    <Route path="/mocktails" element={<ProjectsPage setMocktail={setMocktailToEdit}/>} />
                    <Route path="/create" element={<AddMocktailPageForm />} /> 
                    <Route path="/update" element={<EditMocktailPageForm mocktailToEdit={mocktail} />} />
                    {/* <Route path="/" element={<HomePage/>} /> */}
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/topics" element={<TopicsPage/>} />
                    <Route path="/projects" element={<ProjectsPage/>} />
                    <Route path="/gallery" element={<GalleryPage/>} />
                    <Route path="/order" element={<OrderPage/>} />
                    <Route path="/contact" element={<ContactPage/>} /> 

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