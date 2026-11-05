# Arham Yuva Seva Group website

Static homepage for Arham Yuva Seva Group (AYSG), deployed on Vercel.

- `index.html`: the page.
- `scripts/images.json`: photos and logos used on the page, sourced from arham.org.
- `scripts/build.mjs`: Vercel build step that copies the page to `dist/` and downloads those photos into `dist/images/`.

To change a photo, edit its `path` in `scripts/images.json` and push.

Context for contributors and Claude: `CLAUDE.md` (how the repo works, design tokens, content rules, open to-dos), `docs/design-rationale.md` (why each section exists) and `docs/audience-research.md` (the audience research behind it).
