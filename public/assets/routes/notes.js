const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving notes information
notes.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/notes.json
});

// POST Route for a error logging
notes.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/notes.json file
});
// chatGPT helped with this block of code
readAndAppend(newNote, './db/notes.json', (err) => {
  if (err) {
    console.error(err);
    res.status(500).send('Error in adding note');
  } else {
    res.json('Note added successfully' );
  }
});




module.exports = notes;