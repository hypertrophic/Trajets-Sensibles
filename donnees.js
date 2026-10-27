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
      Remplacez les noms par les prénoms (ou pseudonymes) réels des
      participants et, si vous le souhaitez, leur couleur de trajet.
      Le site n'affiche aucun commentaire : ni titre, ni description, ni
      mot d'arrivée — seulement le nom, le nombre de photographies et la
      date de chaque image.

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

      { fichier: "assets/participant-1/fissure.jpg", lat: 49.115250, lng: 6.174750, date: "12 mai 2026" },

   ⚠️ N'oubliez pas la VIRGULE à la fin de chaque ligne (sauf, si vous
      préférez, la toute dernière), et gardez les guillemets autour des
      textes et des chemins de fichiers.
   ════════════════════════════════════════════════════════════════════════ */

window.DONNEES_ATELIER = {
  participants: [

    /* ─────────────────────────── PARTICIPANT 1 ─────────────────────────
       Trajet d'exemple : par les rues à l'ouest de l'axe principal. */
    {
      nom: "Chaimae SEBTI",
      couleur: "#a78bfa",
      photos: [
        { fichier: "assets/participant-1/fissure.jpg", lat: 49.115734, lng: 6.171697, date: "10 octobre 2026" },
        { fichier: "assets/participant-1/vitrine.jpg", lat: 49.116472, lng: 6.170747, date: "10 octobre 2026" },
        { fichier: "assets/participant-1/ombre.jpg", lat: 49.117110, lng: 6.173482, date: "10 octobre 2026" },
        { fichier: "assets/participant-1/grille.jpg", lat: 49.118506, lng: 6.175055, date: "10 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 2 ─────────────────────────
       Trajet d'exemple : par l'est, entre les places et les cours. */
    {
      nom: "Driss JABRI",
      couleur: "#34d399",
      photos: [
        { fichier: "assets/participant-2/flaque.jpg", lat: 49.115641, lng: 6.175517, date: "10 octobre 2026" },
        { fichier: "assets/participant-2/linge.jpg", lat: 49.116812, lng: 6.176254, date: "10 octobre 2026" },
        { fichier: "assets/participant-2/pigeons.jpg", lat: 49.117677, lng: 6.174277, date: "10 octobre 2026" },
        { fichier: "assets/participant-2/seuil.jpg", lat: 49.118544, lng: 6.176264, date: "10 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 3 ─────────────────────────
       Trajet d'exemple : le plus direct, le long de l'axe central. */
    {
      nom: "Participant 3",
      couleur: "#67a4fa",
      photos: [
        { fichier: "assets/participant-3/neon.jpg", lat: 49.116311, lng: 6.172585, date: "10 octobre 2026" },
        { fichier: "assets/participant-3/escalier.jpg", lat: 49.117545, lng: 6.172992, date: "10 octobre 2026" },
        { fichier: "assets/participant-3/silence.jpg", lat: 49.118953, lng: 6.174591, date: "10 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 4 ─────────────────────────
       Trajet d'exemple : la boucle la plus à l'ouest. */
    {
      nom: "Participant 4",
      couleur: "#f178aa",
      photos: [
        { fichier: "assets/participant-4/banc.jpg", lat: 49.115488, lng: 6.169282, date: "10 octobre 2026" },
        { fichier: "assets/participant-4/rideau.jpg", lat: 49.116525, lng: 6.168478, date: "10 octobre 2026" },
        { fichier: "assets/participant-4/attente.jpg", lat: 49.117997, lng: 6.170322, date: "10 octobre 2026" },
        { fichier: "assets/participant-4/graffiti.jpg", lat: 49.119215, lng: 6.173017, date: "10 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 5 ─────────────────────────
       Trajet d'exemple : la boucle la plus à l'est. */
    {
      nom: "Participant 5",
      couleur: "#e8c547",
      photos: [
        { fichier: "assets/participant-5/hasard.jpg", lat: 49.116224, lng: 6.177800, date: "10 octobre 2026" },
        { fichier: "assets/participant-5/enseigne.jpg", lat: 49.117383, lng: 6.178334, date: "10 octobre 2026" },
        { fichier: "assets/participant-5/pierre.jpg", lat: 49.118844, lng: 6.177154, date: "10 octobre 2026" }
      ]
    }

  ]
};
