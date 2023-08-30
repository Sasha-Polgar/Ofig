// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();

const express = require('express');
const session = require('express-session');
// on importe le router
const router = require('./app/router');

// un peu de config
const PORT = process.env.PORT || 5000;


const app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { 

  }
}));

// Configure view engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));

// routage !
app.use(router);



// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
