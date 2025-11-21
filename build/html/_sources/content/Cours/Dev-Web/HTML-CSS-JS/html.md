# 19.a - HTML

<br>

***

## 🏄 Avant de Commencer 

::::{grid} 3

:::{grid-item}
:columns: 8

> La première couche de développement, le corps, l'architecture, le contenue. 4 lettres que vous n'oublierez plus jamais ... HTML pour *HyperText Markup Language* 

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


***

<br>

::::{grid} 3

:::{grid-item}
:columns: 8

<div id="div-no-colour"> 

<p class="p-emphase"><strong>Objectifs Pédagogiques</strong></p>



- ⭐ Objectif 1
- ⭐ ⭐ Objectif 2
- ⭐ ⭐ ⭐ Objectif 3

    
```{note}

Enumérer les différents objectifs pédagogiques (star classification avec difficulté taxonomie de bloom)

```

</div>
 
:::


:::{grid-item}
:columns: 4

<div id="div-colour"> 

<p class="p-emphase"><strong>Sommaire</strong></p>

[🧠 **La Théorie**](#la-theorie)

- 🌐 Internet
- 🕸️ World Wibe Web
- 💻 Site Web
- 🛒 E-Commerce
- 💑 Le Consommateur

<br>
<br>

[💪 **Mise En Pratique**](#mise-en-pratique)

- Activité A
- Activité A

</div> 

<br>
    
:::
    
::::




:::{dropdown} Syllabus

> **Module 19**: *HTML_CSS_JS*
>
>**Objectif global**: 
>
>L'objectif global est que l'apprenant découvre les bases du HTML5
>
>**Plan de cours**:
>- Découvrir le fonctionnement des sites web
>- Créer une première page web en HTML
>- Organiser son texte
>- Créer des liens
>- Insérer des images
>- Connaître les règles du W3C (checklist Opquast)
>
>
>**Livrables**:
>- Structurer une landing page ou un portfolio

:::


:::::{dropdown} Support de Cours 

::::{tab-set}
:::{tab-item} CDP 1

A venir

:::

:::{tab-item} Autres promos

<iframe src="https://drive.google.com/file/d/1zas8h2quL4vJPAHz7xQ2_Xtgeo0mCfox/preview" 
        width="100%" 
        height="400px" 
        frameborder="0" 
        allowfullscreen>
</iframe>


:::

::::

:::::


## 🧠 La Théorie

```{note}

On peut faire un truc cool ici !!

- A travailler !!

```

### Introduction au HTML

#### HTML ?

::::{grid} 2

:::{grid-item}
:columns: 8

> Explication rapide

:::

:::{grid-item}
:columns: 4

<script
  src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.1/dist/dotlottie-wc.js"
  type="module"
></script>
<dotlottie-wc src="../../../../_static/lottie/C19-HTML5.lottie" style="width: 100%; height: auto" autoplay loop></dotlottie-wc>

:::

::::

 

<br>


::::::{tab-set}

:::::{tab-item} HyperText

<br>

L’hypertexte est un texte qui peut **mener vers d’autres contenus** grâce à des liens appelés *hyperliens*.

:::::

:::::{tab-item} Markup

<br>

Le “markup” est un **système de balises** qui sert à organiser, structurer ou décrire un document.

:::::


:::::{tab-item} Langage

<br>

Un langage est un **ensemble de règles et de mots** permettant de communiquer quelque chose. Ici, HTML est un langage qui permet de communiquer **avec un navigateur web**.

:::::

:::::{tab-item} Définition complète

<br>

Un langage est un **ensemble de règles et de mots** permettant de communiquer quelque chose. Ici, HTML est un langage qui permet de communiquer **avec un navigateur web**.

:::::

::::::



#### Un Langage de Structure 

```{note}

Trouver une analogie sympa pour expliquer ce concept abstrait

```

- Fonctionnement général : navigateur → interprétation du code



- Version actuelle : HTML5, évolution et nouveaux apports

```{note}

Créé un tab-item (dropdown) avec les différentes versions ?

```

### Écrire en HTML

#### Les Balises

```{note}

Créer quelque slide pour présenter successivement les différents éléments.

```

- Balises ouvrantes / fermantes

- Attributs

- Indentation, lisibilité, hiérarchie

- Notions de blocs vs inline



##### Balises de structure / sémantiques

Pourquoi la sémantique est importante (accessibilité, SEO, cohérence UI)

- `<header>`    
- `<nav>` 
- `<main>` 
- `<section>` 
- `<article>` 
- `<aside>` 
- `<footer>`


##### Textes et contenus

- Titres `<h1>` à `<h6>`

- Paragraphe `<p>`

- Mise en emphase : `<strong>`, `<em>`

- Listes `<ul>`, `<ol>`, `<li>`

- Citations : `<blockquote>`, `<q>`

##### Médias

- Images : `<img>` (src, alt, rôle UI/UX)

- Vidéos avec `<video>` et audio `<audio>`

- Iframes : usages, limites


##### Liens et navigation

`<a>` : attributs href, target, bonnes pratiques

Liens internes / externes / ancres



#### Attributs


##### Globaux

- Attributs globaux (`id`, `class`, `title`, `style`, `role`)


##### Accessibilité

- `alt`

- attributs ARIA (vue d’ensemble sans détail technique)

```{note}

Explorer ce qu'est l'ARIA

```

<p class="p-emphase">Accessible Rich Internet Applications</p>

Description des éléments non textuels : Sur une page web, de nombreux éléments peuvent ne pas être accompagnés de texte descriptif, tels que les icônes ou les éléments graphiques. L’attribut aria-label permet de pallier ce manque en fournissant une description textuelle, facilitant ainsi la compréhension de ces éléments par les utilisateurs.


### le DOM 

- Arborescence du document

- Noeuds, parents, enfants, frères

- Importance pour :

    - styling CSS

    - interactions JS

    - lecture par les technologies d’assistance

### Bonnes Pratiques

#### W3C

```{note}

Identifier le lien entre W3C et Opquast

```

### Synthèse

```{warning}

Trouver des documents voire créer un cours storyline pour expliquer les différents raccourcis clavier VS code

```

## 💪 Mise En Pratique



```{note}

Quelles activités ?

- check trello

```


## 📈 Pour Finir

### Conclusion

```{note}

Conclusion plus fiche résumé (production collaborative ? Framanote ?) - produire un pdf exportable

```

### Test 

#### Tes Connaissances

```{note}

Créer un grand Storyline pour ajouter un questionnaire a chaque cours, enregistre la progression de l'apprenant et offre une collection de badge !! 

```


#### Ton Projet

::::{grid} 2

:::{grid-item-card}
:columns: 6

**Dossier Projet**

^^^

- Livrable 1

:::


:::{grid-item-card}
:columns: 6

**Présentation Canva**

^^^

- Livrable 1
    
:::
    
::::


### Sources


::::{grid} 3

:::{grid-item}
:columns: 8

- Lister 

    

:::


:::{grid-item}
:columns: 4

<p class="p-emphase"><strong>Glossaire</strong></p>

```{note}

termes du glossaire

```

:::
    
::::


**Liste Figures**


```{note}

Référencer les figures de la page ?

```

#### Plus de Ressources


### Commentaires

```{note}

Lien vers formulaire de feedback + possibilité de donner son avis dans les commentaires.

```


### Notes pendant le cours

