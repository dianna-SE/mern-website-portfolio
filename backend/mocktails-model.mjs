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
const mocktailSchema = mongoose.Schema({
	drink:    { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: [{ type: String, required: true }],
    servings: { type: Number, required: true },
    preparationTime: { type: String, required: true }, 
    date:     { type: Date, required: true, min: '2023-08-07', default: Date.now }
});

// Compile the model from the schema 
// by defining the collection name "mocktails".
const mocktails = mongoose.model('Mocktail', mocktailSchema);


// CREATE model *****************************************
const createMocktail = async (drink, ingredients, instructions, servings, preparationTime, date) => {
    const mocktail = new mocktails({ 
        drink: drink, 
        ingredients: ingredients,
        instructions: instructions,
        servings: servings,
        preparationTime: preparationTime,
        date: date
    });
    return mocktail.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveMocktails = async () => {
    const query = mocktails.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveMocktailByID = async (_id) => {
    const query = mocktails.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteMocktailById = async (_id) => {
    const result = await mocktails.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateMocktail = async (_id, drink, ingredients, instructions, servings, preparationTime, date) => {
    const result = await mocktails.replaceOne({_id: _id }, {
        drink: drink, 
        ingredients: ingredients,
        instructions: instructions,
        servings: servings,
        preparationTime: preparationTime,
        date: date
    });
    return { 
        drink: drink, 
        ingredients: ingredients,
        instructions: instructions,
        servings: servings,
        preparationTime: preparationTime,
        date: date
    }
}

// EXPORT the variables for use in the controller file.
export { createMocktail, retrieveMocktails, retrieveMocktailByID, updateMocktail, deleteMocktailById }