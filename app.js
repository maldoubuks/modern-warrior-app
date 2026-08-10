// app.js - Logique Modern Warrior, Supabase, Multi-Phases, Habitudes & Calendrier Dynamique

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
// ── 1. FICHE DÉTAILLÉE AÉRÉE AVEC ASSETS (GIFS/IMAGES) ──────────────────────

function ficheHTML(key){
  const s = SD[key]; 
  if(!s) return '<div style="padding:15px;color:#888;">Fiche non disponible.</div>';
  
  const blocs={}, order=[];
  s.exos.forEach(e => {
    if(!blocs[e.b]){ blocs[e.b] = []; order.push(e.b); }
    blocs[e.b].push(e);
  });

  let h = '<div style="padding:16px; background:#fafafa; border-radius:0 0 12px 12px; border-top:1px solid #eee;">';
  
  order.forEach(b => {
    h += `<div style="margin-bottom:18px;">
      <div style="font-size:11px; font-weight:800; color:var(--or); text-transform:uppercase; letter-spacing:.06em; padding-bottom:6px; border-bottom:2px solid rgba(216,90,48,0.2); margin-bottom:12px;">${b}</div>`;
      
    blocs[b].forEach(e => {
      h += `<div style="display:flex; justify-content:space-between; align-items:center; gap:12px; padding:12px 14px; margin-bottom:10px; background:#ffffff; border:1px solid #e2e2e2; border-radius:10px; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
        <div style="flex:1;">
          <div style="font-size:14px; font-weight:800; color:#1e1e1e; margin-bottom:6px;">${e.n}</div>
          <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:6px;">${e.p.map(p => {
            let bg = '#f0f0f0', clr = '#444';
            if(p.includes('KB')||p.includes('kg')) { bg = 'rgba(216,90,48,0.12)'; clr = 'var(--ord)'; }
            else if(p.includes('Repos')||p.includes('min')||p.includes('&times;')) { bg = 'rgba(55,140,221,0.12)'; clr = '#1d6fa5'; }
            return `<span style="font-size:10.5px; font-weight:700; background:${bg}; color:${clr}; padding:3px 8px; border-radius:4px;">${p}</span>`;
          }).join('')}</div>
          ${e.tip ? `<div style="font-size:11px; color:#555; font-style:italic; border-left:3px solid var(--or); padding-left:8px; margin-top:6px; line-height:1.4;">${e.tip}</div>` : ''}
        </div>
        ${e.img ? `<img src="${e.img}" style="width:75px; height:75px; object-fit:contain; border-radius:8px; background:#181818; border:1px solid #333; padding:4px; flex-shrink:0;">` : ''}
      </div>`;
    });
    
    h += '</div>';
  });
  
  h += '</div>';
  return h;
}

// ── PLAYER EN DIRECT ───────────────────────────────────────────────────────
let pKey='', pIdx=0, tInterval=null, tSec=0, tRunning=false, rInterval=null, rSec=0, pStart=null;
let selRpeVal=0, selFeelVal='', detailedExos={};

function startPlayer(key){
  const s = SD[key]; if(!s) return;
  pKey = key; pIdx = 0; pStart = new Date(); detailedExos = {};
  
  const playerEl = document.getElementById('player');
  if (playerEl) {
    playerEl.style.display = 'block';
    playerEl.style.pointerEvents = 'auto';
    playerEl.classList.add('active');
  }
  
  document.body.style.overflow = 'hidden';
  resetTimer(); stopRest();
  renderPlayer();
  window.scrollTo(0,0);
}

function closePlayer(){
  if(tRunning) clearInterval(tInterval);
  clearInterval(rInterval);
  
  const playerEl = document.getElementById('player');
  if (playerEl) {
    playerEl.style.display = 'none';
    playerEl.style.pointerEvents = 'none';
    playerEl.classList.remove('active');
  }
  
  document.body.style.overflow = '';
}

function renderPlayer(){
  const s = SD[pKey], exos = s.exos, e = exos[pIdx], total = exos.length;
  document.getElementById('p-nav-title').innerHTML = s.title;
  document.getElementById('p-nav-prog').textContent = (pIdx+1) + '/' + total;
  document.getElementById('p-topbar').style.width = (pIdx/total*100) + '%';
  document.getElementById('p-bloc-name').innerHTML = e.b;
  document.getElementById('p-exo-num').textContent = 'Exercice ' + (pIdx+1) + ' sur ' + total;
  
  let imgHTML = e.img ? `<div style="text-align:center; margin:12px 0;"><img src="${e.img}" style="max-height:180px; max-width:100%; object-fit:contain; border-radius:10px; background:#181818; border:1px solid #333; padding:6px;"></div>` : '';
  document.getElementById('p-exo-name').innerHTML = e.n + imgHTML;

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

let currentRetroTrackId = null;

// ── SAISIE A POSTERIORI ────────────────────────────────────────────────────
function openRetroModal(key, targetTrackId) {
  const s = SD[key]; 
  if (!s) return;
  
  pKey = key;
  currentRetroTrackId = targetTrackId || s.trackId || key;
  
  document.getElementById('retro-title').textContent = s.title;
  
  let h = '';
  s.exos.forEach((e, idx) => {
    h += `<div style="background:#1E1E1E;border:1px solid #333;border-radius:8px;padding:10px;margin-bottom:8px">
      <div style="font-size:12px;font-weight:700;color:#fff;margin-bottom:4px">${e.n}</div>
      <div style="font-size:10px;color:#888;margin-bottom:6px">${e.p.join(' · ')}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <input type="text" id="retro-kg-${idx}" placeholder="Poids (ex: 12 kg)" style="flex:1;min-width:110px;background:#2A2A2A;border:1px solid #444;border-radius:6px;padding:8px;color:#fff;font-size:12px">
        <input type="text" id="retro-reps-${idx}" placeholder="Reps / Notes" style="flex:1;min-width:110px;background:#2A2A2A;border:1px solid #444;border-radius:6px;padding:8px;color:#fff;font-size:12px">
      </div>
    </div>`;
  });
  document.getElementById('retro-exos-list').innerHTML = h;

  let metaHTML = `
    <div style="margin:12px 0">
      <div style="font-size:11px;color:#888;font-weight:700;margin-bottom:6px">Durée de la séance (minutes)</div>
      <input type="number" id="retro-duration" placeholder="ex: 35" value="35" style="width:100%;background:#2A2A2A;border:1px solid #444;border-radius:6px;padding:8px;color:#fff;font-size:13px;outline:none;box-sizing:border-box;">
    </div>
    <div style="margin:12px 0">
      <div style="font-size:11px;color:#888;font-weight:700;margin-bottom:6px">Difficulté ressentie (RPE 1 à 10)</div>
      <div style="display:grid;grid-template-columns:repeat(5, 1fr);gap:6px" id="retro-rpe-grid">
        ${[1,2,3,4,5,6,7,8,9,10].map(v => `<button type="button" class="rpe-btn retro-rpe-btn" onclick="selRpe(this,${v})">${v}</button>`).join('')}
      </div>
    </div>
  `;
  
  const notesEl = document.getElementById('retro-notes');
  let metaContainer = document.getElementById('retro-meta-container');
  if (!metaContainer) {
    metaContainer = document.createElement('div');
    metaContainer.id = 'retro-meta-container';
    notesEl.parentNode.insertBefore(metaContainer, notesEl);
  }
  metaContainer.innerHTML = metaHTML;

  notesEl.value = '';
  selRpeVal = null;
  selFeelVal = '';

  const m = document.getElementById('retro-modal');
  if (m) {
    m.style.display = 'block';
    m.style.pointerEvents = 'auto';
    m.classList.add('active');
  }
}

function closeRetroModal() {
  const m = document.getElementById('retro-modal');
  if (m) {
    m.style.display = 'none';
    m.style.pointerEvents = 'none';
    m.classList.remove('active');
  }
  document.body.style.overflow = '';
  document.body.style.pointerEvents = 'auto';
}

async function saveRetroSession() {
  if (!pKey) return;
  const s = SD[pKey]; 
  if (!s) return;

  closeRetroModal();

  const trackId = currentRetroTrackId || s.trackId || pKey;
  const detailedExos = {};
  const notes = document.getElementById('retro-notes')?.value || '';
  const duration = parseInt(document.getElementById('retro-duration')?.value) || 35;

  if (s.exos) {
    s.exos.forEach((e, idx) => {
      const kgEl = document.getElementById(`retro-kg-${idx}`);
      const repsEl = document.getElementById(`retro-reps-${idx}`);
      const kg = kgEl ? kgEl.value.trim() : '';
      const reps = repsEl ? repsEl.value.trim() : '';
      if (kg || reps) detailedExos[e.n] = { kg, reps };
    });
  }

  const payload = {
    user_id: USER_ID,
    session_key: pKey,
    session_title: s.title || pKey,
    track_id: trackId,
    duration_min: duration,
    detailed_exos: JSON.stringify(detailedExos),
    notes: notes,
    rpe: (typeof selRpeVal !== 'undefined' && selRpeVal > 0) ? selRpeVal : null,
    feel: selFeelVal || '',
    created_at: new Date().toISOString()
  };

  done.add(trackId);
  if (!window._sessMap) window._sessMap = {};
  window._sessMap[trackId] = { ...payload, completed_at: payload.created_at };

  localStorage.setItem('mw3-done', JSON.stringify([...done]));
  localStorage.setItem('mw3-sessions', JSON.stringify(window._sessMap));

  if (typeof showToast === 'function') showToast('Séance enregistrée avec succès !', '#639922');

  updateStats();
  buildTracking();

  try {
    await supa.upsert('sessions', payload, 'user_id,session_key');
    await supa.upsert('tracking', { user_id: USER_ID, track_id: trackId, done: true }, 'user_id,track_id');
  } catch (err) {
    console.warn("Mise à jour Supabase en arrière-plan :", err);
  }
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
  const localDone = JSON.parse(localStorage.getItem('mw3-done') || '[]');
  localDone.forEach(id => done.add(id));
  window._sessMap = JSON.parse(localStorage.getItem('mw3-sessions') || '{}');

  const online = await supa.ping();
  if (online) {
    const rows = await supa.get('tracking', '?user_id=eq.'+USER_ID+'&done=eq.true&select=track_id');
    rows.forEach(r => done.add(r.track_id));

    const sessions = await supa.get('sessions', '?user_id=eq.'+USER_ID);
    sessions.forEach(s => {
      const key = s.track_id || s.session_key;
      if (key) {
        window._sessMap[key] = s;
      }
    });

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
  renderCalendarGrid();
  renderSeances();
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

      let letter = item.id.slice(-1).toUpperCase();
      let block = w <= 2 ? 1 : (w <= 4 ? 3 : 5);

      let sessionKey;
      if (currentPhase === '0') {
        sessionKey = `${letter}-S${block}`;
      } else if (currentPhase === '1') {
        sessionKey = SD[`${letter}-F${w}`] ? `${letter}-F${w}` : `${letter}-F${block}`;
      } else {
        sessionKey = SD[`${letter}-BK${w}`] ? `${letter}-BK${w}` : `${letter}-BK${Math.min(w, 2)}`;
      }

      let detailedTxt = '';
      if (se && se.detailed_exos) {
        try {
          const dt = typeof se.detailed_exos === 'string' ? JSON.parse(se.detailed_exos) : se.detailed_exos;
          const keys = Object.keys(dt);
          if (keys.length > 0) {
            detailedTxt = '<div style="font-size:10px;color:var(--or);margin-top:2px">' + 
              keys.map(k => `• ${k}: ${dt[k].kg || ''} ${dt[k].reps || ''}`).join(' ') + '</div>';
          }
        } catch(e){}
      }

      let rowStyle = ok ? "opacity:0.6; filter:grayscale(100%); transition:all 0.3s;" : "transition:all 0.3s;";
      let btnText = ok ? "✏️ Modifier" : "📝 Saisir";

      h += `<div class="tr-row" style="${rowStyle}">
        <div class="tr-chk${ok ? ' done' : ''}" onclick="tgl('${item.id}', '${sessionKey}')" id="chk-${item.id}">${ok ? '&#10003;' : ''}</div>
        <div style="flex:1" onclick="tgl('${item.id}', '${sessionKey}')">
          <div style="font-size:13px;font-weight:600">${item.n}</div>
          <div style="font-size:11px;color:var(--i3);margin-top:1px">${item.d}${se&&se.rpe?' - RPE '+se.rpe:''}${se&&se.feel?' - '+se.feel:''}</div>
          ${detailedTxt}
          ${se&&se.notes ? `<div style='font-size:11px;color:var(--i3);margin-top:2px;font-style:italic'>${se.notes}</div>` : ''}
        </div>
        <button style="background:none;border:1px solid var(--bd);border-radius:6px;padding:6px 10px;font-size:11px;color:var(--i2);cursor:pointer;flex-shrink:0" onclick="event.stopPropagation(); openRetroModal('${sessionKey}', '${item.id}')">${btnText}</button>
      </div>`;
    });
  }
  document.getElementById('track-content').innerHTML = h;
}

async function tgl(id, sessionKey){
  if (done.has(id)){
    if (!confirm("Voulez-vous décocher cette séance ?")) return;
    done.delete(id); 
    supa.upsert('tracking', { user_id: USER_ID, track_id: id, done: false }).catch(() => {});
  } else {
    const msg = "⚠️ Attention : Vous validez sans saisir vos ressentis ou charges.\n\n• Cliquez sur 'OK' pour valider quand même (Ignorer).\n• Cliquez sur 'Annuler' pour ouvrir le menu de saisie.";
    if (confirm(msg)) {
      done.add(id); 
      supa.upsert('tracking', { user_id: USER_ID, track_id: id, done: true }).catch(() => {});
    } else {
      openRetroModal(sessionKey || id, id);
      return; 
    }
  }

  localStorage.setItem('mw3-done', JSON.stringify([...done]));
  document.body.style.overflow = '';
  document.body.style.pointerEvents = 'auto';

  updateStats(); 
  buildTracking();
}

function updateStats(){
  const totalSessions = PHASES_DATA[currentPhase].total;
  const currentData = PHASES_DATA[currentPhase].data;

  let n = 0;
  currentData.forEach(item => { if (done.has(item.id)) n++; });

  const pct = Math.round(n / totalSessions * 100);
  const points = done.size * 5;
  const { current, next } = calculateLevel(points);

  ['h-done','h-week','h-bar','h-pct','tb','td-txt','tp-txt'].forEach(id => {
    const el = document.getElementById(id); if(!el) return;
    if(id==='h-done') el.textContent = n;
    else if(id==='h-week') el.textContent = Math.min(totalSessions/3, Math.ceil(n/3)||1);
    else if(id==='h-bar'||id==='tb') el.style.width = pct + '%';
    else if(id==='h-pct') el.textContent = pct + '% complété';
    else if(id==='td-txt') el.textContent = n + ' séance' + (n>1?'s':'') + ' validée' + (n>1?'s':'');
    else if(id==='tp-txt') el.textContent = pct + '%';
  });

  const lvlEl = document.getElementById('user-level-badge');
  if (lvlEl) {
    lvlEl.innerHTML = `<span style="color:var(--or);font-weight:700">${current.title}</span> (${points} pts)`;
  }

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
      let letter = nextItem.id.charAt(2) ? nextItem.id.charAt(2).toUpperCase() : 'A';
      let week = parseInt(nextItem.id.charAt(1)) || 1;
      let block = week <= 2 ? 1 : (week <= 4 ? 3 : 5);

      let sessionKey;
      if (currentPhase === '0') sessionKey = `${letter}-S${block}`;
      else if (currentPhase === '1') sessionKey = SD[`${letter}-F${week}`] ? `${letter}-F${week}` : `${letter}-F${block}`;
      else sessionKey = SD[`${letter}-BK${week}`] ? `${letter}-BK${week}` : `${letter}-BK${Math.min(week, 2)}`;

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
              <div class="slc-title" style="color:${c_txt}">${PHASES_DATA[currentPhase].title} &middot; Séance ${letter}</div>
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

const PAGES = ['home','guide','seances','wod','snacks','technique','mobilite','alim','tracking','stats','habits','calendar'];

function goPage(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nb').forEach(b => b.classList.remove('active'));

  const targetPage = document.getElementById('page-' + id);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  const targetBtn = document.querySelector(`.nb[onclick*="'${id}'"]`);
  if (targetBtn) {
    targetBtn.classList.add('active');
  }

  if (id === 'seances') {
    renderSeances();
  }

  window.scrollTo(0, 0);
}

function tog(h){
  const b = h.nextElementSibling, c = h.querySelector('.chv');
  if (b && b.id && b.id.startsWith('fiche-') && !b.dataset.loaded) {
     b.innerHTML = ficheHTML(b.id.replace('fiche-',''));
     b.dataset.loaded = '1';
  }
  if (b) {
    if (b.style.display === 'none' || !b.style.display) {
      b.style.display = 'block';
      if (c) c.style.transform = 'rotate(90deg)';
    } else {
      b.style.display = 'none';
      if (c) c.style.transform = 'rotate(0deg)';
    }
  }
}

window._sessMap = {};
window.onload = () => {
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
  initHabitsUI();
  renderCalendarGrid();
};

// ── DASHBOARD & STATS ──────────────────────────────────────────────────────
let weightChart = null;

function getKeyMovements(detailedExos) {
  if (!detailedExos) return [];
  try {
    const dt = typeof detailedExos === 'string' ? JSON.parse(detailedExos) : detailedExos;
    if (!dt || typeof dt !== 'object') return [];
    const ignoreList = ['cars', 'cat-cow', 'spiderman', 'prying', 'row', 'push-up', 'carry', 'stretch'];
    return Object.keys(dt)
      .filter(exoName => !ignoreList.some(bad => exoName.toLowerCase().includes(bad)))
      .map(exoName => {
        const info = dt[exoName];
        const kg = (info && info.kg) ? info.kg : '';
        return `${exoName}${kg ? ' (' + kg + 'kg)' : ''}`;
      });
  } catch(e) { return []; }
}

function showCalDetail(key) {
  const sessMap = window._sessMap || {};
  const s = sessMap[key];
  if (!s) return;
  const keyExos = getKeyMovements(s.detailed_exos).join(' · ');
  const dur = s.duration_min ? `${s.duration_min} min` : '35 min';
  const rpeTxt = s.rpe ? `RPE ${s.rpe}/10` : 'RPE non défini';
  const notesTxt = s.notes || 'Aucune note';
  const title = s.session_title || s.session_key || key;
  alert(`📅 ${title}\n⏱️ Durée : ${dur} | 🔥 ${rpeTxt}\n⚡ Mouvements clés : ${keyExos || 'Général'}\n📝 Notes : ${notesTxt}`);
}

function renderStats() {
  const sessMap = window._sessMap || {};

  const parseSafely = (dateStr) => {
    if (!dateStr) return new Date(0);
    let d = new Date(dateStr.toString().replace(' ', 'T'));
    return isNaN(d.getTime()) ? new Date(0) : d;
  };

  const sessions = Object.values(sessMap).sort((a, b) => {
    return parseSafely(a.created_at || a.completed_at) - parseSafely(b.created_at || b.completed_at);
  });

  let totalMinutes = 0;
  let totalRpeSum = 0;
  let rpeCount = 0;

  sessions.forEach(s => {
    if (s.duration_min) totalMinutes += parseInt(s.duration_min);
    else totalMinutes += 35;

    if (s.rpe && parseInt(s.rpe) > 0) {
      totalRpeSum += parseInt(s.rpe);
      rpeCount++;
    }
  });

  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const kpiTimeEl = document.getElementById('kpi-total-time');
  if (kpiTimeEl) kpiTimeEl.textContent = `${hours}h ${String(mins).padStart(2,'0')}m`;

  const avgRpe = rpeCount > 0 ? (totalRpeSum / rpeCount).toFixed(1) : '0';
  const kpiRpeEl = document.getElementById('kpi-avg-rpe');
  if (kpiRpeEl) kpiRpeEl.textContent = `${avgRpe} / 10`;

  const totalPhase = PHASES_DATA[currentPhase] ? PHASES_DATA[currentPhase].total : 18;
  const currentData = PHASES_DATA[currentPhase] ? PHASES_DATA[currentPhase].data : [];
  let n = 0;
  currentData.forEach(item => { if (done.has(item.id)) n++; });
  const countdownEl = document.getElementById('stat-countdown');
  if (countdownEl) countdownEl.textContent = Math.max(0, totalPhase - n);

  const allExosSet = new Set();
  sessions.forEach(s => {
    if (s.detailed_exos) {
      try {
        const dt = typeof s.detailed_exos === 'string' ? JSON.parse(s.detailed_exos) : s.detailed_exos;
        if (dt && typeof dt === 'object') {
          Object.keys(dt).forEach(exoName => allExosSet.add(exoName));
        }
      } catch(e){}
    }
  });

  const exoSelect = document.getElementById('chart-exo-select');
  if (exoSelect) {
    const currentVal = exoSelect.value;
    let optionsHTML = '<option value="RPE_MODE">🔥 Évolution de la Difficulté (RPE)</option>';
    allExosSet.forEach(exo => {
      optionsHTML += `<option value="${exo}" ${currentVal === exo ? 'selected' : ''}>Poids : ${exo}</option>`;
    });
    exoSelect.innerHTML = optionsHTML;
  }

  const selectedOption = exoSelect ? (exoSelect.value || 'RPE_MODE') : 'RPE_MODE';

  const labels = [];
  const chartData = [];

  sessions.forEach((s, idx) => {
    labels.push(s.session_key || ('S' + (idx+1)));
    if (selectedOption === 'RPE_MODE') {
      chartData.push(s.rpe || NaN);
    } else {
      let weight = NaN;
      if (s.detailed_exos) {
        try {
          const dt = typeof s.detailed_exos === 'string' ? JSON.parse(s.detailed_exos) : s.detailed_exos;
          if (dt[selectedOption] && dt[selectedOption].kg) {
            weight = parseFloat(dt[selectedOption].kg);
          }
        } catch(e) {}
      }
      chartData.push(weight);
    }
  });

  const ctx = document.getElementById('weightChart');
  if (ctx) {
    if (weightChart) weightChart.destroy();
    const isRPE = selectedOption === 'RPE_MODE';
    weightChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: isRPE ? 'Difficulté RPE (1-10)' : `${selectedOption} (kg)`,
          data: chartData,
          borderColor: isRPE ? '#E74C3C' : '#D85A30',
          backgroundColor: isRPE ? '#E74C3C' : '#D85A30',
          spanGaps: true,
          tension: 0.3,
          pointRadius: 6
        }]
      },
      options: { 
        responsive: true, 
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true, suggestedMax: isRPE ? 10 : 24 } }
      }
    });
  }

  const calGrid = document.getElementById('calendar-grid');
  if (calGrid) {
    calGrid.innerHTML = '';
    const today = new Date();

    for(let i = 27; i >= 0; i--) {
      let d = new Date();
      d.setDate(today.getDate() - i);
      let dateStr = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');

      const sessionForDay = sessions.find(s => {
        let sd = parseSafely(s.created_at || s.completed_at);
        let sDateStr = sd.getFullYear() + '-' + String(sd.getMonth()+1).padStart(2,'0') + '-' + String(sd.getDate()).padStart(2,'0');
        return sDateStr === dateStr;
      });

      let hasSession = !!sessionForDay;
      let isToday = (i === 0);

      let bgColor = hasSession ? 'var(--or)' : '#FFFFFF';
      let borderColor = hasSession ? 'var(--or)' : (isToday ? 'var(--or)' : '#444444');
      let borderWidth = isToday && !hasSession ? '2px' : '1px';
      let textColor = hasSession ? '#FFFFFF' : (isToday ? 'var(--or)' : '#888888');
      let cursor = hasSession ? 'pointer' : 'default';

      let label = hasSession ? '<span style="font-size:14px;font-weight:bold;color:#fff">&#10003;</span>' : (isToday ? '<span style="font-size:9px;font-weight:800;color:var(--or)">Auj.</span>' : '');

      let onClickAction = '';
      if (hasSession) {
        let sKey = sessionForDay.track_id || sessionForDay.session_key || '';
        onClickAction = `onclick="showCalDetail('${sKey}')"`;
      }

      calGrid.innerHTML += `
        <div ${onClickAction} style="aspect-ratio:1; background:${bgColor}; border:${borderWidth} solid ${borderColor}; border-radius:8px; display:flex; align-items:center; justify-content:center; color:${textColor}; cursor:${cursor}; transition:all 0.2s;">
          ${label}
        </div>`;
    }
  }

  const recentList = document.getElementById('stats-recent-list');
  if (recentList) {
    if (sessions.length === 0) {
      recentList.innerHTML = '<div style="font-size:12px;color:var(--i3);text-align:center;padding:20px;">Aucune séance enregistrée pour le moment.</div>';
    } else {
      let html = '';
      sessions.slice(-5).reverse().forEach(s => {
        const keyExos = getKeyMovements(s.detailed_exos).join(' · ');
        const dur = s.duration_min ? `${s.duration_min} min` : '35 min';
        const rpeBadge = s.rpe ? `<span style="background:#E74C3C;color:#fff;padding:2px 6px;border-radius:4px;font-size:10px;font-weight:700;">RPE ${s.rpe}</span>` : '';

        html += `
          <div class="sc" style="margin-bottom:10px; padding:12px 16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <div style="font-size:14px; font-weight:700; color:#fff;">${s.session_title || s.session_key}</div>
              <div>${rpeBadge}</div>
            </div>
            <div style="font-size:11px; color:var(--i3); margin-bottom:6px;">⏱️ ${dur} ${keyExos ? '· ⚡ ' + keyExos : ''}</div>
            ${s.notes ? `<div style="font-size:11px; color:#aaa; font-style:italic; background:rgba(255,255,255,0.05); padding:6px 10px; border-radius:6px;">"${s.notes}"</div>` : ''}
          </div>
        `;
      });
      recentList.innerHTML = html;
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

// ── TRACKING DES HABITUDES & SANTÉ ────────────────────────────────────────

const HABITS_LIST = [
  { id: 'h_sleep8', label: '😴 Sommeil ≥ 8h' },
  { id: 'h_bed2230', label: '🌙 Coucher 22h30 max' },
  { id: 'h_flow', label: '🧘‍♂️ Warm-Up / Flow de Mobilité' },
  { id: 'h_workout', label: '🏋️‍♂️ Séance Muscu / Renfo validée' },
  { id: 'h_cardio', label: '🚲 Vélo / Marche Active / Cardio' },
  { id: 'h_vacuum', label: '💨 Stomach Vacuum à jeun' },
  { id: 'h_rule1', label: '🛑 Règle 1 — Sucres parasites zéro (bonbons, gâteaux)' },
  { id: 'h_rule2', label: '💧 Règle 2 — Hydratation 2,5-3L (500ml au réveil + verre/repas)' },
  { id: 'h_rule3', label: '🥩 Règle 3 — Protéine à chaque repas' },
  { id: 'h_homefood', label: '🥗 Repas fait maison' },
  { id: 'h_read', label: '📖 Lecture 20 min / 10 pages' },
  { id: 'h_screen', label: '📱 Temps écran < 1h & Réseaux < 1h' }
];

const SUPPS_LIST = [
  { id: 's_mag', label: '💊 Magnésium (Aroma-Zone - Bisglycinate)' },
  { id: 's_crea', label: '⚡ Créatine Monohydrate (3-5g)' },
  { id: 's_zinc', label: '🛡️ Zinc' },
  { id: 's_spir', label: '🌿 Spiruline' }
];

let selectedHabitDate = new Date().toISOString().split('T')[0];

function initHabitsUI() {
  const dateInput = document.getElementById('habit-date-input');
  if (dateInput) dateInput.value = selectedHabitDate;

  const hContainer = document.getElementById('habits-checklist-container');
  if (hContainer) {
    hContainer.innerHTML = HABITS_LIST.map(h => `
      <div style="display:flex; align-items:center; justify-content:space-between; padding:10px 0; border-bottom:1px solid rgba(0,0,0,0.08);">
        <span style="font-size:13px; font-weight:700; color:#1e1e1e;">${h.label}</span>
        <input type="checkbox" id="${h.id}" onchange="saveCurrentHabits()" style="width:20px; height:20px; accent-color:var(--or); cursor:pointer;">
      </div>
    `).join('');
  }

  const sContainer = document.getElementById('supps-checklist-container');
  if (sContainer) {
    sContainer.innerHTML = SUPPS_LIST.map(s => `
      <div style="display:flex; align-items:center; justify-content:space-between; padding:10px 0; border-bottom:1px solid rgba(0,0,0,0.08);">
        <span style="font-size:13px; font-weight:700; color:#1e1e1e;">${s.label}</span>
        <input type="checkbox" id="${s.id}" onchange="saveCurrentHabits()" style="width:20px; height:20px; accent-color:var(--gr); cursor:pointer;">
      </div>
    `).join('');
  }

  loadHabitsForDate(selectedHabitDate);
}

function loadHabitsForDate(dateStr) {
  selectedHabitDate = dateStr;
  const store = JSON.parse(localStorage.getItem('mw_habits_store') || '{}');
  const dayData = store[dateStr] || { metrics: {}, habits: {} };

  ['m-sleep', 'm-hr', 'm-steps', 'm-dur', 'm-cal'].forEach(mId => {
    const el = document.getElementById(mId);
    if (el) el.value = dayData.metrics[mId] || '';
  });

  [...HABITS_LIST, ...SUPPS_LIST].forEach(item => {
    const el = document.getElementById(item.id);
    if (el) el.checked = !!dayData.habits[item.id];
  });

  updateHabitScore();
}

function saveCurrentHabits() {
  const store = JSON.parse(localStorage.getItem('mw_habits_store') || '{}');
  const dayData = { metrics: {}, habits: {} };

  ['m-sleep', 'm-hr', 'm-steps', 'm-dur', 'm-cal'].forEach(mId => {
    const el = document.getElementById(mId);
    if (el) dayData.metrics[mId] = el.value;
  });

  [...HABITS_LIST, ...SUPPS_LIST].forEach(item => {
    const el = document.getElementById(item.id);
    if (el) dayData.habits[item.id] = el.checked;
  });

  store[selectedHabitDate] = dayData;
  localStorage.setItem('mw_habits_store', JSON.stringify(store));

  updateHabitScore();
}

function updateHabitScore() {
  let total = HABITS_LIST.length + SUPPS_LIST.length;
  let count = 0;

  [...HABITS_LIST, ...SUPPS_LIST].forEach(item => {
    const el = document.getElementById(item.id);
    if (el && el.checked) count++;
  });

  const pct = Math.round((count / total) * 100);
  const pctEl = document.getElementById('habit-score-pct');
  const tagEl = document.getElementById('habit-bilan-tag');
  const countEl = document.getElementById('habit-score-count');

  if (pctEl) pctEl.textContent = `${pct}%`;
  if (countEl) countEl.textContent = `${count} / ${total} habitudes validées`;

  if (tagEl) {
    if (pct === 100) { tagEl.textContent = "PARFAIT ✨ (Légende MW)"; tagEl.style.color = "var(--or)"; }
    else if (pct >= 80) { tagEl.textContent = "EXCELLENT 🔥"; tagEl.style.color = "var(--gr)"; }
    else if (pct >= 60) { tagEl.textContent = "TRÈS BON 💪"; tagEl.style.color = "var(--bl)"; }
    else if (pct >= 40) { tagEl.textContent = "EN PROGRÈS ⚡"; tagEl.style.color = "#FF9F43"; }
    else { tagEl.textContent = "FOCUS WARRIOR 🎯"; tagEl.style.color = "#E74C3C"; }
  }
}

// ── INTITULÉS DYNAMIQUES SELON LA PHASE ET LA SEMAINE ───────────────────────

function getSessionTitleForDay(dayOfWeek, weekNum, phase) {
  if (dayOfWeek === 1) { // LUNDI
    if (phase === '0') {
      if (weekNum <= 2) return 'Séance A - Deadstop Swing + TGU';
      if (weekNum <= 4) return 'Séance A - 1H Swing + TGU';
      return 'Séance A - Snatch + TGU';
    } else if (phase === '1') {
      return `Séance A${weekNum} - Snatch, Push-up & 1H Swing`;
    } else if (phase === '2') {
      return `Bankai A${weekNum} - Upper/Lower Supersets`;
    }
  } 
  else if (dayOfWeek === 3) { // MERCREDI
    if (phase === '0') {
      if (weekNum <= 2) return 'Séance B - Dead Clean & Push Press';
      if (weekNum <= 4) return 'Séance B - Clean & Push Press';
      return 'Séance B - Clean & Press strict';
    } else if (phase === '1') {
      return `Séance B${weekNum} - Heavy Clean & Press`;
    } else if (phase === '2') {
      return `Bankai B${weekNum} - Push/Pull & Double Squat`;
    }
  } 
  else if (dayOfWeek === 5) { // VENDREDI
    if (phase === '0') {
      if (weekNum <= 2) return 'Séance C - 2H Swing + TGU';
      if (weekNum <= 4) return 'Séance C - Complexe Ulysse';
      return 'Séance C - Complexe Atlas';
    } else if (phase === '1') {
      if (weekNum <= 2) return 'Séance C - Complexes Achille & Persée';
      if (weekNum <= 4) return 'Séance C - Complexes Ragnar & Arès';
      return 'Séance C - Double Complexes';
    } else if (phase === '2') {
      if (weekNum <= 2) return (weekNum % 2 === 0) ? 'Bankai C - METCON Benchmark' : 'Bankai C - AMRAP Ichigo & Renji';
      if (weekNum === 3) return 'Bankai C3 - AMRAP Aizen & GrimmJow';
      if (weekNum === 4) return 'Bankai C4 - METCON Single KB';
      return (weekNum % 2 === 0) ? 'Bankai C - METCON Benchmark' : 'Bankai C - AMRAPs Complexes';
    }
  }

  return 'Repos';
}

// ── RENDU DU CALENDRIER DYNAMIQUE (Toutes Phases) ───────────────────────────

let calCurrentDate = new Date();

function changeCalMonth(dir) {
  calCurrentDate.setMonth(calCurrentDate.getMonth() + dir);
  renderCalendarGrid();
}

function renderCalendarGrid() {
  const grid = document.getElementById('month-calendar-grid');
  const title = document.getElementById('cal-month-title');
  if (!grid || !title) return;

  const y = calCurrentDate.getFullYear();
  const m = calCurrentDate.getMonth();

  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  title.textContent = `${monthNames[m]} ${y}`;

  grid.innerHTML = '';

  const firstDay = new Date(y, m, 1).getDay();
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(y, m + 1, 0).getDate();

  const scheduleStore = JSON.parse(localStorage.getItem('mw_schedule_store') || '{}');
  const todayStr = new Date().toISOString().split('T')[0];

  for (let i = 0; i < adjustedFirstDay; i++) {
    grid.innerHTML += `<div style="aspect-ratio:1; background:rgba(0,0,0,0.02); border-radius:6px;"></div>`;
  }

  let currentWeekNum = 1;

  for (let day = 1; day <= daysInMonth; day++) {
    const dStr = `${y}-${String(m+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const isToday = (dStr === todayStr);
    const dateObj = new Date(y, m, day);
    const dayOfWeek = dateObj.getDay();

    let scheduledTask = scheduleStore[dStr] || '';

    if (!scheduledTask || scheduledTask === 'Séance A' || scheduledTask === 'Séance B' || scheduledTask === 'Séance C') {
      scheduledTask = getSessionTitleForDay(dayOfWeek, currentWeekNum, currentPhase);
    }

    const isWorkout = scheduledTask.includes('Séance') || scheduledTask.includes('Complexe') || scheduledTask.includes('Bankai') || scheduledTask.includes('WOD');
    const bgColor = isWorkout ? 'rgba(216,90,48,0.12)' : '#ffffff';
    const borderColor = isToday ? 'var(--or)' : (isWorkout ? 'var(--or)' : '#e0e0e0');

    let weekBadgeHTML = '';
    if (dayOfWeek === 1 || day === 1) {
      weekBadgeHTML = `<span style="font-size:8px; font-weight:800; background:var(--or); color:#fff; padding:1px 4px; border-radius:3px; margin-left:auto;">S${currentWeekNum}</span>`;
    }

    grid.innerHTML += `
      <div onclick="editCalendarDay('${dStr}', '${scheduledTask.replace(/'/g, "\\'")}')" 
           style="min-height:75px; background:${bgColor}; border:1.5px solid ${borderColor}; border-radius:8px; padding:6px; display:flex; flex-direction:column; justify-content:space-between; cursor:pointer; text-align:left;">
        <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
          <span style="font-size:12px; font-weight:800; color:${isToday ? 'var(--or)' : '#1e1e1e'};">${day}</span>
          ${weekBadgeHTML}
        </div>
        <div style="font-size:9.5px; font-weight:700; color:${isWorkout ? '#c0392b' : '#7f8c8d'}; line-height:1.2; margin-top:4px; word-break:break-word;">
          ${scheduledTask}
        </div>
      </div>
    `;

    if (dayOfWeek === 0) {
      currentWeekNum++;
    }
  }
}

function editCalendarDay(dStr, currentTask) {
  const newTask = prompt(`Ajuster le planning du ${dStr} :\n(Ex: Séance A, Séance B, Séance C, Repos, WOD, Snack...)`, currentTask);
  if (newTask !== null) {
    const store = JSON.parse(localStorage.getItem('mw_schedule_store') || '{}');
    store[dStr] = newTask;
    localStorage.setItem('mw_schedule_store', JSON.stringify(store));
    renderCalendarGrid();
  }
}

function renderSeances() {
  const container = document.getElementById('seances-list-container');
  const selectEl = document.getElementById('seances-phase-select');
  
  // 🟢 Sélectionne automatiquement la phase en cours
  if (selectEl) selectEl.value = currentPhase;
  if (!container) return;

  let sessionSections = [];

  if (currentPhase === '0') {
    sessionSections = [
      { section: "SEMAINES 1 & 2", keys: ["A-S1", "B-S1", "C-S1"] },
      { section: "SEMAINES 3 & 4", keys: ["A-S3", "B-S3", "C-S3"] },
      { section: "SEMAINES 5 & 6", keys: ["A-S5", "B-S5", "C-S5"] }
    ];
  } else if (currentPhase === '1') {
    sessionSections = [
      { section: "SEMAINES 1 & 2", keys: ["A-F1", "B-F1", "C-F1"] },
      { section: "SEMAINES 3 & 4", keys: ["A-F3", "B-F3", "C-F3"] },
      { section: "SEMAINES 5 À 8", keys: ["A-F5", "B-F5", "C-F5"] }
    ];
  } else if (currentPhase === '2') {
    sessionSections = [
      { section: "SEMAINES 1 & 2", keys: ["A-BK1", "B-BK1", "C-BK1"] },
      { section: "SEMAINES 3 & 4", keys: ["A-BK3", "B-BK3", "C-BK3"] },
      { section: "SEMAINE 4 (METCON)", keys: ["A-BK4", "B-BK4", "C-BK4"] }
    ];
  }

  let h = '';
  sessionSections.forEach(sec => {
    h += `<div class="st" style="margin-top:22px; margin-bottom:12px;">${sec.section}</div>`;
    sec.keys.forEach(k => {
      const s = SD[k];
      if (!s) return;
      
      let letter = k.charAt(0);
      let c_bg = letter === 'A' ? 'var(--orl)' : (letter === 'B' ? 'var(--bll)' : 'var(--grl)');
      let c_icn = letter === 'A' ? 'var(--or)' : (letter === 'B' ? 'var(--bl)' : 'var(--gr)');
      let c_txt = letter === 'A' ? 'var(--ord)' : (letter === 'B' ? 'var(--bld)' : 'var(--grd)');

      h += `
        <div class="slc" style="margin-bottom:14px; border:1px solid #e0e0e0; border-radius:12px; overflow:hidden; background:#ffffff; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
          <div class="slc-h" style="background:${c_bg}; padding:14px; display:flex; align-items:center;">
            <div class="slc-icon" style="background:${c_icn};color:#fff; font-weight:800; border-radius:8px; width:38px; height:38px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">${letter}</div>
            <div class="slc-info" style="margin-left:12px; flex:1;">
              <div class="slc-title" style="color:${c_txt}; font-size:14px; font-weight:800;">${s.title}</div>
              <div class="slc-sub" style="font-size:11px; color:#666; margin-top:2px;">${s.exos ? s.exos.length + ' exercices' : ''}</div>
            </div>
            <button class="slc-play" style="background:${c_icn}; color:#fff; border:none; border-radius:8px; padding:8px 14px; font-size:12px; font-weight:700; cursor:pointer;" onclick="startPlayer('${k}')">▶ Live</button>
            <button style="background:#2a2a2a; border:1px solid #444; border-radius:8px; padding:8px 12px; font-size:12px; font-weight:700; color:#fff; cursor:pointer; margin-left:8px;" onclick="openRetroModal('${k}')">📝 Saisir</button>
          </div>
          <div style="padding:12px 14px; cursor:pointer; background:#ffffff; border-top:1px solid rgba(0,0,0,0.05);" onclick="tog(this)">
            <div style="font-size:12px; font-weight:700; color:var(--i3); display:flex; align-items:center; justify-content:space-between;">
              <span>Voir la fiche détaillée</span>
              <span class="chv" style="transition:transform 0.2s; font-size:14px;">›</span>
            </div>
          </div>
          <div class="fiche" id="fiche-${k}" style="display:none;"></div>
        </div>
      `;
    });
  });

  container.innerHTML = h;
}
