const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function(req, res, next) {
  // Récupérer le token dans les cookies
  const token = req.cookies.tokenCookie;
  console.log(token);
  

  // Vérifier si le token existe
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  // Vérifier la validité du token
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(401).send("Invalid token.");
  }
};