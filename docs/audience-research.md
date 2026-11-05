# Rebuild AYSG's homepage around visitor intent

*Audience and positioning research for the Arham Yuva Seva Group (AYSG) website draft. Research date: 4 November 2026.*

## 1. Summary

- **Most of the money comes from the faith community, so most visitors will be Jain and sangh donors and Parasdham followers.** In India, about 46% of household giving goes to religious organisations, and only about 15% goes to non-religious NGOs. Faith-community donors need recognition, sponsorship of a specific named thing, and proof. They do not need to be persuaded to care.
- **There are four other audiences: small UPI donors, youth volunteers, people with an injured animal in front of them, and CSR teams.** Each wants something different. The current draft serves CSR teams first: the hero opens on a rotating CSR statistic. It barely serves the others. It has no help or AlwaysCare link, the Join path returns a 404, and the donation amounts are not tied to outcomes.
- **The biggest weakness is trust, not design.** The draft shows no registration, 80G/12A or annual report. Several of its numbers contradict each other or are implausible, such as "10,00,000 tonnes of fodder". Research shows lack of trust and lack of transparency are the main reasons people do not donate.
- **Vantara is built to earn legitimacy, not donations.** It pairs a dharmic "why" with scientific and governance proof, and its pages lead visitors to read more rather than to act. Its structure is worth borrowing. Its no-donate model and its production budget are not.
- **AlwaysCare is AYSG's own animal-ambulance sub-brand.** It works because it leads with one concrete service and a verb ("Call"), and anchors gifts to unit costs (₹100 treats one animal). The umbrella site should copy that clarity and link to AlwaysCare's helpline and payment rails rather than rebuild them.
- **Top fixes, in order:** fix broken links and reconcile the numbers; rewrite the hero as a who-we-are statement with Help, Donate and Volunteer actions; add a trust block; tie gift amounts to outcomes and offer UPI; give volunteers named roles and a reply promise.

## 2. Site classification: an umbrella site for a guru-inspired seva movement, still at draft stage

**Type.** The site is the umbrella site for a volunteer-run, donation-funded Jain seva movement. It is a multi-cause NGO site whose main conversion is donation, followed by volunteering and partnering. It is not a single-cause charity and not a service directory. The draft's footer says the copyright belongs to Arham Yuva Seva Group. It gives a Ghatkopar (Mumbai) head office and links its policies to arham.org. It lists nine "Arham ___ Sahay"-style initiatives covering food, medical, dialysis, education, animals, pathshala, ashram support and newspaper collection ([AYSG draft, reviewed in a browser 4 Nov 2026](https://arham-yuva-seva-group.vercel.app/)).

**Organisation.** AYSG describes itself as the humanitarian youth wing of Parasdham, inspired by the Jain monk Param Gurudev Shree Namramuni Maharaj Saheb ([Parasdham AYSG page, updated Jul 2026](https://parasdham.org/?p=13478); [Parasdham: His Work](https://parasdham.org/his-work)). It raises money through sponsorships of named projects and through big events. At Manavta Mahotsav 2024, for example, the Arham Autorickshaw Project launched with a target of 108 autos and drew pledges for more than 200 ([Parasdham, Sep 2024](https://parasdham.org/?p=25547)). It also collects old newspapers for funds ([Parasdham](https://parasdham.org/?p=13478)).

**AlwaysCare is a sub-brand, not a peer.** alwayscare.org carries the footer "© 2026 Arham Yuva Seva Group" and a section titled "Powered by Arham Yuva Seva Group" ([alwayscare.org](https://alwayscare.org/)). Independent press confirms that AYSG runs the Arham Animal Ambulance ([Telangana Today, 24 Mar 2026](https://telanganatoday.com/arham-animal-ambulance-hyderabads-lifeline-for-injured-and-abandoned-animals); [Free Press Journal, May 2026](https://www.freepressjournal.in/mumbai/animal-ambulance-launched-in-vasai-to-provide-medical-aid-for-injured-stray-animals)). So the brand structure is a parent with endorsed sub-brands, and the umbrella site's job includes routing visitors to AlwaysCare.

**Stage.** It is a draft or prototype. Every inner link (Join, About, Initiatives, CSR, Impact, Stories, Contact) points to an exported file path that returns a Vercel 404 ([AYSG draft](https://arham-yuva-seva-group.vercel.app/)). An automated fetch of the page got only the HTML title, so the page renders in the browser after load. Search engines may not see its content, and WhatsApp link previews will likely show only the title ([org research notes, fetch 4 Nov 2026](https://arham-yuva-seva-group.vercel.app/)). That last point is an untested inference, and it matters for an audience that shares links on WhatsApp.

**AYSG's own numbers conflict across its properties.** Fix this before launch, because the site currently amplifies the contradictions.

| Metric | AYSG draft | Other AYSG / Parasdham / AlwaysCare sources |
|---|---|---|
| Volunteers / members | 1,200+ members | 1,500+ volunteers ([Parasdham](https://parasdham.org/?p=13478); [FPJ 2024](https://www.freepressjournal.in/amp/mumbai/mumbai-jain-social-organisation-launches-initiative-to-feed-thousands-of-people-daily-in-ghatkopar)) |
| Centres | "Centres across India", number left blank | 55+ ([Parasdham](https://parasdham.org/?p=13478)) |
| Meals | 5,00,000 a year (hero); 18,600+ (Arham Aahar card); "Over 15000" (14 Mar story) | 25,00,000+ meals ([Parasdham](https://parasdham.org/?p=13478)) |
| Lives impacted | 6,72,000+ under CSR | 1M+ ([Parasdham](https://parasdham.org/?p=13478)) |
| Animal welfare | Arham Anukampa card: 2,450+ (no unit) | 2.8 lakh+ animals treated over 3 years ([alwayscare.org/hospitals](https://alwayscare.org/hospitals)); 2.5 lakh+ ([Parasdham, Aug 2026](https://parasdham.org/?p=21606)); 60,000+ ([older Parasdham figures](https://parasdham.org/?p=13478)) |
| Ambulances | not mentioned | 21 in 3 states; 41 in 26 cities; 48 (homepage), with per-city cards summing to 42 ([Parasdham](https://parasdham.org/?p=13478); [Parasdham](https://parasdham.org/?p=21606); [alwayscare.org/ambulances](https://alwayscare.org/ambulances)) |
| Cupboards | 1,000+ homes (campaign card) vs 1,500 homes (22 Jun story) | — |
| Fodder | "10,00,000 Tonnes of fodder distributed" (1 million tonnes, almost certainly the wrong unit) | — |
| HQ | Mumbai | Telangana Today calls AYSG "Pune-based" |

Some of these gaps reflect growth over time (21 → 41 → 48 ambulances), but no source dates its figures. Two gaps point at a real content problem. The umbrella site gives its best-known programme, animal rescue, a count about 100 times smaller than AlwaysCare's own figure. And the same programme number appears three different ways on one page.

## 3. Audience segments, defined by what the visitor is trying to do

**Confidence key.** **Strong**: several recent Indian sources agree. **Moderate**: one solid source, or older or non-Indian data. **Inferred**: reasoned from the evidence, but no direct data.

Other visitors exist but are secondary: NRI and diaspora donors (who face FCRA rules), journalists, people applying for medical or dialysis aid, and vet job-seekers. They need a contact route and documents, not homepage space.

### Segment A: Faith-community and sangh donors (Jain families, trusts, Parasdham followers)

| | |
|---|---|
| **Who** | Jain families, sanghs and charitable trusts, often in Mumbai and Gujarat. Followers of Namramuni Maharaj. Includes "practical" and "well-off" givers, the 20% of Indians whose median gift is about ₹5,000 a quarter. |
| **Trigger & channel** | Events and occasions: Gurudev's birthday or Mahotsav, Paryushan, family milestones, disaster appeals. They arrive from a WhatsApp forward, an in-person ask at the derasar or upashray, or a satsang announcement. They already know AYSG. |
| **Goal** | Fulfil religious duty (daan, jeev daya, anukampa), sponsor something specific, and pass values to children. |
| **Needs** | Named, countable sponsorships (a day of meals, an ambulance, a kennel). Public acknowledgement. Visible Gurudev endorsement. Proof the seva actually happened. |
| **Questions** | What can I sponsor, and what does it cost? Will my family name appear? Is this Gurudev's official seva wing? Which entity issues the 80G receipt? |
| **Objections** | "I can give through my sangh instead." "Which Arham site is the real one?" (arham.org, Parasdham, AlwaysCare and this draft all exist.) |
| **Decision criteria** | Endorsement by a respected leader, concreteness, recognition, and alignment with the Jain calendar. |
| **Priority** | **1: largest share of money** |
| **Evidence** | 46% of household giving goes to religious organisations, against about 15% to non-religious ones ([CSIP How India Gives 2025-26, Feb 2026](https://indiacsr.in/wp-content/uploads/2026/02/How-India-Gives-2025-26-Report.pdf)). More than 90% name religious duty as the underlying driver ([BBC via Hinduism Today, Feb 2026](https://www.hinduismtoday.com/hpi/2026/02/27/revealed-the-billions-given-to-charity-by-ordinary-indians-every-year/)). At a Mumbai Jivdaya Mahotsav, Jain donors gave ₹1.38 crore to 141 gaushalas in ₹50,000 units, with named trusts and families credited ([FPJ, 13 Oct 2025](https://www.freepressjournal.in/mumbai/mumbai-jains-donate-138-crore-to-141-flood-hit-gaushalas-across-maharashtra)). AYSG already sells named sponsorships from ₹11 lakh to ₹21 crore ([Parasdham](https://parasdham.org/?p=21606)). Jain donors blend dana with concern for impact and with passing values on to their children ([Shah & Rajaram, 2021, **stale**](https://eprints.soton.ac.uk/442904)). |
| **Confidence** | **Strong** on the faith-giving pattern. There is no quantitative data on Jain giving specifically. |

### Segment B: Small online UPI donors (urban, mobile-first, often animal lovers)

| | |
|---|---|
| **Who** | Urban salaried people and students who are not necessarily Jain. Mumbai leads online animal-welfare giving. |
| **Trigger & channel** | An Instagram reel, a WhatsApp forward or a friend's share, often late at night. A rescue or flood story creates urgency. |
| **Goal** | Help quickly and feel it made a difference. |
| **Needs** | One-tap UPI. ₹500–₹1,100 options. A clear "₹X does Y". An instant receipt and an update afterwards. |
| **Questions** | Is this legitimate? What does my ₹500 do? Can I pay with UPI? Will I get a receipt? |
| **Objections** | Distrust of NGOs. Unclear use of money. "Why do you need my PAN?" Long forms. |
| **Decision criteria** | Ease, a concrete outcome, and visible proof (photos, a dated story). |
| **Priority** | **2: growth segment, and builds recurring giving** |
| **Evidence** | 90% of Ketto contributions came via UPI. Giving peaks at 11pm–midnight. Mumbai is the top city for animal-welfare giving ([Ketto Kindness Report 2024, via CSR Universe](https://thecsruniverse.com/articles/one-donation-every-15-seconds-90-upi-contributions-drive-india-s-record-breaking-generosity-ketto-s-kindness-report)). On Ketto in 2023 the most common gift was ₹500 and the average ₹1,120 ([Entrepreneur India, 2023](https://india.entrepreneur.com/news-and-trends/10-statistics-to-show-how-india-donated-in-2023/465340)). Ketto figures are self-reported platform PR and skew towards medical crowdfunding. The top deterrents are lack of trust, lack of transparency and unclear spending, and over half of donors want beneficiary details ([IU Lilly / CAF India, Oct 2022, **stale**](https://globalindices.indianapolis.iu.edu/additional-research/digital-for-good/india.html)). Thank-yous and impact updates can lift repeat giving by up to 20% ([UDARTA 2025, via Deccan Herald](https://www.deccanherald.com/amp/story/india%2Findias-nonprofits-turn-to-everyday-giving-amid-funding-crunch-report-3753984)). |
| **Confidence** | **Moderate**. The trust data is pre-2023, and there are no Indian donation-page conversion benchmarks. |

### Segment C: Youth volunteers (students and young professionals)

| | |
|---|---|
| **Who** | Ages 18–24, often female, often from Tier-2/3 cities. Some are children of Segment A families. |
| **Trigger & channel** | Social media, college, or a friend. They often help informally already (feeding strays, temple seva). |
| **Goal** | Do something meaningful, gain confidence and skills, and belong to a group. |
| **Needs** | Named roles, short or event-based slots, a schedule, a fast reply, and a WhatsApp group to join. |
| **Questions** | What would I actually do? When and where? How much time? Who will contact me, and when? |
| **Objections** | "No opportunities near me." Time and cost. Worry that unpaid time will be exploited. A broken Join link. |
| **Decision criteria** | Clarity of role, flexibility, proximity, and peers already involved. |
| **Priority** | **3: AYSG's labour model depends on it**; 8 hours per member per month is the stated commitment. |
| **Evidence** | Students find opportunities mostly through online and social media (52%), then college (29%), then word of mouth (19%). They mainly expect confidence (58.4%). 19% said no opportunities were available to them. Professionals prefer short commitments ([CRY & Grant Thornton, Dec 2024](https://www.cry.org/downloads/other/Grant-Thornton-CRY-Volunteering-Market-Research-V2.pdf); [The Week, 4 Dec 2024](https://www.theweek.in/news/india/2024/12/04/girls-students-more-inclined-to-volunteer-for-social-cause-than-.html)). In India, 87.9% of volunteering is informal, animal welfare accounts for 18.5% of volunteer activity, and religious institutions organise 24.9% of formal volunteering ([UNV SWVR 2026 comparative findings](https://knowledge.unv.org/system/files/2026-07/V5%20Comparative%20Findings%20on%20Volunteerism.pdf); read via a summary, so spot-check these figures). |
| **Confidence** | **Strong** on general youth-volunteer behaviour. There is no data on Jain youth seva groups specifically. |

### Segment D: People seeking urgent help, especially for an injured animal

| | |
|---|---|
| **Who** | Bystanders in a hurry, often not Jain, who searched "animal ambulance near me" or were sent a link. A smaller group seeks human aid (meals, medical or dialysis support). |
| **Trigger & channel** | An emergency in front of them. They come from Google or Maps search, a WhatsApp group, or a forward. |
| **Goal** | Get help now. |
| **Needs** | A tap-to-call or WhatsApp button above the fold, the service area and hours, and an instruction to send a photo and location. |
| **Questions** | Do you cover my area? Is it free? Is anyone answering right now? |
| **Objections** | Not finding a number. Hours that do not fit. A long directory to scan in a panic. |
| **Decision criteria** | Speed and certainty of a response. |
| **Priority** | **High on duty-of-care grounds, low on donation value.** This segment can be served with one link to AlwaysCare. |
| **Evidence** | The Hyderabad Arham Animal Ambulance grew from about 20 to about 200–250 calls a day through word of mouth and social media, with service hours of 10am–7pm ([Telangana Today, 24 Mar 2026](https://telanganatoday.com/arham-animal-ambulance-hyderabads-lifeline-for-injured-and-abandoned-animals)). Rescue groups coordinate by WhatsApp photo plus location ([Deccan Herald, 2017, **stale**](https://www.deccanherald.com/india/karnataka/bengaluru/animal-lovers-form-whatsapp-groups-2037678)). NN/g's trust research favours upfront disclosure of contact information ([NN/g, 2016](https://nngroup.com/articles/trustworthy-design/)). |
| **Confidence** | **Moderate** that this audience exists. What help-seekers need from a website is **Inferred**; no studies were found. |

### Segment E: CSR partners (corporate CSR and foundation teams)

| | |
|---|---|
| **Who** | CSR managers and their consultants. Nine partners are already listed on the draft, including Reliance Foundation, Sun Pharma and Schneider Electric. |
| **Trigger & channel** | Due diligence after a referral, a proposal or an employee connection. They usually arrive with the URL in hand. |
| **Goal** | Find an eligible, low-risk partner whose projects map to Schedule VII and can be reported on. |
| **Needs** | CSR-1, 12A, 80G, three years of audited accounts, the legal entity name, named trustees, impact reports with units, and a named contact. |
| **Questions** | Are you CSR-1 registered? What does each programme cost per beneficiary? Can you report outcomes? |
| **Objections** | Missing documents. Inconsistent numbers. No named leadership. |
| **Decision criteria** | Compliance first, then credibility of reporting, then programme fit. |
| **Priority** | **4: high value per partner, few visitors.** It deserves a dedicated page, not the homepage hero. |
| **Evidence** | CSR spending was ₹280 bn in 2023 ([CSIP 2025-26](https://indiacsr.in/wp-content/uploads/2026/02/How-India-Gives-2025-26-Report.pdf)) and is growing 8–10% a year ([IANS on IPR 2026](https://indianabroad.news/private-philanthropy-in-india-to-rise-9-11-pc-through-fy30-social-sector-funding-to-nearly-double)). The documentation requirements come from a practitioner guide that was not checked against the statute ([Patron Accounting, Apr 2026](https://www.patronaccounting.com/blog/csr-funding-ngo-form-csr-1-mca-registration)). The peer Youth for Seva publishes its 80G, 12A, FCRA and CSR-1 documents ([Youth for Seva](https://youthforseva.org/?p=10717)). |
| **Confidence** | **Moderate**. There is no data on how CSR teams behave on NGO sites. |

## 4. Positioning teardown: Vantara earns legitimacy, AlwaysCare earns a phone call

### Vantara (vantara.in): an institution asking to be trusted, not funded

**What it promises.** Vantara presents itself as a world-class, science-led rescue, rehabilitation and conservation centre. Its hero claims to be advancing "the frontier" of that work ([Vantara homepage](https://vantara.in/en)). It names its category carefully: the words "zoo" and "visit" are absent, and the facility is closed to the public ([Malay Mail / AFP, 31 Oct 2026](https://www.malaymail.com/news/life/2026/10/31/lions-tigers-and-a-billionaires-private-noahs-ark-inside-indias-controversial-vantara-sanctuary/241253)).

**Who it is really for.** Its primary audiences are regulators, courts, the global zoo and conservation community, and journalists. The design agency named students, researchers and scientists, plus general visitors ([Clay Global case study, undated](https://clay.global/work/vantara)). The Indian public is invited to admire, not to take part. There is no donate, volunteer or visit path. The navigation is Home, Resources, About, Contact and Career, and every call to action leads to further reading ([Vantara homepage](https://vantara.in/en)). That fits an organisation funded by Reliance Foundation.

**Feel, think, do.** The site wants visitors to feel awe (the 360° habitat map, 3,500+ acres), tenderness (the "Where Healing Begins" section and Gauri, the first elephant, rescued from chains) and reverence (founder messages invoking Vasudhaiva Kutumbakam). It wants them to conclude that this is a world-class Indian institution, not a private zoo. It wants them to trust it, cite it, partner with it or work there ([Vantara homepage](https://vantara.in/en); [About](https://vantara.in/about-us)).

**Section order and the thinking behind it.** The homepage moves through three registers:

1. **Scientific authority.** The hero promise and four service pillars (Rescue & Recovery, Treatment & Care, Rehabilitation & Support, Conservation & Rewilding) claim the category first.
2. **Moral and cultural legitimacy.** Founder messages supply the "why", in Vedic and temple language.
3. **Operational proof.** This comes as the two named legal entities with their services, a milestones carousel, the mission pillars, the habitat map, and finally a Resource Hub of press, legal and research documents.

The rule behind this order is that the spiritual line never stands alone. It always sits between science and evidence, so it reads as conviction rather than vanity ([Vantara homepage](https://vantara.in/en)).

**Proof devices.** Proof comes from five places:

- **Credentials:** CZA approval, Global Humane certification, and the Prani Mitra award ([American Humane](https://www.americanhumane.org/press-release/vantara-achieves-global-humane-certified-distinction-for-animal-care-welfare-and-wellbeing/); [ThePrint](https://theprint.in/feature/anant-ambanis-vantara-wins-prestigious-national-prani-mitra-award-for-excellence-in-animal-welfare/2513651/)).
- **Endorsements:** the Prime Minister and chief ministers.
- **Faces:** named staff, filterable by role.
- **Research:** published research papers.
- **Documents:** a library filtered into Media, Legal and Annual Report ([About](https://vantara.in/about-us); [Resources](https://vantara.in/en/resources)).

**Tone and cultural framing.** The tone is calm, institutional and earthy. The founder messages use "temple" language: Anant Ambani has said publicly, "Vantara is my temple" ([The Star / AFP, 30 Oct 2026](https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/30/india039s-animal-megacentre-vows-reset-after-criticism)). Ayurvedic oil therapy sits next to elephant surgery, presenting tradition as part of the care.

**Controversy, briefly and evenhandedly.** A Supreme Court-appointed SIT found no legal violations in September 2025, though its full report remains sealed ([India TV](https://www.indiatvnews.com/news/india/vantara-gets-clean-chit-what-were-the-key-findings-of-sit-repot-and-what-did-supreme-court-say-2025-09-16-1008427); [Bar & Bench](https://www.barandbench.com/news/litigation/vantara-what-the-sits-sealed-cover-report-in-supreme-court-said)). The CITES Secretariat recommended suspending import permits. The Standing Committee dropped that recommendation after several countries objected ([Dawn / Reuters, 23 Nov 2025](https://www.dawn.com/news/1956868)). In August 2026 Vantara announced an import moratorium and an independent governing council ([Vantara media statement](https://cms.vantara.in/uploads/Media_Statement_Letter_to_CITES_MA_India_and_Voluntary_Commitments_cfb4a786f5.pdf)). Twenty-seven NGOs welcomed the move and asked for more: a permanent end to imports and a public inventory of animals ([Mongabay, 25 Sep 2026](https://news.mongabay.com/2026/09/ngos-call-on-vantara-to-end-all-wild-animal-imports-permanently/)). The site now partly works as a reputational record, with the clean-chit article and governance appointments on the homepage.

One lesson for AYSG is directly relevant. **Vantara's own figures conflict**, and critics noticed. The site shows 260+ elephants in one place and 182 in another. It claims 1.5 million+ animals on its About page, while AFP reports a claimed 150,000 and says annual reports record far lower totals ([About](https://vantara.in/about-us); [The Star / AFP](https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/30/india039s-animal-megacentre-vows-reset-after-criticism)).

**Transferable vs not**

| Borrow | Don't copy |
|---|---|
| One-line category promise in the hero | No donate or volunteer path (AYSG depends on both) |
| Four named pillars as cards | 360° maps, cinematic video hero (heavy on Indian mobile data) |
| Pair the dharmic "why" with a concrete "how", side by side | Founder- and family-centric framing; AYSG should centre volunteers and beneficiaries |
| Named, consented beneficiary stories | Superlatives ("world's largest", "frontier") |
| Faces of coordinators with their roles | A defensive legal and media layer |
| A Resources/Transparency page (registration, reports, press) | Ministerial endorsements and global certifications |
| A milestone timeline | Figures that differ from page to page |

### AlwaysCare (alwayscare.org): an emergency service first, a charity second

**What it promises.** The headline makes three claims: fast, free and national ("India's Fast & Free Animal Ambulance Network"). The subhead promises free on-site first aid for every injured street animal ([alwayscare.org](https://alwayscare.org/)). That puts AlwaysCare in the emergency-service category, like a 108 ambulance for animals, rather than among shelters.

**Who it is really for.** In order of prominence:

1. A bystander with an injured animal.
2. Small donors.
3. Youth volunteers.
4. The Jain and AYSG community.

Large sponsors are deliberately sent to Parasdham. CSR teams and media are not addressed on the site ([alwayscare.org](https://alwayscare.org/); [Parasdham](https://parasdham.org/?p=21606)).

**Feel, think, do.** The site wants visitors to feel urgency ("Right Now, an Animal Needs You") with dignity. It wants them to think that help is real and nearby. It wants them to call, or give ₹100, or join.

**Section order and the thinking behind it.** The page runs in this order ([alwayscare.org](https://alwayscare.org/)):

1. **Hero** with live counters and Donate/Volunteer buttons. A "Call Ambulance" button sits in the navigation bar.
2. **Live cases feed.**
3. **Call & track:** a city phone directory.
4. **Donation widget:** ₹100 treats one animal.
5. **On-the-ground photo gallery.**
6. **How We Save Lives.**
7. **Gurudev founder block.**
8. **"Powered by AYSG" section** covering the wider causes.
9. **Main donation block:** Razorpay, an 80G certificate, a ₹500 / ₹1,000 / ₹2,000 (surgery) / ₹5,001 ladder, and a monthly toggle.
10. **Community:** Instagram and a WhatsApp channel.
11. **Volunteer form:** three named roles and a promise of a reply within 48 hours.
12. **Floating "Get Help Now" button.**

The logic is service before story. Visitors are sorted by verb: Call and Get Help sit top-right and float on screen, while Donate and Volunteer sit in the hero and mid-page. Every inner page ends with the same three-way close: donate, volunteer, distress ([alwayscare.org/hospitals](https://alwayscare.org/hospitals)).

**Proof devices.** The site's distinctive move is live, operational proof: counters, a case feed, a fleet map and named hospital addresses. When this works it beats an annual report for small donors. When it breaks, it backfires. When checked, the live-impact feed showed 0 results, ambulance tracking read "Tracking unavailable", and the AYSG counters rendered as 0 ([alwayscare.org/live-impact](https://alwayscare.org/live-impact); [alwayscare.org](https://alwayscare.org/)). The formal layer is thin: there is an 80G note but no certificate number, and no registration details, trustees or reports ([refund policy](https://alwayscare.org/refund-cancellation)).

**Tone and cultural framing.** The approach is secular first and spiritual second. The Gurudev's vision appears in an eyebrow line and the founder block. Ahimsa and seva are named. "Jeev daya" barely appears ([alwayscare.org](https://alwayscare.org/)). This widens the audience to non-Jain callers in Hyderabad, Kolkata and Chennai while still reassuring the core community. The English, promise-like name ("Always" available) is a deliberate step away from the "Arham" name.

**Transferable vs not**

| Borrow for the umbrella site | Don't copy / don't rebuild |
|---|---|
| A headline that states the service: what + for whom + where | Live feeds and counters the team cannot keep current (a "0" is worse than no number) |
| A separate urgent path, visually distinct from Donate | A second ambulance directory: **link to AlwaysCare instead** |
| Unit-cost amounts (₹100 = one animal; ₹2,000 = surgery) and culturally familiar sums (₹5,001) | An unexplained "2X impact" label (it can read as a dark pattern) |
| A volunteer form with three roles and a 48-hour reply promise | "India's network" scale language for causes that are local |
| The same Help / Donate / Volunteer close on every page | AlwaysCare's own gaps: no registration number, 48 vs 42 ambulances |
| Gurudev as a credential, not the headline | |

**The one structural point.** AlwaysCare already points up to its parent with "Powered by AYSG". The umbrella draft does not point back down. Animal welfare is a headline cause on the draft, yet the homepage has no link to AlwaysCare and no helpline ([AYSG draft](https://arham-yuva-seva-group.vercel.app/)).

## 5. The current draft: good bones, but a trust gap and a mis-aimed hero

| What it does well | Why it matters | Segment served |
|---|---|---|
| A consistent "Arham ___ Sahay" naming system across nine initiatives | Easy to remember and sponsor; it echoes how Jain giving is categorised (Jivdaya, Anukampa) | A, E |
| Dated stories and a "Last updated 14 October 2026" stamp on impact figures | NN/g lists current content as a trust factor ([NN/g](https://nngroup.com/articles/trustworthy-design/)) | B, E |
| A monthly SIP option | Matches the 70% who said in 2022 that they favour periodic giving plans ([IU Lilly, **stale**](https://globalindices.indianapolis.iu.edu/additional-research/digital-for-good/india.html)), and is familiar language for Indian investors | B |
| A PAN field, marked optional | Required for 80G receipts | A, E |
| CSR partner logos | Credible third-party proof | E, A |
| "8 hrs given by every member, every month" | A specific, honest commitment that volunteers can plan around | C |
| Spiritual framing kept to the About section | The same secular-first balance AlwaysCare uses | B, D |

| Where it falls short | Evidence from the live review | Segment hurt | Why it matters |
|---|---|---|---|
| **Broken inner links**, including Join | Every inner link returns a Vercel 404 | C, E, all | Broken links damage credibility quickly ([NN/g](https://nngroup.com/articles/trustworthy-design/)); the volunteer path is dead |
| **No trust layer** | No entity name, registration, 12A/80G, FCRA, annual report or named trustees | A, B, E | Trust and transparency are the top deterrents to giving ([IU Lilly, **stale**](https://globalindices.indianapolis.iu.edu/additional-research/digital-for-good/india.html)); CSR teams cannot proceed without these ([Patron Accounting](https://www.patronaccounting.com/blog/csr-funding-ngo-form-csr-1-mca-registration)) |
| **Inconsistent or implausible numbers** | 10,00,000 "tonnes" of fodder; three different meal figures; cupboards shown as 1,000+ and 1,500; a blank centre count; counts with no units; Indian and Western comma formats mixed | A, B, E | Vantara's figures that differed across pages drew critical press ([The Star / AFP](https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/30/india039s-animal-megacentre-vows-reset-after-criticism)) |
| **Hero leads with a rotating CSR statistic** | 8 statistics compete in a carousel; the first is "6,72,000+ lives impacted under CSR"; the who-we-are line is visually secondary | A, B, C, D | Donors look first for what the organisation does and what it aims to achieve ([NN/g donation study 2009, **stale**, Western](https://www.nonprofitpro.com/article/nielsen-norman-group-releases-new-study-nonprofit-web-sites-estimates-organizations-could-double-online-donations-405368/)) |
| **No AlwaysCare or help link** | Animal welfare is a headline cause, but there is no helpline anywhere | D | Urgent visitors leave; AlwaysCare's call volumes show the demand is real ([Telangana Today](https://telanganatoday.com/arham-animal-ambulance-hyderabads-lifeline-for-injured-and-abandoned-animals)) |
| **Gift amounts not tied to outcomes** | ₹500 / ₹1,000 / ₹2,500 / ₹5,000 with no "this pays for…" | A, B | Only 4% of sites said where donations go, and donors wanted to know ([NN/g 2009, **stale**](https://www.nonprofitpro.com/article/nielsen-norman-group-releases-new-study-nonprofit-web-sites-estimates-organizations-could-double-online-donations-405368/)); the sister site AlwaysCare already does this |
| **No 80G or UPI messaging** | No receipt promise, no payment methods shown, no explanation of where the money goes | A, B, E | 90% of online gifts on Ketto come via UPI ([Ketto 2024](https://thecsruniverse.com/articles/one-donation-every-15-seconds-90-upi-contributions-drive-india-s-record-breaking-generosity-ketto-s-kindness-report)) |
| **Thin volunteer offer** | Only a "Join Us" button, which 404s; no roles, events or reply promise | C | 19% of students say they can't find opportunities ([The Week](https://www.theweek.in/news/india/2024/12/04/girls-students-more-inclined-to-volunteer-for-social-cause-than-.html)) |
| **Unsourced claim** | Arham Aahar copy says "15% of the population goes to bed hungry" with no source | B, E | Unsourced statistics weaken the trust the page is trying to build |
| **Rendered only in the browser** (inferred) | A text fetch returned only the title | A, B (WhatsApp sharing) | Link previews and search may show nothing; untested |

## 6. Ranked recommendations

| # | Recommendation | Fixes finding | Main segments |
|---|---|---|---|
| 1 | **Fix every inner link and keep the Join path working before anything else.** Until the inner pages exist, point Join to an on-page form or a WhatsApp link. | Broken links (§5) | C, E, all |
| 2 | **Reconcile one master set of numbers across the AYSG draft, AlwaysCare and Parasdham.** Every figure gets a unit, a period and an "as of" date. Correct "tonnes". Fill or remove the blank centre count. Use one number format. Show fewer, verified numbers rather than eight unverified ones. | The conflict table (§2); Vantara's criticism | A, B, E |
| 3 | **Rewrite the hero as a who-we-are statement with three actions.** One line covering who, what and where, for example "youth-led seva for food, health, education and animals across [N] cities". A Gurudev credit as an eyebrow line. Buttons for Get Help, Donate and Volunteer. At most one verified statistic. Move the CSR statistic to the CSR section. | Hero leads with a CSR statistic (§5); NN/g on mission first | A, B, C, D |
| 4 | **Add a trust block and a Transparency page:** legal entity name, registration, 12A/80G status, CSR-1, named trustees and coordinators with photos, an annual or quarterly impact note, and press links (FPJ, Telangana Today, the Limca record). If the documents are not ready, say what is in progress. Do not leave the section empty. | No trust layer (§5); deterrent data; CSR requirements; NN/g "connection to the rest of the web" | A, B, E |
| 5 | **Add an urgent-help route to AlwaysCare:** an "Injured animal? Call or WhatsApp AlwaysCare" strip near the top and in the footer, linking to alwayscare.org's city numbers. Add a short "Need medical or dialysis aid? How to apply" line for people seeking help for themselves. | No help link (§5); AlwaysCare sub-brand (§2) | D |
| 6 | **Tie each gift amount to an outcome, and lead the payment step with UPI.** Example: "₹501 = X meals". Every outcome figure must come from AYSG's own costs; do not invent unit costs. Consider ₹501 / ₹1,001 / ₹5,001 amounts. Name UPI, cards and netbanking. State "80G receipt issued" and note that the deduction applies under the old tax regime ([CRY, Mar 2026](https://www.cry.org/?p=18268)). Explain why PAN is requested. Reuse AlwaysCare's Razorpay and 80G setup if it is the same legal entity. | Amounts not tied to outcomes; no UPI or 80G messaging (§5) | A, B |
| 7 | **Add named sponsorships for faith-community donors:** "Sponsor a day of Arham Aahar", "Sponsor a dialysis session", with family-name acknowledgement and occasion prompts (Paryushan, birthdays, tithis). | Segment A evidence (Jivdaya Mahotsav units; AYSG's existing tiers) | A |
| 8 | **Make volunteering concrete:** three or four named roles, upcoming drives with dates and cities, the 8 hrs/month commitment, a reply-within-48-hours promise, and a WhatsApp channel link. | Thin volunteer offer; CRY/GT channel and short-role data | C |
| 9 | **Pair each story with one number and a named, consented person or animal.** Do not rely on stories alone. The "identifiable victim beats statistics" effect failed a 2024 replication ([FORRT on Maier et al. 2024](https://forrt.org/flora-replication-atlas/doi/10.1016/j.obhdp.2006.01.005/)), so treat it as contested. | Storytelling evidence (§3B) | A, B |
| 10 | **Give CSR teams their own page** with documents, programme costs per beneficiary, the Schedule VII mapping and a named contact. Keep the logos on the homepage as proof, lower down. | CSR stat in hero; CSR requirements | E |
| 11 | **Render page text on the server**, or at least add real meta descriptions and Open Graph tags, so search engines and WhatsApp previews work. | Fetch returned only the title (inferred) | A, B, D |

**Suggested homepage order**

1. **Header:** logo, Get Help (animal emergency), Volunteer, Donate.
2. **Hero:** who-we-are line, Gurudev credit as eyebrow, three buttons, one verified figure with its date.
3. **Urgent-help strip:** AlwaysCare call/WhatsApp; how to apply for medical or food aid.
4. **What we do:** the nine initiatives grouped into human welfare and animal welfare (AlwaysCare shown as the animal ambulance arm), each with a unit-labelled count.
5. **Proof:** three dated stories, each with one number and a named, consented beneficiary.
6. **Give:** UPI-first form, outcome-tied amounts, monthly SIP, named sponsorships, 80G line, where the money goes.
7. **Volunteer:** roles, upcoming drives, commitment, reply promise, WhatsApp channel.
8. **Trust:** entity, registrations, named team, report, press.
9. **About and inspiration:** Gurudev and the meaning of Arham.
10. **CSR partners:** logos plus "Partner with us".
11. **Closing band and footer:** Help / Donate / Volunteer repeated.

**What NOT to prioritise**

- Live counters or feeds the team cannot update. AlwaysCare's showed 0.
- 360° maps, a video hero or a heavy carousel.
- CSR logos or statistics above the fold.
- "Save tax" as the lead message, because the new tax regime offers no 80G deduction.
- National-scale superlatives.
- A separate ambulance directory that duplicates AlwaysCare.
- A newsletter before the WhatsApp channel.
- Multi-language versions, until the validation in section 7 shows a need.

## 7. Open assumptions and a cheap validation plan

**Assumptions to test**

1. Faith-community donors give most of the online revenue; small UPI donors are the most numerous.
2. Most visitors use mobile and arrive from WhatsApp or Instagram. This is inferred; there is no Indian benchmark.
3. Help-seekers land on the umbrella site rather than on AlwaysCare.
4. Outcome-tied amounts and a trust block raise donation completion. The evidence here is Western or pre-2023.
5. AYSG and AlwaysCare are the same legal entity, so 80G, Razorpay and the documents can be shared. **This is unverified. No registration details were found anywhere.**
6. A visible Gurudev credit reassures Jain donors without putting off other donors.
7. English-only copy is sufficient. Hindi and Gujarati needs are untested.

**Validation plan using first-party data**

| Method | What to do | Answers assumptions |
|---|---|---|
| **Vercel Web Analytics or GA4** | Turn on analytics for the project; the Vercel connector could not find this deployment, so check the account and team. Track referrers (WhatsApp, Instagram, Google), device split, landing pages, and events: Donate click, amount chosen, payment start and complete, Join submit, Get Help/AlwaysCare click, CSR page view. Run for 4–6 weeks across one festival or event. | 1, 2, 3, 4 |
| **Payment and receipt data** | From Razorpay or arham.org records: gift size distribution, share of payments via UPI, share requesting 80G or entering PAN, share of recurring gifts, and timing around events. | 1, 4, 5 |
| **Short on-site or post-donation survey (4 questions)** | 1) What brought you here today? (donate / volunteer / get help / partner / learn) 2) How did you hear about us? 3) Is there anything that nearly stopped you? 4) Which language do you prefer? | 1, 2, 7 |
| **WhatsApp channel data** | Follower growth, views per post, link clicks per post (use UTM tags), and which posts drive Donate or Join clicks. Compare event-week posts with ordinary ones. | 2 |
| **5 interviews** (2 sangh or family donors, 1 small online donor, 2 youth volunteers) | See questions below. | 1, 4, 6, 7 |

**Interview questions.** Ask each person to open the draft on their own phone.

1. Tell me about the last time you gave to, or volunteered for, a seva cause. What prompted it?
2. Looking at this page for 10 seconds, what does AYSG do?
3. What would you need to see before giving or joining?
4. What does ₹1,000 here pay for?
5. Did anything make you hesitate or doubt a number?
6. How do you prefer to pay, and do you need an 80G receipt?
7. (Volunteers) What would you expect to do, and how soon should someone contact you?
8. How do you feel about seeing Gurudev's name on the homepage?
9. Where would you share this, and with whom?

## 8. Sources

**Primary: AYSG and its own properties**
- AYSG draft site, reviewed in a browser, 4 Nov 2026 — https://arham-yuva-seva-group.vercel.app/
- alwayscare.org: homepage, /ambulances, /hospitals, /live-impact, /refund-cancellation, read 4 Nov 2026 — https://alwayscare.org/
- Parasdham AYSG page (updated Jul 2026) — https://parasdham.org/?p=13478 ; Animal Care Centre (updated Aug 2026) — https://parasdham.org/?p=21606 ; Manavta Mahotsav (Sep 2024) — https://parasdham.org/?p=25547 ; His Work — https://parasdham.org/his-work
- NGOBase AYSG profile (undated) — https://ngobase.org/profile/313505

**Primary: Vantara**
- vantara.in homepage, About, Resources and Contact, read 4 Nov 2026 — https://vantara.in/en ; https://vantara.in/about-us ; https://vantara.in/en/resources
- Vantara media statement on voluntary commitments (Aug 2026) — https://cms.vantara.in/uploads/Media_Statement_Letter_to_CITES_MA_India_and_Voluntary_Commitments_cfb4a786f5.pdf
- Clay Global case study (undated) — https://clay.global/work/vantara

**News and press**
- Telangana Today, Arham Animal Ambulance (24 Mar 2026) — https://telanganatoday.com/arham-animal-ambulance-hyderabads-lifeline-for-injured-and-abandoned-animals
- Free Press Journal, Vasai ambulance (May 2026) — https://www.freepressjournal.in/mumbai/animal-ambulance-launched-in-vasai-to-provide-medical-aid-for-injured-stray-animals ; AYSG Ghatkopar meals (Jun 2024) — https://www.freepressjournal.in/amp/mumbai/mumbai-jain-social-organisation-launches-initiative-to-feed-thousands-of-people-daily-in-ghatkopar ; Jivdaya Mahotsav (13 Oct 2025) — https://www.freepressjournal.in/mumbai/mumbai-jains-donate-138-crore-to-141-flood-hit-gaushalas-across-maharashtra
- The Star / AFP (30 Oct 2026) — https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/30/india039s-animal-megacentre-vows-reset-after-criticism ; Malay Mail / AFP (31 Oct 2026) — https://www.malaymail.com/news/life/2026/10/31/lions-tigers-and-a-billionaires-private-noahs-ark-inside-indias-controversial-vantara-sanctuary/241253
- Mongabay (25 Sep 2026) — https://news.mongabay.com/2026/09/ngos-call-on-vantara-to-end-all-wild-animal-imports-permanently/
- Dawn / Reuters (23 Nov 2025) — https://www.dawn.com/news/1956868
- India TV (16 Sep 2025) — https://www.indiatvnews.com/news/india/vantara-gets-clean-chit-what-were-the-key-findings-of-sit-repot-and-what-did-supreme-court-say-2025-09-16-1008427 ; Bar & Bench (2025) — https://www.barandbench.com/news/litigation/vantara-what-the-sits-sealed-cover-report-in-supreme-court-said
- American Humane press release (2025) — https://www.americanhumane.org/press-release/vantara-achieves-global-humane-certified-distinction-for-animal-care-welfare-and-wellbeing/ ; ThePrint, Prani Mitra award (2025) — https://theprint.in/feature/anant-ambanis-vantara-wins-prestigious-national-prani-mitra-award-for-excellence-in-animal-welfare/2513651/
- Deccan Herald, Bengaluru WhatsApp rescue groups (Dec 2017, **stale**) — https://www.deccanherald.com/india/karnataka/bengaluru/animal-lovers-form-whatsapp-groups-2037678

**Research reports and surveys (India)**
- Ashoka University CSIP, *How India Gives 2025-26* (Feb 2026) — https://indiacsr.in/wp-content/uploads/2026/02/How-India-Gives-2025-26-Report.pdf ; BBC summary via Hinduism Today (27 Feb 2026) — https://www.hinduismtoday.com/hpi/2026/02/27/revealed-the-billions-given-to-charity-by-ordinary-indians-every-year/ . The report contradicts itself on the in-kind vs cash split.
- Bain & Dasra, India Philanthropy Report 2026, via IANS (26 Feb 2026) — https://indianabroad.news/private-philanthropy-in-india-to-rise-9-11-pc-through-fy30-social-sector-funding-to-nearly-double
- CRY & Grant Thornton Bharat, *Volunteering in India* (Dec 2024) — https://www.cry.org/downloads/other/Grant-Thornton-CRY-Volunteering-Market-Research-V2.pdf ; The Week (4 Dec 2024) — https://www.theweek.in/news/india/2024/12/04/girls-students-more-inclined-to-volunteer-for-social-cause-than-.html
- UNV State of the World's Volunteerism Report 2026, comparative findings (2026; India fieldwork Mar–Apr 2025) — https://knowledge.unv.org/system/files/2026-07/V5%20Comparative%20Findings%20on%20Volunteerism.pdf
- UDARTA Everyday Giving Report 2025, via Deccan Herald/PTI (6 Oct 2025) — https://www.deccanherald.com/amp/story/india%2Findias-nonprofits-turn-to-everyday-giving-amid-funding-crunch-report-3753984
- Ketto Kindness Report 2024, via CSR Universe (Nov 2024; platform self-report) — https://thecsruniverse.com/articles/one-donation-every-15-seconds-90-upi-contributions-drive-india-s-record-breaking-generosity-ketto-s-kindness-report ; Ketto 2023 data via Entrepreneur India — https://india.entrepreneur.com/news-and-trends/10-statistics-to-show-how-india-donated-in-2023/465340
- IU Lilly School & CAF India, *Digital for Good: India* (Oct 2022 survey, **stale**) — https://globalindices.indianapolis.iu.edu/additional-research/digital-for-good/india.html
- Shah & Rajaram, Jain diaspora donors (2021, **stale**) — https://eprints.soton.ac.uk/442904

**Usability and behavioural research**
- NN/g, "Trustworthiness in Web Design" (8 May 2016) — https://nngroup.com/articles/trustworthy-design/
- NN/g donation usability study, via NonProfit PRO (2009, **stale**, Western) — https://www.nonprofitpro.com/article/nielsen-norman-group-releases-new-study-nonprofit-web-sites-estimates-organizations-could-double-online-donations-405368/
- Maier et al. (2024) failed replication of the identifiable-victim effect, via FORRT Replication Atlas — https://forrt.org/flora-replication-atlas/doi/10.1016/j.obhdp.2006.01.005/ ; original Small, Loewenstein & Slovic (2007, **contested**) — https://www.gsb.stanford.edu/insights/increase-charitable-donations-appeal-heart-not-head

**Regulatory and practitioner sources**
- CRY on 80G and the new tax regime (updated 31 Mar 2026) — https://www.cry.org/?p=18268
- Patron Accounting, CSR-1 and CSR due diligence (8 Apr 2026; practitioner source, not checked against the statute) — https://www.patronaccounting.com/blog/csr-funding-ngo-form-csr-1-mca-registration
- Youth for Seva, peer transparency benchmark (undated) — https://youthforseva.org/?p=10717

**Not verified in this research:** AYSG's legal entity, its 80G/12A/CSR-1/FCRA status, audited accounts, social follower counts, and any traffic or conversion data for the draft or for AlwaysCare.
