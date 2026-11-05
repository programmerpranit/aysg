# AYSG homepage: design rationale

Why each section exists and why it sits where it does. The evidence behind these choices is in [`audience-research.md`](audience-research.md).

## The core idea

The site serves five kinds of visitor, each wanting something different:

| Visitor | What they want | Where the page serves them |
|---|---|---|
| Faith-community / sangh donors | Give to concrete, named seva, often for an occasion | Campaigns band, occasion line in Donate, About |
| Small online UPI donors (mobile) | Quick, trustworthy way to give a few hundred rupees | Header Donate, floating Donate, Donate form, 80G line |
| Youth volunteers | Know what they'd do, how much time, where and when | Volunteer FAQ, Upcoming drives, testimonials |
| People needing urgent help (esp. injured animals) | A number to call, now | Dark help strip near the top, routed to AlwaysCare |
| CSR teams | Proof of scale and partners, documents | CSR section, trust block (to-do) |

The earlier draft made all of them hunt: it opened with a rotating CSR statistic and had no help route, no working volunteer path and no trust signals. The page is planned around one question: **within one scroll, can each visitor see their next step?** Every section serves at least one of these groups.

## Section by section

1. **Header: Donate, Join Us, Get help.** The three main actions stay visible while scrolling. A floating Donate button covers mobile, where most Indian online giving happens (90% of Ketto donations in 2024 came via UPI).

2. **Hero: what we do, our work, impact, who stands behind it.** Donors look first for what an organisation does, then for scale (NN/g donation study). So "Youth-led seva for people and animals across India" comes before any figure. The Gurudev credit is a small eyebrow: it matters to the community but stays welcoming to everyone else. The same balance is used by AlwaysCare. The acts then move to the main programmes, all eight verified figures with a "Last updated" date (dated, current numbers build trust), and checkable facts: address, phone, origin, partners, with dashed placeholders for registration details. On desktop this is one pinned scene where the same real photos travel between acts, so the page feels like one story about real people rather than a stack of claims. Phones and reduced-motion users get the same content stacked. Because the scene is long, Get help is in the first view and in the sticky header, including on phones.

3. **Dark help strip: AlwaysCare + how to ask for aid.** Someone holding an injured animal can't scroll. AlwaysCare is AYSG's own ambulance service, so the umbrella site routes there instead of duplicating it. It's dark so it stands apart from everything else.

4. **Initiatives: people and animals side by side.** Mirrors AYSG's dual identity. The four biggest programmes get photos and counts; the other five are compact cards so nine initiatives don't overwhelm. AlwaysCare appears here as the animal-ambulance arm.

5. **Stories.** Dated, real and local (Chennai, Jamnagar, cupboard distribution). They show the work is current and spread across cities. Each pairs with a number: the "one named story beats statistics" effect failed a 2024 replication, so stories alone aren't relied on.

6. **Campaigns band.** Jain giving clusters around specific campaigns, occasions and sponsorship units rather than general appeals (e.g. Jivdaya Mahotsav, sponsorship tiers on Parasdham). Real campaigns (chaas, pasti, cupboards, notebooks) give donors something concrete to back. Pasti lets people help without money. Pattern borrowed from Charitics' donation band; the goal bar stays empty until AYSG supplies a goal it can keep current.

7. **Donate form.** Monthly SIP is the default because recurring giving matters most to an NGO and "SIP" is a word Indian donors already use. The occasion line (birthdays, anniversaries, Paryushan) matches how the community already gives. The 80G line answers the tax question before it's asked. It is not the lead message, because the new tax regime has no 80G deduction.

8. **Volunteer: 8 hours a month, questions answered.** Youth's main barriers are time and not knowing what they'd do (UN volunteering survey, CRY/GT 2024). The four expandable answers cover exactly that: what, how much time, what you get, who can join. "Usually on a Sunday" makes the commitment feel doable. Accordion pattern borrowed from Charitics.

9. **Upcoming drives.** 19% of students say they can't find volunteering opportunities. Cards with a date and city turn "join us" into "join this, here, on this day". Pattern borrowed from Charitics' event cards.

10. **Volunteer quotes.** Real team members, named with their city, so peers persuade peers.

11. **About + trust.** Origin story (Mulund, 50 people), the meaning of "Arham", scale (1,200+ members, ~60 centres). It sits lower because committed visitors scroll for it while first-timers need actions first. The trust block (registration, 80G number, named coordinators, annual report) belongs here. Lack of trust and transparency is the top reason Indian donors hold back.

12. **CSR partners.** Logos are strong proof, but CSR teams are a small group who will look for this section. Placed near the end, leading with the 6,72,000+ figure that matters to them. CSR teams also need CSR-1, 12A/80G and audited accounts; these go in the trust block or a CSR page.

13. **Closing band + footer.** The three actions repeat for anyone who reaches the bottom. The footer gives the real address and phone, because a physical HQ is a trust signal in India.

## Reference sites and what was taken from each

- **AlwaysCare** (AYSG's own sub-brand): positioned as an emergency service first and a charity second. Taken: plain service headline, one clear help action kept separate from Donate, the same next steps at the end of every section, spiritual framing as a credential rather than the headline. Avoided: live counters and feeds that can't be kept current (several showed 0).
- **Vantara**: built for legitimacy (regulators, scientists, media), not donations. Taken: one promise line, named programme pillars, pairing the "why" (values) with checkable "how" (activity and numbers), a transparency mindset. Not taken: its scale, funding model, production budget and founder-centric framing.
- **Charitics** (generic NGO template): taken only for layout patterns (campaign band, event cards, volunteer accordion). Not taken: dark hero over sad stock photos (pity imagery clashes with AYSG's warm brand), splatter/heart-mask decoration, click-through carousels, unmaintained "raised $X" bars.

## Visual decisions

- Uses the existing AYSG site's exact colours and fonts so it reads as the same organisation (tokens in `CLAUDE.md`).
- Light only. The AYSG brand has no dark mode, and an automatic dark theme made the page look black on dark-mode Macs.
- Real AYSG photos of smiling volunteers and beneficiaries, not stock imagery.
- No carousels (every hero figure is visible at once), no decorative noise, no animation library, fast on mobile.

## What was deliberately left out

Live counters the team can't update; 360° maps or video heroes; CSR logos above the fold; "Save tax" as the lead message; national-scale superlatives; a separate ambulance directory duplicating AlwaysCare; a newsletter before a WhatsApp channel; multi-language versions until data shows a need.
