const { Exercises } = require('./index');

const getAll = async () => {
  return await Exercises.find({});
};

module.exports == { getAll };