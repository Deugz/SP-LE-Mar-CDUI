# Images et Médias

## Règles

### 111 - Chaque image décorative est dotée d'une alternative textuelle appropriée.

#### Objectif

- Éviter aux utilisateurs placés dans des contextes où les images ne sont pas perceptibles (navigateur texte, lecteur d’écran, navigateur avec images désactivées) d’être perturbés par des informations sur des images qui leur sont inutiles.

- Fournir aux robots d’indexation uniquement des informations pertinentes.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

D’une manière générale, si un code (un attribut HTML, par exemple) est prévu pour l’alternative, il doit être présent, mais en restant vide. Pour les cas les plus courants :

- Donner à chaque élément img décoratif un attribut alt vide (alt="").

- Donner à chaque élément area décoratif un attribut alt vide.

- Laisser vide le contenu de chaque élément object concerné (entre les balises `<object>` et `</object>`).

- Laisser vide le contenu de chaque élément canvas concerné.

- Ne donner à chaque élément svg concerné aucun attribut ARIA qui lui confère un label (aria-labelledby, aria-describedby, etc.).

#### Contrôle

Cette vérification s’effectue dans le code HTML généré à l’aide d’un inspecteur de code ou d’une barre d’outils dédiée :

- Tester au préalable la présence des attributs alt en vérifiant la validité du code HTML généré, par exemple avec le validateur du W3C (le validateur HTML signale les images privées d’alternative) : chaque image décorative doit avoir un attribut alt (présent mais vide).

- Vérifier que chaque image img ne véhiculant pas d’information nécessaire à la compréhension du contenu a bien un alt vide.

- Vérifier les éventuels autres objets graphiques du type object, canvas dont le contenu (entre les balises ouvrantes et fermantes) doit être vide.

- Vérifier les éventuels autres éléments du type svg susceptibles de recevoir une alternative via un attribut ARIA.

### 112 - Chaque image-lien est dotée d'une alternative textuelle appropriée.

#### Objectif

- Permettre aux utilisateurs placés dans des contextes où les images ne sont pas perceptibles (navigateur texte, lecteur d’écran, navigateur avec images désactivées) de comprendre le sens des liens présents sur des images qu’ils ne peuvent voir.

- Permettre aux robots d’exploiter l’information véhiculée par les images-liens (pour le référencement, l’indexation, la traduction automatique des alternatives d’images-texte).

- Permettre l’affichage d’un texte pertinent pendant le chargement des images.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Les images-liens sont aisées à identifier (elles sont le seul contenu qui est placé entre des balises `<a>` et `</a>`). Il faut toutefois penser aussi aux liens générés avec JavaScript sur d’autres éléments.D’une manière générale, il faut :

- donner à chaque élément img concerné un attribut alt indiquant la cible ou le rôle du lien ;

- donner à chaque élément area concerné un attribut alt indiquant la cible ou le rôle du lien ;

- indiquer la cible ou le rôle du lien dans le contenu de chaque élément object concerné ;

- indiquer la cible ou le rôle du lien dans le contenu de chaque élément canvas concerné.

#### Contrôle

- Vérifier que l’attribut alt de chaque élément img concerné indique la cible ou le rôle du lien.

- Vérifier que l’attribut alt de chaque élément area concerné indique la cible ou le rôle du lien.

- Vérifier que le contenu de chaque élément object concerné indique la cible ou le rôle du lien.

- Vérifier que le contenu de chaque élément canvas concerné indique la cible ou le rôle du lien.

- Vérifier le libellé textuel de tout autre élément ayant le rôle d’un lien.

### 113 - Chaque image porteuse d'information est dotée d'une alternative textuelle appropriée.

#### Objectif

- Permettre aux utilisateurs placés dans des contextes où les images ne sont pas perceptibles (navigateur texte, lecteur d'écran, navigateur avec images désactivées) de comprendre le sens des images qu'ils ne peuvent voir.

- Permettre aux robots d'exploiter l'information véhiculée par les images (référencement, indexation, traduction automatique des alternatives d’images-texte).

- Permettre l'affichage d'un texte pendant le chargement des images.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

- Donner à chaque élément img concerné un attribut alt reproduisant l’information.

- Donner à chaque élément area concerné un attribut alt reproduisant l’information.

- Reproduire l’information dans le contenu de chaque élément object concerné.

- Reproduire l’information dans le contenu de chaque élément canvas concerné.

- Reproduire l’information dans un libellé textuel associé à chaque élément svg concerné par le biais de son attribut aria-label ou de la balise desc.

Dans le cas d’une image complexe qui ne peut être résumée de manière concise dans une alternative textuelle, le détail de l’information doit être apporté en complément à l’aide d’une description étendue :

- soit via l’attribut longdesc de l’image indiquant l’URL de la description,

- soit via un lien adjacent à l’image jouant le même rôle,

- soit dans le contenu de la page, dans le contexte immédiat de l’image. Dans ce dernier cas, l’alternative peut signaler la présence de cette description et y renvoyer.

#### Contrôle

- Vérifier que l’attribut alt de chaque élément img concerné reproduit l’information portée par l’image.

- Vérifier que l’attribut alt de chaque élément area concerné reproduit l’information portée par l’image.

- Vérifier que le contenu de chaque élément object concerné reproduit l’information portée par l’image.

- Vérifier que le contenu de chaque élément canvas concerné reproduit l’information portée par l’image.

- Vérifier que chaque élément svg concerné est associé à un libellé textuel reproduisant l’information portée par l’image par le biais de son attribut aria-label ou de la balise desc.

- Vérifier la présence et la pertinence de la description étendue le cas échéant.

### 114 - Les vignettes et aperçus ne sont pas des images de taille supérieure redimensionnées côté client.

#### Objectif

- Diminuer la quantité de données à télécharger.

- Améliorer la vitesse d’affichage de la page.

- Diminuer l'impact énergétique lié à la consultation du site.

#### Mise en œuvre

Utiliser, pour les vignettes de prévisualisation d'images, des versions spécifiques de celles-ci et non les images originales redimensionnées via leurs attributs HTML ou leurs propriétés CSS.

#### Contrôle

Pour toutes les images HTML présentes dans le code source ou générées via javascript :

- Vérifier qu'elles ne sont pas dotées de propriétés CSS  `height`  ou  `width`  qui modifient la taille apparente des images par rapport à leurs dimensions réelles. Pour cela, utiliser  désactiver tous les styles CSS à l'aide d'un outil de développement web  pour repérer les images dont les dimensions changent après désactivation des styles CSS.

- Contrôler également que les dimensions indiquées dans les attributs  `width`  et  `height`  du code HTML généré correspondent aux dimensions réelles de l'image à l'aide d'un outils de développement.

Par exemple, on invalidera donc :

- Une image du type `<img height="300" width="600" class="thumb"/>` si la classe  .thumb  impose les propriétés CSS  height: 100px  et  width: auto .

- Une image du type `<img height="100" width="200"/>` si les dimensions réelles de l'image sont 300 px de haut et 600 px de large.

### 115 - Les objets inclus sont dotés d'une alternative textuelle appropriée.

#### Objectif

- Fournir un accès à l'information pour les utilisateurs dont le navigateur ou la plateforme ne supporte pas l'inclusion d'objets ou les technologies utilisées dans les objets inclus.

- Faciliter l'exploitation de ces contenus par les robots (référencement en particulier).

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Indiquer l'alternative des objets inclus via l'une des solutions suivantes :

- Le contenu de l'élément HTML  `object`  ;

- Le contenu de l'élément HTML  `noembed`  ;

- Un contenu présent immédiatement avant ou après l'objet ;

- Un lien vers une page fournissant le contenu alternatif, placé immédiatement avant ou après l'objet.

#### Contrôle

Cette vérification nécessite la détection des éléments  `object`  et  `embed` , en tenant compte de leur éventuelle génération via Javascript. Pour chaque page contenant un de ces éléments :

- Désactiver le support des technologies tierces dans le navigateur.

- S'assurer que l'information alternative est présente et affichée, ou qu'elle est accessible grâce à un lien présent dans le contexte immédiat de chaque objet.


### 116 - Chaque contenu audio et vidéo est accompagné de sa transcription textuelle.

#### Objectif

- Permettre aux utilisateurs qui ne peuvent accéder au son ou à l’image proposés de diposer d'une transcription textuelle servant d’alternative.

- Permettre aux utilisateurs d’accéder à l’information contenue dans la vidéo.

- Permettre l’exploitation de l’information par des robots pour améliorer son indexation et son référencement.

- Permettre la traduction par des outils linguistiques en ligne.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

#### Mise en œuvre
Accompagner chaque contenu audio ou vidéo d'une transcription :

- Soit intégrale (contenant les paroles et une description des sons et éléments visuels nécessaires à la compréhension) ;

- Soit synthétique (mais reflétant  la totalité de l'information).

La transcription peut :

- Figurer dans la page où se trouve le contenu vidéo ou audio ;

- u être immédiatement accessible par un lien présent dans la page où se trouve le contenu vidéo ou audio.

#### Contrôle

Identifier chaque page comportant un contenu multimédia et, dans le contexte immédiat de chaque contenu audio ou vidéo, s’assurer de la présence d’une transcription ou d’un lien y donnant immédiatement accès.

### 117 - Les vidéos comportent des sous-titres synchronisés.

#### Objectif

- Permettre aux utilisateurs qui ne peuvent accéder au son de disposer d'une alternative visuelle synchronisée avec l'image suivre confortablement le déroulement de la vidéo sans devoir utiliser un transcript externe.

- Permettre aux utilisateurs sourds d’accéder aux contenus de la vidéo.

- Permettre à tous les utilisateurs d’accéder aux contenus de la vidéo.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Associer à chaque contenu vidéo des sous-titres synchronisés reprenant au moins l'information donnée par la parole.

#### Contrôle

Vérifier, pour chaque contenu vidéo fournissant une information par la parole, que celle-ci peut être lue via des sous-titres synchronisés.

### 118 - La durée des contenus vidéo ou audio est indiquée.

#### Objectif

- Informer l'utilisateur afin qu'il puisse décider en connaissance de cause de consulter ou de télécharger ou non le contenu concerné.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Accompagner chaque contenu vidéo ou audio, à télécharger ou à consulter en ligne, de la mention de sa durée. Celle-ci peut être éventuellement indiquée de manière générique, sous forme d'un ordre de grandeur commun à un ensemble de contenus.

#### Contrôle
Dans chaque page comportant un contenu multimédia :

- Vérifier que la durée de chaque contenu audio ou vidéo est indiquée avant la consultation de celui-ci, c'est-à-dire dans le contexte immédiat du player.

- Contrôler que la durée indiquée correspond à la durée réelle, ou qu'il s'agit d'un ordre de grandeur suffisant.

### 119 - Les vidéos sont déclenchées par l'utilisateur.

#### Objectif

- Laisser à l’utilisateur le contrôle de l’interface visuelle lors de la consultation du site.

- Ne pas imposer à l’utilisateur le déclenchement d’un contenu animé.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Ne pas mettre en place des contenus audio dont le démarrage est automatique et sans action explicite de l'utilisateur en ce sens.

Ne pas incorporer dans la page d'éléments déclenchant la lecture d'une vidéo non contrôlable par exemple avec l'élément html  `vidéo`  doté de l'attribut  `autoplay`  ou sans l'attribut  `controls` .

#### Contrôle

Dans chaque page comportant un contenu vidéo :

- Vérifier l'absence de contenus vidéo activés automatiquement au chargement de la page ;

- Vérifier l'absence de contenus vidéos activés de manière imprévisibles suite à une action de l'utilisateur.

### 120 - Les sons sont déclenchés par l'utilisateur.

#### Objectif

- Laisser à l'utilisateur le contrôle du son lors de la consultation du site.

- Ne pas surprendre l'utilisateur par la diffusion inattendue d'un contenu audio.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Ne pas mettre en place des contenus audio dont le démarrage est automatique et sans action explicite de l'utilisateur en ce sens.

Ne pas incorporer dans la page d'éléments déclenchant la lecture d'un son non contrôlable par exemple avec l'élément html  `audio`  doté de l'attribut  `autoplay`  ou sans l'attribut  `controls` .

#### Contrôle

Dans chaque page comportant un contenu audio :

- Vérifier l'absence de contenus audio activés automatiquement au chargement de la page ;

- Vérifier l'absence de contenus audio activés de manière imprévisibles suite à une action de l'utilisateur.

### 121 - Les animations, sons et clignotements peuvent être mis en pause.

#### Objectif

- Laisser à l'utilisateur le contrôle des animations lors de la consultation du contenu.

- Ne pas perturber l'attention en imposant des éléments pouvant gêner celle-ci.

- Permettre la consultation pas à pas d'animations séquentielles ou de contenus sonores.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Dès lors qu'une animation visuelle a une durée de plus de 5 secondes ou qu'un son a une durée de plus de 3 secondes, doter systématiquement l'objet multimédia des moyens de contrôle nécessaires : démarrage, arrêt, muet ou volume.

Ne pas utiliser de graphismes animés non contrôlables, ou encore partiellement contrôlables par l'utilisateur (images gif animées en particulier).

#### Contrôle

Dans chaque page contenant une animation visuelle d'une durée de plus de 5 secondes ou un son d'une durée de plus de 3 secondes :

- Contrôler la possibilité de stopper l'animation, le son ou le clignotement (pause, redémarrage, volume sonore le cas échéant).

Il existe une grande variété de moyens techniques permettant d'inclure une animation dans une page : balisage, propriété CSS, images animées, Javascript, SVG, etc. La vérification de cette bonne pratique nécessite donc un examen au cas par cas de chaque page concernée.

### 122 - Le déroulement des animations ne bloque pas la navigation ou l'accès aux contenus.

#### Objectif

- Fournir aux utilisateurs un accès direct et immédiat aux contenus, même lorsque l'administrateur du site décide de proposer une animation ou une publicité préalable.

#### Mise en œuvre

En cas d'animation proposée dans un splash screen, celle-ci doit comporter un lien permettant d'accéder directement aux contenus sans devoir attendre la fin de l'animation.

#### Contrôle

Pour chaque page dont l'accès est précédé par une animation :

- Vérifier qu'il est possible d'outrepasser l'animation sans devoir attendre la fin de son déroulement, soit par le biais d'un lien d'accès direct au site, soit par un contrôle permettant son arrêt.

Cette bonne pratique concerne, en règle générale, la page d'accueil du site mais elle peut également être en jeu dans des pages internes.