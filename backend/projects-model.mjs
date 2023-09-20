// Models for the Mocktail Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Status 500 error -- Failed connection to the server due to an unexpected encounter that prevented request fulfillment.' });
    } else  {
        console.log('Connection to MongoDB through Mongoose successful!');
    }
});

// SCHEMA: Define the collection's schema.
const projectSchema = mongoose.Schema({
	name:    { type: String, required: true },
    type: [{ type: String, required: true }],
    description: [{ type: String, required: true }],
    link: { type: String, required: true }, 
    startDate:   { type: Date, required: false },  // set required to true if you always want a start date
    endDate:     { type: Date, required: false },  // set required to true if you always want an end date
    
});

// Compile the model from the schema 
// by defining the collection name "projects".
const projects = mongoose.model('Project', projectSchema);


// CREATE model *****************************************
const createProject = async (name, type, description, link, startDate, endDate) => {
    const project = new projects({ 
        name: name,
        type: type,
        description: description,
        link: link,
        startDate: startDate,
        endDate: endDate
    });
    return project.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveProjects = async () => {
    const query = projects.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveProjectByID = async (_id) => {
    const query = projects.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteProjectById = async (_id) => {
    const result = await projects.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateProject = async (_id, name, type, description, link) => {
    const result = await projects.replaceOne({_id: _id }, {
        name: name,
        type: type,
        description: description,
        link: link,
        startDate: startDate,
        endDate: endDate
    });
    return { 
        name: name,
        type: type,
        description: description,
        link: link,
        startDate: startDate,
        endDate: endDate
    }
}

// EXPORT the variables for use in the controller file.
export { createProject, retrieveProjects, retrieveProjectByID, updateProject, deleteProjectById }