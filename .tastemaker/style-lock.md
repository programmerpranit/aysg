# Style lock: AYSG homepage

Established: 5 Nov 2026. Source: user-specified. AYSG design system in CLAUDE.md, not generated.

## Palette
Cream #fff6e8 · white #ffffff · pink button #d23563 · berry #b8264f · ink #17151a · secondary #4a4750 · line #e9dccb · dark mode: not needed, single mode only.
Hero-only: eyebrow green nudged from #4d7a08 to #3d6206, because #4d7a08 on the peach gradient end measured 3.60:1.

## Color contract (check_contrast.py --matrix)
- Text-safe: text/surface, text/on-primary, text/bg, text/border, surface/accent, accent/on-primary, bg/accent, surface/primary, primary/on-primary, accent/border. Also checked: #ffd9a8 on berry 4.59, white on berry 6.13, #4a4750 on peach 6.40.
- UI-safe: bg/primary, text/primary, primary/border.
- Decorative: text/accent, surface/border, border/on-primary, primary/accent, bg/border, bg/surface, bg/on-primary, surface/on-primary.

## Type, shape, spacing
Newsreader 400 for display, Hanken Grotesk for body. Pills 999px, cards 14 to 22px, photos 18px. Sections 96px, hero acts fit one viewport.

## Structure
Macrostructure: Long-Scroll Narrative, opening scene only. Arc: what we do > our work > impact > who stands behind it, then close at Donate/Volunteer. Nav N3 floating pill, now sticky. Hero: H3 family, custom pinned four-act photo morph.
Motion: vanilla JS and CSS instead of the playbook's GSAP default, because the repo is deliberately dependency-free and mobile data matters. Stacked, no pinning, under 1000px wide, under 600px tall or with reduced motion.

## Reference intelligence
Board: .tastemaker/reference-board.md (viewed sources). Dials: variance 7, motion 7, density 5, art direction 7.
