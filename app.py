import streamlit as st
import time
from data import SESSIONS, WODS, SNACKS, TRACKING_SESSIONS

# Config de la page
st.set_page_config(
    page_title="Modern Warrior",
    page_icon="⚔️",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Style CSS sur-mesure (Thème Modern Warrior : Orange #D85A30 & Dark)
st.markdown("""
<style>
    .stApp { background-color: #121212; color: #E0E0E0; }
    .mw-card { background: #1E1E1E; border: 1px solid #333; border-radius: 12px; padding: 16px; margin-bottom: 12px; }
    .mw-title { color: #D85A30; font-weight: 700; font-size: 24px; }
    .mw-pill { background: #FAECE7; color: #993C1D; font-size: 11px; padding: 3px 8px; border-radius: 99px; font-weight: 600; }
    .stButton>button { background-color: #D85A30; color: white; border-radius: 8px; border: none; font-weight: bold; }
    .stButton>button:hover { background-color: #B54521; color: white; }
</style>
""", unsafe_allow_html=True)

# Initialisation du State
if 'completed_sessions' not in st.session_state:
    st.session_state.completed_sessions = set()
if 'active_session' not in st.session_state:
    st.session_state.active_session = None
if 'exo_idx' not in st.session_state:
    st.session_state.exo_idx = 0

# --- NAVIGATION SIDEBAR ---
st.sidebar.title("⚔️ Modern Warrior")
menu = st.sidebar.radio(
    "Menu",
    ["🏠 Accueil", "⚔️ Player de Séance", "🔥 WOD", "⚡ Snacks KB", "📊 Tracking & Logs"]
)

# --- ACCUEIL ---
if menu == "🏠 Accueil":
    st.markdown("<h1 class='mw-title'>Phase 0 · L'Éveil</h1>", unsafe_allow_html=True)
    st.caption("Homme <75 kg · Basic Fit · L/M/V matin · 30-45 min")
    
    col1, col2 = st.columns(2)
    with col1:
        done_count = len(st.session_state.completed_sessions)
        st.metric("Séances validées", f"{done_count} / 18")
    with col2:
        week = min(6, (done_count // 3) + 1)
        st.metric("Semaine actuelle", f"Semaine {week}")
        
    st.progress(done_count / 18)
    
    st.subheader("Prochaine séance recommandée")
    st.info("💡 **Conseil Auto-régulation :** Si RPE > 8 ou technique dégradée → réduis les répétitions ou passe en E2MOM.")

# --- PLAYER DE SÉANCE ---
elif menu == "⚔️ Player de Séance":
    st.markdown("<h1 class='mw-title'>⚔️ Player de Séance</h1>", unsafe_allow_html=True)
    
    sess_key = st.selectbox("Sélectionne ta séance :", list(SESSIONS.keys()), format_func=lambda x: SESSIONS[x]['title'])
    sess_data = SESSIONS[sess_key]
    
    if st.button("▶ Démarrer la session"):
        st.session_state.active_session = sess_key
        st.session_state.exo_idx = 0

    if st.session_state.active_session == sess_key:
        exos = sess_data["exos"]
        idx = st.session_state.exo_idx
        exo = exos[idx]
        
        st.markdown(f"### Exercice {idx + 1} / {len(exos)} : **{exo['n']}**")
        st.caption(f"Bloc : {exo['b']}")
        
        # Pills
        pill_html = " ".join([f"<span class='mw-pill'>{p}</span>" for p in exo['p']])
        st.markdown(pill_html, unsafe_allow_html=True)
        st.write("")
        
        if exo.get('tip'):
            st.warning(f"💡 **Conseil technique :** {exo['tip']}")
            
        col_prev, col_next = st.columns(2)
        with col_prev:
            if idx > 0 and st.button("⬅️ Précédent"):
                st.session_state.exo_idx -= 1
                st.rerun()
        with col_next:
            if idx < len(exos) - 1:
                if st.button("Suivant ➡️"):
                    st.session_state.exo_idx += 1
                    st.rerun()
            else:
                if st.button("🏆 Valider et Terminer"):
                    st.session_state.completed_sessions.add(sess_data['trackId'])
                    st.success("Séance enregistrée avec succès !")
                    st.session_state.active_session = None
                    st.rerun()

# --- WOD ---
elif menu == "🔥 WOD":
    st.markdown("<h1 class='mw-title'>🔥 Bibliothèque WOD</h1>", unsafe_allow_html=True)
    cat_filter = st.selectbox("Filtrer par catégorie :", ["Tous", "Fullbody", "Complex", "EMOM", "AMRAP"])
    
    for wod in WODS:
        if cat_filter == "Tous" or wod['c'] == cat_filter:
            with st.expander(f"**{wod['ti']}** ({wod['t']})"):
                st.write(wod['b'])

# --- SNACKS KB ---
elif menu == "⚡ Snacks KB":
    st.markdown("<h1 class='mw-title'>⚡ Kettlebell Snacks (10-20 min)</h1>", unsafe_allow_html=True)
    for snack in SNACKS:
        with st.container():
            st.markdown(f"<div class='mw-card'><h4>{snack['title']} <small>({snack['cat']})</small></h4><p>{snack['desc']}</p></div>", unsafe_allow_html=True)

# --- TRACKING ---
elif menu == "📊 Tracking & Logs":
    st.markdown("<h1 class='mw-title'>📊 Tracking des Séances</h1>", unsafe_allow_html=True)
    
    for item in TRACKING_SESSIONS:
        is_done = item['id'] in st.session_state.completed_sessions
        chk = st.checkbox(f"**{item['name']}** - {item['desc']}", value=is_done, key=item['id'])
        if chk:
            st.session_state.completed_sessions.add(item['id'])
        else:
            st.session_state.completed_sessions.discard(item['id'])
