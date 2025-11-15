# Structure et Code

## Règles

### 224 - La date de publication ou de mise à jour des contenus est mise à disposition sous forme programmatique.

#### Objectif

- Fournir une date de publication aux moteurs de recherche et outils d’indexation.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Utiliser l'élément HTML  `time`  pour baliser les dates de publication et de mise à jour du contenu affichées sur le site, et son attribut  `datetime`  pour indiquer celles-ci au format standard requis par la spécification HTML5.

#### Contrôle

Vérifier que chaque date de publication ou de mise à jour du contenu affichée sur le site est balisée avec l'élément HTML `time` , doté d'un attribut  `datetime`  indiquant la date au format standard requis par la spécification HTML5.

### 225 - Le code source de chaque page contient une métadonnée qui définit le jeu de caractères.

#### Objectif

- Permettre un affichage hors ligne correct des pages en indiquant au navigateur quel est le jeu de caractères utilisé.

- Prévenir le risque de problèmes d’affichage de caractères lié à un fonctionnement parfois hasardeux des mécanismes de rattrapage des navigateurs quand ils ne disposent pas de l’information nécessaire via l’en-tête HTTP content-type.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

L’élément meta est renseigné en fonction de l’encodage effectif du document et de son type MIME sous la forme :

- `meta charset="utf-8"`  en HTML5

#### Contrôle

Ce critère peut être vérifié par l’examen du code source, à l’aide d'un outil de développement. Pour chaque page :

- Vérifier la présence de l’élément meta http-equiv="Content- Type" ou charset.

- Vérifier la pertinence du jeu de caractères indiqué dans son attribut content ou charset.

### 226 - Le codage de caractères utilisé est UTF-8.

#### Objectif

- Recourir à un jeu de caractères international.

- Prévenir les défauts d’affichage.

- Faciliter la manipulation des contenus par les utilisateurs et les développeurs.

#### Mise en œuvre

Configurer le serveur et les bases de données de manière à utiliser UTF-8.

Choisir des outils (logiciels de développement, frameworks, CMS, outils de production de contenu) compatibles avec UTF-8.

#### Contrôle

Cette vérification s’effectue en trois temps. Pour chaque page examinée :

- Vérifier l’indication du jeu de caractères donnée par l’en-tête HTTP content-type envoyée par le serveur, à l'aide d'un outil dédié.

- Vérifier, le cas échéant, la conformité à cet en-tête de l’élément meta http-equiv="Content-Type" dans le code HTML des pages.

- Vérifier que le contenu des pages est effectivement encodé en UTF-8 (absence de caractères inattendus ou erronés), par exemple en soumettant la page à une validation HTML auprès du validateur du W3C ([Validatpr W3C](https://validator.w3.org)).

L’outil [Internationalization Checker du W3C](https://validator.w3.org/i18n-checker/) permet de combiner ces trois étapes.

### 227 - Le contenu de chaque page est organisé selon une structure de titres et sous-titres hiérarchisée.

#### Objectif

- Permettre aux utilisateurs qui le souhaitent de visualiser la structure du contenu de la page et d’y naviguer.

- Permettre aux machines et aux outils d’indexation d’extraire le plan de chaque page.

- Améliorer le référencement en facilitant l’interprétation du contenu par les robots d’indexation.

#### Mise en œuvre

Structurer le document en titres et sous-titres à l’aide des éléments HTML h1 à h6.

Veiller à ce que la structure ne comporte pas de « trous » : un titre de niveau h2 ne doit pas être suivi d’un titre h4, h5 ou h6, par exemple.

Veiller à ce que chaque page comporte au moins un titre de niveau 1 avec l’élément h1.

**En savoir plus**:  
- [<h1>-<h6> : les éléments de titre de section](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)

#### Contrôle

Dans chaque page, contrôler successivement :

- la présence d’au moins un élément h1 correspondant au titre de la section principale du contenu de la page ;

- la présence de sous-titres h2 à h6 (si nécessaire) correspondant aux titres des sous-sections de contenu principal de la page ;

- l’absence d’interruption dans la succession descendante des titres h1 à h6, c’est-à-dire par exemple l’absence de titre h1 suivi d’un titre h3.

La vérification doit s’effectuer en tenant compte d’éventuels éléments de titres masqués à l’affichage ou bien de titres générés par JavaScript. On peut, à cet effet, utiliser la fonction d’affichage de la table des matières de la page disponible dans certains outils de développement.

### 228 - Les éléments visuellement présentés sous forme de liste sont balisés de façon appropriée dans le code source.

#### Objectif

- Permettre l’identification des listes par les navigateurs et les aides techniques et donc leur restitution appropriée afin de faciliter leur compréhension par les utilisateurs.

- Améliorer la sémantique du contenu des pages et sa réutilisabilité.

#### Mise en œuvre

Soit utiliser les éléments HTML appropriés :

- `ul, li`  pour les listes non ordonnées ;

- `ol, li` pour les listes ordonnées ;

- `dl, dt, dd`  pour les listes de définitions ou de descriptions.

Soit recourir aux attributs ARIA permettant de donner la sémantique d’une liste non ordonnée ou ordonnée à un contenu balisé de manière plus générique :

- donner au conteneur de la liste un attribut `role="list"`  ;

- donner à chaque élément de la liste un attribut  `role="listitem"`  ;

(il n’existe pas d’équivalent aux listes de définitions via un rôle ARIA).

**En savoir plus**:  
- [ul](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/ul)
- [ol](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/ol)
- [dl](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/dl)

#### Contrôle

Pour chaque page contenant une liste :

- Contrôler le code source des contenus présentés sous forme de liste (caractérisés par la présence de retours à la ligne et de marqueurs de listes tels que des puces ou des numéros) à l’aide d’un inspecteur de code.

- Vérifier si le code source de ces listes apparentes comporte bien les éléments HTML correspondant au type de liste concerné :  `ul, li`  pour une liste non ordonnée (liste à puces),  `ol, li`  pour une liste ordonnée (liste numérotée) et  `dl, dt, dd` npour une liste de définitions ou, à défaut, les rôles ARIA  `list`  et  `listitem`.

### 229 - Chaque identifiant HTML n'est utilisé qu'une seule fois par page.

#### Objectif

- Éviter les erreurs de restitution du contenu ou d’interaction via les scripts.

- Limiter les risques d’interprétation hasardeuse du Document Object Model (DOM) par des agents utilisateurs différents.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

La solution la plus radicale consiste à s’assurer de la validité complète du code source des pages, à l’aide d’un validateur tel que [The W3C Markup Validation Service](https://validator.w3.org/). Cette solution conduit cependant à tenir compte de l’ensemble des erreurs de validation du code source qui n’entrent pas dans le champ de cette bonne pratique. Pour s’en tenir au seul champ de cette bonne pratique, on veillera à éviter toute valeur dupliquée d’un attribut  `id`  dans une même page HTML.

**En savoir plus**:  
- [id](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Global_attributes/id)

#### Contrôle

Soumettre la page au validateur HTML du [W3C](https://validator.w3.org) ou un autre outil de validation de code et vérifier que chaque valeur d’attribut `id` est unique dans la page.

### 230 - Le site ne bloque pas la copie de contenu

#### Objectif

- Faciliter l'utilisation du contenu par les utilisateurs (traduction, référence, citation etc.)

- Laisser aux utilisateurs la maîtrise de leur navigateur.

#### Mise en œuvre

Ne pas utiliser JavaScript ou CSS, ou toute autre technique, pour bloquer la fonctionnalité "copier" du navigateur dans les pages du site.

#### Contrôle

Vérifier pour chaque page du site que la copie du contenu est possible à l'aide de la fonctionnalité courante du navigateur.

### 231 - Le site ne bloque pas l'accès au menu contextuel

#### Objectif

- Faciliter la navigation et l'accès aux fonctionnalités des outils de consultations.

- Laisser aux utilisateurs le contrôle de leurs menus et actions.

#### Mise en œuvre

Ne pas utiliser JavaScript ou toute autre technique, pour bloquer la fonctionnalité "menu contextuel" (clic droit) du navigateur dans les pages du site.

#### Contrôle

Vérifier pour chaque page du site que le menu contextuel du navigateur peut être ouvert à partir de l'ensemble des contenus affichés.

### 232 - Le site n'impose pas de redirection ou de rafraîchissement automatique côté client.

#### Objectif

Laisser à l’utilisateur le contrôle de son navigateur et de son interface de consultation

- Éviter des coupures ou des pertes d’information en cours de lecture, notamment pour les utilisateurs équipés de lecteurs d’écran qu’un rafraîchissement ou une redirection temporisée interromprait lors de la consultation.

- Ne pas pénaliser la consultation du contenu en mobilité lorsque la qualité du réseau est variable sur une courte échelle de temps.

- Permettre à l’utilisateur d’éviter un surcroît non désiré de coût d’utilisation des données mobiles.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

#### Mise en œuvre

Ne pas utiliser l’élément `meta http-equiv="refresh"` .

Fournir à l’utilisateur un moyen de désactiver les éventuels rafraîchissements automatiques et les redirections créées :

`- en JavaScript ;

- via un élément  `object`, `embed` ou `applet`  ;

- ou via un  `en-tête HTTP refresh` .


#### Contrôle

Pour chaque page examinée :

- Vérifier, à l’aide d’un inspecteur de code, l’absence de l’élément  `meta http-equiv="refresh"` .

- Vérifier que la consultation de la page ne révèle aucun rafraîchissement automatique ni aucune redirection côté client qui ne soient désactivables auparavant via l’interface du site (sans devoir faire appel à une éventuelle fonctionnalité propre au navigateur).

La détection de l’élément  `meta http-equiv="refresh"`  est aisée en observant le code source de la page. En revanche, la diversité des dispositifs JavaScript de rafraîchissement automatique impose de procéder également à un contrôle via la consultation de la page dans le navigateur. Ce contrôle peut être facilité si le navigateur offre une option interdisant certains de ces rafraîchissements et affiche alors un bandeau d’alerte. Mais seule l’observation de la page permet une détection à coup sûr.

### 233 - Le texte des documents PDF internes est sélectionnable.

#### Objectif

- Permettre le référencement des contenus des documents PDF.

- Faciliter la manipulation et la réutilisation du contenu des documents PDF (traduction, copier coller…).

- Garantir la lisibilité des contenus des documents PDF.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

#### Mise en œuvre

Ne pas diffuser de PDF issus de la numérisation de documents initiaux mais uniquement des documents convertis au format numérique (par OCR le cas échéant).

#### Contrôle

Pour chaque document PDF interne publié dans le site :

- Afficher ou ouvrir le document

- Vérifier que le texte affiché est immédiatement sélectionnable à l'écran ou bien qu'il peut être consulté dans un lecteur d'écran.

### 234 - Les documents PDF internes sont dotés d'une structure de titres.

#### Objectif

- Permettre aux utilisateurs d’accéder directement à différentes sections d’un document PDF.

- Fournir une structure de titres aux utilisateurs qui en ont besoin.

- Permettre la consultation d’un PDF via une aide technique.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Lorsque le document PDF est issu d’une suite bureautique telle que Word ou OpenOffice, il faut utiliser les styles et formatages proposés par le logiciel de manière à générer un PDF structuré, en appliquant les styles de texte tels que Titre 1, Titre 2, Titre 3 pour les différents niveaux de titre.Ces styles peuvent ensuite être modifiés pour les adapter à la présentation souhaitée. Enfin, l’option Exporter en PDF balisé ou tagué doit être activée au moment de l’export PDF. 

- Pour plus d’informations, consulter la rubrique accessibilité du site  [Adobe: Creative, marketing and document management solutions](https://www.adobe.com/home)

#### Contrôle

Pour chaque document PDF interne, vérifier la présence des éléments de structure de titre :

- à l’aide d’un outil d’inspection du code ;

- en ouvrant le document dans un lecteur PDF permettant d’afficher les signets ;

- ou en consultant le document dans un lecteur d’écran.

### 235 - Les fils de syndication sont détectables par les agents utilisateurs.

#### Objectif

- Permettre au navigateur d'indiquer dans son interface la présence d'un fil de syndication associé à la page en cours de consultation.

#### Mise en œuvre

Indiquer les fils RSS dans la section  `head`  de la page, à l'aide d'un élément  `link`  du type :

```html

<link title="La bonne pratique du jour" href="https://checklists.opquast.com/dailybp/feed" type="application/rss+xml" rel="alternate">

```

#### Contrôle

Dans le code source des pages du site :

- Identifier les différents fils de syndication ;

- Contrôler, par exemple à l'aide de Firebug, la présence de l'élément  `link`  approprié ( `type="application/rss+xml"` ) dans l'en-tête de la page HTML ;

- Vérifier que l'adresse URL présente dans l'élément `link` affiche bien un contenu RSS.

### 236 - Les cellules des tableaux de données sont reliées à leurs en-têtes.

#### Objectif

- Permettre aux aides techniques de restituer l'information contenue dans les tableaux de données de manière compréhensible, en indiquant à l'utilisateur les relations logiques entre contenu et en-têtes du tableau.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Utiliser l'élément HTML  `th`  et son attribut  `scope`  pour baliser les cellules d'en-têtes et expliciter leur portée ( `scope`  de valeur  `col`  pour un en-tête de colonne, de valeur  `row`  pour un en-tête de ligne).

Pour les en-têtes qui ne s'appliquent qu'à une partie d'une ligne ou d'une colonne, contrôler la présence systématique de l'attribut  `id`  pour l'élément  `th`  et de l'attribut  `headers`  pour les éléments  `td`  avec les valeurs appropriées :

- Donner à chaque en-tête (élément  `th` ) un attribut  `id`  (par exemple,  `id="foo"` ) ;

- Utiliser l'attribut  `headers`  dans chaque cellule (élément  `td` ) pour indiquer les en-têtes associées (par exemple,  `headers="foo"`  pour chaque cellule rattachée à l'en-tête ayant l'attribut  `id="foo"` ).


#### Contrôle

Dans le code généré des tableaux de données :

- Vérifier l'utilisation systématique de l'élément  `th`  pour baliser les en-têtes de ligne ou de colonne ;

- Pour les en-têtes s'appliquant à la totalité d'une ligne ou d'une colonne, contrôler la présence systématique de l'attribut  `scope`  doté de la valeur appropriée ( `row`  pour une ligne ou  `col`  pour une colonne) ;

- Pour les en-têtes qui ne s'appliquent qu'à une partie d'une ligne ou d'une colonne, contrôler la présence systématique de l'attribut  `id`  pour l'élément  `th`  et de l'attribut  `headers`  pour les éléments  `td`  avec les valeurs appropriées :

- Chaque en-tête (élément  `th` ) doit être dotée d'un attribut  `id`  (par exemple,  `id="foo"` ) ;

- L'attribut headers doit être utilisée dans chaque cellule (élément  `td` ) pour indiquer les en-têtes associées (par exemple,  `headers="foo"`  pour chaque cellule rattachée à l'en-tête ayant l'attribut  `id="foo"` ).

### 237 - Les titres des tableaux de données sont renseignés.

#### Objectif

- Permettre aux utilisateurs d'aides techniques (lecteurs d'écran) d'identifier aisément la nature des informations fournies par un tableau.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Utiliser et renseigner l'élément HTML  `caption`  pour chaque tableau de données.

Le cas échéant, recourir à un élément  `caption`  masqué à l'affichage.

#### Contrôle

Pour chaque tableau de données :

- Vérifier la présence de l'élément  `caption` . Si cet élément est masqué à l'affichage à l'aide d'une classe CSS, vérifier qu'il reste accessible pour les lecteurs d'écran ;

- Contrôler la pertinence de l'élément  `caption`  qui doit permettre d'identifier la nature des informations apportées par le tableau.

Cette vérification peut être partiellement automatisée pour ce qui est de la présence de l'élément de titre  `caption`  mais le contrôle de sa pertinence nécessite un examen manuel.

### 238 - La linéarisation des tableaux utilisés pour la mise en page ne nuit pas à la compréhension des contenus.

#### Objectif

- Fournir un contenu compréhensible aux utilisateurs dont l'agent utilisateur ou l'aide technique (lecteur d'écran) ne permet pas de restituer la mise en forme initialement prévue à l'aide d'un tableau.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Regrouper dans une même cellule  `td`  les informations qui doivent être verticalement associées (ne pas les répartir dans des cellules placées dans des lignes successives du tableau).

#### Contrôle

Pour chaque tableau de mise en forme, c'est-à-dire pour chaque tableau ne comportant pas de donnée reliée à des en-têtes de ligne ou de colonne :

- Procéder à la linéarisation de l'affichage à l'aide d'un outils de développement.

- Vérifier que le contenu linéarisé reste compréhensible, sans incohérence ni perte d'information.

### 239 - Les tableaux de données ne sont pas remplacés par des images.

#### Objectif

- Permettre aux utilisateurs d’accéder à des tableaux exploitables par leur agent utilisateur et restitués de manière compréhensible dans tous les cas.

- Améliorer l’accessibilité des contenus aux personnes handicapées. Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Utiliser systématiquement l’élément  `table`  et les éléments associés  `tr, td, th, caption`  pour baliser les tableaux de données, et non des images reproduisant le tableau.

#### Contrôle

S’assurer qu’aucun tableau de données n’est géré sous forme d’image.

### 240 - Les tableaux de données ne sont pas simulés à l'aide de texte mis en forme.

#### Objectif

- Permettre aux utilisateurs d'accéder à des tableaux exploitables par leur agent utilisateur et restitués de manière compréhensible dans tous les cas.

- Améliorer l’accessibilité des contenus aux personnes handicapées. Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Utiliser systématiquement l'élément  table  et les éléments associés  tr, td, th, caption , pour baliser les tableaux de données, et non des artifices reposant sur des accumulations d'espaces insécables ou de caractères graphiques tels que les pipes (lignes verticales « | »).


#### Contrôle

Pour chaque contenu affiché sous forme de tableau de données (c'est-à-dire associant des cellules de données à des en-têtes de ligne ou de colonnes) :

- S'assurer que celui-ci est balisé avec les éléments HTML  tr  (ligne),  td  (cellule de données),  th  (en-tête de ligne ou de colonne) et  caption  (titre du tableau), par exemple à l'aide d'un outil de développement.