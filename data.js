// data.js - Base de données centrale Modern Warrior (Phase 0, Phase 1 & Bankai)

const SD = {
  // ── PHASE 0 : L'ÉVEIL ─────────────────────────────────────────────────────
  "A-S1": {
    "title": "Séance A - Lundi S1-S2 (Phase 0)",
    "trackId": "s1a",
    "exos": [
      {"b": "Mobilité - Warm-Up Flow 1", "n": "Neck CARs", "p": ["5 rotations/côté", "lent"], "tip": "Cercle complet de la tête. Menton vers plafond."},
      {"b": "Mobilité - Warm-Up Flow 1", "n": "Cat-Cow", "p": ["10 reps"], "tip": "À 4 pattes. Expire en arrondissant (chat), inspire en creusant."},
      {"b": "Mobilité - Warm-Up Flow 1", "n": "Spiderman Lunge + Rotation", "p": ["5 reps/côté"], "tip": "Pied avant à côté de la main. Ouvre le coude."},
      {"b": "Mobilité - Warm-Up Flow 1", "n": "Prying Squat", "p": ["5 reps", "5s pause", "KB 12 kg"], "img": "assets/exos/prying-squat.gif", "tip": "KB sous le menton. Coudes ouvrent les genoux."},
      {"b": "Bloc 1 - TGU", "n": "Turkish Get-Up", "p": ["3-5 séries", "1 rep/bras", "KB 12 kg", "Repos 1 min"], "img": "assets/exos/tgu.gif", "tip": "7 étapes. Regard fixe sur le KB du début à la fin."},
      {"b": "Bloc 2 - Deadstop Swing 2H", "n": "Deadstop Swing 2 mains", "p": ["4-6 séries", "10 reps", "KB 16 kg", "Repos 1-2 min"], "img": "assets/exos/swing.gif", "tip": "Repose le KB au sol entre chaque rep. Charnière de hanche."},
      {"b": "Renfo - Supersets", "n": "A - Bent Over Row", "p": ["8-12 reps/côté", "KB 12-16 kg"], "img": "assets/exos/row.gif", "tip": "Dos plat 45°. Tire le coude vers la hanche."},
      {"b": "Renfo - Supersets", "n": "B - Push-up", "p": ["5-15 reps", "Poids du corps"], "tip": "Corps gainé. Descente lente, poussée explosive."},
      {"b": "Renfo - Supersets", "n": "C - Suitcase Carry", "p": ["30-50s/côté", "KB 16 kg"], "img": "assets/exos/suitcase.gif", "tip": "Épaule ne s'affaisse pas. Marche droite."}
    ]
  },
  "B-S1": {
    "title": "Séance B - Mercredi S1-S2 (Phase 0)",
    "trackId": "s1b",
    "exos": [
      {"b": "Mobilité - Warm-Up Flow 2", "n": "Downward Dog to Cobra", "p": ["10 reps fluides"], "tip": "Flux continu. Hanches hautes."},
      {"b": "Mobilité - Warm-Up Flow 2", "n": "90/90 Switch", "p": ["10 transitions lentes"], "tip": "Bascule lentement."},
      {"b": "Bloc principal - Dead Clean & Push Press", "n": "Dead Clean & Push Press", "p": ["5-8 séries", "5 reps/côté", "KB 12 kg"], "img": "assets/exos/dead-clean.gif", "tip": "Deadstop entre chaque rep. Clean puis Push Press avec légère poussée des jambes."},
      {"b": "Renfo", "n": "A - Goblet Squat", "p": ["8-12 reps", "KB 12 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "KB sous le menton. Talons au sol."},
      {"b": "Renfo", "n": "B - KB Halo", "p": ["5-10 reps/côté", "KB 8 kg"], "img": "assets/exos/halo.gif", "tip": "Cercle propre autour de la tête."},
      {"b": "Renfo", "n": "C - Roll to Elbow", "p": ["4-6 reps/côté"], "img": "assets/exos/tgu.gif", "tip": "1ère étape du TGU. Épaule engagée."}
    ]
  },
  "C-S1": {
    "title": "Séance C - Vendredi S1-S2 (Phase 0)",
    "trackId": "s1c",
    "exos": [
      {"b": "Mobilité - Warm-Up Flow 3", "n": "Shoulder CARs", "p": ["5 rotations/bras"], "tip": "Grand cercle bras tendu."},
      {"b": "Mobilité - Warm-Up Flow 3", "n": "Jefferson Curl", "p": ["5 reps", "KB léger"], "img": "assets/exos/jefferson.gif", "tip": "Enroule la colonne vertèbre par vertèbre."},
      {"b": "EMOM 20 min", "n": "Min 1 & 3 - Swing 2H", "p": ["5 tours", "10-20 reps", "KB 16 kg"], "img": "assets/exos/swing.gif", "tip": "Explosion des hanches."},
      {"b": "EMOM 20 min", "n": "Min 2 & 4 - TGU Droit/Gauche", "p": ["5 tours", "1 rep/côté", "KB 12 kg"], "img": "assets/exos/tgu.gif", "tip": "7 étapes. Exécution lente et propre."},
      {"b": "Renfo", "n": "1H Press", "p": ["3-6 reps/côté", "KB 12 kg"], "img": "assets/exos/press.gif", "tip": "Press strict sans poussée des jambes."}
    ]
  },
  "A-S3": {
    "title": "Séance A - Lundi S3-S4 (Phase 0)",
    "trackId": "s3a",
    "exos": [
      {"b": "EMOM 20 min", "n": "Min 1 & 3 - Swing 1H Droit/Gauche", "p": ["5 tours", "5-15 reps", "KB 16 kg"], "img": "assets/exos/swing.gif", "tip": "Même mécanique que 2H. Tronc anti-rotation."},
      {"b": "EMOM 20 min", "n": "Min 2 & 4 - TGU Droit/Gauche", "p": ["5 tours", "1 rep", "KB 12-16 kg"], "img": "assets/exos/tgu.gif", "tip": "Augmenter la charge si maîtrise acquise."},
      {"b": "Renfo", "n": "Bent Over Row", "p": ["8-12 reps/côté", "KB 16 kg"], "img": "assets/exos/row.gif", "tip": "Tire vers la hanche."}
    ]
  },
  "B-S3": {
    "title": "Séance B - Mercredi S3-S4 (Phase 0)",
    "trackId": "s3b",
    "exos": [
      {"b": "Bloc principal", "n": "Clean & Push Press enchaîné", "p": ["5-8 séries", "5 reps/côté", "KB 12-16 kg"], "img": "assets/exos/dead-clean.gif", "tip": "Plus de deadstop. Enchaînement fluide."},
      {"b": "Renfo", "n": "Goblet Squat", "p": ["8-12 reps", "KB 16 kg"], "img": "assets/exos/goblet-squat.webp", "tip": "Profondeur contrôlée."}
    ]
  },
  "C-S3": {
    "title": "Complexe Ulysse - Vendredi S3-S4 (Phase 0)",
    "trackId": "s3c",
    "exos": [
      {"b": "Complexe Ulysse", "n": "5 Deadstop Swing + 3 Dead Clean & Press + 3 Squat", "p": ["5-8 séries", "KB 12-16 kg"], "img": "assets/exos/swing.gif", "tip": "Enchaînement complet sans reposer le KB."}
    ]
  },
  "A-S5": {
    "title": "Séance A - Lundi S5-S6 (Phase 0)",
    "trackId": "s5a",
    "exos": [
      {"b": "EMOM 20 min", "n": "Min 1 & 3 - Deadstop Snatch Droit/Gauche", "p": ["5 tours", "5-10 reps", "KB 12 kg"], "img": "assets/exos/snatch.gif", "tip": "Punch en haut, lockout complet."},
      {"b": "EMOM 20 min", "n": "Min 2 & 4 - TGU Droit/Gauche", "p": ["5 tours", "1 rep", "KB 16 kg"], "img": "assets/exos/tgu.gif", "tip": "Verrouillage solide."}
    ]
  },
  "B-S5": {
    "title": "Séance B - Mercredi S5-S6 (Phase 0)",
    "trackId": "s5b",
    "exos": [
      {"b": "Bloc principal", "n": "Clean & Press strict", "p": ["5-8 séries", "5 reps/côté", "KB 12-16 kg"], "img": "assets/exos/press.gif", "tip": "Press STRICT = aucune poussée des jambes."}
    ]
  },
  "C-S5": {
    "title": "Complexe Atlas - Vendredi S5-S6 (Phase 0)",
    "trackId": "s5c",
    "exos": [
      {"b": "Complexe Atlas", "n": "3 Swing + 3 Clean + 3 Snatch + 3 Squat 1H", "p": ["5-8 séries", "KB 12-16 kg"], "img": "assets/exos/snatch.gif", "tip": "4 mouvements enchaînés sans pause."}
    ]
  },

  // ── PHASE 1 : LA FORGE ────────────────────────────────────────────────────
  "A-F1": {
    "title": "Séance A1 - Snatch, Push-up & 1H Swing (La Forge)",
    "trackId": "f1a",
    "exos": [
      {"b": "Préparation", "n": "1 TGU/côté + 5/5 Single Leg Deadlift + 5+5 Halo", "p": ["3 tours"], "img": "assets/exos/tgu.gif", "tip": "Activation complète de la chaîne postérieure."},
      {"b": "Bloc 1", "n": "EMOM 10' - Snatch D+G & Push-ups", "p": ["Min 1: 3-5 Snatch D+G", "Min 2: 5-15+ Push-ups"], "img": "assets/exos/snatch.gif", "tip": "Contrôle technique absolu."},
      {"b": "Bloc 2", "n": "EMOM 10' - 1H Swing D+G", "p": ["5-7 reps/côté"], "img": "assets/exos/swing.gif", "tip": "Explosivité fessiers."},
      {"b": "Renforcement", "n": "Goblet Reverse Lunge + Leg Raise + Band Zercher Carry", "p": ["3 tours"], "img": "assets/exos/goblet-squat.webp", "tip": "Stabilité du tronc."}
    ]
  },
  "B-F1": {
    "title": "Séance B1 - Heavy Clean & Press (La Forge)",
    "trackId": "f1b",
    "exos": [
      {"b": "Préparation", "n": "5 Dead Clean & Press 2H + 5 Goblet Squat + Roll to Elbow", "p": ["3 tours"], "img": "assets/exos/dead-clean.gif", "tip": "Chauffe articulaire épaules & hanches."},
      {"b": "Bloc principal", "n": "EMOM 20' - Clean & Press Lourd", "p": ["Min 1: 3-5 C&P Droit", "Min 2: 3-5 C&P Gauche"], "img": "assets/exos/press.gif", "tip": "Charge 10RM. Poussée stricte."},
      {"b": "Renforcement", "n": "Kickstand Row + 1H Squat + KB Pull Through", "p": ["3 tours"], "img": "assets/exos/row.gif", "tip": "Equilibre tirage/squat."}
    ]
  },
  "C-F1": {
    "title": "Séance C1 - Doubles Complexes Achille & Persée (La Forge)",
    "trackId": "f1c",
    "exos": [
      {"b": "Préparation", "n": "Double TGU Droit + Gauche", "p": ["3 tours léger"], "img": "assets/exos/tgu.gif", "tip": "Stabilité d'épaule."},
      {"b": "Complexe Achille", "n": "4 H2H Swing + 4 Clean + 4 Push Press", "p": ["3-5 séries"], "img": "assets/exos/press.gif", "tip": "Repos 30-60s entre côtés."},
      {"b": "Complexe Persée", "n": "3 Swings + 3 High Pull + 3 Snatch", "p": ["3-5 séries"], "img": "assets/exos/snatch.gif", "tip": "Chaîne postérieure explosive."},
      {"b": "Renforcement", "n": "Close-Grip Floor Press + Turkish Sit-up + Overhead Carry", "p": ["3 tours"], "img": "assets/exos/suitcase.gif", "tip": "Gainage & puissance du haut du corps."}
    ]
  },
  "A-F3": {
    "title": "Séance A3 - Snatch & 1H Swing Volume (La Forge S3-S4)",
    "trackId": "f3a",
    "exos": [
      {"b": "Bloc 1", "n": "EMOM 12' - Snatch D+G & Push-ups", "p": ["Min 1: 4-6 Snatch", "Min 2: Push-ups"], "img": "assets/exos/snatch.gif", "tip": "Volume en hausse."},
      {"b": "Bloc 2", "n": "EMOM 10' - 1H Swing D+G", "p": ["6-8 reps/côté"], "img": "assets/exos/swing.gif", "tip": "Puissance continue."}
    ]
  },
  "B-F3": {
    "title": "Séance B3 - Heavy Clean & Press Progression (La Forge S3-S4)",
    "trackId": "f3b",
    "exos": [
      {"b": "Bloc principal", "n": "EMOM 20' - Clean & Press (4-6 reps)", "p": ["Charge lourde"], "img": "assets/exos/press.gif", "tip": "Maintien de la forme stricte."}
    ]
  },
  "C-F3": {
    "title": "Séance C3 - Doubles Complexes Ragnar & Arès (La Forge S3-S4)",
    "trackId": "f3c",
    "exos": [
      {"b": "Complexe Ragnar", "n": "5 Row + 4 Clean + 3 Thruster", "p": ["3-5 séries"], "img": "assets/exos/dead-clean.gif", "tip": "Intensité maximale."},
      {"b": "Complexe Arès", "n": "4 Swings + 4 Snatches + 4 Overhead Lunges", "p": ["3-5 séries"], "img": "assets/exos/snatch.gif", "tip": "Gros travail de stabilité."}
    ]
  },
  "A-F5": {
    "title": "Séance A5 - Deadstop Snatch EMOM & Chrono (La Forge S5-S8)",
    "trackId": "f5a",
    "exos": [
      {"b": "Bloc 1", "n": "EMOM 10' - Deadstop Snatch D+G", "p": ["5-10 reps"], "img": "assets/exos/snatch.gif", "tip": "Arrêt net au sol entre chaque rep."},
      {"b": "Bloc 2", "n": "Chrono 10 Rounds - Swings & Push-ups", "p": ["10 Swings + 10 Push-ups"], "img": "assets/exos/swing.gif", "tip": "Endurance technique."}
    ]
  },
  "B-F5": {
    "title": "Séance B5 - AMRAP Bracket Clean & Press (La Forge S5-S8)",
    "trackId": "f5b",
    "exos": [
      {"b": "Bloc principal", "n": "AMRAP Bracket Clean & Press", "p": ["Bracket 2-4 à 5-7 reps"], "img": "assets/exos/press.gif", "tip": "Auto-régulation selon la fatigue."}
    ]
  },
  "C-F5": {
    "title": "Séance C5 - Doubles Complexes Floki & Maximus (La Forge S5-S8)",
    "trackId": "f5c",
    "exos": [
      {"b": "Complexe Floki & Maximus", "n": "Enchaînements lourds unilatéraux", "p": ["3-5 séries"], "img": "assets/exos/dead-clean.gif", "tip": "Test ultime de force fonctionnelle."}
    ]
  },

  // ── PHASE 2 : BANKAI (HYPERTROPHIE) ──────────────────────────────────────
  "A-BK1": {
    "title": "Bankai A1 - Upper/Lower Supersets (S1-S2)",
    "trackId": "b1a",
    "exos": [
      {"b": "Mobilité A", "n": "Prying Squat + Piriformis Push-up + Blackburn", "p": ["3 tours"], "img": "assets/exos/prying-squat.gif", "tip": "Activation articulaire générale."},
      {"b": "Superset Upper", "n": "5-8 Double Press + 8-12 KB Row/côté", "p": ["4-6 séries", "Repos 60-120s"], "img": "assets/exos/press.gif", "tip": "Contrôle excentrique 2-3s."},
      {"b": "Superset Lower", "n": "6-10 1H Swing/côté + 8-12 Goblet Squat (Tempo 31X1)", "p": ["4-6 séries"], "img": "assets/exos/goblet-squat.webp", "tip": "3s de descente sur le squat."},
      {"b": "Finisher", "n": "Circuit Hollow Hold + Kneeling Halo + Flutter Kicks", "p": ["2-4 séries", "30s ON / 30s OFF"], "img": "assets/exos/halo.gif", "tip": "Gainage d'acier."}
    ]
  },
  "B-BK1": {
    "title": "Bankai B1 - Push/Pull & Double Squat (S1-S2)",
    "trackId": "b1b",
    "exos": [
      {"b": "Mobilité B", "n": "Cobra to Down Dog + Hip 90-90 + Prone Scorpion", "p": ["3 tours"], "tip": "Ouverture des hanches et de la cage."},
      {"b": "Superset 1", "n": "5-15 KB Push-up + 5-8 Goblet Reverse Lunge/côté", "p": ["4-6 séries"], "img": "assets/exos/goblet-squat.webp", "tip": "Tempo contrôlé 2121."},
      {"b": "Superset 2", "n": "5-8 Double Dead Row & Clean + 5-8 Double Squat (31X1)", "p": ["4-6 séries"], "img": "assets/exos/dead-clean.gif", "tip": "Tension musculaire continue."},
      {"b": "AMRAP 8 min", "n": "8-12 High Pull + 10-15 Prone Curl + 8-12 Uppercuts", "p": ["Max de tours"], "img": "assets/exos/snatch.gif", "tip": "Pompage musculaire."}
    ]
  },
  "C-BK1": {
    "title": "Bankai C1 - AMRAP Ichigo & Renji (S1-S2)",
    "trackId": "b1c",
    "exos": [
      {"b": "AMRAP 15 min - Ichigo", "n": "7 KB Push-up + 7 Double Row + 5 Clean & Push Press", "p": ["Max de tours", "Repos 45-120s"], "img": "assets/exos/press.gif", "tip": "Densité maximale."},
      {"b": "AMRAP 15 min - Renji", "n": "4 Deadstop Swing + 3 High Pull + 4 Snatch", "p": ["Max de tours", "Repos 60-120s"], "img": "assets/exos/snatch.gif", "tip": "Explosivité sous fatigue."},
      {"b": "Finisher For Time", "n": "3 tours : Sit-ups + Burpees + Commando Plank", "p": ["10 à 20 reps selon niveau"], "tip": "Conditionnement physique."}
    ]
  },
  "C-BK2": {
    "title": "Bankai C2 - METCON Benchmark 30-40 min (S2)",
    "trackId": "b2c",
    "exos": [
      {"b": "METCON 30-40 min", "n": "40 Swings + 40 Press + 40 Goblet Squats + 40 Push-ups + 40 Rows", "p": ["40 reps/mouvement", "Même KB"], "img": "assets/exos/swing.gif", "tip": "Splatter les reps en séries de 10-20. Valider 40 reps avant de passer au suivant."}
    ]
  }
};

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
