# Contenus

## Règles

### 1 - Le site fournit aux utilisateurs la possibilité de connaître les nouveaux contenus ou services.

#### Objectif

- Permettre aux utilisateurs d'identifier immédiatement les nouveaux contenus ou services en ligne.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation.

#### Mise en œuvre

À titre d'exemple, les différentes solutions ci-dessous peuvent être déployées seules ou conjointement :

- Publier un flux RSS des actualités du site.

- Publier une rubrique du type « Actualités du site » ou « Quoi de neuf ? »

- Indiquer un compte de type Twitter, Facebook ou autre, où sont publiées les actualités concernant le site.

#### Contrôle

Dans l'ensemble du site, vérifier que les nouveaux contenus ou services sont accessibles par exemple grâce à un canal d'information interne au site (flux RSS des actualités, rubrique du type « Actualités du site », etc.) ou un canal externe lui-même accessible depuis le site (obligatoirement via sa page d'accueil) tel qu'un compte Twitter.

```{note}

Publier un flux RSS

```

### 2 - Les informations relatives aux droits de copie et de réutilisation sont disponibles depuis toutes les pages.

#### Objectif

- Informer les utilisateurs sur les conditions sous lesquelles sont publiés les contenus.

- Informer les utilisateurs sur les conditions de copie et de réutilisation.

#### Mise en œuvre

Indiquer les droits de copie et de réutilisation des divers éléments du site sur chaque page ou via un hyperlien pointant vers une page spécifique.

#### Contrôle

Dans chacune des pages évaluées, vérifier la présence de la mention complète des droits de copie et de réutilisation ou d'un lien donnant directement accès à la mention des droits de copie et de réutilisation.

```{note}

Mettre mention licence CC dans le footer

```

### 3 - Le code source de chaque page contient une métadonnée qui en décrit le contenu.

#### Objectif

- Permettre aux outils de recherche et d'indexation d'extraire des informations à propos du contenu des pages.

- Améliorer la restitution aux utilisateurs des résultats de recherche.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation.

#### Mise en œuvre

Renseigner la balise  `&lt;meta name="description" content="" /&gt;` , ou à défaut un élément spécifique ayant la même fonction, avec une description du contenu de la page ou du site.

#### Contrôle

Dans le code source de chaque page examinée :

- Vérifier la présence de la balise  `&lt;meta name="description" content="" /&gt;`  ou d'un équivalent à l'aide, par exemple, des outils de développement des navigateurs.

- Contrôler que le texte de cette balise décrit effectivement, de façon spécifique ou plus générique, le contenu de la page.

```{note}
Vérifier et mettre en place

```

### 4 - Les dates sont présentées dans des formats explicites.

#### Objectif

- Éviter aux utilisateurs les risques de méprise sur le sens d’une date.

- Faciliter la compréhension et la réutilisation des contenus concernés.

#### Mise en œuvre

- S’assurer que le mois est écrit en toutes lettres (« décembre ») ou en abrégé (« déc. »), mais pas au format numérique.

- Indiquer les 4 chiffres de l’année.

Cette exigence doit être prévue dans les systèmes de gestion de contenu où la datation est automatisée.

#### Contrôle

Identifier les pages comportant des dates, et pour chacune des dates trouvées :

- Vérifier que le mois n’est pas indiqué dans un format numérique, mais en lettre (complet ou abrégé).

- Vérifier que l’année est indiquée sur quatre chiffres et non deux.

Les dates à saisir par l’utilisateur final dans les formulaires ne sont pas concernées par cette bonne pratique : leur format, quel qu'il soit, est considéré comme suffisamment explicite, dès lors que la saisie s’effectue via un datepicker ou bien manuellement mais avec une indication du format attendu (du type "JJ/MM/AA").

### 5 - La première occurrence d'une abréviation ou d'un acronyme dans le corps de chaque page donne accès à sa signification.

#### Objectif

- Permettre à l’utilisateur d’accéder rapidement à la signification d’un sigle.

- Permettre l’exploitation du contenu par un robot (pour l’établissement d’un index des sigles).

- Favoriser le référencement du contenu.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

#### Mise en œuvre

Au moins lors de la première apparition d’un sigle, acronyme ou abréviation dans la page, il s’agira de veiller à recourir à au moins l’une des méthodes ci-dessous :

- Expliciter sa signification au sein même du texte, par exemple : « une DTD (déclaration de type de document) ».

- Fournir un lien donnant accès à sa signification dans une page de glossaire ou via un affichage dynamique (bulle d’aide JavaScript).

- Baliser avec l’élément HTML `abbr`  et renseigner l’attribut `title` de celui-ci pour indiquer sa signification.

La bonne pratique ne fait cette exigence que pour la première occurence dans la page : cela peut être fait ou non pour les suivantes.

#### Contrôle

Dans chaque page examinée, identifier visuellement chaque sigle, abréviation ou acronyme présent dans la page, puis vérifier, pour sa première occurence dans la page, la présence, au moins :

- de sa signification immédiatement indiquée dans le contexte, par exemple entre parenthèses.

- d’un lien sur le sigle donnant accès à sa signification, par exemple dans un glossaire.

- ou de l’élément `abbr` doté d’un attribut `title` explicitant sa signification.


### 6 - La date de publication des contenus qui le nécessitent est indiquée.

#### Objectif

- Permettre à l’utilisateur de remettre l’information en contexte.

- Prévenir la diffusion d’informations obsolètes.

- Renforcer la confiance dans les informations et faciliter les citations

#### Mise en œuvre

Associer à chaque contenu qui le nécessite (article, actualité, produit, etc.) sa date de publication affichée.

#### Contrôle

Vérifier que les contenus qui le nécessitent sont tous associés à une date de publication affichée.


### 7 - Un lexique ou un glossaire adapté au public visé explique le vocabulaire sectoriel ou technique.

#### Objectif

- Permettre aux utilisateurs de comprendre les contenus sectoriels ou à caractère technique.

- Faciliter l'utilisation d'un service.

- Améliorer le référencement sur des mots-clés ou expressions techniques.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Pour mettre en œuvre cette bonne pratique, il s'agira de fournir :

- Une section, une page ou une série de pages de glossaire explicitant le vocabulaire technique ou sectoriel utilisé dans le contenu du site. Ce glossaire devra être disponible directement depuis chaque page du site.

- Ou bien un mécanisme permettant à l'utilisateur d'accéder à la définition des termes du vocabulaire technique ou sectoriel, depuis au moins leur première occurrence dans chaque page du site.

#### Contrôle

Pour chaque page contenant du vocabulaire spécifique, contrôler qu'il est possible d'accéder :

- À une section jouant le rôle de glossaire dans chaque page concernée.

- À une page ou une série de pages de glossaire disponible via les menus de navigation.

- Ou directement à la définition des termes depuis au moins leur première occurrence dans chaque page du site via un lien ou un tooltip.


```{note}

Mise en place ok, a implémenter au fur et à mesure

```

### 8 - Les contenus publicitaires ou sponsorisés sont identifiés comme tels.

#### Objectif

- Permettre une identification immédiate des contenus publicitaires ou sponsorisés.

- Éviter les confusions entre contenus rédactionnels et publicitaires.

- Prévenir les risques associés aux conflits d'intérêt.

#### Mise en œuvre

- Signaler les publicités par une mention permettant de les identifier (publicité, pub, partenariats…).

- Et, dans la mesure du possible, séparer graphiquement la publicité du reste du contenu.

#### Contrôle

Au sein du site examiné :

- Identifier les contenus publicitaires.

- Vérifier que tous les espaces dédiés à la publicité se différencient du reste du contenu et comportent une mention permettant de les identifier sans ambiguïté : typiquement, la mention « publicité » affichée au dessus ou en dessous du contenu concerné.

```{note}

Ok, pas de pub

```

### 9 - Les conditions de modération des espaces publics sont indiquées.

#### Objectif

- Expliquer aux utilisateurs pour quelles raisons et dans quelle mesure leurs publications peuvent être modérées.

- Limiter le nombre de réclamations des utilisateurs ne voyant pas leur publication apparaître.

#### Mise en œuvre

Pour chaque espace public du site nécessitant modération  (zone de commentaire, forum etc.) : indiquer les conditions de modération des espaces publics, dans le contexte de ceux-ci, ou bien dans une page spécifique disponible depuis-ceux-ci.

#### Contrôle

Pour chaque espace public du site nécessitant modération (zone de commentaire, forum etc.) vérifier la présence des conditions de modération ou, à défaut, d'un lien vers une page spécifique ou une page générique telle que la page des mentions légales, la rubrique d'aide  où elles sont indiquées.

### 10 - Les contenus ou fichiers destinés à des espaces publics peuvent être vérifiés avant leur envoi définitif.

#### Objectif

- Permettre à l’utilisateur de vérifier sa saisie en contexte et, si nécessaire, de la corriger avant envoi.

- Diminuer le nombre de demandes de rectification ou de suppression.

#### Mise en œuvre

Mettre en place une prévisualisation des informations saisies avant la soumission définitive du formulaire, avec possibilité de les modifier.

#### Contrôle

Pour chaque espace public du site (zone de commentaire, forum, page personnelle publique, avatar, portfolio de documents, etc.) :

- Saisir des informations destinées à être rendues publiques telles que des images associées à un compte ou un commentaire.

- Vérifier que la soumission définitive du formulaire de saisie est précédée d'une étape permettant, si l'utilisateur le souhaite, de contrôler et de modifier le résultat de sa saisie avant publication.

### 11 - Les espaces publics proposent au moins un moyen de signaler les abus.

#### Objectif

- Faciliter le signalement de contenus illégaux ou inappropriés.

- Accélérer la détection de ces contenus.

- Limiter les risques de consultation de contenus illégaux ou inappropriés.

#### Mise en œuvre

Par exemple, faire figurer un lien « Signaler un abus » à proximité de chaque contenu publié par les internautes, qui mène vers un formulaire permettant de préciser les raisons du signalement. À défaut, indiquer l'adresse e-mail du modérateur.

#### Contrôle

Dans chaque espace public (zone de commentaire, forum etc.) ou à défaut, dans la page Contact ou celle des Mentions légales où figureraient les conditions de modération : vérifier qu'il existe une procédure permettant de signaler directement un abus.

### 12 - Chaque graphique est accompagné de ses données numériques.

#### Objectif

- Permettre ou améliorer la compréhension du graphique.

- Faciliter le partage des données.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

- Afficher de manière structurée, dans le contexte immédiat du graphique, toutes les données numériques qu’il représente, par exemple sous forme de tableau de données.

- Ou fournir dans le le contexte immédiat du graphique un lien vers un contenu du même type.

#### Contrôle

Vérifier la présence, pour chaque graphique, d’un contenu structuré indiquant toutes les données numériques qu'il représente, ou d’un lien vers une page fournissant celles-ci.

```{note}

Insérer une caption avec une description du graphique

```

### 13 - La page des résultats de recherche indique le nombre de résultats, le nombre de pages de résultats, et le nombre de résultats par page.

#### Objectif

- Permettre aux utilisateurs d'avoir l'ensemble des informations essentielles relatives à la recherche qu'ils ont effectuée.

#### Mise en œuvre

- Le nombre global de résultats est généralement annoncé et rappelé dans le titre de chaque page de résultats (par exemple : 246 résultats correspondent à votre requête « Exemple »).

- Le nombre de pages de résultats est généralement indiqué dans le menu de navigation entre les pages de résultats.

- Le nombre de résultats par page est généralement indiqué avant la liste des résultats.

#### Contrôle
Via le moteur de recherche du site examiné :

- Effectuer une ou plusieurs requêtes sur le ou les formulaire(s) de recherche (en fonction de la configuration des résultats, il peut être nécessaire de tester des requêtes ayant successivement un nombre réduit de résultat, un nombre important et aucun résultat) ;

- Vérifier, dans chaque page de résultats, la présence du nombre global de résultats ;

- Contrôler, en cas de résultats paginés, que le nombre total de pages de résultats et le nombre de résultats par page sont présents dans chaque page de résultats.





