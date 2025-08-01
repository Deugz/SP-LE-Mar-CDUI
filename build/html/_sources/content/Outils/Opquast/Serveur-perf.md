# Serveur et Performance

## Règles

### 211 - L'adresse du site fonctionne avec et sans préfixe www.

#### Objectif

- Permettre aux utilisateurs de rejoindre la page d'accueil du site même lorsqu'ils oublient de taper le préfixe www.

- Diminuer l'impact énergétique lié à la consultation du site

#### Mise en œuvre

Configurer le serveur de façon à ce qu'il gère les adresses sans www (acheminement).

#### Contrôle

Sur quelques unes des pages examinées :

- Enlever le préfixe «www» dans l'adresse de la page, au sein de la barre d'URL de votre navigateur ;

- Vérifier que vous avez toujours accès au site.

Attention : certains navigateurs masquent par défaut le préfixe www. Le test devra donc se faire en ajoutant http:// ou https://devant l'adresse tout en omettant le préfixe

### 212 - La racine du site contient des instructions pour les robots d'indexation.

#### Objectif

- Permettre un référencement ciblé.

- Améliorer le guidage des outils de recherche.

- Diminuer l'impact énergétique lié à la consultation du site.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Pour définir les répertoires, fichiers ou types de fichiers non indexables, utiliser les instructions  `user-agent`  et  `disallow`  dans un fichier texte unique appelé  `robots.txt` , placé dans le répertoire racine du site.

Alternativement, pour agir au niveau d'une page spécifique, utiliser dans celle-ci la balise  `meta name="robots" content="attribut1, attribut2"`:

- attribut1 peut prendre les valeurs  `index`  (indexer cette page) ou  `noindex`  (ne pas indexer cette page) ;

- attribut2 peut prendre les valeurs  `follow`  (suivre les liens contenus dans cette page) ou  `nofollow`  (ne pas suivre les liens).

**En savoir plus**:
- [<meta> : l'élément de métadonnées du document](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/meta)


#### Contrôle

À partir de l'adresse URL de votre site :

- Accéder tout d'abord à l'adresse du fichier robots.txt, à la racine du site, en tapant par exemple http://example.com/robots.txt dans la barre d'adresse du navigateur ;

- Vérifier la présence du fichier  `robots.txt`  placé dans le répertoire racine du site ;

- Vérifier la validité de la syntaxe du fichier  `robots.txt`  à l'aide des indications données par les moteurs de recherche

En l'absence de fichier  `robots.txt`  vérifier la présence et la validité de la balise  `meta name="robots" content="attribut1, attribut2"`  dans chaque page.

### 213 - Le site propose un fichier sitemap indiquant les contenus à explorer.

#### Objectif

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation.

- Diminuer l'impact énergétique lié à la consultation du site.

#### Mise en œuvre

Créer un fichier  `sitemap.xml`  contenant la liste des pages du site à la racine du site. À défaut de respecter le format XML, une simple liste d'URL est acceptée par les moteurs.

#### Contrôle

Via l'adresse url du site examiné :

- Vérifier qu'un fichier  `sitemap.xml`  existe à la racine du site, en y accédant directement dans le navigateur avec une URL du type http://example.com/sitemap.xml ;

- À défaut, consulter le fichier `robots.txt`  pour y rechercher une URL spécifique mentionnée sous la forme  `sitemap: http://example.com/adresse/du/fichier.xml` .

### 214 - Le serveur ne force pas la redirection vers la version ou l'application mobile.

#### Objectif

- Laisser le choix à l’utilisateur de la version ayant ses préférences.

- Améliorer la compatibilité avec les terminaux mobiles

#### Mise en œuvre

Ne pas rediriger côté serveur vers la version mobile (en dynamic serving ou en cas de version mobile dédiée) sans possibilité pour l’utilisateur de désactiver cette redirection.

#### Contrôle

Contrôler manuellement qu’il est possible d’accéder à la version desktop depuis un périphérique mobile.

### 215 - Le serveur envoie un code HTTP 404 pour les ressources non trouvées.

#### Objectif

- Permettre la détection automatisée des URL erronées.

- Transmettre au navigateur une information sûre.

- Diminuer l'impact énergétique lié à la consultation du site.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Modifier la configuration du serveur web pour renvoyer l'utilisateur vers une page personnalisée lorsque la ressource demandée n'existe pas.

Si la configuration principale du serveur n'est pas directement accessible et si l'environnement le permet, utiliser une configuration locale par répertoire. Par exemple, l'environnement Apache autorise la création d'un fichier  `.htaccess`  contenant des directives relatives aux traitements des erreurs :  `ErrorDocument 404 /mapage.html`.

#### Contrôle

Pour chaque site examiné :

- Taper l'adresse URL du site suivie de caractères aléatoires (du type http://www.example.com/lsghlshdgkjsdgk).

- Vérifier à l'aide d'un outil de développement que le statut indiqué est bien  `404 not found`.

### 216 - Le serveur envoie une page d'erreur 404 personnalisée.

#### Objectif

- Informer l'utilisateur sur l'erreur rencontrée, sur la continuité de fonctionnement du serveur

- Lever le doute sur un éventuel problème lié à sa connexion.

#### Mise en œuvre

Modifier la configuration du serveur web pour renvoyer l'utilisateur vers une page personnalisée lorsque la ressource demandée n'existe pas.

Si la configuration principale du serveur n'est pas directement accessible et si l'environnement le permet, utiliser une configuration locale par répertoire. Par exemple, l'environnement Apache autorise la création d'un fichier  `.htaccess`  contenant des directives relatives aux traitements des erreurs :  `ErrorDocument 404 /mapage404.html` .

#### Contrôle

À partir de n'importe quelle adresse url du site examiné :

- Modifier l'adresse URL afin d'obtenir une erreur 404, par exemple, en ajoutant une série caractères aléatoires en fin d'adresse tel que : https://www.exemple.com/dbvdjb

- Vérifier que la page retournée correspond à une page personnalisée, cohérente avec le reste du site, et non pas à la page 404 envoyée par défaut par le serveur (Apache, IIS, Nginx) ;

- Dans le cas de l'utilisation d'un CMS, ce dernier peut vous faire croire qu'il ne renvoie pas la page 404 par défaut, il faudra donc effectuer la même vérification via l'adresse URL d'une image ou d'un fichier CSS ou encore JS pour valider définitivement cette bonne pratique.

### 217 - Le serveur envoie une page d'interdiction 403 personnalisée.

#### Objectif

- Rassurer l'internaute sur le fait qu'il est toujours dans le même site.

- Permettre à l'administrateur du site de mettre des éléments de guidage pour l'utilisateur.

- Informer l'utilisateur sur l'erreur rencontrée, sur la continuité de fonctionnement du serveur et mettre hors de cause sa connexion.

#### Mise en œuvre

Modifier la configuration du serveur web pour renvoyer l'utilisateur vers une page personnalisée lorsque l'accès à la ressource demandée n'est pas autorisé.

Si la configuration principale du serveur n'est pas directement accessible et si l'environnement le permet, utiliser une configuration locale par répertoire. Par exemple, l'environnement Apache autorise la création d'un fichier  `.htaccess`  contenant des directives relatives aux traitements des erreurs :  `ErrorDocument 403 /mapage403.html` .

#### Contrôle

Pour chaque site audité :

- Obtenir une page d'erreur 403, pour cela, vous pouvez retirer la dernière partie de l'adresse url d'une des images du site pour ne garder que le nom des répertoires présents entre les slashs de cette adresse, par exemple : https://www.exemple/com/img/. La page affichée devrait alors être une page d'erreur 403.

- Vérifier que la page retournée ne correspond pas à la page 403 renvoyée par défaut par le serveur (Apache, IIS, Nginx) mais bien à une page d'erreur personnalisée, dont le graphisme est cohérent avec l'ensemble du site.

### 218 - Le menu principal de navigation figure sur les pages d'erreur personnalisées.

#### Objectif

- Éviter aux utilisateurs les ruptures de navigation, l'arrivée sur des pages cul-de-sac ou l'obligation d'utiliser le bouton Précédent du navigateur.

#### Mise en œuvre

La page d'erreur 404 reprend soit de façon dynamique soit de façon statique l'ensemble de la navigation principale du site.

#### Contrôle

Pour chaque site examinée:

- Modifier l'adresse URL afin d'obtenir une page d'erreur 404, par exemple, en ajoutant une série de trois ou quatre caractères aléatoires en fin d'adresse tel que : https://www.exemple.com/dbvdjb.

- Valider que la page retournée contient les éléments du menu principal de navigation.

### 219 - Le serveur transmet des contenus compressés aux clients qui les acceptent.

#### Objectif

- Améliorer la vitesse de rendu de la page.

- Diminuer les coûts de bande passante.

- Diminuer l'impact énergétique lié à la consultation du site

#### Mise en œuvre

Activer le module Gzip ou Deflate du serveur pour compresser les ressources Javascript, CSS et HTML.

#### Contrôle

Pour chaque page examinée :

- Vérifier la compression des contenus (Gzip) à l'aide d'un outil dédié.

Attention à bien vérifier tous les éléments liés (CSS, JS, HTML) et pas seulement la page en elle-même. Les formats déjà compressés comme les images JPEG ou PNG ou les archives zip, par exemple, ne doivent pas être recompressés.

Si la taille avant compression d'un élément est inférieure à 1 Ko, il n'est pas nécessaire de le compresser, au risque de voir son poids augmenter.

### 220 - Le serveur envoie les informations permettant la mise en cache des contenus.

#### Objectif

- Accélérer l'affichage des contenus et permettre une navigation plus fluide.

- Réduire les coûts de bande passante.

#### Mise en œuvre

Configurer le serveur web pour qu’il puisse gérer la mise en cache des éléments statiques et gérer – au niveau applicatif – la possible mise en cache des éléments dynamiques.

En pratique, et en accord avec les spécifications HTTP, le serveur devra envoyer les en-têtes etag, date et last-modified correspondant, respectivement, à l’identifiant de la ressource, à la date de traitement de la requête et à la date de dernière modification de la ressource demandée. L’ensemble des dates est au format GMT. Ces informations peuvent être complétées par les champs content-length et expires si la taille en octets et la date d’expiration exacte du contenu sont connues.

Afin d’informer les proxys et les clients finaux sur le comportement à adopter vis-à-vis des contenus mis en cache, les auteurs devront utiliser l’en-tête HTTP cache-control en accord avec les délais de réactualisation nécessaires et le caractère privé de la diffusion.

La possible mise en cache pourra être ainsi finalisée par la soumission d’un message 304 Not Modified (sans la ressource demandée dans le corps de la requête) lorsque le serveur recevra un en-tête if-modified-since contenant une date antérieure à la date de modification de ladite ressource.

#### Contrôle

Pour chaque page : vérifier la possible mise en cache des éléments de la page à l’aide d’un outil dédié (outils de développement, service en ligne, etc.) Attention à bien vérifier tous les éléments liés (CSS, JS, images) et pas seulement la page en elle-même.

### 221 - Les en-têtes envoyés par le serveur contiennent les informations relatives au jeu de caractères employé.

#### Objectif

- Permettre au navigateur de choisir le bon encodage des caractères pour afficher la page.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Le paramètre  `charset`  de l'en-tête HTTP content-type est renseigné sous la forme :  `Content-Type: text/html; charset=utf-8`  (utf-8 étant ici un exemple), en fonction du jeu de caractères effectivement utilisé par le document et de son type MIME.

#### Contrôle

Pour chaque page examinée :

- Vérifier la présence du  `charset`  dans le champ content-type renvoyé par le serveur avec un outil dédié ;

- Vérifier que le jeu de caractères déclaré correspond effectivement au jeu de caractères utilisé par le document. En présence de caractères non corrects à la place des accents ou autres, la bonne pratique sera certainement invalidée.

### 222 - Les feuilles de style du site sont minifiées.

#### Objectif

- Minimiser la quantité de données à télécharger par l'utilisateur.

- Améliorer les performances.

- Diminuer l'impact énergétique lié à la consultation du site

#### Mise en œuvre

Supprimer les espaces non nécessaires et les commentaires dans les fichiers CSS en recourant à des outils dédiés.

#### Contrôle

Pour l'ensemble du site

- Vérifier manuellement au sein de tous les fichiers CSS qu'aucun retour ligne, commentaire, indentation ou saut de ligne n'est présent.

- Ou identifier la liste des fichiers CSS non minifiés à l'aide d'outils de développement (navigateurs, outils en ligne, etc.)

### 223 - Les scripts du site sont minifiés.

#### Objectif

- Accélérer la vitesse d'affichage des pages.

- Améliorer les performances.

- Diminuer la quantité de données à télécharger.

- Diminuer l'impact énergétique lié à la consultation du site

#### Mise en œuvre

Supprimer les espaces non nécessaires ainsi que les commentaires dans les fichiers Javascript, en recourant à des outils dédiés.

#### Contrôle

Pour l'ensemble du site :

- Vérifier manuellement au sein de tous les fichiers Javascript qu'aucun retour ligne, indentation ou saut de ligne n'est présent.

- Ou identifier la liste des scripts Javascript non minifiés à l'aide d'outils de développement (navigateurs, outils en ligne, etc.).



