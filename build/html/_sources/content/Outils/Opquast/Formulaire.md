# Formulaires

## Règles

### 67 - Chaque champ de formulaire est associé dans le code source à une étiquette qui lui est propre.

#### Objectif

- Faciliter la compréhension des données attendues dans les formulaires.

- Permettre aux aides techniques d'accessibilité de restituer les champs de formulaires en les associant systématiquement à une étiquette indiquant leur rôle et la nature de la saisie attendue.

- Faciliter la saisie en permettant de sélectionner le champ via un clic sur son étiquette aussi bien que sur le champ lui-même (particulièrement en cas de case à cocher ou de case radio).

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Donner à chaque champ de formulaire une étiquette qui lui soit explicitement associée :

- si l'étiquette est visible, sous la forme d'un élément  label  doté d'un attribut  for  reprenant la valeur de l'attribut  `id`  affecté au champ, par exemple :

`<label for="nom1">Nom de famille :</label>`

`<input id="nom1" type="text" name="nom">`

- si l'affichage de l'étiquette n'est pas souhaitée (placeholder), sous la forme d'un attribut  aria-label  ou  aria-labelledby .

Le recours à une étiquette `<label for="…">` masquée via les styles CSS est déconseillé au profit de l'attribut  `aria-label`  ou  `aria-labelledby` .

#### Contrôle

Pour chaque champ de formulaire :

- Vérifier, en regardant le code source ou à l'aide de Firebug, que l'attribut  `for`, propre à l'élément  `label`, ainsi que l'attribut  `id`  du champ ont exactement le même contenu. Si les valeurs de ces deux attributs sont effectivement identiques, l'étiquette ( `label` ) est bien associée au champ (`input`).

- Dans le cas où aucune étiquette n'est visible dans le site (placeholder), vérifier que chaque champ de formulaire est doté d'un attribut  `aria-label`  ou `aria-labelledby` .

Dans les deux cas, vérifier enfin que l'étiquette décrit effectivement le rôle du champ ou la nature de l'information qui doit y être saisie. Cette bonne pratique ne peut donc être automatisée mais nécessite un examen manuel de chaque formulaire

### 68 - Les informations complétant l'étiquette d'un champ sont associées à celui-ci dans le code-source

#### Objectif

- Optimiser le rendu dans les lecteurs d’écran en permettant d’expliciter les étiquettes des champs de formulaire.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Associer explicitement dans le code source chaque information venant compléter une étiquette de champ de formulaire, ou venant informer l’utilisateur en cas d’erreur de saisie :

- soit à l’aide d’un regroupement de champ fieldset et de l’élément legend ;

- soit à l’aide de l'attribut  aria-describedby .

#### Contrôle

Vérifier dans le code source que chaque information venant compléter une étiquette de champ de formulaire, ou venant informer l’utilisateur en cas d’erreur de saisie :

- est associée au champ en étant balisée par un élément legend inclus dans un élément fieldset regroupant les champs concernés ;

- ou est associée au champ via un attribut `aria-describedby`.

### 69 - L'étiquette de chaque champ de formulaire indique si la saisie est obligatoire.

#### Objectif

- Permettre aux utilisateurs de savoir à l'avance si un champ est obligatoire.

- Prévenir les erreurs avant qu'elles ne surviennent.

- Renforcer la confiance des utilisateurs sur l’utilisation de leurs données.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Indiquer le caractère obligatoire de la saisie dans l'étiquette associée au champ. Si l'indication est faite avec un symbole graphique (astérisque par exemple), faire précéder le formulaire d'une légende explicitant ce symbole.

#### Contrôle

Pour chaque formulaire :

- Vérifier que l’étiquette associée à chaque champ en indique le caractère obligatoire, si besoin en contrôlant, avec un inspecteur de code, que l’information est bien présente dans l’élément  `label` ,  dans un attribut  `aria-label`,  ou bien qu’elle est reliée au champ via un attribut  `aria-labelledby`  ou  `aria-describedby`.

- Vérifier que les champs dont l’étiquette ne donne aucune information sur leur caractère obligatoire sont bien facultatifs, en validant le formulaire sans les remplir. Si un message d’erreur indique qu’ils doivent être remplis ou si le formulaire ne peut être validé ainsi, la bonne pratique est invalidée.

### 70 - Le format de saisie des champs de formulaire qui le nécessitent est indiqué

#### Objectif

- Limiter le risque d'erreurs de saisie.

- Limiter les risques associés à l'envoi de données erronées ou impossibles à exploiter.

- Éviter que l'utilisateur ne renonce à poursuivre faute d'information sur la saisie attendue.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Indiquer quel est le format de saisie attendue via l'étiquette associée au champ. Par exemple :  `&lt;label for="mail"&gt;` Adresse email (du type mail@exemple.com) `&lt;/label&gt;`

#### Contrôle

Pour chaque formulaire :

- Soumettre différentes erreurs possibles dans chaque formulaire : non-respect d’un format demandé ou prévisible (format d’adresse e-mail, de date, etc.), afin de détecter les champs pour lesquels un format de saisie spécifique est imposé.

- Vérifier, à l’aide d’un inspecteur de code, que l’étiquette associée à chaque champ concerné en indique le format attendu dans l’élément label ou via un attribut ARIA.

### 71 - L'utilisateur est averti lorsqu'une saisie est sensible à la casse.

#### Objectif

- Éviter le risque d'erreur et donc éviter à l'utilisateur de devoir remplir plusieurs fois un même champ.

- Éviter l'incompréhension de l'utilisateur qui pense avoir rempli correctement le champ et qui le voit signalé en erreur.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Si la saisie attendue est sensible à la casse, préciser dans l'étiquette associée au champ qu'elle doit être réalisée en majuscules ou en minuscules selon le cas.

#### Contrôle

Pour chaque formulaire

- Détecter les champs dont la saisie est sensible à la casse en inscrivant le texte demandé en majuscules puis en minuscules et contrôler si, dans l'un des deux cas, la saisie est rejetée ;

- En cas de rejet de la saisie à cause de sa casse, vérifier que l'étiquette associée à chaque champ, via l'élément  `label`  ou dans l'attribut  `aria-label` , informe l'utilisateur de cette sensibilité.

- 

### 72 - L'étiquette de chaque champ de formulaire qui le nécessite indique les limites de nombre de caractères

#### Objectif

- Prévenir les erreurs d’envoi de formulaires.

- Prévenir les pertes de données.

- Éviter l'agacement et l'incompréhension de l'utilisateur.

#### Mise en œuvre

Pour chaque champ faisait l'objet d'une limitation spécifique du nombre de caractères qui peuvent être saisis, indiquer le nombre de caractères maximum dans l'étiquette du champ, ou dans une mention explicitement associée à celle-ci dans le code HTML.

#### Contrôle

Vérifier, pour chaque champ faisant l'objet d'une limitation spécifique du nombre de caractères qui peuvent être saisis, que le nombre de caractères autorisés est indiqué dans l'étiquette du champ, ou via une mention explicitement associée à celle-ci dans le code HTML.

### 73 - La création d'un mot de passe par l'utilisateur fait l'objet d'un mécanisme de prévention des erreurs de saisie.

#### Objectif

- Éviter à l'utilisateur de saisir un mot de passe qui ne correspond finalement pas à celui qu'il a souhaité ou mémorisé.

#### Mise en œuvre
Proposer, après le champ de saisie du mot de passe, un champ de confirmation où le mot de passe doit être saisi à nouveau et vérifier que les deux saisies sont effectivement identiques lors de la soumission.

#### Contrôle

Dans le cas d'une création de mot de passe :

- Vérifier qu'un mécanisme de double saisie des mots de passe, généralement présent sous la forme de deux champs successifs, est systématiquement présent.

### 74 - Les caractères saisis dans un champ de mot de passe peuvent être affichés en clair.

#### Objectif

- Faciliter la saisie des mots de passe, notamment sur les claviers virtuels des terminaux mobiles.

- Prévenir les erreurs.

#### Mise en œuvre
Afficher un bouton associé à un script qui bascule la valeur de l’attribut type du champ de saisie entre les valeurs  `password` et `text`.

#### Contrôle

Contrôler manuellement la possibilité d’afficher le mot de passe en clair via un dispositif inclus dans la page.

### 75 - Chaque étiquette de formulaire est visuellement rattachée au champ qu'elle décrit.

#### Objectif

- Permettre aux utilisateurs d'identifier sans ambiguïté les champs de formulaire et la nature des informations à saisir.

- Prévenir les erreurs de saisie.

- Faciliter et accélérer l'usage du formulaire.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Veiller à ce que l'étiquette visible de chaque champ de formulaire soit affichée à proximité immédiate du champ concerné, afin que le rapport entre ceux-ci puisse être perçu sans ambiguïté.

Éviter les mises en forme de formulaire entraînant la présence d'un espace vide important entre un champ et son étiquette, ou un positionnement inhabituel de l'étiquette telle qu'une étiquette placée en-dessous du champ, ou une étiquette de case à cocher placée au dessus de celle-ci.

#### Contrôle

Pour chaque formulaire

- S'assurer que chaque étiquette de formulaire est affichée à proximité immédiate du champ concerné sur toutes les tailles d'écran (attention au mobile);

- Vérifier que l'étiquette occupe une position prévisible : au-dessus ou à gauche d'un champ sauf pour les champs  `input type radio`  et  `checkbox`  où elle peut se trouver à droite ou à gauche du champ.

La proximité immédiate est une mesure à préciser selon le contexte mais elle est de l'ordre d'une trentaine de pixels maximum pour une étiquette placée à gauche du champ, d'un interligne pour une étiquette placée au-dessus du champ et de quelques pixels pour l'étiquette d'une case radio ou à cocher.

### 76 - Les informations contextuelles se rapportant à un champ de formulaire lui sont visuellement rattachées.

#### Objectif

- Faciliter l'utilisation des formulaires dans tous les contextes utilisateurs, notamment les utilisateurs de loupe d'écran ou ceux qui doivent grossir le texte de façon importante.

- Prévenir les erreurs de saisie.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

#### Mise en œuvre

- Afficher les informations qui viennent compléter l'étiquette du champ (aide à la saisie, signalement des erreurs, etc.) à proximité immédiate du champ et de son étiquette, afin que le rapport entre ceux-ci puisse être perçu sans ambiguïté.

- Éviter les mises en forme de formulaire entraînant la présence d'un espace vide important entre ces éléments.

#### Contrôle

Vérifier pour chaque champ de formulaire :

- Que les éventuelles informations complétant l'étiquette du champ (aide à la saisie, signalement des erreurs, etc.) sont affichées à proximité immédiate du champ et de son étiquette.

- Qu'il n'y a pas d'espace vide important entre ces éléments.

### 77 - En cas de rejet des données saisies dans un formulaire, les champs contenant les données rejetées sont indiqués à l'utilisateur.

#### Objectif

- Donner un retour à l'utilisateur sur l'action qu'il vient d'effectuer.

- Guider l'utilisateur directement vers les éléments sur lesquels il doit agir.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Faire figurer en début de formulaire un message indiquant que tout ou partie des champs nécessite une correction de la saisie précédente. Indiquer également cette information dans l'élément `title`  de la page.

Ajouter éventuellement au message en début de formulaire la liste des champs à corriger.

Indiquer explicitement dans l'étiquette de chaque champ concerné qu'il doit être corrigé.

#### Contrôle

Pour chaque formulaire :

- Soumettre différentes erreurs possibles dans chaque formulaire telles que absence de saisie d'un champ obligatoire, non-respect d'un format demandé ou prévisible (format d'adresse mail, de date, etc.), sensibilité à la casse.

- Puis, vérifier que l'utilisateur est informé de la présence d'erreurs à corriger au moins dans l'élément `title`  de la page et que chaque champ erroné est signalé via son étiquette.

### 78 - En cas de rejet des données saisies dans un formulaire, les raisons du rejet sont indiquées à l'utilisateur.

#### Objectif

- Aider l'internaute à comprendre ce qu'on attend et, ainsi, faciliter le passage à l'étape suivante.

- Éviter la frustration de l'utilisateur face à une erreur dont il n'aurait pas la solution immédiate.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

#### Mise en œuvre

Pour chaque champ contenant des données rejetées, indiquer la nature de l'erreur et fournir une aide à la correction

- Soit en début de formulaire, dans une liste des champs erronés ;

- Soit dans le contexte de chaque champ, autant que possible via leur étiquette `label`.

#### Contrôle

Pour chaque formulaire examiné :

- Soumettre les différentes erreurs possibles dans chaque formulaire absence de saisie d'un champ, non-respect d'un format demandé ou prévisible (format d'adresse mail, de date, etc.), sensibilité à la casse, etc.

- Vérifier, si la saisie est rejetée, que la nature de l'erreur est précisée de manière à fournir l'aide nécessaire à sa correction, par l'un des moyens indiqués dans le paragraphe de mise en oeuvre.

### 79 - En cas de rejet des données saisies dans un formulaire, toutes les données saisies peuvent être modifiées par l'utilisateur.

#### Objectif

- Laisser la main à l'utilisateur sur la totalité des informations qu'il donne.

- Faciliter la correction des erreurs commises par l'utilisateur.

- Permettre à l'utilisateur de modifier des informations sur lesquelles il voudrait revenir.

- Éviter que l'utilisateur ne quitte le formulaire avant validation définitive.

#### Mise en œuvre

Stocker toutes les données saisies dans des **variables de session** afin de pouvoir les afficher de nouveau telles qu'elles ont été saisies dans les champs.

Rendre possible la modification des champs après rejet des données.

#### Contrôle

Pour chaque formulaire audité

- Provoquer le rejet de la saisie en soumettant les différentes erreurs possibles : absence de saisie d'un champ, non-respect d'un format demandé ou prévisible (format d'adresse mail, de date, etc.), sensibilité à la casse ;

- Puis, vérifier que le formulaire est affiché de nouveau tel qu'il a été rempli, ceci afin de pouvoir éventuellement de le corriger.

### 80 - Les messages d'erreur personnalisés sont exprimés dans la langue du formulaire.

#### Objectif

- Prévenir les difficultés de saisie et améliorer la compréhension des messages d’erreur.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

S'assurer que tous les messages d'erreur prévus par les outils de gestion d'erreur de saisie sont traduits et délivrés dans la même langue que les autres libellés du formulaire (étiquettes, etc.)

#### Contrôle

Vérifier que tous les messages d'erreur affichés lors de la saisie dans un formulaire sont dans la même langue que les autres libellés du formulaire (étiquettes, etc.)

### 81 - Lors de la saisie d'un formulaire réparti sur plusieurs pages, un récapitulatif global est affiché avant l'envoi définitif.

#### Objectif

- Donner à l'utilisateur une vue globale de ce qu'il a saisi dans les pages précédentes.

- Permettre à l'utilisateur de vérifier l'ensemble des informations d'une procédure complexe avant la soumission définitive.

#### Mise en œuvre

Stocker les informations saisies dans des variables de session afin de pouvoir en afficher un récapitulatif global avant validation.

#### Contrôle

Pour chaque formulaire réparti sur plusieurs pages :

- Soumettre complètement le formulaire.

- Vérifier que la soumission finale donne lieu à l'affichage d'un récapitulatif des saisies successives, affiché avant la validation finale du processus par l'utilisateur.

### 82 - La page affichée après l'envoi d'un formulaire permet de reprendre directement la navigation.

#### Objectif

- Éviter de dérouter l’utilisateur en le menant à une page en impasse, y compris par l’utilisation de la fonction « page précédente » du navigateur.

- Limiter le risque de double envoi de formulaire.

#### Mise en œuvre
Après envoi d'un formulaire, afficher une page de confirmation du succès ou d'avertissement d'échec de l'envoi, où sont présents les éléments de navigation du site.

#### Contrôle
Pour chaque formulaire examiné

- Remplir les champs demandés et soumettre le formulaire ;

- Vérifier que l'envoi final de chaque formulaire présent dans le site est suivi de l'affichage d'une page comportant les éléments nécessaires à la poursuite de la navigation (menu principal, lien retour en page d'accueil, etc.).

### 83 - La soumission d'un formulaire est suivie d'un message indiquant la réussite ou non de l'action souhaitée.

#### Objectif

- Fournir à l'utilisateur un retour immédiat et explicite sur l'action qu'il vient d'effectuer.

- Éviter la frustration d'un utilisateur qui pense que le processus s'est déroulé avec succès alors qu'il y a eu un problème.

#### Mise en œuvre

Retourner une page de confirmation explicite après soumission d'un formulaire.

#### Contrôle

Pour chaque formulaire

- Soumettre complètement le formulaire ;

- Vérifier que la soumission finale du formulaire donne lieu à l'affichage d'une page de confirmation indiquant explicitement la réussite ou l'échec de l'opération concernée.

### 84 - L'utilisateur est averti au début d'un processus complexe de la nature des données et documents exigés.

#### Objectif

- Augmenter le taux de réussite du processus complexe.

- Maintenir et améliorer l’image de marque.

- Permettre à l'utilisateur de préparer les éventuels documents nécéssaires.

#### Mise en œuvre
Pour tout processus complexe, par exemple un formulaire de commande, afficher avant la première étape de celui-ci la liste des documents ou informations spécifiques qui devront être fournis par l'utilisateur pour finaliser le processus.

#### Contrôle
Vérifier pour chaque processus complexe que la liste des documents ou informations spécifiques nécessaires pour finaliser le processus est indiquée à l'utilisateur avant la première étape de celui-ci.

### 85 - Les processus complexes sont accompagnés de la liste de leurs étapes.

#### Objectif

- Donner de la visibilité à l'utilisateur sur les actions qu'il va réaliser (temps, ordre des étapes, informations nécessaires pour les accomplir, etc.).

- Éviter que l'utilisateur ne se sente piégé dans un processus dont il n'avait pas prévu la durée.

#### Mise en œuvre
Pour tout processus complexe, par exemple un formulaire de commande, afficher à chaque étape la liste intégrale de toutes ses étapes.

#### Contrôle

Dans le cas de processus complexes :

- Vérifier, pour chaque page concernée, que la liste des étapes y est indiquée, en règle générale sous forme d'un chemin d'étapes en tête de page ou de formulaire.

### 86 - L'étape en cours d'un processus complexe est indiquée.

#### Objectif

- Permettre à l'utilisateur d'identifier le degré d'avancement dans un processus.

- Rassurer l'utilisateur lors de la réalisation d'un processus complexe.

#### Mise en œuvre
Préciser sur chaque page du processus l'étape correspondant à la page en cours.

#### Contrôle
Dans le cas de processus complexes, vérifier, pour chaque page concernée, que l'étape en cours y est indiquée

- Dans le titre de page ;

- Dans le contenu de page, sous la forme d'une mise en évidence dans le chemin d'étapes en tête de page ou de formulaire, par exemple « Étape 2 – Coordonnées » ou « Étape 4 – Paiement ».

### 87 - Chaque étape d'un processus complexe permet de revenir à l'étape précédente.

#### Objectif

- Faciliter l’utilisation des formulaires répartis sur plusieurs pages successives.

- Réduire les risques d’erreurs de saisie. Limiter les risques d’abandon en cours de processus.

#### Mise en œuvre

Fournir à chaque étape du formulaire un bouton de navigation permettant de retourner à l’étape précédente.

#### Contrôle

Vérifier manuellement la possibilité de revenir à chaque étape précédente du processus.

### 88 - L'utilisateur est averti de la perte d'information en cas d'utilisation de l'historique de son navigateur dans un processus complexe.

#### Objectif

- Faciliter l’utilisation des formulaires répartis sur plusieurs pages successives.

- Limiter les risques d’abandon en cours de processus.

#### Mise en œuvre

Générer une alerte JavaScript en cas de l’utilisation de la fonctionnalité « back » de l’historique du navigateur.

#### Contrôle
Amorcer la saisie d’un formulaire après la première étape du processus, puis activer le bouton « back » du navigateur.

### 89 - La navigation dans un processus complexe ne provoque pas la perte des données précédemment soumises.

#### Objectif

-Faciliter la saisie et sa correction dans les formulaires répartis par étapes.

- Limiter les risques d’abandon en cours de procédure.

#### Mise en œuvre
Prévoir, au niveau de la gestion de la navigation dans les étapes du processus, l’enregistrement des données saisies à chaque étape, de manière à pouvoir afficher à nouveau celle-ci sans perte de données après que l’utilisateur a utilisé le mécanisme de navigation dans les étapes.

#### Contrôle
Utiliser le mécanisme de navigation dans les étapes précédentes de la saisie et vérifier manuellement que les données saisies à chaque étape sont conservées et affichées à nouveau par la suite.

### 90 - Le copier coller est possible dans les champs de formulaire.

#### Objectif
- Faciliter la saisie dans les formulaires.

#### Mise en œuvre

- Ne pas intercepter les événements JavaScript  `onpaste`  ou  `keydown`  pour bloquer le coller dans un champ de formulaire.

- Ne pas intercepter les événements JavaScript  `oncopy`  ou  `oncut`  pour bloquer le copier dans un champ de formulaire.

#### Contrôle

Vérifier qu’il est possible de copier le contenu de chaque champ y compris les champs de type  `password`  (en utilisant le menu contextuel du navigateur ou à défaut un mécanisme propre au formulaire).Vérifier qu’il est possible de coller un contenu dans chaque champ y compris dans les champs de type  `password`  (en utilisant le menu contextuel du navigateur ou à défaut un mécanisme propre au formulaire).

### 91 - Les éléments d'une liste déroulante qui peuvent être regroupés le sont de manière appropriée.

#### Objectif

- Permettre aux aides techniques de restituer à l’utilisateur une liste dont l’organisation est clairement perceptible et qui facilite le passage d’un élément de la liste à un autre.

- Favoriser un rendu approprié des listes déroulantes complexes dans tous les navigateurs.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Utiliser l'élément  `optgroup`  pour baliser les regroupements thématiques d'éléments option dans les listes  `select` .

Utiliser l'attribut  `label`  de l'élément  `optgroup`  pour afficher l'étiquette de chaque regroupement.

#### Contrôle

Pour chaque liste déroulante :

- Ouvrir chaque liste ( `select` ) pour détecter celles qui nécessiteraient un regroupement d'éléments  `option` , par exemple des regroupements de modèles de voitures classés par marques ou des regroupements de villes réalisés par département ;

- Vérifier, en examinant le code source à l'aide de Firebug, que chaque série d'éléments  `option`  qui devraient être regroupés est balisée avec l'élément  `optgroup`  ;

- Vérifier que chaque élément  `optgroup`  est doté d'un attribut  `label`  associant un libellé pertinent au groupe d'options concerné.

### 92 - Les listes d'options de formulaires sont présentées dans un ordre identifiable.

#### Objectif
- Permettre aux utilisateurs d'accéder rapidement à l'item de liste recherché.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre
- Présenter les items dans un ordre identifiable, par exemple par ordre alphabétique ou chronologique.

#### Contrôle
Pour chaque liste déroulante contenant plusieurs items

- Vérifier, pour chaque liste  `select` , que les éléments  `option`  apparaissent dans un ordre identifiable (alphabétique, numérique, chronologique, thématique, etc.).

La vérification s'effectue manuellement en contrôlant visuellement l'ordre des éléments au sein de chaque élément  `select` .

### 93 - Les champs de saisie de type mail, URL, téléphone, nombre, recherche, mots de passe, heure et date sont dotés du type approprié.

#### Objectif
- Permettre l’utilisation des claviers virtuels adaptés aux différents types de saisie sur les terminaux mobiles.

- Faciliter la validation de la saisie.

- Améliorer la compatibilité avec les terminaux mobiles.

#### Mise en œuvre
Doter chaque élément input concerné d’un attribut type correspondant à la saisie attendue :  `email` ,  `url` ,  `tel` ,  `number` ,  `search` ,  `password` ,  `date` ,  `time` .

#### Contrôle
Vérifier, pour chaque élément input concerné, la présence de l’attribut type doté de la valeur correspondant au type de saisie attendue :  `email` ,  `url` ,  `tel` ,  `number` ,  `search` ,  `password` ,  `date` ,  `time` .