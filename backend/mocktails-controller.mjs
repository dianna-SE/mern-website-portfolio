// Controllers for the project Collection

import 'dotenv/config';
import express from 'express';
import * as projects from './projects-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/projects', (req,res) => { 
    console.log('Request Body:', req.body); //TEST
    projects.createProject(
        req.body.name,
        req.body.type,
        req.body.description,
        req.body.link
        )
        .then(project => {
            res.status(201).json(project);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Status 400 error -- Failed to create the item due to a client error.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/projects', (req, res) => {
    projects.retrieveProjects()
        .then(project => { 
            if (project !== null) {
                res.json(project);
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
app.get('/projects/:_id', (req, res) => {
    projects.retrieveProjectByID(req.params._id)
    .then(project => { 
        if (project !== null) {
            res.json(project);
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
app.put('/projects/:_id', (req, res) => {
    projects.updateProject(
        req.params._id, 
        req.body.name,
        req.body.type,
        req.body.description,
        req.body.link
    )
    .then(project => {
        res.json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Status 400 error - Failed to update the item due to a client error.' });
    });
});


// DELETE Controller ******************************
app.delete('/projects/:_id', (req, res) => {
    projects.deleteProjectById(req.params._id)
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