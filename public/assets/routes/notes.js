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

module.exports = notes;