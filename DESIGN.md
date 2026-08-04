<!-- SEED: established with the user before implementation; re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: HYAPACK
description: Sustainable modular protective packaging built from harvested water hyacinth fibre blocks.
---

# Design System: HYAPACK

## Overview

**Creative North Star: "The Specimen & Spec Sheet"**

The user's brief pins the world directly (natural, warm, editorial, cream ground, deep green accents, rounded cards, organic shapes, soft shadows, large product photography) — that palette and register is honored as-is, not re-rolled. What keeps it from reading as a generic eco-startup template is a second, borrowed grammar running underneath it: the vocabulary of a **botanical specimen label crossed with an engineering spec sheet**. HYAPACK's product itself reinforces this now that it's modular — a kit of standardised, catalog-able fibre blocks (columns, panels, bases, connectors) that get arranged per product, much like parts in a spec sheet. Every place the site needs to prove sourcing, traceability, or manufacturability, it borrows engineering-drawing conventions: thin rule lines, small-caps monospace labels, dimension tick marks, catalog-style field/value pairs (HARVESTED — Bang Sai, Ayutthaya / SYSTEM — Modular fibre block kit). The rest of the page — hero, lifecycle story, gallery, team — stays in the warm editorial register the brief asked for. The two registers meet at soft, rounded card edges: never a hard blueprint-blue panel, always cream-and-fibre-toned.

This is an overview/persuade surface for B2B packaging buyers: it must read as credible material engineering, not a craft souvenir page and not a vague greenwashing pitch. Photography carries the proof; the specimen/spec-label system carries the credibility.

**Key Characteristics:**
- Cream page ground, deep forest-green headlines, muted sage and warm beige as supporting fields — never a stark white SaaS background.
- Large, real product photography (the supplied modular-block/assembly/team images) as the primary evidence, not illustration.
- A recurring "spec label" treatment (small-caps mono, thin rules, field/value pairs) marks technical and traceability content specifically — it is a signature detail, not the whole page's voice.
- Rounded, soft-shadowed cards throughout; one organic leaf/flower silhouette motif echoing the logo's water-hyacinth flower, used sparingly as a background accent, never as a generic icon-in-circle grid.
- Confirmed and softened claims only (see PRODUCT.md); nothing stated as certified or guaranteed.

## Colors

Palette strategy: **Full palette** — cream, sage, beige, forest-green and a fibre-brown/copper accent each hold a named role; no single accent is drenched.

### Primary
- **Forest Deep** (#1F3A2E): headline text, primary nav, primary button fill, the color the logo's mark and wordmark use.

### Secondary
- **Copper Fibre** (#95502A): the technical/spec-label accent — dimension ticks, rule lines, field labels in the CAD and traceability sections, echoing the real copper pump hardware in the product photos (darkened from the hardware's literal tone to clear 4.5:1 text contrast on Cream/White). Used sparingly; never as a large fill.

### Tertiary
- **Sage Fibre** (#8FA179): secondary section backgrounds and card fills, matched to the actual fibre block color; carries the "material" feeling into flat UI surfaces.

### Neutral
- **Cream Paper** (#F7F2E7): page background.
- **Warm Beige** (#ECE1CB): alternating section backgrounds, card fields.
- **Ink Warm** (#2B2620): body copy (never pure black).
- **White** (#FFFFFF): image mattes, form fields.

### Named Rules
**The Two-Register Rule.** Warm editorial colors (cream/sage/beige/forest) own every section by default. Copper appears only where content is technical, sourced, or traceable (CAD callouts, batch/provenance labels, tooling notes) — it is the tell that this specific content is engineering fact, not marketing copy.

## Typography

**Display Font:** Petrona (serif, with Georgia fallback)
**Body Font:** Work Sans (humanist sans, with system-ui fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace fallback)

**Character:** Petrona gives headlines an editorial, slightly botanical warmth without leaning on the overused Fraunces/Playfair display-serif default. Work Sans stays clean and highly legible for long-form sustainability and technical copy. JetBrains Mono is reserved entirely for the spec-label system — dimension callouts, batch/traceability fields, catalog numbers — so its appearance itself signals "this is a verifiable fact."

### Hierarchy
- **Display** (Petrona, 600, clamp(2.75rem, 5vw + 1rem, 4.75rem), 1.05): hero headline only.
- **Headline** (Petrona, 600, clamp(2rem, 2.5vw + 1rem, 3rem), 1.1): section titles (Our Material, Product Lifecycle, Technical Design, etc.).
- **Title** (Work Sans, 600, 1.375rem, 1.3): card titles, lifecycle stage names.
- **Body** (Work Sans, 400, 1.0625rem, 1.65, max 68ch): paragraph copy.
- **Label** (JetBrains Mono, 500, 0.75rem, letter-spacing 0.08em, uppercase): spec/traceability field labels only (e.g. "HARVESTED", "BATCH", "MATERIAL").

### Named Rules
**The Mono-Means-Fact Rule.** JetBrains Mono never appears in marketing copy, only in labeled technical/provenance fields. If a sentence is persuasive rather than verifiable, it is never set in mono.

## Layout

Editorial single-column reading flow at max-width ~1180px, generous section padding (clamp(5rem, 8vw, 8rem) vertical). Content sections alternate cream and warm-beige backgrounds to create rhythm without hard dividers. The technical/CAD section and the sourcing/traceability section break the single column into a two-pane spec-sheet layout (image/diagram left, field/value label stack right) echoing the real CAD drawing's title-block convention. Mobile collapses every two-pane section to a single stacked column, image first, labels beneath as a bordered field list. Generous white/cream space is treated as a deliberate material (paper margin), not empty space to fill.

## Elevation & Depth

Soft and ambient, never structural. Cards lift with a diffuse, warm-toned shadow suggesting paper resting on a table, not UI chrome floating in space. Nothing uses a hard, cool-gray drop shadow.

### Shadow Vocabulary
- **card-rest** (`box-shadow: 0 1px 2px rgba(31,58,46,0.06), 0 12px 32px -12px rgba(31,58,46,0.18)`): default card/photo elevation.
- **card-hover** (`box-shadow: 0 2px 4px rgba(31,58,46,0.08), 0 20px 40px -14px rgba(31,58,46,0.24)`): hover lift on interactive cards.

### Named Rules
**The Paper-Not-Glass Rule.** Shadows are warm (tinted toward forest-green-black, never cool gray) and diffuse, as if the elevated object is fibre or paper on a table, never glossy glass.

## Shapes

Gently rounded corners throughout (18–28px on cards and photos, 999px/pill only on buttons and small tags). One recurring organic silhouette — a single simplified water-hyacinth leaf/flower form drawn from the logo — appears as a large, low-opacity background accent behind the hero and section transitions; it is never repeated as a small icon-in-circle grid. Technical/spec panels keep straight edges and thin 1px rule lines internally (the CAD register), nested inside an outer rounded card (the editorial register) — the meeting of the two registers is always "straight lines inside a soft card," never the reverse.

## Components

### Buttons
- **Shape:** pill (999px radius), generous horizontal padding (2rem+).
- **Primary:** Forest Deep (#1F3A2E) fill, Cream Paper text, Work Sans 600.
- **Hover / Focus:** fill shifts to a slightly lighter forest tone, 2px lift, focus-visible gets a 3px Copper Fibre outline offset 2px.
- **Secondary / Ghost:** 1.5px Forest Deep border, transparent fill, Forest Deep text; hover fills to Forest Deep at 8% opacity.

### Cards / Containers
- **Corner Style:** 20–24px radius.
- **Background:** Cream Paper or Warm Beige, alternating by section.
- **Shadow Strategy:** `card-rest` at rest, `card-hover` on hover (interactive cards only).
- **Border:** none by default; technical/spec cards get a 1px Copper Fibre (12% opacity) inner rule instead of an outer border.

### Spec Label (signature component)
Small-caps JetBrains Mono field/value pairs used for provenance and technical facts (e.g. `HARVESTED — Bang Sai, Ayutthaya`, `MATERIAL — Water Hyacinth Pulp`, `BATCH — WH-TRAY-01`). Field name in Copper Fibre at 0.7rem tracked uppercase, value in Ink Warm directly beside or beneath, separated by a thin 1px rule. Always inside a rounded outer card, never floating directly on the page background.

### Navigation
- Cream Paper background, Forest Deep wordmark + logo mark, Work Sans 500 links with a 2px Copper Fibre underline on hover/active (not a background pill). Mobile collapses to a full-height cream drawer with the same link treatment stacked and enlarged.

## Do's and Don'ts

### Do:
- **Do** use real supplied photography at large scale for every product/team claim; treat photos as the primary evidence, not decoration.
- **Do** reserve JetBrains Mono and Copper Fibre for genuinely technical/traceability content.
- **Do** keep every environmental/social claim in the softened phrasing PRODUCT.md specifies.

### Don't:
- **Don't** add generic leaf-in-circle icon grids or gradient-blob illustrations; the one water-hyacinth silhouette motif is the only decorative organic shape.
- **Don't** invent stock photography, testimonials, certifications, pricing, or team names/titles — use clearly labeled placeholders instead.
- **Don't** let the spec-label/mono register bleed into hero or persuasive copy; it marks fact, not tone.
