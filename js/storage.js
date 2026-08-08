window.OneMStore = (function(){
  const PREFIX="oneM:";
  function key(k){ return PREFIX+k; }
  function get(k,fallback){
    try{
      const raw=localStorage.getItem(key(k));
      return raw===null ? fallback : JSON.parse(raw);
    }catch(e){ return fallback; }
  }
  function set(k,value){
    try{ localStorage.setItem(key(k),JSON.stringify(value)); return true; }
    catch(e){ return false; }
  }
  function remove(k){ try{ localStorage.removeItem(key(k)); }catch(e){} }
  function getOverrides(){ return get("settings",{}); }
  function saveOverrides(v){ return set("settings",v); }
  function getRoutine(date){ return get(`routine:${date}`,{}); }
  function saveRoutine(date,v){ return set(`routine:${date}`,v); }
  function getNotNow(){ return get("notNow",[]); }
  function saveNotNow(v){ return set("notNow",v); }
  function getReview(weekKey){ return get(`review:${weekKey}`,{}); }
  function saveReview(weekKey,v){ return set(`review:${weekKey}`,v); }
  function getMetrics(){ return get("privateMetrics",{}); }
  function saveMetrics(v){ return set("privateMetrics",v); }
  return {get,set,remove,getOverrides,saveOverrides,getRoutine,saveRoutine,getNotNow,saveNotNow,getReview,saveReview,getMetrics,saveMetrics};
})();
