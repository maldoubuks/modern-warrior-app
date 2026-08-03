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
  // 🛡️ FIX DEFINITIF : on_conflict est désormais forcé dans l'URL !
  async upsert(table, body, onConflict='user_id,track_id') {
    try {
      const url = `${SUPA_URL}/rest/v1/${table}?on_conflict=${onConflict}`;
      const r = await fetch(url, {
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
const USER_ID = 'mw-qetx4mmg4-mscyji27';
let currentPhase = '0';

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
  const m = document.getElementById('retro-modal');
  if (m) m.style.display = 'none';
  
  // Rend la main au défilement et aux clics de la page
  document.body.style.overflow = '';
  document.body.style.pointerEvents = 'auto';
}

async function saveRetroSession() {
  const s = SD[pKey];
  const notes = document.getElementById('retro-notes').value;
  
  const detailed = {};
  s.exos.forEach((e, idx) => {
    const kg = document.getElementById(`retro-kg-${idx}`)?.value || '';
    const reps = document.getElementById(`retro-reps-${idx}`)?.value || '';
    if (kg || reps) detailed[e.n] = { kg, reps };
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

  // 🛡️ NOUVEAU : Sauvegarde locale absolue (Anti-Bug)
  localStorage.setItem('mw3-done', JSON.stringify([...done]));
  localStorage.setItem('mw3-sessions', JSON.stringify(window._sessMap));

  updateStats(); buildTracking();
  closeRetroModal();
  showToast('Séance enregistrée avec succès !', '#639922');
  goPage('tracking');
}

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

  // 🛡️ NOUVEAU : Sauvegarde locale absolue (Anti-Bug)
  localStorage.setItem('mw3-done', JSON.stringify([...done]));
  localStorage.setItem('mw3-sessions', JSON.stringify(window._sessMap));

  updateStats(); buildTracking();
  document.getElementById('finish').style.display = 'none';
  document.getElementById('player').style.display = 'none';
  document.body.style.overflow = '';
  showToast('Séance enregistrée avec succès !', '#639922');
  goPage('tracking');
}

const done = new Set();
async function loadFromSupabase() {
  // 🛡️ NOUVEAU : On force d'abord le chargement depuis le téléphone !
  const localDone = JSON.parse(localStorage.getItem('mw3-done') || '[]');
  localDone.forEach(id => done.add(id));
  window._sessMap = JSON.parse(localStorage.getItem('mw3-sessions') || '{}');

  const online = await supa.ping();
  if (online) {
    const rows = await supa.get('tracking', '?user_id=eq.'+USER_ID+'&done=eq.true&select=track_id');
    rows.forEach(r => done.add(r.track_id));

    const sessions = await supa.get('sessions', '?user_id=eq.'+USER_ID);
    sessions.forEach(s => {
      // On fusionne les données intelligemment
      if (!window._sessMap[s.track_id] || new Date(s.completed_at) > new Date(window._sessMap[s.track_id].completed_at)) {
         window._sessMap[s.track_id] = s;
      }
    });
    
    // Met à jour la mémoire du téléphone avec les vraies datas
    localStorage.setItem('mw3-done', JSON.stringify([...done]));
    localStorage.setItem('mw3-sessions', JSON.stringify(window._sessMap));
  } else {
    showToast('Mode hors-ligne — données locales');
  }
  updateStats(); buildTracking();
}

function changePhase(phaseId) {
  currentPhase = phaseId;
  updateStats();
  buildTracking();
}

function buildTracking(){
  const sessMap = window._sessMap || {};
  const currentData = PHASES_DATA[currentPhase].data;
  const numWeeks = PHASES_DATA[currentPhase].total / 3;
  
  let h = '';
  for(let w=1; w<=numWeeks; w++){
    h += `<div class="st">Semaine ${w}</div>`;
    currentData.slice((w-1)*3, w*3).forEach(item => {
      const ok = done.has(item.id);
      const se = sessMap[item.id] || null;
      let detailedTxt = '';
      if (se && se.detailed_exos) {
        try {
          const dt = typeof se.detailed_exos === 'string' ? JSON.parse(se.detailed_exos) : se.detailed_exos;
          const keys = Object.keys(dt);
          if (keys.length > 0) {
            detailedTxt = '<div style="font-size:10px;color:var(--or);margin-top:2px">' + 
              keys.map(k => `• ${k}: ${dt[k].kg} ${dt[k].reps}`).join(' ') + '</div>';
          }
        } catch(e){}
      }

      let rowStyle = ok ? "opacity:0.6; filter:grayscale(100%); transition:all 0.3s;" : "transition:all 0.3s;";
      let btnText = ok ? "✏️ Modifier" : "📝 Saisir";

      h += `<div class="tr-row" style="${rowStyle}">
        <div class="tr-chk${ok ? ' done' : ''}" onclick="tgl('${item.id}', '${item.id}')" id="chk-${item.id}">${ok ? '&#10003;' : ''}</div>
        <div style="flex:1" onclick="tgl('${item.id}', '${item.id}')">
          <div style="font-size:13px;font-weight:600">${item.n}</div>
          <div style="font-size:11px;color:var(--i3);margin-top:1px">${item.d}${se&&se.rpe?' - RPE '+se.rpe:''}${se&&se.feel?' - '+se.feel:''}</div>
          ${detailedTxt}
          ${se&&se.notes ? `<div style='font-size:11px;color:var(--i3);margin-top:2px;font-style:italic'>${se.notes}</div>` : ''}
        </div>
        <button style="background:none;border:1px solid var(--bd);border-radius:6px;padding:4px 8px;font-size:11px;color:var(--i2);cursor:pointer;flex-shrink:0" onclick="event.stopPropagation(); openRetroModal('${item.id}')">${btnText}</button>
      </div>`;
    });
  }
  document.getElementById('track-content').innerHTML = h;
}

async function tgl(id, sessionKey){
  if (done.has(id)){
    // Sécurité avant de décocher une séance
    if (!confirm("Voulez-vous décocher cette séance ?")) return;
    
    done.delete(id); 
    // Envoi en arrière-plan sans bloquer l'écran
    supa.upsert('tracking', { user_id: USER_ID, track_id: id, done: false }).catch(() => {});
  } else {
    // Sécurité avant de cocher à vide
    const msg = "⚠️ Attention : Vous validez sans saisir vos ressentis ou charges.\n\n• Cliquez sur 'OK' pour valider quand même (Ignorer).\n• Cliquez sur 'Annuler' pour ouvrir le menu de saisie.";
    
    if (confirm(msg)) {
      done.add(id); 
      supa.upsert('tracking', { user_id: USER_ID, track_id: id, done: true }).catch(() => {});
    } else {
      // Si l'utilisateur clique sur "Annuler", on ouvre la modale de saisie !
      openRetroModal(sessionKey || id);
      return; 
    }
  }
  
  // 1. Sauvegarde locale immédiate
  localStorage.setItem('mw3-done', JSON.stringify([...done]));
  
  // 2. Déblocage de la page au cas où
  document.body.style.overflow = '';
  document.body.style.pointerEvents = 'auto';

  // 3. Mise à jour fluide de l'affichage
  updateStats(); 
  buildTracking();
}

function updateStats(){
  // 1. Infos de la phase active
  const totalSessions = PHASES_DATA[currentPhase].total;
  const currentData = PHASES_DATA[currentPhase].data;

  // 2. Calculs des barres de progression
  let n = 0;
  currentData.forEach(item => { if (done.has(item.id)) n++; });

  const pct = Math.round(n / totalSessions * 100);
  const points = done.size * 5; // XP globale
  const { current, next } = calculateLevel(points);

  // 3. Mise à jour de l'affichage Tracking
  ['h-done','h-week','h-bar','h-pct','tb','td-txt','tp-txt'].forEach(id => {
    const el = document.getElementById(id); if(!el) return;
    if(id==='h-done') el.textContent = n;
    else if(id==='h-week') el.textContent = Math.min(totalSessions/3, Math.ceil(n/3)||1);
    else if(id==='h-bar'||id==='tb') el.style.width = pct + '%';
    else if(id==='h-pct') el.textContent = pct + '% complété';
    else if(id==='td-txt') el.textContent = n + ' séance' + (n>1?'s':'') + ' validée' + (n>1?'s':'');
    else if(id==='tp-txt') el.textContent = pct + '%';
  });

  // 4. Badge XP (Page d'accueil)
  const lvlEl = document.getElementById('user-level-badge');
  if (lvlEl) {
    lvlEl.innerHTML = `<span style="color:var(--or);font-weight:700">${current.title}</span> (${points} pts)`;
  }

  // 5. Encart "Prochaine Séance" dynamique
  const nextContainer = document.getElementById('next-session-container');
  if (nextContainer) {
    let nextItem = null;
    for (let i = 0; i < currentData.length; i++) {
      if (!done.has(currentData[i].id)) {
        nextItem = currentData[i];
        break;
      }
    }

    if (nextItem) {
      let letter = nextItem.id.charAt(2).toUpperCase();
      let week = parseInt(nextItem.id.charAt(1));
      let block = week <= 2 ? 1 : (week <= 4 ? 3 : 5);
      let sessionKey = letter + '-S' + block;

      let day = nextItem.d ? nextItem.d.split('-')[0].trim() : '';
      let desc = nextItem.d ? (nextItem.d.split('-')[1]?.trim() || nextItem.d) : '';

      let c_bg, c_icn, c_txt;
      if (letter === 'A') { c_bg = 'var(--orl)'; c_icn = 'var(--or)'; c_txt = 'var(--ord)'; }
      else if (letter === 'B') { c_bg = 'var(--bll)'; c_icn = 'var(--bl)'; c_txt = 'var(--bld)'; }
      else { c_bg = 'var(--grl)'; c_icn = 'var(--gr)'; c_txt = 'var(--grd)'; }

      nextContainer.innerHTML = `
        <div class="st">Prochaine séance — Semaine ${week}</div>
        <div class="slc">
          <div class="slc-h" style="background:${c_bg}">
            <div class="slc-icon" style="background:${c_icn};color:#fff">${letter}</div>
            <div class="slc-info">
              <div class="slc-title" style="color:${c_txt}">Séance ${letter}</div>
              <div class="slc-sub">${desc}</div>
            </div>
            <button class="slc-play" style="background:${c_icn}" onclick="startPlayer('${sessionKey}')">▶ Lancer</button>
          </div>
        </div>
      `;
    } else {
      nextContainer.innerHTML = `
        <div class="st">Phase Terminée !</div>
        <div class="slc"><div class="slc-h" style="background:var(--grl);color:var(--grd);font-weight:bold;padding:15px;text-align:center;border-radius:12px">🏆 Félicitations, tu as validé toutes les séances de cette phase !</div></div>
      `;
    }
  }

  // 6. Rendu des stats et courbes
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
  // 🛡️ DÉBLOCAGE D'URGENCE : ferme toutes les fenêtres invisibles qui bloquent les clics
  document.body.style.overflow = '';
  ['retro-modal', 'finish', 'player', 'modal-overlay'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  if (typeof filterWod === 'function') filterWod('all', document.querySelector('.wod-fb'));
  if (typeof updateContextualReminder === 'function') updateContextualReminder();
  
  updateStats();
  buildTracking();
  loadFromSupabase();
};

// ── DASHBOARD & STATS (CHART.JS + CALENDRIER) ──────────────────────────────
let weightChart = null;

function renderStats() {
  const sessMap = window._sessMap || {};
  
  const parseSafely = (dateStr) => {
    if (!dateStr) return new Date(0);
    let cleanStr = dateStr.toString().replace(' ', 'T');
    let d = new Date(cleanStr);
    return isNaN(d.getTime()) ? new Date(0) : d;
  };

  // 1. Trier les sessions
  const sessions = Object.values(sessMap).sort((a, b) => {
    return parseSafely(a.created_at || a.completed_at) - parseSafely(b.created_at || b.completed_at);
  });

  // 2. Décompte des séances restantes
  const totalPhase = PHASES_DATA[currentPhase] ? PHASES_DATA[currentPhase].total : 18;
  const currentData = PHASES_DATA[currentPhase] ? PHASES_DATA[currentPhase].data : [];
  let n = 0;
  currentData.forEach(item => { if (done.has(item.id)) n++; });
  
  const countdownEl = document.getElementById('stat-countdown');
  if(countdownEl) countdownEl.textContent = Math.max(0, totalPhase - n);

  // 3. Détecter automatiquement TOUS les exercices enregistrés
  const allExosSet = new Set();
  sessions.forEach(s => {
    if (s.detailed_exos) {
      try {
        const dt = typeof s.detailed_exos === 'string' ? JSON.parse(s.detailed_exos) : s.detailed_exos;
        Object.keys(dt).forEach(exoName => allExosSet.add(exoName));
      } catch(e){}
    }
  });

  // Remplir le menu déroulant
  const exoSelect = document.getElementById('chart-exo-select');
  let selectedExo = null;

  if (exoSelect) {
    const currentVal = exoSelect.value;
    let optionsHTML = '';
    
    if (allExosSet.size === 0) {
      optionsHTML = '<option value="">Aucun exercice enregistré</option>';
    } else {
      allExosSet.forEach(exo => {
        optionsHTML += `<option value="${exo}" ${currentVal === exo ? 'selected' : ''}>${exo}</option>`;
      });
    }
    exoSelect.innerHTML = optionsHTML;
    selectedExo = exoSelect.value || Array.from(allExosSet)[0];
  }

  // 4. Préparer les données pour l'exercice sélectionné
  const labels = [];
  const exoData = [];

  sessions.forEach((s, idx) => {
    labels.push('S' + (idx+1));
    let weight = NaN;
    
    if (s.detailed_exos && selectedExo) {
      try {
        const dt = typeof s.detailed_exos === 'string' ? JSON.parse(s.detailed_exos) : s.detailed_exos;
        if (dt[selectedExo] && dt[selectedExo].kg !== undefined && dt[selectedExo].kg !== '') {
          weight = parseFloat(dt[selectedExo].kg);
        }
      } catch(e) {}
    }
    exoData.push(weight);
  });

  // 5. Dessiner le graphique Chart.js
  const ctx = document.getElementById('weightChart');
  if (ctx) {
    if (weightChart) weightChart.destroy();
    
    const datasets = selectedExo ? [{
      label: `${selectedExo} (kg)`,
      data: exoData,
      borderColor: '#D85A30',
      backgroundColor: '#D85A30',
      spanGaps: true,
      tension: 0.3,
      pointRadius: 5
    }] : [];

    weightChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: { 
        responsive: true, 
        maintainAspectRatio: false,
        scales: { 
          y: { beginAtZero: true, suggestedMax: 24 } 
        }
      }
    });
  }

  // 6. Calendrier des 28 derniers jours
  const calGrid = document.getElementById('calendar-grid');
  if (calGrid) {
    calGrid.innerHTML = '';
    const today = new Date();
    
    const sessionDates = sessions.map(s => {
      let d = parseSafely(s.created_at || s.completed_at);
      return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
    });

    for(let i = 27; i >= 0; i--) {
      let d = new Date();
      d.setDate(today.getDate() - i);
      let dateStr = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
      
      let hasSession = sessionDates.includes(dateStr);
      let color = hasSession ? 'var(--or)' : '#E2DFD9';
      let label = hasSession ? '<span style="font-size:12px;color:#fff">&#10003;</span>' : (i === 0 ? '<span style="font-size:9px;color:#999;font-weight:700">Auj.</span>' : '');
      
      calGrid.innerHTML += `
        <div style="aspect-ratio:1; background:${color}; border-radius:4px; display:flex; align-items:center; justify-content:center; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);">
          ${label}
        </div>`;
    }
  }
}

function updateContextualReminder() {
  const el = document.getElementById('dynamic-reminder');
  if (!el) return;
  
  const h = new Date().getHours();
  let msg = ""; let color = "";

  if (h >= 5 && h < 10) {
    msg = "🌅 <b style='color:#FF9F43'>Matin :</b> As-tu bu tes 500ml d'eau ? N'oublie pas ton Warm-Up Flow (10 min) avant de partir !";
    color = "#FF9F43";
  } else if (h >= 10 && h < 14) {
    msg = "⚡ <b style='color:#54A0FF'>Midi :</b> Hydratation (1 verre avant le repas) et protéines obligatoires au menu !";
    color = "#54A0FF";
  } else if (h >= 14 && h < 18) {
    msg = "🚶‍♂️ <b style='color:#1DD1A1'>Aprèm :</b> Où en sont tes 8 000 pas ? Marche sur tes appels ou prends les escaliers !";
    color = "#1DD1A1";
  } else if (h >= 18 && h < 21) {
    msg = "🧘‍♂️ <b style='color:#A855F7'>Soir :</b> Bientôt l'heure de ta routine d'étirements et de tes 10 pages de lecture.";
    color = "#A855F7";
  } else {
    msg = "🌙 <b style='color:#C8D6E5'>Nuit :</b> Objectif coucher 22h30 max. Coupe le scrolling et prends ton livre !";
    color = "#C8D6E5";
  }
  
  el.innerHTML = msg;
  el.style.color = '#ffffff';
  el.style.borderLeft = `4px solid ${color}`;
}
