const dataMapper = require('../dataMapper');

const bookmarksController = {

  // méthode pour afficher les favoris
  
  bookmarksPage(req, res) {
      if(!req.session.bookmarks){
        req.session.bookmarks = []
      }

      res.render("favoris", { bookmarks: req.session.bookmarks });
  
  },

  async addFavoriteFigurine(req, res) {
    const figurineId = parseInt(req.params.id);

      if (!req.session.bookmarks) {
          req.session.bookmarks = [];
      }
      
      if(!req.session.bookmarks.find(figurine => figurine.id === figurineId)){

        const figurine = await dataMapper.getOneFigurine(figurineId);
        req.session.bookmarks.push(figurine);
        res.redirect('/bookmarks');
      }
      else{
        res.redirect('/bookmarks');
      }
    
    
},

  deleteFavoriteFigurine(req, res) {

  const figurineId = parseInt(req.params.id);
  console.log(figurineId);

  
  req.session.bookmarks = req.session.bookmarks.filter(figurine => figurine.id !== figurineId);
  console.log(req.session.bookmarks);
  

  res.redirect('/bookmarks');

}

};



module.exports = bookmarksController;
