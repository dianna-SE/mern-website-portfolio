// Controllers for the mocktail Collection

import 'dotenv/config';
import express from 'express';
import * as mocktails from './mocktails-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/mocktails', (req,res) => { 
    console.log('Request Body:', req.body); //TEST
    mocktails.createMocktail(
        req.body.drink, 
        req.body.ingredients,
        req.body.instructions,
        req.body.servings,
        req.body.preparationTime,
        req.body.date
        )
        .then(mocktail => {
            res.status(201).json(mocktail);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Status 400 error -- Failed to create the item due to a client error.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/mocktails', (req, res) => {
    mocktails.retrieveMocktails()
        .then(mocktail => { 
            if (mocktail !== null) {
                res.json(mocktail);
            } else {
                res.status(404).json({ Error: 'Status 404 error -- Failed to retrieve the item due to the requested page not found in the server.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Status 400 error -- Failed to retrieve the item due to a client error.' });
        });
});


// RETRIEVE by ID controller
app.get('/mocktails/:_id', (req, res) => {
    mocktails.retrieveMocktailByID(req.params._id)
    .then(mocktail => { 
        if (mocktail !== null) {
            res.json(mocktail);
        } else {
            res.status(404).json({ Error: 'Status 404 error -- Failed to retrieve the item by the ID due to the requested page not found in the server.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Status 400 error -- Failed to retrieve the item by the ID due to a client error.' });
    });

});


// UPDATE controller ************************************
app.put('/mocktails/:_id', (req, res) => {
    mocktails.updateMocktail(
        req.params._id, 
        req.body.drink, 
        req.body.ingredients,
        req.body.instructions,
        req.body.servings,
        req.body.preparationTime,
        req.body.date
    )
    .then(mocktail => {
        res.json(mocktail);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Status 400 error - Failed to update the item due to a client error.' });
    });
});


// DELETE Controller ******************************
app.delete('/mocktails/:_id', (req, res) => {
    mocktails.deleteMocktailById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'The request to delete the item was successful!' });
            } else {
                res.status(404).json({ Error: 'Status 404 error - failed to delete the item due to the requested page not found in the server.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'An internal server error occurred when trying to delete the item. Please try again.' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});