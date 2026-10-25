# Homepage design QA

final result: passed

## Evidence and scope

- Source visual truth: `qa/reference-homepage.png`, copied from the user's `humus_homepage_mockup.png` (1440 × 3560 pixels).
- Source content: the user's `Website final.docx`; implementation scope and factual constraints from the attached homepage brief.
- Implementation: local production build at `http://127.0.0.1:3000/`.
- Browser: isolated headless Google Chrome using its DevTools protocol; the in-app browser was not exposed in this environment.
- State: homepage, default light appearance, navigation closed except for the explicit menu capture. Reduced motion was enabled during capture and tested.
- Full-view paired comparison: `qa/comparison-desktop.png` (source left, implementation right).
- Focused paired hero comparison: `qa/comparison-hero.png`.
- Focused implementation evidence: `qa/desktop-process.png`, `qa/mobile-top.png`, `qa/tablet-top.png`, `qa/mobile-small-top.png`, `qa/mobile-footer.png`, `qa/mobile-menu-open.png`.

| CSS viewport | Full-page screenshot | Pixel dimensions |
| --- | --- | --- |
| 1440 × 1000 | `qa/homepage-1440.png` | 1440 × 3913 |
| 768 × 1000 | `qa/homepage-768.png` | 768 × 4673 |
| 390 × 1000 | `qa/homepage-390.png` | 390 × 5730 |
| 320 × 1000 | `qa/homepage-320.png` | 320 × 6331 |

All captures use deviceScaleFactor 1. The 1440 px source and implementation were placed next to each other at identical scale without stretching. Their page heights differ intentionally: the brief requires a genuine branching process and a contact-information placeholder that are more explicit than the mockup. Only the desktop reference was supplied; mobile/tablet are responsive interpretations, not pixel comparisons against an unavailable mobile mock.

## Findings and iteration history

1. **[P2, resolved] Mobile footer heading inherited the general section size.** The initial 390 px capture showed “Company contact information” at 32 px over two lines, visually overpowering the footer. Removed the redundant unlayered mobile `h2` rule; the footer's own 14 px component style now applies. Post-fix evidence: `qa/mobile-footer.png` and `qa/homepage-390.png`.
2. **[P2, resolved] Process connector had a visible gap at the upper output.** Unequal output-card heights made percentage connector endpoints miss the card center. Equalized the output rows and accounted for the row gap in connector offsets. Post-fix evidence: `qa/desktop-process.png`; the branch now joins both output centers continuously.
3. **[P3, accepted] New artwork has more architectural detail than the mockup.** The original standalone illustration was not supplied. A generated illustration preserves the muted palette, digesters, landscape setting, and conceptual presentation without copying the whole screenshot into the page. Both placements have visible concept disclaimers.

Initial paired evidence is retained as `qa/comparison-desktop-initial.png` and `qa/comparison-hero-initial.png`. The final paired evidence and focused captures were reviewed after the fixes. There are no remaining actionable P0/P1/P2 visual findings in the tested layouts.

Two initial browser-check failures were in the test harness, not the interface: the simulated Enter event lacked its text field, and a selector was incorrectly escaped. Corrected the harness, then verified the actual keyboard behavior. No application keyboard workaround was added.

## Required fidelity surfaces

- **Fonts and typography:** Browser-computed families confirm Manrope headings and Inter body. The desktop hero preserves the four-line hierarchy and green emphasis; mobile text wraps naturally. The footer sizing regression is fixed. Section headings, body copy, and compact labels remain distinct.
- **Spacing and layout rhythm:** 1240 px desktop container, split hero, three-fact strip, three mission cards, dark process band, project split, inset partnership panel, and dark footer follow the reference. Cards and CTAs retain restrained radii and shadows. At 768 px, the split sections stack; at 390/320 px, facts and cards reflow without clipping. The taller process and footer are intentional brief requirements.
- **Colors and tokens:** Forest `#153E2B`, emerald `#2E6B50`, leaf `#9CCB68`, ivory `#F7F8F3`, earth `#D49A63`, charcoal `#1F2B23`, muted `#617168`, and border `#DEE7DD` are centralized in the Tailwind theme. Leaf accents are used on dark surfaces or decoratively, not as small body copy on ivory. Focus indicators are visibly distinct.
- **Image quality:** New 1374 × 1145 conceptual plant artwork uses `next/image` with responsive sizes, hero priority loading, and reserved aspect ratios. Both images load successfully at every tested width. No stretched screenshot, fabricated site photograph, or unavailable personal photo is presented as original content. UI icons are Lucide; the process is a semantic CSS flow as requested in the brief.
- **Copy and content:** Exactly one H1; project status and metrics remain proposed; no confirmed IGL relationship or pipeline is claimed. Digestate branches from digestion independently of gas cleaning. Partner categories follow the document. Contact copy explicitly states that official details are pending.

## Functional and accessibility checks

`qa/browser-results.json` records the passing automated browser checks:

- No horizontal overflow at 1440, 768, 390, or 320 px.
- Every in-page anchor points to an existing element.
- All raster images load; no browser console/runtime errors were recorded.
- Keyboard Enter opens the mobile menu; Escape closes it and restores focus to the toggle.
- Navigation closes the mobile menu and reaches the requested section.
- The partnership CTA reaches the contact-details-pending area.
- Reduced-motion mode disables smooth scrolling.
- Manrope and Inter are loaded and the page title is correct.

Manual review covers visible focus, readable mobile typography, icon alignment, concept labels, diagram branching, semantic headings, meaningful alt text, and the keyboard disclosure state. The menu is a disclosure, not a modal, so it intentionally does not trap focus.

## Build checks

- `npm run build`: passed; homepage and icon prerendered successfully.
- `npm run lint`: passed.
- `npm run typecheck`: passed.
- Browser verification after the final implementation changes: passed.

## Remaining review items

- Client approval: official logo/name, official phone/email, current project status, proposal figures, generated illustration, and personal photo placement.
- The seedling-in-hands photo is a candidate for a later farming-focused section; an accessible original file is needed to integrate it accurately.
- No Safari, Firefox, physical-device, or screen-reader session was run. This is not a comprehensive accessibility certification.
- Additional routes and public hosting remain outside phase one. Preview indexing is disabled until launch approval.

## Implementation checklist

- [x] Build only the responsive homepage and shared components.
- [x] Preserve factual proposal status and clearly label conceptual imagery.
- [x] Make all navigation and CTAs functional within the homepage.
- [x] Fix identified visual issues and recapture evidence.
- [x] Run production build, lint, typecheck, and browser checks.
- [x] Document editing locations and outstanding company approvals in `README.md`.
