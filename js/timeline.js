(function(){
  const D=window.OneMDate,P=window.OneMPhase,$=id=>document.getElementById(id);
  const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  function date(){return $("viewDate").value||D.getTodayISO(P.settings().project.timezone)}
  function render(){
    const dt=date(), phase=P.getPhase(dt), year=P.getYear(dt);
    $("currentPhase").textContent=phase?phase.name:"Outside roadmap";
    $("currentDate").textContent=`${D.weekdayName(dt)}, ${D.formatDate(dt,{year:"numeric",month:"long",day:"numeric"})}`;
    $("statusBadge").textContent=phase&&phase.forced?"MANUAL OVERRIDE":"AUTO PHASE";
    $("yearCards").innerHTML=window.OneMRoadmap.years.map(y=>`<div class="yearCard ${year&&year.id===y.id?"active":""}"><h3>${esc(y.name)}</h3><div class="sourceNote">${esc(D.formatShort(y.start))} → ${esc(D.formatShort(y.end))}</div><p><b>Objective:</b> ${esc(y.objective)}</p><p>${esc(y.financialState)}</p></div>`).join("");
    $("phaseList").innerHTML=P.resolvedPhases().map(p=>`<div class="trackItem ${phase&&phase.id===p.id?"active":""}"><div><div class="name">${esc(p.name)}</div><small>${esc(p.priority)}</small></div><div class="date">${esc(D.formatShort(p.start))}<br>→ ${esc(D.formatShort(p.end))}</div></div>`).join("");
    $("milestones").innerHTML=window.OneMMilestones.map(m=>`<div class="milestone"><div class="date">${esc(D.formatShort(m.date))}</div><div><div class="title">${esc(m.title)} <span class="badge">${esc(m.status)}</span></div><small>${esc(m.detail)}</small></div></div>`).join("");
    $("tracks").innerHTML=window.OneMRoadmap.trackTimeline.map(tr=>`<div class="track"><div class="trackHead"><b>${esc(tr.track)}</b></div><div class="trackItems">${tr.items.map(raw=>{const i=P.resolveTimelineItem(raw);const active=D.inRange(dt,i.start,i.end);return `<div class="trackItem ${active?"active":""}"><div><div class="name">${esc(i.title)}</div>${i.note?`<small>${esc(i.note)}</small>`:""}</div><div class="date">${esc(D.formatShort(i.start))}<br>→ ${esc(D.formatShort(i.end))}</div></div>`}).join("")}</div></div>`).join("");
    $("cashHierarchy").innerHTML=window.OneMRoadmap.cashHierarchy.map(x=>`<li>${esc(x)}</li>`).join("");
  }
  $("todayBtn").addEventListener("click",()=>{$("viewDate").value=D.getTodayISO(P.settings().project.timezone);render()});
  $("viewDate").addEventListener("change",render);$("viewDate").value=D.getTodayISO(P.settings().project.timezone);render();
})();
