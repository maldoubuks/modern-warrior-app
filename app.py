# data.py - Base de données Modern Warrior

SESSIONS = {
    "A-S1": {
        "title": "Séance A · Lundi S1-S2",
        "subtitle": "Deadstop Swing 2H + TGU · ~35 min · KB 12+16 kg",
        "trackId": "s1a",
        "exos": [
            {"b": "Mobilité - Warm-Up Flow 1", "n": "Neck CARs", "p": ["5 rotations/côté", "Lent"], "tip": "Cercle complet de la tête. Menton vers le plafond."},
            {"b": "Mobilité - Warm-Up Flow 1", "n": "Cat-Cow", "p": ["10 reps"], "tip": "À 4 pattes. Expire en arrondissant, inspire en creusant."},
            {"b": "Mobilité - Warm-Up Flow 1", "n": "Spiderman Lunge + Rotation", "p": ["5 reps/côté"], "tip": "Pied avant à côté de la main. Ouvre le coude vers le plafond."},
            {"b": "Mobilité - Warm-Up Flow 1", "n": "Prying Squat", "p": ["5 reps", "5s pause", "KB 12 kg"], "tip": "KB sous le menton. Coudes ouvrent les genoux."},
            {"b": "Bloc 1 - TGU", "n": "Turkish Get-Up", "p": ["3-5 séries", "1 rep/bras", "KB 12 kg", "Repos 1 min"], "tip": "7 étapes. Regard fixé sur le KB du début à la fin."},
            {"b": "Bloc 2 - Deadstop Swing 2H", "n": "Deadstop Swing 2 mains", "p": ["4-6 séries", "10 reps", "KB 16 kg", "Repos 1-2 min"], "tip": "Repose le KB au sol entre chaque rep. Charnière de hanche, pas squat."},
            {"b": "Renfo - Superset", "n": "A - Bent Over Row", "p": ["8-12 reps/côté", "KB 12-16 kg"], "tip": "Dos plat à 45°. Tire le coude vers la hanche."},
            {"b": "Renfo - Superset", "n": "B - Push-up", "p": ["5-15 reps"], "tip": "Corps gainé. Descente lente, poussée explosive."},
            {"b": "Renfo - Superset", "n": "C - Suitcase Carry", "p": ["30-50s/côté", "KB 16 kg"], "tip": "Épaule ne s'affaisse pas. Tronc anti-rotation."}
        ]
    },
    "B-S1": {
        "title": "Séance B · Mercredi S1-S2",
        "subtitle": "Dead Clean & Push Press · ~35 min · KB 12 kg",
        "trackId": "s1b",
        "exos": [
            {"b": "Mobilité - Warm-Up Flow 2", "n": "Downward Dog to Cobra", "p": ["10 reps fluides"], "tip": "Flux continu. Hanches hautes, descend lentement en cobra."},
            {"b": "Mobilité - Warm-Up Flow 2", "n": "90/90 Switch", "p": ["10 transitions lentes"], "tip": "Bascule lentement. Ne pas forcer."},
            {"b": "Bloc Principal", "n": "Dead Clean & Push Press", "p": ["5-8 séries", "5 reps/côté", "KB 12 kg", "Repos 1-2 min"], "tip": "Deadstop entre chaque rep. Clean puis front rack propre."},
            {"b": "Renfo", "n": "A - Goblet Squat", "p": ["8-12 reps", "KB 12 kg"], "tip": "KB sous le menton. Talons au sol."},
            {"b": "Renfo", "n": "B - KB Halo", "p": ["5-10 reps/côté", "KB 8 kg"], "tip": "Cercle propre autour de la tête."},
            {"b": "Renfo", "n": "C - Roll to Elbow", "p": ["4-6 reps/côté"], "tip": "1ère étape du TGU. Allonge-toi, roule sur le coude."}
        ]
    },
    "C-S1": {
        "title": "Séance C · Vendredi S1-S2",
        "subtitle": "2H Swing + TGU EMOM 20' · ~35 min",
        "trackId": "s1c",
        "exos": [
            {"b": "EMOM 20 min", "n": "Min 1 - Swing 2H", "p": ["10-20 reps", "KB 16 kg"], "tip": "Explosion des hanches. Arrêt net en haut."},
            {"b": "EMOM 20 min", "n": "Min 2 - TGU DROIT", "p": ["1 rep", "KB 12 kg"], "tip": "7 étapes. Exécution lente et propre."},
            {"b": "EMOM 20 min", "n": "Min 3 - Swing 2H", "p": ["10-20 reps", "KB 16 kg"], "tip": "Maintenir le même rythme."},
            {"b": "EMOM 20 min", "n": "Min 4 - TGU GAUCHE", "p": ["1 rep", "KB 12 kg"], "tip": "Même qualité que le côté droit."},
            {"b": "Renfo", "n": "1H Press", "p": ["3-6 reps/côté", "KB 12 kg"], "tip": "Press strict. Coude en avant du tronc."},
            {"b": "Renfo", "n": "Goblet Reverse Lunge", "p": ["6-12 reps/côté", "KB 12 kg"], "tip": "Genou arrière proche du sol."},
            {"b": "Renfo", "n": "Goblet Carry", "p": ["30-50s", "KB 12 kg"], "tip": "KB sous le menton. Core verrouillé."}
        ]
    }
}

WODS = [
    {"c": "Fullbody", "t": "AMRAP 30 min", "ti": "Fullbody AMRAP 30 min", "b": "10 Swings + 10 Pompes + 10 Goblet Squats + 10 Tirages/bras. Récupération libre."},
    {"c": "Fullbody", "t": "EMOM 30 min", "ti": "Fullbody Débutant EMOM 30 min", "b": "Min 1: 7-10 Deadstop Swings · Min 2: 8-12 Goblet Squats · Min 3: 7-10 2H Dead Clean + Press."},
    {"c": "Complex", "t": "10 Rounds", "ti": "Complex KB - 10 rounds", "b": "1 Swing + 1 Cluster + 1 Snatch = 1 rep · 5 reps = 1 round. Change de bras à chaque round."},
    {"c": "EMOM", "t": "EMOM 30 min", "ti": "1H Swing + Pull Through", "b": "Min 1: 10 Swings 1H D · Min 2: 20 Pull Through · Min 3: 10 Swings 1H G · Min 4: 20 Ballistic Row."},
    {"c": "AMRAP", "t": "AMRAP 20 min", "ti": "Upper Body + Farmer Carry", "b": "5 Double Row + 5 Double Clean + 5 Double Press + 30s Farmer Carry."}
]

SNACKS = [
    {"cat": "Quick Hit 🗡️", "title": "2H Deadstop Swing V1", "desc": "EMOM 10-15' · 5 Deadstop Swing + 5 Swing classique/min · Charge moyenne"},
    {"cat": "Quick Hit 🗡️", "title": "Non-Stop Single TGU", "desc": "Chrono 10-15' · Max TGU (D+G) · Charge moyenne"},
    {"cat": "Power Mix ⚡", "title": "2H Swing + Goblet Squat", "desc": "Chrono 10-15' · Ladder montant 1+1 à 5+5 sans reposer le KB"},
    {"cat": "Full Set 🎯", "title": "The Basic 3", "desc": "Chrono 10-20' · 7 Goblet Squat + 1 TGU/côté + 12 Swings · Max tours"},
    {"cat": "Bodyweight 🤸", "title": "For Time #1", "desc": "3 tours · 12 Sit-up + 10 Burpee + 12 Commando Plank + 20 Mountain Climbers"}
]

TRACKING_SESSIONS = [
    {"id": "s1a", "name": "Semaine 1 - Séance A", "desc": "Deadstop Swing + TGU"},
    {"id": "s1b", "name": "Semaine 1 - Séance B", "desc": "Dead Clean & Push Press"},
    {"id": "s1c", "name": "Semaine 1 - Séance C", "desc": "2H Swing + TGU EMOM"},
    {"id": "s2a", "name": "Semaine 2 - Séance A", "desc": "Deadstop Swing + TGU"},
    {"id": "s2b", "name": "Semaine 2 - Séance B", "desc": "Dead Clean & Push Press"},
    {"id": "s2c", "name": "Semaine 2 - Séance C", "desc": "2H Swing + TGU EMOM"}
]
