(function(){
  const D=window.OneMDate, P=window.OneMPhase, R=window.OneMRoutine, S=window.OneMStore;
  const $=id=>document.getElementById(id);

  function esc(s){ return String(s ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c])); }

  function selectedDate(){
    return $("viewDate").value || D.getTodayISO(P.settings().project.timezone);
  }

  function render(){
    const date=selectedDate();
    const settings=P.settings();
    const phase=P.getPhase(date);
    const year=P.getYear(date);
    const proj=P.getProjectProgress(date);
    const pp=P.getPhaseProgress(date,phase);
    const routine=R.getRoutine(date,phase);
    const next=P.getNextMilestone(date);
    const month=P.getMonthlyPlan(date);

    $("dayName").textContent=D.weekdayName(date);
    $("dateLabel").textContent=D.formatDate(date,{year:"numeric",month:"long",day:"numeric"});
    $("yearLabel").textContent=year ? year.name : "3-Year Execution System";
    $("phaseName").textContent=phase ? phase.name : "Outside configured roadmap";
    $("phasePriority").textContent=phase ? phase.priority : "Review the roadmap or select a valid date.";
    $("phaseRationale").textContent=phase ? phase.rationale : window.OneMRoadmap.sourceNote;
    $("phaseBadge").textContent=phase && phase.forced ? "MANUAL PHASE OVERRIDE" : "AUTO PHASE";

    const warn=P.examWarning(date);
    $("examWarning").classList.toggle("hide",!warn);
    $("examWarning").textContent=warn;
    $("examBadge").classList.toggle("hide",!(phase && ["exam-sprint","exam-window"].includes(phase.id) && !settings.exam.confirmed));

    $("projectDay").textContent=proj.day ? `${proj.day} / ${proj.total}` : `0 / ${proj.total}`;
    $("projectPct").textContent=`${Math.round(proj.percent)}%`;
    $("phaseDay").textContent=phase ? `${pp.day} / ${pp.total}` : "—";
    $("projectProgress").style.width=`${proj.percent}%`;
    $("projectStartLabel").textContent=D.formatShort(settings.project.start);
    $("projectEndLabel").textContent=D.formatShort(settings.project.end);

    if(next){
      const days=Math.max(0,D.diffDays(date,next.date));
      $("nextMilestoneDays").textContent=days===0 ? "TODAY" : String(days);
      $("nextMilestone").innerHTML=`<b>${esc(next.title)}</b><br><span class="muted">${esc(D.formatShort(next.date))} • ${esc(next.detail)}</span>`;
    } else {
      $("nextMilestoneDays").textContent="—";
      $("nextMilestone").textContent="No configured milestone after this date.";
    }

    if(month){
      $("monthMission").innerHTML=`<div class="monthMission"><strong>${esc(month.label)}</strong><p style="font-size:12px;margin:6px 0">${esc(month.deliverable)}</p><div class="target"><b>Target allocable surplus</b><span>${esc(month.surplus)}</span></div><div class="target" style="margin-top:6px"><b>Financial milestone</b><span>${esc(month.milestone)}</span></div></div>`;
    } else if(year){
      $("monthMission").innerHTML=`<div class="monthMission"><strong>${esc(year.name)}</strong><p style="font-size:12px;margin:6px 0">The roadmap does not provide month-by-month deliverables beyond July 2027, so this app does not invent them. Follow the current phase objective and weekly controls.</p><div class="sourceNote">${esc(year.objective)}</div></div>`;
    } else {
      $("monthMission").innerHTML=`<div class="monthMission"><strong>Roadmap review required</strong><p style="font-size:12px">Selected date is outside the configured 7 Aug 2026–6 Aug 2029 roadmap.</p></div>`;
    }

    renderRoutine(date,routine);
    renderTargets(R.weeklyTargets(phase));
    renderIdeas();
    renderControls();
  }

  function renderRoutine(date,routine){
    const saved=S.getRoutine(date);
    $("routineSource").textContent=routine.title;
    $("routineList").innerHTML=routine.slots.map(slot=>{
      const checked=saved[slot.id] ? "checked" : "";
      return `<label class="slot"><span class="time">${esc(slot.time)}</span><span><div class="title">${esc(slot.title)}</div><div class="detail">${esc(slot.detail)}</div></span><input class="check" type="checkbox" data-slot="${esc(slot.id)}" ${checked}></label>`;
    }).join("");
    $("routineList").querySelectorAll(".check").forEach(cb=>cb.addEventListener("change",()=>{
      const state=S.getRoutine(date); state[cb.dataset.slot]=cb.checked; S.saveRoutine(date,state); updateScore();
    }));
    updateScore();
  }

  function updateScore(){
    const checks=[...$("routineList").querySelectorAll(".check")];
    const done=checks.filter(c=>c.checked).length;
    $("routineScore").textContent=checks.length ? `${done}/${checks.length} blocks completed (${Math.round(done/checks.length*100)}%)` : "";
  }

  function renderTargets(targets){
    $("weeklyTargets").innerHTML=targets.map(([a,b])=>`<div class="target"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join("");
  }

  function renderIdeas(){
    const ideas=S.getNotNow();
    $("ideaList").innerHTML=ideas.length ? ideas.slice().reverse().map((idea,revIndex)=>{
      const idx=ideas.length-1-revIndex;
      return `<div class="idea"><span>${esc(idea.text)} <small class="muted">${esc(idea.date || "")}</small></span><button class="btn" data-remove-idea="${idx}">Remove</button></div>`;
    }).join("") : `<div class="sourceNote">Empty is good. Keep attractive but non-priority ideas here instead of starting them.</div>`;
    $("ideaList").querySelectorAll("[data-remove-idea]").forEach(btn=>btn.addEventListener("click",()=>{
      const arr=S.getNotNow(); arr.splice(Number(btn.dataset.removeIdea),1); S.saveNotNow(arr); renderIdeas();
    }));
  }

  function renderControls(){
    $("globalControls").innerHTML=window.OneMRoadmap.globalControls.map(t=>`<div class="callout good">${esc(t)}</div>`).join("");
    $("activeProjects").innerHTML=window.OneMRoadmap.activeProjects.map(t=>`<li>${esc(t)}</li>`).join("");
  }

  $("todayBtn").addEventListener("click",()=>{ $("viewDate").value=D.getTodayISO(P.settings().project.timezone); render(); });
  $("viewDate").addEventListener("change",render);
  $("fullscreenBtn").addEventListener("click",()=>document.fullscreenElement ? document.exitFullscreen?.() : document.documentElement.requestFullscreen?.());
  $("resetRoutine").addEventListener("click",()=>{ S.remove(`routine:${selectedDate()}`); render(); });
  $("addIdea").addEventListener("click",()=>{
    const input=$("ideaInput"), text=input.value.trim(); if(!text) return;
    const ideas=S.getNotNow(); ideas.push({text,date:selectedDate()}); S.saveNotNow(ideas); input.value=""; renderIdeas();
  });
  $("ideaInput").addEventListener("keydown",e=>{ if(e.key==="Enter") $("addIdea").click(); });

  $("viewDate").value=D.getTodayISO(P.settings().project.timezone);
  render();

  if("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("service-worker.js").catch(()=>{});
})();
