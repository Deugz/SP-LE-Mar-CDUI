# Navigation

## Règles

### 148 - Si le site n'est pas réservé à un public spécifique, l'accès aux contenus est immédiat.

#### Objectif

- Permettre aux utilisateurs de commencer immédiatement leur navigation sur la ressource qu'ils ont demandée.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Ne pas imposer d'élément différant l'accès au contenu sauf en cas de contenu réservé à un public spécifique.

#### Contrôle

Dans le site examiné :

- Accéder successivement à la page d'accueil du site et à une page interne via une adresse directement saisie dans le navigateur ou depuis un site tiers ;

- Vérifier alors que l'accès au contenu est immédiat, sans avoir à « passer » au préalable un affichage temporaire d'avertissement (sauf en cas de contenu réservé à un public spécifique comme dans le cas d'un public majeur) ou bien un message à caractère publicitaire ou informatif.

### 149 - La navigation sur le site ne provoque pas l'ouverture de popups.

#### Objectif

- Permettre à l'utilisateur de naviguer sur le site sans avoir d'opération spécifique à effectuer pendant la navigation.

- Éviter à des utilisateurs d'aides techniques d'être désorientés par l'ouverture d'une nouvelle fenêtre qui ne sera pas toujours aisément perceptible et qui perturbe notamment l'utilisation de l'historique de navigation ou qui masquera dans un lecteur d'écran la fenêtre principale.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

#### Mise en œuvre

Ne pas utiliser d'ouverture automatique de fenêtres popup (événement d'ouverture de fenêtre lors du chargement d'une page) sur les pages internes du site.

#### Contrôle

Cette bonne pratique est à vérifier manuellement à l'occasion de l'ensemble des autres tests, en prenant soin de désactiver toute éventuelle fonctionnalité de blocage des popups dans le navigateur utilisé.

Dans toutes les pages internes du site :

- Vérifier que la navigation dans les pages internes du site ne déclenche pas l'ouverture automatique de nouvelles fenêtres.

### 150 - Il est possible de revenir à la page d'accueil depuis toutes les pages.

#### Objectif

- Permettre aux utilisateurs de revenir en page d'accueil en cas de désorientation.

- Identifier le l ien principal permettant d'accéder au site.

#### Mise en œuvre

Prévoir un lien vers la page d'accueil sur chaque page du site.

Veiller à ce que ce lien soit de préférence toujours au même endroit (début du fil d'Ariane, menu de navigation, etc.).

Le cas échéant, utiliser l'URL correspondant à l'adresse générique du site (URL du domaine) du type `http://exemple.com` plutôt que l'URL interne de la page, par exemple `http://exemple.com/V1/accueil.html`.

Si un logo de site est présent dans les pages, il doit être cliquable et permettre de revenir vers l'accueil.

#### Contrôle

Cette vérification gagne à être effectuée, si possible, à partir des templates et en tenant compte des éventuels services tiers susceptibles de produire des pages qui ne correspondraient pas à ces templates.

Dans chacune des pages du site :

- Vérifier qu'il est possible de revenir directement à la page d'accueil depuis toutes les pages, à partir d'un lien explicite distinct de l'éventuel lien sur le logo principal.

### 151 - Chaque page affiche une information permettant de connaître son emplacement dans l'arborescence du site.

```{note}

Possibilité de faire quelque chose d'intéréssant avec le sitemap et une visualisation graphique

```

#### Objectif

- Permettre à l'utilisateur de déterminer son emplacement dans le site.

- Simplifier le passage des moteurs de recherche.

- Faciliter la navigation dans l'arborescence des contenus.

#### Mise en œuvre

Fournir un fil d'Ariane au début de la zone de contenu principal de la page.

#### Contrôle

La vérification nécessite une inspection manuelle contrôlant la présence et la pertinence du fil d'Ariane sur les différentes pages ou, le cas échéant, dans les templates sous réserve de services tiers produisant un contenu spécifique.

Dans les pages examinées ou les templates du site :

- Vérifier la présence systématique du fil d'Ariane sur toutes les pages, à l'exception éventuelle de la page d'accueil du site ;

- S'assurer que le fil d'Ariane est immédiatement identifiable grâce à une mise en forme prévisible par l'utilisateur.

### 152 - Les items actifs de menu sont signalés.

#### Objectif

- Donner aux utilisateurs un moyen supplémentaire de se repérer dans l'architecture du site.

#### Mise en œuvre

Différencier l'item actif de menu correspondant à la section ou la page en cours des autres lien du menu, au moins visuellement.

#### Contrôle

Vérifier pour chaque menu de navigation que l'item actif de menu correspondant à la section ou la page affichée se différencie au moins visuellement des autres liens du menu.

### 153 - Les blocs de navigation de même nature sont affichés aux mêmes emplacements sur toutes les pages.

#### Objectif

- Faciliter l'apprentissage de la navigation sur l'interface.

- Faciliter le repérage de l'information.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Conserver le même positionnement à l'écran des menus de navigation sur l'ensemble du site.

#### Contrôle

Au fil des autres contrôles :

- Vérifier que les menus de navigation sont affichés au même endroit à l'écran.

La vérification peut également être menée en amont du projet, lors de la conception des maquettes graphiques et en aval du projet lors de l'intégration finale pour vérifier l'absence d'une dégradation de cette bonne pratique due, par exemple, à la mise en place de services tiers.

### 154 - Les icônes de navigation sont accompagnées d'une légende explicite.

#### Objectif

- Limiter le temps d'apprentissage de l'interface.

- Faciliter la compréhension des icônes.

- Limiter le risque d'erreurs.

#### Mise en œuvre

La nature de la cible de chaque icône-lien lorsqu'elle n'est pas accompagnée d'un contenu textuel est précisée par l'attribut  `alt`  de l'image et par l'attribut  `title`  ou  `aria-label`  du lien.

En savoir plus: [<img> : l'élément d'image embarquée](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/img)

#### Contrôle

Vérifier que chaque icône de navigation ou d'action sans contenu textuel associé est dotée :

- D'un attribut  `alt`  pertinent pour l'élément  `img`  ;

D'un attribut  `title`  ou  `aria-label`  pertinent pour l'élément  `a` ,  `button`  ou  `input`  ;

### 155 - Les mécanismes de fermeture de fenêtres sont visuellement rattachées à leur contenu.

#### Objectif

- Limiter le temps d’apprentissage de l’interface.

- Accélérer l’accès aux contenus.

- Faciliter la navigation.

#### Mise en œuvre

Positionner chaque bouton de fermeture de fenêtre modale ou similaire dans le bloc visuel de celle-ci (généralement dans le coin supérieur droit) ou de manière contiguë.

#### Contrôle

Vérifier que chaque bouton de fermeture de fenêtre est placé dans le bloc concerné ou contigu.

### 156 - Les mécanismes de fermetures de fenêtres sont immédiatement disponibles.

#### Objectif

- Limiter le temps d’apprentissage de l’interface.

- Accélérer l’accès aux contenus.

- Réduire le taux de rebond.

#### Mise en œuvre

Éviter tout contenu temporaire de type publicité qui retarde l’accès à la possibilité de fermer une fenêtre modale ou similaire.

#### Contrôle

S’assurer que chaque fenêtre modale ou similaire peut être fermée dès son affichage.

### 157 - Les nouvelles fenêtres dimensionnées et les fenêtres modales sont dotées d'un bouton de fermeture explicite.

#### Objectif

- Donner aux utilisateurs des indications explicites pour fermer une fenêtre ou une boîte modale.

- Accélérer l’accès aux contenus.

#### Mise en œuvre

Placer, dans chaque fenêtre dimensionnée ou modale, un bouton ou un lien avec un libellé explicite pour la fermeture et associer ce bouton à une action de fermeture.

#### Contrôle

Pour chaque fenêtre « réelle » (popup dimensionnée) ou chaque fenêtre simulée affichée en surimpression du contenu (fenêtre modale), et ce, quelle que soit la technologie utilisée :

- Vérifier que le corps des fenêtres dimensionnées et des fenêtres modales contient un bouton ou un lien permettant de les fermer ;

- Vérifier que le libellé du bouton ou du lien de fermeture est explicite.

Les fenêtres dont la fermeture ne se fait qu'implicitement, par exemple via la touche d'échappement, invalident cette bonne pratique.

### 158 - Les mécanismes de fermetures de fenêtres sont affichés aux mêmes emplacements sur toutes les pages.

#### Objectif

- Limiter le temps d’apprentissage de l’interface.

- Accélérer l’accès aux contenus.

- Faciliter la navigation.

#### Mise en œuvre

Opter pour un positionnement systématique des boutons de fermeture dans un même emplacement, pour toutes les fenêtres modales et similaires (par exemple, en haut à droite de la fenêtre).

#### Contrôle

S’assurer visuellement que l’emplacement de tous les boutons de fermeture est identique à travers le site.

### 159 - Chaque page contient des liens d'accès rapide placés au début du code source.

#### Objectif

- Permettre aux utilisateurs qui consultent les pages de manière linéaire (mode vocal) ou semi-linéaire (écran de faible largeur) de ne pas avoir à défiler l'ensemble des éléments sur chaque page pour accéder aux contenus.

- Fournir des raccourcis accélérant la navigation au clavier et évitant des actions au clavier répétées pour parcourir la page et atteindre la zone souhaitée.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Fournir en début de code HTML, avant tout autre lien ou formulaire présent dans la page, les liens visant des ancres correspondantes :

- Vers le menu principal si celui-ci n'est pas immédiatement placé après l'en-tête de page ;

- Vers le contenu principal si celui-ci n'est pas immédiatement placé après l'en-tête de page ;

- Vers le formulaire du moteur de recherche si celui-ci n'est pas immédiatement placé après l'en-tête de page.

Le cas échéant, ce menu d'accès rapide peut être masqué au chargement de la page et s'afficher lors de la première tabulation entrant dans celle-ci (via Javascript ou CSS).

#### Contrôle

Cette bonne pratique gagne à être vérifiée en association avec l'ensemble des bonnes pratiques concernant la navigation au clavier puisque si ces liens d'accès rapide sont présents, ils doivent au minimum apparaître dès la première tabulation dans la page.

Lors de la navigation dans le site ou de l'inspection des templates (sous réserve de tenir compte des pages dépendants de services tiers) :

- Vérifier la présence des liens d'accès rapide au menu, au contenu et à la recherche selon l'organisation de la page ;

- Vérifier qu'ils sont bien placés dans le code de manière à apparaître dès la première tabulation dans la page ;

- Vérifier qu'en cas de masquage par défaut, ils sont affichés lisiblement lors de la première tabulation, à un emplacement prévisible par l'utilisateur ;

- Vérifier que leur fonctionnement est effectif, c'est-à-dire qu'ils permettent d'accéder au menu ou à la zone de contenu et d'y poursuivre immédiatement la navigation au clavier, ou au champ de saisie du formulaire de recherche et de procéder à la saisie.

### 160 - Le focus clavier n'est ni supprimé ni masqué.

#### Objectif

- Permettre la navigation au clavier ou via des périphériques d'entrées ou des dispositifs qui ne reposent pas sur la souris.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

#### Mise en œuvre

Veiller à ne pas masquer ou supprimer l'effet visuel de prise de focus qui indique quel est l'élément atteint lors de la navigation au clavier. En particulier, ne pas annuler la valeur par défaut de la propriété CSS  `outline`  sans la remplacer par une autre valeur personnalisée ou un effet visuel suffisamment perceptible.

Ne pas supprimer via Javascript la prise de focus clavier (exploitation de l'événement  `onblur` ).

#### Contrôle

Ce contrôle s'effectue sur l'ensemble des éléments interactifs, prioritairement à l'aide de la touche tabulation et, dans l'interface de certains widgets, à l'aide de touches de déplacement spécifiques (touches flèches).

Pour chaque élément interactif contenu dans les pages examinées :

Vérifier que l'indication visuelle du focus par défaut du navigateur est au moins présente ou qu'une indication visuelle spécifique a été aménagée.

### 161 - Le site est intégralement utilisable au clavier.

#### Objectif

- Permettre la navigation au clavier pour les utilisateurs ayant une préférence pour cette pratique.

- Permettre la consultation des contenus et l'utilisation des services indépendamment du périphérique d'entrée.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

#### Mise en œuvre

Recourir à des gestionnaires d'événements universels en cas d'interaction basée sur Javascript (par exemple,  `onclick`  pour un lien  `a`  ou pour un champ ou contrôle de formulaire) ou, à défaut, compléter les gestionnaires d'événements non universels ( `onmouseover`  par exemple) par un second gestionnaire permettant l'accès clavier ( `onfocus`  par exemple) ou encore fournir un moyen d'accès alternatif.

#### Contrôle

Cette vérification s'applique à l'ensemble des éléments interactifs : hyperliens, boutons, champs de formulaires, widgets Javascript, etc. Le mode d'interaction par défaut est la touche tabulation pour atteindre les liens, les champs et les contrôles, puis la touche entrée pour les activer. Dans certains widgets, un mode d'interaction spécifique peut être présent : barre d'espace pour valider, touches flèches pour se déplacer, touche d'échappement pour fermer ou sortir. Autant que possible dans ce cas, ces touches spécifiques devraient être indiquées à l'utilisateur.

Au sein de chaque page examinée :

- Vérifier que l'ensemble des interactions, liens, boutons, champs de formulaires, présents dans les pages sont utilisables au clavier, à l'exception de ceux pour lesquels cela n'aurait pas de sens, comme une fonctionnalité de tracé à la souris.

### 162 - La navigation au clavier s'effectue dans un ordre prévisible.

#### Objectif

- Faciliter la navigation au clavier.

- Permettre aux utilisateurs de clavier de se doter de repères de navigation.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Organiser les contenus dans l'ordre linéaire du code HTML de manière à regrouper et ordonner logiquement les liens et les contrôles de formulaires qui apparaissent les uns à la suite des autres à l'affichage et ordonner logiquement les principaux blocs de navigation et de contenu composant la page.

Le cas échéant, et en dernier ressort, recourir à l'attribut HTML  tabindex  pour créer un ordre de navigation au clavier spécifique, différent de l'ordre par défaut issu de l'organisation des liens et des contrôles de formulaires dans le code.

Gérer spécifiquement l'ordre de navigation au clavier en cas de fenêtre modale ou de widget.

#### Contrôle

Ce contrôle s'effectue sur l'ensemble des éléments interactifs, prioritairement à l'aide de la touche tabulation et, dans l'interface de certains widgets, à l'aide de touches de déplacement spécifiques (touches flèches) :

- Naviguer au clavier puis vérifier que l'ordre de passage d'un élément à un autre est identique entre les différentes pages ;

- Vérifier que l'ordre de passage est adapté au contenu concerné. Par exemple, la navigation clavier dans une pseudo-popup javascript commence par son bouton de fermeture

- Contrôler que l'ordre est prévisible par l'utilisateur : sauf exceptions, cet ordre doit être aussi proche que possible de l'ordre de lecture, par exemple haut-bas et gauche-droite pour les écritures lisibles de gauche à droite.

### 163 - Le site propose un moteur de recherche interne.

#### Objectif

- Fournir aux utilisateurs une solution de navigation alternative et d'accès rapide aux contenus liés à des mots-clés retenus par ceux-ci.

- Diminuer l'impact énergétique lié à la consultation du site.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

#### Mise en œuvre

Proposer un formulaire et une fonctionnalité de recherche simple, qu'il s'agisse d'une solution interne ou de l'incorporation d'une solution externe.

#### Contrôle

Dans toutes les pages évaluées ou bien en contrôlant les templates du site (sous réserve de tenir compte de pages dépendant de solutions tierces) :

- Vérifier manuellement la présence systématique d'un moteur de recherche.

### 164 - Chaque page de résultats de recherche peut être atteint via une adresse Web.

#### Objectif

- Permettre à l’utilisateur de partager ou de conserver dans ses signets un résultat de recherche.

- Diminuer l'impact énergétique lié à la consultation du site.

#### Mise en œuvre

Gérer les requêtes du formulaire de recherche en utilisant la méthode GET.

#### Contrôle

Faire une recherche et contrôler que l’Url de la page de résultats permet d’accéder à ceux-ci.

### 165 - Il est possible de relancer une recherche depuis sa page de résultats.

#### Objectif

- Améliorer et accélérer les opérations de recherche par les utilisateurs en évitant les retours à la page de recherche initiale.

#### Mise en œuvre

Dans chaque page de résultat de recherche, afficher le formulaire de recherche avec la saisie précédente de l'utilisateur, de manière à ce qu'il puisse modifier celle-ci et valider immédiatement une nouvelle recherche.

#### Contrôle

Vérifier, pour chaque page de résultat de recherche, que l'utilisateur peut valider immédiatement une nouvelle recherche à l'aide du formulaire de recherche pré-rempli avec sa saisie précédente, modifiable.

### 166 - Un plan du site est disponible depuis chaque page.

#### Objectif

- Fournir aux utilisateurs une solution en cas de désorientation, pour naviguer et se repérer dans le site, pour visualiser l'ensemble des contenus et la taille du site.

- Inciter les responsables du contenu à représenter graphiquement et à rationaliser leur contenu.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Créer un plan de site qui donne accès, directement ou indirectement, à la totalité des pages du site sous la forme d'une liste de liens textuels explicites.

Structurer cette liste de manière à refléter l'organisation des rubriques du site, à l'aide d'éléments de titre et d'éléments de liste imbriqués.

La profondeur de l'arborescence à représenter varie en fonction des contenus, mais elle est en général limitée aux trois premiers niveaux. Les pages satellites telles que la page Contact et les mentions légales doivent figurer dans le plan de site.

#### Contrôle

Cette vérification gagne à être effectuée si possible à partir des templates, en tenant compte des éventuels services tiers. Dans le site :

- Vérifier la présence d'une page de plan de site ;

- Contrôler qu'un lien vers celui-ci est disponible dans chaque page du site.

L'emplacement du lien vers le plan de site est indifférent (en-tête, menu, pied de page) mais il est préférable qu'il soit constant sur l'ensemble du site. La présence du lien « plan de site » est particulièrement pertinente dans les pages 404 et 403.

### 167 - Les limites de temps imposées à une action ou un accès sont indiquées.

#### Objectif

- Avertir des utilisateurs ayant des contraintes spécifiques de manipulation ou de temps.

- Éviter les pertes de données et de temps pour l’utilisateur.

- Prévenir les échecs de commande.

#### Mise en œuvre

Pour toute action que l'utilisateur doit exécuter dans une limite de temps imposée, ou toute action ou information mises à disposition pendant un temps limité, informer l'utilisateur de cette limite et de sa durée, avant le déclenchement de l'action ou la mise à disposition.

#### Contrôle

Pour toute action que l'utilisateur doit exécuter dans une limite de temps imposée, ou toute action ou information mises à disposition pendant un temps limité, vérifier que l'utilisateur est informé de cette limite et de sa durée,  avant le déclenchement de l'action ou la mise à disposition.
