// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import products from './data/products.js'
import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';
import GalleryPage from './pages/GalleryPage.js';
import OrderPage from './pages/OrderPage.js';
import ContactPage from './pages/ContactPage.js';
import MocktailsPage from './pages/MocktailsPage';
import AddMocktailPageForm from './pages/AddMocktailPageForm';
import EditMocktailPageForm from './pages/EditMocktailPageForm';


// Define the function that renders the content in Routes, using State.
function App() {

  const [mocktail, setMocktailToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header class="homepage">
            <img class="homepage-logo"src="favicon-32x32.png" alt=""/>
            <h1>Dianna Pham</h1>
            <p> Welcome to my portfolio! Here you can explore my web development projects, skills, and experiences. Feel free to reach out to me if you have any questions or opportunities!</p>
          </header>

          <Navigation />

          <main>
            <section>

                <Routes> 

                    <Route path="/mocktails" element={<MocktailsPage setMocktail={setMocktailToEdit}/>} />
                    <Route path="/create" element={<AddMocktailPageForm />} /> 
                    <Route path="/update" element={<EditMocktailPageForm mocktailToEdit={mocktail} />} />
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/topics" element={<TopicsPage/>} />
                    <Route path="/mocktails" element={<MocktailsPage/>} />
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