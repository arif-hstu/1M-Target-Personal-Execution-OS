# Blender Reference Products — Official Source Lock

Updated: **13 Aug 2026**

This file records the corrected official reference targets for the first two Blender flagship/spec-animation packages. It prevents future AI assistants from restoring superseded products or inventing an unsupported product configuration.

## Decision

Keep the two strategic categories: smart digital mortise lock + industrial ball valve.

Use these corrected manufacturer references:

1. **Häfele Iconic Digital Door Lock** — article **912.21.045** for right-hand opening or **912.21.125** for left-hand opening.
2. **Kirloskar Ball Valve** — official product line; lock one catalogue-supported size/class/material/end-connection configuration during the Package 2 reference brief.

Both portfolio pieces are **self-initiated/unofficial spec animations**. They are not commissioned, sponsored, approved or certified by Häfele or Kirloskar Brothers Limited.

---

## Package 1 — Häfele Iconic Digital Door Lock

Portfolio working title:

> **Premium Digital Door Lock — Unofficial Spec Animation**  
> Reference product: Häfele Iconic Digital Door Lock

### Official source

- Product page: https://home.hafeleindia.com/products/iconic-digital-door-lock

### Why this lock

Häfele's official page gives a specific premium product, two orientation-specific article numbers, exterior and interior panel dimensions, door-thickness range, material/finish, access modes, locking modes and visible user-facing actions.

Documented reference facts include:

- zinc-alloy exterior/interior panels,
- antique-copper finish,
- heavy-duty mortise lock and multiple safety bolts,
- PIN, fingerprint, RFID card, key fob and Häfele Smart Living App access,
- smart slider panel over the keypad,
- auto, passage and privacy locking modes,
- panic exit by pulling down the inside lever,
- exterior panel: **80 × 396 × 87 mm**,
- interior panel: **80 × 396 × 93.5 mm**,
- supported door thickness: **40–110 mm**.

### Orientation rule

Choose one official article before detailed modelling:

- **912.21.045** — right-hand opening
- **912.21.125** — left-hand opening

Record the chosen orientation in the brief, reference-board filename and Blender project filename.

### Animation scope

Useful documented/defensible beats include:

- premium exterior hero reveal,
- slider panel revealing the keypad,
- fingerprint/PIN/RFID interaction,
- lever action and panic-exit concept,
- auto-locking concept at a high level,
- premium final commercial frame.

Do **not** invent undocumented motor, electronics or internal mortise geometry and present it as manufacturer fact.

---

## Package 2 — Kirloskar Ball Valve

Portfolio working title:

> **Industrial Ball Valve — Unofficial Spec Animation**  
> Reference manufacturer/product line: Kirloskar Ball Valve

### Official sources

- Product page: https://www.kirloskarpumps.com/valve/ball-valve
- Product catalogue: https://www.kirloskarpumps.com/wp-content/uploads/2026/07/Ball-Valve-Catalogue.pdf
- Installation/operation/maintenance manual: https://www.kirloskarpumps.com/wp-content/uploads/2022/12/Ball-Valve.pdf

### Why this reference

Kirloskar Brothers Limited provides an official ball-valve product page, catalogue and IOM manual. The product page states that the line is designed/manufactured to **IS 9890 / BS EN ISO 17292 (BS 5351)** and tested to **BS 6755-1 / BS EN 12266 / API 598 / IS 6157**.

This is an official product line rather than one uniquely identified SKU. That means the artist must not combine attractive features from different catalogue variants into one unsupported model.

### Configuration lock required on 13 Sep

Before detailed modelling, record one catalogue-supported combination of:

- nominal size,
- pressure class/rating,
- body construction,
- body/trim/seat material,
- end connection,
- handle or operator type.

The reference brief is incomplete until those six fields and their catalogue page/source are recorded.

### Animation scope

After the configuration is locked, useful beats may include:

- premium industrial hero presentation,
- quarter-turn handle/stem/ball relationship,
- open versus closed state,
- catalogue-supported cutaway/exploded component story,
- simplified illustrative flow path,
- premium industrial final frame.

Do not make unsupported CFD, pressure-performance or engineering-certification claims. Model and animate your own portfolio assets; do not redistribute manufacturer files.

---

## Permanent portfolio disclosure

Use wording similar to:

> **Unofficial self-initiated spec animation / portfolio study. Created independently for 3D product-animation demonstration. Not commissioned, sponsored, approved or endorsed by the referenced manufacturer. Product names and public documentation are used only to identify the reference subject.**

The exact wording can be shortened for the visual piece, but the meaning must remain clear.

## Future AI instruction

Before changing Package 1 or Package 2, read:

1. `README.md`
2. `BLENDER_FUTURE_PLAN.md`
3. `BLENDER_REFERENCE_PRODUCTS.md`
4. `data/blender-reference-products.js`
5. current `blender.html`
6. `data/blender-track.js`

The current decision is **Häfele + Kirloskar**. Do not restore superseded references. Replace either current target only when there is a concrete production, documentation, licensing or client-acquisition reason, and record that decision in every source-of-truth file.
