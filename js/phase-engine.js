window.OneMPhase = (function(){
  const D=window.OneMDate;

  function settings(){
    const base=JSON.parse(JSON.stringify(window.OneMDefaults));
    const o=window.OneMStore.getOverrides();
    if(o.exam){ Object.assign(base.exam,o.exam); }
    if(o.routine){ Object.assign(base.routine,o.routine); }
    if(o.project){ Object.assign(base.project,o.project); }
    if(o.phaseOverride) base.phaseOverride=o.phaseOverride;
    return base;
  }

  function resolveToken(token,s){
    if(token==="EXAM_START") return s.exam.estimatedStart;
    if(token==="EXAM_END") return s.exam.estimatedEnd;
    if(token==="EXAM_START_MINUS_1") return D.addDays(s.exam.estimatedStart,-1);
    if(token==="EXAM_END_PLUS_1") return D.addDays(s.exam.estimatedEnd,1);
    return token;
  }

  function resolvedPhases(){
    const s=settings();
    return window.OneMRoadmap.phases.map(p=>({
      ...p,
      start:resolveToken(p.start,s),
      end:resolveToken(p.end,s)
    })).filter(p=>D.compare(p.start,p.end)<=0);
  }

  function getYear(date){
    return window.OneMRoadmap.years.find(y=>D.inRange(date,y.start,y.end)) || null;
  }

  function getPhase(date){
    const s=settings();
    if(s.phaseOverride && s.phaseOverride!=="auto"){
      const forced=resolvedPhases().find(p=>p.id===s.phaseOverride);
      if(forced) return {...forced, forced:true};
    }
    return resolvedPhases().find(p=>D.inRange(date,p.start,p.end)) || null;
  }

  function getMonthlyPlan(date){
    return window.OneMRoadmap.monthlyPlan.find(m=>m.month===D.monthKey(date)) || null;
  }

  function resolveTimelineItem(item){
    const s=settings();
    return {...item,start:resolveToken(item.start,s),end:resolveToken(item.end,s)};
  }

  function getNextMilestone(date){
    return window.OneMMilestones
      .filter(m=>D.compare(m.date,date)>=0)
      .sort((a,b)=>D.compare(a.date,b.date))[0] || null;
  }

  function getProjectProgress(date){
    const s=settings();
    const total=D.inclusiveDays(s.project.start,s.project.end);
    let day=0;
    if(D.compare(date,s.project.start)<0) day=0;
    else if(D.compare(date,s.project.end)>0) day=total;
    else day=D.inclusiveDays(s.project.start,date);
    return {day,total,percent:D.progress(date,s.project.start,s.project.end)};
  }

  function getPhaseProgress(date,phase){
    if(!phase) return {day:0,total:0,percent:0};
    const total=D.inclusiveDays(phase.start,phase.end);
    let day=D.inclusiveDays(phase.start,date);
    day=Math.max(0,Math.min(total,day));
    return {day,total,percent:D.progress(date,phase.start,phase.end)};
  }

  function examWarning(date){
    const s=settings();
    const phase=getPhase(date);
    if(!s.exam.confirmed && phase && ["exam-sprint","exam-window"].includes(phase.id)){
      return "Exam dates are still marked as estimated. Update Settings when the official BPSC schedule is known.";
    }
    return "";
  }

  return {settings,resolveToken,resolvedPhases,getYear,getPhase,getMonthlyPlan,resolveTimelineItem,getNextMilestone,getProjectProgress,getPhaseProgress,examWarning};
})();
