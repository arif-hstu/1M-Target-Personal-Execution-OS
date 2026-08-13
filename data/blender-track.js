window.OneMBlenderTrack = {
  version: 2,
  principle: "Premium proof first → then evidence-backed client acquisition. One master production must serve client proof + Ariscope + Arimatic.",
  packages: [
    {
      id: "smart-lock", number: 1, shortTitle: "Häfele Iconic Lock",
      title: "Häfele Iconic Digital Door Lock — Product + Mechanism Launch Package",
      start: "2026-08-13", targetEnd: "2026-09-10",
      objective: "Create the first manufacturer-facing flagship piece that proves premium modelling, materials, lighting, camera work and mechanism explanation.",
      why: "It upgrades the existing door-latch/mechanism strength into a portfolio film using Häfele Iconic as the corrected official reference target.",
      deliverables: [
        "45–60 sec premium landscape product/mechanism film",
        "15–20 sec vertical commercial cut for Arimatic",
        "3 short mechanism/visual hooks for Ariscope",
        "5–8 premium still frames for portfolio/outreach",
        "1 concise client-facing case study",
        "Reusable, organised Blender source project"
      ],
      premiumGate: [
        "Product proportions and moving parts look believable at close range",
        "Materials have controlled roughness, edge response and micro-detail",
        "Lighting shapes the product intentionally and separates it cleanly",
        "Camera motion feels deliberate and premium, not default Blender movement",
        "Mechanism motion is understandable without confusing cuts",
        "Typography/callouts are restrained, aligned and brand-neutral",
        "No visible clipping, flicker, noise, broken reflections or intersections",
        "Edit has a clear reveal → mechanism explanation → premium ending",
        "Sound supports the visuals rather than hiding weak visuals",
        "Final export survives full-screen viewing before publication"
      ]
    },
    {
      id: "industrial-valve", number: 2, shortTitle: "Kirloskar Ball Valve",
      title: "Kirloskar Ball Valve — Technical Product Explainer Package",
      start: "2026-09-13", targetEnd: "2026-10-01",
      objective: "Prove the premium workflow transfers beyond door hardware to industrial manufacturer work: hero product, exploded/cutaway, internal mechanism and technical explanation.",
      why: "A Kirloskar ball-valve reference broadens the client signal while staying inside product + mechanism communication; one catalogue-supported configuration must be locked before modelling.",
      deliverables: [
        "40–60 sec landscape technical product film",
        "Exploded/cutaway internal-parts sequence",
        "Open/close mechanism + simplified flow explanation",
        "15–20 sec vertical commercial cut",
        "3 short clips from the same master production",
        "5–8 premium stills + one portfolio case study"
      ],
      premiumGate: [
        "Construction and moving relationships are visually credible",
        "Metal, polymer and seal materials are clearly differentiated",
        "Hero lighting resembles premium industrial product photography",
        "Exploded view is orderly and technically understandable",
        "Flow visual stays clean and does not become a simulation rabbit hole",
        "Camera transitions preserve technical orientation",
        "Text/callouts use a consistent hierarchy and spacing system",
        "Render/composite is clean at full-screen playback",
        "Landscape and vertical versions are intentionally framed",
        "Portfolio presentation looks like a commissioned brand case study"
      ]
    }
  ],
  sessions: [
    {
      date:"2026-08-13", packageId:"smart-lock", stage:"01 — Creative brief", type:"production", minutes:90,
      title:"Define the Häfele Iconic film before opening a modelling rabbit hole",
      goal:"Finish a one-page production brief and lock the first shot list.",
      blocks:[
        [15,"Lock official reference","Use the Häfele Iconic official page; save exterior/interior views, dimensions, features and both orientation-specific article numbers."],
        [55,"Write the 45–60 sec shot sequence","Plan 6–8 shots: hero reveal → slider/keypad → fingerprint/PIN/RFID → lever/panic exit → high-level auto-lock concept → premium end frame."],
        [20,"Set orientation + quality target","Choose article 912.21.045 right-hand or 912.21.125 left-hand, then record 3 commercial quality references."]
      ],
      doneWhen:"One brief exists with official Häfele source, chosen article/orientation, 6–8 shots, 3 quality references and final-frame concept.",
      avoid:"Do not start detailed modelling tonight."
    },
    {
      date:"2026-08-16", packageId:"smart-lock", stage:"02 — Blockout", type:"production", minutes:90,
      title:"Build the Häfele Iconic blockout and camera-scale test", goal:"Get the exterior/interior panels, door relationship, lever and slider panel for the chosen orientation into one clean scene.",
      blocks:[[10,"Scene setup","Units, collections, naming, official reference planes and neutral door section."],[65,"Blockout","Exterior/interior panels, lever, slider panel and visible door relationship for the chosen orientation."],[15,"Camera test","Create hero and user-action cameras; render low-sample previews."]],
      doneWhen:"The product reads correctly in hero and mechanism views even with grey materials.", avoid:"No tiny screws, fingerprints or texture painting yet."
    },
    {
      date:"2026-08-17", packageId:"smart-lock", stage:"03 — Positioning", type:"sales-content", minutes:110,
      title:"Define who this package will sell to and how Ariscope will explain it", goal:"Build the commercial purpose around the same master animation.",
      blocks:[[35,"Manufacturer research","Collect 8–10 relevant smart-lock/hardware manufacturers or product-animation references."],[35,"Ariscope structure","Outline the mechanism story: what it is → how it moves → what happens internally → final reveal."],[40,"Portfolio positioning","Draft the client-facing case-study intro and one clear service line."]],
      doneWhen:"You have prospect/reference notes, an Ariscope story outline and concise positioning.", avoid:"Do not send broad proposals yet; build evidence first."
    },
    {
      date:"2026-08-18", packageId:"smart-lock", stage:"04 — Production model", type:"production", minutes:90,
      title:"Turn the Häfele Iconic blockout into a clean hero-ready model", goal:"Complete visible exterior geometry and documented visible actions required by the shot list.",
      blocks:[[10,"Topology audit","Identify close-up surfaces and documented moving parts."],[65,"Production model","Refine bevels, gaps, exterior/interior panels, lever and slider; do not invent hidden internals."],[15,"Close-up preview","Use a hard rim light to expose geometry problems."]],
      doneWhen:"Hero close-ups no longer expose obvious blockout geometry.", avoid:"Do not model invisible internals."
    },
    {
      date:"2026-08-20", packageId:"smart-lock", stage:"05 — Materials + lighting", type:"production", minutes:90,
      title:"Build the premium material and studio-lighting base", goal:"Make the smart lock look like a commercial product before animation polishing.",
      blocks:[[30,"Materials","Create controlled metal, black polymer/coating and door materials."],[45,"Lighting","Build hero key/rim/fill setup around form-defining reflections."],[15,"Proof renders","Save 2–3 close-up frames and note defects."]],
      doneWhen:"At least two still frames look portfolio-grade at full size.", avoid:"No random HDRI hunting after the look is working."
    },
    {
      date:"2026-08-23", packageId:"smart-lock", stage:"06 — Mechanism animation", type:"production", minutes:90,
      title:"Animate the documented Häfele Iconic user actions", goal:"Finish clear slider/keypad, lever/panic-exit and high-level auto-lock beats without inventing internal mechanisms.",
      blocks:[[15,"Rig/constraints","Set the documented visible-action pivots and parent relationships cleanly."],[55,"User-action motion","Animate slider/keypad reveal, lever/panic-exit and a high-level auto-lock state with readable timing."],[20,"Camera preview","Test the action sequence and remove anything that suggests unsupported internal engineering."]],
      doneWhen:"A viewer can understand the documented user-facing actions without narration.", avoid:"Do not invent internal motor, electronics or mortise geometry."
    },
    {
      date:"2026-08-25", packageId:"smart-lock", stage:"07 — Hero camera + edit", type:"production", minutes:90,
      title:"Build the premium reveal and first rough edit", goal:"Connect product beauty and technical explanation into one film.",
      blocks:[[30,"Hero motion","Animate one premium reveal and one detail transition."],[40,"Rough edit","Arrange hero + mechanism + feature beats in final order."],[20,"Full-screen review","List only the visible problems that stop the piece feeling premium."]],
      doneWhen:"A complete rough film exists from opening frame to end frame.", avoid:"Do not keep polishing isolated shots without watching the full sequence."
    },
    {
      date:"2026-08-27", packageId:"smart-lock", stage:"08 — Premium QA", type:"production", minutes:90,
      title:"Clear the largest visible defects before final rendering", goal:"Move from good Blender work to credible client-facing work.",
      blocks:[[20,"Gate review","Check geometry, materials, lighting, camera, motion and typography."],[55,"Fix blockers","Work only on the 2–3 defects most damaging at full-screen."],[15,"Proof export","Render representative shots and compare to the selected quality references."]],
      doneWhen:"The piece no longer has a clearly amateur-looking weak point.", avoid:"No new feature ideas."
    },
    {
      date:"2026-08-31", packageId:"smart-lock", stage:"09 — Multi-output", type:"sales-content", minutes:110,
      title:"Convert the same master production into Ariscope, Arimatic and portfolio assets", goal:"Create leverage without making three separate projects.",
      blocks:[[40,"Ariscope","Prepare main technical/mechanism upload structure + 3 short hooks."],[35,"Arimatic","Create the 15–20 sec premium vertical commercial rhythm."],[35,"Portfolio","Choose best stills and draft problem → approach → result case-study copy."]],
      doneWhen:"All three destinations are fed by the same master project.", avoid:"Do not start a new model for channel content."
    },
    {
      date:"2026-09-08", packageId:"smart-lock", stage:"10 — Final package", type:"production", minutes:90,
      title:"Export the Häfele Iconic flagship package and archive it professionally", goal:"Finish Package 1 as a client-ready proof asset.",
      blocks:[[25,"Final gate","Run the full premium checklist."],[45,"Exports","Landscape master, vertical master, short clips and stills."],[20,"Archive","Clean project, assets, filenames and reusable setup."]],
      doneWhen:"Package 1 can be sent to a product company without explanation or apology.", avoid:"Do not start Package 2 until this is genuinely client-presentable."
    },
    {
      date:"2026-09-13", packageId:"industrial-valve", stage:"01 — Brief + technical reference", type:"production", minutes:90,
      title:"Define the Kirloskar Ball Valve flagship story", goal:"Lock one official catalogue-supported configuration, technical story and shot list before modelling.",
      blocks:[[25,"Configuration lock","From Kirloskar official page/catalogue/IOM, record size, class/rating, construction, materials, end connection and operator."],[45,"Shot list","Hero → handle rotation → catalogue-supported ball/cutaway → exploded parts → open/closed/flow → end frame."],[20,"Quality target","Select 3 industrial product-film frames for lighting/material/camera reference."]],
      doneWhen:"The six configuration fields, catalogue source/page, technically coherent brief and shot list exist.", avoid:"Do not invent a hybrid valve from different catalogue variants or turn this into an engineering simulation project."
    },
    {
      date:"2026-09-15", packageId:"industrial-valve", stage:"02 — Model + materials", type:"production", minutes:90,
      title:"Build the hero-ready Kirloskar valve configuration and supported internal parts", goal:"Model only the locked catalogue-supported configuration and what the film needs.",
      blocks:[[15,"Structure","Map body, ball, stem, operator, seats/seals and fasteners to the locked Kirloskar configuration."],[50,"Production geometry","Refine visible form, bores, edges and supported separated parts."],[25,"Materials","Match the locked catalogue material configuration; differentiate metal, polymer/seal and coated surfaces."]],
      doneWhen:"Hero and cutaway views read clearly at close range.", avoid:"No invisible manufacturing detail."
    },
    {
      date:"2026-09-17", packageId:"industrial-valve", stage:"03 — Lighting + mechanism", type:"production", minutes:90,
      title:"Make the valve look premium and technically readable", goal:"Lock hero lighting and open/close mechanism motion.",
      blocks:[[35,"Industrial lighting","Shape metal reflections with controlled highlights."],[40,"Mechanism","Animate handle/stem/ball 90° relationship and open/closed states."],[15,"Proof","Render hero and cutaway previews."]],
      doneWhen:"Beauty and mechanism views both look deliberate and readable.", avoid:"No decorative motion that breaks orientation."
    },
    {
      date:"2026-09-22", packageId:"industrial-valve", stage:"04 — Exploded/cutaway", type:"production", minutes:90,
      title:"Create the signature industrial technical sequence", goal:"Finish a readable exploded/cutaway sequence plus simplified flow explanation.",
      blocks:[[25,"Exploded order","Separate body, ball, stem and seats in a logical axis/order."],[45,"Cutaway + flow","Reveal internal relation and use simple flow indication only where needed."],[20,"Rough edit","Combine hero, mechanism and technical sequence."]],
      doneWhen:"A technical viewer can follow the product without losing orientation.", avoid:"No simulation rabbit hole."
    },
    {
      date:"2026-09-27", packageId:"industrial-valve", stage:"05 — Final edit", type:"production", minutes:90,
      title:"Assemble the complete Package 2 master film", goal:"Get the landscape technical product film into final-candidate state.",
      blocks:[[15,"Output QA","Check missing frames and consistency."],[55,"Edit","Assemble hero, mechanism, exploded/cutaway, flow and end frame."],[20,"Review","Watch full-screen and list must-fix issues only."]],
      doneWhen:"A complete 40–60 sec final candidate exists.", avoid:"Do not judge isolated shots forever."
    },
    {
      date:"2026-09-30", packageId:"industrial-valve", stage:"06 — Publish + outreach", type:"sales-content", minutes:110,
      title:"Publish the proof and begin evidence-backed manufacturer outreach", goal:"Move from portfolio-building to acquisition using the two finished flagship packages.",
      blocks:[[35,"Publish","Host/publish the case study and approved outputs; verify links."],[40,"Outreach","Send 5 personalised high-fit messages using the most relevant flagship visual."],[35,"Pipeline","Log prospect, sent date, follow-up and service offer."]],
      doneWhen:"Two premium packages are viewable and 5 strong prospects received evidence-backed outreach.", avoid:"Do not celebrate by starting a random third animation."
    },
    {
      date:"2026-10-01", packageId:"industrial-valve", stage:"07 — Conversion setup", type:"production", minutes:90,
      title:"Build the simple conversion path around the two flagship packages", goal:"Make proof → offer → next step easy for a prospect.",
      blocks:[[25,"Portfolio order","Lead with the stronger package; use the second as proof of range."],[35,"Offer alignment","Map examples to Mechanism Mini, Product Explainer and Technical Launch Package."],[30,"Response kit","Prepare reusable answers for timeline, CAD, revisions, deliverables and next step."]],
      doneWhen:"A prospect can move from outreach to proof to offer without confusion.", avoid:"Do not build a CRM/app. Keep the pipeline simple."
    }
  ],
  weeklyReview: {
    title:"Friday — 15 min Blender review inside the normal weekly review",
    items:["Did planned sessions happen?","What is the single visible quality weakness?","Is the package on target without stealing Head Teacher study time?","What can be reused instead of rebuilt?","After Package 1: how many high-fit prospects saw the work?"]
  },
  recovery: {
    title:"Saturday — recovery protected",
    detail:"No compulsory Blender production. Put new ideas in the Not-Now list. Premium output depends on sustainable repeat execution, not a seven-night sprint."
  },
  postSprintFallback: {
    production:{title:"Paid delivery first — otherwise improve the strongest client-facing proof",goal:"Use this block on the current paid project. If none exists, improve the strongest proof or build the next piece only after acquisition is active.",minutes:90,blocks:[[10,"Choose bottleneck","Paid deadline/quality defect first; otherwise strongest proof gap."],[65,"Deep execution","One deliverable only. Learn only what the current output requires."],[15,"Ship / record","Render, export, send, publish or leave a precise next action."]],doneWhen:"The current revenue-producing deliverable visibly moved forward."},
    salesContent:{title:"Evidence-backed sales + reuse the current master asset",goal:"Keep personalised acquisition alive while turning existing production into Ariscope/Arimatic/product assets.",minutes:110,blocks:[[50,"Acquisition","Personalised proposals, direct outreach and follow-ups using the strongest case study."],[45,"Reuse","Short, case study, project file or client-facing asset from completed work."],[15,"Pipeline update","Record reply, follow-up and highest-value next action."]],doneWhen:"At least one high-quality acquisition action and one reuse/output action are completed."}
  }
};
