// data.js - Base de données Modern Warrior

const SD = {
  "A-S1": {
    "title": "Seance A - Lundi S1-S2",
    "trackId": "s1a",
    "exos": [
      {"b": "Mobilite - Warm-Up Flow 1", "n": "Neck CARs", "p": ["5 rotations/cote", "lent"], "tip": "Cercle complet de la tete. Menton vers plafond. Le plus grand arc possible."},
      {"b": "Mobilite - Warm-Up Flow 1", "n": "Cat-Cow", "p": ["10 reps"], "tip": "A 4 pattes. Expire en arrondissant (chat), inspire en creusant (vache)."},
      {"b": "Mobilite - Warm-Up Flow 1", "n": "Spiderman Lunge + Rotation", "p": ["5 reps/cote"], "tip": "Pied avant a cote de la main. Ouvre le coude vers le plafond."},
      {"b": "Mobilite - Warm-Up Flow 1", "n": "Prying Squat", "p": ["5 reps", "5s pause", "KB 12 kg"], "tip": "KB sous le menton. Coudes ouvrent les genoux. Talons au sol."},
      {"b": "Bloc 1 - TGU", "n": "Turkish Get-Up", "p": ["3-5 series", "1 rep/bras", "KB 12 kg", "Repos 1 min"], "tip": "7 etapes. Regard fixe sur le KB du debut a la fin. Poing a vide si tu trebuches. Masterclass Skool avant."},
      {"b": "Bloc 2 - Deadstop Swing 2H", "n": "Deadstop Swing 2 mains", "p": ["4-6 series", "10 reps", "KB 16 kg", "Repos 1-2 min"], "tip": "Repose le KB au sol entre chaque rep. Charniere de hanche, pas squat. Puissance des fessiers."},
      {"b": "Renfo - 2-3 series enchaînées", "n": "A - Bent Over Row", "p": ["8-12 reps/cote", "KB 12-16 kg"], "tip": "Dos plat 45 degres. Tire le coude vers la hanche. Controle la descente."},
      {"b": "Renfo - 2-3 series enchaînées", "n": "B - Push-up", "p": ["5-15 reps", "poids du corps"], "tip": "Corps gaine. Descente lente, poussee explosive."},
      {"b": "Renfo - 2-3 series enchaînées", "n": "C - Suitcase Carry", "p": ["30-50s/cote", "KB 16 kg"], "tip": "Epaule ne affaisse pas. Tronc anti-rotation. Marche droite."}
    ]
  },
  "B-S1": {
    "title": "Seance B - Mercredi S1-S2",
    "trackId": "s1b",
    "exos": [
      {"b": "Mobilite - Warm-Up Flow 2", "n": "Downward Dog to Cobra", "p": ["10 reps fluides"], "tip": "Flux continu. Hanches hautes, descend lentement en cobra."},
      {"b": "Mobilite - Warm-Up Flow 2", "n": "90/90 Switch", "p": ["10 transitions lentes"], "tip": "Bascule lentement. Ne pas forcer."},
      {"b": "Mobilite - Warm-Up Flow 2", "n": "Scapular Push-ups", "p": ["10 reps"], "tip": "Bras tendus. Serre et ouvre les omoplates seulement."},
      {"b": "Mobilite - Warm-Up Flow 2", "n": "Ankle Rocks", "p": ["10 reps/cote"], "tip": "Genou avant glisse vers avant. Talon au sol."},
      {"b": "Bloc principal - Dead Clean & Push Press", "n": "Dead Clean & Push Press", "p": ["5-8 series", "5 reps/cote", "KB 12 kg", "Repos 1-2 min"], "tip": "Deadstop entre chaque rep. Clean puis front rack propre puis Push Press avec legere poussee des jambes."},
      {"b": "Renfo", "n": "A - Goblet Squat", "p": ["8-12 reps", "KB 12 kg"], "tip": "KB sous le menton. Talons au sol, genoux suivent les orteils."},
      {"b": "Renfo", "n": "B - KB Halo", "p": ["5-10 reps/cote", "KB 8 kg"], "tip": "Cercle propre autour de la tete. Coudes bas."},
      {"b": "Renfo", "n": "C - Roll to Elbow", "p": ["4-6 reps/cote"], "tip": "1ere etape du TGU. Allonge-toi, roule sur le coude. Epaule engagee."}
    ]
  },
  "C-S1": {
    "title": "Seance C - Vendredi S1-S2",
    "trackId": "s1c",
    "exos": [
      {"b": "Mobilite - Warm-Up Flow 3", "n": "Shoulder CARs", "p": ["5 rotations/bras"], "tip": "Grand cercle bras tendu. Lent et controle."},
      {"b": "Mobilite - Warm-Up Flow 3", "n": "Jefferson Curl", "p": ["5 reps", "KB leger"], "tip": "Enroule la colonne vertebre par vertebre vers le bas."},
      {"b": "Mobilite - Warm-Up Flow 3", "n": "Hip CARs", "p": ["5 rotations/jambe"], "tip": "Genou a 90 degres, rotation complete de la hanche."},
      {"b": "EMOM 20 min - 5 tours x 4 min", "n": "Min 1 - Swing 2H", "p": ["x5", "10-20 reps", "KB 16 kg", "reste de la minute"], "tip": "Explosion des hanches. Arret net en haut."},
      {"b": "EMOM 20 min - 5 tours x 4 min", "n": "Min 2 - TGU DROIT", "p": ["x5", "1 rep", "KB 12 kg", "reste de la minute"], "tip": "7 etapes. Lent. Si pas assez de temps, reduire les swings."},
      {"b": "EMOM 20 min - 5 tours x 4 min", "n": "Min 3 - Swing 2H", "p": ["x5", "10-20 reps", "KB 16 kg", "reste de la minute"], "tip": "Meme intention au min 1."},
      {"b": "EMOM 20 min - 5 tours x 4 min", "n": "Min 4 - TGU GAUCHE", "p": ["x5", "1 rep", "KB 12 kg", "reste de la minute"], "tip": "Meme qualite que le cote droit."},
      {"b": "Renfo", "n": "A - 1H Press", "p": ["3-6 reps/cote", "KB 12 kg"], "tip": "Strict. Coude en avant du tronc. Pas de balancement."},
      {"b": "Renfo", "n": "B - Goblet Reverse Lunge", "p": ["6-12 reps/cote", "KB 12 kg"], "tip": "Genou arriere proche du sol. Tronc droit."},
      {"b": "Renfo", "n": "C - Goblet Carry", "p": ["30-50s", "KB 12 kg"], "tip": "KB sous le menton. Core verrouille."}
    ]
  },
  "A-S3": {
    "title": "Seance A - Lundi S3-S4",
    "trackId": "s3a",
    "exos": [
      {"b": "Mobilite", "n": "Warm-Up Flow 1 ou 2", "p": ["5-10 min"], "tip": ""},
      {"b": "EMOM 20 min", "n": "Min 1 - Swing 1H DROIT", "p": ["x5", "5-15 reps", "KB 16 kg"], "tip": "Meme mecanique que 2H. Epaule active, tronc anti-rotation."},
      {"b": "EMOM 20 min", "n": "Min 2 - TGU DROIT", "p": ["x5", "1 rep", "KB 12-16 kg"], "tip": "Augmenter la charge si maitrise acquise."},
      {"b": "EMOM 20 min", "n": "Min 3 - Swing 1H GAUCHE", "p": ["x5", "5-15 reps", "KB 16 kg"], "tip": ""},
      {"b": "EMOM 20 min", "n": "Min 4 - TGU GAUCHE", "p": ["x5", "1 rep", "KB 12-16 kg"], "tip": ""},
      {"b": "Renfo", "n": "Bent Over Row", "p": ["8-12 reps/cote", "KB 12-16 kg"], "tip": ""},
      {"b": "Renfo", "n": "Push-up", "p": ["5-15 reps"], "tip": ""},
      {"b": "Renfo", "n": "Front Rack + Suitcase Carry", "p": ["30-50s/cote", "KB 16 kg"], "tip": "KB en front rack D + suitcase G. Puis inverser."}
    ]
  },
  "B-S3": {
    "title": "Seance B - Mercredi S3-S4",
    "trackId": "s3b",
    "exos": [
      {"b": "Mobilite", "n": "Warm-Up Flow", "p": ["5-10 min"], "tip": ""},
      {"b": "Bloc principal", "n": "Clean & Push Press enchaine", "p": ["5-8 series", "5 reps/cote", "KB 12-16 kg", "Repos 1-2 min"], "tip": "Plus de deadstop vs S1-S2. Clean fluide depuis le sol, front rack, push press enchaine."},
      {"b": "Renfo", "n": "Goblet Squat", "p": ["8-12 reps", "KB 16 kg"], "tip": ""},
      {"b": "Renfo", "n": "KB Halo", "p": ["5-10 reps/cote", "KB 8 kg"], "tip": ""},
      {"b": "Renfo", "n": "Roll to Elbow", "p": ["4-6 reps/cote"], "tip": ""}
    ]
  },
  "C-S3": {
    "title": "Complexe Ulysse - Vendredi S3-S4",
    "trackId": "s3c",
    "exos": [
      {"b": "Mobilite", "n": "Warm-Up Flow", "p": ["5-10 min"], "tip": ""},
      {"b": "Complexe Ulysse - 5-8 series", "n": "5 Deadstop Swing 1H", "p": ["5 reps", "KB 16 kg"], "tip": "1er mouvement. Sans reposer le KB."},
      {"b": "Complexe Ulysse - 5-8 series", "n": "3 Dead Clean & Push Press", "p": ["3 reps", "KB 12-16 kg"], "tip": "Enchaine directement apres les swings."},
      {"b": "Complexe Ulysse - 5-8 series", "n": "3 Squat 1H", "p": ["3 reps", "KB 12 kg", "Repos 30-60s/cotes", "60-90s/series"], "tip": "1 serie = cote D complet puis cote G complet."},
      {"b": "Renfo", "n": "Get-Up + Overhead Carry + Get Down", "p": ["2-3 series", "1 rep/cote", "KB 12-16 kg"], "tip": "TGU, marche 30s KB overhead, redescente controlee."}
    ]
  },
  "A-S5": {
    "title": "Seance A - Lundi S5-S6",
    "trackId": "s5a",
    "exos": [
      {"b": "Mobilite - Epaules Flow 1", "n": "Epaules Flow 1", "p": ["5-10 min"], "tip": "Dans onglet Mobilite. Recommande avant snatch."},
      {"b": "EMOM 20 min", "n": "Min 1 - Deadstop Snatch DROIT", "p": ["x5", "5-10 reps", "KB 12 kg"], "tip": "Repose KB au sol entre chaque rep. Hanches en premier, punch en haut, lockout complet."},
      {"b": "EMOM 20 min", "n": "Min 2 - TGU DROIT", "p": ["x5", "1 rep", "KB 16 kg"], "tip": "Augmenter si maitrise acquise."},
      {"b": "EMOM 20 min", "n": "Min 3 - Deadstop Snatch GAUCHE", "p": ["x5", "5-10 reps", "KB 12 kg"], "tip": ""},
      {"b": "EMOM 20 min", "n": "Min 4 - TGU GAUCHE", "p": ["x5", "1 rep", "KB 16 kg"], "tip": ""},
      {"b": "Renfo", "n": "Kickstand Row", "p": ["8-12 reps/cote", "KB 16 kg"], "tip": ""},
      {"b": "Renfo", "n": "Max Push-up", "p": ["max reps"], "tip": ""},
      {"b": "Renfo", "n": "Banded Zercher Carry", "p": ["30-50s"], "tip": "KB tenu en bras croises sur la poitrine."}
    ]
  },
  "B-S5": {
    "title": "Seance B - Mercredi S5-S6",
    "trackId": "s5b",
    "exos": [
      {"b": "Mobilite - Epaules Flow 1", "n": "Epaules Flow 1", "p": ["5-10 min"], "tip": "Recommande avant press."},
      {"b": "Bloc principal - Clean & Press strict", "n": "Clean & Press strict", "p": ["5-8 series", "5 reps/cote", "KB 12-16 kg", "Repos 1-2 min"], "tip": "Pas de push press. Press STRICT = aucune poussee des jambes. Coude sous le poignet."},
      {"b": "Renfo", "n": "Squat 1H", "p": ["8-12 reps/cote", "KB 12 kg"], "tip": "KB en rack ou overhead. Talons au sol."},
      {"b": "Renfo", "n": "Half Kneeling KB Rotation", "p": ["8-12 reps/cote", "KB 8 kg"], "tip": "Genou au sol, rotation thoracique controlee."},
      {"b": "Renfo", "n": "Pull Through", "p": ["8-12 reps/cote", "KB 12 kg"], "tip": "KB entre jambes, tirage a une main, gainage anti-rotation."}
    ]
  },
  "C-S5": {
    "title": "Complexe Atlas - Vendredi S5-S6",
    "trackId": "s5c",
    "exos": [
      {"b": "Mobilite", "n": "Warm-Up Flow", "p": ["5-10 min"], "tip": ""},
      {"b": "Complexe Atlas - 5-8 series", "n": "3 Swing 1H", "p": ["3 reps", "KB 16 kg"], "tip": "Explosif. 1er mouvement."},
      {"b": "Complexe Atlas - 5-8 series", "n": "3 Clean", "p": ["3 reps", "KB 16 kg"], "tip": "Front rack propre."},
      {"b": "Complexe Atlas - 5-8 series", "n": "3 Snatch", "p": ["3 reps", "KB 12 kg"], "tip": "Punch en haut, lockout complet."},
      {"b": "Complexe Atlas - 5-8 series", "n": "3 Squat 1H", "p": ["3 reps", "KB 12 kg", "Repos 30-60s/cotes", "60-90s/series"], "tip": "1 serie = D complet puis G complet."},
      {"b": "Renfo", "n": "1H Press", "p": ["5-10 reps/cote", "KB 12-16 kg"], "tip": ""},
      {"b": "Renfo", "n": "Overhead Reverse Lunge", "p": ["5-10 reps/cote", "KB 8-12 kg"], "tip": "KB verrouillee au-dessus, step arriere."},
      {"b": "Renfo", "n": "Max Sit-up", "p": ["max reps"], "tip": ""}
    ]
  }
};

const WODS = [
  {"c": "fullbody", "t": "AMRAP 30 min", "ti": "Fullbody AMRAP 30 min", "b": "10 Swings + 10 Pompes + 10 Goblet Squats + 10 Tirages/bras. Recuperation libre entre tours. <strong>H:</strong> debutant 12-20 kg / intermediaire 20-28 kg"},
  {"c": "fullbody", "t": "EMOM 30 min", "ti": "Fullbody Debutant EMOM 30 min", "b": "Min 1: 7-10 Deadstop Swings &middot; Min 2: 8-12 Goblet Squats &middot; Min 3: 7-10 2H Dead Clean + Press. 10 tours."},
  {"c": "fullbody", "t": "AMRAP 20 min", "ti": "Row + Clean + Squat AMRAP 20 min", "b": "10 Deadstop Swing &middot; 5x (Row + Dead Clean + Squat) D+G &middot; 10 Pompes. 30s repos entre exos."},
  {"c": "fullbody", "t": "EMOM 30 min", "ti": "Squat + Pompes + Swing High Pull EMOM", "b": "Min 1: 12 Goblet Squat &middot; Min 2: 12 Pompes &middot; Min 3: 12 Swing High Pull. Trop dur: 8 reps."},
  {"c": "complex", "t": "10 ROUNDS", "ti": "Complex KB - 10 rounds", "b": "1 Swing + 1 Cluster + 1 Snatch = 1 rep &middot; 5 reps = 1 round. Change de bras a chaque round. 2 min repos. <strong>H:</strong> 12-28 kg"},
  {"c": "complex", "t": "5 ROUNDS", "ti": "5 Rounds - Snatch + Push Press + Reverse TGU", "b": "5 Snatch + 3 Push Press + 1 Reverse TGU &middot; 1 bras = 1 round &middot; 5 tours/cote. Variante debutant: Swing 1H."},
  {"c": "complex", "t": "AMRAP 20 min", "ti": "20 min KB Complex - 1 bras", "b": "10 Swings + 5 Clean &amp; Press + 5 Front Squats + 5 Snatch. 1 bras = 1 round &middot; 2 min pause. <strong>H:</strong> debutant 8-16 kg / intermediaire 12-20 kg"},
  {"c": "complex", "t": "5-7 TOURS", "ti": "6 mouvements enchaines", "b": "3 reps de chaque sans reposer: 2H Row &rarr; 2H Clean &rarr; 2H Swing &rarr; Swing High Pull &rarr; Goblet Squat &rarr; Thruster. Repos 60-120s &middot; 5-7 tours &middot; <strong>H:</strong> 20-32 kg"},
  {"c": "complex", "t": "AMRAP 18 min", "ti": "Row + Swing + Cluster AMRAP 18 min", "b": "1H Row x4 + 1H Swing x3 + 1H Cluster x2. 30-60s repos entre D et G."},
  {"c": "emom", "t": "EMOM 30 min", "ti": "1H Swing + Pull Through EMOM 30 min", "b": "Min 1: 10 Swings 1H D &middot; Min 2: 20 Pull Through &middot; Min 3: 10 Swings 1H G &middot; Min 4: 20 Ballistic Row &middot; Min 5: Repos."},
  {"c": "emom", "t": "EMOM 25 min", "ti": "Double KB EMOM 25 min - 6 rounds", "b": "Min 1: 6-8 Double KB Clean &middot; Min 2: 4-6 Double KB Press &middot; Min 3: 8-10 Double KB Squat &middot; Min 4: Repos."},
  {"c": "emom", "t": "EMOM 15 min", "ti": "Deadstop + Swing EMOM 15 min", "b": "3 Deadstop Swing + 5 Swing classique par minute. Simple et efficace."},
  {"c": "emom", "t": "EMOM 30 min", "ti": "Double KB EMOM 30 min", "b": "Min 1: 10 Double Swings &middot; Min 2: 5 Double Clean &amp; Push Press &middot; Min 3: 10 Double Front Squat."},
  {"c": "amrap", "t": "AMRAP 20 min", "ti": "Flow 1 bras - Get-up + Press", "b": "1 Get-up (montee) + 1 Press a chaque etape + 3 Swing 1H + 2 Clean + 5 Squat. 30-60s repos."},
  {"c": "amrap", "t": "AMRAP 20 min", "ti": "Upper Body + Farmer Carry", "b": "5 Double Row + 5 Double Clean + 5 Double Press + 30s Farmer Carry. 60-90s repos."},
  {"c": "amrap", "t": "AMRAP 20 min", "ti": "Row + Swing + Thruster", "b": "5 Row + 4 Swing + 3 Thruster. 20-60s repos entre D et G."},
  {"c": "amrap", "t": "AMRAP 20 min", "ti": "Gunslinger AMRAP 20 min", "b": "3 Swing Gunslinger + 3 Clean + 3 Press - D puis G. Repos 45-90s. <strong>H:</strong> 16-24 kg"},
  {"c": "amrap", "t": "FINISHER 10 min", "ti": "Finisher AMRAP 10 min", "b": "5 Rowing + 4 Swing + 3 Clean + 2 Squat + 1 Thruster. Changer de cote."},
  {"c": "amrap", "t": "FOR TIME", "ti": "100 Snatch For Time", "b": "100 Snatch le plus vite possible - 50D + 50G. Standard StrongFirst: moins de 5 min."},
  {"c": "cible", "t": "HAUT DU CORPS", "ti": "Haut du corps - 3 supersets", "b": "Superset 1 (3x, 90s): 8+8 See Saw Floor Press + 8+8 Gorilla Row<br>Superset 2 (3x, 75s): 8 Double Press + 12 Upright Row<br>Superset 3 (2-3x, 60s): 12 Horn Curl + 12 Triceps Extension"},
  {"c": "cible", "t": "DOS + EPAULES", "ti": "Dos x Epaules - 3-5 tours", "b": "15-30s repos entre exos &middot; 75-90s repos &middot; 3-5 tours:<br>Hike Pass 10-12 reps (lourd) &middot; Kickstand Row 8-10/cote &middot; Rear Delt + High Row 12-15 reps (leger)"},
  {"c": "cible", "t": "PECTORAUX", "ti": "Pectoraux - 2 supersets", "b": "Superset 1 (3-5x, 2min): 5-8 Banded KB Floor Press + Max Close Grip Push-up<br>Superset 2 (2-4x): 8-10 Glute Bridge SA Press + Max Offset KB Push-up"},
  {"c": "cible", "t": "CORE", "ti": "Centre du corps", "b": "Circuit 30-60s/cote &middot; 10-20s repos &middot; 2-4 tours:<br>Turkish Sit-up &middot; Half-Kneeling Wood Chop &middot; Bear Crawl Pull-Through &middot; Overhead Walk"},
  {"c": "cible", "t": "JAMBES + ABDOS", "ti": "Jambes x Abdos - 2-4 series", "b": "6-8 reps:<br>Front Rack Reverse Lunge &middot; Swing to Goblet Squat &middot; Goblet Curtsy Squat &middot; Kickstand RDL &middot; Overhead Walking Lunge"}
];

const TRACK_IDS = [
  {"id": "s1a", "n": "Semaine 1 - Seance A", "d": "Lundi - Deadstop Swing + TGU", "b": "bo"},
  {"id": "s1b", "n": "Semaine 1 - Seance B", "d": "Mercredi - Dead Clean &amp; Push Press", "b": "bb"},
  {"id": "s1c", "n": "Semaine 1 - Seance C", "d": "Vendredi - 2H Swing + TGU EMOM", "b": "bg"},
  {"id": "s2a", "n": "Semaine 2 - Seance A", "d": "Lundi - Deadstop Swing + TGU", "b": "bo"},
  {"id": "s2b", "n": "Semaine 2 - Seance B", "d": "Mercredi - Dead Clean &amp; Push Press", "b": "bb"},
  {"id": "s2c", "n": "Semaine 2 - Seance C", "d": "Vendredi - 2H Swing + TGU EMOM", "b": "bg"},
  {"id": "s3a", "n": "Semaine 3 - Seance A", "d": "Lundi - 1H Swing + TGU EMOM", "b": "bo"},
  {"id": "s3b", "n": "Semaine 3 - Seance B", "d": "Mercredi - Clean &amp; Push Press", "b": "bb"},
  {"id": "s3c", "n": "Semaine 3 - Seance C", "d": "Vendredi - Complexe Ulysse", "b": "bg"},
  {"id": "s4a", "n": "Semaine 4 - Seance A", "d": "Lundi - 1H Swing + TGU EMOM", "b": "bo"},
  {"id": "s4b", "n": "Semaine 4 - Seance B", "d": "Mercredi - Clean &amp; Push Press", "b": "bb"},
  {"id": "s4c", "n": "Semaine 4 - Seance C", "d": "Vendredi - Complexe Ulysse", "b": "bg"},
  {"id": "s5a", "n": "Semaine 5 - Seance A", "d": "Lundi - Snatch + TGU EMOM", "b": "bo"},
  {"id": "s5b", "n": "Semaine 5 - Seance B", "d": "Mercredi - Clean &amp; Press strict", "b": "bb"},
  {"id": "s5c", "n": "Semaine 5 - Seance C", "d": "Vendredi - Complexe Atlas", "b": "bg"},
  {"id": "s6a", "n": "Semaine 6 - Seance A", "d": "Lundi - Snatch + TGU EMOM", "b": "bo"},
  {"id": "s6b", "n": "Semaine 6 - Seance B", "d": "Mercredi - Clean &amp; Press strict", "b": "bb"},
  {"id": "s6c", "n": "Semaine 6 - Seance C", "d": "Vendredi - Complexe Atlas", "b": "bg"}
];

// --- PHASE 1 : LA FORGE (18 Séances - Force & Puissance) ---
const TRACK_IDS_P1 = [];
for(let w=1; w<=6; w++) {
  TRACK_IDS_P1.push({ id: 'f'+w+'a', n: 'Séance A - Semaine '+w, d: 'Double Clean & Press + Squat' });
  TRACK_IDS_P1.push({ id: 'f'+w+'b', n: 'Séance B - Semaine '+w, d: 'Apprentissage Snatch + Core' });
  TRACK_IDS_P1.push({ id: 'f'+w+'c', n: 'Séance C - Semaine '+w, d: 'Complexe Lourd (Double KB)' });
}

// --- PHASE 2 : BANKAI (24 Séances - Hypertrophie / 8 semaines) ---
const TRACK_IDS_BK = [];
for(let w=1; w<=8; w++) {
  TRACK_IDS_BK.push({ id: 'b'+w+'a', n: 'Séance A - Semaine '+w, d: 'Push (Press, Pompes lestées, Triceps)' });
  TRACK_IDS_BK.push({ id: 'b'+w+'b', n: 'Séance B - Semaine '+w, d: 'Pull (Rowing lourd, Pull-over, Biceps)' });
  TRACK_IDS_BK.push({ id: 'b'+w+'c', n: 'Séance C - Semaine '+w, d: 'Legs (Double Front Squat, Fentes bulgares)' });
}

// Dictionnaire central pour gérer les phases
const PHASES_DATA = {
  '0': { title: "Phase 0 : L'Éveil", data: TRACK_IDS, total: 18 },
  '1': { title: "Phase 1 : La Forge", data: TRACK_IDS_P1, total: 18 },
  '2': { title: "Bankai : Hypertrophie", data: TRACK_IDS_BK, total: 24 }
};
