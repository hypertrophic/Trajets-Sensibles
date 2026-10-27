/* ════════════════════════════════════════════════════════════════════════
   TrajetsSensibles — DONNÉES DE L'ATELIER (VERSION VIDE)
   ════════════════════════════════════════════════════════════════════════
   C'EST LE SEUL FICHIER À REMPLIR.

   ➡️ CE FICHIER EST UNE RÉSERVE. Le site charge « donnees.js », qui
      contient pour l'instant des données de DÉMONSTRATION. Pour partir
      d'une page blanche : renommez « donnees.js » en
      « donnees-demonstration.js » (pour la garder), puis renommez ce
      fichier-ci en « donnees.js ». Rechargez la page : la carte
      n'affiche plus que les points A et B, prête à recevoir les vraies
      contributions.

   1) LES PARTICIPANTS
      Remplacez « Participant 1 », « Participant 2 », etc. par les prénoms
      (ou pseudonymes) réels. Vous pouvez aussi changer la couleur et,
      à l'arrivée, écrire le « motDuTrajet » de chacun entre guillemets.

   2) LES PHOTOGRAPHIES (assets)
      a. Copiez le fichier image dans le dossier du participant, par ex. :
             assets/participant-1/fissure.jpg
         (évitez les espaces et les accents dans les noms de fichiers ;
          formats conseillés : .jpg, .png ou .webp — pas de .heic)
      b. Ajoutez une ligne dans la liste « photos: [ ... ] » du participant,
         sur le modèle ci-dessous. L'ORDRE des lignes = l'ordre du trajet :
         le site relie A → photo 1 → photo 2 → … → B dans cet ordre.
      c. lat / lng = les coordonnées géolocalisées de la prise de vue
         (nombres avec un POINT, pas une virgule : 49.110250 et 6.174750).
         Pour les trouver : ouvrez le site, cliquez sur la carte à l'endroit
         de la photo — les coordonnées s'affichent sous la carte, il suffit
         de les recopier ici. (Ou clic droit dans Google Maps.)
      d. Les photographies n'ont NI titre NI description : elles sont
         numérotées dans l'ordre du trajet (« Photographie 1 », …) et
         regroupées sous le nom du participant dans la galerie du site.
         Seul « date » reste possible (texte libre), ou omis.

   EXEMPLE D'UNE LIGNE PHOTO COMPLÈTE (à copier-coller puis adapter) :

      { fichier: "assets/participant-1/fissure.jpg", lat: 49.110250, lng: 6.174750, date: "12 mai 2026" },

   ⚠️ N'oubliez pas la VIRGULE à la fin de chaque ligne (sauf, si vous
      préférez, la toute dernière), et gardez les guillemets autour des
      textes et des chemins de fichiers.
   ════════════════════════════════════════════════════════════════════════ */

window.DONNEES_ATELIER = {
  participants: [

    {
      nom: "Participant 1",
      couleur: "#a78bfa",
      motDuTrajet: "",
      photos: [
        // ← Ajoutez ici les photographies du Participant 1, par exemple :
        // { fichier: "assets/participant-1/photo1.jpg", lat: 49.105800, lng: 6.172200, date: "" },
        // { fichier: "assets/participant-1/photo2.jpg", lat: 49.113500, lng: 6.169500, date: "" },
      ]
    },

    {
      nom: "Participant 2",
      couleur: "#34d399",
      motDuTrajet: "",
      photos: [
        // ← Ajoutez ici les photographies du Participant 2 (dossier : assets/participant-2/)
      ]
    },

    {
      nom: "Participant 3",
      couleur: "#67a4fa",
      motDuTrajet: "",
      photos: [
        // ← Ajoutez ici les photographies du Participant 3 (dossier : assets/participant-3/)
      ]
    },

    {
      nom: "Participant 4",
      couleur: "#f178aa",
      motDuTrajet: "",
      photos: [
        // ← Ajoutez ici les photographies du Participant 4 (dossier : assets/participant-4/)
      ]
    },

    {
      nom: "Participant 5",
      couleur: "#e8c547",
      motDuTrajet: "",
      photos: [
        // ← Ajoutez ici les photographies du Participant 5 (dossier : assets/participant-5/)
      ]
    }

  ]
};
