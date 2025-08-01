# Identification et Contact

## Règles

### 94 - La page d'accueil expose la nature des contenus et services proposés.

#### Objectif

- Donner aux utilisateurs une vision immédiate de la nature du site et des contenus proposés.

- Éviter les recherches inutiles.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Prévoir sur la page d'accueil une information, une phrase, un contenu résumant les contenus et services proposés dans le site.

#### Contrôle

Dans la page d'accueil :

- Vérifier la présence d'une information, d'une phrase ou d'un contenu résumant les contenus et services proposés dans le site.


### 95 - Si le site est réservé ou destiné à un public spécifique, ce public est mentionné au moins sur la page d'accueil.

#### Objectif

- Éviter des consultations inutiles.

- Délivrer un avertissement aux utilisateurs.

#### Mise en œuvre

Faire figurer sur la page d'accueil un message d'avertissement explicite sur la nature des contenus et le public auquel ils sont destinés ou réservés.

#### Contrôle

Pour tout site dont la consultation peut choquer ou n'être pas adaptée à une certaine catégorie de la population (mineurs, etc.)

- Vérifier la présence d'un message d'avertissement explicite en page d'accueil, sur la nature des contenus proposés et sur le public auquel ils sont destinés ou réservés.

### 96 - L'identité de l'auteur, de la société ou de l'organisation est indiquée.

#### Objectif

- Permettre aux utilisateurs d’identifier sans ambiguïté un interlocuteur physique capable de répondre aux questions éventuelles sur les contenus proposés, ou d’assumer les responsabilités liées à ces contenus.

- Rassurer l'utilisateur en lui permettant d'identifier directement l'auteur (au sens large).

- Limiter les risques de défiance.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Indiquer, au moins sur une page et idéalement sur chaque page, le nom de l'auteur, de l'entité ou de la société qui propose le service.

Si le nom du site est identique à celui de l'entité qui le propose, ce qui est relativement fréquent, notamment pour les entreprises, la mention de ce nom dans le logo ou la baseline suffit à respecter la bonne pratique.

#### Contrôle

Au sein de la page d'accueil ou au moins dans une page accessible depuis la page d'accueil (fréquemment, la page des mentions légales) ou encore dans chacune des pages du site (souvent en pied de page) :

- Vérifier manuellement que le nom de l'auteur, de l'entité ou de la société proposant le service est mentionné dans au moins une de ces pages.

### 97 - Le titre de chaque page permet d'identifier le site.

#### Objectif

- Permettre aux utilisateurs d'identifier immédiatement le site dans les onglets, les favoris, dans la fenêtre du navigateur ou encore dans les lecteurs d'écran.

- Améliorer le référencement du site et sa présentation dans les moteurs de recherche.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre
Rédiger le contenu de l'élément title de chaque page de manière à y indiquer le nom du site.

#### Contrôle
Pour chaque page du site, vérifier que le nom du site est présent dans le titre (élément title) de page.

Le contrôle peut être effectué de manière exhaustive si l'on dispose d'un outil permettant de dresser la liste complète des titres de toutes les pages (c'est le cas, par exemple, de Xenu's Link Sleuth). Il peut également être effectué à partir d'une vérification des templates utilisés par le CMS ou d'un échantillon de pages-types représentatives de ceux-ci. Dans tous les cas, on veillera à prendre en compte tout particulièrement les pages dépendant de services tiers, où la bonne pratique risque davantage de ne pas avoir été prise en compte.

### 98 - Le titre de chaque page permet d'identifier son contenu.

#### Objectif

- Permettre aux utilisateurs d'identifier immédiatement la nature des contenus de chaque page dans les onglets, les favoris, dans la fenêtre du navigateur ou encore dans les lecteurs d'écran.

- Améliorer le référencement des pages et leur présentation dans les moteurs de recherche.

- Améliorer l’accessibilité des contenus aux personnes handicapées.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Rédiger le contenu de l'élément  `title`  de chaque page de manière à ce qu'il décrive, de la façon la plus concise possible, le contenu ou la fonction de la page , y compris à la suite d'une requête Ajax modifiant de manière essentielle le contenu de la page.

Préciser quelle est l'étape en cours d'un processus dans l'élément title des pages. Par exemple, inscrire « Étape 3 de votre inscription » dans l'élément  `title`  de la page correspondant à la troisième étape d'un formulaire d'inscription.

Préciser, dans le cas de l'affichage d'une série de résultats de recherche, quel est l'intervalle de résultats affiché dans la page courante. Par exemple, « Résultats 10 à 19 de la recherche sur “Foo” ».

Préciser l'état dans le titre d'une page de demande de confirmation ou d'annulation lors de la soumission d'un formulaire (exemple : « Demande de confirmation de suppression - Mes documents »).

#### Contrôle

Dans toutes les pages du site, y compris dans les pages d'un processus ou d'une série de résultats de recherche, ou encore dans les pages dont le contenu peut être modifié de manière majeure via Ajax :

- Vérifier que chaque titre de page (élément  `title` ) permet d'identifier le contenu ou la fonction de la page.

### 99 - Le code source des pages contient un appel valide à une icône de favori.

#### Objectif

- Améliorer l'identification visuelle du site et de ses pages.

- Faciliter l'identification dans le navigateur et dans les favoris ou signets.

- Permettre l'affichage, l'appel, et la mémorisation éventuelle de l'icône de favori par tous les navigateurs.

#### Mise en œuvre

Selon le format choisi pour l'icône et son emplacement, utiliser un lien du type :

`<link rel="icon" type="image/png" href="/img/favicon.png"/>` (format png, mais aussi jpg, gif, etc.) ;

`<link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" />` (format ico Microsoft seul reconnu par Internet Explorer).

#### Contrôle

Dans le code source de chaque page examinée :

- Vérifier, à l'aide d'un outil de développement web ou d'un inspecteur de code, que l'élément `link rel`  est présent dans l'en-tête de page  `head`  ;

- Vérifier que sa syntaxe est de la forme :

`<link rel="icon" type="image/png" href="/img/favicon.png"/>` pour les formats png, mais aussi jpg, gif, etc. ;

ou `<link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" />` pour le format ico Microsoft.

### 100 - L'adresse complète et le numéro de téléphone des sociétés et organisations sont disponibles depuis toutes les pages du site.

#### Objectif

- Donner aux utilisateurs qui le souhaitent la possibilité d'accéder sans difficulté aux moyens de contact téléphoniques et postaux.

- Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

#### Mise en œuvre

Indiquer l'adresse postale complète et le numéro de téléphone de la société ou de l'organisme

- Dans chaque page du site ;

- Ou dans une page Contact ou À propos, accessible directement depuis chaque page du site.

#### Contrôle

Dans chaque page du site ou dans au moins une page directement disponible depuis toutes les pages du site

- Vérifier la présence de l'adresse postale complète et du numéro de téléphone de la société ou de l'organisme.

### 101 - Le numéro d'immatriculation délivré aux sociétés ou organisations au terme des procédures légales d'enregistrement en vigueur dans leur pays est indiqué.

#### Objectif

- Fournir aux utilisateurs une indication vérifiable de l'existence officielle de la structure qui propose les contenus ou le service.

#### Mise en œuvre

Indiquer le numéro d'immatriculation délivré à la société ou association au terme des procédures légales d'enregistrement en vigueur dans son pays. Cette bonne pratique ne s'applique pas aux personnes physiques, sauf si elles sont constituées en entité juridique (freelances, auto-entrepreneurs, etc.).

#### Contrôle

Sur la page d'accueil, ou sur la page des mentions légales, la page d'à propos, de contact, ou encore dans les pages consacrées aux conditions générales d'utilisation ou de vente :

- Vérifier que le numéro d'immatriculation délivré à la société ou association au terme des procédures légales d'enregistrement en vigueur dans son pays est indiqué.

### 102 - Le site propose au moins deux moyens de contact.

#### Objectif

- Optimiser les possibilités de retour d’information de la part des utilisateurs.

- Éviter de mettre l’utilisateur en difficulté en cas d’indisponibilité ou de problèmes d’utilisation de l’un des moyens de contact.

#### Mise en œuvre
Par exemple, indiquer l’adresse postale ou le numéro de téléphone de l’auteur et/ou du webmestre et mettre en place un formulaire permettant de les contacter.

#### Contrôle
Dans l’ensemble du site :

- Vérifier la présence d’au moins deux modes de contact.

- Vérifier qu’il est possible de joindre effectivement l’auteur et/ou le responsable technique via les modes de contact proposés.

### 103 - Les délais de réponse aux demandes d'information sont indiqués.

#### Objectif

- Informer les utilisateurs sur les délais chiffrés de réponse.

- Limiter les risques de relance de la part des utilisateurs.

- Rassurer sur la capacité à prendre en compte les demandes.

#### Mise en œuvre

Indiquer le délai chiffré de réponse prévu pour chaque formulaire de demande d'information.

#### Contrôle

Dans toute page comportant un formulaire de contact, vérifier qu'une indication chiffrée de délai de réponse est présente.

Ni le délai en lui-même ni son respect effectif ne font l'objet d'une validation : seule la présence de sa mention est contrôlée.

### 104 - Les horaires et tarifs de fonctionnement des services mis à la disposition des utilisateurs sont indiqués.

#### Objectif

- Permettre aux utilisateurs de connaître les services mis à leur disposition et leur fonctionnement.

#### Mise en œuvre

Indiquer les horaires et tarifs de fonctionnement des services mis à la disposition des utilisateurs.

#### Contrôle
Dans au moins une des pages suivantes : la page d'accueil, la page consacrée aux mentions légales, la page d'aide ou encore dans les pages consacrées aux conditions générales d'utilisation ou de vente :

- Vérifier que les horaires et tarifs de fonctionnement des services mis à la disposition des utilisateurs sont indiqués.

### 105 - Chaque demande d'information fait l'objet d'un accusé de réception.

#### Objectif

- Informer les utilisateurs de la prise en compte de leur demande.

- Permettre aux utilisateurs d’obtenir une confirmation archivable de la bonne réception de leur demande d’information.

#### Mise en œuvre

Faire en sorte que la validation de chaque formulaire de contact ou de demande d’information déclenche l’envoi d’un accusé de réception à l’attention de l’envoyeur. Cela suppose bien entendu de rendre obligatoire le champ de saisie de l’adresse e-mail dans chaque formulaire.

#### Contrôle

Via un formulaire de contact ou via le canal de contact mail indiqué :

- Adresser une demande d’information fictive en utilisant une adresse e-mail réelle.

- Contrôler qu’un accusé de réception est bien reçu à cette adresse.

### 106 - Tous les mails fournissent au moins un moyen de contact.

#### Objectif

- Permettre à l’utilisateur de répondre aux mails ou de prendre contact.

- Maintenir ou améliorer l’image de marque du service.

#### Mise en œuvre

Dans chaque mail adressé à l'utilisateur, y compris ceux en "no-reply", indiquer à l'utilisateur au moins un moyen de contact : adresse, téléphone, formulaire en ligne, mail, etc.

#### Contrôle

Vérifier pour chaque mail envoyé à l'utilisateur par le site, y compris ceux en "no-reply", qu'il fournit à celui-ci au moins un moyen de contact : adresse, téléphone, formulaire en ligne, mail, etc.

### 107 - Le site propose au moins un moyen de contacter le responsable des réclamations.

#### Objectif

- Permettre aux utilisateurs de s'adresser ou d'adresser directement leurs réclamations au bon interlocuteur.

- Rassurer les internautes sur le fait qu'ils pourront facilement interagir avec le service des réclamations en cas de problème.

#### Mise en œuvre

Indiquer dans la page d'accueil, ou au sein de la page des mentions légales, dans la page d'à propos, d'aide, ou encore dans les conditions générales, un moyen de contacter (e-mail, téléphone, fax…) le responsable des réclamations.

#### Contrôle

Dans au moins une des pages suivantes : la page d'accueil, la page des mentions légales, la page d'à propos, d'aide, ou encore dans les pages consacrées aux conditions générales de vente ou d'utilisation :

- Vérifier la présence d'informations permettant d'entrer en contact (e-mail, téléphone, fax…) avec le responsable des réclamations.

La nature du moyen de contact en question n'est pas évaluée ici seule sa présence et sa mention sont contrôlées.

### 108 - Le site propose au moins un moyen de contacter le modérateur des espaces publics.

#### Objectif

- Permettre aux utilisateurs de contacter le modérateur pour demander une correction, poser une question ou signaler des abus.

- Renforcer la confiance des utilisateurs sur l’utilisation de leurs données

#### Mise en œuvre

Par exemple, indiquer l'adresse e-mail du modérateur ou mettre en place un formulaire permettant de le contacter.

#### Contrôle

Dans chaque espace public du site (zone de commentaire, forum, etc.) ou, à défaut, dans une page générique telle que la page des mentions légales, la page contact, la rubrique d'aide ou encore dans les conditions d'utilisation :

-Identifier un moyen de contacter le modérateur ;

- Vérifier qu'il est effectivement possible de contacter le modérateur via le(s) mode(s) de contact proposé(s).

### 109 - L'identité de la personne ou du service responsable des contenus est indiquée.

#### Objectif

- Permettre aux utilisateurs d'identifier sans ambiguïté un interlocuteur physique capable de répondre aux questions éventuelles sur les contenus proposés, ou d'assumer les responsabilités liées à ces contenus.

#### Mise en œuvre

Indiquer le nom d'une personne physique responsable des contenus sur le site.

#### Contrôle

Au sein de la page d'accueil ou au moins sur une page consultable depuis la page d'accueil (fréquemment, la page des mentions légales) ou encore sur chacune des pages du site (souvent en pied de page)

- Vérifier manuellement que la mention d'une personne physique ou du service responsable des contenus du site est présente dans au moins une des pages citée ci-dessus.

### 110 - Si le site déclare respecter un ou plusieurs standards ou référentiels, un lien est proposé vers chacun d'entre eux.

#### Objectif

- Faciliter la compréhension par l'utilisateur des règles de qualité, d'accessibilité ou autres appliquées sur le site.

- Accroître la confiance dans les informations délivrées sur le site.

#### Mise en œuvre

Fournir un lien vers chaque standard ou référentiel concerné.

#### Contrôle

Dans l'ensemble du site, et notamment dans la page d'accueil, la page des mentions légales, la page d'à propos, d'aide ou d'accessibilité ou encore dans les pages consacrées aux conditions générales de vente ou aux conditions de livraison ou de remboursement :

- Vérifier la présence d'un lien vers chaque standard ou référentiel que le site ou le service déclare respecter.

