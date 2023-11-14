const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');
const notesRouter = require('./notes');
// TODO: import your note route

const app = express();

app.use('/notes', tipsRouter);

// TODO: Initialize notes route

module.exports = app;