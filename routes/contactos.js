var express = require("express");
var router = express.Router();
var db =require("../conf/database");

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { // Esto asume que estás usando algún método de autenticación que añade esta función al request
    return next();
  }
  res.redirect('/auth/login'); // Si no está autenticado, redirige al login
}

router.get('/', ensureAuthenticated, (req, res, next) => {
  const query = "SELECT * FROM contactos"; 

  db.all(query, [], (err, rows) => {
    console.log(rows)
    if (err) {
      return res.status(500).send(err.message);
    }
    res.render("contactos", {title: "Contactos", data: rows });
  });
});

module.exports = router;