# Post-Wordpress

## Introduction

### Pendant la formation

```{note}

Explication de ce qu'on a fait jusque là:
- hébergement 
- GUI wordpress (travail en ligne sur l'interface wordpress)
- ...

```


### Et après ?

Et bien après il va falloir que tu récupère le fruit de ton dur labeur, car nous nous devons acceuillir une nouvelle cohorte d'apprenants et on va donc utiliser les hébergements de vos sites pour eux. A la fin de vos examens nous exportons les fichiers de vos site et les stockons dans un disque dur.

```{note}

Ca pourrait être intéréssant de faire faire la manip par les apprenants eux même.

```

Récupérer les fichiers, c'est bien mais il faut pouvoir **reconstruire le site** (avec ou sans wordpress), dans l'optique de pouvoir le retravailler ou de le valoriser pour la suite de votre parcours professionel.

<p class="p-emphase">2 Solutions</p>

::::{grid} 2

:::{grid-item-card}
:columns: 6
Export et travail en local
^^^

- Solution gratuite
- Un peu technique à mettre en place

:::

:::{grid-item-card}
:columns: 6
Transfert vers hébergement perso
^^^

- Solution payante
- Nécéssite l'achat d'un nom de domaine et d'une soltion d'hébergement
- Moins compliqué

:::

::::


## Export

Solution gratuite (mais plus complexe) pour continuer à travailler sur son site. Vous récupérez les fichiers qui ont été générés par wordpress et vous aurez la maitrise de ce que vous souhaitez en faire. Continuer à travailler dessus ou les mettre entre les mains d'un développeur (ce qui n'est pas votre métier je vous le rappelle).  

### 1. Récupérer les Fichiers 

::::{grid} 2

:::{grid-item}
:columns: 5

> A près avoir récupérer et extrait le fichier .zip, nous obtenons le dossier suivant. La majeur partie des fichiers sont des fichiers {term}`PHP`. Cela veut dire que pour pouvoir afficher ce genre de fichier, il va falloir que nous transformions notre ordinateur en {term}`Serveur`.

:::

:::{grid-item}
:columns: 7

```{figure} Docs/Capture-fichiers-wp-export.png
---
width: 100%
name: fichiers-wp-export
---
Capture d'écran du dossier obtenue à la suite d'un export depuis wordpress
```


:::

::::


### 2. Installer un serveur local

> Tu dois installer un logiciel qui contient {term}`Apache` (serveur web), {term}`PHP` (interpréteur) et {term}`MySQL` (base de données). Il existe plusieurs options : 


::::{grid} 3

:::{grid-item-card}
:link: https://www.apachefriends.org/fr/index.html
:class-header: bg-light
:columns: 4
**XAMPP**
^^^

```{image} Docs/Xampp-logo.png

```

+++
?
:::

:::{grid-item-card}
:link: https://www.mamp.info/en/windows/
:class-header: bg-light
:columns: 4
**MAMP**
^^^

```{image} Docs/mamp-viewer-logo.png


```

+++
?
:::

:::{grid-item-card}
:link: https://localwp.com/
:class-header: bg-light
:columns: 4
**localwp**
^^^

plus tard

+++
?
:::

::::


#### **Exemple** : MAMP

<br>

```{note}

J'ai choisi MAMP car je l'ai déja testé par le passé et ça m'avait semblé assé facile (ou en tout cas, j'avais réussi à le faire marcher)

```

- **Installation** : Personellement j'ai décoché les deux options du début (MAMP Pro et MAMP Viewer).

<br>




### 3. Inclure ton site sur le serveur

::::{grid} 2

:::{grid-item}
:columns: 5

> Bien Une fois que tu as installé MAMP, il va falloir que tu le localises dans les dossiers de ton ordinateur. Normalement tu peux sélectionner un dossier spécifique pendant l'installation, *mais personnes ne fait vraiment attention* ... Il se situe doc probablement à la racine de ton ordinateur c'est a dire dans le dossier :C/ . Le dossier devrait simplement s'appeler MAMP et devrait être organisé comme sur la 

:::

:::{grid-item}
:columns: 7

```{figure} Docs/Capture-fichiers-MAMP.png
---
width: 100%
name: MAMP-capture-fichier
---
Capture d'écran de l'interface MAMP lorsque l'on clique sur l'icone présente sur e bureau
```


:::

::::



### 4. Lancer le serveur


::::{grid} 2

:::{grid-item}
:columns: 5

> A près avoir récupérer et extrait le fichier .zip, nous obtenons le dossier suivant. La majeur partie des fichiers sont des fichiers {term}`PHP`. Cela veut dire que pour pouvoir afficher ce genre de fichier, il va falloir que nous transformions notre ordinateur en {term}`Serveur`.

:::

:::{grid-item}
:columns: 7

```{figure} Docs/MAMP-capture.png
---
width: 100%
name: MAMP-capture
---
Capture d'écran de l'interface MAMP lorsque l'on clique sur l'icone présente sur le bureau
```


:::

::::


### 5. Ouvrir PHPMYADMIN

```{note}

Image de l'interface

- Expliquer les différentes sections ...

```

```{figure} Docs/Capture-PHPMYADMIN.png
---
width: 100%
name: Capture-PHPMYADMIN
---
Capture d'écran de l'interface MAMP lorsque l'on clique sur l'icone présente sur le bureau
```


### 6. Importer la BDD

BDD ca veut dire base de donnée.



### 7. Configure Wordpress

::::{grid} 2

:::{grid-item}
:columns: 7



:::

:::{grid-item}
:columns: 5

Localise ton fichier `wp-config.php` dans le dossier qui comprend tout les fichiers de ton site et qui est inclue dans le dossier `htdocs`. Si tu l'ouvre dans `VS-Code` il devrait ressembler à l'image présenté à gauche

```php

define('DB_NAME', 'wordpress_local'); // Nom de la base créée
define('DB_USER', 'root');            // Utilisateur MySQL par défaut avec MAMP
define('DB_PASSWORD', 'root');        // Mot de passe par défaut avec MAMP
define('DB_HOST', 'localhost');

```

:::

::::

### 8. Visualise ton site

Une fois ces actions effectués, tu devrais pour visualiser ton site dans ton navigateur. Pour cela :

- Vérifie quel port est utilisé par MAMP

```{note}

Créer un gif pour montrer les différentes étapes

```

## Transfert FTP

- Fait partie des choses à savoir faire selon le référentiel ({bdg-link-danger}`🎓 Animations Vidéo <../../../../Diplome/Competences/Dev-Web/Adapter.html#ftp-focus>`)

```{note}

Demander une note à Grégoire ou créer du contenue pédagogique approprié

```
