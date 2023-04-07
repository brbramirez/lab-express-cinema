const express = require('express');
const router = express.Router();
const movies = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
    const allMovies = await movies.find();
    console.log(allMovies);
    res.render('movies', {allMovies})
});
router.get('/movies-details/:id', async (req,res,next) => {
    const { id } = req.params;
    console.log(id);
    const movie = await movies.findById(id);
    res.render('movies-details', {movie});
})

// router.get("/movies-details/:id", async (req, res, next) => {
//     const { id } = req.params;
//     const movie = await movie.findById(id);
//     res.render('movies-details')
//   });

module.exports = router;
