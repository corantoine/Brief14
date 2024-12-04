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
























// 1. **Récupérer le token dans les cookies et vérifier s'il est valide avec `jwt.verify`** :
//    - Utilisez `req.cookies` pour accéder aux cookies et récupérez le token.
//    - Utilisez `jwt.verify` pour vérifier la validité du token.

// 2. **Si le token est invalide, retourner une erreur 401** :
//    - Si la vérification échoue, renvoyez une réponse avec le statut 401 (Unauthorized).

// 3. **Si le token est valide, ajouter le contenu décodé du token dans `req.user`** :
//    - Si la vérification réussit, ajoutez le contenu décodé du token à `req.user` et appelez `next()` pour passer au middleware suivant.

// ### Code Complété

// ```javascript
// const jwt = require('jsonwebtoken');

// module.exports = function(req, res, next) {
//   // Récupérer le token dans les cookies
//   const token = req.cookies.token;

//   // Vérifier si le token existe
//   if (!token) {
//     return res.status(401).send("Access denied. No token provided.");
//   }

//   // Vérifier la validité du token
//   try {
//     const decoded = jwt.verify(token, 'votre_secret');
//     req.user = decoded;
//     next();
//   } catch (ex) {
//     res.status(401).send("Invalid token.");
//   }
// };
// ```

// ### Explications

// - **Récupération du Token** : `const token = req.cookies.token;` récupère le token JWT stocké dans le cookie nommé `token`.
// - **Vérification de l'Existence du Token** : Si le token n'existe pas, une réponse avec le statut 401 est renvoyée.
// - **Vérification de la Validité du Token** : `jwt.verify(token, 'votre_secret')` vérifie le token en utilisant la clé secrète. Si le token est valide, son contenu décodé est ajouté à `req.user`.
// - **Gestion des Erreurs** : Si la vérification échoue, une réponse avec le statut 401 est renvoyée.

// Avec ce middleware, vous pouvez sécuriser vos routes en vérifiant que les requêtes contiennent un token JWT valide. Si vous avez d'autres questions ou besoin de précisions supplémentaires, n'hésitez pas à demander ! 😊
