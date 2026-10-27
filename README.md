# TrajetsSensibles

**Cartographie sensible collective — Metz, France**
*Un même trajet, des regards différents.*

---

## Le projet

**TrajetsSensibles** est un site de cartographie sensible collective réalisé dans le cadre
d'un atelier de recherche-création mené à Metz. Il réunit sur une même carte numérique les
parcours et les photographies de plusieurs participants ayant traversé un même territoire
selon un protocole commun : partir d'un point de départ partagé, rejoindre librement un point
d'arrivée partagé, et photographier en chemin *ce qui les fait s'arrêter et regarder
autrement*.

La question qui traverse le projet :

> **Comment un même espace géographique peut-il être vécu et perçu différemment d'une personne à une autre ?**

Chaque jour, les mêmes rues sont traversées de manière presque automatique. Pourtant, la
perception d'un lieu dépend des habitudes, de l'humeur, des souvenirs et de l'attention portée
à ce qui nous entoure. Un même endroit peut ainsi provoquer des sensations très différentes
selon les personnes qui le traversent.

## Le parcours

| | |
|---|---|
| **Point A — départ** | La République, 60 Rue de la Chapelle, 57000 Metz — 49.09920, 6.17332 |
| **Point B — arrivée** | Cathédrale Saint-Étienne, 2 Pl. de Chambre, 57000 Metz — 49.12028, 6.17579 |
| **Distance** | ≈ 2,4 km à vol d'oiseau |

Entre A et B, **l'itinéraire est libre**. Les photographies prises pendant la marche sont
placées sur la carte à l'endroit exact de leur prise de vue ; reliées dans l'ordre du trajet,
elles dessinent le chemin vécu de chaque participant.

## Le protocole

1. **Partir ensemble du point A** — La République, 60 Rue de la Chapelle.
2. **Rejoindre le point B** — la Cathédrale Saint-Étienne, en choisissant librement son chemin.
3. **Photographier librement pendant le trajet**, avec une seule consigne : photographier ce
   qui fait s'arrêter et regarder autrement — une couleur, une ombre, une fissure, une
   présence, un sentiment de malaise, un objet abandonné, un détail qui rappelle un souvenir.
   Non les plus belles images, mais les détails ordinaires qui passent inaperçus.
4. **À l'arrivée**, partager **un mot, un souvenir ou une impression** de l'ensemble du trajet.

Les photographies ne portent **ni titre ni description** : elles sont simplement numérotées
dans l'ordre du trajet et regroupées sous le nom de leur auteur.

## Le site

- Une carte de Metz centrée sur le parcours, avec les **points A et B fixes**.
- Les **tracés de chaque participant**, qui suivent réellement les rues (réseau piéton
  OpenStreetMap) — un tracé direct « à vol d'oiseau » reste consultable pour comparaison.
- Une **liste des participants** : un clic met en évidence son chemin et ses photographies.
- Une **galerie « Les regards du trajet »**, groupée par participant : chaque carte se déplie
  pour révéler les photographies du trajet, leur position et leur date.
- Un **fond de carte épuré** par défaut, un plan avec noms de rues en option, et une carte
  schématique de secours si la page est ouverte sans connexion.

Le site est entièrement **statique** (aucun serveur, aucune base de données, aucun compte) :
`index.html`, `donnees.js` et le dossier `assets/` suffisent.

## Organisation des fichiers

```
.
├── index.html                        ← la page du site (HTML + CSS + script de rendu)
├── donnees.js                        ← participants et photographies (le seul fichier à remplir)
├── donnees-vide.js                   ← la même structure, vide (réserve)
├── MODE-D-EMPLOI.md                  ← guide de remplissage pas à pas
├── RESUME-ET-CONTEXTE-DU-PROJET.md   ← présentation et contexte détaillés du projet
└── assets/
    ├── LISEZ-MOI.txt                 ← consignes pour les photographies
    └── participant-1/ … participant-5/  ← les photographies de chaque participant
```

Le dépôt contient actuellement des **données de démonstration** (participants fictifs et
images neutres portant un bandeau « IMAGE DE DÉMONSTRATION ») afin que la carte, les tracés et
la galerie soient visibles immédiatement. Les consignes de remplacement figurent dans
`MODE-D-EMPLOI.md` et `assets/LISEZ-MOI.txt`.

## Références

- **Georges Perec**, *Tentative d'épuisement d'un lieu parisien* (1975) et sa notion
  d'**« infra-ordinaire »** : ces petits éléments du quotidien que l'on ne remarque plus à
  force de les traverser.
- **Élise Olmedo**, *Cartographie sensible. Tracer une géographie du vécu par la
  recherche-création* (2015).
- **Urban Belonging** (Copenhague, Danemark, 2022), projet de recherche participative où des
  habitants documentent leur rapport à la ville par la photographie, le commentaire et le
  parcours géolocalisé.

## Crédits

**Idée et conception du projet : Chaimae SEBTI** — M1 Arts Plastiques.
Atelier de cartographie sensible collective, Metz, France.

- **Fonds de carte** : © Esri (vue épurée) · © IGN — Géoplateforme (plan avec noms de rues)
- **Itinéraires piétons** : © OpenStreetMap contributors (serveur OSRM)
- **Bibliothèque cartographique** : Leaflet (BSD-2-Clause)
- **Polices** : Inter et Space Grotesk (SIL Open Font License)
- **Photographies** : © leurs auteurs respectifs ; les images actuellement en ligne sont des
  visuels de démonstration générés pour le site et ne représentent aucune prise de vue réelle.

## Copyright

© 2026 **Chaimae SEBTI** — tous droits réservés sur les textes, la conception du projet et son
dispositif. Toute reproduction ou réutilisation du projet, de ses textes ou de ses images est
soumise à l'accord de son autrice. Les données cartographiques et les photographies restent la
propriété de leurs auteurs et détenteurs respectifs, aux conditions indiquées ci-dessus.

---

<sub>Site web : [hypertrophic](https://github.com/hypertrophic)</sub>
