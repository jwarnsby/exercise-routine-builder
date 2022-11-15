const express = require('express');
const router = express.Router();
const axios = require('axios');
const Exercises = require('../models/index');
const {getExercises, getExercisesId} = require('../controllers/exerciseController');

router.get('/', getExercises)
router.get('/id/:id', getExercisesId)



module.exports = router;

