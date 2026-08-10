// data.js - Base de données centrale Modern Warrior (Phase 0, Phase 1, Bankai & WODs)

const SD = {
  // =========================================================================
  // ── PHASE 0 : L'ÉVEIL (S1 à S6) ──────────────────────────────────────────
  // =========================================================================

  // ── SEMAINE 1 & 2 ────────────────────────────────────────────────────────
  "A-S1": {
    "title": "Séance A - Lundi S1-S2 (Phase 0)",
    "trackId": "s1a",
    "exos": [
      {"b": "🔹 Mobilité - Warm-Up Flow 1 (1/4)", "n": "Neck CARs", "p": ["5 rotations/côté"], "tip": "Cercle complet de la tête. Menton vers le plafond. Arc maximal."},
      {"b": "🔹 Mobilité - Warm-Up Flow 1 (2/4)", "n": "Cat-Cow", "p": ["10 reps"], "tip": "À 4 pattes. Expire en arrondissant le dos, inspire en creusant."},
      {"b": "🔹 Mobilité - Warm-Up Flow 1 (3/4)", "n": "Spiderman Lunge + Rotation", "p": ["5 reps/côté"], "tip": "Pied avant à côté de la main. Ouvre le coude vers le plafond."},
      {"b": "🔹 Mobilité - Warm-Up Flow 1 (4/4)", "n": "Prying Squat", "p": ["5 reps", "5s pause", "KB 12 kg"], "img": "assets/exos/prying-squat.gif", "tip": "KB sous le menton. Coudes ouvrent les genoux. Talons ancrés au sol."},
      {"b": "🔹 Bloc 1 - TGU", "n": "Turkish Get-Up", "p": ["3-5 séries", "1 rep/bras", "KB 12 kg", "Repos 1 min"], "img": "assets/exos/tgu.gif", "tip": "7 étapes. Regard fixe sur le KB du début à la fin."},
      {"b": "🔹 Bloc 2 - Deadstop Swing 2H", "n": "Deadstop Swing 2 mains", "p": ["4-6 séries", "10 reps", "KB 16 kg", "Repos 1-2 min"], "img": "assets/exos/swing.gif", "tip": "Repose le KB au sol entre chaque rep. Charnière de hanche pure."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "A - Bent Over Row", "p": ["8-12 reps/côté", "KB 12-16 kg"], "img": "assets/exos/row.gif", "tip": "Dos plat 45°. Tire le coude vers la hanche. Contrôle la descente."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "B - Push-up", "p": ["5-15 reps", "Poids du corps"], "tip": "Corps gainé comme une planche. Descente lente, poussée explosive."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "C - Suitcase Carry", "p": ["30-50s/côté", "KB 16 kg"], "img": "assets/exos/suitcase.gif", "tip": "L'épaule ne s'affaisse pas. Tronc anti-rotation. Marche droite."}
    ]
  },

  "B-S1": {
    "title": "Séance B - Mercredi S1-S2 (Phase 0)",
    "trackId": "s1b",
    "exos": [
      {"b": "🔹 Mobilité - Warm-Up Flow 2 (1/4)", "n": "Downward Dog to Cobra", "p": ["10 reps fluides"], "tip": "Flux continu. Hanches hautes puis descends lentement en cobra."},
      {"b": "🔹 Mobilité - Warm-Up Flow 2 (2/4)", "n": "90/90 Switch", "p": ["10 transitions lentes"], "tip": "Deux jambes à 90°. Bascule lentement sans forcer."},
      {"b": "🔹 Mobilité - Warm-Up Flow 2 (3/4)", "n": "Scapular Push-ups", "p": ["10 reps"], "tip": "Bras tendus. Serre et ouvre les omoplates uniquement."},
      {"b": "🔹 Mobilité - Warm-Up Flow 2 (4/4)", "n": "Ankle Rocks", "p": ["10 reps/côté"], "tip": "Genou avant glisse vers l'avant. Talon maintenu au sol."},
      {"b": "🔹 Bloc principal", "n": "Dead Clean & Push Press", "p": ["5-8 séries", "5 reps/côté", "KB 12 kg", "Repos 1-2 min"], "img": "assets/exos/dead-clean.gif", "tip": "Deadstop au sol. Clean en front rack puis Push Press avec légère poussée des jambes."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "A - Goblet Squat", "p": ["8-12 reps", "KB 12 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "KB sous le menton. Talons au sol, genoux suivent les orteils."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "B - KB Halo", "p": ["5-10 reps/côté", "KB 8 kg"], "img": "assets/exos/halo.gif", "tip": "Cercle propre autour de la tête. Coudes bas."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "C - Roll to Elbow", "p": ["4-6 reps/côté"], "img": "assets/exos/tgu.gif", "tip": "1ère étape du TGU. Roule sur le coude, épaule engagée."}
    ]
  },

  "C-S1": {
    "title": "Séance C - Vendredi S1-S2 (Phase 0)",
    "trackId": "s1c",
    "exos": [
      {"b": "🔹 Mobilité - Warm-Up Flow 3 (1/4)", "n": "Shoulder CARs", "p": ["5 rotations/bras"], "tip": "Grand cercle bras tendu. Lent et contrôlé."},
      {"b": "🔹 Mobilité - Warm-Up Flow 3 (2/4)", "n": "Jefferson Curl", "p": ["5 reps", "KB léger"], "img": "assets/exos/jefferson.gif", "tip": "Enroule la colonne vertèbre par vertèbre vers le bas."},
      {"b": "🔹 Mobilité - Warm-Up Flow 3 (3/4)", "n": "Hip CARs", "p": ["5 rotations/jambe"], "tip": "Genou à 90°, rotation complète de la hanche."},
      {"b": "🔹 Mobilité - Warm-Up Flow 3 (4/4)", "n": "Ankle CARs", "p": ["5 rotations/pied"], "tip": "Trace le plus grand cercle possible avec ton pied."},
      {"b": "🔹 Bloc principal - EMOM 20 min", "n": "Minute 1 - Swings 2 mains", "p": ["10 à 20 reps", "KB 16 kg"], "img": "assets/exos/swing.gif", "tip": "Explosion des hanches. Repos sur le reste de la minute."},
      {"b": "🔹 Bloc principal - EMOM 20 min", "n": "Minute 2 - Turkish Get-Up DROIT", "p": ["1 rep", "KB 12 kg"], "img": "assets/exos/tgu.gif", "tip": "7 étapes. Regard fixe sur le KB."},
      {"b": "🔹 Bloc principal - EMOM 20 min", "n": "Minute 3 - Swings 2 mains", "p": ["10 à 20 reps", "KB 16 kg"], "img": "assets/exos/swing.gif", "tip": "Explosion des hanches. Repos sur le reste de la minute."},
      {"b": "🔹 Bloc principal - EMOM 20 min", "n": "Minute 4 - Turkish Get-Up GAUCHE", "p": ["1 rep", "KB 12 kg"], "img": "assets/exos/tgu.gif", "tip": "7 étapes. Recommence ce cycle 5 fois au total (20 min)."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "1H Press", "p": ["3 à 6 reps/côté", "KB 12 kg"], "img": "assets/exos/press.gif", "tip": "Press strict sans poussée des jambes."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "Goblet Reverse Lunge", "p": ["6 à 12 reps/côté", "KB 12 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "Genou arrière proche du sol, tronc droit."},
      {"b": "🔹 Renforcement (2 à 3 RDS)", "n": "Goblet Carry", "p": ["30 à 50 secondes", "KB 12 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "Enchaîne les 3 exercices puis récupère 1 à 2 minutes."}
    ]
  },

  // ── SEMAINE 3 & 4 (PHASE 0) ──────────────────────────────────────────────
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

  // ── SEMAINE 5 & 6 (PHASE 0) ──────────────────────────────────────────────
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
    "title": "Séance A1 - Snatch, Push-up & 1H Swing (Forge S1-S2)",
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
    "title": "Séance B1 - Heavy Clean & Press (Forge S1-S2)",
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
    "title": "Séance C1 - Double Complexes Achille & Persée (Forge S1-S2)",
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
    "title": "Séance A3 - Snatch, Push-up & 1H Swing (Forge S3)",
    "trackId": "f3a",
    "exos": [
      {"b": "🔹 Mobilité", "n": "Routine au choix", "p": ["5-10 min"], "tip": "Choisis une routine dans l'onglet Mobilité."},
      {"b": "🔹 Préparation (3 RDS/côté)", "n": "1 TGU / côté", "p": ["1 rep/bras"], "img": "assets/exos/tgu.gif", "tip": "Stabilité & verrouillage d'épaule."},
      {"b": "🔹 Préparation (3 RDS/côté)", "n": "Single Leg Deadlift", "p": ["5 reps/côté"], "tip": "Équilibre et ischio-jambiers."},
      {"b": "🔹 Préparation (3 RDS/côté)", "n": "KB Halo", "p": ["5+5 reps"], "img": "assets/exos/halo.gif", "tip": "Mobilisation thoracique & épaules."},
      {"b": "🔹 Bloc 1 – EMOM 10’", "n": "Minute 1 - Snatch Droit & Gauche", "p": ["5 à 7 reps/bras"], "img": "assets/exos/snatch.gif", "tip": "10 à 14 reps au total par minute."},
      {"b": "🔹 Bloc 1 – EMOM 10’", "n": "Minute 2 - Push-ups", "p": ["5 à 15+ reps"], "tip": "Gainage strict. Recommencer ce cycle 5 fois (10 min)."},
      {"b": "🔹 Bloc 2 – EMOM 8’", "n": "1H Swing Droit & Gauche", "p": ["7 à 9 reps/bras"], "img": "assets/exos/swing.gif", "tip": "14 à 18 reps au total par minute."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Goblet Reverse Lunge", "p": ["5 à 10 reps/côté"], "img": "assets/exos/goblet-squat.webp", "tip": "Fente arrière propre, genou proche du sol."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Leg Raise", "p": ["6 à 12 reps"], "tip": "Contrôle de la sangle abdominale."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Band Zercher Carry", "p": ["30 à 50s"], "img": "assets/exos/suitcase.gif", "tip": "Porté lourd, buste droit."}
    ]
  },

  "B-F3": {
    "title": "Séance B3 - Heavy Clean & Press (Forge S3)",
    "trackId": "f3b",
    "exos": [
      {"b": "🔹 Mobilité", "n": "Routine au choix", "p": ["5-10 min"], "tip": "Choisis une routine dans l'onglet Mobilité."},
      {"b": "🔹 Préparation (3 RDS)", "n": "Dead Clean & Press 2H", "p": ["5 reps"], "img": "assets/exos/dead-clean.gif", "tip": "Échauffement poussée."},
      {"b": "🔹 Préparation (3 RDS)", "n": "Goblet Squat (3s down)", "p": ["5 reps"], "img": "assets/exos/goblet-squat.webp", "tip": "Descente contrôlée en 3 secondes."},
      {"b": "🔹 Préparation (3 RDS)", "n": "Roll to Elbow", "p": ["5+5 reps"], "img": "assets/exos/tgu.gif", "tip": "Activation abdos & épaules."},
      {"b": "🔹 Bloc principal – EMOM 20’", "n": "Minute 1 - Clean & Press DROIT", "p": ["4 à 6 reps"], "img": "assets/exos/press.gif", "tip": "Clean & Press strict."},
      {"b": "🔹 Bloc principal – EMOM 20’", "n": "Minute 2 - Clean & Press GAUCHE", "p": ["4 à 6 reps"], "img": "assets/exos/press.gif", "tip": "Recommencer ce cycle 10 fois (20 min)."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Kickstand Row (ou Pull-up/Chin-up)", "p": ["8 à 12 reps"], "img": "assets/exos/row.gif", "tip": "Tirage lourd dos plat."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "1H Squat", "p": ["5 à 10 reps/côté"], "img": "assets/exos/goblet-squat.webp", "tip": "KB en front rack."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "KB Pull Through", "p": ["5 à 10 reps/côté"], "tip": "Gainage anti-rotation."}
    ]
  },

  "C-F3": {
    "title": "Séance C3 - Double Complexes Ragnar & Arès (Forge S3)",
    "trackId": "f3c",
    "exos": [
      {"b": "🔹 Mobilité", "n": "Routine au choix", "p": ["5-10 min"], "tip": "Choisis une routine dans l'onglet Mobilité."},
      {"b": "🔹 Préparation (3 RDS/côté)", "n": "Double TGU Droit", "p": ["2 reps d'affilée"], "img": "assets/exos/tgu.gif", "tip": "2 répétitions d'affilée sans reposer le KB."},
      {"b": "🔹 Préparation (3 RDS/côté)", "n": "Double TGU Gauche", "p": ["2 reps d'affilée"], "img": "assets/exos/tgu.gif", "tip": "2 répétitions d'affilée sans reposer le KB."},
      {"b": "🔹 Complexe Ragnar (3-5 RDS)", "n": "5 Row + 4 Clean + 3 Thruster", "p": ["Gauche puis Droit"], "img": "assets/exos/dead-clean.gif", "tip": "Une série = côté G + côté D. Repos 30-60s entre côtés, 60-90s entre séries."},
      {"b": "🔹 Complexe Arès (3-5 RDS)", "n": "4 Swing + 4 Snatch + 4 Overhead Lunge", "p": ["Gauche puis Droit"], "img": "assets/exos/snatch.gif", "tip": "Une série = côté G + côté D. Repos 30-60s entre côtés, 60-90s entre séries."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Max Close-Grip Floor Press", "p": ["Max reps (échec)"], "tip": "Poussée triceps/pectoraux jusqu'à l'échec propre."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Turkish Sit-up", "p": ["5 à 10 reps"], "img": "assets/exos/tgu.gif", "tip": "Sit-up chargé bras tendu vertical."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Overhead Carry", "p": ["30 à 50s"], "img": "assets/exos/suitcase.gif", "tip": "Marche verrouillée KB au-dessus de la tête."}
    ]
  },

  "A-F4": {
    "title": "Séance A4 - Snatch, Push-up & 1H Swing (Forge S4)",
    "trackId": "f4a",
    "exos": [
      {"b": "🔹 Mobilité", "n": "Routine au choix", "p": ["5-10 min"], "tip": "Choisis une routine dans l'onglet Mobilité."},
      {"b": "🔹 Préparation (3 RDS/côté)", "n": "1 TGU / côté", "p": ["1 rep/bras"], "img": "assets/exos/tgu.gif", "tip": "Stabilité & verrouillage."},
      {"b": "🔹 Préparation (3 RDS/côté)", "n": "Single Leg Deadlift", "p": ["5 reps/côté"], "tip": "Ischio-jambiers."},
      {"b": "🔹 Préparation (3 RDS/côté)", "n": "KB Halo", "p": ["5+5 reps"], "img": "assets/exos/halo.gif", "tip": "Épaules."},
      {"b": "🔹 Bloc 1 – EMOM 10’", "n": "Minute 1 - Snatch Droit & Gauche", "p": ["6 à 8 reps/bras"], "img": "assets/exos/snatch.gif", "tip": "12 à 16 reps au total par minute."},
      {"b": "🔹 Bloc 1 – EMOM 10’", "n": "Minute 2 - Push-ups", "p": ["5 à 15+ reps"], "tip": "Recommencer ce cycle 5 fois (10 min)."},
      {"b": "🔹 Bloc 2 – EMOM 7’", "n": "1H Swing Droit & Gauche", "p": ["8 à 10 reps/bras"], "img": "assets/exos/swing.gif", "tip": "16 à 20 reps au total par minute."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Goblet Reverse Lunge", "p": ["5 à 10 reps/côté"], "img": "assets/exos/goblet-squat.webp", "tip": "Fente arrière propre."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Leg Raise", "p": ["6 à 12 reps"], "tip": "Sangle abdominale."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Band Zercher Carry", "p": ["30 à 50s"], "img": "assets/exos/suitcase.gif", "tip": "Porté lourd."}
    ]
  },

  "B-F4": {
    "title": "Séance B4 - Heavy Clean & Press (Forge S4)",
    "trackId": "f4b",
    "exos": [
      {"b": "🔹 Mobilité", "n": "Routine au choix", "p": ["5-10 min"], "tip": "Choisis une routine dans l'onglet Mobilité."},
      {"b": "🔹 Préparation (3 RDS)", "n": "Dead Clean & Press 2H", "p": ["5 reps"], "img": "assets/exos/dead-clean.gif", "tip": "Échauffement."},
      {"b": "🔹 Préparation (3 RDS)", "n": "Goblet Squat (3s down)", "p": ["5 reps"], "img": "assets/exos/goblet-squat.webp", "tip": "Descente 3 secondes."},
      {"b": "🔹 Préparation (3 RDS)", "n": "Roll to Elbow", "p": ["5+5 reps"], "img": "assets/exos/tgu.gif", "tip": "Abdos."},
      {"b": "🔹 Bloc principal – EMOM 20’", "n": "Minute 1 - Clean & Press DROIT", "p": ["4 à 6 reps"], "img": "assets/exos/press.gif", "tip": "Clean & Press strict."},
      {"b": "🔹 Bloc principal – EMOM 20’", "n": "Minute 2 - Clean & Press GAUCHE", "p": ["4 à 6 reps"], "img": "assets/exos/press.gif", "tip": "10 tours (20 min)."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Kickstand Row (ou Pull-up/Chin-up)", "p": ["8 à 12 reps"], "img": "assets/exos/row.gif", "tip": "Tirage lourd."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "1H Squat", "p": ["5 à 10 reps/côté"], "img": "assets/exos/goblet-squat.webp", "tip": "Front rack."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "KB Pull Through", "p": ["5 à 10 reps/côté"], "tip": "Anti-rotation."}
    ]
  },

  "C-F4": {
    "title": "Séance C4 - Double Complexes Ragnar & Arès (Forge S4)",
    "trackId": "f4c",
    "exos": [
      {"b": "🔹 Mobilité", "n": "Routine au choix", "p": ["5-10 min"], "tip": "Choisis une routine dans l'onglet Mobilité."},
      {"b": "🔹 Préparation (3 RDS/côté)", "n": "Double TGU Droit", "p": ["2 reps d'affilée"], "img": "assets/exos/tgu.gif", "tip": "2 répétitions d'affilée sans reposer."},
      {"b": "🔹 Préparation (3 RDS/côté)", "n": "Double TGU Gauche", "p": ["2 reps d'affilée"], "img": "assets/exos/tgu.gif", "tip": "2 répétitions d'affilée sans reposer."},
      {"b": "🔹 Complexe Ragnar (3-5 RDS)", "n": "5 Row + 4 Clean + 3 Thruster", "p": ["Gauche puis Droit"], "img": "assets/exos/dead-clean.gif", "tip": "Une série = côté G + côté D. Repos 30-60s entre côtés, 60-90s entre séries."},
      {"b": "🔹 Complexe Arès (3-5 RDS)", "n": "4 Swing + 4 Snatch + 4 Overhead Lunge", "p": ["Gauche puis Droit"], "img": "assets/exos/snatch.gif", "tip": "Une série = côté G + côté D. Repos 30-60s entre côtés, 60-90s entre séries."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Max Close-Grip Floor Press", "p": ["Max reps (échec)"], "tip": "Poussée jusqu'à échec propre."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Turkish Sit-up", "p": ["5 à 10 reps"], "img": "assets/exos/tgu.gif", "tip": "Sit-up vertical."},
      {"b": "🔹 Renforcement (3 RDS)", "n": "Overhead Carry", "p": ["30 à 50s"], "img": "assets/exos/suitcase.gif", "tip": "Marche verrouillée."}
    ]
  },

  "A-F5": {
    "title": "Séance A5 - Deadstop Snatch EMOM & Chrono (Forge S5-S8)",
    "trackId": "f5a",
    "exos": [
      {"b": "🔹 Bloc 1 - EMOM 10 min", "n": "Deadstop Snatch Droit + Gauche", "p": ["5-10 reps/bras"], "img": "assets/exos/snatch.gif", "tip": "Arrêt net au sol entre chaque rep."},
      {"b": "🔹 Bloc 2 - Chrono 10 Rounds", "n": "10 Swings 1H + 10 Push-ups", "p": ["10 rounds au chrono"], "img": "assets/exos/swing.gif", "tip": "Endurance de force de haute intensité."},
      {"b": "🔹 Renforcement", "n": "Lunge + Leg Raise + Zercher Carry", "p": ["3 tours"], "img": "assets/exos/goblet-squat.webp", "tip": "Core & stabilité."}
    ]
  },

  "B-F5": {
    "title": "Séance B5 - AMRAP Bracket Clean & Press (Forge S5-S8)",
    "trackId": "f5b",
    "exos": [
      {"b": "🔹 Bloc principal", "n": "AMRAP Bracket Clean & Press", "p": ["Bracket 2-4 à 5-7 reps"], "img": "assets/exos/press.gif", "tip": "Montée en puissance auto-régulée."},
      {"b": "🔹 Renforcement", "n": "Row + Squat 1H + Pull Through", "p": ["3 circuits"], "img": "assets/exos/row.gif", "tip": "Volume hyper-ciblé."}
    ]
  },

  "C-F5": {
    "title": "Séance C5 - Doubles Complexes Floki & Maximus (Forge S5-S8)",
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
      {"b": "🔹 Mobilité A (1/3)", "n": "Prying Squat", "p": ["5 reps", "5s pause"], "img": "assets/exos/prying-squat.gif", "tip": "Ouverture des hanches."},
      {"b": "🔹 Mobilité A (2/3)", "n": "Piriformis Push-up", "p": ["5 reps/côté"], "tip": "Mobilité fessiers & bassin."},
      {"b": "🔹 Mobilité A (3/3)", "n": "Blackburn", "p": ["10 reps"], "tip": "Activation haut du dos."},
      {"b": "🔹 Superset Upper (4-6 RDS)", "n": "Double KB Press", "p": ["5-8 reps"], "img": "assets/exos/press.gif", "tip": "Contrôle excentrique 2-3s."},
      {"b": "🔹 Superset Upper (4-6 RDS)", "n": "KB Row à 1 bras", "p": ["8-12 reps/côté"], "img": "assets/exos/row.gif", "tip": "Tirage lourd. Repos 60-120s après le duo."},
      {"b": "🔹 Superset Lower (4-6 RDS)", "n": "1H Swing", "p": ["6-10 reps/côté"], "img": "assets/exos/swing.gif", "tip": "Explosion de hanche."},
      {"b": "🔹 Superset Lower (4-6 RDS)", "n": "Goblet Squat (Tempo 31X1)", "p": ["8-12 reps"], "img": "assets/exos/goblet-squat.webp", "tip": "3s de descente contrôlée. Repos 60-120s après le duo."},
      {"b": "🔹 Finisher Core (2-4 RDS)", "n": "Hollow Hold + Kneeling Halo + Flutter Kicks", "p": ["30s ON / 30s OFF"], "img": "assets/exos/halo.gif", "tip": "Gainage continu."}
    ]
  },

  "B-BK1": {
    "title": "Bankai B1 - Push/Pull & Double Squat (S1-S2)",
    "trackId": "b1b",
    "exos": [
      {"b": "🔹 Mobilité B (1/3)", "n": "Cobra to Down Dog", "p": ["10 reps"], "tip": "Chaîne antérieure & postérieure."},
      {"b": "🔹 Mobilité B (2/3)", "n": "Hip 90-90", "p": ["10 reps"], "tip": "Mobilité hanches."},
      {"b": "🔹 Mobilité B (3/3)", "n": "Prone Scorpion", "p": ["10 reps"], "tip": "Ouverture thoracique & psoas."},
      {"b": "🔹 Superset 1 (4-6 RDS)", "n": "KB Push-up", "p": ["5-15 reps"], "tip": "Mains sur le poignée du KB."},
      {"b": "🔹 Superset 1 (4-6 RDS)", "n": "Goblet Reverse Lunge", "p": ["5-8 reps/côté"], "img": "assets/exos/goblet-squat.webp", "tip": "Fente arrière. Repos 60-120s."},
      {"b": "🔹 Superset 2 (4-6 RDS)", "n": "Double Dead Row & Clean", "p": ["5-8 reps"], "img": "assets/exos/dead-clean.gif", "tip": "Tirage & rack lourd."},
      {"b": "🔹 Superset 2 (4-6 RDS)", "n": "Double Squat (Tempo 31X1)", "p": ["5-8 reps"], "img": "assets/exos/goblet-squat.webp", "tip": "3s de descente. Repos 60-120s."},
      {"b": "🔹 AMRAP 8 min (Pompage)", "n": "High Pull + Prone Curl + Uppercuts", "p": ["8-12 High Pulls", "10-15 Curls", "8-12 Uppercuts"], "img": "assets/exos/snatch.gif", "tip": "Volume continu."}
    ]
  },

  "C-BK1": {
    "title": "Bankai C1 - AMRAP Ichigo & Renji (S1-S2)",
    "trackId": "b1c",
    "exos": [
      {"b": "🔹 Mobilité C (1/3)", "n": "Shoulder CARs", "p": ["5 rotations/bras"], "img": "assets/exos/halo.gif", "tip": "Épaules."},
      {"b": "🔹 Mobilité C (2/3)", "n": "Jefferson Curl", "p": ["5 reps"], "img": "assets/exos/jefferson.gif", "tip": "Colonne."},
      {"b": "🔹 Mobilité C (3/3)", "n": "Hip CARs", "p": ["5 rotations/jambe"], "tip": "Hanches."},
      {"b": "🔹 AMRAP 15 min - Complexe Ichigo", "n": "7 Push-ups + 7 Double Row + 5 Clean & Push Press", "p": ["Max de tours", "Repos 45-120s"], "img": "assets/exos/press.gif", "tip": "Densité maximale haut du corps."},
      {"b": "🔹 AMRAP 15 min - Complexe Renji", "n": "4 Deadstop Swing + 3 High Pull + 4 Snatch 1H", "p": ["Max de tours", "Repos 60-120s"], "img": "assets/exos/snatch.gif", "tip": "Explosivité & cardio (Côté D puis côté G)."},
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
  },

  "A-BK3": {
    "title": "Bankai A3 - Upper/Lower Supersets (S3)",
    "trackId": "b3a",
    "exos": [
      {"b": "1️⃣ Mobilité A (3 tours sans repos)", "n": "Prying Squat", "p": ["45s"], "img": "assets/exos/prying-squat.gif", "tip": "Plus grande amplitude possible."},
      {"b": "1️⃣ Mobilité A (3 tours sans repos)", "n": "Piriformis Push-up", "p": ["10+10 reps"], "tip": "Mobilité hanches & fessiers."},
      {"b": "1️⃣ Mobilité A (3 tours sans repos)", "n": "Blackburn", "p": ["10 reps"], "tip": "Activation haut du dos."},
      {"b": "2️⃣ Superset Upper (4 à 6 RDS)", "n": "Double Press", "p": ["8 à 12 reps"], "img": "assets/exos/press.gif", "tip": "1 à 2 séries légères d'échauffement possibles."},
      {"b": "2️⃣ Superset Upper (4 à 6 RDS)", "n": "KB Row / côté (ou Pull-Up)", "p": ["10 à 15 reps (ou 8-12 Pull-Ups)"], "img": "assets/exos/row.gif", "tip": "Repos 60 à 120s après les deux exercices."},
      {"b": "3️⃣ Superset Lower (4 à 6 RDS)", "n": "1H Swing", "p": ["9 à 12 reps/côté"], "img": "assets/exos/swing.gif", "tip": "Charnière de hanche explosive."},
      {"b": "3️⃣ Superset Lower (4 à 6 RDS)", "n": "Goblet Squat TEMPO (31X1)", "p": ["10 à 15 reps"], "img": "assets/exos/goblet-squat.webp", "tip": "3s descente, 1s pause en bas. Repos 60 à 120s."},
      {"b": "4️⃣ Circuit (2 à 4 RDS - 40s ON / 20s OFF)", "n": "Hollow Hold", "p": ["40s ON / 20s OFF"], "tip": "Gainage bas du dos plaqué."},
      {"b": "4️⃣ Circuit (2 à 4 RDS - 40s ON / 20s OFF)", "n": "Kneeling Halo", "p": ["40s ON / 20s OFF"], "img": "assets/exos/halo.gif", "tip": "Cercle propre à genoux."},
      {"b": "4️⃣ Circuit (2 à 4 RDS - 40s ON / 20s OFF)", "n": "Flutter Kicks", "p": ["40s ON / 20s OFF"], "tip": "60s de repos entre les séries."}
    ]
  },

  "B-BK3": {
    "title": "Bankai B3 - Push/Pull & Double Squat (S3)",
    "trackId": "b3b",
    "exos": [
      {"b": "1️⃣ Mobilité B (3 tours sans repos)", "n": "Cobra to Down Dog", "p": ["10 reps"], "tip": "Grande amplitude."},
      {"b": "1️⃣ Mobilité B (3 tours sans repos)", "n": "Hip 90-90", "p": ["10+10 reps"], "tip": "Mobilité hanches."},
      {"b": "1️⃣ Mobilité B (3 tours sans repos)", "n": "Prone Scorpion", "p": ["5+5 reps"], "tip": "Ouverture thoracique."},
      {"b": "2️⃣ Superset Upper/Lower (4 à 6 RDS)", "n": "KB Push-up ou Dips TEMPO (2121)", "p": ["10 à 20 reps"], "tip": "Tempo 2121. Repos 60 à 120s."},
      {"b": "2️⃣ Superset Upper/Lower (4 à 6 RDS)", "n": "Goblet Reverse Lunge", "p": ["8 à 12 reps/côté"], "img": "assets/exos/goblet-squat.webp", "tip": "Fente arrière chargée."},
      {"b": "3️⃣ Superset Upper/Lower (4 à 6 RDS)", "n": "Double Dead Row & Clean*", "p": ["8 à 12 reps"], "img": "assets/exos/dead-clean.gif", "tip": "Si KB unilatéral, enchaîne les deux côtés."},
      {"b": "3️⃣ Superset Upper/Lower (4 à 6 RDS)", "n": "Double Squat TEMPO (31X1)*", "p": ["8 à 12 reps"], "img": "assets/exos/goblet-squat.webp", "tip": "Tempo 31X1. Repos 60 à 120s."},
      {"b": "4️⃣ AMRAP 8 min (Moins de repos possible)", "n": "10-15 High Pull + 12-20 Prone Curl + 10-15 Uppercut/côté", "p": ["AMRAP 8 min"], "img": "assets/exos/snatch.gif", "tip": "Enchaîne avec le minimum de repos."}
    ]
  },

  "C-BK3": {
    "title": "Bankai C3 - AMRAP Complexes Aizen & GrimmJow (S3)",
    "trackId": "b3c",
    "exos": [
      {"b": "1️⃣ Mobilité C (3 tours sans repos)", "n": "Cat & Cow", "p": ["10 reps"], "tip": "Grande amplitude."},
      {"b": "1️⃣ Mobilité C (3 tours sans repos)", "n": "Spiderman Lunge w Rotation", "p": ["10+10 reps"], "tip": "Hanches & buste."},
      {"b": "1️⃣ Mobilité C (3 tours sans repos)", "n": "Inchworm", "p": ["5 reps"], "tip": "Chenille."},
      {"b": "2️⃣ AMRAP 15' - Complex Aizen", "n": "(Double Snatch + Double Push Press + Double Thruster) x3", "p": ["Max de tours en 15'"], "img": "assets/exos/snatch.gif", "tip": "3 répétitions de la boucle = 1 tour. Repos 45-120s entre tours. (Si KB unique, enchaîne tout à D puis à G)."},
      {"b": "3️⃣ AMRAP 15' - Complex GrimmJow", "n": "5 US Burpee + 6 Squat Clean", "p": ["Max de tours en 15'"], "img": "assets/exos/dead-clean.gif", "tip": "Option: Burpee classique + Swing US. Repos 45-120s entre tours. 3 à 5 min repos entre AMRAPs."},
      {"b": "4️⃣ Finisher - For Time (3 tours)", "n": "V-Tuck + Leg Raise + KB Plank Tap", "p": ["3 tours - Reps selon niveau"], "tip": "Intermédiaire: 10/10/12 | Avancé: 15/15/16 | Élite: 20/20/20."}
    ]
  },

  "A-BK4": {
    "title": "Bankai A4 - Upper/Lower Supersets (S4)",
    "trackId": "b4a",
    "exos": [
      {"b": "1️⃣ Mobilité A (3 tours sans repos)", "n": "Prying Squat", "p": ["45s"], "img": "assets/exos/prying-squat.gif", "tip": "Grande amplitude."},
      {"b": "1️⃣ Mobilité A (3 tours sans repos)", "n": "Piriformis Push-up", "p": ["10+10 reps"], "tip": "Hanches & fessiers."},
      {"b": "1️⃣ Mobilité A (3 tours sans repos)", "n": "Blackburn", "p": ["10 reps"], "tip": "Haut du dos."},
      {"b": "2️⃣ Superset Upper (4 à 6 RDS)", "n": "Double Press", "p": ["8 à 12 reps"], "img": "assets/exos/press.gif", "tip": "Échauffement léger possible."},
      {"b": "2️⃣ Superset Upper (4 à 6 RDS)", "n": "KB Row / côté (ou Pull-Up)", "p": ["10 à 15 reps (ou 8-12 Pull-Ups)"], "img": "assets/exos/row.gif", "tip": "Repos 60 à 120s."},
      {"b": "3️⃣ Superset Lower (4 à 6 RDS)", "n": "1H Swing", "p": ["9 à 12 reps/côté"], "img": "assets/exos/swing.gif", "tip": "Charnière de hanche."},
      {"b": "3️⃣ Superset Lower (4 à 6 RDS)", "n": "Goblet Squat TEMPO (31X1)", "p": ["10 à 15 reps"], "img": "assets/exos/goblet-squat.webp", "tip": "Tempo 31X1. Repos 60 à 120s."},
      {"b": "4️⃣ Circuit (2 à 4 RDS - 40s ON / 20s OFF)", "n": "Hollow Hold + Kneeling Halo + Flutter Kicks", "p": ["40s ON / 20s OFF"], "img": "assets/exos/halo.gif", "tip": "60s de repos entre séries."}
    ]
  },

  "B-BK4": {
    "title": "Bankai B4 - Push/Pull & Double Squat (S4)",
    "trackId": "b4b",
    "exos": [
      {"b": "1️⃣ Mobilité B (3 tours sans repos)", "n": "Cobra to Down Dog", "p": ["10 reps"], "tip": "Mobilité."},
      {"b": "1️⃣ Mobilité B (3 tours sans repos)", "n": "Hip 90-90", "p": ["10+10 reps"], "tip": "Hanches."},
      {"b": "1️⃣ Mobilité B (3 tours sans repos)", "n": "Prone Scorpion", "p": ["5+5 reps"], "tip": "Thoracique."},
      {"b": "2️⃣ Superset Upper/Lower (4 à 6 RDS)", "n": "KB Push-up ou Dips TEMPO (2121)", "p": ["10 à 20 reps"], "tip": "Tempo 2121. Repos 60-120s."},
      {"b": "2️⃣ Superset Upper/Lower (4 à 6 RDS)", "n": "Goblet Reverse Lunge", "p": ["8 à 12 reps/côté"], "img": "assets/exos/goblet-squat.webp", "tip": "Fente arrière."},
      {"b": "3️⃣ Superset Upper/Lower (4 à 6 RDS)", "n": "Double Dead Row & Clean*", "p": ["8 à 12 reps"], "img": "assets/exos/dead-clean.gif", "tip": "Unilatéral si KB unique."},
      {"b": "3️⃣ Superset Upper/Lower (4 à 6 RDS)", "n": "Double Squat TEMPO (31X1)*", "p": ["8 à 12 reps"], "img": "assets/exos/goblet-squat.webp", "tip": "Tempo 31X1. Repos 60-120s."},
      {"b": "4️⃣ AMRAP 8 min", "n": "High Pull + Prone Curl + Uppercuts", "p": ["10-15 HP", "12-20 Curls", "10-15 Uppercuts/côté"], "img": "assets/exos/snatch.gif", "tip": "Moins de repos possible."}
    ]
  },

  "C-BK4": {
    "title": "Bankai C4 - METCON Single KB (S4)",
    "trackId": "b4c",
    "exos": [
      {"b": "1️⃣ Mobilité C (3 tours sans repos)", "n": "Cat & Cow + Spiderman Lunge + Inchworm", "p": ["3 tours"], "tip": "Mobilité générale."},
      {"b": "2️⃣ METCON Single KB (30 à 40 min)", "n": "7+7 Swing + 5+5 Push Press + 7+7 Clean + 5+5 Thruster + 7+7 Snatch", "p": ["Max de tours en 30-40 min"], "img": "assets/exos/snatch.gif", "tip": "1 tour = enchaînement complet. Garder la même charge. Repos 30-60s entre exos, 60-90s entre tours. H: 12-24kg, F: 4-8kg. Partage ton score sur Benchmark !"}
    ]
  }
};

// =========================================================================
// ── BIBLIOTHÈQUE DES 31 WODS SKOOL ─────────────────────────────────────────
// =========================================================================
const WODS = [
  {"c": "fullbody", "t": "AMRAP 30 min", "ti": "Séance Fullbody - 30'", "b": "AMRAP 30' (max de tours) : 10 Swings + 10 Pompes + 10 Goblet Squats + 10 Tirages (chaque bras). Récupération libre entre les tours.<br><strong>Charges :</strong> H débutants 12-20 kg / H intermédiaires 20-28 kg &middot; F débutantes 6-10 kg / F intermédiaires 12-16 kg"},
  {"c": "fullbody", "t": "EMOM 30 min", "ti": "Fullbody Débutant — EMOM 30'", "b": "1 mouvement par minute, 10 tours :<br>• Min 1 : 7-10 Deadstop Swings<br>• Min 2 : 8-12 Goblet Squats<br>• Min 3 : 7-10 2H Dead Clean + 2H Press<br><strong>Charges :</strong> H 16-32 kg / F 6-16 kg"},
  {"c": "fullbody", "t": "AMRAP 20 min", "ti": "Fullbody AMRAP 20'", "b": "Max de tours de : 10 Dead Stop Swing + 5x (1 Row + 1 Dead Clean + 1 Squat) à droite + 5x (1 Row + 1 Dead Clean + 1 Squat) à gauche + 10 Pompes &middot; 30s de repos entre les exos."},
  {"c": "fullbody", "t": "AMRAP 30 min", "ti": "Fullbody Swings, Squat & Halo AMRAP 30'", "b": "Max de tours pendant 30' :<br>• Exo 1 : 10x (1 Swing + 1 Goblet Squat) &middot; 45s repos<br>• Exo 2 : 10x (1 Press + 1 Halo) &middot; 45s repos"},
  {"c": "fullbody", "t": "EMOM 30 min", "ti": "Fullbody EMOM 30' (Squat, Pompes, High Pull)", "b": "• Min 1 : 12 Goblet Squat<br>• Min 2 : 12 Pompes<br>• Min 3 : 12 Swing High Pull<br>Répéter 30 min &middot; Trop dur : 8 reps | Trop facile : 16-20 reps"},
  {"c": "complex", "t": "10 ROUNDS", "ti": "Complex Kettlebell - 10 rounds", "b": "1 Swing + 1 Cluster + 1 Snatch = 1 rep &middot; 5 reps = 1 round. Change de bras à chaque round &middot; 2 min repos entre rounds.<br><strong>Charges :</strong> H 12-28 kg / F 6-16 kg"},
  {"c": "complex", "t": "5 ROUNDS", "ti": "5 Rounds Complex (Snatch, Press, Reverse TGU)", "b": "5 Snatchs + 3 Push Press + 1 Reverse TGU &middot; 1 bras = 1 round &middot; 1-2 min pause &middot; 5 tours/côté.<br><em>Note :</em> Reverse TGU demande un verrouillage poignet/coude. Variante débutant : remplacer Snatch par Swing 1H."},
  {"c": "complex", "t": "AMRAP 20 min", "ti": "20' Kettlebell Complex", "b": "1 bras = 1 round &middot; 2 min pause &middot; switch &middot; enchaîner sur 20' : 10 Swings + 5 Clean & Press + 5 Front Squats + 5 Snatchs.<br>Utiliser un KB pressable 10 fois en strict press.<br><strong>H :</strong> déb 8-16 kg / int 12-20 kg / av 24+ kg"},
  {"c": "complex", "t": "AMRAP 20 min", "ti": "Complex Single KB AMRAP 20'", "b": "Max de tours : 3 Clean to Squat + 3 Press 2 mains + 3 Swing US &middot; 30-60s repos."},
  {"c": "complex", "t": "AMRAP 18 min", "ti": "Complex Row, Swing & Cluster AMRAP 18'", "b": "1-Hand Row ×4 + 1-Hand Swing ×3 + 1-Hand Cluster ×2. 30-60s repos entre côté D et côté G &middot; enchaîner jusqu'à la fin."},
  {"c": "complex", "t": "5-7 TOURS", "ti": "Complex Single Kettlebell (6 mouvements)", "b": "Sans reposer le KB, 3 reps de chaque : 2H Row → 2H Clean → 2H Swing → 2H Swing High Pull → 2H Goblet Squat → 2H Thruster.<br>Repos 60-120s &middot; 5 à 7 tours (ou max de tours en 15 min).<br><strong>Charges :</strong> H 20-32 kg / F 12-20 kg"},
  {"c": "complex", "t": "AMRAP 20 min", "ti": "Complex KB + Carries AMRAP 20'", "b": "Max de tours/côté : 5x 1H Swing High Pull + 3x Cluster + 10m Front Rack Carry + 10m Farmer Carry.<br>Repos 30-60s entre côtés &middot; <strong>Charges :</strong> H 16-28 kg / F 8-16 kg"},
  {"c": "emom", "t": "EMOM 30 min", "ti": "EMOM 30' (1H Swing + Pull Through)", "b": "• Min 1 : 10 Swings 1H droit<br>• Min 2 : 20 Pull Through<br>• Min 3 : 10 Swings 1H gauche<br>• Min 4 : 20 Ballistic Row<br>• Min 5 : Repos complet<br>Répéter jusqu'à 30 min."},
  {"c": "emom", "t": "EMOM 25 min", "ti": "EMOM 25' — Double Kettlebells", "b": "• Min 1 : 6-8 Double KB Clean<br>• Min 2 : 4-6 Double KB Press<br>• Min 3 : 8-10 Double KB Squat<br>• Min 4 : Repos<br>×6 rounds."},
  {"c": "emom", "t": "EMOM 15 min", "ti": "EMOM 15' (Deadstop + Swing)", "b": "3 Deadstop Swing + 5 Swing &middot; répéter sur 15 min. Simple et efficace."},
  {"c": "emom", "t": "EMOM 30 min", "ti": "EMOM 30' — Double Kettlebells", "b": "• Min 1 : 10 Double Swings<br>• Min 2 : 5 Double Clean & Push Press<br>• Min 3 : 10 Double Front Squat<br>Répéter 30 min &middot; Trop dur : réduire les reps | Trop facile : augmenter la charge."},
  {"c": "amrap", "t": "AMRAP 20 min", "ti": "AMRAP 20' — Flow à 1 bras", "b": "1 Get-up (montée seulement) + 1 Press à chaque étape + 3 1H Swing + 2 1H Clean + 5 1H Squat.<br>30-60s repos &middot; repartir du sol avec l'autre côté."},
  {"c": "amrap", "t": "AMRAP 20 min", "ti": "AMRAP 20' — Upper Body + Farmer Carry", "b": "5 Double Row + 5 Double Clean + 5 Double Press + 30s Farmer Carry.<br>60-90s repos &middot; pendant 20 min (faisable avec 1 seul KB : 1 tour = 1 série/côté)."},
  {"c": "amrap", "t": "AMRAP 20 min", "ti": "AMRAP 20' — Complex 1 bras (Row, Swing, Thruster)", "b": "5 Row + 4 Swing + 3 Thruster &middot; 20-60s repos entre D et G &middot; enchaîner 20 min."},
  {"c": "amrap", "t": "AMRAP 25 min", "ti": "AMRAP 25' — Push-up, Row, Gunslinger & Press", "b": "5 Pompes bras surélevé + 5 Row + 3 Gunslinger Swing + 3 Clean + 3 Press + 3 Push Press.<br>30-90s repos &middot; changer de côté &middot; répéter 25 min."},
  {"c": "amrap", "t": "AMRAP 20 min", "ti": "AMRAP 20' — Gunslinger", "b": "3 Swing Gunslinger + 3 Clean + 3 Press (côté droit puis gauche).<br>Repos 45-90s entre rounds &middot; <strong>Charges :</strong> H 16-24 kg / F 6-12 kg"},
  {"c": "amrap", "t": "FINISHER 10 min", "ti": "Finisher AMRAP 10'", "b": "5 Rowing + 4 Swing + 3 Clean + 2 Squat + 1 Thruster &middot; changer de côté &middot; répéter 10 min."},
  {"c": "amrap", "t": "FOR TIME", "ti": "100 Snatch For Time", "b": "100 Snatch le plus vite possible — 50 droite + 50 gauche. Standard StrongFirst : moins de 5 min."},
  {"c": "cible", "t": "HAUT DU CORPS", "ti": "Séance Haut du corps - 3 supersets", "b": "• <strong>Superset 1</strong> (3x, 90s repos) : 8+8 See Saw Floor Press + 8+8 Gorilla Row<br>• <strong>Superset 2</strong> (3x, 75s repos) : 8 Double KB Press + 12 Upright Row<br>• <strong>Superset 3</strong> (2-3x, 60s repos) : 12 Horn Curl + 12 Triceps Extension"},
  {"c": "cible", "t": "DOS + ÉPAULES", "ti": "Dos x Épaules (3-5 tours)", "b": "Enchaîner les 3 mouvements (15-30s repos entre exos &middot; 75-90s repos entre tours) :<br>• Hike Pass — 10-12 reps (lourd)<br>• Kickstand Row — 8-10 reps/côté (modéré)<br>• Rear Delt Row + High Row — 12-15 reps (léger)"},
  {"c": "cible", "t": "PECTORAUX", "ti": "Séance Pectoraux - 2 supersets", "b": "• <strong>Superset 1</strong> (3-5x, 2 min repos) : 5-8 Banded KB Floor Press + Max Close Grip Push-up<br>• <strong>Superset 2</strong> (2-4x) : 8-10 Glute Bridge SA Press + Max Offset KB Push-up"},
  {"c": "cible", "t": "ÉPAULES x ABDOS", "ti": "Épaules x Abdos (3 séries)", "b": "3 séries / 5 reps par côté : Rotational Press | Halo + Low Chop | Standing Windmill.<br>Démarrer léger, augmenter progressivement. Isoler ou exécuter en circuit."},
  {"c": "cible", "t": "CENTRE DU CORPS", "ti": "Centre du corps (Core Circuit)", "b": "Circuit 30-60s/côté &middot; 10-20s repos entre exos &middot; 2-4 tours :<br>• Turkish Sit-up<br>• Half-Kneeling Wood Chop<br>• Bear Crawl Pull-Through<br>• Overhead Walk"},
  {"c": "cible", "t": "FORCE x MOBILITÉ", "ti": "Force x Mobilité (Circuit)", "b": "Circuit 30-60s/côté &middot; 10-20s repos entre exos &middot; 2-4 tours :<br>• Halo to Rotational Lunge<br>• Half-Kneeling Windmill<br>• Cossack Squat<br>• Prying Goblet Squat + Horn Curl"},
  {"c": "cible", "t": "JAMBES x ABDOS", "ti": "Jambes x Abdos (2-4 séries)", "b": "2-4 séries de 6-8 reps (charge modérée) :<br>• Front Rack Reverse Lunge<br>• Swing to Goblet Squat<br>• Goblet Curtsy Squat<br>• Kickstand RDL<br>• Overhead Walking Lunge<br>• Offset Goblet Squat"},
  {"c": "cible", "t": "ÉCHAUFFEMENT", "ti": "Échauffement simple (3 exercices)", "b": "2-3 tours, lent et contrôlé, respiration nasale :<br>1. <strong>KB Halo</strong> — 10 reps (5/sens) — mobilise épaules, omoplates, cervicales<br>2. <strong>Cobra to Downward Dog</strong> — 5 reps/côté — ouvre thorax, étire chaîne postérieure<br>3. <strong>Prying Goblet Squat</strong> — 30s — mobilité hanches/chevilles, gainage"}
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
  let desc = 'Double Complexes (Achille & Persée)';
  if (w === 3 || w === 4) desc = 'Double Complexes (Ragnar & Arès)';
  else if (w >= 5) desc = 'Double Complexes (Floki & Maximus)';
  TRACK_IDS_P1.push({ id: 'f'+w+'a', n: 'Séance A - Semaine '+w, d: 'Snatch + Push-up + 1H Swing' });
  TRACK_IDS_P1.push({ id: 'f'+w+'b', n: 'Séance B - Semaine '+w, d: 'Heavy Clean & Press' });
  TRACK_IDS_P1.push({ id: 'f'+w+'c', n: 'Séance C - Semaine '+w, d: desc });
}

const TRACK_IDS_BK = [];
for(let w=1; w<=8; w++) {
  let desc = 'Upper/Lower Supersets';
  if (w === 3) desc = 'Supersets S3 & AMRAP Aizen/GrimmJow';
  else if (w === 4) desc = 'Supersets S4 & METCON Single KB';
  TRACK_IDS_BK.push({ id: 'b'+w+'a', n: 'Séance A - Semaine '+w, d: 'Upper/Lower Supersets' });
  TRACK_IDS_BK.push({ id: 'b'+w+'b', n: 'Séance B - Semaine '+w, d: 'Push/Pull & Double Squat' });
  TRACK_IDS_BK.push({ id: 'b'+w+'c', n: 'Séance C - Semaine '+w, d: desc });
}

const PHASES_DATA = {
  '0': { title: "Phase 0 : L'Éveil", data: TRACK_IDS, total: 18 },
  '1': { title: "Phase 1 : La Forge", data: TRACK_IDS_P1, total: 18 },
  '2': { title: "Bankai : Hypertrophie", data: TRACK_IDS_BK, total: 24 }
};
