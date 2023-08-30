const path = require('path');

const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: (request, response) => {
    const filePath = path.resolve(__dirname + '/../../integration/favoris.html');
    response.sendFile(filePath);
  },

  async bookmarksFavoritePage (req, res) {
    
  }

};


module.exports = bookmarksController;
