/* ════════════════════════════════════════════════════════════════════════
   TrajetsSensibles — DONNÉES DE L'ATELIER
   ════════════════════════════════════════════════════════════════════════
   C'EST LE SEUL FICHIER À REMPLIR.

   ┌──────────────────────────────────────────────────────────────────────┐
   │  ⚠️  DONNÉES DE DÉMONSTRATION (FICTIVES)                             │
   │                                                                      │
   │  Ce fichier est livré avec 5 participants d'exemple et 18 photos     │
   │  fictives, uniquement pour que la carte, les chemins, la galerie et  │
   │  les fiches photo soient visibles et testables tout de suite.        │
   │                                                                      │
   │  - Les noms sont encore « Participant 1 » … « Participant 5 ».       │
   │  - Les coordonnées lat/lng sont des estimations placées entre A et   │
   │    B : elles ne correspondent pas à de vraies prises de vue.         │
   │  - Les images du dossier assets/ sont des visuels neutres générés    │
   │    localement (voir assets/LISEZ-MOI.txt), pas des photographies.    │
   │                                                                      │
   │  POUR PARTIR D'UNE PAGE BLANCHE : remplacez ce fichier par           │
   │  « donnees-vide.js » (livré à côté), puis videz les dossiers de      │
   │  assets/ (en gardant les dossiers participant-1 … participant-5).    │
   └──────────────────────────────────────────────────────────────────────┘

   1) LES PARTICIPANTS
      Remplacez « Participant 1 », « Participant 2 », etc. par les prénoms
      (ou pseudonymes) réels. Vous pouvez aussi changer la couleur et,
      à l'arrivée, écrire le « motDuTrajet » de chacun entre guillemets :
      c'est le mot / souvenir partagé à l'arrivée, le seul texte libre du
      site avec la date des photographies.

   2) LES PHOTOGRAPHIES (assets)
      a. Copiez le fichier image dans le dossier du participant, par ex. :
             assets/participant-1/fissure.jpg
         (évitez les espaces et les accents dans les noms de fichiers ;
          formats conseillés : .jpg, .png ou .webp — pas de .heic)
         ⚠️ Pour les DÉMONSTRATIONS, les images déjà présentes portent
         exactement les noms ci-dessous : le plus simple est de les
         remplacer une à une par vos photos portant le même nom.
      b. Ajoutez une ligne dans la liste « photos: [ ... ] » du participant,
         sur le modèle ci-dessous. L'ORDRE des lignes = l'ordre du trajet :
         le site relie A → photo 1 → photo 2 → … → B dans cet ordre.
      c. lat / lng = les coordonnées géolocalisées de la prise de vue
         (nombres avec un POINT, pas une virgule : 49.110250 et 6.174750).
         Pour les trouver : ouvrez le site, cliquez sur la carte à l'endroit
         de la photo — les coordonnées s'affichent sous la carte, il suffit
         de les recopier ici. (Ou clic droit dans Google Maps.)
      d. Les photographies n'ont NI titre NI description. Elles sont
         simplement numérotées dans l'ordre du trajet (« Photographie 1 »,
         « Photographie 2 »…) et regroupées sous le nom de leur participant
         dans la galerie du site. Seul « date » reste possible (texte libre,
         ex. "12 mai 2026") — il peut être omis.

   EXEMPLE D'UNE LIGNE PHOTO COMPLÈTE (à copier-coller puis adapter) :

      { fichier: "assets/participant-1/fissure.jpg", lat: 49.110250, lng: 6.174750, date: "12 mai 2026" },

   ⚠️ N'oubliez pas la VIRGULE à la fin de chaque ligne (sauf, si vous
      préférez, la toute dernière), et gardez les guillemets autour des
      textes et des chemins de fichiers.
   ════════════════════════════════════════════════════════════════════════ */

window.DONNEES_ATELIER = {
  participants: [

    /* ─────────────────────────── PARTICIPANT 1 ─────────────────────────
       Trajet d'exemple : par les rues à l'ouest de l'axe principal. */
    {
      nom: "Participant 1",
      couleur: "#a78bfa",
      motDuTrajet: "Le trottoir se souvient de tous les pas.",
      photos: [
        { fichier: "assets/participant-1/fissure.jpg", lat: 49.101913, lng: 6.172559, date: "10 octobre 2026" },
        { fichier: "assets/participant-1/vitrine.jpg", lat: 49.105102, lng: 6.171869, date: "10 octobre 2026" },
        { fichier: "assets/participant-1/ombre.jpg", lat: 49.108499, lng: 6.173902, date: "10 octobre 2026" },
        { fichier: "assets/participant-1/grille.jpg", lat: 49.113097, lng: 6.175249, date: "10 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 2 ─────────────────────────
       Trajet d'exemple : par l'est, entre les places et les cours. */
    {
      nom: "Participant 2",
      couleur: "#34d399",
      motDuTrajet: "Personne ne regarde les flaques, et pourtant.",
      photos: [
        { fichier: "assets/participant-2/flaque.jpg", lat: 49.102298, lng: 6.175366, date: "10 octobre 2026" },
        { fichier: "assets/participant-2/linge.jpg", lat: 49.106440, lng: 6.176131, date: "10 octobre 2026" },
        { fichier: "assets/participant-2/pigeons.jpg", lat: 49.109736, lng: 6.174672, date: "10 octobre 2026" },
        { fichier: "assets/participant-2/seuil.jpg", lat: 49.113927, lng: 6.176280, date: "10 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 3 ─────────────────────────
       Trajet d'exemple : le plus direct, le long de l'axe central. */
    {
      nom: "Participant 3",
      couleur: "#67a4fa",
      motDuTrajet: "La ville est une lumière qui ne s'éteint jamais complètement.",
      photos: [
        { fichier: "assets/participant-3/neon.jpg", lat: 49.104681, lng: 6.173348, date: "10 octobre 2026" },
        { fichier: "assets/participant-3/escalier.jpg", lat: 49.108899, lng: 6.173802, date: "10 octobre 2026" },
        { fichier: "assets/participant-3/silence.jpg", lat: 49.114917, lng: 6.174842, date: "10 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 4 ─────────────────────────
       Trajet d'exemple : la boucle la plus à l'ouest. */
    {
      nom: "Participant 4",
      couleur: "#f178aa",
      motDuTrajet: "J'ai marché lentement et tout s'est mis à parler.",
      photos: [
        { fichier: "assets/participant-4/banc.jpg", lat: 49.100805, lng: 6.170900, date: "10 octobre 2026" },
        { fichier: "assets/participant-4/rideau.jpg", lat: 49.105467, lng: 6.169951, date: "10 octobre 2026" },
        { fichier: "assets/participant-4/attente.jpg", lat: 49.111000, lng: 6.171495, date: "10 octobre 2026" },
        { fichier: "assets/participant-4/graffiti.jpg", lat: 49.115826, lng: 6.173607, date: "10 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 5 ─────────────────────────
       Trajet d'exemple : la boucle la plus à l'est. */
    {
      nom: "Participant 5",
      couleur: "#e8c547",
      motDuTrajet: "Je cherchais un détail, j'en ai trouvé vingt.",
      photos: [
        { fichier: "assets/participant-5/hasard.jpg", lat: 49.103466, lng: 6.177603, date: "10 octobre 2026" },
        { fichier: "assets/participant-5/enseigne.jpg", lat: 49.108808, lng: 6.177790, date: "10 octobre 2026" },
        { fichier: "assets/participant-5/pierre.jpg", lat: 49.114404, lng: 6.176904, date: "10 octobre 2026" }
      ]
    }

  ]
};
