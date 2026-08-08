window.OneMDate = (function(){
  const MS_DAY = 86400000;

  function parseISODate(iso){
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
    if(!m) return null;
    return new Date(Date.UTC(Number(m[1]), Number(m[2])-1, Number(m[3])));
  }

  function isoFromDate(date){
    return date.toISOString().slice(0,10);
  }

  function addDays(iso, days){
    const d = parseISODate(iso);
    if(!d) return null;
    d.setUTCDate(d.getUTCDate()+days);
    return isoFromDate(d);
  }

  function compare(a,b){
    return String(a).localeCompare(String(b));
  }

  function inRange(date, start, end){
    return compare(date,start) >= 0 && compare(date,end) <= 0;
  }

  function diffDays(start,end){
    const a=parseISODate(start), b=parseISODate(end);
    if(!a || !b) return 0;
    return Math.round((b-a)/MS_DAY);
  }

  function inclusiveDays(start,end){
    return diffDays(start,end)+1;
  }

  function clamp(n,min,max){ return Math.min(max,Math.max(min,n)); }

  function progress(date,start,end){
    const total = Math.max(1,diffDays(start,end));
    const elapsed = diffDays(start,date);
    return clamp((elapsed/total)*100,0,100);
  }

  function formatDate(iso, opts){
    const d=parseISODate(iso);
    if(!d) return iso || "—";
    return new Intl.DateTimeFormat(undefined, opts || {year:"numeric",month:"long",day:"numeric"}).format(d);
  }

  function formatShort(iso){
    return formatDate(iso,{day:"numeric",month:"short",year:"numeric"});
  }

  function weekday(iso){
    const d=parseISODate(iso);
    return d ? d.getUTCDay() : 0;
  }

  function weekdayName(iso){
    const d=parseISODate(iso);
    return d ? new Intl.DateTimeFormat(undefined,{weekday:"long",timeZone:"UTC"}).format(d) : "—";
  }

  function monthKey(iso){ return String(iso).slice(0,7); }

  function getTodayISO(timeZone){
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: timeZone || "Asia/Dhaka",
      year:"numeric",month:"2-digit",day:"2-digit"
    }).formatToParts(new Date());
    const map={};
    parts.forEach(p=>{ if(p.type!=="literal") map[p.type]=p.value; });
    return `${map.year}-${map.month}-${map.day}`;
  }

  function getISOWeekKey(iso){
    const d=parseISODate(iso);
    if(!d) return iso;
    const temp=new Date(d.getTime());
    const day=temp.getUTCDay() || 7;
    temp.setUTCDate(temp.getUTCDate()+4-day);
    const yearStart=new Date(Date.UTC(temp.getUTCFullYear(),0,1));
    const week=Math.ceil((((temp-yearStart)/MS_DAY)+1)/7);
    return `${temp.getUTCFullYear()}-W${String(week).padStart(2,"0")}`;
  }

  return {parseISODate,isoFromDate,addDays,compare,inRange,diffDays,inclusiveDays,progress,formatDate,formatShort,weekday,weekdayName,monthKey,getTodayISO,getISOWeekKey};
})();
