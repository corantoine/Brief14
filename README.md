# Commande pour lancer le projet
node to_complete/index.js

puis se connecter sur localhost:8080


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

**Développeur** : Avec plaisir !
