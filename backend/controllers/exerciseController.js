const models = require('../models/index');

const getExercises = async (req, res) => {
  try {
    const exerciseList = await models.find({});
    res.status(200).json(exerciseList);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const getExercisesId = async (req, res) => {
  try {
    const exerciseList = await models.find({id: req.params.id});
    res.status(200).json(...exerciseList);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}



module.exports =  {getExercises, getExercisesId}; 