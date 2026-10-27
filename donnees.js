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
      à l'arrivée, écrire le « motDuTrajet » de chacun entre guillemets.

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
      d. « mot » (un mot / une sensation), « legende » (souvenir, impression)
         et « date » sont facultatifs : ils peuvent rester vides "" ou être
         supprimés de la ligne.

   EXEMPLE D'UNE LIGNE PHOTO COMPLÈTE (à copier-coller puis adapter) :

      { fichier: "assets/participant-1/fissure.jpg", lat: 49.110250, lng: 6.174750, mot: "fissure", legende: "La fissure traversait le trottoir comme un éclair lent.", date: "12 mai 2026" },

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
        { fichier: "assets/participant-1/fissure.jpg", lat: 49.101913, lng: 6.172559, mot: "fissure", legende: "Une fissure traversait le trottoir comme un éclair très lent.", date: "10 octobre 2026" },
        { fichier: "assets/participant-1/vitrine.jpg", lat: 49.105102, lng: 6.171869, mot: "reflet", legende: "La vitrine éteinte renvoyait la rue à l'envers.", date: "10 octobre 2026" },
        { fichier: "assets/participant-1/ombre.jpg", lat: 49.108499, lng: 6.173902, mot: "ombre", legende: "L'ombre d'un panneau est restée seule sur le mur, le panneau avait été enlevé.", date: "10 octobre 2026" },
        { fichier: "assets/participant-1/grille.jpg", lat: 49.113097, lng: 6.175249, mot: "grille", legende: "Sous la grille, une eau qu'on n'entend qu'en s'arrêtant.", date: "10 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 2 ─────────────────────────
       Trajet d'exemple : par l'est, entre les places et les cours. */
    {
      nom: "Participant 2",
      couleur: "#34d399",
      motDuTrajet: "Personne ne regarde les flaques, et pourtant.",
      photos: [
        { fichier: "assets/participant-2/flaque.jpg", lat: 49.102298, lng: 6.175366, mot: "flaque", legende: "Il n'avait pas plu depuis trois jours. La flaque était toujours là.", date: "10 octobre 2026" },
        { fichier: "assets/participant-2/linge.jpg", lat: 49.106440, lng: 6.176131, mot: "linge", legende: "Du linge à un balcon du troisième étage, immobile dans le vent qui n'arrivait pas jusque-là.", date: "10 octobre 2026" },
        { fichier: "assets/participant-2/pigeons.jpg", lat: 49.109736, lng: 6.174672, mot: "attente", legende: "Trois pigeons sur un banc, tous tournés du même côté, comme s'ils attendaient quelqu'un.", date: "10 octobre 2026" },
        { fichier: "assets/participant-2/seuil.jpg", lat: 49.113927, lng: 6.176280, mot: "seuil", legende: "La pierre du seuil était creusée au milieu : cent ans de pieds au même endroit.", date: "10 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 3 ─────────────────────────
       Trajet d'exemple : le plus direct, le long de l'axe central. */
    {
      nom: "Participant 3",
      couleur: "#67a4fa",
      motDuTrajet: "La ville est une lumière qui ne s'éteint jamais complètement.",
      photos: [
        { fichier: "assets/participant-3/neon.jpg", lat: 49.104681, lng: 6.173348, mot: "néon", legende: "Un néon rose dans une vitrine de cordonnier, en plein jour.", date: "10 octobre 2026" },
        { fichier: "assets/participant-3/escalier.jpg", lat: 49.108899, lng: 6.173802, mot: "escalier", legende: "L'escalier de secours ne menait à aucune porte.", date: "10 octobre 2026" },
        { fichier: "assets/participant-3/silence.jpg", lat: 49.114917, lng: 6.174842, mot: "silence", legende: "Un passage couvert où le bruit de la rue s'arrête net, d'un seul coup.", date: "10 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 4 ─────────────────────────
       Trajet d'exemple : la boucle la plus à l'ouest. */
    {
      nom: "Participant 4",
      couleur: "#f178aa",
      motDuTrajet: "J'ai marché lentement et tout s'est mis à parler.",
      photos: [
        { fichier: "assets/participant-4/banc.jpg", lat: 49.100805, lng: 6.170900, mot: "banc", legende: "Le banc était usé d'un seul côté : toujours la même personne, toujours à la même heure.", date: "10 octobre 2026" },
        { fichier: "assets/participant-4/rideau.jpg", lat: 49.105467, lng: 6.169951, mot: "rideau", legende: "Un rideau de cuisine bougeait derrière une fenêtre fermée.", date: "10 octobre 2026" },
        { fichier: "assets/participant-4/attente.jpg", lat: 49.111000, lng: 6.171495, mot: "attente", legende: "Une chaise posée seule sur le trottoir, tournée vers le mur.", date: "10 octobre 2026" },
        { fichier: "assets/participant-4/graffiti.jpg", lat: 49.115826, lng: 6.173607, mot: "graffiti", legende: "Quelqu'un avait écrit « merci » en tout petit sous une affiche de spectacle.", date: "10 octobre 2026" }
      ]
    },

    /* ─────────────────────────── PARTICIPANT 5 ─────────────────────────
       Trajet d'exemple : la boucle la plus à l'est. */
    {
      nom: "Participant 5",
      couleur: "#e8c547",
      motDuTrajet: "Je cherchais un détail, j'en ai trouvé vingt.",
      photos: [
        { fichier: "assets/participant-5/hasard.jpg", lat: 49.103466, lng: 6.177603, mot: "hasard", legende: "Une plaque de rue à moitié repeinte : l'ancien nom réapparaissait sous le nouveau.", date: "10 octobre 2026" },
        { fichier: "assets/participant-5/enseigne.jpg", lat: 49.108808, lng: 6.177790, mot: "enseigne", legende: "L'enseigne d'une ancienne boutique n'annonçait plus rien du tout.", date: "10 octobre 2026" },
        { fichier: "assets/participant-5/pierre.jpg", lat: 49.114404, lng: 6.176904, mot: "pierre", legende: "Une pierre plus claire que les autres, remise à sa place après un choc.", date: "10 octobre 2026" }
      ]
    }

  ]
};
