(function(){
  const D=window.OneMDate,P=window.OneMPhase,S=window.OneMStore,$=id=>document.getElementById(id);
  const qs=[
    "How much liquid cash do I have?",
    "What is the verified debt principal?",
    "How much net income did each stream produce?",
    "How many high-quality proposals were sent?",
    "Which portfolio item generated the most interest?",
    "Did I complete at least 85% of planned examination and income blocks?",
    "Where did unplanned time go?",
    "What single activity should be stopped next week?",
    "What is the one most important revenue task for the next working day?",
    "Am I closer to a job-exit gate, or merely more frustrated with my job?"
  ];
  function date(){return $("reviewDate").value||D.getTodayISO(P.settings().project.timezone)}
  function key(){return D.getISOWeekKey(date())}
  function render(){
    const k=key(), saved=S.getReview(k), phase=P.getPhase(date());
    $("weekKey").textContent=k;$("phaseLabel").textContent=phase?phase.name:"Outside roadmap";
    $("questions").innerHTML=qs.map((q,i)=>`<div class="reviewQ"><label>${i+1}. ${q}</label><textarea data-q="${i}" placeholder="Write a short, decision-useful answer…"></textarea></div>`).join("");
    $("questions").querySelectorAll("textarea").forEach(t=>t.value=saved.answers?.[t.dataset.q]||"");
    $("gate").innerHTML=window.OneMRoadmap.jobExitGate.map(g=>`<label class="gateItem"><input type="checkbox" data-gate="${g.id}"><span><b>${g.label}</b><small>${g.evidence}</small></span></label>`).join("");
    $("gate").querySelectorAll("input").forEach(c=>c.checked=!!saved.gates?.[c.dataset.gate]);
    const m=S.getMetrics();$("cash").value=m.cash??"";$("debt").value=m.debt??"";$("sideIncome").value=m.sideIncome??"";$("sessions").value=m.sessions??"";
  }
  $("saveBtn").addEventListener("click",()=>{const answers={};$("questions").querySelectorAll("textarea").forEach(t=>answers[t.dataset.q]=t.value.trim());const gates={};$("gate").querySelectorAll("input").forEach(c=>gates[c.dataset.gate]=c.checked);S.saveReview(key(),{date:date(),answers,gates,savedAt:new Date().toISOString()});$("saveStatus").textContent="Saved locally.";setTimeout(()=>$("saveStatus").textContent="",1800)});
  $("clearBtn").addEventListener("click",()=>{S.remove(`review:${key()}`);render();$("saveStatus").textContent="Cleared."});
  $("saveMetrics").addEventListener("click",()=>{S.saveMetrics({cash:$("cash").value,debt:$("debt").value,sideIncome:$("sideIncome").value,sessions:$("sessions").value,savedAt:new Date().toISOString()});$("metricStatus").textContent="Saved only in this browser.";setTimeout(()=>$("metricStatus").textContent="",1800)});
  $("thisWeekBtn").addEventListener("click",()=>{$("reviewDate").value=D.getTodayISO(P.settings().project.timezone);render()});$("reviewDate").addEventListener("change",render);$("reviewDate").value=D.getTodayISO(P.settings().project.timezone);render();
})();
