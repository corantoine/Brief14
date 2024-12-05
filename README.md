# Brief 14 - Sécurisation d'une Application avec JWT

## Description

Ce brief a permis de mettre en pratique l'implémentation du JWT, mais en NodeJS.

# Commande pour lancer le projet

```bash
node to_complete/index.js
```

**--> Puis ouvrir un navigateur et aller à l'adresse http://localhost:3000/login**

## Installation

1. **Clôner le dépôt afin de récupérer le projet**

   ```bash
   git clone https://github.com/corantoine/Brief14.git

   ```

## Utilisation

- Effectuer un test en se connectant avec le profil **user**
- Vérifier l'accès à la route '/user' (ok)
- Vérifier l'accès à la route '/admin', le message suivant doit apparaître : "Access denied"
- Effectuer un test en se connectant avec le profil **admin**
- Vérifier l'accès aux routes '/admin' et '/user', les deux doivent fonctionner.

# Rassurer le client sur le niveau de sécurité de JWT.

**Client** : Je suis un peu inquiet au sujet de la sécurité des JWT. Comment puis-je être sûr qu'un pirate ne pourra pas générer un JWT avec un rôle admin sans connaître votre clé secrète ?

**Développeur** : Je comprends vos préoccupations. Laissez-moi vous expliquer comment cela fonctionne pour vous rassurer.

**Client** : D'accord, je vous écoute.

**Développeur** : Chaque JWT est signé avec une clé secrète, que nous stockons en toute sécurité dans un fichier `.env`. Cette clé est comme un mot de passe très complexe que seul notre serveur connaît.

**Client** : Et comment cette clé secrète protège-t-elle le JWT ?

**Développeur** : Lorsque nous créons un JWT, nous générons une signature en utilisant cette clé secrète et le contenu du token. Cette signature est unique pour chaque combinaison de contenu et de clé secrète.

**Client** : Que se passe-t-il si quelqu'un essaie de modifier le JWT, par exemple en ajoutant un rôle admin ?

**Développeur** : Si quelqu'un modifie le contenu du JWT, la signature ne correspondra plus. Quand notre serveur reçoit un JWT, il utilise la même clé secrète pour recalculer la signature à partir du contenu du token. Si la signature recalculée ne correspond pas à celle attachée au JWT, le serveur rejette le token comme invalide.

**Client** : Donc, sans la clé secrète, il est impossible de créer un JWT valide ?

**Développeur** : Exactement. Sans connaître la clé secrète, un pirate ne peut pas générer une signature valide pour un contenu modifié. Cela garantit que seules les informations authentiques et non modifiées sont acceptées par notre serveur.

**Client** : Je suis rassuré, merci pour l'explication !
