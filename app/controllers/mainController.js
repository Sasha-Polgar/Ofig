const dataMapper = require('../dataMapper');

const mainController = {

  // méthode pour la page d'accueil
  async homePage (req, res){
    try{
      const allFigurines = await dataMapper.getAllFigurines();
      res.render("accueil", {allFigurines});
    }

    catch(err){
      console.error(err);
      res.status(500).render('500');
    }
  },

  // méthode pour la page article
  articlePage(req, res){
    
    res.render("article");
  }

};


module.exports = mainController;
