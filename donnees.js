/* ════════════════════════════════════════════════════════════════════════
   TrajetsSensibles — DONNÉES DES PARCOURS
   ════════════════════════════════════════════════════════════════════════
   Chaque participant réunit les photographies de son trajet, dans l'ordre
   où elles ont été prises : le site relie A → photo 1 → … → B dans cet ordre.

     nom       nom (ou pseudonyme) affiché sur la carte et dans la galerie
     couleur   couleur de son trajet
     mot       ce que la personne a dit en arrivant au point B (facultatif ;
               écrire "[blank]" tant que la parole n'a pas été recueillie)
     photos    liste ordonnée des photographies du parcours

   Pour chaque photographie :

     fichier   chemin de l'image, relative au dossier du site
     lat/lng   coordonnées de la prise de vue (point décimal, pas de virgule)
     date      texte libre, facultatif

   Les photographies n'ont ni titre ni description : elles sont numérotées
   dans l'ordre du trajet et regroupées sous le nom de leur auteur.

   ┌──────────────────────────────────────────────────────────────────────┐
   │  CONTENU ACTUEL                                                     │
   │  Chaimae SEBTI : 11 photographies réelles et leurs coordonnées.      │
   │  Driss JABRI : 7 photographies réelles et leurs coordonnées.         │
   │  Fayrouz : 8 photographies réelles.                                 │
   │  Participants 4 et 5 : emplacements à compléter.                     │
   └──────────────────────────────────────────────────────────────────────┘
   ════════════════════════════════════════════════════════════════════════ */

window.DONNEES_ATELIER = {
  participants: [

    /* ─────────────────────────── PARTICIPANT 1 ─────────────────────────
       Trajet d'exemple : par les rues à l'ouest de l'axe principal. */
    {
      nom: "Chaimae SEBTI",
      couleur: "#a78bfa",
      mot: "Une balade méditative",
      photos: [
        { fichier: "assets/participant-1/01-manege.jpg", lat: 49.1153793, lng: 6.1731715, date: "30 octobre 2026" },
        { fichier: "assets/participant-1/02-lumiere.jpg", lat: 49.1163635, lng: 6.1747122, date: "30 octobre 2026" },
        { fichier: "assets/participant-1/03-fleurs.jpg", lat: 49.1174583, lng: 6.1757832, date: "30 octobre 2026" },
        { fichier: "assets/participant-1/04-grille-herbes.jpg", lat: 49.1182442, lng: 6.1764841, date: "30 octobre 2026" },
        { fichier: "assets/participant-1/05-vitrine.jpg", lat: 49.118557, lng: 6.1769061, date: "30 octobre 2026" },
        { fichier: "assets/participant-1/06-fleche-doree.jpg", lat: 49.1190376, lng: 6.1765504, date: "30 octobre 2026" },
        { fichier: "assets/participant-1/07-marquage.jpg", lat: 49.1187477, lng: 6.1755767, date: "30 octobre 2026" },
        { fichier: "assets/participant-1/08-enseigne.jpg", lat: 49.1187057, lng: 6.1744647, date: "30 octobre 2026" },
        { fichier: "assets/participant-1/09-fleurs-papier.jpg", lat: 49.1200676, lng: 6.1738219, date: "30 octobre 2026" },
        { fichier: "assets/participant-1/10-plaque.jpg", lat: 49.1196098, lng: 6.1751261, date: "30 octobre 2026" },
        { fichier: "assets/participant-1/11-boite-aux-lettres.jpg", lat: 49.1194077, lng: 6.1756573, date: "30 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 2 ─────────────────────────
       Trajet d'exemple : par l'est, entre les places et les cours. */
    {
      nom: "Driss JABRI",
      couleur: "#34d399",
      mot: "colère, désorganisation et abondant",
      photos: [
        { fichier: "assets/participant-2/01-emballage.jpg", lat: 49.115638, lng: 6.173514, date: "30 octobre 2026" },
        { fichier: "assets/participant-2/02-antivol.jpg", lat: 49.116246, lng: 6.172909, date: "30 octobre 2026" },
        { fichier: "assets/participant-2/03-tract.jpg", lat: 49.116245, lng: 6.173895, date: "30 octobre 2026" },
        { fichier: "assets/participant-2/04-sachet.jpg", lat: 49.118708, lng: 6.175683, date: "30 octobre 2026" },
        { fichier: "assets/participant-2/05-terrasse.jpg", lat: 49.118708, lng: 6.175683, date: "30 octobre 2026" },
        { fichier: "assets/participant-2/06-cathedrale.jpg", lat: 49.119307, lng: 6.175724, date: "30 octobre 2026" },
        { fichier: "assets/participant-2/07-reflet.jpg", lat: 49.119829, lng: 6.174834, date: "30 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 3 ─────────────────────────
       Trajet d'exemple : le plus direct, le long de l'axe central. */
    {
      nom: "Fayrouz",
      couleur: "#67a4fa",
      mot: "[blank]",
      photos: [
        { fichier: "assets/participant-3/01-coupole.jpg", lat: 49.1155271, lng: 6.1743422, date: "30 octobre 2026" },
        { fichier: "assets/participant-3/02-guirlandes.jpg", lat: 49.1155271, lng: 6.1743422, date: "30 octobre 2026" },
        { fichier: "assets/participant-3/03-facades.jpg", lat: 49.1177576, lng: 6.1757921, date: "30 octobre 2026" },
        { fichier: "assets/participant-3/04-horloge.jpg", lat: 49.1178993, lng: 6.1757728, date: "30 octobre 2026" },
        { fichier: "assets/participant-3/05-churros.jpg", lat: 49.1178993, lng: 6.1757728, date: "30 octobre 2026" },
        { fichier: "assets/participant-3/06-lumiere-au-sol.jpg", lat: 49.1182388, lng: 6.1765814, date: "30 octobre 2026" },
        { fichier: "assets/participant-3/07-cathedrale-statue.jpg", lat: 49.1203081, lng: 6.1757974, date: "30 octobre 2026" },
        { fichier: "assets/participant-3/08-gargouille.jpg", lat: 49.1203081, lng: 6.1757974, date: "30 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 4 ─────────────────────────
       Trajet d'exemple : la boucle la plus à l'ouest. */
    {
      nom: "Participant 4",
      couleur: "#f178aa",
      mot: "[blank]",
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
      mot: "[blank]",
      photos: [
        { fichier: "assets/participant-5/hasard.jpg", lat: 49.116224, lng: 6.177800, date: "10 octobre 2026" },
        { fichier: "assets/participant-5/enseigne.jpg", lat: 49.117383, lng: 6.178334, date: "10 octobre 2026" },
        { fichier: "assets/participant-5/pierre.jpg", lat: 49.118844, lng: 6.177154, date: "10 octobre 2026" }
      ]
    }

  ]
};
