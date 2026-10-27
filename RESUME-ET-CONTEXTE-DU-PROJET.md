# TrajetsSensibles — Cartographie sensible collective à Metz, France

## Résumé du projet

**TrajetsSensibles** est un site web de **cartographie sensible collective** conçu pour un atelier de recherche-création mené à Metz, France. Il réunit, sur une même carte numérique, les parcours et les photographies de plusieurs participants ayant traversé un même territoire selon un protocole commun : partir d'un **point de départ partagé**, rejoindre librement un **point d'arrivée partagé**, et photographier en chemin **ce qui les fait s'arrêter et regarder autrement**.

Le parcours retenu pour l'atelier est le suivant :

- **Point A — départ :** La République, 60 Rue de la Chapelle, 57000 Metz (49.09920, 6.17332)
- **Point B — arrivée :** Cathédrale Saint-Étienne de Metz, 2 Pl. de Chambre, 57000 Metz (49.12028, 6.17579)

La distance entre les deux points est d'environ **2,4 km à vol d'oiseau**. Entre le départ et l'arrivée, chaque participant choisit librement son itinéraire. Les photographies réalisées pendant la marche sont ensuite placées sur la carte à l'endroit de leur prise de vue, grâce à leurs coordonnées géolocalisées. En reliant ces images dans l'ordre du trajet, le site dessine progressivement les chemins vécus par chacun.

L'objectif n'est pas de produire une carte utilitaire ou touristique de Metz, France, mais une **représentation collective et subjective du territoire** : une coexistence de regards, de sensations et de souvenirs associés à des lieux parfois identiques, parfois complètement différents.

---

## Contexte du projet

### Cadre de réalisation

Le projet s'inscrit dans le cadre d'un **atelier de cartographie sensible collective** proposé par **Chaimae SEBTI**, étudiante en **M1 Arts Plastiques**. Il prend la forme d'une expérience participative à la croisée de la marche, de la photographie et de la cartographie numérique.

La question qui traverse l'ensemble du projet est la suivante :

> **Comment un même espace géographique peut-il être vécu et perçu différemment d'une personne à une autre ?**

Chaque jour, les mêmes rues et les mêmes quartiers sont traversés de manière presque automatique. Pourtant, la perception d'un lieu dépend des habitudes, de l'humeur, des souvenirs et de l'attention portée à ce qui nous entoure. Un même endroit peut ainsi provoquer des sensations très différentes selon les personnes qui le traversent.

### Le dispositif de l'atelier

Le protocole proposé aux participants est volontairement simple :

1. **Partir ensemble du point A** (La République, 60 Rue de la Chapelle) ;
2. **Rejoindre le point B** (Cathédrale Saint-Étienne) en choisissant librement son chemin ;
3. **Photographier librement pendant le trajet**, avec une seule consigne : photographier ce qui fait **s'arrêter et regarder autrement** — une couleur, une ombre, une fissure, une présence, un sentiment de malaise, un objet abandonné, un détail qui rappelle un souvenir ;
4. **À l'arrivée**, partager **un mot, un souvenir ou une impression** de l'ensemble du trajet.

Il ne s'agit donc pas de rechercher les « plus belles » images ni les lieux emblématiques de la ville, mais de porter attention aux **détails ordinaires** qui passent habituellement inaperçus. Les photographies deviennent alors les traces d'une expérience vécue et des supports de mémoire.

### Références et ancrages théoriques

La démarche fait écho à plusieurs références :

- **Georges Perec**, *Tentative d’épuisement d’un lieu parisien* (1975), et sa notion d'**« infra-ordinaire »** : ces petits éléments du quotidien que l'on ne remarque plus à force de les traverser ;
- **Élise Olmedo**, géographe, et sa thèse *Cartographie sensible. Tracer une géographie du vécu par la recherche-création* (2015), qui explore d'autres manières de représenter l'espace à partir des expériences vécues et des perceptions individuelles ;
- **Urban Belonging** (Copenhagen, Danemark, 2022), projet de recherche participative dans lequel des habitants documentent leur rapport à la ville au moyen de photographies, de commentaires et de parcours géolocalisés, afin de faire apparaître des expériences peu représentées dans les décisions d'aménagement urbain.

### Intention de la carte numérique

La carte finale conserve la géographie réelle de Metz, France, mais elle privilégie une présentation **épurée** : ce qui y ressort, ce sont avant tout **les chemins réellement parcourus et les photographies prises en route**. Certains itinéraires se croisent, d'autres divergent ; un même lieu peut être photographié par plusieurs participants sous des angles différents.

En réunissant ces contributions, la carte devient progressivement un **assemblage de souvenirs et de perceptions singulières** — une forme de mémoire collective construite à partir d'expériences individuelles, sans chercher à les uniformiser.

---

## Le site web livré

### Ce que contient le site

- Une **carte réelle de la ville de Metz, France**, centrée sur le trajet entre La République et la Cathédrale Saint-Étienne ;
- Les **points A et B fixes** du dispositif, avec adresses et coordonnées ;
- Des **tracés qui suivent réellement les rues** : chaque portion A → photo 1 → … → B est calculée sur le réseau piéton d'OpenStreetMap (serveur OSRM), si bien qu'un chemin tourne aux angles et emprunte rues, passages et escaliers au lieu de couper à travers les immeubles. Un bouton *Direct* permet de comparer avec les simples segments à vol d'oiseau, et les itinéraires calculés sont mémorisés dans le navigateur ;
- Un **fond de carte épuré** par défaut, et un **plan IGN avec noms de rues** accessible par un bouton (pratique pour se repérer et relever les coordonnées des prises de vue) ;
- La **liste des participants** : un clic sur un participant met son chemin et ses photographies en évidence ;
- Une **galerie « Les regards du trajet »** rassemblant toutes les photographies, avec un bouton pour localiser chacune sur la carte ;
- Des **compteurs** (participants en chemin, photographies géolocalisées, distance A → B) qui se mettent à jour automatiquement lorsque les données sont renseignées ;
- Une aide intégrée : un **clic sur la carte affiche les coordonnées du point cliqué** sous la carte, pour faciliter le relevé des emplacements des photographies ;
- Une **carte schématique de secours** qui s'affiche automatiquement si la page est ouverte sans connexion internet (A, B et les photographies y restent positionnés selon leurs vraies coordonnées).

### État actuel : une structure prête à remplir

À la demande de l'organisatrice, le site est livré avec des **emplacements vides**, prêts à recevoir les contributions réelles de l'atelier :

- **5 participants par défaut** (« Participant 1 » à « Participant 5 »), avec une couleur de trajet chacun, en attente des prénoms réels ;
- **Aucune photographie renseignée** pour le moment ;
- Les données des participants et leurs photographies (assets) seront ajoutées ultérieurement par l'organisatrice, en un seul endroit : le fichier **`donnees.js`**, accompagné du dossier **`assets/`** (un sous-dossier par participant).

Le fonctionnement complet de ce remplissage est expliqué dans le document **`MODE-D-EMPLOI.md`**, joint à la présente archive.

### Contenu de l'archive

```
TrajetsSensibles-Metz/
├── index.html                        ← la page du site
├── donnees.js                        ← participants et photographies (à remplir)
├── RESUME-ET-CONTEXTE-DU-PROJET.md   ← le présent document
├── MODE-D-EMPLOI.md                  ← guide de remplissage pas à pas
└── assets/                           ← les photographies, un dossier par participant
    ├── LISEZ-MOI.txt
    ├── participant-1/
    ├── participant-2/
    ├── participant-3/
    ├── participant-4/
    └── participant-5/
```

Le site est entièrement **statique** : aucun serveur ni compte n'est nécessaire. Il suffit d'ouvrir `index.html` dans un navigateur, ou de déposer l'ensemble du dossier sur un hébergement web classique (GitHub Pages, Netlify, hébergement universitaire…). Les fichiers doivent rester ensemble : `index.html`, `donnees.js` et le dossier `assets/`.

---

## Limites et perspectives

- Le tracé affiché **relie les photographies dans l'ordre du trajet**, en suivant le réseau piéton réel entre les points déclarés. Il ne prétend pas reconstituer un enregistrement GPS : c'est l'itinéraire le plus court entre les points de passage, non le chemin exactement emprunté à la main — d'où la possibilité de revenir au mode *Direct*, plus brut mais plus fidèle à la seule position des images. Ce compromis reste cohérent avec la dimension sensible et mémorielle du projet.
- Les itinéraires sont calculés en ligne (OpenStreetMap / OSRM) ; hors connexion, seuls des tracés indicatifs courbes peuvent être affichés sur la carte schématique de secours.
- Les coordonnées de chaque photographie sont **renseignées manuellement** dans `donnees.js` (un clic sur la carte du site permet de les relever facilement).
- Dans une version ultérieure, le dispositif pourrait évoluer vers une carte **alimentée en temps réel par les participants eux-mêmes** depuis leurs téléphones, avec envoi direct des photographies géolocalisées. Cela nécessiterait l'ajout d'un service en ligne (base de données et stockage d'images), que la structure actuelle permettrait d'intégrer sans remettre en cause la présentation du site.

---

## Crédits

- **Idée et conception du projet** : **Chaimae SEBTI**, M1 Arts Plastiques.
- **Site web et développement informatique** : **hypertrophic** — [github.com/hypertrophic](https://github.com/hypertrophic).
- **Fonds de carte** : © Esri (vue épurée) · © IGN — Géoplateforme (plan avec noms de rues).
- **Itinéraires piétons** : © OpenStreetMap contributors (serveur OSRM).

---

*Atelier Cartographie sensible collective — Chaimae SEBTI, M1 Arts Plastiques. Site web et développement : hypertrophic (github.com/hypertrophic).*
*Fonds de carte : © Esri (vue épurée) · © IGN — Géoplateforme (plan avec noms de rues). Itinéraires piétons : © OpenStreetMap contributors (serveur OSRM).*
