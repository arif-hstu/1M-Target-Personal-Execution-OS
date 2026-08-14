(function(){
  const S=window.OneMStore,P=window.OneMPhase,D=window.OneMDate,$=id=>document.getElementById(id);
  function load(){
    const s=P.settings();
    $("examStart").value=s.exam.estimatedStart;$("examEnd").value=s.exam.estimatedEnd;$("examConfirmed").checked=!!s.exam.confirmed;
    const sel=$("phaseOverride");
    window.OneMRoadmap.phases.forEach(p=>{const o=document.createElement("option");o.value=p.id;o.textContent=p.name;sel.appendChild(o)});
    sel.value=s.phaseOverride||"auto";
    $("wakeTime").value=D.formatClockText12(s.routine.wakeTime);$("sleepTime").value=D.formatClockText12(s.routine.sleepTime);$("officeStart").value=D.formatClockText12(s.routine.officeStart);$("officeEnd").value=D.formatClockText12(s.routine.officeEnd);
  }
  $("saveSettings").addEventListener("click",()=>{
    const examStart=$("examStart").value,examEnd=$("examEnd").value;
    if(!examStart||!examEnd||examEnd<examStart){$("status").textContent="Check exam dates: end must be on/after start.";return;}
    S.saveOverrides({
      exam:{estimatedStart:examStart,estimatedEnd:examEnd,confirmed:$("examConfirmed").checked},
      phaseOverride:$("phaseOverride").value,
      routine:{recoveryDay:6,recoveryDayName:"Saturday",wakeTime:D.formatClockText12($("wakeTime").value.trim()),sleepTime:D.formatClockText12($("sleepTime").value.trim()),officeStart:D.formatClockText12($("officeStart").value.trim()),officeEnd:D.formatClockText12($("officeEnd").value.trim())}
    });
    $("status").textContent="Saved locally. Dashboard will use these settings.";setTimeout(()=>$("status").textContent="",2400);
  });
  $("resetSettings").addEventListener("click",()=>{S.remove("settings");location.reload()});
  load();
})();
