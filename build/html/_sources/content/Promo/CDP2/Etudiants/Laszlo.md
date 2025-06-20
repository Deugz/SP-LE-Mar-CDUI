# Laszlo

***

::::{grid} 

:::{grid-item-card}
:link: https://drive.google.com/drive/folders/1gy0X0FW5UCf2msNQ7d4fxF-95kOPSQnB?usp=drive_link
:class-header: bg-light
:columns: 4
**Drive**
^^^


```{image} ../../Docs/Logos/256px-Google_Drive_icon_(2020).svg.png
:width: 100%
```

:::

:::{grid-item-card}
:link: https://docs.google.com/document/d/16aKI5B6lty5nxEUtild6hQbaCzxV2esN/edit?usp=drive_link&ouid=113070474897761784681&rtpof=true&sd=true
:class-header: bg-light
:columns: 4
**CDC**
^^^


```{image} ../../Docs/Logos/256px-Microsoft_Office_Word_(2019–present).svg.png
:width: 100%
```

:::

:::{grid-item-card}
:link: https://www.canva.com/design/DAGUF2whjeg/UMWbYzex1s2EbMyUrfZnUw/view?utm_content=DAGUF2whjeg&utm_campaign=designshare&utm_medium=link&utm_source=editor
:class-header: bg-light
:columns: 4
**Canva**
^^^


```{image} ../../Docs/Logos/Canva_icon_2021.svg
:width: 100%
```

:::

::::

## Projet

<p class="p-emphase">Je lançe un service en ligne de gravure laser sur bois pour créer des petits objets personnalisables (magnets, cartes, cadeaux, accessoires…) destinés aux particuliers comme aux professionnels (événementiel, entreprises, artisans...)</p>

- [Questionnaire](https://forms.gle/K2WYRTWP4dCm4JNZ8)


### Vidéo

Vidéo qui explique la méthode

## Besoins

### Plugin de dessin 

```{note}

Pour son projet, Laszlo souhaite permettre à ses utilisateurs de dessiner un pattern qu'il gravera ensuite sur du bois.

```

#### Plugin Wordpress

##### WPDrawSVG

- [lien]()

- Fonctionnalités :
    - Permet de dessiner sur une toile HTML5 avec des outils vectoriels.
    - Peut être intégré dans une page ou un article.
    - Les dessins peuvent être exportés au format SVG.

#### Plugin HTML

<p class="p-emphase">Intégration manuelle</p>

- [SVG-Edit](https://github.com/SVG-Edit/svgedit) : (open source)
- [Fabric.js](https://fabricjs.com/)

##### Test (SVG-Edit)

<iframe
    id="svgEditorContainer"
    src="https://svgedit.netlify.app/editor/index.html"
    width="100%"
    height="600px"
    frameborder="0">
</iframe>

###### En pratique

Ajoute ce bout de code dans ton site

```{html}

<iframe
    id="svgEditorContainer"
    src="https://svgedit.netlify.app/editor/index.html"
    width="100%"
    height="600px"
    frameborder="0">
</iframe>

```


## Test

### Boutton en bois


<style>
    .wood-button {
      background-image: url('https://www.publicdomainpictures.net/pictures/270000/velka/wood-texture-background.jpg');
      background-size: cover;
      background-position: center;
      border: 2px solid #5c3b20;
      border-radius: 14px;
      color: #2b1a0e;
      font-size: 22px;
      padding: 18px 36px;
      box-shadow:
        inset 2px 2px 5px rgba(0, 0, 0, 0.6),
        inset -2px -2px 4px rgba(255, 255, 255, 0.1),
        4px 4px 12px rgba(0, 0, 0, 0.3);
      text-shadow:
        1px 1px 0 #000,
       -1px -1px 0 #000,
        inset 0 0 6px rgba(0, 0, 0, 0.7);
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .wood-button:hover {
      transform: translateY(-2px);
      box-shadow:
        inset 1px 1px 3px rgba(0, 0, 0, 0.5),
        6px 6px 10px rgba(0, 0, 0, 0.4);
    }

    .wood-button:active {
      transform: translateY(1px);
      box-shadow:
        inset 2px 2px 6px rgba(0, 0, 0, 0.7);
      text-shadow: none;
      color: #1a0d05;
    }
</style>


<button class="wood-button">Gravé Bois</button>






