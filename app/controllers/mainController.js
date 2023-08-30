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
  async articlePage(req, res){
    const articleId = parseInt(req.params.id);
    if (isNaN(articleId)) { return next(); /* 404 */ }


    try {
      const articles = await dataMapper.getOneFigurine(articleId);
      console.log(articles);
      res.render('article', {articles});
      
    }
    catch(err){
      console.error(err);
      res.status(500).render('500');
    }
  }

};


module.exports = mainController;
