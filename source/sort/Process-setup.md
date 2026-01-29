# Workflow multi-machines 

<p class="p-emphase">avec Git, Python, venv, JupyterLab et Sphinx</p>

Ce document décrit le workflow complet pour travailler sur un projet de documentation Sphinx hébergé sur GitHub, depuis plusieurs ordinateurs, avec un environnement Python reproductible.

---

## Objectifs

- Synchroniser le projet entre plusieurs machines
- Utiliser un environnement Python isolé
- Construire la documentation Sphinx localement
- Publier via GitHub Pages
- Éviter les conflits et incohérences de dépendances

---

## Architecture recommandée

Organisation standard du projet :

```

mon-projet/
│
├─ .venv/                 # Environnement virtuel local (ignoré par Git)
├─ docs/
│   ├─ conf.py
│   ├─ index.md
│   └─ _build/
│
├─ requirements.txt
├─ .gitignore
└─ README.md

````

Le dossier `.venv` :

- est local
- n'est jamais versionné
- est recréé sur chaque machine

---

## Installation de Git (système)

Git doit être installé au niveau du système, pas via pip.

### Vérification

```bash
git --version
````

### Remarque importante

Git **ne doit pas apparaître dans requirements.txt**.

---

## Création de l'environnement virtuel

Depuis le dossier du projet :

```bash
python -m venv .venv
```

---

## Activation du venv

### Windows PowerShell

```powershell
.venv\Scripts\Activate.ps1
```

Si erreur de sécurité :

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### Vérification

```powershell
where python
```

Résultat attendu :

```
...mon-projet\.venv\Scripts\python.exe
```

---

## Utilisation avec JupyterLab

### Installation du kernel

```bash
pip install ipykernel jupyterlab
```

### Enregistrement du kernel

```bash
python -m ipykernel install --user --name .venv --display-name "Python (.venv)"
```

Dans JupyterLab :

```
Kernel → Change Kernel → Python (.venv)
```

---

## Dépendances Sphinx

Les extensions sont déclarées dans `docs/conf.py` :

```python
extensions = [
  "myst_parser",
  "sphinx_design",
  "sphinx_comments",
  "sphinx_new_tab_link",
  "sphinx_book_theme",
  "sphinx_togglebutton",
  "sphinx_thebe",
  "hoverxref.extension",
  "sphinx_sitemap",
  "sphinx_last_updated_by_git",
  "sphinxcontrib.bibtex"
]
```

---

## Correspondance extensions → packages pip

| Extension Sphinx           | Package pip                |
| -------------------------- | -------------------------- |
| myst_parser                | myst-parser                |
| sphinx_design              | sphinx-design              |
| sphinx_comments            | sphinx-comments            |
| sphinx_new_tab_link        | sphinx-new-tab-link        |
| sphinx_book_theme          | sphinx-book-theme          |
| sphinx_togglebutton        | sphinx-togglebutton        |
| sphinx_thebe               | sphinx-thebe               |
| hoverxref.extension        | sphinx-hoverxref           |
| sphinx_sitemap             | sphinx-sitemap             |
| sphinx_last_updated_by_git | sphinx-last-updated-by-git |
| sphinxcontrib.bibtex       | sphinxcontrib-bibtex       |

---

## Problème courant MyST : linkify

Erreur rencontrée :

```
ModuleNotFoundError: Linkify enabled but not installed
```

Solution :

```bash
pip install linkify-it-py
```

---

## requirements.txt final recommandé

```txt
sphinx==8.2.3

myst-parser
linkify-it-py

sphinx-design
sphinx-comments
sphinx-new-tab-link
sphinx-book-theme
sphinx-togglebutton
sphinx-thebe
sphinx-hoverxref
sphinx-sitemap
sphinx-last-updated-by-git
sphinxcontrib-bibtex
```

---

## Installation des dépendances

Toujours après activation du venv :

```bash
pip install -r requirements.txt
```

---

## Construction de la documentation

Depuis le dossier `docs` :

```powershell
.\make html
```

Ou en multiplateforme :

```bash
sphinx-build -b html docs docs/_build
```

Résultat :

```
docs/_build/html
```

---

## Workflow multi-ordinateurs

### Sur l'ordinateur B

```bash
git add .
git commit -m "update docs"
git push origin main
```

---

### Sur l'ordinateur A

Récupérer les changements :

```bash
git pull origin main
```

Puis :

```bash
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

---

## Important : git status vs GitHub

Commande :

```bash
git status
```

Montre seulement l'état local.

Pour récupérer les changements distants :

```bash
git fetch
git pull
```

---

## Erreur ObjectNotFound (.venv)

Erreur :

```
ObjectNotFound: .venv\Scripts\Activate.ps1
```

Cause :

Tu n'es pas dans le dossier du projet.

Solution :

```powershell
cd C:\Users\Label Ecole\Projets\mon-projet
.venv\Scripts\Activate.ps1
```

---

## Bonnes pratiques finales

* Un `.venv` par projet
* Toujours activer avant pip ou sphinx
* Toujours versionner `requirements.txt`
* Toujours faire `git pull` avant de travailler
* Ne jamais versionner `.venv`
* Tester le build localement avant push

---

## Résumé du workflow standard

```text
Cloner repo
→ créer venv
→ activer venv
→ installer requirements
→ travailler
→ builder sphinx
→ commit
→ push
→ pull sur autre machine
```

---


