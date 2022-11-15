'use strict';
const mongoose = require('mongoose');

const allExercises = mongoose.Schema({
  bodyPart: String,
  equipment: String,
  gifUrl: String,
  id: String,
  name: String,
  target: String
})

const Exercises = mongoose.model('allExercises', allExercises)

module.exports = Exercises;