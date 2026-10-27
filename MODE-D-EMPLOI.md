# TrajetsSensibles — Cartographie sensible collective, Metz, France
## Mode d'emploi (remplissage des participants et des photographies)

**Parcours commun**
- **Point A (départ)** : La République — 60 Rue de la Chapelle, 57000 Metz (49.09920, 6.17332)
- **Point B (arrivée)** : Cathédrale Saint-Étienne de Metz — 2 Pl. de Chambre, 57000 Metz (49.12028, 6.17579)
- Distance à vol d'oiseau : ≈ 2,4 km. Entre A et B, **l'itinéraire est libre**.

**Consigne unique (d'après la note d'intention)** : photographier *ce qui fait s'arrêter et regarder autrement* — une couleur, une ombre, une fissure, une présence, un sentiment de malaise, un objet abandonné, un détail qui rappelle un souvenir. Pas les plus belles images, mais les détails ordinaires.

---

## Les fichiers du site

```
TrajetsSensibles-Metz/
├── index.html                        ← la page (ne pas modifier)
├── donnees.js                        ← LE SEUL FICHIER À REMPLIR (participants + photos)
├── donnees-vide.js                   ← la même structure, mais vide (réserve)
├── MODE-D-EMPLOI.md                  ← ce document
├── RESUME-ET-CONTEXTE-DU-PROJET.md   ← présentation et contexte du projet
└── assets/                           ← les photographies, un sous-dossier par participant
    ├── LISEZ-MOI.txt
    ├── participant-1/
    ├── participant-2/
    ├── participant-3/
    ├── participant-4/
    └── participant-5/
```

➡️ **Le site est livré avec des données de démonstration** : 5 participants fictifs
et 18 images neutres (bandeau « IMAGE DE DÉMONSTRATION »), pour voir immédiatement
la carte, les chemins et la galerie fonctionner. Pour partir d'une page blanche :
renommez `donnees.js` en `donnees-demonstration.js`, renommez `donnees-vide.js`
en `donnees.js`, puis videz les dossiers `participant-*`. Voir `assets/LISEZ-MOI.txt`.

⚠️ Gardez **tout le dossier ensemble** : `index.html`, `donnees.js` et le dossier `assets/` doivent rester côte à côte.

## 1. Renseigner les participants

Ouvrez **`donnees.js`** dans un éditeur de texte (Bloc-notes, TextEdit, VS Code…).

- Remplacez `"Participant 1"`, `"Participant 2"`, etc. par les prénoms ou pseudonymes réels (laissez les guillemets).
- `couleur` : la couleur du trajet sur la carte (déjà remplie, modifiable).
- `motDuTrajet` : à remplir **après l'arrivée au point B**, avec le mot, le souvenir ou l'impression d'ensemble du participant, entre guillemets. Il s'affichera sous son nom.
- Pour **ajouter un participant**, recopiez un bloc complet `{ nom: …, couleur: …, motDuTrajet: "", photos: [ ] }` (avec la virgule entre les blocs) ; pour en **retirer un**, supprimez son bloc.

## 2. Ajouter les photographies (assets)

Pour chaque photographie :

1. **Copiez le fichier image** dans le dossier du participant, par exemple :
   `assets/participant-1/fissure.jpg`
   - Formats : `.jpg`, `.png`, `.webp` (les `.heic` d'iPhone sont à convertir en JPG).
   - Noms de fichiers simples, **sans espaces ni accents**.
   - 1 500 px de large suffisent amplement.
2. **Ajoutez une ligne** dans la liste `photos: [ … ]` du participant, dans `donnees.js` :

```js
{ fichier: "assets/participant-1/fissure.jpg", lat: 49.110250, lng: 6.174750, mot: "fissure", legende: "La fissure traversait le trottoir comme un éclair lent.", date: "12 mai 2026" },
```

| Champ | Signification |
|---|---|
| `fichier` | Le chemin de la photo, exactement comme dans le dossier `assets/` |
| `lat` / `lng` | Les **coordonnées géolocalisées** de la prise de vue (avec un **point**, pas une virgule) |
| `mot` | Un mot, une sensation (facultatif) |
| `legende` | Un souvenir, une impression (facultatif) |
| `date` | Texte libre, ex. `"12 mai 2026"` (facultatif) |

➡️ **L'ordre des lignes compte** : le site dessine le chemin de chaque participant dans cet ordre — A → 1ʳᵉ photo → 2ᵉ photo → … → B. Classez donc les photos dans l'ordre où elles ont été prises pendant le trajet.

➡️ **Le tracé suit les rues, il ne traverse pas les immeubles.** Chaque portion
A → photo 1 → … → B est calculée sur le réseau piéton d'OpenStreetMap (serveur OSRM) :
le trait passe par les rues, les passages et les escaliers. Conséquences pratiques :

- **Placez les coordonnées sur la voie publique**, pas au milieu d'un bâtiment : cliquez
  sur la rue ou sur le trottoir, au plus près de l'endroit photographié. Une coordonnée
  posée au cœur d'un îlot oblige le calcul à faire un détour par la rue la plus proche.
- Les tracés calculés sont **mis en mémoire dans le navigateur** : au deuxième
  chargement, l'affichage est immédiat, même si le serveur d'itinéraires est indisponible.
- Trois boutons en haut à droite de la carte permettent de comparer :
  **Rues** (par défaut, itinéraire piéton réel) et **Direct** (segments droits à vol
  d'oiseau, pour voir la position brute des points).
- Tant qu'un calcul est en cours — ou s'il échoue faute de connexion — le tracé
  s'affiche en **pointillés discrets** : c'est un tracé indicatif, remplacé
  automatiquement par l'itinéraire réel dès qu'il est connu.

➡️ **Pour trouver les coordonnées `lat` / `lng`** : ouvrez le site et **cliquez sur la carte** à l'endroit de la prise de vue — les coordonnées du point cliqué s'affichent sous la carte, il suffit de les recopier. (Alternative : clic droit dans Google Maps, ou coordonnées GPS dans les détails du fichier photo d'origine.)

➡️ N'oubliez pas la **virgule** à la fin de chaque ligne et les **guillemets** autour des textes et des chemins. Si une photo ne s'affiche pas, c'est presque toujours un nom de fichier mal recopié ou une virgule oubliée.

Enregistrez `donnees.js`, rechargez la page : c'est en ligne. ✅

## 3. Lire la carte commune

- **Cliquer sur un participant** (liste à droite de la carte) : son chemin et ses photos ressortent, les autres s'estompent. Re-cliquer (ou *Voir tous les trajets*) pour tout réafficher.
- **Cliquer sur une vignette photo** : image en grand, mot, légende, coordonnées.
- **Fond de carte** (en haut à droite de la carte) :
  - *Carte épurée* (par défaut) : fond sombre et minimal, dans l'esprit de la cartographie sensible — seuls les chemins vécus et les photos comptent ;
  - *Noms de rues* : plan IGN complet, pratique pour se repérer et relever les coordonnées des prises de vue.
- La **galerie « Les regards du trajet »** (sous la carte) rassemble toutes les images ; *Voir sur la carte* recentre la carte sur chacune.
- **Tracé des chemins** (deuxième bouton en haut à droite de la carte) : *Rues* — l'itinéraire piéton réel, qui tourne aux angles et suit les voies — ou *Direct* — les points reliés à vol d'oiseau. Le choix *Rues* est celui par défaut.

## 4. Mettre le site en ligne (facultatif)

Déposez **tout le dossier** tel quel sur GitHub Pages, Netlify, l'hébergement de l'université, etc. (`index.html` + `donnees.js` + `assets/`). Une connexion internet reste nécessaire pour afficher les fonds de carte (Esri / IGN) et pour calculer les itinéraires piétons (OpenStreetMap / OSRM) ; sans connexion, une carte schématique de Metz, France s'affiche automatiquement, avec A, B, les photos à leurs vraies coordonnées et des tracés indicatifs courbes (un fond dessiné à la main ne peut pas suivre le réseau réel).

---
*Atelier Cartographie sensible collective — Chaimae SEBTI, M1 Arts Plastiques. Références : Georges Perec, Tentative d’épuisement d’un lieu parisien (1975) ; Élise Olmedo, Cartographie sensible (2015) ; projet Urban Belonging (Copenhagen, Danemark, 2022). Fonds de carte © Esri · © IGN — Géoplateforme · Itinéraires piétons © OpenStreetMap contributors (OSRM).*
