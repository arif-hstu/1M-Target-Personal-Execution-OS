# 1M Target — Personal Execution OS

A self-contained, roadmap-driven GitHub Pages web app for the 3-year **Debt-free + ৳10,00,000 liquid cash** execution plan.

## What this project does

- Detects the current date in **Asia/Dhaka** by default.
- Selects the current strategic phase automatically.
- Generates the daily routine from that phase.
- Keeps the **7-day office** pattern and **Saturday recovery evening** used in the supplied routine.
- Changes from Head Teacher exam preparation to Blender/commercial work after the exam window.
- Shows the first 12 months of roadmap deliverables and financial targets.
- Shows 3-year strategic phases, focus-area timeline, milestones and cash hierarchy.
- Stores daily checkboxes, Not-Now ideas, weekly review answers and optional private metrics in the browser only.
- Lets you change the estimated Head Teacher exam dates later without editing every page.
- Works without frameworks, external fonts, analytics or third-party libraries.
- Includes a service worker so the deployed site can work offline after it has been loaded once.

## Important source-fidelity rule

The underlying roadmap gives an exact clock routine only for the first ~8-week examination sprint. It explicitly says that after the examination **at least 10–12 weekly study hours should move into Blender production, outreach and digital products**.

Therefore:

- **Phase 1** is a close adaptation of the supplied daily-routine HTML.
- **Post-exam clock schedules** are clearly labelled operational adaptations derived from the roadmap's priorities and time reallocation.
- The app does **not invent month-by-month targets after July 2027**, because the roadmap only gives broad Year 2 and Year 3 objectives there.
- The Head Teacher exam dates remain an estimate until you confirm the official BPSC schedule in **Settings**.

## Files

```text
1M-Target-Personal-Execution-OS/
├── index.html                 # Dynamic Today dashboard
├── timeline.html              # Dynamic 3-year roadmap
├── review.html                # Weekly review + local private metrics
├── settings.html              # Exam date / phase overrides
├── css/app.css
├── data/
│   ├── settings.js            # Defaults
│   ├── roadmap.js             # Main source of truth
│   ├── routines.js            # Phase-specific daily routines
│   └── milestones.js
├── js/
│   ├── date-utils.js
│   ├── storage.js
│   ├── phase-engine.js
│   ├── routine-engine.js
│   ├── app.js
│   ├── timeline.js
│   ├── review.js
│   └── settings-page.js
├── assets/icon.svg
├── legacy/
│   ├── Phase1_Daily_Routine_Reference.html
│   └── Execution_Timeline_Reference.html
├── manifest.webmanifest
├── service-worker.js
└── .nojekyll
```

## Deploy to GitHub Pages

### Easiest method

1. Create a new GitHub repository, for example `1m-target`.
2. Upload **all files and folders from this project directory** to the repository root.
3. Commit the files.
4. Open the repository's **Settings → Pages**.
5. Choose deployment from the `main` branch and the repository root if GitHub presents that option.
6. Wait for GitHub Pages to publish the site.
7. Open the generated Pages address.

The site uses only relative paths, so it is suitable for a normal project URL such as:

```text
https://YOUR-USERNAME.github.io/1m-target/
```

### Git command method

From inside this project folder:

```bash
git init
git add .
git commit -m "Initial 1M Target execution OS"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/1m-target.git
git push -u origin main
```

Then enable GitHub Pages in the repository settings.

## How the phase engine works

Default phase sequence:

1. **Head Teacher Examination Sprint** — 7 Aug 2026 until the day before the configured exam.
2. **Head Teacher Exam Window** — configured exam start through end.
3. **Post-Exam Blender Reallocation** — day after exam through 6 Dec 2026.
4. **Client Acquisition & First Projects** — 7 Dec 2026 through 6 Apr 2027.
5. **Year 1 — Scale Projects & Pricing** — 7 Apr through 6 Aug 2027.
6. **Year 2 — Debt-Free + Revenue Scale** — 7 Aug 2027 through 6 Aug 2028.
7. **Year 3 — ৳10 Lakh Target Window** — 7 Aug 2028 through 6 Feb 2029.
8. **Consolidate & Build Resilience** — 7 Feb through 6 Aug 2029.

You can use the date picker on the **Today** page to test any future date and see the routine change immediately.

## Updating the official Head Teacher exam date

Open **Settings** in the deployed app:

1. Change Exam start date.
2. Change Exam end date.
3. Tick **Official schedule confirmed** only after verification.
4. Save.

Those values are stored in that browser's localStorage and the daily phase changes automatically.

If you want the same exam date hard-coded for every device, update this block in `data/settings.js` and commit it:

```js
exam: {
  estimatedStart: "2026-10-07",
  estimatedEnd: "2026-10-08",
  confirmed: false
}
```

## Cross-device progress

The website itself is accessible from any device after deployment. However, browser-local data does not automatically sync between devices:

- daily checkboxes
- Not-Now list
- weekly reviews
- optional cash/debt metrics
- local settings overrides

This is intentional for Version 1: **no backend, no account, no tracking, and no private financial data in GitHub**.

A future Version 2 can add authenticated sync through a backend such as Supabase or another private service.

## Privacy warning

If the GitHub repository or Pages site is public, anything committed into the source files can be read by other people. Do **not** commit:

- passwords or API tokens
- bank/account numbers
- exact private financial balances unless you intentionally want them public
- confidential family or health information

The current project keeps optional personal progress metrics in browser localStorage instead.

## Updating roadmap logic later

The main file to edit is:

```text
data/roadmap.js
```

For routine changes:

```text
data/routines.js
```

This separation is deliberate: the roadmap is the strategic source of truth; the daily routine is generated from the active phase.
