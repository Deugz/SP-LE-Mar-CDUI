# Internationalisation

## Règles

### 123 - L'indicatif international est disponible pour tous les numéros de téléphone.

#### Objectif

- Permettre l'utilisation immédiate du contact téléphonique quel que soit le contexte utilisateur.

#### Mise en œuvre

Ajouter à chaque numéro de téléphone l'indicatif du pays sous la forme +indicatif international - numéro de téléphone.

Retirer pour chaque numéro le premier 0. Exemple pour la France : +33 1 23 45 67 89.

#### Contrôle

Pour chaque numéro de téléphone indiqué dans le site :

- Vérifier que tous les numéros sont précédés de l'indicatif du pays sous la forme +indicatif international - numéro de téléphone, par exemple +33 pour la France.

- Vérifier que le premier 0 des numéros a été retiré. Exemple pour la France : +33 6 11 22 33 44.

### 124 - Le pays est précisé pour toutes les adresses postales.

#### Objectif

- Permettre aux utilisateurs d'identifier immédiatement le pays associé à l'adresse postale, sans ambiguïté et sans avoir recours à d'autres éléments (ville, région, code postal, numéro de téléphone).

#### Mise en œuvre

Indiquer explicitement le pays dans l'adresse postale sous forme textuelle.

#### Contrôle

Pour chaque adresse postale indiquée dans le site :

- Vérifier la présence de la mention textuelle et explicite du pays dans toutes les adresses postales.

### 125 - Le code source de chaque page indique la langue principale du contenu.

#### Objectif

- Favoriser l’indexation des contenus selon leur langue.
 
- Faciliter la traduction automatique.

- Permettre une lecture correcte du contenu par un outil de synthèse vocale.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Renseigner l'attribut  `lang`  de l'élément racine  `html`  à l'aide du code langue approprié (tel qu'indiqué par le registre tenu par l'[IANA](http://www.iana.org/assignments/language-subtag-registry). En pratique, pour le français, cela donne : `<html lang="fr">` (en HTML) et `<html lang="fr" xml:lang="fr">` (en XHTML).

À défaut, dans des cas plus complexes, la langue du contenu peut être indiquée via les différents éléments parents :  `head` ,  `body` ,  `title` , etc.

En savoir plus: [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Global_attributes/lang)

#### Contrôle

La vérification consiste à contrôler la présence et la pertinence de l'attribut lang de l'élément  `html`  (ou à défaut de ses éléments descendants) dans le code source, par exemple à l'aide de Firebug. Dans le code source de chaque page :

- Vérifier que la langue par défaut du contenu est indiquée via l'attribut  `lang`  de l'élément  `html` , par exemple `<html lang="fr">` (en HTML)

- À défaut, vérifier qu'elle est au moins héritée, pour chaque élément de contenu, d'un élément parent ( `head` ,  `body` ,  `title` , etc.) via son attribut  lang .

Vérifier la validité et la pertinence du code de langue utilisé. Pour cela, recourir par exemple au Language Subtag Lookup Tool de Richard Ishida ( [lien](https://r12a.github.io/app-subtags/) )

Parmi les cas courants de codes de langue erronés, citons  `jp`  au lieu de  `ja`  pour le japonais,  `lu`  au lieu de  `lb`  pour le luxembourgeois,  `gr`  au lieu de  `el`  pour le grec,  `lat`  au lieu de  `la`  pour le latin et  `oci`  au lieu de  `oc`  pour l'occitan. Par ailleurs, les codes  `mul`  pour « langues multiples » et  `und`  pour « langue indéterminée » ne doivent pas être utilisés dans un contenu web. Enfin, l'attribut  `xml:lang`  peut être également renseigné en complément de l'attribut  `lang` , mais il n'est pas suffisant pour rendre conforme cette bonne pratique.

### 126 - La langue principale de la page cible d'un lien est identifiable lorsqu'elle diffère de celle de la page d'origine.

#### Objectif

- Permettre aux utilisateurs et outils de navigation d'anticiper le changement de langue en cours de navigation.

- Éviter aux utilisateurs de se rendre sur une page dont ils ne comprennent pas la langue.

#### Mise en œuvre

La langue cible d'un lien peut être indiquée :

- Simplement via le libellé du lien qui sera rédigé dans la langue cible ;

- Éventuellement à l'aide d'une icône appropriée (drapeau) ;

- Éventuellement de manière explicite dans le libellé du lien ou dans son contexte immédiat, en mentionnant la langue directement.

#### Contrôle

Dans le site :

- Identifier manuellement les liens dont le contenu de la page cible n'est pas rédigé dans la même langue que celle de la page courante ;

- Vérifier, pour chacun de ces liens, que l'utilisateur est immédiatement informé de la nature de la langue concernée soit à la lecture du libellé (rédigé dans la langue cible), soit via une icône, soit via une information donnée dans le contexte du lien.

### 127 - Chaque changement de langue est signalé.

#### Objectif

- Permettre aux aides techniques d’interpréter correctement les contenus exprimés dans une autre langue.

- Faciliter le travail des outils de traduction automatique.

- Améliorer l’accessibilité des contenus aux personnes handicapées

#### Mise en œuvre

Utiliser l'attribut  `lang`  et le code de langue adapté pour chaque contenu dont la langue diffère de celle de la page courante. Par exemple : `<title lang="en"> Open quality standards </title>`

Si le contenu dont la langue diffère n'est pas déjà balisé par un élément de la structure HTML existante (titre, lien, citation etc.), il est alors nécessaire d'ajouter un élément spécifique ( `div`  ou  `span` ) pour spécifier la langue de cet élément (à l'exception du contenu de l'élément  `title`  qui ne peut comporter de balisage interne).


#### Contrôle

Dans chaque page examinée :

- Repérer tous les contenus rédigés dans une autre langue que la langue principale, sans oublier les contenus des attributs HTML restitués à l'utilisateur (tel que celui de l'attribut  `alt`  des images)

Contrôler que la langue de ces contenus est précisée via un attribut  `lang`  placé sur l'élément concerné par le changement de langue (titre, lien, item de liste) ou hérité d'un élément parent.

### 128 - Les liens d'accès aux versions traduites pointent directement vers la traduction de la page courante.

#### Objectif

- Donner un accès direct et immédiat aux traductions de la page courante.

#### Mise en œuvre

Fournir sur chaque page dont le contenu a été traduit un lien ou un formulaire de navigation donnant immédiatement accès à la version traduite de la page courante, sans retour à la page d''accueil de la version linguistique concernée.

#### Contrôle

Dans le cas d'un site internationalisé :

- S'assurer que les liens vers les traductions du contenu conduisent immédiatement à la traduction du contenu de la page en cours, sans retour en page d'accueil.

### 129 - Les liens vers les versions équivalentes de la page ou du site sont rédigés dans leur langue cible.

#### Objectif

- Permettre l’identification immédiate du lien pertinent par l’utilisateur. Rendre compréhensible des liens spécialement créés pour un public spécifique.

#### Mise en œuvre

Rédiger les liens et les alternatives textuelles d'images-liens concernées dans la langue de chaque page cible. Par exemple, inscrire « English version » pour un lien menant vers une version anglaise de la page actuellement rédigée en français.

#### Contrôle
Dans le cas d'un site internationalisé :

- Vérifier que chaque lien, qui mène vers une autre version linguistique de la page ou du site, est rédigé dans la langue cible.

### 130 - Le serveur respecte l'ordre préférentiel de langues des outils de consultation.

#### Objectif

- Envoyer prioritairement à l’utilisateur la version de la page correspondant à la langue qu’il a indiqué dans les préférences de son outil de consultation.

#### Mise en œuvre

Utiliser la négociation de contenu disponible selon le serveur, en testant les valeurs de l'en-tête HTTP accept-language.

#### Contrôle
Pour un site disponible en plusieurs langues (français et anglais, par exemple) :

- Modifier les options de votre navigateur pour choisir votre langue favorite : sélectionner, par exemple, l'anglais en tant que langue préférée ;

- Taper l'URL principale du site dans ce même navigateur et vérifier que les contenus de la page sont disponibles dans la langue retenue comme favorite. Dans notre exemple, la version anglaise devrait être automatiquement renvoyée.

- Effectuer le même test en choisissant une autre langue favorite dans les options du navigateur.