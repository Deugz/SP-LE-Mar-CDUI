# Sécurité

## Règles

### 192 - Toutes les pages utilisent le protocole HTTPS.

#### Objectif

- Prévenir le risque d’interception et de vol de données.

- Améliorer la sécurité du site Web.

- Rassurer les utilisateurs.

#### Mise en œuvre

Ne pas utiliser le protocole HTTP,  mais uniquement HTTPS pour toutes les ressources de chaque page du site.

#### Contrôle

Vérifier que chaque page et ressource de page du site utilise le protocole HTTPS et non HTTP.

### 193 - Les certificats de sécurité sont signés et en cours de validité.

#### Objectif

- Permettre aux utilisateurs de connaître la validité du certificat et contribuer à la sécurisation de la transaction.

#### Mise en œuvre

Faire un suivi rigoureux des certificats de sécurité utilisés sur le site en anticipant les dates de renouvellement.

#### Contrôle

Vérifier la validité du certificat à l'aide d'un outil en ligne, ou bien à l'aide des outils fournis par les navigateurs

La plupart des navigateurs affichent également une alerte lorsqu'ils rencontrent un certificat non valide.

### 194 - Les pages utilisant HTTPS ont un en-tête de transport strict.

#### Objectif

- Améliorer la sécurité des échanges.

- Prévenir les risques d’attaques.

#### Mise en œuvre

Utiliser pour chaque page l'entête HTTP Strict Transport Security et son paramètre max-age pour spécifier que le navigateur doit convertir toutes les requêtes en HTTP en requêtes HTTPS.

#### Contrôle

vérifier que le serveur envoie pour chaque page l'entête HTTP Strict Transport Security avec le paramètre max-age spécifiant la durée pendant laquelle le navigateur doit doit convertir toutes les requêtes en HTTP en requêtes HTTPS

### 195 - Les pages utilisant le protocole HTTPS ne proposent pas de ressources HTTP.

#### Objectif

- Prévenir les alertes de type "site non sécurisé" dans les outils de consultation.

- Améliorer la sécurité pour l’ensemble des ressources du site.

#### Mise en œuvre

Pour chaque page du site envoyée par le serveur en HTTPS, fournir toutes les ressources qui la composent (images, fichiers CSS, JS, etc.) via le protocole HTTPS et non via HTTP.

#### Contrôle

Pour chaque page du site envoyée par le serveur en HTTPS, vérifier qu'aucune des ressources qui la composent (images, fichiers CSS, JS, etc.) n'est fournie via le protocole HTTP.

### 196 - Les opérations relatives aux mots de passe peuvent être effectuées intégralement en ligne.

#### Objectif

- Fournir une solution immédiate au problème de l’utilisateur.

- Limiter les difficultés liées à l’utilisation d’autres modes de communication.

#### Mise en œuvre

Permettre à l'utilisateur d'effectuer toutes les actions liées au mot de passe (réinitialisation  de passe perdu, modification, etc.) intégralement en ligne. Par exemple : pas d'envoi d'un rappel de mot de passe ou d'un nouveau mot de passe par courrier postal.

#### Contrôle

Vérifier qu'il est possible d'effectuer intégralement en ligne toutes les actions liées au mot de passe (réinitialisation de mot de passe perdu, modification, etc.).

### 197 - Les mots de passe peuvent être choisis ou changés par l'utilisateur.

#### Objectif

- Permettre aux utilisateurs de choisir un mot de passe personnalisé.

- Éviter aux utilisateurs de rechercher leur mot de passe à chaque connexion.

#### Mise en œuvre

Fournir une procédure en ligne permettant le choix d'un mot de passe personnalisé dès la création du compte ou la modification ultérieure des mots de passe automatiquement générés.

Fournir un accès à la modification du mot de passe depuis la gestion du compte utilisateur ou à défaut dans le contexte du formulaire d'identification.

#### Contrôle

Dans tout site proposant un accès par mot de passe :

- Vérifier qu'il est possible de saisir le mot de passe de son choix à la création du compte ou, dans le cas où le mot de passe est automatiquement généré par le service en ligne, contrôler qu'il est possible de le modifier après l'inscription.

### 198 - Un dispositif sensibilise l'utilisateur sur le degré de sécurisation du mot de passe qu'il choisit

#### Objectif

- Informer les utilisateurs sur le niveau de sécurité du mot de passe choisi et donc sur les risques de détournement.

#### Mise en œuvre

La saisie du mot de passe donne lieu à une validation et à un retour indiquant son degré de sécurité, avant soumission définitive du formulaire d’inscription ou de changement de mot de passe.

#### Contrôle

Pour tout formulaire d’inscription ou de changement de mot de passe :

- Saisir un mot de passe et s’assurer que cette saisie donne lieu à une validation et à un retour indiquant son degré de sécurité, et ce, avant la soumission définitive du formulaire.

Cette validation peut être plus ou moins exigeante : contrôle du nombre de caractères, de l’absence de l’identifiant du compte dans le mot de passe, du type de caractères présents, etc.

### 199 - Le site propose une procédure de réinitialisation du mot de passe.

#### Objectif

- Permette à l'utilisateur d'accéder à son compte en cas de perte du mot de passe.

- Simplifier la gestion des comptes utilisateurs.

- Renforcer la sécurité en évitant le stockage de mots de passe non cryptés afin de pouvoir les communiquer de nouveau à l'utilisateur.

#### Mise en œuvre

Fournir un lien permettant l'envoi d'un mail à l'adresse associée au compte indiquant la procédure de réinitialisation.

Placer de préférence ce lien dans le formulaire de connexion.

#### Contrôle

Dans un site proposant un compte personnel protégé par mot de passe :

- Sans être identifié sur le site, vérifier la présence d'un lien du type « Mot de passe oublié ? » à proximité du formulaire de connexion ;

- Vérifier la présence d'une procédure permettant la création d'un nouveau mot de passe sur la page pointée par le lien « Mot de passe oublié ? » ;

- Vérifier qu'il s'agit bien d'une procédure de réinitialisation et non pas d'un simple renvoi du mot de passe actuel.

### 200 - Le site ne communique pas de mot de passe par mail

#### Objectif

Limiter les risques d’interception des mots de passe.

#### Mise en œuvre

Lors d'une création de compte ou en cas de demande de réinitialisation ou de rappel du mot passe, ne pas adresser celui-ci à l'utilisateur par mail. Fournir le mot de passe ou sa procédure de réinitialisation uniquement en ligne.

#### Contrôle

Vérifier qu'aucun mot de passe n'est envoyé à l'utilisateur par mail lors de la création de compte ou en cas de demande de réinitialisation ou de rappel du mot passe.

### 201 - Les en-têtes envoyés par le serveur désactivent la détection automatique du type MIME de chaque ressource.

#### Objectif

Réduire les risques de téléchargement d’un contenu dangereux dissimulé.

#### Mise en œuvre

Configurer le serveur pour adresser l’en-tête X-Content-Type-Options avec la valeur nosniff.

#### Contrôle

Vérifier, à l’aide d’un outil d’inspection des en-têtes HTTP, la présence de l’en-tête X-Content-Type-Options avec la valeur nosniff.

### 202 - Le serveur indique le type MIME de chaque ressource.

#### Objectif

- Réduire les risques de téléchargement d’un contenu dangereux dissimulé.

#### Mise en œuvre

Configurer le serveur pour adresser pour chaque ressource (texte, image, script, etc.) l’en-tête ContentType renseigné avec le type MIME approprié, par exemple :

- text/html ;

- application/pdf.

#### Contrôle

Vérifier, à l’aide d’un outil d’inspection des en-têtes HTTP, la présence de ContentType avec la valeur correspondant au type de ressource.

### 203 - Les informations sur la sécurité des transactions sont indiquées.

#### Objectif

- Contribuer à l'information des utilisateurs sur la sécurisation des échanges de données sensibles.

#### Mise en œuvre

Indiquer le mode (SSL, TLS) et le niveau de cryptage des données (128 ou 256 bits, etc.) sur les pages concernées. Il est aussi possible d'indiquer comment retrouver l'information par le biais de son navigateur dans la mesure où la plupart offrent cette possibilité.

#### Contrôle

Dans un site proposant d'effectuer des transactions en ligne : contrôler que les informations sur le niveau et le mode de cryptage des données sont facilement accessibles depuis une page d'aide ou une FAQ, par exemple. Si la procédure indique comment retrouver l'information dans l'interface d'un navigateur, elle doit faire référence aux principaux navigateurs du marché.

### 204 - Le serveur n'envoie pas la liste des fichiers des répertoires n'ayant pas de page d'index.

#### Objectif

- Éviter l'affichage de listes de fichiers contenus dans un répertoire.

- Améliorer la sécurité du serveur.

- Limiter les risques d'intrusion.

#### Mise en œuvre

Configurer le serveur pour qu'il ne renvoie pas la liste des fichiers présents dans un répertoire. Pour Apache, ajouter par exemple  `options –indexes`  dans le  `.htaccess` .

#### Contrôle

Pour chaque site audité :

- Contrôler que l'appel à un répertoire sans page par défaut – comme le répertoire des images, des scripts JS ou des feuilles de style – ne renvoie pas la liste du contenu de ce dossier (cette action peut en revanche mener à une page d'erreur ou à une redirection).

### 205 - Le serveur envoie les informations d'activation de protection cross site scripting.

#### Objectif

- Réduire les risques de téléchargement d’un contenu dangereux dissimulé.

#### Mise en œuvre

Configurer le serveur pour l’envoi de l’en-tête HTTP X-XSS-Protection avec la valeur 1 mode=block.

#### Contrôle

Vérifier, à l’aide d’un outil d’inspection des en-têtes HTTP, la présence de X-XSS-Protection avec la valeur 1; mode=block.

### 206 - Le serveur envoie les informations indiquant les domaines autorisés à intégrer ses pages dans des cadres.

#### Objectif

Réduire les risques d’utilisation trompeuse du contenu.

#### Mise en œuvre

Configurer le serveur pour l’envoi de l’en-tête HTTP X-Frame-Options avec la valeur deny (pour interdire toute inclusion de la page dans un cadre, quel qu’en soit le site) ou sameorigin (pour limiter les inclusions à des cadres du même nom de domaine que la page). La valeur allow-from (pour limiter les inclusions à des URL spécifiques) ne bénéficie pas, en revanche, à l’heure où nous écrivons ces lignes, d’un support suffisant.

### Contrôle
Vérifier à l’aide d’un outil d’inspection des en-têtes HTTP la présence de X-Frame-Options avec la valeur deny ou sameorigin.

### 207 - Le site propose un mécanisme de sécurité permettant de restreindre l'origine des contenus.

#### Objectif

- Réduire les risques d’exécution ou d’affichage d’un contenu non désirable ou d’une source non autorisée.

#### Mise en œuvre

Activer l’en-tête HTTP Content-Security-Policy avec les directives CSP 1 appropriées :

- img-src pour les images

- script-src pour le JavaScript

- style-src pour les styles CSS
- font-src pour les webfonts

#### Contrôle

Vérifier, à l’aide d’un outil d’inspection des en-têtes HTTP, la présence de l’en-tête Content-Security-Policy.

### 208 - Le serveur ne communique pas d'informations sur les logiciels et langages utilisés.

#### Objectif

- Prévenir les risques d’intrusion sur le serveur.

- Prévenir l’apparition de contenus ou scripts malveillants sur le site.

#### Mise en œuvre

Ne communiquer via les entêtes HTTP envoyés par le serveur aucune information sur les logiciels et langages utilisés côté serveur, en particulier via les entêtes Server, X-Powered-By et X-AspNet-Version.

#### Contrôle

Vérifier que les les entêtes HTTP envoyés par le serveur ne donnent aucune information sur les logiciels et langages utilisés côté serveur.

### 209 - Le contrôle d'intégrité des ressources tierces est présent et valide

#### Objectif

- Prévenir les risques de diffusion de code malveillant.

- Limiter les risques associés à la diffusion de code malveillant désindexation, plaintes…

#### Mise en œuvre

- Utiliser l'attribut integrity de chaque élément  `link`  et  `script`  (appelant un fichier externe) pour fournir au navigateur le hachage cryptographique (hachage SRI) auquel le fichier doit correspondre.

#### Contrôle

Vérifier pour chaque élément  `link`  et  `script`  (appelant un fichier externe) la présence de l'attribut  `integrity`  indiquant le hachage cryptographique (hachage SRI) auquel le fichier concerné doit correspondre.

### 210 - Le site propose au moins deux mécanismes pour valider une opération sécurisée.

#### Objectif

- Prévenir les risques d’échec des opérations.

- Éviter l'exclusion d'utilisateurs pour des raisons techniques ou matérielles.

#### Mise en œuvre

Pour toute opération sécurisée par un système de type authentification à double facteur ou autre authentification forte, fournir à l'utilisateur au moins deux mécanismes au choix pour l'utiliser (par exemple, authentification par SMS ou par  terminal de validation).

#### Contrôle

Vérifier pour toute opération sécurisée par un système de type authentification à double facteur ou autre authentification forte, que l'utilisateur a le choix entre au moins deux mécanismes (par exemple, authentification par SMS ou par  terminal de validation).

