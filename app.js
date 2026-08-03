// app.js - Logique Modern Warrior, Supabase, Saisie a posteriori & Gamification

const SUPA_URL = 'https://shhxsxfwfskwdmaqkhqq.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoaHhzeGZ3ZnNrd2RtYXFraHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3MzI4OTQsImV4cCI6MjEwMTMwODg5NH0.1Z0495ck0MIX9Th3Z6iieppGIQ22fcf3F61luAcE-XU';

const supa = {
  headers(extra={}) {
    return {
      'apikey': SUPA_KEY,
      'Authorization': 'Bearer ' + SUPA_KEY,
      'Content-Type': 'application/json',
      ...extra
    };
  },
  async get(table, params='') {
    try {
      const r = await fetch(SUPA_URL+'/rest/v1/'+table+params, { method: 'GET', headers: this.headers() });
      if (!r.ok) return [];
      return r.json();
    } catch(e) { return []; }
  },
  async post(table, body) {
    try {
      const r = await fetch(SUPA_URL+'/rest/v1/'+table, {
        method: 'POST',
        headers: this.headers({'Prefer':'return=minimal'}),
        body: JSON.stringify(body)
      });
      return r.ok;
    } catch(e) { return false; }
  },
  async upsert(table, body) {
    try {
      const r = await fetch(SUPA_URL+'/rest/v1/'+table, {
        method: 'POST',
        headers: this.headers({'Prefer':'resolution=merge-duplicates,return=minimal'}),
        body: JSON.stringify(body)
      });
      return r.ok;
    } catch(e) { return false; }
  },
  async ping() {
    try {
      const r = await fetch(SUPA_URL+'/rest/v1/profile?limit=0', { headers: this.headers() });
      return r.ok || r.status === 406;
    } catch(e) { return false; }
  }
};

function getUserId() {
  let uid = localStorage.getItem('mw3-uid');
  if (!uid) {
    uid = 'mw-' + Math.random().toString(36).substr(2,9) + '-' + Date.now().toString(36);
    localStorage.setItem('mw3-uid', uid);
  }
  return uid;
}
const USER_ID = getUserId();

// ── GAMIFICATION (Niveaux & Points) ───────────────────────────────────────
const LEVELS = [
  { level: 1, pts: 0, title: "Niveau 1 - Débutant" },
  { level: 2, pts: 5, title: "Niveau 2 - Initié" },
  { level: 3, pts: 20, title: "Niveau 3 - Guerrier" },
  { level: 4, pts: 65, title: "Niveau 4 - Vétéran" },
  { level: 5, pts: 155, title: "Niveau 5 - Maître KB" },
  { level: 6, pts: 515, title: "Niveau 6 - Légende" },
  { level: 7, pts: 2015, title: "Niveau 7 - Seigneur Guerre" },
  { level: 8, pts: 8015, title: "Niveau 8 - Demi-Dieu" },
  { level: 9, pts: 33015, title: "Niveau 9 - Modern Warrior Supreme" }
];

function calculateLevel(points) {
  let current = LEVELS[0];
  let next = LEVELS[1];
  for (let i = 0; i < LEVELS.length; i++) {
    if (points >= LEVELS[i].pts) {
      current = LEVELS[i];
      next = LEVELS[i + 1] || LEVELS[i];
    }
  }
  return { current, next };
}

// ── FICHE HTML & EXERCICES ───────────────────────────────────────────────
function ficheHTML(key){
  const s = SD[key]; if(!s) return '';
  const blocs={}, order=[];
  s.exos.forEach(e => {
    if(!blocs[e.b]){ blocs[e.b] = []; order.push(e.b); }
    blocs[e.b].push(e);
  });
  let h = '';
  order.forEach(b => {
    h += `<div style="margin-bottom:10px"><div style="font-size:10px;font-weight:700;color:var(--i3);text-transform:uppercase;letter-spacing:.06em;padding:8px 0 5px">${b}</div>`;
    blocs[b].forEach(e => {
      h += `<div class="exo"><div class="en">${e.n}</div><div class="pills">${e.p.map(p => {
        if(p.includes('KB')||p.includes('kg')) return `<span class="pi pk">${p}</span>`;
        if(p.includes('Repos')||p.includes('min')||p.includes('&times;')) return `<span class="pi pr">${p}</span>`;
        return `<span class="pi">${p}</span>`;
      }).join('')}</div>${e.tip ? `<div class="tip">${e.tip}</div>` : ''}</div>`;
    });
    h += '</div>';
  });
  return h;
}

// ── PLAYER EN DIRECT ───────────────────────────────────────────────────────
let pKey='', pIdx=0, tInterval=null, tSec=0, tRunning=false, rInterval=null, rSec=0, pStart=null;
let selRpeVal=0, selFeelVal='', detailedExos={};

function startPlayer(key){
  const s = SD[key]; if(!s) return;
  pKey = key; pIdx = 0; pStart = new Date(); detailedExos = {};
  document.getElementById('player').style.display = 'block';
  document.body.style.overflow = 'hidden';
  resetTimer(); stopRest();
  renderPlayer();
  window.scrollTo(0,0);
}

function closePlayer(){
  if(tRunning) clearInterval(tInterval);
  clearInterval(rInterval);
  document.getElementById('player').style.display = 'none';
  document.body.style.overflow = '';
}

function renderPlayer(){
  const s = SD[pKey], exos = s.exos, e = exos[pIdx], total = exos.length;
  document.getElementById('p-nav-title').innerHTML = s.title;
  document.getElementById('p-nav-prog').textContent = (pIdx+1) + '/' + total;
  document.getElementById('p-topbar').style.width = (pIdx/total*100) + '%';
  document.getElementById('p-bloc-name').innerHTML = e.b;
  document.getElementById('p-exo-num').textContent = 'Exercice ' + (pIdx+1) + ' sur ' + total;
  document.getElementById('p-exo-name').innerHTML = e.n;
  const pp = document.getElementById('p-pills');
  pp.innerHTML = e.p.map(p => {
    let c = 'pp-reps';
    if(p.includes('KB')||p.includes('kg')) c = 'pp-kb';
    else if(p.includes('s&eacute;rie')||p.includes('&times;')) c = 'pp-sets';
    else if(p.includes('Repos')||p.includes('min')) c = 'pp-rest';
    return `<span class="pp ${c}">${p}</span>`;
  }).join('');
  document.getElementById('p-tip').innerHTML = e.tip || '';
  const next = exos[pIdx+1];
  const pn = document.getElementById('p-next');
  pn.style.display = next ? 'flex' : 'none';
  if(next) document.getElementById('p-next-name').innerHTML = next.n;
  const isLast = pIdx === total - 1;
  const btn = document.getElementById('p-action-btn');
  if(isLast){ btn.textContent = 'Terminer la séance ✓'; btn.className = 'pa-done'; btn.onclick = showFinish; }
  else{ btn.textContent = 'Exercice suivant →'; btn.className = 'pa-next'; btn.onclick = nextExo; }
  resetTimer();
}

function nextExo(){ const s = SD[pKey]; if(pIdx < s.exos.length-1){ pIdx++; renderPlayer(); } }
function prevExo(){ if(pIdx > 0){ pIdx--; renderPlayer(); } }

function toggleTimer(){
  if(tRunning){
    clearInterval(tInterval); tRunning = false;
    const btn = document.getElementById('t-start-btn');
    btn.textContent = '▶ Reprendre'; btn.className = 't-btn t-start';
  } else {
    tRunning = true;
    const btn = document.getElementById('t-start-btn');
    btn.textContent = '⏸ Pause'; btn.className = 't-btn t-pause';
    tInterval = setInterval(() => {
      tSec++;
      const m = Math.floor(tSec/60), s = tSec%60;
      document.getElementById('t-display').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
      document.getElementById('t-fill').style.width = Math.min(tSec/300*100, 100) + '%';
    }, 1000);
  }
}
function resetTimer(){
  clearInterval(tInterval); tRunning = false; tSec = 0;
  document.getElementById('t-display').textContent = '00:00';
  document.getElementById('t-fill').style.width = '0%';
  const btn = document.getElementById('t-start-btn');
  btn.textContent = '▶ Démarrer'; btn.className = 't-btn t-start';
}

function setRest(sec){
  stopRest(); rSec = sec;
  document.getElementById('r-zone').style.display = 'block';
  updRest();
  rInterval = setInterval(() => {
    if(rSec <= 0){ stopRest(); return; }
    rSec--; updRest();
  }, 1000);
}
function updRest(){
  const m = Math.floor(rSec/60), s = rSec%60;
  document.getElementById('r-display').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
}
function stopRest(){ clearInterval(rInterval); document.getElementById('r-zone').style.display = 'none'; }

function showFinish(){
  clearInterval(tInterval); clearInterval(rInterval);
  const elapsed = Math.round((new Date() - pStart)/60000);
  document.getElementById('f-sub').innerHTML = SD[pKey].title + ' &middot; ' + elapsed + ' min';
  document.getElementById('f-notes').value = '';
  selRpeVal = 0; selFeelVal = '';
  document.querySelectorAll('.rpe-btn').forEach(b => b.classList.remove('sel'));
  document.querySelectorAll('.feel-btn').forEach(b => b.classList.remove('sel'));
  document.getElementById('finish').style.display = 'block';
}
function selRpe(btn, v){ document.querySelectorAll('.rpe-btn').forEach(b => b.classList.remove('sel')); btn.classList.add('sel'); selRpeVal = v; }
function selFeel(btn, v){ document.querySelectorAll('.feel-btn').forEach(b => b.classList.remove('sel')); btn.classList.add('sel'); selFeelVal = v; }

// ── SAISIE A POSTERIORI (MANUELLE) ─────────────────────────────────────────
function openRetroModal(key) {
  const s = SD[key]; if (!s) return;
  pKey = key;
  document.getElementById('retro-title').textContent = s.title;
  
  // Générer les champs de saisie pour chaque exercice
  let h = '';
  s.exos.forEach((e, idx) => {
    h += `<div style="background:#1E1E1E;border:1px solid #333;border-radius:8px;padding:10px;margin-bottom:8px">
      <div style="font-size:12px;font-weight:700;color:#fff;margin-bottom:4px">${e.n}</div>
      <div style="font-size:10px;color:#888;margin-bottom:6px">${e.p.join(' · ')}</div>
      <div style="display:flex;gap:8px">
        <input type="text" id="retro-kg-${idx}" placeholder="Poids (ex: 12 kg)" style="flex:1;background:#2A2A2A;border:1px solid #444;border-radius:6px;padding:6px;color:#fff;font-size:12px">
        <input type="text" id="retro-reps-${idx}" placeholder="Reps / Notes" style="flex:1;background:#2A2A2A;border:1px solid #444;border-radius:6px;padding:6px;color:#fff;font-size:12px">
      </div>
    </div>`;
  });
  document.getElementById('retro-exos-list').innerHTML = h;
  document.getElementById('retro-notes').value = '';
  selRpeVal = 0; selFeelVal = '';
  document.querySelectorAll('.retro-rpe-btn').forEach(b => b.classList.remove('sel'));
  document.querySelectorAll('.retro-feel-btn').forEach(b => b.classList.remove('sel'));
  document.getElementById('retro-modal').style.display = 'block';
}

function closeRetroModal() {
  document.getElementById('retro-modal').style.display = 'none';
}

async function saveRetroSession() {
  const s = SD[pKey];
  const notes = document.getElementById('retro-notes').value;
  
  // Récupérer les perfs exercice par exercice
  const detailed = {};
  s.exos.forEach((e, idx) => {
    const kg = document.getElementById(`retro-kg-${idx}`)?.value || '';
    const reps = document.getElementById(`retro-reps-${idx}`)?.value || '';
    if (kg || reps) {
      detailed[e.n] = { kg, reps };
    }
  });

  const sessionData = {
    user_id: USER_ID, session_key: pKey, session_title: s.title,
    track_id: s.trackId, duration_min: 35, rpe: selRpeVal || null,
    feel: selFeelVal || null, notes: notes || null,
    detailed_exos: JSON.stringify(detailed)
  };
  
  await supa.post('sessions', sessionData).catch(()=>{});

  done.add(s.trackId);
  await supa.upsert('tracking', {user_id: USER_ID, track_id: s.trackId, done: true}).catch(()=>{});

  if (!window._sessMap) window._sessMap = {};
  window._sessMap[s.trackId] = {...sessionData, completed_at: new Date().toISOString()};

  localStorage.setItem('mw3-done', JSON.stringify([...done]));

  updateStats(); buildTracking();
  closeRetroModal();
  showToast('Séance enregistrée avec succès !', '#639922');
  goPage('tracking');
}

// Enregistrer la séance depuis le player live
async function saveSession(){
  const s = SD[pKey];
  const elapsed = Math.round((new Date() - pStart)/60000);
  const notes = document.getElementById('f-notes').value;

  const sessionData = {
    user_id: USER_ID, session_key: pKey, session_title: s.title,
    track_id: s.trackId, duration_min: elapsed, rpe: selRpeVal || null,
    feel: selFeelVal || null, notes: notes || null
  };
  await supa.post('sessions', sessionData).catch(()=>{});

  done.add(s.trackId);
  await supa.upsert('tracking', {user_id: USER_ID, track_id: s.trackId, done: true}).catch(()=>{});

  if (!window._sessMap) window._sessMap = {};
  window._sessMap[s.trackId] = {...sessionData, completed_at: new Date().toISOString()};

  localStorage.setItem('mw3-done', JSON.stringify([...done]));

  updateStats(); buildTracking();
  document.getElementById('finish').style.display = 'none';
  document.getElementById('player').style.display = 'none';
  document.body.style.overflow = '';
  showToast('Séance enregistrée avec succès !', '#639922');
  goPage('tracking');
}

// ── TRACKING & STATS ───────────────────────────────────────────────────────
const done = new Set();
async function loadFromSupabase() {
  const online = await supa.ping();
  if (online) {
    const rows = await supa.get('tracking', '?user_id=eq.'+USER_ID+'&done=eq.true&select=track_id');
    rows.forEach(r => done.add(r.track_id));

    const sessions = await supa.get('sessions', '?user_id=eq.'+USER_ID);
    const sessMap = {};
    sessions.forEach(s => { if (!sessMap[s.track_id]) sessMap[s.track_id] = s; });
    window._sessMap = sessMap;

    const localDone = JSON.parse(localStorage.getItem('mw3-done') || '[]');
    for (const id of localDone) {
      if (!done.has(id)) {
        done.add(id);
        supa.upsert('tracking', {user_id: USER_ID, track_id: id, done: true});
      }
    }
    localStorage.removeItem('mw3-done');
  } else {
    const local = JSON.parse(localStorage.getItem('mw3-done') || '[]');
    local.forEach(id => done.add(id));
    showToast('Mode hors-ligne — données locales');
  }
  updateStats(); buildTracking();
}

function buildTracking(){
  const sessMap = window._sessMap || {};
  let h = '';
  for(let w=1; w<=6; w++){
    h += `<div class="st">Semaine ${w}</div>`;
    TRACK_IDS.slice((w-1)*3, w*3).forEach(item => {
      const ok = done.has(item.id);
      const se = sessMap[item.id] || null;
      let detailedTxt = '';
      if (se && se.detailed_exos) {
        try {
          const dt = JSON.parse(se.detailed_exos);
          const keys = Object.keys(dt);
          if (keys.length > 0) {
            detailedTxt = '<div style="font-size:10px;color:var(--or);margin-top:2px">' + 
              keys.map(k => `• ${k}: ${dt[k].kg} ${dt[k].reps}`).join(' ') + '</div>';
          }
        } catch(e){}
      }

      // Conversion item.id ('s1a') -> 'A-S1' pour ouvrir la modale Saisir
      let letter = item.id.charAt(2).toUpperCase();
      let week = parseInt(item.id.charAt(1));
      let block = week <= 2 ? 1 : (week <= 4 ? 3 : 5);
      let sessionKey = letter + '-S' + block;

      // Style quand la séance est validée (Grisé + Opacité réduite)
      let rowStyle = ok ? "opacity:0.6; filter:grayscale(100%); transition:all 0.3s;" : "transition:all 0.3s;";
      let btnText = ok ? "✏️ Modifier" : "📝 Saisir";

      h += `<div class="tr-row" style="${rowStyle}">
        <div class="tr-chk${ok ? ' done' : ''}" onclick="tgl('${item.id}', '${sessionKey}')" id="chk-${item.id}">${ok ? '&#10003;' : ''}</div>
        <div style="flex:1">
          <div style="font-size:13px;font-weight:600">${item.n}</div>
          <div style="font-size:11px;color:var(--i3);margin-top:1px">${item.d}${se&&se.rpe?' - RPE '+se.rpe:''}${se&&se.feel?' - '+se.feel:''}</div>
          ${detailedTxt}
          ${se&&se.notes ? `<div style='font-size:11px;color:var(--i3);margin-top:2px;font-style:italic'>${se.notes}</div>` : ''}
        </div>
        <button style="background:none;border:1px solid var(--bd);border-radius:6px;padding:4px 8px;font-size:11px;color:var(--i2);cursor:pointer;flex-shrink:0" onclick="event.stopPropagation(); openRetroModal('${sessionKey}')">${btnText}</button>
      </div>`;
    });
  }
  document.getElementById('track-content').innerHTML = h;
}

function tgl(id, sessionKey){
  const c = document.getElementById('chk-'+id);
  
  if(done.has(id)){
    // Sécurité avant de décocher une séance
    if(!confirm("Voulez-vous décocher cette séance ?")) return;
    
    done.delete(id); 
    c.classList.remove('done'); 
    c.innerHTML = '';
    supa.upsert('tracking', {user_id: USER_ID, track_id: id, done: false}).catch(()=>{});
  } else {
    // Sécurité avant de cocher à vide
    const msg = "⚠️ Attention : Vous validez sans saisir vos ressentis ou charges.\n\n• Cliquez sur 'OK' pour valider quand même (Ignorer).\n• Cliquez sur 'Annuler' pour ouvrir le menu de saisie.";
    
    if(confirm(msg)) {
      done.add(id); 
      c.classList.add('done'); 
      c.innerHTML = '&#10003;';
      supa.upsert('tracking', {user_id: USER_ID, track_id: id, done: true}).catch(()=>{});
    } else {
      // Si l'utilisateur clique sur "Annuler", on ouvre la modale de saisie !
      openRetroModal(sessionKey);
      return; // On arrête là, la validation se fera via le bouton "Enregistrer" de la modale.
    }
  }
  
  localStorage.setItem('mw3-done', JSON.stringify([...done]));
  updateStats(); 
  buildTracking();
}

function updateStats(){
  const n = done.size, pct = Math.round(n/18*100);
  const points = n * 5; // 5 points par séance validée (système de gamification)
  const { current, next } = calculateLevel(points);

  ['h-done','h-week','h-bar','h-pct','tb','td-txt','tp-txt'].forEach(id => {
    const el = document.getElementById(id); if(!el) return;
    if(id==='h-done') el.textContent = n;
    else if(id==='h-week') el.textContent = Math.min(6, Math.ceil(n/3)||1);
    else if(id==='h-bar'||id==='tb') el.style.width = pct + '%';
    else if(id==='h-pct') el.textContent = pct + '% complété';
    else if(id==='td-txt') el.textContent = n + ' séance' + (n>1?'s':'') + ' validée' + (n>1?'s':'');
    else if(id==='tp-txt') el.textContent = pct + '%';
  });

  // Affichage du niveau & XP sur l'accueil
  const lvlEl = document.getElementById('user-level-badge');
  if (lvlEl) {
    lvlEl.innerHTML = `<span style="color:var(--or);font-weight:700">${current.title}</span> (${points} pts)`;
  }

  // --- MISE À JOUR "PROCHAINE SÉANCE" ---
  const nextContainer = document.getElementById('next-session-container');
  if (nextContainer) {
    let nextItem = null;
    // Cherche la première séance qui n'est pas dans "done"
    for (let i = 0; i < TRACK_IDS.length; i++) {
      if (!done.has(TRACK_IDS[i].id)) {
        nextItem = TRACK_IDS[i];
        break;
      }
    }

    if (nextItem) {
      let letter = nextItem.id.charAt(2).toUpperCase();
      let week = parseInt(nextItem.id.charAt(1));
      let block = week <= 2 ? 1 : (week <= 4 ? 3 : 5);
      let sessionKey = letter + '-S' + block;

      let day = nextItem.d.split('-')[0].trim();
      let desc = nextItem.d.split('-')[1].trim();

      // Choix des couleurs selon la séance (A = orange, B = bleu, C = vert)
      let c_bg, c_icn, c_txt;
      if (letter === 'A') { c_bg = 'var(--orl)'; c_icn = 'var(--or)'; c_txt = 'var(--ord)'; }
      else if (letter === 'B') { c_bg = 'var(--bll)'; c_icn = 'var(--bl)'; c_txt = 'var(--bld)'; }
      else { c_bg = 'var(--grl)'; c_icn = 'var(--gr)'; c_txt = 'var(--grd)'; }

      nextContainer.innerHTML = `
        <div class="st">Prochaine séance — ${day}</div>
        <div class="slc">
          <div class="slc-h" style="background:${c_bg}">
            <div class="slc-icon" style="background:${c_icn};color:#fff">${letter}</div>
            <div class="slc-info">
              <div class="slc-title" style="color:${c_txt}">Séance ${letter} · Semaine ${week}</div>
              <div class="slc-sub">${desc} · ~35 min</div>
            </div>
            <button class="slc-play" style="background:${c_icn}" onclick="startPlayer('${sessionKey}')">▶ Lancer</button>
          </div>
        </div>
      `;
    } else {
      // Si toutes les séances sont validées !
      nextContainer.innerHTML = `
        <div class="st">Phase 0 Terminée !</div>
        <div class="slc"><div class="slc-h" style="background:var(--grl);color:var(--grd);font-weight:bold;padding:15px;text-align:center;border-radius:12px">🏆 Félicitations, tu as validé toutes les séances !</div></div>
      `;
    }
  }

  // --- RENDU DU DASHBOARD STATS ---
  // On appelle le rendu Chart.js seulement si la fonction existe déjà en bas du fichier
  if (typeof renderStats === 'function') {
    renderStats();
  }
}

const TC = {fullbody:'background:var(--orl);color:var(--ord)',complex:'background:var(--bll);color:var(--bld)',emom:'background:var(--grl);color:var(--grd)',amrap:'background:var(--pul);color:var(--pud)',cible:'background:var(--aml);color:#854F0B'};
function filterWod(cat, btn){
  document.querySelectorAll('.wod-fb').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('wod-list').innerHTML = WODS.filter(w => cat==='all' || w.c===cat)
    .map(w => `<div class="wod-card"><span class="wod-tag" style="${TC[w.c]}">${w.t}</span><div class="wod-title">${w.ti}</div><div class="wod-body">${w.b}</div></div>`).join('');
}

function showToast(msg, color='#378ADD') {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = `position:fixed;bottom:90px;left:50%;transform:translateX(-50%);
    background:${color};color:#fff;padding:8px 16px;border-radius:99px;
    font-size:12px;font-weight:600;z-index:999;opacity:1;transition:opacity 1s`;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; setTimeout(()=>t.remove(),1000); }, 2500);
}

const PAGES = ['home','guide','seances','wod','snacks','technique','mobilite','alim','tracking','stats'];

function goPage(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nb').forEach(b => b.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  const idx = PAGES.indexOf(id);
  document.querySelectorAll('.nb')[idx]?.classList.add('active');
  window.scrollTo(0,0);
}

// Fonction de bascule (toggle) réparée
function tog(h){
  const b = h.nextElementSibling, c = h.querySelector('.chv');
  if (b && b.id && b.id.startsWith('fiche-') && !b.dataset.loaded) {
     b.innerHTML = ficheHTML(b.id.replace('fiche-',''));
     b.dataset.loaded = '1';
  }
  if (b) b.classList.toggle('open');
  if (c) c.style.transform = b.classList.contains('open') ? 'rotate(90deg)' : '';
}

window._sessMap = {};
window.onload = () => {
  filterWod('all', document.querySelector('.wod-fb'));
  loadFromSupabase();
};

// ── DASHBOARD & STATS (CHART.JS + CALENDRIER) ──────────────────────────────
let weightChart = null;

function renderStats() {
  const sessMap = window._sessMap || {};
  // Trier les sessions validées par date
  const sessions = Object.values(sessMap).sort((a, b) => new Date(a.completed_at) - new Date(b.completed_at));

  // 1. Compte à rebours avant Phase 1
  const restantes = Math.max(0, 18 - done.size);
  const countdownEl = document.getElementById('stat-countdown');
  if(countdownEl) countdownEl.textContent = restantes;

  // 2. Extraire les données pour le Graphique
  const labels = [];
  const tguData = [];
  const swingData = [];

  sessions.forEach((s, idx) => {
    labels.push('Séance ' + (idx+1));
    let tguW = null; let swingW = null;
    
    if(s.detailed_exos) {
      try {
        const dt = JSON.parse(s.detailed_exos);
        // Chercher les poids du TGU et du Swing dans le JSON
        let tguKey = Object.keys(dt).find(k => k.includes('Get-Up') || k.includes('TGU'));
        if(tguKey) tguW = parseFloat(dt[tguKey].kg);
        
        let swingKey = Object.keys(dt).find(k => k.includes('Swing'));
        if(swingKey) swingW = parseFloat(dt[swingKey].kg);
      } catch(e){}
    }
    tguData.push(tguW || NaN);
    swingData.push(swingW || NaN);
  });

  // 3. Dessiner le graphique
  const ctx = document.getElementById('weightChart');
  if (ctx) {
    if (weightChart) weightChart.destroy();
    weightChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          { label: 'TGU (kg)', data: tguData, borderColor: '#D85A30', backgroundColor: '#D85A30', spanGaps: true, tension: 0.3, pointRadius: 4 },
          { label: 'Swing (kg)', data: swingData, borderColor: '#378ADD', backgroundColor: '#378ADD', spanGaps: true, tension: 0.3, pointRadius: 4 }
        ]
      },
      options: { 
        responsive: true, maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  // 4. Dessiner le calendrier (30 derniers jours)
  const calGrid = document.getElementById('calendar-grid');
  if (calGrid) {
    calGrid.innerHTML = '';
    const today = new Date();
    // On génère 28 jours (4 semaines) pour faire un beau carré 7x4
    for(let i = 27; i >= 0; i--) {
      let d = new Date(today);
      d.setDate(d.getDate() - i);
      let dateStr = d.toISOString().split('T')[0];
      
      // Vérifie si une séance a été faite ce jour-là
      let hasSession = sessions.some(s => s.completed_at && s.completed_at.startsWith(dateStr));
      let color = hasSession ? 'var(--or)' : '#E2DFD9';
      
      calGrid.innerHTML += `<div style="aspect-ratio:1; background:${color}; border-radius:4px;" title="${dateStr}"></div>`;
    }
  }
}
