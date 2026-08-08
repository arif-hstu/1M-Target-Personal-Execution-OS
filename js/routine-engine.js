window.OneMRoutine = (function(){
  const D=window.OneMDate;
  const shared=window.OneMRoutines.shared;

  function getRoutine(date,phase){
    if(!phase){
      return {
        status:"outside",
        title:"Outside the configured 3-year roadmap",
        slots:[shared.wake,shared.office,shared.family,shared.scorecard,shared.shutdown],
        evening:{label:"Review",title:"Review the roadmap and choose the next operating phase.",detail:"Use Settings or update the roadmap source files before continuing."}
      };
    }
    const tpl=window.OneMRoutines.phases[phase.id];
    const day=D.weekday(date);
    const e=tpl.evenings[day] || tpl.evenings[0];
    const evening={id:"evening",time:"20:00–21:50",label:e[0],title:e[1],detail:e[2]};
    const slots=[shared.wake,tpl.morning,shared.office,tpl.midday,tpl.afternoon,shared.family,evening,shared.scorecard,shared.shutdown];
    return {status:"active",title:tpl.sourceStatus,slots,evening};
  }

  function weeklyTargets(phase){
    if(!phase) return [];
    if(phase.id==="exam-sprint") return window.OneMRoadmap.examWeeklyTargets;
    if(phase.id==="exam-window") return [
      ["Primary goal","Complete the official exam safely and calmly"],
      ["Sleep","≥7 hours average"],
      ["Side-project catch-up","Not required during the exam window"]
    ];
    if(phase.id==="post-exam-portfolio") return [
      ["Reallocated study time","At least +10–12 h/week → Blender production, outreach and digital products"],
      ["Commercial priority","Paid delivery first; otherwise portfolio proof + outreach"],
      ["Ponnora","Maximum 2–3 h/week unless proven evidence justifies continuation"],
      ["Finance review","45–60 min/week"],
      ["Exercise","150+ min/week"],
      ["Sleep","≥7 h average"]
    ];
    if(phase.id==="client-acquisition") return window.OneMRoadmap.commercialKPIs;
    if(phase.id==="year1-scale") return [
      ["Primary","Higher-value Blender delivery + retainers / agency opportunities"],
      ["Pipeline","Keep personalised acquisition alive"],
      ["Ariscope/products","Technical niche library + third-product path"],
      ["Finance","Debt/cash reviewed weekly; July target ≈৳60k net run-rate"],
      ["Recovery","Saturday evening + ≥7 h average sleep"]
    ];
    if(phase.id==="year2-scale") return [
      ["Financial objective","Clear final debt + grow liquid cash toward Year-2 base state"],
      ["Revenue quality","Scale pricing, repeat clients and products/YouTube"],
      ["Client concentration","No client above 40% of side revenue (roadmap KPI)"],
      ["Service margin","At least 70% net margin target for service work"],
      ["Recovery","Saturday evening + ≥7 h average sleep"]
    ];
    if(phase.id==="year3-target") return [
      ["Base-plan contribution","≈৳80,000 net monthly contribution"],
      ["Goal window","Debt-free + ৳10 lakh liquid around month 27–30 in base case"],
      ["Diversification","Protect pipeline and reduce single-client dependency"],
      ["Lifestyle inflation","Avoid while target/reserve is still being secured"],
      ["Recovery","Saturday evening + ≥7 h average sleep"]
    ];
    return [
      ["Resilience","Build 3–6 months essential-expense reserve"],
      ["Income","Keep diversified, documented revenue systems"],
      ["Investing","Only after debt terms, tax position, household needs and risk tolerance are clear"],
      ["Recovery","Saturday evening + ≥7 h average sleep"]
    ];
  }

  return {getRoutine,weeklyTargets};
})();
