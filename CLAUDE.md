# AYSG website: context for Claude

Homepage for **Arham Yuva Seva Group (AYSG)**, a youth-led Jain-inspired seva NGO in India (HQ: Parasdham, Ghatkopar East, Mumbai). It is inspired by Rashtrasant Param Gurudev Shree Namramuni Maharaj Saheb. AYSG's animal ambulance service, **AlwaysCare** (alwayscare.org), is its own sub-brand.

- Live: https://aysg.vercel.app
- Repo: github.com/programmerpranit/aysg (branch `main`)
- Owner: Pranit (developer building the site for AYSG)

Read `docs/design-rationale.md` before changing layout or copy, and `docs/audience-research.md` for the evidence behind it.

## How the repo works

| Path | What it is |
|---|---|
| `index.html` | The whole page: markup, inline CSS in `<style>`, and a small vanilla JS block at the end. No framework, no build of the HTML. **Edit this file directly.** |
| `scripts/images.json` | Every photo/logo the page uses: output filename → path on arham.org. `width` = resize through arham.org's Next.js optimizer; `resize: false` = fetch the original. |
| `scripts/build.mjs` | Vercel build step: copies `index.html` to `dist/` and downloads the images into `dist/images/`. A failed download is logged and skipped, never fails the build. |
| `vercel.json` | Build command `node scripts/build.mjs`, output `dist`, no install step, 1-day cache on `/images/*`. |
| `docs/` | Research report and design rationale. |

The page references photos as `/images/<name>` (e.g. `/images/hero-pasti.jpg`). To add or swap a photo: add/edit its entry in `scripts/images.json`, reference `/images/<name>` in `index.html`, push.

**Note:** some sandboxed environments (including Claude's cloud workspace) cannot reach arham.org, so a local `node scripts/build.mjs` may skip every image. That is expected; Vercel's build can reach it. Check the Vercel build log ("images: N downloaded, M skipped") to confirm.

## Deploying

Vercel project `aysg` in team "Pranit Patil's projects", linked to this repo. **Every push to `main` deploys to production automatically** (~10 s). No manual deploy step. Use a branch + PR if a change should get a preview URL first.

## Design system (match the existing AYSG site)

Colours (light only; there is deliberately **no dark mode**: the AYSG site is always light):

| Token | Value | Use |
|---|---|---|
| Ink | `#17151a` | Headings, body text |
| Secondary text | `#4a4750` | Labels, descriptions |
| Muted | `#5b5862` | Dates, small meta |
| Berry | `#b8264f` | Big numbers, emphasis words in headings, links, logo text |
| Pink (buttons) | `#d23563` | Primary buttons (hover → berry) |
| Green | `#4d7a08` | Uppercase letter-spaced eyebrow labels |
| Cream | `#fff6e8` | Alternating section background |
| Peach | `#f9d2a2` | Hero gradient end |
| Line | `#efe3d3` / `#e9dccb` | Card and input borders |

Hero background: `radial-gradient(70% 80% at 0% 100%, rgba(249,210,162,.7) 0%, transparent 65%), linear-gradient(135deg, #fff6e8, #f9d2a2)`.

Type: **Newsreader** (serif) for headings and numbers, weight 400, slight negative letter-spacing, emphasis words in berry italic. Body: **Switzer**, falling back to **Hanken Grotesk** (Google Fonts), because Switzer isn't on Google Fonts. Eyebrows: 13px, uppercase, `letter-spacing: .18em`, green, weight 600.

Shapes: pill buttons (`border-radius: 999px`), cards 14–22px radius, photos 18px radius, floating pill header. Touch targets ≥ 44px. Indian number format (`6,72,000+`, `₹1,000`) everywhere.

## Content rules

- **Never invent figures, testimonials, names, dates or claims.** Facts come from AYSG (arham.org, the AYSG draft site, or Pranit). Missing facts stay as visible `[PLACEHOLDER]` text or a dashed `.todo` box.
- The impact figures in the hero and on the initiative cards were **confirmed as verified by Pranit**. Keep them exactly as written. One looks like a unit error: "10,00,000 Tonnes of fodder" (1 million tonnes). Flag it, don't silently change it.
- Known inconsistencies on arham.org: 1,200+ members vs 1,500+ volunteers; ~60 vs 60+ centres; cupboards 1,000+ vs 1,500. The page uses 1,200+ members, ~60 centres, 1,000+ homes.
- The 80G line ("donations to AYSG are eligible for tax benefits under 80G") is AYSG's own claim from arham.org/join-us. The registration number is not yet published.
- Testimonial quotes (Khushi Doshi, Team Chennai; Moksh Shah, Team Ghatkopar) are short excerpts from arham.org; keep them short.
- Plain, warm, specific copy. Seva vocabulary (seva, jeevdaya, Arhamite) is fine; avoid fundraising clichés and pity framing.

## Interactive behaviour (JS at the end of `index.html`)

- Hero: four acts in order (`#what`, `#work`, `#impact`, `#trust`). On screens ≥1000px wide and ≥600px tall with motion allowed, `html.pin` pins them in one stage. JS clones six `.slot[data-tile]` photos into `.hero-tiles` and moves them between each act's measured slot positions as you scroll. Otherwise the acts stack normally, so all content works without JS. To move a photo, move its slot in the markup; the JS re-measures. The eight figures live as plain text in `[data-count]`: they count up once, then settle on that exact text.
- Donate form: frequency toggle (`[data-freq]`), amount chips (`[data-amt]`), button label updates. **Payment is not connected**: submit shows a draft message. The real donation flow is https://donate.arham.org/ (Razorpay; asks PAN + address for 80G).
- Volunteer FAQ accordion (`[data-faq]` / `[data-faqbody]`): one open at a time.

## Open to-dos (dashed `.todo` boxes on the page)

1. Featured campaign (Maha Pasti Abhiyaan): add a goal so the progress bar can fill, or remove the bar.
2. Tie each donation amount to an outcome using AYSG's own unit costs ("₹1,000 = X meals").
3. Show the 80G registration number next to the tax line.
4. Upcoming drives: replace `[DATE]`, `[CENTRE, CITY]`, `[TIME]` with the real schedule.
5. Trust block in About: legal entity, registration/12A/80G numbers, named coordinators, annual report.
6. Wire the donate form to donate.arham.org (or link to it) and the "Join" buttons to arham.org/join-us (already linked).
7. Remove the green "Draft for review" banner at the top once 1–5 are done.
8. Optional: commit images to the repo instead of downloading from arham.org at build time, so the site doesn't depend on arham.org.

## Related links

- AYSG main site: https://arham.org (about, join-us, CSR, impact report, initiative pages)
- Earlier AYSG draft (reference for the original look): https://arham-yuva-seva-group.vercel.app/ (photos are embedded as blobs; inner links 404)
- AlwaysCare: https://alwayscare.org
- Reference sites the team liked: vantara.in (legitimacy and trust framing), alwayscare.org (emergency-service-first framing), charitics.temptics.com (layout patterns only: campaign band, event cards, volunteer accordion)
