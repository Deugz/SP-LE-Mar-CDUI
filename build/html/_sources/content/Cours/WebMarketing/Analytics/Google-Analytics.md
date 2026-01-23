# 24 - Web Analytics

<br>

***

## 🏄 Avant de Commencer 

::::{grid} 3

:::{grid-item}
:columns: 8

> Et pour finir, Google Analytics ! Ca y est, notre site est en ligne, fidèle à notre maquette, elle même construite sur une base solide de recherche utilisateur. Mais qu'en est-il en vrai, qui sont nos utilisateurs réels, qui achète nos produits et qui abandonne en chemin, pourquoi ? Autant d'infos qu'on va voire comment récupérer dans le cours d'aujourd'hui !

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

<br>

<p class="p-emphase"><strong>Objectifs Pédagogiques</strong></p>

<br>
<br>

<div class="OP-slider">
<button class="OP-nav-btn OP-left" id="OP-prev">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>


<div class="OP-stage" id="OP-stage">
<article class="OP-card">
<div class="OP-media" id="OP-1">Mémoriser</div>
<div class="OP-content"><p>⭐</p><p>Définir ce qu’est un outil d’analyse d’audience et à quoi sert Google Analytics.</p></div>
</article>
<article class="OP-card">
<div class="OP-media" id="OP-1">Mémoriser</div>
<div class="OP-content"><p>⭐</p><p>Identifier les principales notions de Google Analytics (utilisateurs, sessions, pages vues, taux d’engagement, source de trafic).</p></div>
</article>
<article class="OP-card">
<div class="OP-media" id="OP-1">Mémoriser</div>
<div class="OP-content"><p>⭐</p><p>Reconnaître les étapes de mise en place de Google Analytics sur un site WordPress.</p></div>
</article>
<article class="OP-card" >
<div class="OP-media" id="OP-2">Comprendre</div>
<div class="OP-content"><p>⭐⭐</p><p>Expliquer l’intérêt de mesurer le trafic pour améliorer un site web ou un portfolio.</p></div>
</article>
<article class="OP-card" >
<div class="OP-media" id="OP-2">Comprendre</div>
<div class="OP-content"><p>⭐⭐</p><p>Décrire les différentes sources de trafic (organique, direct, referral, social).</p></div>
</article>
<article class="OP-card">
<div class="OP-media" id="OP-2">Comprendre</div>
<div class="OP-content"><p>⭐⭐</p><p>Interpréter les données principales affichées dans l’interface Google Analytics.</p></div>
</article>
<article class="OP-card">
<div class="OP-media" id="OP-3">Appliquer</div>
<div class="OP-content"><p>⭐⭐⭐</p><p>Créer un compte Google Analytics et une propriété pour son site WordPress.</p></div>
</article>
<article class="OP-card">
<div class="OP-media" id="OP-3">Appliquer</div>
<div class="OP-content"><p>⭐⭐⭐</p><p>Installer Google Analytics sur WordPress (plugin ou intégration manuelle).</p></div>
</article>
<article class="OP-card">
<div class="OP-media" id="OP-3">Appliquer</div>
<div class="OP-content"><p>⭐⭐⭐</p><p>Naviguer dans l’interface Google Analytics pour consulter les rapports de base.</p></div>
</article>
<article class="OP-card">
<div class="OP-media" id="OP-4">Analyser</div>
<div class="OP-content"><p>⭐⭐⭐⭐</p><p>Analyser le comportement des visiteurs sur son site (pages consultées, durée, parcours).</p></div>
</article>
<article class="OP-card">
<div class="OP-media" id="OP-4">Analyser</div>
<div class="OP-content"><p>⭐⭐⭐⭐</p><p>Identifier les pages performantes et celles à améliorer.</p></div>
</article>
<article class="OP-card">
<div class="OP-media" id="OP-5">Évaluer</div>
<div class="OP-content"><p>⭐⭐⭐⭐⭐</p><p>Évaluer l’efficacité du site ou du portfolio au regard des données collectées.</p></div>
</article>
<article class="OP-card">
<div class="OP-media" id="OP-5">Évaluer</div>
<div class="OP-content"><p>⭐⭐⭐⭐⭐</p><p>Relier les données Analytics à des pistes d’amélioration UX/UI.</p></div>
</article>
<article class="OP-card">
<div class="OP-media" id="OP-6">Créer</div>
<div class="OP-content"><p>⭐⭐⭐⭐⭐⭐</p><p>Produire une synthèse d’analyse du trafic de son site (document, slide ou restitution orale).</p></div>
</article>
<article class="OP-card">
<div class="OP-media" id="OP-6">Créer</div>
<div class="OP-content"><p>⭐⭐⭐⭐⭐⭐</p><p>Proposer des actions concrètes d’optimisation du site à partir des données Analytics.</p></div>
</article>
    
</div>


<button class="OP-nav-btn OP-right" id="OP-next">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
</div>



<script src="../../../../_static/scripts/OP-slider.js">

</script>


 
:::


:::{grid-item}
:columns: 4

<div id="div-colour"> 

<p class="p-emphase"><strong>Sommaire</strong></p>

[🧠 **La Théorie**](#la-theorie)

- 🌐 Web Analytics ?
- 🕸️ Notre Besoin
- 💻 KPIs
- 🛒 Les Outils
- 💑 La Méthode

<br>
<br>

[💪 **Mise En Pratique**](#mise-en-pratique)

- Activité A
- Activité A

</div> 

<br>
    
:::
    
::::

<br>
<br>

- **Liens** : {bdg-link-danger}`🎓 Dev-Web Intégrer <../../../Diplome/Competences/Dev-Web/Integrer.html#dev-focus>`

<br>

:::{dropdown} Syllabus

> **Module 24**: *Gérer le trafic de son site web via Google Analytics*
>
>**Objectif global**: 
>
>L'objectif global est que l'apprenant sache comment gérer et analyser le trafic de son site web
>
>**Plan de cours**:
>- I. L'audience d'un site internet
>    - Comprendre les statistiques d'un site internet
>    - Créer un compte et installer Google Analytics sur son site
>- II. L'analyse d'audience via Google Analytics
>    - Présentation globale de Google Analytics - Les rapports
>    - Présentation globale de Google Analytics - Les pages annexes
>    - Configuration avancée de Google Analytics
>    - Configuration avancée des rapports Google Analytics
>- III. La stratégie d'amélioration d'audience
>    - Acquisition
>    - Comportements
>    - Conversion
>    - Outils marketing avancés
>
>**Livrables**:
>- Mettre en place un outil d’analyse de son site

:::


:::::{dropdown} Support de Cours 

::::{tab-set}

:::{tab-item} CDP 2

<iframe src="https://drive.google.com/file/d/1JfSRFi1qqVp1hOUbsV6BNYxLy7zNIGaS/preview" 
        width="100%" 
        height="400px" 
        frameborder="0" 
        allowfullscreen>
</iframe>

:::

:::{tab-item} CDP 1

A venir

:::

:::{tab-item} Autres promos

<iframe src="https://drive.google.com/file/d/1yvq9bMC62RNOBgS8a7yrkfRf30B-hdpd/preview" 
        width="100%" 
        height="400px" 
        frameborder="0" 
        allowfullscreen>
</iframe>

:::

::::

:::::

```{admonition} Prérequis
:class: warning

Etre sur qu'ils ont déja télécharger le plugin GA sur wordpress en amont de la session et qu'ils ont exploré les sites de chacuns.

```

## 🧠 La Théorie

### 📊 Web Analytics ?

#### Définition

<p class="p-emphase">Le Web Analytics, c’est l’art de mesurer, collecter et analyser les données d’un site web, dans le but de comprendre le comportement des utilisateurs, optimiser l’expérience client et maximiser la performance digitale.</p>

##### Les Données Web

###### C'est quoi ?

<p class="p-emphase">Un Cookie ? </p>

```{note}

Intégrer lottie

```

<p class="p-emphase">Une information </p>


###### Comment c'est récolté ?

<p class="p-emphase">En Bref</p>

- Tags

##### Histoire

```{figure} Docs/Origines-web-analytics.png
---
width: 100%
name: Origines-web-analytics
---
Figure issue du cours de Chiara (CDP2)
```
<br>

<p class="p-emphase">🤔 ... </p>

<br>

::::{grid} 5

:::{grid-item}
:columns: 6

<div class="flashcard" id="card2">
<div class="flashcard-inner">
<div class="flashcard-front">

<br><br>
<p class="p-emphase">Le monsieur tout à gauche, il vous fait pas penser à quelqu'un qu'on a déja vu ?</p>


</div>
<div class="flashcard-back">
<p><strong>Tim Berners Lee</strong>. <br><br>L'inventeur du World Wide Web lui même ! <br> Les outils d'analyse de performance sont aussi vieux que le web lui même !
</p>
</div>
</div>
</div>    

<button class="button-flash-card" onclick="flipCard('card2')">Réponse</button>


:::

:::{grid-item}
:columns: 6

<div class="flashcard" id="card1">
        <div class="flashcard-inner">
            <div class="flashcard-front">
<br><br><br>
<p class="p-emphase">Et cette définition, ca vous fait pas penser à autre chose ?</p>

<br>                

                
</div>
<div class="flashcard-back">
<p><strong>La Veille ! </strong> <br><br>Deux méthode de récoltes et d'analyse de l'information mais avec des objectifs très différents !</p>
</div>
</div>
</div>

<button class="button-flash-card" onclick="flipCard('card1')">Retourner </button>

:::

::::

<!-- partial -->
<script  src="../../../../_static/scripts/flash-card.js"></script>

<br>
<br>

:::::::{dropdown} En savoir plus

::::::{tab-set}

:::::{tab-item} Logs Serveurs

To do

:::::

:::::{tab-item} Naissance du Web Analytics

To do

::::

:::::{tab-item} Lancement de Google Analytics

To do

::::

:::::{tab-item} Fin des cookies (GA4)

To do

::::

:::::

::::::

:::::::


##### Tendences actuelles

###### Un Cookie ?

<p class="p-emphase">Non Merci !</p>

- Un Cookie ?

#### Les Données Web

```{note}

Grid 2 avec différence entre qalitatif (Test utilisateur) et quantitatif.

```

- Confirmer que nos utilisateurs sont bien ceux que l'on a ciblé

##### Parcours d'achat

```{note}

Utiliser cette section comme mis en pratique, le parcours d'achat idéal !

- Un apprenant (dont le site wordpress est le plus avancé) créé un parcours d'achat idéqlisé qu'il note sur un papier.
- Les autres font un test caché.
- On analyse ensemble les résultats et comment il peut être optimisé.

```

Test utilisateurs mais beaucoup plus poussés et surtout sur une version définitive de notre site.

```{note}

Exercice de reprise des tests utilisateurs et de définir des KPI en lien avec les changements qui ont été effectués.

```



### Vos Utilisateurs

#### Petits Rappels

```{note}

Gride avec lien vers cours en question

```

<p class="p-emphase">Une version idéalisé jusqu'ici ! </p>




### Notre Besoin

```{note}

Se baser sur le chapitre précédent pour bien définir le besoin de données (ie le minimum nécéssaire)

```

<p class="p-emphase">Comprendre les Attentes du Consommateurs</p>

Dans les différentes étapes de son parcours d'achat (qui je vous le rappelle se présente sous la forme suivante) :

```{figure} Docs/Parcours-achat-Chiara.png
---
width: 100%
name: Parcours-achat-Chiara
---
Figure issue du cours de Chiara (CDP2)
```

#### Acquisition

<p class="p-emphase">D'où viennent nos visiteurs ?</p>

- **Objectifs** : Identifier les canaux qui génèrent le plus de trafic et de valeur

"Attirer du monde, c’est bien. Mais attirer le bon public, c’est mieux."

#### Engagement

<p class="p-emphase">Comprendre les comportements des visiteurs</p>

- **Objectifs** : Identifier les comportements qui traduisent un réel intérêt

"Un visiteur qui clique et repart, c’est comme un client qui entre dans un magasin sans rien regarder. L’engagement, c’est ce qui prouve qu’il est réellement intéressé."

#### Evenements

<p class="p-emphase">Quelles actions sont effectués par les visiteurs</p>

- **Objectifs** : Comprendre les actions précises effectuées par l’utilisateur

Dans GA4, on ne parle plus seulement de pages vues, mais d’événements. Chaque action compte : clics, scrolls, visionnage de vidéos... Tout devient mesurable."

#### Conversion

<p class="p-emphase">Qu'est-ce qui a déclenché l'achat</p>

- **Objectifs** : Comprendre ce qui transforme un visiteur en client

« Le but ultime n’est pas d’avoir du trafic, mais des conversions. GA4 permet de mesurer chaque étape du tunnel d’achat pour optimiser le parcours."

#### Retention

<p class="p-emphase">Les Clients reviennent-ils ?</p>

- **Objectifs** : Comprendre ce qui incite un utilisateur à revenir régulièrement

Attirer un client coûte cher. Le fidéliser est souvent plus rentable.

### KPIs

<p class="p-emphase">Key Performance Indicators !</p>

Un concept extremement important ! 

```{note}

Lister les KPIs les plus importants dans le cadre d'un projet e-commerce.

```

### Les Outils 

On l'a vu, récolter des données est primordial pour l'amélioration continu de notre service

#### DIY ?

```{note}

Donner un exemple avec mon module Storyline et comment j'ai enregistré le taux de participation de mon module 

```

<p class="p-emphase"> C'est Compliqué ...</p>

##### Google Analytics

- GA4




##### Pourquoi faire ?

- Récolter des données quantitatives

```{note}

Présentation de l'interface, capture d'écran

``` 

<p class="p-emphase"> Comprendre ...</p>

###### Utilisateurs / Sessions


###### Evenement


##### Comment ça marche


```{note}

Système de tag

```

### Google Analytics

```{note}

Le Mastodonte

```

#### Les Fondamentaux

#### Se Lancer !


::::{tab-set}

:::{tab-item} Le Site

<br>

La première étape consiste à arriver sur le site de Google Analytics (ce qui n'est déjà pas une chose facile)

<br>

```{figure} Docs/Tuto-lancement/Lancement-Etape-1.png
---
width: 100%
name: Lancement-Etape-1
---
L'arrivée sur site.
```

<br>

```{warning}

Il est possible qu'en tapant Google Analytics dans la barre de recherche Google vous arriviez sur la page de TagManager (cf exemple ci-dessous). Si la page sur laquel vous arrivez ressemble à celle ci-dessus, tout est bon, vous pouvez cliquer sur le gros bouton bleu, pour continuer votre onboarding !

```

<br>

```{figure} Docs/Tuto-lancement/Lancement-Etape-1.b.png
---
width: 100%
name: Lancement-Etape-1
---
L'arrivée sur site.
```

:::

:::{tab-item} Creation de compte





:::

:::{tab-item} Autres promos


:::

::::




#### Fondamentaux 

##### Créer un compte



##### L'interface

#### Problèmes



```{note}

Expliquer les différents problèmes de google
- Traitement, partage et utilisation des données personelles.

```

### Alternatives

- [PostHog](https://posthog.com/)

- [Umami](https://umami.is/)

- [Matomo](https://fr.matomo.org/)

- Autres ?

#### Un Benchmark

### Synthèse

### Aller plus loin

```{note}

Explorer d'autres options, alternatives à google analytics (un peu moins GAFAM)


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

- Liste des sources

    

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

