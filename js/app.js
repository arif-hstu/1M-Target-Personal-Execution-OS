(function(){
  const D = window.OneMDate;
  const P = window.OneMPhase;
  const R = window.OneMRoutine;
  const S = window.OneMStore;
  const $ = id => document.getElementById(id);

  function esc(s){
    return String(s ?? "").replace(/[&<>"']/g, c => ({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      "\"":"&quot;",
      "'":"&#39;"
    }[c]));
  }

  const PDF_READING_API = "http://127.0.0.1:8765/pdf-reading-today.json";

  function formatTrackedTime(value){
    const total = Math.max(0, Math.round(Number(value) || 0));
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;

    if(hours > 0) return `${hours}h ${minutes}m`;
    if(minutes > 0) return `${minutes}m ${seconds}s`;
    return `${seconds}s`;
  }

  function formatTargetMinutes(minutes){
    const total = Math.max(0, Math.round(Number(minutes) || 0));
    const hours = Math.floor(total / 60);
    const mins = total % 60;

    if(hours > 0 && mins > 0) return `${hours}h ${mins}m`;
    if(hours > 0) return `${hours}h`;
    return `${mins}m`;
  }

  function getPdfStudyTarget(date){
    const targetDate =
      date ||
      D.getTodayISO(P.settings().project.timezone);

    const phase = P.getPhase(targetDate);

    if(!phase){
      return {
        date: targetDate,
        phase: null,
        minMinutes: 0,
        maxMinutes: 0,
        blocks: 0,
        segments: []
      };
    }

    const routine =
      R.getRoutine(targetDate, phase);

    const trackedSlots =
      (routine.slots || []).filter(
        slot => slot.tracking === "pdf-study"
      );

    let minMinutes = 0;
    let maxMinutes = 0;

    const segments = [];

    trackedSlots.forEach(slot => {
      const min =
        Math.max(
          0,
          Number(slot.targetMinMinutes) || 0
        );

      const max =
        Math.max(
          min,
          Number(slot.targetMaxMinutes) || min
        );

      const label =
        slot.trackingLabel ||
        slot.title ||
        "PDF study";

      minMinutes += min;
      maxMinutes += max;

      if(min > 0){
        segments.push({
          id: `${slot.id}-core`,
          label,
          minutes: min,
          stretch: false
        });
      }

      if(max > min){
        segments.push({
          id: `${slot.id}-stretch`,
          label: `${label} +`,
          minutes: max - min,
          stretch: true
        });
      }
    });

    return {
      date: targetDate,
      phase: phase.id,
      minMinutes,
      maxMinutes,
      blocks: trackedSlots.length,
      segments
    };
  }

  function renderPdfTarget(
    verifiedSeconds = null,
    activityDate = null
  ){
    const segmentBar =
      $("pdfSegmentBar");

    const currentBlock =
      $("pdfCurrentBlock");

    const legacyProgress =
      $("pdfLegacyProgress");

    const progress =
      $("pdfTargetProgress");

    const label =
      $("pdfTargetLabel");

    const pct =
      $("pdfTargetPct");

    if(!label || !pct){
      return;
    }

    const targetDate =
      activityDate ||
      D.getTodayISO(P.settings().project.timezone);

    const target =
      getPdfStudyTarget(targetDate);

    if(
      target.minMinutes <= 0 ||
      target.segments.length === 0
    ){
      if(segmentBar){
        segmentBar.hidden = true;
        segmentBar.innerHTML = "";
      }

      if(currentBlock){
        currentBlock.hidden = true;
        currentBlock.innerHTML = "";
      }

      if(legacyProgress){
        legacyProgress.hidden = true;
      }

      if(progress){
        progress.style.width = "0%";
      }

      label.textContent =
        "No PDF study target in today's routine";

      pct.textContent = "—";

      return;
    }

    const minText =
      formatTargetMinutes(target.minMinutes);

    const maxText =
      formatTargetMinutes(target.maxMinutes);

    label.textContent =
      target.minMinutes === target.maxMinutes
        ? `Today's PDF study target: ${minText}`
        : `Today's PDF study target: ${minText}–${maxText}`;

    if(legacyProgress){
      legacyProgress.hidden = true;
    }

    if(!segmentBar){
      return;
    }

    segmentBar.hidden = false;

    const hasActivityData =
      verifiedSeconds !== null &&
      Number.isFinite(
        Number(verifiedSeconds)
      );

    const verifiedMinutes =
      hasActivityData
        ? Math.max(
            0,
            Number(verifiedSeconds)
          ) / 60
        : 0;

    let consumedMinutes = 0;

    segmentBar.innerHTML =
      target.segments.map(segment => {

        const segmentStart =
          consumedMinutes;

        const segmentEnd =
          segmentStart +
          segment.minutes;

        const completedInsideSegment =
          verifiedMinutes > segmentStart
            ? Math.min(
                segment.minutes,
                verifiedMinutes -
                segmentStart
              )
            : 0;

        const fillPct =
          segment.minutes > 0
            ? (
                completedInsideSegment /
                segment.minutes
              ) * 100
            : 0;

        const completed =
          hasActivityData &&
          verifiedMinutes >= segmentEnd;

        const widthPct =
          target.maxMinutes > 0
            ? (
                segment.minutes /
                target.maxMinutes
              ) * 100
            : 0;

        const title =
          `${segment.label}: ${formatTargetMinutes(segment.minutes)}`;

        consumedMinutes =
          segmentEnd;

        return (
          `<div ` +
            `class="pdfSegment` +
              `${segment.stretch ? " stretch" : ""}` +
              `${completed ? " completed" : ""}` +
            `" ` +
            `style="width:${widthPct}%" ` +
            `title="${esc(title)}"` +
          `>` +

            `<div ` +
              `class="pdfSegmentFill" ` +
              `style="width:${Math.min(
                100,
                Math.max(
                  0,
                  fillPct
                )
              )}%"` +
            `></div>` +

            `<div class="pdfSegmentLabel">` +
              `${esc(segment.label)}` +
            `</div>` +

          `</div>`
        );
      }).join("");

    if(!hasActivityData){
      pct.textContent =
        "Activity data unavailable";

      if(currentBlock){
        currentBlock.hidden =
          false;

        currentBlock.innerHTML =
          `<strong>Tracking unavailable</strong> — ` +
          `the routine target is still shown above.`;
      }

      return;
    }

    let runningTotal = 0;
    let currentSegment = null;

    for(const segment of target.segments){
      const start =
        runningTotal;

      const end =
        start +
        segment.minutes;

      if(verifiedMinutes < end){
        currentSegment = {
          ...segment,
          start,
          end
        };

        break;
      }

      runningTotal =
        end;
    }

    if(currentBlock){
      currentBlock.hidden =
        false;

      if(
        verifiedMinutes >=
        target.maxMinutes
      ){
        currentBlock.innerHTML =
          `<strong>Full daily PDF target completed ✓</strong> — ` +
          `${formatTargetMinutes(target.maxMinutes)} verified.`;
      }

      else if(currentSegment){
        const inside =
          Math.max(
            0,
            Math.min(
              currentSegment.minutes,
              verifiedMinutes -
              currentSegment.start
            )
          );

        if(currentSegment.stretch){
          currentBlock.innerHTML =
            `<strong>Stretch target:</strong> ` +
            `${esc(
              currentSegment.label.replace(
                /\s\+$/,
                ""
              )
            )} — ` +
            `${formatTargetMinutes(inside)} / ` +
            `${formatTargetMinutes(currentSegment.minutes)}`;
        }

        else {
          currentBlock.innerHTML =
            `<strong>Current target block:</strong> ` +
            `${esc(currentSegment.label)} — ` +
            `${formatTargetMinutes(inside)} / ` +
            `${formatTargetMinutes(currentSegment.minutes)}`;
        }
      }
    }

    const minPct =
      (
        verifiedMinutes /
        target.minMinutes
      ) * 100;

    const maxPct =
      (
        verifiedMinutes /
        target.maxMinutes
      ) * 100;

    if(
      verifiedMinutes >=
      target.maxMinutes
    ){
      pct.textContent =
        "Full target met ✓";
    }

    else if(
      verifiedMinutes >=
      target.minMinutes
    ){
      pct.textContent =
        `Minimum met ✓ • ${Math.round(maxPct)}% of upper target`;
    }

    else {
      pct.textContent =
        `${Math.round(minPct)}% of minimum target`;
    }
  }

  async function refreshPdfReading(){
    if(!$("pdfVerifiedTime")){
      return;
    }

    try {
      const response =
        await fetch(
          PDF_READING_API,
          {
            cache: "no-store"
          }
        );

      if(!response.ok){
        throw new Error(
          `HTTP ${response.status}`
        );
      }

      const data =
        await response.json();

      $("pdfVerifiedTime").textContent =
        formatTrackedTime(
          data.verifiedSeconds
        );

      $("pdfRawTime").textContent =
        formatTrackedTime(
          data.rawSeconds
        );

      $("pdfAfkTime").textContent =
        formatTrackedTime(
          data.afkExcluded
        );

      renderPdfTarget(
        data.verifiedSeconds,
        data.date
      );

      let fresh = false;

      if(data.updated){
        const updatedDate =
          new Date(
            data.updated
          );

        if(
          !Number.isNaN(
            updatedDate.getTime()
          )
        ){
          fresh =
            (
              Date.now() -
              updatedDate.getTime()
            ) <= 180000;
        }
      }

      $("pdfReadingStatus").textContent =
        fresh
          ? "LIVE"
          : "STALE";

      $("pdfReadingUpdated").textContent =
        data.updated
          ? `Updated ${D.formatClockText12(data.updated.slice(11,19))}`
          : "Update time unavailable";
    }

    catch(error){
      $("pdfVerifiedTime").textContent =
        "Unavailable";

      $("pdfRawTime").textContent =
        "—";

      $("pdfAfkTime").textContent =
        "—";

      $("pdfReadingStatus").textContent =
        "OFFLINE";

      $("pdfReadingUpdated").textContent =
        "ActivityWatch unavailable on this device";

      renderPdfTarget(
        null,
        D.getTodayISO(
          P.settings().project.timezone
        )
      );

      console.warn(
        "PDF reading bridge unavailable:",
        error
      );
    }
  }

  function selectedDate(){
    return (
      $("viewDate").value ||
      D.getTodayISO(
        P.settings().project.timezone
      )
    );
  }

  function render(){
    const date =
      selectedDate();

    const settings =
      P.settings();

    const phase =
      P.getPhase(date);

    const year =
      P.getYear(date);

    const proj =
      P.getProjectProgress(date);

    const pp =
      P.getPhaseProgress(
        date,
        phase
      );

    const routine =
      R.getRoutine(
        date,
        phase
      );

    const next =
      P.getNextMilestone(date);

    const month =
      P.getMonthlyPlan(date);

    $("dayName").textContent =
      D.weekdayName(date);

    $("dateLabel").textContent =
      D.formatDate(
        date,
        {
          year: "numeric",
          month: "long",
          day: "numeric"
        }
      );

    $("yearLabel").textContent =
      year
        ? year.name
        : "3-Year Execution System";

    $("phaseName").textContent =
      phase
        ? phase.name
        : "Outside configured roadmap";

    $("phasePriority").textContent =
      phase
        ? phase.priority
        : "Review the roadmap or select a valid date.";

    $("phaseRationale").textContent =
      phase
        ? phase.rationale
        : window.OneMRoadmap.sourceNote;

    $("phaseBadge").textContent =
      phase && phase.forced
        ? "MANUAL PHASE OVERRIDE"
        : "AUTO PHASE";

    const warn =
      P.examWarning(date);

    $("examWarning")
      .classList.toggle(
        "hide",
        !warn
      );

    $("examWarning").textContent =
      warn;

    $("examBadge")
      .classList.toggle(
        "hide",
        !(
          phase &&
          [
            "exam-sprint",
            "exam-window"
          ].includes(phase.id) &&
          !settings.exam.confirmed
        )
      );

    $("projectDay").textContent =
      proj.day
        ? `${proj.day} / ${proj.total}`
        : `0 / ${proj.total}`;

    $("projectPct").textContent =
      `${Math.round(proj.percent)}%`;

    $("phaseDay").textContent =
      phase
        ? `${pp.day} / ${pp.total}`
        : "—";

    $("projectProgress").style.width =
      `${proj.percent}%`;

    $("projectStartLabel").textContent =
      D.formatShort(
        settings.project.start
      );

    $("projectEndLabel").textContent =
      D.formatShort(
        settings.project.end
      );

    if(next){
      const days =
        Math.max(
          0,
          D.diffDays(
            date,
            next.date
          )
        );

      $("nextMilestoneDays").textContent =
        days === 0
          ? "TODAY"
          : String(days);

      $("nextMilestone").innerHTML =
        `<b>${esc(next.title)}</b><br>` +
        `<span class="muted">` +
        `${esc(D.formatShort(next.date))} • ${esc(next.detail)}` +
        `</span>`;
    }

    else {
      $("nextMilestoneDays").textContent =
        "—";

      $("nextMilestone").textContent =
        "No configured milestone after this date.";
    }

    if(month){
      $("monthMission").innerHTML =
        `<div class="monthMission">` +
          `<strong>${esc(month.label)}</strong>` +
          `<p style="font-size:12px;margin:6px 0">` +
            `${esc(month.deliverable)}` +
          `</p>` +
          `<div class="target">` +
            `<b>Target allocable surplus</b>` +
            `<span>${esc(month.surplus)}</span>` +
          `</div>` +
          `<div class="target" style="margin-top:6px">` +
            `<b>Financial milestone</b>` +
            `<span>${esc(month.milestone)}</span>` +
          `</div>` +
        `</div>`;
    }

    else if(year){
      $("monthMission").innerHTML =
        `<div class="monthMission">` +
          `<strong>${esc(year.name)}</strong>` +
          `<p style="font-size:12px;margin:6px 0">` +
            `The roadmap does not provide month-by-month deliverables beyond July 2027, so this app does not invent them. Follow the current phase objective and weekly controls.` +
          `</p>` +
          `<div class="sourceNote">` +
            `${esc(year.objective)}` +
          `</div>` +
        `</div>`;
    }

    else {
      $("monthMission").innerHTML =
        `<div class="monthMission">` +
          `<strong>Roadmap review required</strong>` +
          `<p style="font-size:12px">` +
            `Selected date is outside the configured 7 Aug 2026–6 Aug 2029 roadmap.` +
          `</p>` +
        `</div>`;
    }

    renderRoutine(
      date,
      routine
    );

    renderTargets(
      R.weeklyTargets(phase)
    );

    renderIdeas();
    renderControls();
  }

  function renderRoutine(
    date,
    routine
  ){
    const saved =
      S.getRoutine(date);

    $("routineSource").textContent =
      routine.title;

    $("routineList").innerHTML =
      routine.slots.map(slot => {
        const checked =
          saved[slot.id]
            ? "checked"
            : "";

        return (
          `<label class="slot">` +
            `<span class="time">` +
              `${esc(D.formatClockText12(slot.time))}` +
            `</span>` +

            `<span>` +
              `<div class="title">` +
                `${esc(D.formatClockText12(slot.title))}` +
              `</div>` +

              `<div class="detail">` +
                `${esc(D.formatClockText12(slot.detail))}` +
              `</div>` +
            `</span>` +

            `<input ` +
              `class="check" ` +
              `type="checkbox" ` +
              `data-slot="${esc(slot.id)}" ` +
              `${checked}` +
            `>` +
          `</label>`
        );
      }).join("");

    $("routineList")
      .querySelectorAll(".check")
      .forEach(cb => {
        cb.addEventListener(
          "change",
          () => {
            const state =
              S.getRoutine(date);

            state[cb.dataset.slot] =
              cb.checked;

            S.saveRoutine(
              date,
              state
            );

            updateScore();
          }
        );
      });

    updateScore();
  }

  function updateScore(){
    const checks = [
      ...$("routineList")
        .querySelectorAll(".check")
    ];

    const done =
      checks.filter(
        c => c.checked
      ).length;

    $("routineScore").textContent =
      checks.length
        ? `${done}/${checks.length} blocks completed (${Math.round(done / checks.length * 100)}%)`
        : "";
  }

  function renderTargets(targets){
    $("weeklyTargets").innerHTML =
      targets.map(
        ([a,b]) =>
          `<div class="target">` +
            `<b>${esc(a)}</b>` +
            `<span>${esc(b)}</span>` +
          `</div>`
      ).join("");
  }

  function renderIdeas(){
    const ideas =
      S.getNotNow();

    $("ideaList").innerHTML =
      ideas.length
        ? ideas
            .slice()
            .reverse()
            .map(
              (idea, revIndex) => {
                const idx =
                  ideas.length -
                  1 -
                  revIndex;

                return (
                  `<div class="idea">` +
                    `<span>` +
                      `${esc(idea.text)} ` +
                      `<small class="muted">` +
                        `${esc(idea.date || "")}` +
                      `</small>` +
                    `</span>` +

                    `<button ` +
                      `class="btn" ` +
                      `data-remove-idea="${idx}"` +
                    `>` +
                      `Remove` +
                    `</button>` +
                  `</div>`
                );
              }
            )
            .join("")
        : `<div class="sourceNote">` +
            `Empty is good. Keep attractive but non-priority ideas here instead of starting them.` +
          `</div>`;

    $("ideaList")
      .querySelectorAll(
        "[data-remove-idea]"
      )
      .forEach(btn => {
        btn.addEventListener(
          "click",
          () => {
            const arr =
              S.getNotNow();

            arr.splice(
              Number(
                btn.dataset.removeIdea
              ),
              1
            );

            S.saveNotNow(arr);

            renderIdeas();
          }
        );
      });
  }

  function renderControls(){
    $("globalControls").innerHTML =
      window.OneMRoadmap.globalControls
        .map(
          t =>
            `<div class="callout good">` +
              `${esc(t)}` +
            `</div>`
        )
        .join("");

    $("activeProjects").innerHTML =
      window.OneMRoadmap.activeProjects
        .map(
          t =>
            `<li>${esc(t)}</li>`
        )
        .join("");
  }

  $("todayBtn")
    .addEventListener(
      "click",
      () => {
        $("viewDate").value =
          D.getTodayISO(
            P.settings().project.timezone
          );

        render();
      }
    );

  $("viewDate")
    .addEventListener(
      "change",
      render
    );

  $("fullscreenBtn")
    .addEventListener(
      "click",
      () => {
        if(document.fullscreenElement){
          document.exitFullscreen?.();
        }

        else {
          document.documentElement
            .requestFullscreen?.();
        }
      }
    );

  $("resetRoutine")
    .addEventListener(
      "click",
      () => {
        S.remove(
          `routine:${selectedDate()}`
        );

        render();
      }
    );

  $("addIdea")
    .addEventListener(
      "click",
      () => {
        const input =
          $("ideaInput");

        const text =
          input.value.trim();

        if(!text){
          return;
        }

        const ideas =
          S.getNotNow();

        ideas.push({
          text,
          date: selectedDate()
        });

        S.saveNotNow(ideas);

        input.value = "";

        renderIdeas();
      }
    );

  $("ideaInput")
    .addEventListener(
      "keydown",
      e => {
        if(e.key === "Enter"){
          $("addIdea").click();
        }
      }
    );

  $("viewDate").value =
    D.getTodayISO(
      P.settings().project.timezone
    );

  render();

  refreshPdfReading();

  setInterval(
    refreshPdfReading,
    60000
  );

  document.addEventListener(
    "visibilitychange",
    () => {
      if(!document.hidden){
        refreshPdfReading();
      }
    }
  );

  if(
    "serviceWorker" in navigator &&
    location.protocol.startsWith("http")
  ){
    navigator.serviceWorker
      .register(
        "service-worker.js"
      )
      .catch(() => {});
  }
})();
