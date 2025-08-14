# 20 - Wordpress

```{toctree}
:maxdepth: 2
:hidden:

Elementor
Woocomerce
Post-wordpress/Post-wordpress

```

<br>

***

<br>

::::{grid} 3

:::{grid-item}
:columns: 8

> Wordpress, la destination finale. celle qui nous achèvera tous et toutes 

:::


:::{grid-item}
:columns: 4

<div id="div-colour"> 
    
<strong>Informations</strong>

✍  - Vincent <br> 
🚧 - En cours<br>
🔨 - 13/08/2025    
🕑 - 20 - 30 min <br>

 

</div>    

<br>

 
    
:::
    
::::

:::{dropdown} Syllabus

> **Module 20**: *Développer et optimiser son site sous WordPress*
>
>**Objectif global**: 
>
>L'objectif global est que l'apprenant sache développer un site avec le CMS WordPress
>
>**Plan de cours**:
>- I. Savoir choisir un nom de domaine :
>    - Organisation mondiale du système de nommage
>    - Règles d'enregistrements des noms de domaine par extension
>    - Programme des nouvelles extensions internet
>    - Stratégie de nommage internet
>    - Acquisition de noms de domaine stratégiques détenus par des tiers
>- II. Découvrir WordPress et déployer un site rapidement :
>    - Découvrir WordPress
>    - Connaître le fonctionnement d'un site web
>    - Installer WordPress en local
>- III. Prendre en main l'administration de votre site WordPress :
>    - Connectez-vous au dashboard WordPress et créer un premier article
>    - Paramétrer les options de votre site WordPress
>    - Mettre en place une page d'accueil personnalisée et créer un menu de navigation
>    - Personnalisez l'apparence du site grâce au customizer
>- IV. Personnaliser les contenus et le design d'un site WordPress :
>    - Définir le design global du site
>    - Prendre en main Elementor et designer une page d’accueil
>    - Intégrer des fonctionnalités complémentaires grâce aux extensions
>    - Intégrer des fonctionnalités avancées
>- V. Choisir, installer et configurer les composants WordPress adaptés au projet :
>    - Définissez le type de site que vous souhaitez créer
>    - Choisissez votre thème et votre page builder
>    - Installez et configurez votre thème WordPress
>    - Choisissez et installez les extensions WordPress pertinentes pour votre projet
>- VI. Finalisez et lancez votre site WordPress :
>    - Optimiser le SEO et suivez le trafic d'un site
>    - Optimiser les temps de chargement d'un site
>    - Vérifications à faire avant de lancer un site
>    - Connecter le nom de domaine et finaliser les configurations
>
>**Livrables**:
>- Réaliser un site web ou e-commerce sous WordPress

:::


:::::{dropdown} Support de Cours 

::::{tab-set}
:::{tab-item} CDP 1

A venir

:::

:::{tab-item} Autres promos

<iframe src="https://drive.google.com/file/d/1urk6HqNvdNwbPoQk0VhE9eJ9A2lhjpBR/preview" 
        width="100%" 
        height="400px" 
        frameborder="0" 
        allowfullscreen>
</iframe>

:::

::::

:::::

## Avant de commencer

```{note}

Ressources à exploiter:
- [airtable](https://airtable.com/appXLDuXC6f7zsBZa/shr6ZKHsPmyGiUUEo/tblbHZw7dmkFlCyP4/viwG0KPts4O55fz21?blocks=hide)

- [easywordpresstuto](https://easywordpress.fr/wp-content/uploads/2023/09/checklist-woocommerce.pdf)

- [Tuto woocomerce complet](https://www.youtube.com/watch?app=desktop&v=i7jy8pmw1a8&utm_source=chatgpt.com)

```

```{warning}

Gros travail pédagogique à faire style les différents ingrédients et après en mode livre de recettes pour les différetes étapes. A chaque fois introduire les différentes étapes d'un tuto

```


### Infos Pratiques

- [Liens drive id connexion](https://docs.google.com/spreadsheets/d/1Rr4-fj457lz1ENsoqAQ68IPNPIpPhJDeh5uqT8bZ9Eo/edit?gid=0#gid=0)

```{warning}

Utiliser cette section pour présenter le site à Isaure

- créer un tuto pour installer le plugin worpress (demande de Florian)

```

### Objectifs

<p class="p-emphase">Construire un site Wordpress avec Elementor et Woocomerce</p>

- Faire 4 - 5 pages bien (pas obligé de finir le site complet). L'objectif est :
    - Page d'acceuille
    - Fiche produit (faire a fond certains produits)
    - Tunnel d'acaht (modider les pages woocomerce par défaut avec elementor)

## Wordpress

### C'est Quoi Wordpress ?

Wordpress est un CMS (Content Management System, ou système de gestion de contenu en français), c'est à dire un logiciel qui permet de **créer, gérer et modifier facilement le contenu d’un site web** sans avoir à le coder (avec HTML, CSS, Javascript ou PHP). Avec un CMS, tu peux par exemple :
- ajouter des pages ou des articles
- insérer des images, vidéos, ou autres médias
- organiser le contenu
- gérer les utilisateurs et les permissions

Il propose une interface utilisateur simple (comme un tableau de bord) pour faire tout ça, souvent avec des outils visuels et des extensions pour ajouter des fonctionnalités.

👉 En résumé, un CMS te facilite la création et la gestion d’un site web sans coder.

#### Autres CMS

```{note}

Introduire les autres CMS dans un dropdown

- Joomla
- Drupal
- ...
- Prestashop Open Source !!

- Autres CMS [liste de e-commerce Nation](https://www.ecommerce-nation.fr/top-solutions-cms-ecommerce/)

- [Liste autres CMS](https://blog.hubspot.fr/website/cms?hubs_content=blog.hubspot.fr/website/lois-ux&hubs_content-cta=null&hubs_post-cta=blognavcard-website)


- [Penpot](https://penpot.app/)

```

#### Pourquoi Wordpress ?

### Les Extensions

::::{grid} 2

:::{grid-item}
:columns: 6

<p class="p-emphase">Elementor</p>

:::

:::{grid-item}
:columns: 6

<p class="p-emphase">Woocomerce</p>

:::

::::


| **Critère**               | **Elementor**                                          | **WooCommerce**                                            |
| ------------------------- | ------------------------------------------------------ | ---------------------------------------------------------- |
| **Type d’outil**          | Constructeur de pages (Page Builder)                   | Extension e-commerce (boutique en ligne)                   |
| **Fonction principale**   | Créer et personnaliser l’apparence d’un site WordPress | Vendre des produits/services en ligne                      |
| **Utilisation**           | Design visuel par glisser-déposer (drag & drop)        | Gestion de produits, commandes, paiements                  |
| **Interface**             | Éditeur visuel en temps réel (live editor)             | Tableau de bord WordPress (back-end)                       |
| **Personnalisation**      | Très poussée pour la mise en page                      | Basique par défaut, extensible avec des plugins            |
| **Produits & vente**      | Ne gère pas les ventes                                 | Gère le catalogue produits, le panier, les paiements       |
| **Compatibilité**         | Compatible avec WooCommerce (via widgets Woo)          | Peut être utilisé seul ou avec Elementor                   |
| **Version gratuite**      | Oui (avec options limitées)                            | Oui (fonctionnelle pour une boutique simple)               |
| **Version payante (Pro)** | Elementor Pro : plus de widgets, Theme Builder, etc.   | Extensions payantes pour ajouter des fonctionnalités       |
| **Fonctionnalités clés**  | Templates, responsive design, Theme Builder, popup     | Produits variables, livraison, TVA, passerelle de paiement |
| **Cible principale**      | Designers, créateurs de contenu, agences web           | Commerçants, e-commerçants, entrepreneurs                  |




#### Mettre le site en ligne

- Woocomerce - Réglages - visibilité du site - en ligne

ou

- Elementor - Outils - mode maintenance - Désactivé


#### Théorie

Serveur / Hosting

#### Nom de domaine

- OVH

##### Bonne pratiques

- Court (plus facile à taper)
- Pas de jeux de mots
- Utiliser des tirets pour clarifier 

### C'est quoi Wordpress ?

#### CMS

<p class="p-emphase">Content Management System</p>


#### Interface

Le back office

```{image} Docs/Wordpress-back-office.png
:width: 100%

```



##### Article

```{note}

Dédié aux articles de blog - utilisation initiale de wordpress

```

- Catégories : faire le lien avec le SEO

- Etiquettes : Référencement

##### Médias

Médiathèque : La ou on met nos images / photos / vidéos

```{note}

on inclut directement les images dans le constructeur et elles se mettent directement dans la médiathèque

```

##### Pages

```{warning}

Toute les pages du site
- Certaines pages sont créés par défaut (lister)

```

##### Commentaires

```{note}

Modération des commentaires du site

```


##### Woocomerce

```{note}

Apparait car le plugin Woocomerce est installé - créer une section plugin

- On verra plus tard

```

##### Elementor

Constructeur de thème

```{note}

Faire une analyse de elementor et lister les autres constructeurs de thème


```

Par défaut le constructeur de thème de Wordpress est Guttenberg

##### Apparence

Utile pour la partie menu, le reste est fait via Elementor

```{warning}

Ne pas toucher **Editeur de fichiers des thèmes**

- Peut casser le site

```

##### Extensions

```{note}

Attention dans le choix des extensions : 
- Vérifier les avis et les dernières mise a jours


- Plus on a de plugins, plus ca fait bugger le site - choisir avec précautions

- Ne pas utiliser la fonction téléverser - Utiliser le catalogue officielle

```

##### Comptes

- Utile si on est plusieurs a travailler sur le site


##### Outils

Utilse pour importer, exporter le contenue du site. On va pas le faire, pas besoin


##### Réglage

- Titre et slogan du site
- Favicon (400 - 400 px)

```{warning}

Ne pas changer l'URL

```

## Woocomerce

- **Produits**:

```{note}

Penser à réfléchir et rentrer les catégories

```

### Données produits

- produits simples
- produits variable (variation taille, couleurs, materiaux ...)

```{note}

Faire captures des différentes catégories et faire un dropdown tab avec capture des différents éléments

```

Attributs : séparer par | ex : S | M | L




## Responsive

```{note}

On ne s'interesse pas au coté tablette

```

Le responsive est un élément très important à prendre en compte dans la création du site

Dans élémentor sélectionner l'icone mobile et modifier les paramètres de style


```{note}

ne pas créer de marges et tout en px, plutot utiliser des pourcentages qui permettent que l'affichage soit similaire entre le desktop et le mobile

```

### Méthode simple

::::{grid} 2

:::{grid-item}
:columns: 6

- **Cacher les éléments et les refaire pour chaque**

Pour cacher les éléments il faut aller dans avancé - responsive - cacher les éléments - Ensuite on créé un nouvel élément sur le mobile que l'on cachera sur ordi

:::

:::{grid-item}
:columns: 6

```{figure} Docs/Capture-responsive-hide.png
---
width: 100%
name: Capture-responsive-hide
---
Capture d'écran illustrant les paramètres à sélectionner pour cacher les éléments
```

:::

::::

### Autre méthode

```{note}

Prendre l'example d'un espaceur avec le paramètre ajustable (la petite icone)

```


## Etapes

### Se poser les bonnes questions

- Quels éléments apparaissent sur toutes les pages :
    - Header
    - Footer

- Les pages uniques vont être créés sur pages

- Les éléments qui apparaissent plusieurs fois vont être créés sur Elementor, constructeur de thème



## Plugins

### Tops Plugins

- [Top 25](https://wpmarmite.com/meilleurs-plugins-wordpress/)


### Plugins Spécifiques

#### LMS

```{note}

Créer une dispo de cartes avec un dropdown en dessous pour des tests et comparatifs détaillés

```

LMS pour Learning Management System, donc des plugins qui permettent de gérer des contenus dédiés à l'apprentissage

- [Lifter](https://wordpress.org/plugins/lifterlms/)
- [Sensei](https://fr.wordpress.org/plugins/sensei-lms/)
- [Tutor](https://fr.wordpress.org/plugins/tutor/)

- [LearnDash](https://www.learndash.com/try-lms-now/)

**Autres possibilités**

- Installer H5P (plugin Moodle) sur Wordpress - [H5P](https://fr.wordpress.org/plugins/h5p/)
- plugin pour marquer les pages comme terminé (si tu souhaite créer tes cours directement sur Wordpress) - [lifterlms](https://fr.wordpress.org/plugins/lifterlms-lite-lms-progress-tracker/)

### IA

- [Cursor](https://www.cursor.com/pricing)


## Page acceuil

supprimer le titre : Aller dans la roue et selectionner l'option ne pas afficher le titre

## Implémenter votre charte graphique

### Polices personalisés

```{note}

Insérer des liens vers des sites pour convertir les polices dans les différents formats

```




## Synthèse