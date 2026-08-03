// app.js - Logique Modern Warrior & Supabase

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

document.querySelectorAll('.cb[id^="fiche-"]').forEach(cb => {
  const prev = cb.previousElementSibling;
  if(prev && prev.classList.contains('ch')){
    prev.addEventListener('click', function(){
      if(!cb.dataset.loaded){ cb.innerHTML = ficheHTML(cb.id.replace('fiche-','')); cb.dataset.loaded = '1'; }
    });
  }
});

let pKey='', pIdx=0, tInterval=null, tSec=0, tRunning=false, rInterval=null, rSec=0, pStart=null;
let selRpeVal=0, selFeelVal='';

function startPlayer(key){
  const s = SD[key]; if(!s) return;
  pKey = key; pIdx = 0; pStart = new Date();
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
  showToast('Seance enregistree dans Supabase', '#639922');
  goPage('tracking');
}

const done = new Set();
async function loadFromSupabase() {
  const online = await supa.ping();
  if (online) {
    const rows = await supa.get('tracking', '?user_id=eq.'+USER_ID+'&done=eq.true&select=track_id');
    rows.forEach(r => done.add(r.track_id));

    const sessions = await supa.get('sessions', '?user_id=eq.'+USER_ID+'&order=completed_at.desc&limit=50');
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
      h += `<div class="tr-row" onclick="tgl('${item.id}')">
        <div class="tr-chk${ok ? ' done' : ''}" id="chk-${item.id}">${ok ? '&#10003;' : ''}</div>
        <div style="flex:1">
          <div style="font-size:13px;font-weight:600">${item.n}</div>
          <div style="font-size:11px;color:var(--i3);margin-top:1px">${item.d}${se&&se.rpe?' - RPE '+se.rpe:''}${se&&se.feel?' - '+se.feel:''}</div>
          ${se&&se.notes ? `<div style='font-size:11px;color:var(--i3);margin-top:2px;font-style:italic'>${se.notes}</div>` : ''}
          ${se ? `<div style='font-size:10px;color:var(--i3);margin-top:1px'>${se.completed_at?se.completed_at.slice(0,10):''}${se.duration_min?' - '+se.duration_min+' min':''}</div>` : ''}
        </div>
        <span class="badge ${item.b}" style="flex-shrink:0">${item.d.split('&middot;')[0].trim()}</span>
      </div>`;
    });
  }
  document.getElementById('track-content').innerHTML = h;
}

function tgl(id){
  const c = document.getElementById('chk-'+id);
  if(done.has(id)){
    done.delete(id); c.classList.remove('done'); c.innerHTML = '';
    supa.upsert('tracking', {user_id: USER_ID, track_id: id, done: false}).catch(()=>{});
  } else {
    done.add(id); c.classList.add('done'); c.innerHTML = '&#10003;';
    supa.upsert('tracking', {user_id: USER_ID, track_id: id, done: true}).catch(()=>{});
  }
  localStorage.setItem('mw3-done', JSON.stringify([...done]));
  updateStats(); buildTracking();
}

function updateStats(){
  const n = done.size, pct = Math.round(n/18*100);
  ['h-done','h-week','h-bar','h-pct','tb','td-txt','tp-txt'].forEach(id => {
    const el = document.getElementById(id); if(!el) return;
    if(id==='h-done') el.textContent = n;
    else if(id==='h-week') el.textContent = Math.min(6, Math.ceil(n/3)||1);
    else if(id==='h-bar'||id==='tb') el.style.width = pct + '%';
    else if(id==='h-pct') el.textContent = pct + '% complété';
    else if(id==='td-txt') el.textContent = n + ' séance' + (n>1?'s':'') + ' validée' + (n>1?'s':'');
    else if(id==='tp-txt') el.textContent = pct + '%';
  });
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

const PAGES = ['home','guide','seances','wod','snacks','technique','mobilite','alim','tracking'];
function goPage(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nb').forEach(b => b.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  const idx = PAGES.indexOf(id);
  document.querySelectorAll('.nb')[idx]?.classList.add('active');
  window.scrollTo(0,0);
}
function tog(h){
  const b = h.nextElementSibling, c = h.querySelector('.chv');
  b.classList.toggle('open');
  if(c) c.style.transform = b.classList.contains('open') ? 'rotate(90deg)' : '';
}

window._sessMap = {};
window.onload = () => {
  filterWod('all', document.querySelector('.wod-fb'));
  loadFromSupabase();
};
