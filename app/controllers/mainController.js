const dataMapper = require('../dataMapper');

const mainController = {

  // méthode pour la page d'accueil
  async homePage (req, res){
    try{
      const figurines = await dataMapper.getAllFigurines();
      res.render("accueil", {figurines});
    }

    catch(err){
      console.error(err);
      res.status(500).render('500');
    }
  },

  // méthode pour la page article
  async articlePage(req, res){
    const articleId = parseInt(req.params.id);
    if (isNaN(articleId)) { return next();}


    try {
      const articles = await dataMapper.getOneFigurine(articleId);
      const reviews = await dataMapper.getReviews(articleId);
      res.render('article', {articles, reviews});
      
    }
    catch(err){
      console.error(err);
      res.status(500).render('500');
    }
  },

  async leftMenu(req, res, next){
    try{
      const categoryNumber = await dataMapper.getCategoryNumber();
      res.locals.leftMenu = categoryNumber;
      next();
    }
    catch{
      console.error(err);
      res.status(500).render('500');
    }
  },

  async categoryPage(req, res, next) {
    const category = req.params.category;
    const figurines = await dataMapper.getFigurinesByCategory(category);
    try {
      res.render('accueil', {figurines});
    }

    catch {
      console.error(err);
      res.status(500).render('500');
    }
  }

};


module.exports = mainController;
