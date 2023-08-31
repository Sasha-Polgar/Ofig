const express = require('express');
const router = express.Router();

// on importe nos controllers
const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');



// page d'accueil
router.get('/', mainController.homePage);

// page article
router.get('/article/:id', mainController.articlePage);

// page favoris
router.get('/bookmarks', bookmarksController.bookmarksPage );
router.get ('/bookmarks/add/:id', bookmarksController.addFavoriteFigurine);
router.get('/bookmarks/delete/:id', bookmarksController.deleteFavoriteFigurine);

// Middleware 404
router.use((req, res) => {
    res.status(404).render("404");
  });

// on exporte le router 
module.exports = router;