# Antigravity master prompt — HW&EM premium multi-page website

You are acting as a senior brand designer, UX architect, frontend lead and accessibility reviewer. Upgrade my EXISTING HW&EM website. Preserve working code where useful, but significantly improve visual design and make the architecture genuinely multi-page.

## Inputs / references
- Read `Website final.docx` as the source of truth for technical facts.
- Review my EXISTING homepage screenshot and source code before making changes.
- Review `redesign-hero-concept.png` for the intended upscale editorial direction.
- Review `index.html`, `site.css`, and the five additional HTML pages in this reference package. These are STATIC visual/storytelling examples, not production implementation; do not simply paste their HTML into Next.js.
- Use the three supplied user-owned photographs in `/assets/` where contextually appropriate. Their dimensions and crops should be handled responsively.
- If no original photographs of a CBG facility exist, create a tasteful SVG schematic or use a clearly labeled conceptual visualization. Do not imply the proposed site has already been constructed.

## Business and audience
Name: Humus Waste & Energy Management (HW&EM).
Audience: potential feedstock partners (RWAs, hotels, restaurants, institutional kitchens, gaushalas), institutional stakeholders and people researching the planned Ghitorni initiative.
Core story: Organic waste → renewable biogas + organic fertilizer.
Tone: authoritative, human, contemporary, optimistic, informative, not flashy.

## Critical content accuracy
The source describes a PROPOSED facility in Ghitorni, New Delhi, with a 3.5 TPD CBG output target, a four-acre site concept and feedstock sourcing envisaged within a 15 km radius. Never represent targets as existing output, or the facility as operational. The IGL offtake agreement is PROPOSED, not signed. Do not show an IGL logo, invent partners, team members, contact details, emissions savings, testimonials, news, certifications or industry awards. Treat diagrams as conceptual. The source process chart also mentions 3 TPD; flag this discrepancy for owner verification rather than silently reconcile it. Contact forms must not pretend to send if no endpoint is configured.

## Design system
Use a sophisticated clean-tech / environmental-infrastructure aesthetic.
- Dark pine: #123D2C
- Deep pine: #0B2B20
- Environmental green: #267655
- Pale lime: #D3E9A2
- Off-white: #F5F4ED
- Ink: #1E3026
- Muted slate-green: #5D6E63
- Hairlines: #D8DFD3
Use DM Sans or Inter Display for headings/body and a restrained elegant italic serif for emotional words in hero-level headings. Keep high contrast and avoid tiny type. 12-column desktop grid, max content width 1280px, whitespace with editorial rhythm, asymmetrical modules, substantial image blocks, subtle borders, not a generic grid of identical rounded cards.

## Make it genuinely multi-page using Next.js App Router
Create real, distinct routes with shared navigation, footer and reusable design system:
1. `/` — Home: cinematic editorial hero, mission, proposed metrics, brief process, Ghitorni project teaser, partner CTA.
2. `/about` — About: mission, principles, circular economy approach, why resource recovery matters. No fake company history.
3. `/project` — Our Project: proposed Ghitorni project, factual technical outline, project-specification blocks, planned waste sources and clear proposed-status labels.
4. `/process` — How It Works: accessible explanatory stages of collection, segregation, preparation, anaerobic digestion, gas upgrading, digestate/manure; include a responsive, visually clear two-output flow diagram.
5. `/partners` — Partnerships: who may collaborate; categories of suitable feedstock providers; no invented commitments.
6. `/contact` — Contact: contact placeholders until verified details and a working delivery destination are supplied; avoid fake submission success.
Navigation must use actual route links, never only homepage `#anchor` links. Each route needs unique meaningful content, page title/metadata, active navigation state and mobile navigation.

## Homepage visual direction
Hero:
- Eyebrow: A CIRCULAR FUTURE STARTS HERE
- Headline: `Waste is not the end. It's the beginning.` (use subtle italic green highlight)
- Supporting copy: `Renewing waste for clean energy. Our proposed New Delhi initiative aims to transform segregated organic waste into renewable biogas and organic fertilizers.`
- CTAs: `Explore our project` → `/project` and `How it works` → `/process`.
- Right: large portrait photograph of hands holding soil and seedling, distinctive corner/arch treatment, dark-green nature palette, a restrained floating brand story label.
- After hero: horizontally arranged `Organic waste → Clean energy → Living soil` visual statement.
- Metrics: 3.5 TPD proposed CBG output / 4-acre site concept / planned 15 km radius.
Then create distinctive sections (not cookie-cutter cards):
- Intro story with yellow flower photo and headline `What we throw away can help something grow.`
- Deep pine process chapter, strong headings and dedicated two-path diagram.
- Ghitorni proposed project with proper technical conceptual SVG, actual location and planned technology.
- Large partnership CTA with the remaining user photo.
- Editorial footer with meaningful links and project status note.

## Image direction
User photos:
- `assets/hands-seedling.png` → hero and/or prominent Mission storytelling.
- `assets/yellow-flower.png` → emotional Waste to Value feature.
- `assets/seedling-pot.png` → organic fertilizer / partnership supporting imagery.
Avoid repeating any photo more than once on the homepage. Avoid giant shallow illustrations of facilities repeated in multiple sections. Image alt text should describe the image truthfully, not imply it depicts the actual project.

## Technology/engineering expectations
Stay with my existing Next.js / React / TypeScript / Tailwind setup. Reuse existing components and dependencies unless there is a solid reason not to. Use next/image for assets and next/font where practical. Accessible real menu button with aria-expanded; keyboard focus; minimum contrast; reduced-motion support. No pointless carousel, animated counter of hypothetical production figures, heavy scrolljacking or dozens of dependency packages. Use well-structured content data and common layout primitives.

## Verification — required
1. First inspect repository and write a short design + architecture plan without modifying code.
2. Implement homepage design system and common header/footer, then the five dedicated routes.
3. Run lint and typecheck/build, fix failures.
4. Use Antigravity browser tools to take actual desktop (1440px), tablet (768px) and mobile (390px) screenshots for `/`, `/project` and `/process` at minimum.
5. Inspect screenshots and improve line breaks, spacing, crop, contrast, nav behavior, diagrams and overflow. Perform at least one deliberate visual review pass, not just compilation.
6. Click through all nav and CTA links. Test mobile menu, keyboard access and responsive behavior. Ensure no route is empty or duplicates the homepage.
7. Report changed files and any remaining factual questions (including inconsistent 3 TPD / 3.5 TPD reference and real company contact details).

Please start by showing your implementation plan and design interpretation, then implement it in the CURRENT repository and present screenshot artifacts for review. Do not deploy or use a public domain without approval.
