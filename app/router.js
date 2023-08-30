const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');


const router = express.Router();

// page d'accueil
router.get('/', mainController.homePage);

// page article
router.get('/article', mainController.articlePage);

// page favoris
router.get('/bookmarks', bookmarksController.bookmarksPage );

// Middleware 404
router.use((req, res) => {
    res.status(404).render("404");
  });

// on exporte le router 
module.exports = router;