# TrajetsSensibles — Cartographie sensible collective · Metz, France

Site web statique réunissant, sur une même carte, les parcours et les photographies de
plusieurs participants qui relient à pied **La République** (60 Rue de la Chapelle, 57000 Metz)
à la **Cathédrale Saint-Étienne** (2 Pl. de Chambre, 57000 Metz), en photographiant ce qui les
fait s'arrêter et regarder autrement.

## Crédits

| | |
|---|---|
| **Idée et conception du projet** | **Chaimae SEBTI** — M1 Arts Plastiques |
| **Site web et développement** | **hypertrophic** — [github.com/hypertrophic](https://github.com/hypertrophic) |
| Fonds de carte | © Esri (vue épurée) · © IGN — Géoplateforme (plan avec noms de rues) |
| Itinéraires piétons | © OpenStreetMap contributors (serveur OSRM) |

Références de la démarche : Georges Perec, *Tentative d'épuisement d'un lieu parisien* (1975) ;
Élise Olmedo, *Cartographie sensible* (2015) ; projet *Urban Belonging* (Copenhague, 2022).

## Contenu du dépôt

```
.
├── index.html                        ← la page du site (HTML + CSS + script de rendu)
├── donnees.js                        ← LE SEUL FICHIER À REMPLIR (participants + photos)
├── donnees-vide.js                   ← même structure, vide (réserve pour repartir de zéro)
├── MODE-D-EMPLOI.md                  ← guide de remplissage pas à pas
├── RESUME-ET-CONTEXTE-DU-PROJET.md   ← présentation et contexte du projet
├── .nojekyll                         ← désactive le traitement Jekyll de GitHub Pages
└── assets/
    ├── LISEZ-MOI.txt                 ← consignes pour les photographies
    ├── participant-1/ … participant-5/  ← 18 images de démonstration (à remplacer)
    └── _generer-images-demo.py       ← script qui a fabriqué ces visuels (supprimable)
```

Le site est livré avec des **données de démonstration** (5 participants fictifs, 18 images
neutres portant un bandeau « IMAGE DE DÉMONSTRATION ») afin que la carte, les chemins et la
galerie soient visibles immédiatement. Pour partir d'une page blanche : renommer
`donnees.js` en `donnees-demonstration.js`, renommer `donnees-vide.js` en `donnees.js`, puis
vider les dossiers `assets/participant-*`.

## Fonctionnement technique

- **100 % statique** : aucun serveur, aucune base de données, aucun compte. Trois fichiers
  suffisent (`index.html`, `donnees.js`, `assets/`).
- **Carte** : Leaflet 1.9.4 + fonds Esri (épuré) et IGN Géoplateforme (noms de rues).
- **Tracés** : chaque portion A → photo 1 → … → B est calculée sur le réseau piéton
  d'OpenStreetMap (OSRM) et suit donc réellement les rues ; les itinéraires sont mémorisés
  dans le `localStorage` du navigateur. Un bouton *Rues / Direct* permet de comparer avec
  les segments à vol d'oiseau. Hors connexion, une carte schématique de secours s'affiche,
  avec des tracés indicatifs.
- **Données** : tout se règle dans `donnees.js` (nom, couleur, mot du trajet, et pour chaque
  photo : `fichier`, `lat`, `lng`, `mot`, `legende`, `date`).

## Mise en ligne (GitHub Pages)

1. Créer un dépôt **public** (ex. `trajets-sensibles`) et y déposer tout le contenu de ce
   dossier — `index.html` doit être **à la racine** du dépôt, pas dans un sous-dossier.
2. Dans le dépôt : **Settings → Pages → Build and deployment → Source : Deploy from a branch**,
   puis **Branch : `main`** et dossier **`/ (root)`**. Enregistrer.
3. Attendre une minute : le site est en ligne sur
   `https://<compte>.github.io/<depot>/` (ex. `https://hypertrophic.github.io/trajets-sensibles/`).

Aucune étape de compilation n'est nécessaire : ce dépôt ne contient que des fichiers à servir
tels quels. Le fichier `.nojekyll` évite que GitHub Pages ne tente de « compiler » le site avec
Jekyll (et garantit que le dossier `assets/` est servi sans transformation).

Mise à jour du contenu : modifier `donnees.js` et déposer les vraies photographies dans
`assets/participant-*`, puis renvoyer les changements (commit + push). La page se met à jour
en une minute environ.

---

*Atelier de cartographie sensible collective — Chaimae SEBTI, M1 Arts Plastiques. Site web et
développement : hypertrophic ([github.com/hypertrophic](https://github.com/hypertrophic)).*
