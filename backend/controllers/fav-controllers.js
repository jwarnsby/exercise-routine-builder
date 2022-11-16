// const FavModels = require('../models/schemas/favorite-schemas');

// exports.addFavoriteExercise = async (req, res, next) => {
//     try {
//         const newFav = new FavModels(req.body);
//         await newFav.save();
//         res.status(201).json(newFav);
//     } catch (err) {
//         console.error(err);
//         next(err)
//     }
// };