(function(){
  const S=window.OneMStore,P=window.OneMPhase,$=id=>document.getElementById(id);
  function load(){
    const s=P.settings();
    $("examStart").value=s.exam.estimatedStart;$("examEnd").value=s.exam.estimatedEnd;$("examConfirmed").checked=!!s.exam.confirmed;
    const sel=$("phaseOverride");
    window.OneMRoadmap.phases.forEach(p=>{const o=document.createElement("option");o.value=p.id;o.textContent=p.name;sel.appendChild(o)});
    sel.value=s.phaseOverride||"auto";
    $("wakeTime").value=s.routine.wakeTime;$("sleepTime").value=s.routine.sleepTime;$("officeStart").value=s.routine.officeStart;$("officeEnd").value=s.routine.officeEnd;
  }
  $("saveSettings").addEventListener("click",()=>{
    const examStart=$("examStart").value,examEnd=$("examEnd").value;
    if(!examStart||!examEnd||examEnd<examStart){$("status").textContent="Check exam dates: end must be on/after start.";return;}
    S.saveOverrides({
      exam:{estimatedStart:examStart,estimatedEnd:examEnd,confirmed:$("examConfirmed").checked},
      phaseOverride:$("phaseOverride").value,
      routine:{recoveryDay:6,recoveryDayName:"Saturday",wakeTime:$("wakeTime").value.trim(),sleepTime:$("sleepTime").value.trim(),officeStart:$("officeStart").value.trim(),officeEnd:$("officeEnd").value.trim()}
    });
    $("status").textContent="Saved locally. Dashboard will use these settings.";setTimeout(()=>$("status").textContent="",2400);
  });
  $("resetSettings").addEventListener("click",()=>{S.remove("settings");location.reload()});
  load();
})();
