require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/authMiddleware");
var cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

const users = [
  { id: 1, username: "user", password: "user", role: "user" },
  { id: 2, username: "admin", password: "admin", role: "admin" },
];

app.get("/", (req, res) => {
  res.send("Bienvenue sur le port 3000 !");
});

// TODO: Ajouter un middleware de redirection qui vérifie si l'utilisateur est authentifié, on le redirige vers /user dans ce cas
app.get("/login", (req, res) => {
  res.send(`
    <html>
      <body>
        <h2>Login</h2>
        <form action="/login" method="POST">
          <label for="username">Username:</label><br>
          <input type="text" id="username" name="username"><br>
          <label for="password">Password:</label><br>
          <input type="password" id="password" name="password"><br><br>
          <input type="submit" value="Submit">
        </form>
      </body>
    </html>
  `);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // TODO: Créer le token JWT
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    // TODO : et le stocker dans un cookie
    //'tokenCookie' est le nom du cookie
    res.cookie("tokenCookie", token, { httpOnly: true, secure: true }); // httpOnly:true indique que le cookie ne peut pas être accédé via js côté client
    // TODO: Rediriger l'utilisateur vers la route `/user`
    if (user.role === "user") {
      res.redirect("/user");
    } else if (user.role === "admin") {
      res.redirect("/admin");
    }
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// TODO: Ajouter un middleware pour l'authentification avec JWT
app.get("/user", authMiddleware, (req, res) => {
  res.json({ message: "Welcome, user!" });
});

// TODO: Ajouter un middleware pour l'authentification avec JWT
app.get("/admin", authMiddleware, (req, res) => {
  if (req.user.role === "admin") {
    res.json({ message: "Welcome, admin!" });
  } else {
    res.status(403).send("Access denied");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/* 
Sources pour compléter les TODO:
- Outil d'encodage décodage de JWT : https://jwt.io/
  - Vérification de la validité du JWT : https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
  - Stockage du JWT dans un cookie : https://www.npmjs.com/package/cookie-parser
*/
