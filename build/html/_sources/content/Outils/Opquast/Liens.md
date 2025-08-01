# Liens

## Règles

### 131 - Chaque lien est doté d'un intitulé dans le code source.

#### Objectif

- Éviter aux utilisateurs d'avoir uniquement une URL peu compréhensible en guise de libellé.

- Éviter les liens qui deviennent invisibles lorsque les styles CSS ou les images d'arrière-plan ne sont pas pris en compte.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Donner à chaque lien un libellé textuel (entre les balises ouvrantes et fermantes de l'élément  `a` ) ou, si nécessaire, via l'alternative textuelle d'un élément  `img`  ou  `object` , etc.

Ne pas masquer à l'affichage le libellé textuel de l'élément  `a`  pour le remplacer par un effet de style CSS (image d'arrière-plan).

En savoir plus: [<a> : l'élément d'ancre - HTML (HyperText Markup Language) | MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a)

##### Contrôle

La détection des liens vides nécessite l'examen du code généré afin de contrôler le contenu effectivement présent dans la balise  `a` , dans l'alternative de la balise  `img`  en cas d'image-lien ou encore dans l'alternative des éléments  `object`  et  `embed` , etc.

Dans chaque page examinée :

- Vérifier que chaque lien texte a un libellé affiché lorsque les styles CSS sont désactivés.

- Contrôler que chaque lien image a un libellé affiché lorsque les images sont désactivées ;

Dans le cas des liens HTML, il faut également vérifier que le libellé est affiché lorsque les couleurs seules sont désactivées.

### 132 - Le libellé de chaque lien décrit sa fonction ou la nature du contenu vers lequel il pointe.

### Objectif

- Permettre aux utilisateurs d'identifier précisément la nature du lien et d'éviter des actions erronées.

- Permettre aux outils d'indexation d'associer un libellé à une ressource.

- Permettre aux lecteurs d'écran d'en indiquer la cible de façon explicite et d'éviter de désorienter les utilisateurs.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Indiquer sans ambiguïté le contenu de la page cible du lien, la fonction du lien ou son comportement, le cas échéant, dans le libellé des liens (portion de texte située entre les balises `<a href="URL">` et `</a>` ou dans l'alternative textuelle de l'image placée entre ces balises, éventuellement combinée au libellé textuel).

#### Contrôle

Dans le code source de chaque lien texte ou image-lien

- Vérifier que le libellé du lien désigne explicitement la nature ou la fonction du contenu visé, ou encore la fonction spécifique du lien ;

- Contrôler, dans le cas d'images-liens, que l'attribut  `alt`  de l'image joue ce rôle.

### 133 - Les liens de même nature ont des couleurs, des formes et des comportements identiques sur toutes les pages.

#### Objectif

- Accélérer l'apprentissage du fonctionnement de l'interface.

- Améliorer l'identification des liens et de leurs fonctions respectives.

#### Mise en œuvre

Appliquer des propriétés communes de style, de couleur, de graisse, de casse, de soulignement aux ensembles de liens de même nature.

#### Contrôle

Dans l'ensemble du site :

- Vérifier que les liens de même nature (menus, liens au fil du texte, autres groupes de liens tels qu'un nuage de tags, etc.) ont des présentations visuellement similaires dans l'ensemble du site.

### 134 - Le soulignement est réservé aux liens.

#### Objectif

- Éviter les clics inutiles sur des contenus soulignés perçus comme des hyperliens.

- Faciliter l’identification des liens.

#### Mise en œuvre

Ne pas utiliser le soulignement pour des textes simples ou des éléments qui ne constituent pas des liens.

#### Contrôle

Dans chaque page contenant des contenus soulignés :

- Identifier les textes soulignés dans le site ;

- Contrôler la nature de ces contenus pour vérifier s'il s'agit effectivement d'hyperliens.


### 135 - Les liens sont visuellement différenciés du reste du contenu.

#### Objectif

- Permettre aux utilisateurs d’identifier facilement les liens au fil du texte ainsi que les blocs de navigation.

- Améliorer la visibilité et l’affordance des liens.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Les hyperliens peuvent être différenciés à l'aide des propriétés CSS de couleur de texte, de couleur d'arrière-plan, de soulignement, de mise en gras, de bordures, de police de caractères, etc.

#### Contrôle

Dans chaque page examinée :

- Identifier les liens présents au fil du texte ;

- Vérifier que ces liens se différencient visuellement du reste du texte au sein duquel ils se trouvent placés.

- Vérifier que les liens différenciés par la couleur présentent un ratio de contraste minimal de 3 avec le texte environnant et qu’ils sont identifiables au survol ou à la prise de focus clavier.

Cette vérification ne s'applique pas aux blocs de navigation dont la nature est par ailleurs évidente pour l'utilisateur (menus).

### 136 - Le site n'applique pas le même style aux liens visités et non visités.

#### Objectif

- Faciliter l'identification des contenus déjà visités.

- Faciliter l'identification des contenus restant à découvrir.

- Inciter à la découverte de nouveaux contenus

#### Mise en œuvre

En dehors des menus de navigation, ne pas appliquer les mêmes styles CSS par défaut pour les liens non visités (sélecteurs  `a`  ou  `a:link` ) et pour les liens visités (sélecteur `a:visited` ). Pour ce faire : soit prévoir un rendu spécifique pour les liens visités, soit ne pas indiquer de règle de rendu pour ceux-ci (le style par défaut du navigateur pourra alors s'appliquer sans difficulté).

**En savoir plus**:  
- [:visited - CSS](https://developer.mozilla.org/fr/docs/Web/CSS/:visited)
- [:link - CSS](https://developer.mozilla.org/fr/docs/Web/CSS/:link)

#### Contrôle

Dans chaque page contenant des hyperliens :

- Contrôler la présence et l'utilisation du sélecteur `:visited`  dans les feuilles de style CSS et l'utilisation d'un style différent de celui appliqué à  `a`  ou  `a:link`  ou bien ;

- Contrôler l'absence du sélecteur  `:visited`  dans les feuilles de style CSS pour laisser le style par défaut du navigateur s'appliquer

### 137 - Les liens internes et externes sont différenciés.

#### Objectif

- Avertir clairement l’internaute du fait qu’il va quitter le service en ligne qu’il est en train de visiter.

- Faciliter le repérage des liens externes.

#### Mise en œuvre

Il est possible d'ajouter l'information « lien externe » dans le libellé du lien (mention textuelle, icône HTML spécifique), dans l'attribut  `title`  du lien en y reprenant et en y complétant le libellé, via la mise en forme du lien (icône CSS) ou encore via le comportement du lien (ouverture dans une nouvelle fenêtre réservée aux liens externes, avec avertissement préalable).

#### Contrôle

Pour chaque page contenant des liens :

- Vérifier que les liens internes et externes sont différenciés par le moyen d'une mention textuelle, d'une icône ou d'un comportement qui leur est propre. La vérification s'effectue manuellement en contrôlant visuellement les liens.

### 138 - Les liens internes vers les contenus à accès limité sont différenciés

#### Objectif

- Éviter aux utilisateurs des clics inutiles et une perte de temps.

- Prévenir la déception des utilisateurs.

#### Mise en œuvre

Les liens internes vers des contenus dont l'accès nécessite une authentification peuvent être différenciés à l'aide de pictogrammes ou des propriétés CSS de couleur de texte, de couleur d'arrière-plan, de mise en gras, de bordures, de police de caractères, etc.

#### Contrôle

Dans chaque page examinée :

- Identifier les liens  internes vers des contenus dont l'accès nécessite une authentification.

- Vérifier que ces liens se différencient visuellement des autres liens internes.

### 139 - Les liens provoquant l'ouverture d'un logiciel externe ont un libellé explicite.

#### Objectif

- Éviter sur le poste client l'ouverture inopinée d'un autre logiciel que le navigateur Web.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Rédiger les libellés de liens concernés de manière à annoncer le comportement pour mieux l'anticiper. Par exemple, il est préférable de rédiger les liens  mailto  sous la forme « Envoyer un mail  » plutôt qu'un simple lien « Contact ».

#### Contrôle

Dans toutes les pages inspectées :

- Examiner le contenu pour y détecter les liens provoquant l'ouverture d'un logiciel externe (lien mail par exemple).

- Pour chaque lien concerné, vérifier que le libellé du lien est suffisamment explicite pour que l'utilisateur soit prévenu de son comportement particulier.


### 140 - Les numéros de téléphone sont activables via le protocole approprié.

#### Objectif

- Faciliter l’utilisation des numéros de téléphone, notamment sur les terminaux mobiles.

#### Mise en œuvre

Baliser les numéros de téléphone avec un lien  `a`  doté d’un attribut  `href`  du type  `href="tel:+xx x xx xx xx xx"` .

#### Contrôle

Vérifier, dans le code HTML généré, le balisage des numéros de téléphone sous la forme a  `href="tel:+xx x xx xx xx xx"`.

### 141 - L'utilisateur est averti des ouvertures de nouvelles fenêtres.

#### Objectif

- Permettre à l'utilisateur d'anticiper le résultat de l'activation d'un lien.

- Éviter aux utilisateurs d'aides techniques d'être désorientés par l'ouverture d'une nouvelle fenêtre qui n'est pas toujours perceptible et perturbe notamment l'utilisation de l'historique de navigation.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Ajouter une mention du type « (nouvelle fenêtre) », soit directement dans le libellé du lien, soit dans son attribut  `title`  qui doit alors reprendre et compléter le libellé.

Ajouter une mention du type « (nouvelle fenêtre) » dans les étiquettes de contrôle de formulaire, dans les libellés de boutons ou dans tout autre objet provoquant l'ouverture d'une nouvelle fenêtre.

#### Contrôle

Dans les pages inspectées :

- Identifier les liens et autres contrôles d'ouverture d'une nouvelle fenêtre, c'est-à-dire :

- Les usages de l'attribut  `target`  dans la source générée HTML ;

- Les usages de la fonctionnalité  `window.open`  via une recherche dans les fichiers Javascript et dans la source HTML ;

- Vérifier, pour chacun de ces liens, quelle que soit la technologie utilisée, la présence d'un avertissement explicite consultable avant toute action sur celui-ci.

### 142 - Le format des fichiers proposés en téléchargement est indiqué.

#### Objectif

- Permettre aux utilisateurs de savoir en temps utile si leurs outils les autorisent à consulter les fichiers proposés en téléchargement.

- Réduire la charge serveur en évitant les téléchargements inutiles.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre
Au minimum, prévoir une page d'aide indiquant le format des fichiers proposés s'il est unique.

Au mieux, indiquer le format pour chaque lien permettant de télécharger un fichier.

#### Contrôle

Pour chaque lien de téléchargement, vérifier qu'il est possible d'en connaître le format via :

- Une information générique donnée dans une page d'aide ;

- Une information donnée dans le contexte du lien : paragraphe ou élément de liste  `li`  où il est inclus, titre de section qui le précède, cellule d'en-tête de tableau associée à celle où il est présent ;

- L'attribut  `title`  du lien reprenant et complétant le libellé de celui-ci ;

- Une information donnée dans le libellé du lien ;

- Une icône dotée d'un texte alternatif indiquant le format du fichier.

### 143 - La taille des fichiers internes proposés en téléchargement est indiquée.

#### Objectif

- Informer de façon préventive les utilisateurs sur la quantité de données à télécharger.

- Permettre aux utilisateurs de différer le téléchargement en connexion bas débit ou mobile.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Au minimum, prévoir une page d'aide indiquant le poids moyen ou maximum pour l'ensemble des fichiers proposés.

Au mieux, indiquer le poids lors de chaque lien permettant de télécharger un fichier.

#### Contrôle

Pour chaque lien de téléchargement, vérifier qu'il est possible d'en connaître le poids :

- Via une information générique donnée dans une page d'aide ;

- Via une information donnée dans le contexte du lien : paragraphe ou élément de liste  `li`  où il est inclus, titre de section qui le précède, cellule d'en-tête de tableau associée à celle où il est présent ;

- Via l'attribut  `title`  du lien reprenant et complétant le libellé de celui-ci ;

- Ou via une information donnée dans le libellé du lien.

### 144 - La langue des fichiers en téléchargement est précisée lorsqu'elle diffère de celle de la page d'origine.

#### Objectif

- Éviter aux utilisateurs des téléchargements inutiles.

- Informer les utilisateurs du contenu des fichiers en téléchargement.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Indiquer la langue du contenu du document :

- Soit dans le libellé du lien ;

- Soit via l'attribut  `title`  du lien.

#### Contrôle

Pour chaque lien de téléchargement menant à un document rédigé dans une autre langue que celle de la page concerné, vérifier qu'il est possible de connaître la langue du fichier à télécharger :

- Via une information donnée dans le libellé du lien ;

- Via l'attribut  `title`  du lien reprenant et complétant le libellé de celui-ci ;

- Via une information donnée dans le contexte du lien : paragraphe ou élément de liste  `li`  où il est inclus, titre de section qui le précède, cellule d'en-tête de tableau associée à celle où il est présent ;

- Ou via une information générique donnée dans une page d'aide.

### 145 - Le nommage des fichiers internes proposés en téléchargement permet d'en identifier le contenu et la provenance.

 #### Objectif

- Améliorer l’identification des fichiers internes.

- Éviter les confusions pour l’utilisateur.

#### Mise en œuvre

Pour chaque fichier interne téléchargeable par l'utilisateur, utiliser un nom de fichier mentionnant explicitement le site ou le service de manière à permettre de l'identifier, ainsi que la nature du contenu (facture, contrat, etc).

#### Contrôle

Vérifier, pour chaque fichier interne qui peut être téléchargé par l'utilisateur, que le nom du fichier mentionne explicitement le site ou le service ainsi que la nature du contenu.

### 146 - Le site n'impose pas d'interdiction ou de restriction à la mise en place des liens entrants.

#### Objectif

- Faciliter le référencement à travers l'obtention de liens entrants.

- Augmenter la visibilité du site pour les utilisateurs.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Ne pas publier de conditions restreignant ou interdisant la mise en place dans des sites externes de liens pointant vers le site.

#### Contrôle

Dans les pages de type « mentions légales », dans les conditions générales d'utilisation ou dans la page dédiée aux crédits du site :

- Vérifier l'absence de conditions restreignant ou interdisant la mise en place dans d'autres sites de liens pointant vers le site.

### 147 - Tous les liens internes du site sont valides.

#### Objectif

- Éviter les erreurs 404 en cours de navigation.

- Faciliter un accès rapide à tous les contenus.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

S'assurer que l'outil utilisé pour la rédaction des contenus possède une gestion satisfaisante et cohérente des hyperliens internes.

Si ce n'est pas le cas, lancer régulièrement un contrôle de la validité de l'ensemble des liens du site.

#### Contrôle

Dans l'ensemble du site :

- Vérifier l'absence de liens internes menant à des erreurs de type 404.