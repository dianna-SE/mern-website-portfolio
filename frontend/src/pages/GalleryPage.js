import React from 'react';
import ImageGallery from 'react-image-gallery';

export const GalleryPage = () => {

    const images = [

          {
            original: 'images/python-pygame-othello.png',
            thumbnail: 'images/python-pygame-othello.png',
            description: `This project involved the implementation of PyGame visuals for Othello.`,
            originalHeight: '450px',
          },


          {
            original: 'images/javascript-react-chat-application.png',
            thumbnail: 'images/javascript-react-chat-application.png',
            description: `The project focused on developing a chat application using the React and Redux framework.`,
            originalHeight: '450px',
          },


          {
            original: 'images/javascript-react-music-player.png',
            thumbnail: 'images/javascript-react-music-player.png',
            description: `The project entailed creating a music player application that incorporated the use of the map() data structure.`,
            originalHeight: '450px',
          },

          {
            original: 'images/python-django-social-media.png',
            thumbnail: 'images/python-django-social-media.png',
            description: `The project involved developing a social media application using the Python and Django framework.`,
            originalHeight: '450px',
          },

          {
            original: 'images/python-othello-return-positions.png',
            thumbnail: 'images/python-othello-return-positions.png',
            description: `A screenshot featuring code from the final coding project.`,
            originalHeight: '450px',
          },

          {
            original: 'images/python-othello-return-positions.png',
            thumbnail: 'images/python-othello-return-positions.png',
            description: `A screenshot featuring code from the final coding project.`,
            originalHeight: '450px',
          },

          {
            original: 'images/brooklyn-bridge-2021.jpg',
            thumbnail: 'images/brooklyn-bridge-2021.jpg',
            description: `Visited the Brooklyn Bridge in NYC back in 2021. &copy; 2021 Gaurav Kriplani`,
            originalHeight: '450px',
          },

          {
            original: 'images/disneyland-pym-lab.jpg',
            thumbnail: 'images/disneyland-pym-lab.jpg',
            description: `The Lab at Disneyland, known as “Pym's Lab,” offers a unique experience for visitors.`,
            originalHeight: '450px',
          },

          {
            original: 'images/getty-villa-museum-artifacts.jpg',
            thumbnail: 'images/getty-villa-museum-artifacts.jpg',
            description: `The Getty Villa Museum showcases a collection of ancient artifacts.`,
            originalHeight: '450px',
          },

          {
            original: 'images/usa-map-photo-collage.jpg',
            thumbnail: 'images/usa-map-photo-collage.jpg',
            description: `The map of the USA, completed with family photos.`,
            originalHeight: '450px',
          },

          {
            original: 'images/mechanical-keyboard-nk65-milkshake.jpg',
            thumbnail: 'images/mechanical-keyboard-nk65-milkshake.jpg',
            description: `A special artwork or map of the USA with a collage of photos.`,
            originalHeight: '450px',
          },
          
    ];


    return (
    <>

            <h2 class="gallery-header">Gallery</h2>
            <p class="gallery-caption">Photographs and lineart of projects, travels, and hobbies.</p>

            <article class="gallery">
                <ImageGallery items={images} />
            </article>
    </>
    );
  }
  
  export default GalleryPage;