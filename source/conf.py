# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Label Ecole V0'
copyright = '2024, Vincent Deguin'
author = 'Vincent Deguin'
release = '0.0.1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

comments_config = {
   "utterances": {
      "repo": "https://github.com/Deugz/SP-LE-Mar-CDUI",
      "optional": "config",
   }
}

comments_config = {
   "hypothesis": True
}



extensions = [
  
  "myst_parser",
  "sphinx_design",
  "sphinx_comments",
  "sphinx_new_tab_link",
  "sphinx_book_theme",
  "sphinx_togglebutton",
  "sphinx_thebe",
  "hoverxref.extension",
  "sphinx_new_tab_link",
  "sphinx_sitemap",  
]

html_baseurl = 'https://deugz.github.io/SP-LE-Mar-CDUI/build/html/index.html'

import os
intersphinx_mapping = {
    'self': ('', 'objects.inv'),
}

hoverxref_auto_ref = True
hoverxref_domains = ['std']

myst_enable_extensions = ["colon_fence", "linkify", "substitution"]
myst_heading_anchors = 2



templates_path = ['_templates']
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store", "**.ipynb_checkpoints"]



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'pydata_sphinx_theme'
html_logo = "_static/logos/Label-Ecole-Logo.png"
html_favicon = "_static/logos/Label-Ecole-Logo.png"
html_static_path = ['_static']

html_theme_options = {
    "analytics_id": "",  # ID Google Analytics (ça marche ?)
    "external_links": [

    ],
    "header_links_before_dropdown": 4,    
    "icon_links": [
        {
            "name": "Drive",
            "url": "https://drive.google.com/drive/folders/1Gqv0_RDXwI7om8ob1uVuu7__oYLtDHYp",
            "icon": "fa-brands fa-google-drive",
        },
        {
            "name": "Calendrier",
            "url": "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FParis&showPrint=0&mode=WEEK&hl=fr&src=dmRlZ3VpbkBsYWJlbC1lbW1hdXMuY28&src=Y185OWQ3Y2M0MWJhYjE4OTBlYWYyY2FhZmJjZDZjYWZiN2ZjMWRiNmZkYzI1Y2UwYmQ0ZTgzMGFmNzkwZmU1YTgxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=bG1lcmVzc2VAbGFiZWwtZW1tYXVzLmNv&color=%230B8043&color=%234285F4&color=%230B8043&color=%23AD1457",
            "icon": "fa-regular fa-calendar-days",
        },
        {
            "name": "Discord",
            "url": "https://github.com/Deugz/Encyclopedia-Home",
            "icon": "fa-brands fa-discord",
        },
        {
            "name": "GitHub",
            "url": "https://github.com/Deugz/SP-Label-Ecole",
            "icon": "fa-brands fa-github",
        },
    ],
    
    "logo": {
        "text": " &nbsp (13) CDUI &nbsp ",
        "image_dark": "_static/logos/Label-Ecole-Logo.png",
        "alt_text": "",
    },
    
    
    "navbar_start": ["navbar-logo"],
    
}


html_css_files = ["css/custom_style.css", "css/slider.css", "css/flash-card.css",'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&family=Montserrat:wght@400;700&display=swap',]
html_js_files = ["_static/scripts/slider-script.js", "_static/scripts/page-layout.js", ]

    
