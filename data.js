// data.js - Base de données centrale Modern Warrior (Phase 0, Phase 1 & Bankai)

const SD = {
  // =========================================================================
  // ── PHASE 0 : L'ÉVEIL (S1 à S6) ──────────────────────────────────────────
  // =========================================================================

  // ── SEMAINE 1 & 2 ────────────────────────────────────────────────────────
  "A-S1": {
    "title": "Séance A - Lundi S1-S2 (Phase 0)",
    "trackId": "s1a",
    "exos": [
      // 🔹 MOBILITÉ COMPLETE (Warm-Up Flow 1)
      {"b": "🔹 Mobilité - Warm-Up Flow 1 (1/4)", "n": "Neck CARs", "p": ["5 rotations/côté"], "tip": "Cercle complet de la tête. Menton vers le plafond. Arc maximal."},
      {"b": "🔹 Mobilité - Warm-Up Flow 1 (2/4)", "n": "Cat-Cow", "p": ["10 reps"], "tip": "À 4 pattes. Expire en arrondissant le dos, inspire en creusant."},
      {"b": "🔹 Mobilité - Warm-Up Flow 1 (3/4)", "n": "Spiderman Lunge + Rotation", "p": ["5 reps/côté"], "tip": "Pied avant à côté de la main. Ouvre le coude vers le plafond."},
      {"b": "🔹 Mobilité - Warm-Up Flow 1 (4/4)", "n": "Prying Squat", "p": ["5 reps", "5s pause", "KB 12 kg"], "img": "assets/exos/prying-squat.gif", "tip": "KB sous le menton. Coudes ouvrent les genoux. Talons ancrés au sol."},

      // 🔹 BLOC 1 - TGU
      {"b": "🔹 Bloc 1 - TGU", "n": "Turkish Get-Up", "p": ["3-5 séries", "1 rep/bras", "KB 12 kg", "Repos 1 min"], "img": "assets/exos/tgu.gif", "tip": "7 étapes. Regard fixe sur le KB du début à la fin."},

      // 🔹 BLOC 2 - SWING
      {"b": "🔹 Bloc 2 - Deadstop Swing 2H", "n": "Deadstop Swing 2 mains", "p": ["4-6 séries", "10 reps", "KB 16 kg", "Repos 1-2 min"], "img": "assets/exos/swing.gif", "tip": "Repose le KB au sol entre chaque rep. Charnière de hanche pure."},

      // 🔹 RENFORCEMENT CIRCUIT
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "A - Bent Over Row", "p": ["8-12 reps/côté", "KB 12-16 kg"], "img": "assets/exos/row.gif", "tip": "Dos plat 45°. Tire le coude vers la hanche. Contrôle la descente."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "B - Push-up", "p": ["5-15 reps", "Poids du corps"], "tip": "Corps gainé comme une planche. Descente lente, poussée explosive."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "C - Suitcase Carry", "p": ["30-50s/côté", "KB 16 kg"], "img": "assets/exos/suitcase.gif", "tip": "L'épaule ne s'affaisse pas. Tronc anti-rotation. Marche droite."}
    ]
  },

  "B-S1": {
    "title": "Séance B - Mercredi S1-S2 (Phase 0)",
    "trackId": "s1b",
    "exos": [
      // 🔹 MOBILITÉ COMPLÈTE (Warm-Up Flow 2)
      {"b": "🔹 Mobilité - Warm-Up Flow 2 (1/4)", "n": "Downward Dog to Cobra", "p": ["10 reps fluides"], "tip": "Flux continu. Hanches hautes puis descends lentement en cobra."},
      {"b": "🔹 Mobilité - Warm-Up Flow 2 (2/4)", "n": "90/90 Switch", "p": ["10 transitions lentes"], "tip": "Deux jambes à 90°. Bascule lentement sans forcer."},
      {"b": "🔹 Mobilité - Warm-Up Flow 2 (3/4)", "n": "Scapular Push-ups", "p": ["10 reps"], "tip": "Bras tendus. Serre et ouvre les omoplates uniquement."},
      {"b": "🔹 Mobilité - Warm-Up Flow 2 (4/4)", "n": "Ankle Rocks", "p": ["10 reps/côté"], "tip": "Genou avant glisse vers l'avant. Talon maintenu au sol."},

      // 🔹 BLOC PRINCIPAL
      {"b": "🔹 Bloc principal", "n": "Dead Clean & Push Press", "p": ["5-8 séries", "5 reps/côté", "KB 12 kg", "Repos 1-2 min"], "img": "assets/exos/dead-clean.gif", "tip": "Deadstop au sol. Clean en front rack puis Push Press avec légère poussée des jambes."},

      // 🔹 RENFORCEMENT CIRCUIT
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "A - Goblet Squat", "p": ["8-12 reps", "KB 12 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "KB sous le menton. Talons au sol, genoux suivent les orteils."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "B - KB Halo", "p": ["5-10 reps/côté", "KB 8 kg"], "img": "assets/exos/halo.gif", "tip": "Cercle propre autour de la tête. Coudes bas."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "C - Roll to Elbow", "p": ["4-6 reps/côté"], "img": "assets/exos/tgu.gif", "tip": "1ère étape du TGU. Roule sur le coude, épaule engagée."}
    ]
  },

  "C-S1": {
    "title": "Séance C - Vendredi S1-S2 (Phase 0)",
    "trackId": "s1c",
    "exos": [
      // 🔹 MOBILITÉ COMPLÈTE (Warm-Up Flow 3)
      {"b": "🔹 Mobilité - Warm-Up Flow 3 (1/4)", "n": "Shoulder CARs", "p": ["5 rotations/bras"], "tip": "Grand cercle bras tendu. Lent et contrôlé."},
      {"b": "🔹 Mobilité - Warm-Up Flow 3 (2/4)", "n": "Jefferson Curl", "p": ["5 reps", "KB léger"], "img": "assets/exos/jefferson.gif", "tip": "Enroule la colonne vertèbre par vertèbre vers le bas."},
      {"b": "🔹 Mobilité - Warm-Up Flow 3 (3/4)", "n": "Hip CARs", "p": ["5 rotations/jambe"], "tip": "Genou à 90°, rotation complète de la hanche."},
      {"b": "🔹 Mobilité - Warm-Up Flow 3 (4/4)", "n": "Ankle CARs", "p": ["5 rotations/pied"], "tip": "Trace le plus grand cercle possible avec ton pied."},

      // 🔹 BLOC PRINCIPAL - EMOM 20 MIN
      {"b": "🔹 Bloc principal - EMOM 20 min", "n": "Minute 1 - Swings 2 mains", "p": ["10 à 20 reps", "KB 16 kg"], "img": "assets/exos/swing.gif", "tip": "Explosion des hanches. Repos sur le reste de la minute."},
      {"b": "🔹 Bloc principal - EMOM 20 min", "n": "Minute 2 - Turkish Get-Up DROIT", "p": ["1 rep", "KB 12 kg"], "img": "assets/exos/tgu.gif", "tip": "7 étapes. Regard fixe sur le KB."},
      {"b": "🔹 Bloc principal - EMOM 20 min", "n": "Minute 3 - Swings 2 mains", "p": ["10 à 20 reps", "KB 16 kg"], "img": "assets/exos/swing.gif", "tip": "Explosion des hanches. Repos sur le reste de la minute."},
      {"b": "🔹 Bloc principal - EMOM 20 min", "n": "Minute 4 - Turkish Get-Up GAUCHE", "p": ["1 rep", "KB 12 kg"], "img": "assets/exos/tgu.gif", "tip": "7 étapes. Recommence ce cycle 5 fois au total (20 min)."},

      // 🔹 RENFORCEMENT CIRCUIT
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "1H Press", "p": ["3 à 6 reps/côté", "KB 12 kg"], "img": "assets/exos/press.gif", "tip": "Press strict sans poussée des jambes."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "Goblet Reverse Lunge", "p": ["6 à 12 reps/côté", "KB 12 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "Genou arrière proche du sol, tronc droit."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "Goblet Carry", "p": ["30 à 50 secondes", "KB 12 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "Enchaîne les 3 exercices puis récupère 1 à 2 minutes."}
    ]
  },

  // ── SEMAINE 3 & 4 ────────────────────────────────────────────────────────
  "A-S3": {
    "title": "Séance A - Lundi S3-S4 (Phase 0)",
    "trackId": "s3a",
    "exos": [
      {"b": "🔹 Mobilité - Warm-Up Flow 1 (1/4)", "n": "Neck CARs", "p": ["5 rotations/côté"], "tip": "Cercle complet de la tête."},
      {"b": "🔹 Mobilité - Warm-Up Flow 1 (2/4)", "n": "Cat-Cow", "p": ["10 reps"], "tip": "Mobilisation colonne."},
      {"b": "🔹 Mobilité - Warm-Up Flow 1 (3/4)", "n": "Spiderman Lunge + Rotation", "p": ["5 reps/côté"], "tip": "Ouverture thoracique."},
      {"b": "🔹 Mobilité - Warm-Up Flow 1 (4/4)", "n": "Prying Squat", "p": ["5 reps", "KB 12 kg"], "img": "assets/exos/prying-squat.gif", "tip": "Ouverture des hanches."},

      {"b": "🔹 EMOM 20 min", "n": "Minute 1 - Swing 1H DROIT", "p": ["5-15 reps", "KB 16 kg"], "img": "assets/exos/swing.gif", "tip": "Même mécanique que 2H. Tronc anti-rotation."},
      {"b": "🔹 EMOM 20 min", "n": "Minute 2 - TGU DROIT", "p": ["1 rep", "KB 12-16 kg"], "img": "assets/exos/tgu.gif", "tip": "Augmenter la charge si maîtrise acquise."},
      {"b": "🔹 EMOM 20 min", "n": "Minute 3 - Swing 1H GAUCHE", "p": ["5-15 reps", "KB 16 kg"], "img": "assets/exos/swing.gif", "tip": "Gainage solide."},
      {"b": "🔹 EMOM 20 min", "n": "Minute 4 - TGU GAUCHE", "p": ["1 rep", "KB 12-16 kg"], "img": "assets/exos/tgu.gif", "tip": "Contrôle parfait."},

      {"b": "🔹 Renforcement", "n": "Bent Over Row", "p": ["8-12 reps/côté", "KB 16 kg"], "img": "assets/exos/row.gif", "tip": "Tire le coude vers la hanche."},
      {"b": "🔹 Renforcement", "n": "Push-up", "p": ["5-15 reps"], "tip": "Gainage complet."},
      {"b": "🔹 Renforcement", "n": "Front Rack + Suitcase Carry", "p": ["30-50s/côté", "KB 16 kg"], "img": "assets/exos/suitcase.gif", "tip": "KB en front rack D + suitcase G, puis inverse."}
    ]
  },

  "B-S3": {
    "title": "Séance B - Mercredi S3-S4 (Phase 0)",
    "trackId": "s3b",
    "exos": [
      {"b": "🔹 Mobilité - Warm-Up Flow 2 (1/4)", "n": "Downward Dog to Cobra", "p": ["10 reps"], "tip": "Mobilisation générale."},
      {"b": "🔹 Mobilité - Warm-Up Flow 2 (2/4)", "n": "90/90 Switch", "p": ["10 reps"], "tip": "Mobilité hanches."},
      {"b": "🔹 Mobilité - Warm-Up Flow 2 (3/4)", "n": "Scapular Push-ups", "p": ["10 reps"], "tip": "Activation omoplates."},
      {"b": "🔹 Mobilité - Warm-Up Flow 2 (4/4)", "n": "Ankle Rocks", "p": ["10 reps/côté"], "tip": "Dorsiflexion cheville."},

      {"b": "🔹 Bloc principal", "n": "Clean & Push Press enchaîné", "p": ["5-8 séries", "5 reps/côté", "KB 12-16 kg"], "img": "assets/exos/dead-clean.gif", "tip": "Plus de deadstop. Enchaînement fluide ground-to-overhead."},

      {"b": "🔹 Renforcement", "n": "Goblet Squat", "p": ["8-12 reps", "KB 16 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "Profondeur contrôlée."},
      {"b": "🔹 Renforcement", "n": "KB Halo", "p": ["5-10 reps/côté", "KB 8 kg"], "img": "assets/exos/halo.gif", "tip": "Stabilité épaules."},
      {"b": "🔹 Renforcement", "n": "Roll to Elbow", "p": ["4-6 reps/côté"], "img": "assets/exos/tgu.gif", "tip": "Verrouillage abdominal."}
    ]
  },

  "C-S3": {
    "title": "Complexe Ulysse - Vendredi S3-S4 (Phase 0)",
    "trackId": "s3c",
    "exos": [
      {"b": "🔹 Mobilité - Warm-Up Flow 3 (1/4)", "n": "Shoulder CARs", "p": ["5 rotations/bras"], "tip": "Mobilité épaules."},
      {"b": "🔹 Mobilité - Warm-Up Flow 3 (2/4)", "n": "Jefferson Curl", "p": ["5 reps", "KB léger"], "img": "assets/exos/jefferson.gif", "tip": "Souplesse chaîne postérieure."},
      {"b": "🔹 Mobilité - Warm-Up Flow 3 (3/4)", "n": "Hip CARs", "p": ["5 rotations/jambe"], "tip": "Rotation hanche."},
      {"b": "🔹 Mobilité - Warm-Up Flow 3 (4/4)", "n": "Ankle CARs", "p": ["5 rotations/pied"], "tip": "Rotation cheville."},

      {"b": "🔹 Complexe Ulysse (1/3)", "n": "5 Deadstop Swing 1H", "p": ["5 reps/côté", "KB 16 kg"], "img": "assets/exos/swing.gif", "tip": "1er mouvement du complexe. Ne pas poser le KB."},
      {"b": "🔹 Complexe Ulysse (2/3)", "n": "3 Dead Clean & Push Press", "p": ["3 reps/côté", "KB 12-16 kg"], "img": "assets/exos/dead-clean.gif", "tip": "Enchaîne directement après les Swings."},
      {"b": "🔹 Complexe Ulysse (3/3)", "n": "3 Squat 1H", "p": ["3 reps/côté", "KB 12 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "5 à 8 séries. Repos 30-60s entre côtés, 60-90s entre séries."},

      {"b": "🔹 Renforcement", "n": "Get-Up + Overhead Carry + Get Down", "p": ["2-3 séries", "1 rep/côté", "KB 12-16 kg"], "img": "assets/exos/tgu.gif", "tip": "Montée TGU, marche 30s overhead, redescente contrôlée."}
    ]
  },

  // ── SEMAINE 5 & 6 ────────────────────────────────────────────────────────
  "A-S5": {
    "title": "Séance A - Lundi S5-S6 (Phase 0)",
    "trackId": "s5a",
    "exos": [
      {"b": "🔹 Mobilité Épaules (1/4)", "n": "Shoulder CARs", "p": ["5 rotations/bras"], "tip": "Activation épaule."},
      {"b": "🔹 Mobilité Épaules (2/4)", "n": "Shoulder Flexion Passive", "p": ["30s stretch"], "tip": "Ouverture d'épaule."},
      {"b": "🔹 Mobilité Épaules (3/4)", "n": "External Rotation Passive", "p": ["30s stretch"], "tip": "Stabilité coiffe."},
      {"b": "🔹 Mobilité Épaules (4/4)", "n": "Scapular Push-ups", "p": ["10 reps"], "tip": "Contrôle omoplates."},

      {"b": "🔹 EMOM 20 min", "n": "Minute 1 - Deadstop Snatch DROIT", "p": ["5-10 reps", "KB 12 kg"], "img": "assets/exos/snatch.gif", "tip": "Repose le KB au sol entre chaque rep. Punch sec en haut."},
      {"b": "🔹 EMOM 20 min", "n": "Minute 2 - TGU DROIT", "p": ["1 rep", "KB 16 kg"], "img": "assets/exos/tgu.gif", "tip": "Maîtrise de la charge."},
      {"b": "🔹 EMOM 20 min", "n": "Minute 3 - Deadstop Snatch GAUCHE", "p": ["5-10 reps", "KB 12 kg"], "img": "assets/exos/snatch.gif", "tip": "Punch sec en haut."},
      {"b": "🔹 EMOM 20 min", "n": "Minute 4 - TGU GAUCHE", "p": ["1 rep", "KB 16 kg"], "img": "assets/exos/tgu.gif", "tip": "Verrouillage solide."},

      {"b": "🔹 Renforcement", "n": "Kickstand Row", "p": ["8-12 reps/côté", "KB 16 kg"], "img": "assets/exos/row.gif", "tip": "Tirage lourd guidé."},
      {"b": "🔹 Renforcement", "n": "Max Push-up", "p": ["Max reps"], "tip": "Poussée jusqu'à fatigue propre."},
      {"b": "🔹 Renforcement", "n": "Banded Zercher Carry", "p": ["30-50s"], "img": "assets/exos/suitcase.gif", "tip": "KB tenu bras croisés sur la poitrine."}
    ]
  },

  "B-S5": {
    "title": "Séance B - Mercredi S5-S6 (Phase 0)",
    "trackId": "s5b",
    "exos": [
      {"b": "🔹 Mobilité (1/4)", "n": "Downward Dog to Cobra", "p": ["10 reps"], "tip": "Flux spinal."},
      {"b": "🔹 Mobilité (2/4)", "n": "90/90 Switch", "p": ["10 reps"], "tip": "Hanches fluides."},
      {"b": "🔹 Mobilité (3/4)", "n": "Scapular Push-ups", "p": ["10 reps"], "tip": "Omoplates."},
      {"b": "🔹 Mobilité (4/4)", "n": "Ankle Rocks", "p": ["10 reps/côté"], "tip": "Chevilles."},

      {"b": "🔹 Bloc principal", "n": "Clean & Press strict", "p": ["5-8 séries", "5 reps/côté", "KB 12-16 kg"], "img": "assets/exos/press.gif", "tip": "Press STRICT = aucune poussée des jambes. Force pure."},

      {"b": "🔹 Renforcement", "n": "Squat 1H", "p": ["8-12 reps/côté", "KB 12 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "KB en rack. Buste vertical."},
      {"b": "🔹 Renforcement", "n": "Half Kneeling KB Rotation", "p": ["8-12 reps/côté", "KB 8 kg"], "tip": "Genou au sol, rotation thoracique."},
      {"b": "🔹 Renforcement", "n": "Pull Through", "p": ["8-12 reps/côté", "KB 12 kg"], "tip": "KB sous le ventre en planche, tirage latéral."}
    ]
  },

  "C-S5": {
    "title": "Complexe Atlas - Vendredi S5-S6 (Phase 0)",
    "trackId": "s5c",
    "exos": [
      {"b": "🔹 Mobilité (1/4)", "n": "Shoulder CARs", "p": ["5 rotations/bras"], "tip": "Épaules."},
      {"b": "🔹 Mobilité (2/4)", "n": "Jefferson Curl", "p": ["5 reps", "KB léger"], "img": "assets/exos/jefferson.gif", "tip": "Colonne."},
      {"b": "🔹 Mobilité (3/4)", "n": "Hip CARs", "p": ["5 rotations/jambe"], "tip": "Hanches."},
      {"b": "🔹 Mobilité (4/4)", "n": "Ankle CARs", "p": ["5 rotations/pied"], "tip": "Chevilles."},

      {"b": "🔹 Complexe Atlas (1/4)", "n": "3 Swings 1H", "p": ["3 reps/côté", "KB 16 kg"], "img": "assets/exos/swing.gif", "tip": "Mouvement 1. Sans reposer le KB."},
      {"b": "🔹 Complexe Atlas (2/4)", "n": "3 Cleans", "p": ["3 reps/côté", "KB 16 kg"], "img": "assets/exos/dead-clean.gif", "tip": "Mouvement 2. Front rack propre."},
      {"b": "🔹 Complexe Atlas (3/4)", "n": "3 Snatches", "p": ["3 reps/côté", "KB 12 kg"], "img": "assets/exos/snatch.gif", "tip": "Mouvement 3. Lockout complet."},
      {"b": "🔹 Complexe Atlas (4/4)", "n": "3 Squats 1H", "p": ["3 reps/côté", "KB 12 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "Mouvement 4. 5 à 8 séries. Repos 30-60s entre côtés, 60-90s entre séries."},

      {"b": "🔹 Renforcement", "n": "1H Press", "p": ["5-10 reps/côté", "KB 12-16 kg"], "img": "assets/exos/press.gif", "tip": "Press strict."},
      {"b": "🔹 Renforcement", "n": "Overhead Reverse Lunge", "p": ["5-10 reps/côté", "KB 8-12 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "KB verrouillé au-dessus de la tête, fente arrière."},
      {"b": "🔹 Renforcement", "n": "Max Sit-up", "p": ["Max reps"], "tip": "Finition abdos."}
    ]
  },


  // =========================================================================
  // ── PHASE 1 : LA FORGE (S1 à S8) ─────────────────────────────────────────
  // =========================================================================

  "A-F1": {
    "title": "Séance A - Snatch, Push-up & 1H Swing (La Forge)",
    "trackId": "f1a",
    "exos": [
      {"b": "🔹 Préparation (1/3)", "n": "1 TGU/côté", "p": ["1 rep/bras"], "img": "assets/exos/tgu.gif", "tip": "Activation globale."},
      {"b": "🔹 Préparation (2/3)", "n": "Single Leg Deadlift", "p": ["5 reps/côté"], "tip": "Équilibre & ischio-jambiers."},
      {"b": "🔹 Préparation (3/3)", "n": "Halo", "p": ["5 reps/côté"], "img": "assets/exos/halo.gif", "tip": "Mobilité épaules."},

      {"b": "🔹 Bloc 1 - EMOM 10 min", "n": "Minute 1 - Snatch Droit + Gauche", "p": ["3 à 5 reps/bras"], "img": "assets/exos/snatch.gif", "tip": "Mouvement explosif propre."},
      {"b": "🔹 Bloc 1 - EMOM 10 min", "n": "Minute 2 - Push-ups", "p": ["5 à 15+ reps"], "tip": "Gainage strict. Répéter le cycle 5 fois."},

      {"b": "🔹 Bloc 2 - EMOM 10 min", "n": "1H Swing Droit + Gauche", "p": ["5 à 7 reps/bras"], "img": "assets/exos/swing.gif", "tip": "Charnière de hanche maximale."},

      {"b": "🔹 Renforcement (3 RDS)", "n": "Goblet Reverse Lunge", "p": ["5-10 reps/côté"], "img": "assets/exos/goblet-squat.webp", "tip": "Fente arrière propre."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Leg Raise", "p": ["6-12 reps"], "tip": "Contrôle abdominal."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Band Zercher Carry", "p": ["30-50s"], "img": "assets/exos/suitcase.gif", "tip": "Porté lourd."}
    ]
  },

  "B-F1": {
    "title": "Séance B - Heavy Clean & Press (La Forge)",
    "trackId": "f1b",
    "exos": [
      {"b": "🔹 Préparation (1/3)", "n": "Dead Clean & Press 2H", "p": ["5 reps"], "img": "assets/exos/dead-clean.gif", "tip": "Échauffement poussée."},
      {"b": "🔹 Préparation (2/3)", "n": "Goblet Squat", "p": ["5 reps"], "img": "assets/exos/goblet-squat.webp", "tip": "Ouverture de hanches."},
      {"b": "🔹 Préparation (3/3)", "n": "Roll to Elbow", "p": ["4-6 reps/côté"], "img": "assets/exos/tgu.gif", "tip": "Gainage."},

      {"b": "🔹 Bloc principal - EMOM 20 min", "n": "Minute 1 - Clean & Press DROIT", "p": ["3 à 5 reps", "Charge 10RM"], "img": "assets/exos/press.gif", "tip": "Clean puis Press strict. Charge lourde."},
      {"b": "🔹 Bloc principal - EMOM 20 min", "n": "Minute 2 - Clean & Press GAUCHE", "p": ["3 à 5 reps", "Charge 10RM"], "img": "assets/exos/press.gif", "tip": "Recommencer ce cycle 10 fois au total (20 min)."},

      {"b": "🔹 Renforcement (3 RDS)", "n": "Kickstand Row", "p": ["8-12 reps/côté"], "img": "assets/exos/row.gif", "tip": "Tirage unilatéral."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "1H Squat", "p": ["6-10 reps/côté"], "img": "assets/exos/goblet-squat.webp", "tip": "Squat lourd."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "KB Pull Through", "p": ["8-12 reps/côté"], "tip": "Anti-rotation."}
    ]
  },

  "C-F1": {
    "title": "Séance C - Double Complexes Achille & Persée (La Forge)",
    "trackId": "f1c",
    "exos": [
      {"b": "🔹 Préparation", "n": "Double TGU Droit + Gauche", "p": ["3 tours léger"], "img": "assets/exos/tgu.gif", "tip": "Stabilité d'épaule."},

      {"b": "🔹 Complexe Achille (3-5 RDS)", "n": "4 H2H Swings + 4 Cleans + 4 Push Press", "p": ["4 reps/mouvement"], "img": "assets/exos/press.gif", "tip": "Enchaîné sans poser le KB. Repos 30-60s/côté, 60-90s/série."},
      {"b": "🔹 Complexe Persée (3-5 RDS)", "n": "3 Swings + 3 High Pull + 3 Snatch", "p": ["3 reps/mouvement"], "img": "assets/exos/snatch.gif", "tip": "Puissance explosive continue."},

      {"b": "🔹 Renforcement (3 RDS)", "n": "Max Close-Grip Floor Press", "p": ["Max reps"], "tip": "Poussée pectoraux/triceps."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Turkish Sit-up", "p": ["5-10 reps/côté"], "img": "assets/exos/tgu.gif", "tip": "Sit-up chargé."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Overhead Carry", "p": ["30-50s/côté"], "img": "assets/exos/suitcase.gif", "tip": "Marche bras verrouillé en haut."}
    ]
  },

  "A-F3": {
    "title": "Séance A - Snatch & 1H Swing Volume (La Forge S3-S4)",
    "trackId": "f3a",
    "exos": [
      {"b": "🔹 Préparation", "n": "1 TGU/côté + Single Leg Deadlift + Halo", "p": ["3 tours"], "img": "assets/exos/tgu.gif", "tip": "Warm-up actif."},
      {"b": "🔹 Bloc 1 - EMOM 12 min", "n": "Min 1: 4-6 Snatch D+G | Min 2: Push-ups", "p": ["4-6 Snatches", "Push-ups"], "img": "assets/exos/snatch.gif", "tip": "Volume augmenté."},
      {"b": "🔹 Bloc 2 - EMOM 10 min", "n": "1H Swing Droit + Gauche", "p": ["6-8 reps/bras"], "img": "assets/exos/swing.gif", "tip": "Charnière explosive."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Goblet Lunge + Leg Raise + Zercher Carry", "p": ["3 circuits"], "img": "assets/exos/goblet-squat.webp", "tip": "Finisseur bas du corps & abdos."}
    ]
  },

  "B-F3": {
    "title": "Séance B - Heavy Clean & Press Progression (La Forge S3-S4)",
    "trackId": "f3b",
    "exos": [
      {"b": "🔹 Préparation", "n": "Dead Clean & Press + Goblet Squat + Roll to Elbow", "p": ["3 tours"], "img": "assets/exos/dead-clean.gif", "tip": "Activation."},
      {"b": "🔹 Bloc principal - EMOM 20 min", "n": "Min 1: Clean & Press Droit | Min 2: Clean & Press Gauche", "p": ["4-6 reps/côté", "Lourd"], "img": "assets/exos/press.gif", "tip": "Maintien de la forme stricte sous fatigue."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Kickstand Row + 1H Squat + Pull Through", "p": ["3 circuits"], "img": "assets/exos/row.gif", "tip": "Renfort musculaire complet."}
    ]
  },

  "C-F3": {
    "title": "Séance C - Doubles Complexes Ragnar & Arès (La Forge S3-S4)",
    "trackId": "f3c",
    "exos": [
      {"b": "🔹 Préparation", "n": "Double TGU Droit + Gauche", "p": ["3 tours"], "img": "assets/exos/tgu.gif", "tip": "Épaules ancrées."},
      {"b": "🔹 Complexe Ragnar (3-5 RDS)", "n": "5 Row + 4 Clean + 3 Thruster", "p": ["Enchaîné"], "img": "assets/exos/dead-clean.gif", "tip": "Enchaînement puissant sans poser le KB."},
      {"b": "🔹 Complexe Arès (3-5 RDS)", "n": "4 Swings + 4 Snatches + 4 Overhead Lunges", "p": ["Enchaîné"], "img": "assets/exos/snatch.gif", "tip": "Stabilité & puissance extrême."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Floor Press + Turkish Sit-up + Overhead Carry", "p": ["3 circuits"], "img": "assets/exos/suitcase.gif", "tip": "Finisseur."}
    ]
  },

  "A-F5": {
    "title": "Séance A - Deadstop Snatch EMOM & Chrono (La Forge S5-S8)",
    "trackId": "f5a",
    "exos": [
      {"b": "🔹 Bloc 1 - EMOM 10 min", "n": "Deadstop Snatch Droit + Gauche", "p": ["5-10 reps/bras"], "img": "assets/exos/snatch.gif", "tip": "Arrêt net au sol entre chaque rep."},
      {"b": "🔹 Bloc 2 - Chrono 10 Rounds", "n": "10 Swings 1H + 10 Push-ups", "p": ["10 rounds au chrono"], "img": "assets/exos/swing.gif", "tip": "Endurance de force de haute intensité."},
      {"b": "🔹 Renforcement", "n": "Lunge + Leg Raise + Zercher Carry", "p": ["3 tours"], "img": "assets/exos/goblet-squat.webp", "tip": "Core & stabilité."}
    ]
  },

  "B-F5": {
    "title": "Séance B - AMRAP Bracket Clean & Press (La Forge S5-S8)",
    "trackId": "f5b",
    "exos": [
      {"b": "🔹 Bloc principal", "n": "AMRAP Bracket Clean & Press", "p": ["Bracket 2-4 à 5-7 reps"], "img": "assets/exos/press.gif", "tip": "Montée en puissance auto-régulée."},
      {"b": "🔹 Renforcement", "n": "Row + Squat 1H + Pull Through", "p": ["3 circuits"], "img": "assets/exos/row.gif", "tip": "Volume hyper-ciblé."}
    ]
  },

  "C-F5": {
    "title": "Séance C - Doubles Complexes Floki & Maximus (La Forge S5-S8)",
    "trackId": "f5c",
    "exos": [
      {"b": "🔹 Complexe Floki", "n": "Swings + High Pulls + Clean & Press", "p": ["3-5 séries"], "img": "assets/exos/dead-clean.gif", "tip": "Lourd et explosif."},
      {"b": "🔹 Complexe Maximus", "n": "Snatches + Squats + Overhead Carries", "p": ["3-5 séries"], "img": "assets/exos/snatch.gif", "tip": "Test ultime de la Forge."},
      {"b": "🔹 Renforcement", "n": "Floor Press + Turkish Sit-up + Carry", "p": ["3 circuits"], "img": "assets/exos/suitcase.gif", "tip": "Finition."}
    ]
  },


  // =========================================================================
  // ── PHASE 2 : BANKAI (HYPERTROPHIE S1 à S8) ──────────────────────────────
  // =========================================================================

  "A-BK1": {
    "title": "Bankai A1 - Upper/Lower Supersets (S1-S2)",
    "trackId": "b1a",
    "exos": [
      // 🔹 MOBILITÉ A
      {"b": "🔹 Mobilité A (1/3)", "n": "Prying Squat", "p": ["5 reps", "5s pause"], "img": "assets/exos/prying-squat.gif", "tip": "Ouverture des hanches."},
      {"b": "🔹 Mobilité A (2/3)", "n": "Piriformis Push-up", "p": ["5 reps/côté"], "tip": "Mobilité fessiers & bassin."},
      {"b": "🔹 Mobilité A (3/3)", "n": "Blackburn", "p": ["10 reps"], "tip": "Activation haut du dos."},

      // 🔹 SUPERSET UPPER
      {"b": "🔹 Superset Upper (4-6 RDS)", "n": "Double KB Press", "p": ["5-8 reps"], "img": "assets/exos/press.gif", "tip": "Contrôle excentrique 2-3s."},
      {"b": "🔹 Superset Upper (4-6 RDS)", "n": "KB Row à 1 bras", "p": ["8-12 reps/côté"], "img": "assets/exos/row.gif", "tip": "Tirage lourd. Repos 60-120s après le duo."},

      // 🔹 SUPERSET LOWER
      {"b": "🔹 Superset Lower (4-6 RDS)", "n": "1H Swing", "p": ["6-10 reps/côté"], "img": "assets/exos/swing.gif", "tip": "Explosion de hanche."},
      {"b": "🔹 Superset Lower (4-6 RDS)", "n": "Goblet Squat (Tempo 31X1)", "p": ["8-12 reps"], "img": "assets/exos/goblet-squat.webp", "tip": "3s de descente contrôlée. Repos 60-120s après le duo."},

      // 🔹 FINISHER
      {"b": "🔹 Finisher Core (2-4 RDS)", "n": "Hollow Hold + Kneeling Halo + Flutter Kicks", "p": ["30s ON / 30s OFF"], "img": "assets/exos/halo.gif", "tip": "Gainage continu."}
    ]
  },

  "B-BK1": {
    "title": "Bankai B1 - Push/Pull & Double Squat (S1-S2)",
    "trackId": "b1b",
    "exos": [
      // 🔹 MOBILITÉ B
      {"b": "🔹 Mobilité B (1/3)", "n": "Cobra to Down Dog", "p": ["10 reps"], "tip": "Chaîne antérieure & postérieure."},
      {"b": "🔹 Mobilité B (2/3)", "n": "Hip 90-90", "p": ["10 reps"], "tip": "Mobilité hanches."},
      {"b": "🔹 Mobilité B (3/3)", "n": "Prone Scorpion", "p": ["10 reps"], "tip": "Ouverture thoracique & psoas."},

      // 🔹 SUPERSET 1
      {"b": "🔹 Superset 1 (4-6 RDS)", "n": "KB Push-up", "p": ["5-15 reps"], "tip": "Mains sur le poignée du KB."},
      {"b": "🔹 Superset 1 (4-6 RDS)", "n": "Goblet Reverse Lunge", "p": ["5-8 reps/côté"], "img": "assets/exos/goblet-squat.webp", "tip": "Fente arrière. Repos 60-120s."},

      // 🔹 SUPERSET 2
      {"b": "🔹 Superset 2 (4-6 RDS)", "n": "Double Dead Row & Clean", "p": ["5-8 reps"], "img": "assets/exos/dead-clean.gif", "tip": "Tirage & rack lourd."},
      {"b": "🔹 Superset 2 (4-6 RDS)", "n": "Double Squat (Tempo 31X1)", "p": ["5-8 reps"], "img": "assets/exos/goblet-squat.webp", "tip": "3s de descente. Repos 60-120s."},

      // 🔹 AMRAP 8 MIN
      {"b": "🔹 AMRAP 8 min (Pompage)", "n": "High Pull + Prone Curl + Uppercuts", "p": ["8-12 High Pulls", "10-15 Curls", "8-12 Uppercuts"], "img": "assets/exos/snatch.gif", "tip": "Volume continu."}
    ]
  },

  "C-BK1": {
    "title": "Bankai C1 - AMRAP Ichigo & Renji (S1-S2)",
    "trackId": "b1c",
    "exos": [
      // 🔹 MOBILITÉ C
      {"b": "🔹 Mobilité C (1/3)", "n": "Shoulder CARs", "p": ["5 rotations/bras"], "img": "assets/exos/halo.gif", "tip": "Épaules."},
      {"b": "🔹 Mobilité C (2/3)", "n": "Jefferson Curl", "p": ["5 reps"], "img": "assets/exos/jefferson.gif", "tip": "Colonne."},
      {"b": "🔹 Mobilité C (3/3)", "n": "Hip CARs", "p": ["5 rotations/jambe"], "tip": "Hanches."},

      // 🔹 AMRAP 15 MIN - ICHIGO
      {"b": "🔹 AMRAP 15 min - Complexe Ichigo", "n": "7 Push-ups + 7 Double Row + 5 Clean & Push Press", "p": ["Max de tours", "Repos 45-120s"], "img": "assets/exos/press.gif", "tip": "Densité maximale haut du corps."},

      // 🔹 AMRAP 15 MIN - RENJI
      {"b": "🔹 AMRAP 15 min - Complexe Renji", "n": "4 Deadstop Swing + 3 High Pull + 4 Snatch 1H", "p": ["Max de tours", "Repos 60-120s"], "img": "assets/exos/snatch.gif", "tip": "Explosivité & cardio (Côté D puis côté G)."},

      // 🔹 FINISHER FOR TIME
      {"b": "🔹 Finisher For Time (3 RDS)", "n": "Sit-ups + Burpees + Commando Plank", "p": ["10 à 20 reps selon niveau"], "tip": "Test ultime de conditionnement."}
    ]
  },

  "C-BK2": {
    "title": "Bankai C2 - METCON Benchmark 30-40 min (S2)",
    "trackId": "b2c",
    "exos": [
      {"b": "🔹 METCON 30-40 min (1/6)", "n": "40 Swings 2 mains", "p": ["40 reps", "KB 16-24 kg"], "img": "assets/exos/swing.gif", "tip": "Valider les 40 reps (séries de 10-20 autorisées) avant de passer au suivant."},
      {"b": "🔹 METCON 30-40 min (2/6)", "n": "40 Press / Push Press", "p": ["40 reps", "Même KB"], "img": "assets/exos/press.gif", "tip": "Même KB."},
      {"b": "🔹 METCON 30-40 min (3/6)", "n": "40 Goblet Squats", "p": ["40 reps", "Même KB"], "img": "assets/exos/goblet-squat.webp", "tip": "Même KB."},
      {"b": "🔹 METCON 30-40 min (4/6)", "n": "40 Push-ups", "p": ["40 reps", "Poids du corps"], "tip": "Forme stricte."},
      {"b": "🔹 METCON 30-40 min (5/6)", "n": "40 Tirages Alternés", "p": ["40 reps", "Même KB"], "img": "assets/exos/row.gif", "tip": "Dos plat."},
      {"b": "🔹 METCON 30-40 min (6/6)", "n": "40 Jumping Jacks", "p": ["40 reps"], "tip": "Finisseur cardio."}
    ]
  }
};

// ── DONNÉES DES WODS & SUIVI DES TRACKS ───────────────────────────────────
const WODS = [
  {"c": "fullbody", "t": "AMRAP 30 min", "ti": "Fullbody AMRAP 30 min", "b": "10 Swings + 10 Pompes + 10 Goblet Squats + 10 Tirages/bras. Récupération libre entre tours. <strong>H:</strong> débutant 12-20 kg / intermédiaire 20-28 kg"},
  {"c": "fullbody", "t": "EMOM 30 min", "ti": "Fullbody Débutant EMOM 30 min", "b": "Min 1: 7-10 Deadstop Swings &middot; Min 2: 8-12 Goblet Squats &middot; Min 3: 7-10 2H Dead Clean + Press. 10 tours."},
  {"c": "complex", "t": "10 ROUNDS", "ti": "Complex KB - 10 rounds", "b": "1 Swing + 1 Cluster + 1 Snatch = 1 rep &middot; 5 reps = 1 round. Change de bras à chaque round. 2 min repos. <strong>H:</strong> 12-28 kg"},
  {"c": "emom", "t": "EMOM 25 min", "ti": "Double KB EMOM 25 min", "b": "Min 1: 6-8 Double KB Clean &middot; Min 2: 4-6 Double KB Press &middot; Min 3: 8-10 Double KB Squat &middot; Min 4: Repos."}
];

const TRACK_IDS = [
  {"id": "s1a", "n": "Semaine 1 - Séance A", "d": "Lundi - Deadstop Swing + TGU"},
  {"id": "s1b", "n": "Semaine 1 - Séance B", "d": "Mercredi - Dead Clean & Push Press"},
  {"id": "s1c", "n": "Semaine 1 - Séance C", "d": "Vendredi - 2H Swing + TGU EMOM"},
  {"id": "s2a", "n": "Semaine 2 - Séance A", "d": "Lundi - Deadstop Swing + TGU"},
  {"id": "s2b", "n": "Semaine 2 - Séance B", "d": "Mercredi - Dead Clean & Push Press"},
  {"id": "s2c", "n": "Semaine 2 - Séance C", "d": "Vendredi - 2H Swing + TGU EMOM"},
  {"id": "s3a", "n": "Semaine 3 - Séance A", "d": "Lundi - 1H Swing + TGU EMOM"},
  {"id": "s3b", "n": "Semaine 3 - Séance B", "d": "Mercredi - Clean & Push Press"},
  {"id": "s3c", "n": "Semaine 3 - Séance C", "d": "Vendredi - Complexe Ulysse"},
  {"id": "s4a", "n": "Semaine 4 - Séance A", "d": "Lundi - 1H Swing + TGU EMOM"},
  {"id": "s4b", "n": "Semaine 4 - Séance B", "d": "Mercredi - Clean & Push Press"},
  {"id": "s4c", "n": "Semaine 4 - Séance C", "d": "Vendredi - Complexe Ulysse"},
  {"id": "s5a", "n": "Semaine 5 - Séance A", "d": "Lundi - Snatch + TGU EMOM"},
  {"id": "s5b", "n": "Semaine 5 - Séance B", "d": "Mercredi - Clean & Press strict"},
  {"id": "s5c", "n": "Semaine 5 - Séance C", "d": "Vendredi - Complexe Atlas"},
  {"id": "s6a", "n": "Semaine 6 - Séance A", "d": "Lundi - Snatch + TGU EMOM"},
  {"id": "s6b", "n": "Semaine 6 - Séance B", "d": "Mercredi - Clean & Press strict"},
  {"id": "s6c", "n": "Semaine 6 - Séance C", "d": "Vendredi - Complexe Atlas"}
];

const TRACK_IDS_P1 = [];
for(let w=1; w<=6; w++) {
  TRACK_IDS_P1.push({ id: 'f'+w+'a', n: 'Séance A - Semaine '+w, d: 'Snatch + Push-up + 1H Swing' });
  TRACK_IDS_P1.push({ id: 'f'+w+'b', n: 'Séance B - Semaine '+w, d: 'Heavy Clean & Press' });
  TRACK_IDS_P1.push({ id: 'f'+w+'c', n: 'Séance C - Semaine '+w, d: 'Double Complexes (Achille & Persée)' });
}

const TRACK_IDS_BK = [];
for(let w=1; w<=8; w++) {
  TRACK_IDS_BK.push({ id: 'b'+w+'a', n: 'Séance A - Semaine '+w, d: 'Upper/Lower Supersets' });
  TRACK_IDS_BK.push({ id: 'b'+w+'b', n: 'Séance B - Semaine '+w, d: 'Push/Pull & Double Squat' });
  TRACK_IDS_BK.push({ id: 'b'+w+'c', n: 'Séance C - Semaine '+w, d: 'AMRAP Complexes Ichigo & Renji' });
}

const PHASES_DATA = {
  '0': { title: "Phase 0 : L'Éveil", data: TRACK_IDS, total: 18 },
  '1': { title: "Phase 1 : La Forge", data: TRACK_IDS_P1, total: 18 },
  '2': { title: "Bankai : Hypertrophie", data: TRACK_IDS_BK, total: 24 }
};
