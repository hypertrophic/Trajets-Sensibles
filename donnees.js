/* ════════════════════════════════════════════════════════════════════════
   TrajetsSensibles — DONNÉES DES PARCOURS
   ════════════════════════════════════════════════════════════════════════
   Chaque participant réunit les photographies de son trajet, dans l'ordre
   où elles ont été prises : le site relie A → photo 1 → … → B dans cet ordre.

     nom       nom (ou pseudonyme) affiché sur la carte et dans la galerie
     couleur   couleur de son trajet
     photos    liste ordonnée des photographies du parcours

   Pour chaque photographie :

     fichier   chemin de l'image, relative au dossier du site
     lat/lng   coordonnées de la prise de vue (point décimal, pas de virgule)
     date      texte libre, facultatif

   Les photographies n'ont ni titre ni description : elles sont numérotées
   dans l'ordre du trajet et regroupées sous le nom de leur auteur.

   ┌──────────────────────────────────────────────────────────────────────┐
   │  CONTENU ACTUEL : DONNÉES DE DÉMONSTRATION                           │
   │  Les 18 images de assets/ sont des visuels neutres générés pour le    │
   │  site (bandeau « IMAGE DE DÉMONSTRATION ») et les coordonnées sont    │
   │  des positions d'exemple le long du parcours réel.                   │
   └──────────────────────────────────────────────────────────────────────┘
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
