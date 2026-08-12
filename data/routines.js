window.OneMRoutines = {
  shared: {
    wake: {
      id: "wake",
      time: "05:45–06:10",
      title: "Wake • prayer • water • brief movement — NO browsing",
      detail: "Start without feeds, random research or messaging loops."
    },

    office: {
      id: "office",
      time: "08:00–17:00",
      title: "OFFICE DUTY FIRST",
      detail: "Personal study/work only in genuinely permitted free periods. Employer responsibilities always take priority."
    },

    family: {
      id: "family",
      time: "17:30–20:00",
      title: "Family • food • rest • protected family block",
      detail: "Include a 20–30 minute walk/exercise on at least five days per week."
    },

    scorecard: {
      id: "scorecard",
      time: "21:50–22:00",
      title: "10-minute scorecard + prepare tomorrow's FIRST task",
      detail: "Record focused work completed. New ideas go to the Not-Now List."
    },

    shutdown: {
      id: "shutdown",
      time: "22:00–22:30",
      title: "Screen-free wind-down • devices out of bed",
      detail: "Target sleep: 22:30 → 05:45 = 7h 15m."
    }
  },

  phases: {

    // ====================================================================
    // PHASE 1 — HEAD TEACHER EXAM SPRINT
    // PDF-study tracking belongs here.
    // Daily configured PDF-study target:
    // Minimum = 90 + 30 + 60 = 180 min
    // Maximum = 90 + 30 + 75 = 195 min
    // ====================================================================

    "exam-sprint": {
      sourceStatus: "Source-faithful Phase 1 routine",

      morning: {
        id: "deepstudy",
        time: "06:10–07:40",
        title: "HEAD TEACHER — 90 min deep study",
        detail: "Hardest topic first. One syllabus source + one question bank. No resource switching.",
        tracking: "pdf-study",
        trackingLabel: "Morning deep study",
        targetMinMinutes: 90,
        targetMaxMinutes: 90
      },

      midday: {
        id: "midday",
        time: "MIDDAY",
        title: "30 min Head Teacher review",
        detail: "Recall + previous errors. Avoid passive re-reading.",
        tracking: "pdf-study",
        trackingLabel: "Midday review",
        targetMinMinutes: 30,
        targetMaxMinutes: 30
      },

      afternoon: {
        id: "afternoon",
        time: "AFTERNOON",
        title: "60–75 min timed questions in a permitted free block",
        detail: "If office work prevents it, do not steal employer time; recover only if practical.",
        tracking: "pdf-study",
        trackingLabel: "Timed questions",
        targetMinMinutes: 60,
        targetMaxMinutes: 75
      },

      evenings: {
        0: [
          "Blender production",
          "BLENDER — 90 min paid delivery / strongest portfolio mechanism",
          "Paid work first. Otherwise build the most commercially useful technical/mechanism portfolio piece."
        ],

        1: [
          "Sales + Ariscope",
          "SALES — 60 min proposals/outreach + 50 min Ariscope",
          "Personalise every proposal. Use the remaining block for a client-relevant Ariscope asset."
        ],

        2: [
          "Blender production",
          "BLENDER — 90 min paid delivery / portfolio production",
          "Finish and ship. Learn only what the current deliverable requires."
        ],

        3: [
          "Sales + Ariscope",
          "SALES — 60 min proposals/direct outreach + 50 min Ariscope",
          "Prioritise manufacturers, technical educators, machinery, poultry/agri/veterinary and product-animation opportunities."
        ],

        4: [
          "Blender production",
          "BLENDER — 90 min paid delivery / mechanism portfolio",
          "Aim for work reusable as YouTube, Shorts, portfolio and a sellable file."
        ],

        5: [
          "Finance + Ponnora",
          "WEEKLY REVIEW — 45 min finance + 60 min Ponnora",
          "Check cash, debt, proposals, revenue and focused hours. Ponnora gets one maximum-value commercial task."
        ],

        6: [
          "Recovery evening",
          "RECOVERY — family, decompression, optional light revision only",
          "No paid work or side-project pressure tonight. Keep the office day, then protect recovery and sleep."
        ]
      }
    },

    // ====================================================================
    // EXAM WINDOW
    // No fixed PDF target because the official examination schedule controls.
    // ====================================================================

    "exam-window": {
      sourceStatus: "Exam-day adaptation; official schedule prevails",

      morning: {
        id: "exam-prep",
        time: "06:10–07:40",
        title: "EXAM MODE — light recall / logistics only",
        detail: "Do not start new material. Follow the official exam venue and reporting time if the exam is actually scheduled today."
      },

      midday: {
        id: "exam-midday",
        time: "MIDDAY",
        title: "Exam / travel / recovery according to official schedule",
        detail: "The roadmap does not prescribe an exact exam-day clock."
      },

      afternoon: {
        id: "exam-afternoon",
        time: "AFTERNOON",
        title: "Protect energy; no forced side-project catch-up",
        detail: "If the exam is not actually on this date, update the exam dates in Settings."
      },

      evenings: {
        0: [
          "Exam recovery",
          "RECOVERY — family + early sleep",
          "No side-project pressure."
        ],

        1: [
          "Exam recovery",
          "RECOVERY — family + early sleep",
          "No side-project pressure."
        ],

        2: [
          "Exam recovery",
          "RECOVERY — family + early sleep",
          "No side-project pressure."
        ],

        3: [
          "Exam recovery",
          "RECOVERY — family + early sleep",
          "No side-project pressure."
        ],

        4: [
          "Exam recovery",
          "RECOVERY — family + early sleep",
          "No side-project pressure."
        ],

        5: [
          "Exam recovery",
          "RECOVERY — family + early sleep",
          "No side-project pressure."
        ],

        6: [
          "Recovery evening",
          "RECOVERY — family + early sleep",
          "Saturday remains protected."
        ]
      }
    },

    // ====================================================================
    // POST-EXAM PORTFOLIO
    // The former exam hours are now reallocated to Blender / commercial work.
    // Therefore NO pdf-study tracking metadata exists here.
    // ====================================================================

    "post-exam-portfolio": {
      sourceStatus: "Derived clock routine from roadmap's explicit +10–12 h reallocation",

      morning: {
        id: "blender-deep",
        time: "06:10–07:40",
        title: "BLENDER — deep production / portfolio / paid delivery",
        detail: "Use the former exam deep-work block to build commercial output. Paid work first; otherwise portfolio repositioning."
      },

      midday: {
        id: "pipeline",
        time: "MIDDAY",
        title: "30 min client pipeline / follow-up / product notes",
        detail: "Small commercial actions only; avoid turning this into general learning."
      },

      afternoon: {
        id: "commercial-block",
        time: "AFTERNOON",
        title: "60–75 min Blender / outreach in a permitted free block",
        detail: "Production, personalised proposals, direct outreach or a sellable digital-product task."
      },

      evenings: {
        0: [
          "Blender delivery",
          "BLENDER — paid delivery / portfolio finishing",
          "Finish and publish a commercially useful mechanism/product piece."
        ],

        1: [
          "Sales",
          "SALES — personalised proposals + direct outreach",
          "Track opportunities, replies and follow-ups."
        ],

        2: [
          "Blender production",
          "BLENDER — modelling / animation / delivery",
          "One active deliverable; no tutorial rabbit holes."
        ],

        3: [
          "Ariscope + product",
          "ARISCOPE / PRODUCT — reuse the current model",
          "Create a major asset, Shorts, case study or sellable file from work already done."
        ],

        4: [
          "Blender production",
          "BLENDER — strongest revenue-producing task",
          "Paid client work first; otherwise offer/portfolio evidence."
        ],

        5: [
          "Review + Ponnora",
          "WEEKLY REVIEW — finance + controlled Ponnora task",
          "Ponnora remains a small validated experiment, not a competing full-time project."
        ],

        6: [
          "Recovery evening",
          "RECOVERY — family, decompression, early sleep",
          "No paid work or side-project pressure tonight."
        ]
      }
    },

    // ====================================================================
    // CLIENT ACQUISITION
    // ====================================================================

    "client-acquisition": {
      sourceStatus: "Roadmap KPI-driven routine",

      morning: {
        id: "revenue-deep",
        time: "06:10–07:40",
        title: "REVENUE DEEP WORK — paid Blender delivery or strongest portfolio proof",
        detail: "If a client deadline exists, deliver. Otherwise create the evidence needed to win the next client."
      },

      midday: {
        id: "sales-followup",
        time: "MIDDAY",
        title: "30 min proposal follow-up / lead review",
        detail: "Maintain the 20–25 personalised proposals + 10 direct-outreach weekly funnel."
      },

      afternoon: {
        id: "sales-or-production",
        time: "AFTERNOON",
        title: "60–75 min sales or production in permitted office downtime",
        detail: "Choose the bottleneck: proposals if pipeline is weak; delivery if work is sold."
      },

      evenings: {
        0: [
          "Delivery",
          "BLENDER — paid project delivery",
          "Protect quality and deadlines."
        ],

        1: [
          "Acquisition",
          "SALES — proposals + direct outreach",
          "Personalised messages only; no proposal bots."
        ],

        2: [
          "Delivery",
          "BLENDER — client work / strong case study",
          "Create a result that can generate repeat business."
        ],

        3: [
          "Ariscope + product",
          "ARISCOPE / DIGITAL PRODUCT",
          "Publish client-relevant content or improve a small sellable product."
        ],

        4: [
          "Acquisition + pricing",
          "SALES — follow-up, calls, offers, pricing",
          "Aim for serious discussions and repeat/recurring work."
        ],

        5: [
          "Review + Ponnora",
          "WEEKLY REVIEW — funnel + finance + one Ponnora task",
          "Change portfolio/opening lines if proposal response stays below 10% after enough data."
        ],

        6: [
          "Recovery evening",
          "RECOVERY — family, decompression, early sleep",
          "No paid work or side-project pressure tonight."
        ]
      }
    },

    // ====================================================================
    // YEAR 1 SCALE
    // ====================================================================

    "year1-scale": {
      sourceStatus: "Roadmap April–July operating-plan routine",

      morning: {
        id: "high-value-delivery",
        time: "06:10–07:40",
        title: "HIGH-VALUE BLENDER — delivery / retainer / higher-ticket work",
        detail: "Raise the value of existing capability rather than collecting new unrelated skills."
      },

      midday: {
        id: "pipeline-scale",
        time: "MIDDAY",
        title: "30 min pipeline + client follow-up",
        detail: "Prioritise repeat clients, retainers, agency subcontracting and higher-value opportunities."
      },

      afternoon: {
        id: "scale-block",
        time: "AFTERNOON",
        title: "60–75 min delivery / sales / product library in permitted downtime",
        detail: "Remove low-margin work and strengthen the technical niche."
      },

      evenings: {
        0: [
          "High-value delivery",
          "BLENDER — highest-value active client task",
          "Protect margin and reliability."
        ],

        1: [
          "Pipeline",
          "SALES — retainer / agency / manufacturer outreach",
          "Prefer fewer high-fit opportunities over generic volume."
        ],

        2: [
          "Delivery",
          "BLENDER — complete and ship",
          "Turn finished work into a reusable case study."
        ],

        3: [
          "Ariscope",
          "ARISCOPE — technical niche library / third product path",
          "One model, multiple outputs."
        ],

        4: [
          "Pricing + product",
          "PRICING / PRODUCT — improve offer economics",
          "Raise price for new clients when evidence supports it."
        ],

        5: [
          "Weekly control",
          "FINANCE + KPI REVIEW + controlled Ponnora",
          "Confirm debt, cash, margin and revenue run-rate."
        ],

        6: [
          "Recovery evening",
          "RECOVERY — family, decompression, early sleep",
          "Saturday recovery remains protected."
        ]
      }
    },

    // ====================================================================
    // YEAR 2 SCALE
    // ====================================================================

    "year2-scale": {
      sourceStatus: "Derived daily structure from broad Year 2 roadmap objective",

      morning: {
        id: "year2-deep",
        time: "06:10–07:40",
        title: "REVENUE ENGINE — high-value delivery / sales asset / product",
        detail: "Year 2 is about clearing final debt and scaling pricing, products and YouTube revenue."
      },

      midday: {
        id: "year2-pipeline",
        time: "MIDDAY",
        title: "30 min pipeline / client / product follow-up",
        detail: "Choose the action most likely to improve revenue quality or repeatability."
      },

      afternoon: {
        id: "year2-scale-block",
        time: "AFTERNOON",
        title: "60–75 min scalable commercial work in permitted downtime",
        detail: "Paid delivery, retained clients, product library, Ariscope distribution or proven tech-service delivery."
      },

      evenings: {
        0: [
          "Client revenue",
          "HIGH-VALUE CLIENT DELIVERY",
          "Focus on quality, price and repeatability."
        ],

        1: [
          "Acquisition",
          "PIPELINE — high-fit outreach / follow-up",
          "Avoid dependency on one client; keep acquisition alive."
        ],

        2: [
          "Product leverage",
          "DIGITAL PRODUCT / reusable Blender asset",
          "Build revenue that can sell more than once."
        ],

        3: [
          "Ariscope",
          "ARISCOPE — audience + client proof",
          "Content should support products, client leads or both."
        ],

        4: [
          "Systems",
          "DELIVERY SYSTEM / selective tech-service work",
          "Systemise only work already proven useful or paid."
        ],

        5: [
          "Financial control",
          "WEEKLY REVIEW — debt + liquid cash + revenue quality",
          "Direct extra cash according to the roadmap cash hierarchy."
        ],

        6: [
          "Recovery evening",
          "RECOVERY — family, decompression, early sleep",
          "Saturday recovery remains protected."
        ]
      }
    },

    // ====================================================================
    // YEAR 3 — TARGET
    // ====================================================================

    "year3-target": {
      sourceStatus: "Derived daily structure from early Year 3 target objective",

      morning: {
        id: "year3-deep",
        time: "06:10–07:40",
        title: "TOP REVENUE TASK — protect the monthly net-contribution engine",
        detail: "Prioritise high-ticket client work, recurring revenue, products and efficient delivery."
      },

      midday: {
        id: "year3-check",
        time: "MIDDAY",
        title: "30 min pipeline / leverage check",
        detail: "Keep future revenue visible; do not coast because prior months were strong."
      },

      afternoon: {
        id: "year3-scale-block",
        time: "AFTERNOON",
        title: "60–75 min highest-leverage work in permitted downtime",
        detail: "Client delivery, sales, product leverage or documented delegation/system work."
      },

      evenings: {
        0: [
          "High-ticket delivery",
          "CLIENT DELIVERY — highest-value commitment",
          "Protect reputation and margin."
        ],

        1: [
          "Pipeline",
          "SALES — next-month pipeline",
          "Maintain diversified demand."
        ],

        2: [
          "Products",
          "PRODUCT / ARISCOPE LEVERAGE",
          "Strengthen assets that can generate repeat revenue."
        ],

        3: [
          "Systems",
          "SYSTEMISE / DELEGATE carefully",
          "Only after the underlying work is profitable and repeatable."
        ],

        4: [
          "Goal contribution",
          "REVENUE + CASH-GOAL TASK",
          "Choose the action most likely to protect the target contribution."
        ],

        5: [
          "Financial review",
          "WEEKLY REVIEW — liquid cash + client concentration + target gap",
          "Avoid lifestyle inflation and track progress to the resilient target."
        ],

        6: [
          "Recovery evening",
          "RECOVERY — family, decompression, early sleep",
          "Saturday recovery remains protected."
        ]
      }
    },

    // ====================================================================
    // CONSOLIDATION
    // ====================================================================

    "consolidate": {
      sourceStatus: "Derived daily structure from remaining Year 3 resilience objective",

      morning: {
        id: "resilience-deep",
        time: "06:10–07:40",
        title: "RESILIENCE — high-value work / systems / long-term asset",
        detail: "Protect earning power without turning success into uncontrolled expansion."
      },

      midday: {
        id: "resilience-check",
        time: "MIDDAY",
        title: "30 min operational check",
        detail: "Client pipeline, reserve, systems or one documented improvement."
      },

      afternoon: {
        id: "resilience-block",
        time: "AFTERNOON",
        title: "60–75 min high-leverage work in permitted downtime",
        detail: "Keep income diversified and processes documented."
      },

      evenings: {
        0: [
          "Revenue maintenance",
          "HIGH-VALUE DELIVERY / CLIENT RELATIONSHIP",
          "Keep strong revenue sources healthy."
        ],

        1: [
          "Pipeline",
          "SELECTIVE ACQUISITION",
          "Replace churn without overloading capacity."
        ],

        2: [
          "Assets",
          "ARISCOPE / PRODUCT ASSET",
          "Build durable assets rather than random projects."
        ],

        3: [
          "Systems",
          "DOCUMENT / DELEGATE / IMPROVE",
          "Use technology only when it reduces real recurring work."
        ],

        4: [
          "Long-term growth",
          "LEADERSHIP / MENTORING / STRATEGIC WORK",
          "Remain focused on durable value."
        ],

        5: [
          "Resilience review",
          "WEEKLY REVIEW — reserve + diversification + family goals",
          "Separate emergency cash, near-term goals and longer-term regulated investments only after appropriate review."
        ],

        6: [
          "Recovery evening",
          "RECOVERY — family, decompression, early sleep",
          "Saturday recovery remains protected."
        ]
      }
    }
  }
};
