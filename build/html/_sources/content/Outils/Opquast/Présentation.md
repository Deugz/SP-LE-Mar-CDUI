# Présentation

## Règles

### 175 - La charte graphique est cohérente sur l'ensemble du site.

#### Objectif

- Permettre une homogénéité et une continuité dans la visite et la navigation.

- Permettre une identification permanente du service en ligne visité.

#### Mise en œuvre

Utiliser des feuilles de styles communes à tout le site, ce qui par rebond améliore la cohérence globale de tout le site.

#### Contrôle

Au fil des contrôles de bonnes pratiques :

- S'assurer que le site utilise des éléments graphiques communs à toutes les pages, en portant notamment une attention particulière à la présence et à l'emplacement des menus de navigation, à la couleur des sections du site, à la largeur des pages et à la cohérence de la charte graphique globale utilisée pour les titres et pour les textes.

La vérification peut également être menée en amont du projet, lors de la conception des maquettes graphiques, ou en aval du projet lors de l'intégration finale pour vérifier l'absence d'une dégradation de cette homogénéité graphique due, par exemple, à la mise en place de services tiers.

### 176 - L'information n'est pas véhiculée uniquement par la couleur.

#### Objectif

- Permettre l’accès à l’information pour les utilisateurs dont le navigateur, la plate-forme, l’aide technique ou encore le handicap (comme le daltonisme) ne permettent pas de visualiser ou de différencier les couleurs.

- Rendre l’information accessible aux robots d’indexation.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Fournir un complément à la couleur pour véhiculer l’information qu’elle porte. Ce complément, indépendant de la couche de mise en forme CSS, peut être de plusieurs ordres :

- prévoir un balisage sémantique (strong, em, etc.) ;

- ajouter des mentions textuelles (astérisque signalant un champ obligatoire) ;

- ajouter des hachures, motifs, bordures, etc. dans les cartes et les graphiques.

#### Contrôle

La vérification nécessite de comparer visuellement deux versions de la page : la version normale et une version où les couleurs seront désactivées. Elle est donc plus aisée à mener avec un double écran. Pour chaque page examinée :

- Désactiver le support de la couleur via votre barre d’outils de test puis passer les images en niveau de gris.

- Vérifier par comparaison si la version sans couleurs présente des pertes d’information. Ce sera par exemple le cas dans un menu de navigation où la rubrique en cours ne se différencie que par sa couleur, ou encore dans une carte dont les zones sont de simples aplats de couleur sans bordure ni motifs.

```{warning}

l’information peut parfois être présente indépendamment de la couleur dans un attribut title, provoquant l’apparition d’une infobulle au survol du contenu. L’accès à l’infobulle depuis le clavier n’étant à ce jour pas possible par défaut dans tous les navigateurs, cette solution doit être écartée.

```

### 177 - Les contenus sont présentés avec un contraste suffisant par rapport à leur arrière-plan.

### Objectif

- Permettre une bonne lisibilité des contenus.

- Limiter la charge mentale lors de la consultation.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Veiller à conserver un ratio de contraste minimal de 3:1 entre le texte et son arrière-plan, tel qu'il peut être mesuré via l'algorithme WCAG2.0.

#### Contrôle

Dans l'ensemble des pages :

- Repérer les contenus dont la différence de contraste/luminosité avec leur arrière-plan est potentiellement insuffisante

- Utiliser un outil du type Colour Contrast Analyzer pour calculer le ratio de contraste : cliquer sur Luminosité et relever la couleur du premier plan puis celle du second plan dans les champs dédiés ;

- Vérifier que le ratio de contraste relevé est supérieur ou égal à 3:1

Dans le cas de textes placés sur un arrière-plan en dégradé, en motif ou photographique, la mesure de couleur de l'arrière-plan est prise au point le plus défavorable jouxtant le texte (pour un texte noir, le pixel le plus sombre). Il est conseillé de tenir également compte de l'agrandissement éventuel de la taille de caractère par l'utilisateur (Zoom texte seulement), qui peut entraîner un changement dans la superposition texte/arrière-plan.

### 178 - Le contenu et le sens de chaque page ne sont pas altérés lorsque les styles sont désactivés.

#### Objectif

- Permettre la compréhension des contenus par les utilisateurs dont le navigateur n'appliquera pas les feuilles de styles du site ou dont le mode d'accès n'est pas visuel.

- Séparer rigoureusement les contenus de la présentation pour améliorer leur interopérabilité.

- Favoriser le référencement du contenu.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Dans l’usage de CSS (y compris via JavaScript), veiller à conserver la cohérence des contenus pour les présenter dans le même ordre avec ou sans mise en forme CSS. On évitera ainsi de se retrouver, par exemple, avec un menu coupé en deux si les feuilles de styles sont désactivées.

#### Contrôle

Comparer visuellement les pages avec et sans application des styles CSS. L’opération nécessite de recourir, pour chaque page, à l’ensemble de ces méthodes :

- Désactiver les styles CSS dans le navigateur ;

- Vérifier l’absence de perte d’informations dont la cause peut alors être confirmée en examinant les styles appliqués à l’élément concerné à l’aide d’un inspecteur de code.

- Vérifier que les contenus restent lisibles, par exemple dans le cas d’une image HTML transparente dont la lisibilité dépendra de la couleur d’arrière-plan appliquée avec la propriété background-color.

- Vérifier la cohérence du contenu affiché sans CSS, qui doit rester logiquement organisé et parfaitement compréhensible. Par exemple, un organigramme constitué de différents blocs de texte mis en forme via des propriétés CSS de positionnement pourra apparaitre comme une succession de blocs de texte dénuée de sens en l’absence de CSS.

### 179 - Un contenu n'est pas désigné uniquement par sa forme ou par sa position à l'écran.

#### Objectif

- Permettre la compréhension de l'information sans l'accès au support visuel ou lorsque le rendu de celui-ci est altéré.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Lorsqu'un contenu est désigné par une référence à sa forme ou à sa position à l'écran, l'information doit être également disponible par un autre moyen (balisage, mention textuelle, etc.).

#### Contrôle

Cette vérification concerne une large variété de cas potentiels, par exemple dans une page d'aide où il est fait référence à des captures d'écran ou encore dans le fil d'un texte où il est fait référence à une illustration ou à un tableau. Pour chaque contenu où il est nécessaire d'avoir accès à l'affichage graphique de la page afin de retrouver le contenu ainsi désigné :

- S'assurer que les références à la forme ou à la position à l'écran d'un contenu ne sont pas le seul moyen d'identifier celui-ci.

Les moyens complémentaires peuvent être la référence explicite à un identifiant (exemple « Voir la figure n°1 »), un lien vers une ancre, etc.

### 180 - Un contenu qui doit être restitué dans un lecteur d'écran ne lui est pas dissimulé.

#### Objectif

- Faciliter l’adaptation du rendu au media (mobile ou autre) ou aux besoins de l’utilisateur (agrandissement de la taille des caractères, modification des couleurs, de la police, de la graisse, de la justification, etc.).

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Sauf si le contenu concerné est destiné à être rendu visible et perceptible sur action de l’utilisateur (onglets, menus déroulants, etc.) :

- Ne pas utiliser les propriétés display et visibility pour masquer le contenu.

- Ne pas utiliser l’attribut HTML hidden pour masquer le contenu.

- Ne pas donner au contenu un attribut ARIA aria-hidden="true".

- Ne pas utiliser le paramètre wmode d’un objet Flash avec les valeurs transparent ou opaque.

Utiliser :

- les propriétés CSS permettant de positionner le contenu en dehors de la zone d’affichage du navigateur (position, text- indent) ou de le rogner (clip) ;

- les propriétés ARIA permettant d’associer un libellé à un contenu (aria-label, aria-labelledby, aria-describedby) ;

- ou, dans le cas d’une étiquette de champ de formulaire, l’attribut title de celui-ci.

**En savoir plus**:  

- [display](https://developer.mozilla.org/fr/docs/Web/CSS/display)
- [visibility](https://developer.mozilla.org/fr/docs/Web/CSS/visibility)

#### Contrôle

Dans le code généré et dans les feuilles de styles CSS des pages examinées :

- Détecter, à l’aide d’un inspecteur de code, des contenus qui seraient masqués à l’affichage (en dehors de ceux destinés à être rendus visibles sur action de l’utilisateur).

- Vérifier qu’aucun de ces contenus n’utilise les techniques indiquées dans la mise en œuvre s’ils sont destinés à être restitués dans un lecteur d’écran.

### 181 - La taille des éléments cliquables est suffisante.

#### Objectif

- Permettre à l’utilisateur de cliquer sur les éléments interactifs. Limiter les fausses manipulations et les manipulations inutiles.

- Améliorer la compatibilité avec les terminaux mobiles.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

#### Mise en œuvre

Donner à chaque élément cliquable (boutons, liens) une taille par défaut d'au moins 44 par 44 pixels.

#### Contrôle

vérifier que la taille par défaut de chaque élément cliquable (boutons, liens) est au moins de 44 par 44 pixels.

### 182 - Les textes pouvant être mis en forme via des styles ne sont pas remplacés par des images.

#### Objectif

- Faciliter l’adaptation du rendu au media (mobile ou autre) ou aux besoins de l’utilisateur (agrandissement de la taille des caractères, modification des couleurs, de la police, de la graisse, de la justification, etc.).

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation.

#### Mise en œuvre

Utiliser des textes HTML mis en forme à l’aide des styles CSS (et en particulier les polices de caractères téléchargeables, ou Web fonts).

#### Contrôle

Cette vérification nécessite l’examen visuel des pages pour identifier les images ne contenant que du texte et évaluer si une mise en forme via CSS aurait permis d’obtenir un rendu équivalent. Pour chaque page contenant des textes mis en images :

- Passer en revue les images (images HTML et éventuelles images d’arrière-plan CSS utilisées pour simuler un contenu éditorial dans un élément vide).

- Vérifier que les textes mis en image correspondent uniquement à des mises en forme ne pouvant être obtenues via les styles CSS.

Sont exclus de cette exigence : les logos, les bannières publicitaires et les éléments graphiques de promotion.

### 183 - Les contenus générés via les styles sont dotés d'une alternative appropriée.

#### Objectif

- Permettre aux utilisateurs placés dans des contextes où les styles ne sont pas restitués (navigateur texte, lecteur d'écran, navigateur avec styles désactivés) d’accéder à l’information présente sous forme de contenus générés en CSS (images d’arrière-plan notamment).

- Permettre aux robots d'exploiter l'information véhiculée par les styles CSS (référencement, indexation, traduction automatique des alternatives).

- Améliorer l’accessibilité des contenus aux personnes handicapées. Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Fournir un contenu masqué à l’affichage via CSS :

- pour chaque information portée par les propriétés CSS background-image ou content ;

- pour chaque information affichée via un pseudo-élément CSS :before ou :after ;

- et plus généralement, pour chaque information absente par ailleurs de la page et dont la restitution dépend du support des styles.

**En savoir plus**: 

- [background-image](https://developer.mozilla.org/fr/docs/Web/CSS/background-image)
- [content](https://developer.mozilla.org/fr/docs/Web/CSS/content)
- [::before (:before)](https://developer.mozilla.org/fr/docs/Web/CSS/::before)
- [::after](https://developer.mozilla.org/fr/docs/Web/CSS/::after)

 #### Contrôle

Examiner directement le code CSS et comparer visuellement l’affichage normal de la page avec son rendu après désactivation des images d’arrière-plan. Pour chaque page :

- Afficher les feuilles de styles grâce à une barre d’outils dédiée et vérifier que les propriétés et éléments cités dans le paragraphe « Solution technique » sont absents des CSS ou ne sont pas utilisés pour produire une information par ailleurs absente du code HTML.

- Désactiver les images d’arrière-plan CSS avec une barre d’outils dédiée.

- Contrôler l’absence de perte d’information, en comparant l’affichage avec et sans images d’arrière-plan.

### 184 - Les pictogrammes typographiques sont dotés d'une alternative appropriée.

#### Objectif

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation.

#### Mise en œuvre

Fournir un contenu masqué à l’affichage via CSS pour chaque information portée par le recours à une police de caractères spécifique.

#### Contrôle

Examiner directement le code pour vérifier que chaque icône affichée via une police de caractères est dotée d’une alternative dans le contenu HTML.

### 185 - Une famille générique de police est indiquée comme dernier élément de substitution.

#### Objectif

- Permettre aux contenus de s'afficher correctement, même lorsque les polices prévues ne sont pas présentes sur le système de l'utilisateur.

#### Mise en œuvre

Dans chaque feuille de style CSS, indiquer la famille générique de police appropriée dans les propriétés  `font-family`  ou  `font` :

- Pour les polices serif, ou à empattements (du type Times Roman), spécifier en dernier la famille de police générique serif. Dans l'exemple suivant, le terme « serif » a été correctement ajouté comme dernier élément de la liste des polices  `font-family: Georgia, "Bookman Old Style", serif` .

- Pour les polices sans serif, ou sans empattements (du type Arial), spécifier en dernier la famille de police générique sans-serif. Par exemple :  `font-family: Optima, "Trebuchet MS", sans-serif` ;

- Pour les polices monospace (du type Courier), spécifier en dernier la famille de police générique monospace. Par exemple,  `font-family: Courier, monospace`;

- De même, utiliser les familles génériques cursive et fantasy pour les polices manuscrites et fantaisies.

**En savoir plus**:
- [font](https://developer.mozilla.org/fr/docs/Web/CSS/font)
- [font-family](https://developer.mozilla.org/fr/docs/Web/CSS/font-family)

#### Contrôle

- Dans toutes les feuilles de style CSS (pour tous les media : screen, print, etc.) :

Vérifier à l'aide d'un outil de développement d'un navigateur que chaque propriété  `font`  ou  `font-family`  contient l'un des termes relatifs aux familles génériques de police :  `serif` ,  `sans-serif` ,  `monospace` ,  `cursive`  ou  `fantasy`  ;

- Contrôler que ces termes sont situés en fin de liste pour chaque propriété  `font`  ou  `font-family`  ;

- S'assurer de la pertinence de la famille générique indiquée :  `serif`  pour les polices à empattements,  `sans-serif`  pour les polices sans empattements,  `monospace` ,  `cursive`  ou  `fantasy`  dans des cas particuliers.

La vérification peut également être effectuée en validant la page HTML à l'aide du validateur CSS du W3C 
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/)

### 186 - Les styles ne justifient pas le texte.

 #### Objectif

- Faciliter la lecture à l’écran, notamment pour les personnes dyslexiques.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

#### Mise en œuvre

Ne pas utiliser la propriété CSS text-align avec la valeur justify, ou tout autre équivalent.

**En savoir plus**:  [text-align](https://developer.mozilla.org/fr/docs/Web/CSS/text-align

#### Contrôle

Vérifier dans le code CSS l’absence de règles text-align : justify.Vérifier dans le code HTML l’absence d’attributs HTML align="justify".

### 187 - Les mises en majuscules à des fins décoratives sont effectuées à l'aide des styles

#### Objectif

- Permettre un copier-coller des contenus indépendamment de la mise en forme entièrement en majuscules.

- Faciliter l'adaptation de la mise en forme pour les utilisateurs ayant des difficultés de lecture des textes entièrement en majuscules.

#### Mise en œuvre

Saisir les contenus HTML en respectant l'usage typographique pour les majuscules (début de phrase, noms propres, etc.).

Utiliser la propriété CSS  `text-transform`  avec la valeur  `uppercase`  pour gérer les mises en majuscules décoratives.

#### Contrôle

Pour tous les contenus mis entièrement en majuscules :

- Désactiver le support des styles du site dans le navigateur ;

- Identifier les textes qui apparaissent en majuscules lorsque les styles sont désactivés ;

- Vérifier que l'usage des majuscules respecte le cadre des conventions typographiques de la langue utilisée. Par exemple : les sigles ou noms d'auteurs dans une bibliographie peuvent être en majuscules.

### 188 - Le site ne bloque pas les fonctionnalités de zoom du navigateur.

#### Objectif

- Permettre aux utilisateurs d’adapter le rendu à leurs besoins ou à leurs préférences en recourant au zoom graphique.

- Améliorer la compatibilité avec les terminaux mobiles.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Ne pas utiliser de mécanisme bloquant le zoom, et en particulier, ne pas utiliser les attributs minimum-scale, maximum-scale et user-scalable de l’élément meta viewport.

#### Contrôle

Vérifier sur un périphérique tactile qu’il est possible d’agrandir la vue avec la commande de zoom tactile du navigateur.

### 189 - Le site propose un ou plusieurs mécanismes dédiés à l'adaptation aux terminaux mobiles.

#### Objectif

- Faciliter la consultation sur les terminaux mobiles.

- Améliorer le positionnement dans les outils d’indexation qui prennent ce critère en compte.

#### Mise en œuvre

Soit recourir aux media queries ou à l’adaptative design pour adresser au navigateur des règles de style adaptées selon la taille de l’écran.

Soit fournir une version mobile dédiée.

#### Contrôle

Comparer l’affichage de la page sur différentes tailles d’écran (desktop, tablettes, smartphone, etc.) et vérifier que le rendu s’adapte à celles-ci.

### 190 - Le site propose des styles dédiés à l'impression.

#### Objectif

- Permettre l'impression des contenus sous une forme appropriée au support.

#### Mise en œuvre

Fournir une feuille de style spécifique pour le type de media print, par exemple sous la forme : `< link rel="stylesheet" type="text/css" href="print.css" media="print" /&gt;` .

Les styles d'impression peuvent corriger une feuille de style globale (feuille de style pour le media all ou sans mention du media) ou bien s'appliquer seuls pour le media print si la feuille de style d'affichage est appelée en précisant le media print.

**En savoir plus**: 
- [<link> : l'élément de lien vers des ressources externes](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/link)
- [<style> : l'élément d'information de style](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/style)

#### Contrôle

Cette bonne pratique peut être évaluée rapidement en testant l'aperçu avant impression dans le navigateur, mais sa confirmation nécessite l'examen du code pour détecter la présence d'un style d'impression pour le media print, qui peut être :

- Sous forme d'une balise du type `<link rel="stylesheet" type="text/css" media="print" href="print.css" />`;

- Sous forme d'une balise du type `<style media="print" type="text/css">…</style>` ;

- Sous forme d'une règle  `@media print {…}`  dans une CSS interne ou externe ;

- Ou sous forme d'une règle  `@import url("print.css")`   `print;`  dans une CSS interne ou externe.


### 191 - Le contenu de chaque page est disponible à l'impression sans blocs de navigation.

#### Objectif

- Améliorer la lisibilité et la pertinence des contenus imprimés.

- Rationaliser l'espace utilisé par les contenus imprimés pour économiser du papier.

- Diminuer l'impact énergétique lié à la consultation du site

#### Mise en œuvre

Fournir une feuille de style CSS pour le media print, qui masque les blocs de navigation via la propriété  `display` .

#### Contrôle

Cette vérification peut s'effectuer immédiatement en utilisant l'aperçu avant impression du navigateur :

- Vérifier qu'aucun menu ou autre bloc de navigation ne s'affiche dans l'aperçu avant impression de la page.

Les blocs de navigation peuvent être l'ensemble des menus  `nav` , des éléments de  `header`  ou de pied de page tels qu'un formulaire de recherche ou des liens annexes, un formulaire d'inscription à une newsletter, etc.

