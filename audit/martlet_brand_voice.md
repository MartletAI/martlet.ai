# Martlet AI — Brand Voice Guidelines

> **Purpose:** Shared brief for any writing on behalf of Martlet AI — blog posts, articles for outside outlets (thought leadership), product and solution pages, sales decks, webinar abstracts, case studies, email, social, release posts. Loaded into every chat in the Martlet AI project so every piece starts from the same brief.
>
> **Version:** 1.0 · Source: martlet.ai + co-founders Hasham Ul Haq (CTO) and Ritwik Jain (CRO) + the John Snow Labs spinoff announcement.

---

## 1. Who We Are

**Martlet AI is the regulatory-grade AI for risk adjustment.** We automate HCC coding and risk-adjustment workflows — prospective, retrospective, and RADV — for Medicare Advantage payers, Medicaid MCOs, ACOs, risk-bearing provider organizations, commercial insurers, and revenue-cycle firms.

**Martlet AI is a John Snow Labs company.** We are the first of several planned John Snow Labs spinoffs targeting specific high-impact healthcare workflows with AI. We are wholly funded by John Snow Labs, the AI for healthcare company whose Medical LLM, Healthcare NLP, and Generative AI Lab products are used in production by 500+ enterprise healthcare and life-sciences organizations. Our underlying medical language models, deployment posture, and AI governance framework all come from the John Snow Labs production stack.

**Our category is regulatory-grade healthcare AI for risk adjustment.** That phrase is a core differentiator. Use it.

### What we are not
- **Not a SaaS vendor in the data path.** Most healthcare AI vendors are SaaS — the customer sends PHI to the vendor's cloud, and the vendor's SOC 2 controls protect it. Martlet AI runs inside the customer's environment — VPC, on-premises, or air-gapped. PHI does not leave the customer network. This is structurally stronger than SaaS, not a missing capability. Frame it that way; never apologize for not being SaaS.
- **Not an AI-assisted tool.** Most "AI risk adjustment" today is AI-assisted — the AI suggests, humans review every suggestion. Martlet AI handles the high-confidence majority of HCCs end-to-end, with reviewers focused on the low-confidence exceptions. We do not concede the AI-assisted framing; that is the language of competitors.
- **Not a startup, in the venture sense.** Martlet AI is fully funded by John Snow Labs, a profitable cash-flow-positive healthcare AI company. We are not running on a clock to return capital to outside investors. We do not write about "the founder journey" or "the startup journey." We do not refer to ourselves as a "startup." When the topic comes up vs. better-funded competitors, the framing is "built for the long term" and "structurally aligned with our customers, not with a return-of-capital schedule."
- **Not a coding-services bureau.** We are software. We do not sell coding labor as a service, do not take success commissions on captured RAF, and do not have an incentive to push the envelope on what gets submitted. The conflict of interest in the services-vendor model is something we point out clearly.
- **Not a founder story.** Hasham Ul Haq is **Co-founder and Chief Technology Officer.** Ritwik Jain is **Co-founder and Chief Revenue Officer.** Both are publicly the leadership of Martlet AI. The connection to John Snow Labs is corporate (parent and funder), not a personal-brand story about a JSL executive. Do not name David Talby or other JSL personnel as the leadership voice on the Martlet AI site or in Martlet AI content.

## 2. Who We Write For

Sophisticated, technical, regulated. Assume competence. Talk directly to the reader ("you," "your"), never about "users."

### Reader priority
- **Default: the risk-adjustment buyer and operator.** VPs and Directors of Risk Adjustment, Medicare Stars, RAF programs, HCC coding, clinical documentation improvement (CDI), risk-bearing-provider operations.
- **Solution-page and compliance-page content: also the executive and reviewer buyers.** CFO, COO, CMIO, CMO, CIO, CISO, Chief Compliance Officer, Chief AI Officer, AI governance leads, procurement.
- **Technical content: the engineering and data-science buyer.** Healthcare data engineers, ML/NLP engineers responsible for healthcare AI deployments, EHR integration leads.

Lead with the operational outcome the risk-adjustment leader cares about (RAF lift, audit-defensible evidence, cost per chart, cycle time), then support with the technical rigor their team will validate, then anticipate the questions the compliance and AI governance teams will ask.

### Reader profiles
- VPs, Directors, and operational leaders of: risk adjustment, HCC coding, RAF programs, CDI, Medicare Stars, value-based care, clinical informatics
- CFO, COO, CMO, CMIO, CIO, CISO, Chief Compliance Officer, Chief AI Officer / Chief AI Governance Officer
- Health plan and ACO leaders responsible for Medicare Advantage, Medicaid managed care, ACO REACH, MSSP
- Risk-bearing provider organization executives and program owners
- Revenue-cycle management firms with risk-adjustment service lines
- Healthcare AI governance, compliance, and audit-readiness leaders
- EHR integration leads and healthcare data engineering teams

### Organizations they come from
Health plans (Humana, UnitedHealthcare, Elevance, CVS Health/Aetna, Cigna, Centene, BCBS plans, regional MA plans). ACOs (Aledade, Privia, Agilon, agilon-style independent ACOs, MSSP and ACO REACH participants). Risk-bearing providers and AMCs (the Mayo Clinic and Cleveland Clinic class). Health systems with risk-adjustment programs (academic medical centers, regional integrated systems, the WVU Medicine class). RCM firms with risk-adjustment offerings. Government and adjacent (CMS-aligned consultancies, state Medicaid programs).

Assume the reader knows: HCC, RAF, V24, V28, MEAT, RADV, IVA, CMS-HCC, HHS-HCC, ICD-10, ACA, MA, MSSP, ACO REACH, FHIR, HL7, EHR, BAA, HIPAA, GDPR, NLP, LLM. If a concept must be introduced — for content aimed at a broader healthcare audience — one crisp sentence, then move on.

## 3. Brand Voice in One Paragraph

Authoritative, technically rigorous, and evidence-first — with the quiet confidence of a category specialist that does not need to oversell. We speak the language of risk-adjustment operators, compliance teams, and AI governance leaders. We back claims with named customers (where public), peer-reviewed papers (from the John Snow Labs research catalog we inherit), and concrete operational metrics. We are enthusiastic about regulatory-grade healthcare AI outcomes and directly skeptical of hype, AI-assisted "copilot" framings, generic-LLM healthcare wrappers, and unverified vendor claims.

## 4. Scope: What We Write About

**Only topics where we have expertise and ship product.**

- ✅ Prospective HCC coding at point of care
- ✅ Retrospective HCC coding at scale
- ✅ RADV audit readiness, mock audits, evidence packets, MEAT validation, V28 mapping
- ✅ Risk adjustment programs: workflow design, vendor selection, in-house vs. outsource economics, governance
- ✅ Healthcare-specific medical language models and how they differ from general-purpose LLMs
- ✅ In-environment deployment for healthcare AI (on-prem, VPC, air-gapped) and what it does for security and compliance posture
- ✅ AI governance for healthcare AI — Pacific AI certification, model versioning, audit logs, bias and red-team testing
- ✅ EHR integration patterns for risk adjustment
- ✅ The economics of HCC coding: cost per chart, throughput, capture rate, cycle time
- ✅ CMS guidance on RADV, V28, payment year audits, and how it affects MA payer operations
- ❌ Drug development, clinical decision support, diagnosis, treatment recommendations, anything outside risk-adjustment-relevant healthcare AI
- ❌ Broad healthcare AI topics that are John Snow Labs' surface area (de-identification, OMOP harmonization, oncology data curation, pharmacovigilance, Stars/HEDIS quality measurement at large) — link out to John Snow Labs for those
- ❌ General Medicare Advantage policy commentary (rate notices, Stars methodology, supplemental benefits) unless directly tied to risk adjustment

If a topic is adjacent but we do not ship a solution for it, skip it. If a topic is squarely in JSL's surface area, link to JSL rather than competing with their content.

## 5. Voice Attributes

### We are
- **Precise.** Specific numbers, benchmark names, sample sizes. "Page-level evidence on every HCC at 2 billion notes scale" beats "highly accurate."
- **Evidence-led.** Peer-reviewed papers from the JSL research catalog, named customers (with public case studies), concrete operational metrics, CMS source documents linked. If we can cite it, we cite it.
- **Confident but not boastful.** Customers and architecture do the work. Competitive comparisons happen in tables, not adjectives.
- **Direct.** Talk to the reader; short, simple words. Use, not utilize. Help, not facilitate. Start, not commence.
- **Operationally fluent.** MEAT criteria, V28 mapping, IVA/IVA-A submission, CMS-RADV sampling logic, BPA design, EHR best-practice alerts, FIPS-compliant encryption, HITRUST/NIST controls — comfortable across all of it.
- **Pragmatic.** What works in production, at scale, inside the customer's environment, under regulatory scrutiny, with the audit team that will read every output three years later.

### We are not
- Breezy, cute, or meme-y. No emoji in published copy. No exclamation points as a substitute for evidence.
- Hype-driven. No "groundbreaking," "revolutionary," "cutting-edge," "next-gen," "transformative," "magical," "game-changing."
- Vague. Never "helps organizations leverage AI to transform their risk adjustment."
- Consumer-y or patient-facing. B2B infrastructure for risk-adjustment teams, not patient-facing.
- Generic-tech. No "unlock," "empower," "democratize," "synergies," "smarter coding." Use risk-adjustment-specific verbs: extract, validate, attribute, map, capture, recapture, MEAT-validate, audit, defend, sample, extrapolate, route to exception review.
- Apologetic about what we are not. We don't lead with "unlike SaaS vendors..." or "while we're not externally certified..." We lead with what we are. The architectural advantages speak for themselves.

## 6. Core Messages

At least one should anchor nearly everything we publish:

1. **Regulatory-grade accuracy from healthcare-specific AI.** The medical language models that power Martlet AI are healthcare-specific from the ground up — the same JSL stack ranked #1 on 12 of 13 medical benchmarks against frontier general-purpose LLMs. They are not general-purpose AI fine-tuned on a handful of medical examples. Risk adjustment is too high-stakes for that.
2. **Take HCC coding in-house.** Outsourcing HCC coding is expensive, opaque, and structurally conflicted — vendors paid on success commission have an incentive to push the envelope; the customer carries the audit risk three years later. Martlet AI runs inside the customer environment so taking risk adjustment back in-house becomes operationally feasible.
3. **Workflow integration without added headcount.** Most "AI risk adjustment" is AI-assisted: the AI suggests, humans review every suggestion. Total cost of ownership goes up. Martlet AI's accuracy floor is high enough to handle the high-confidence majority end-to-end. Reviewers focus on exceptions.
4. **VPC-deployed is structurally stronger than SaaS.** PHI never leaves the customer network. The customer's existing HITRUST/NIST/SIEM/IAM controls are what's in effect — typically far more rigorous than any vendor's SOC 2 environment. SOC 2 attests to a vendor's data handling; in our deployment, the vendor doesn't handle the data.
5. **End-to-end stack across the three risk-adjustment workflows.** Prospective, retrospective, and RADV all use the same engine, the same evidence model, the same audit log. The customer doesn't manage three systems.
6. **Audit-defensible by design.** Every HCC ships with the chart sentence, encounter ID, date of service, provider name and credentials, and signature status — page-level provenance, MEAT-aware, traceable. Audit packets assemble in one click; mock RADV runs year-round.
7. **Pacific AI certified, version-controlled, governable.** AI governance is its own pillar of compliance, separate from security and regulatory. We attest to model versioning, controlled releases, red-team and bias testing, and an append-only audit log on every AI decision.
8. **Built on a profitable, independent parent.** Martlet AI is wholly funded by John Snow Labs — no venture or debt financing. Customers can rely on us regardless of the funding cycle, and the engineering depth comes from the team that built and operates a 500+ customer healthcare AI stack.

## 7. Signature Terminology

### Use
Regulatory-grade · healthcare-specific medical language models · purpose-built for risk adjustment · MEAT-aware · MEAT-complete · page-level evidence · audit-defensible · audit-grade · run inside your environment · on-premises · private cloud · air-gapped · VPC-deployed · zero data movement · PHI never leaves your network · data sovereignty · in-house · take HCC coding in-house · end-to-end automation · exception-only review · high-confidence majority · v28 mapping · payment-year discipline · evidence packet · RADV-style sampling · mock audit · CMS-ready packet · independently validated · peer-reviewed · Pacific AI certified · version-controlled models · controlled releases · append-only audit log · human-in-the-loop where it matters.

### Product and workflow naming
- **Three workflows**: Prospective, Retrospective, RADV. Always lower-case in body copy ("prospective risk adjustment"); capitalized when used as page titles or section eyebrows ("PROSPECTIVE — POINT OF CARE").
- **The platform** is "Martlet AI." Not "the Martlet AI platform," not "Martlet AI's platform," not "Martlet" alone. "Martlet AI" on first mention and most subsequent mentions; "Martlet" only acceptable in casual or internal contexts, never in published marketing.
- **The product artifact** is "the evidence packet" or "the audit packet" — these are the thing the buyer photographs from a slide and shows their compliance team. Treat them as proper nouns of the product.
- **The reviewer interface** is "the reviewer UI" — not "the dashboard," not "the user interface."

### Self-reference and leadership voice
- "Martlet AI" on first mention and most subsequent mentions in marketing copy.
- For technical or partnership discussions where "the Martlet AI engine" is the right framing, that phrasing is fine.
- **Hasham Ul Haq (Co-founder and CTO)** is the leadership voice for technical content, engineering deep-dives, customer technical conversations, and the JSL-stack inheritance story.
- **Ritwik Jain (Co-founder and CRO)** is the leadership voice for commercial conversations, go-to-market, customer success, and operational ROI.
- **Both co-founders carry equal weight publicly.** When attribution is general (a quote about Martlet AI's strategy or position), default to whichever co-founder is closer to the topic. Do not consistently default to one over the other.
- **Do not name David Talby or other John Snow Labs personnel** as the leadership voice on Martlet AI's website or in Martlet AI content. JSL is the corporate parent; the public Martlet AI leadership voice is Hasham and Ritwik.

### Banned words and phrases
- **Aggrandizing:** groundbreaking, game-changing, revolutionary, cutting-edge, next-gen, transformative, world-class, magical, breakthrough
- **Generic-tech buzzwords:** leverage, unlock, empower, democratize, synergies, holistic, seamless (unless literally true), robust, foster, elevate, embrace, daunting, delve, harness, bolster, underscore, illuminate, smarter, forward-thinking
- **Wordy/Latinate:** utilize → use; repurpose → reuse; facilitate → help; commence → start; in order to → to; at this point in time → now; regarding → about
- **"AI-powered"** as an empty modifier — never use as the lead descriptor for Martlet AI or our product
- **"AI-assisted" / "AI copilot"** — these phrases concede that humans are still doing the work; they are the language of competitors. We do not use them about Martlet AI. We may use them when referring to competitor products in comparison contexts.
- **"Solution"** when vague — use "platform," "engine," "workflow," "module," or the actual workflow name (prospective / retrospective / RADV)
- **"Transform your risk adjustment" / "Ready to transform"** — generic SaaS language; banned
- **"Industry-leading," "state-of-the-art" used about Martlet AI** without a specific number or peer-reviewed citation attached
- **Startup / founder journey / founded by** — we do not use "startup" about ourselves; "co-founder" is the correct term for Hasham and Ritwik but the framing is "we are a JSL spinoff," not "we are a venture-backed startup"
- **Any claim about clinical decision-making.** We automate operational and coding workflows; clinicians make clinical decisions.
- **"Vast library," "massive," "huge"** — replace with the actual number

## 8. Anti-AI-Writing Rules

AI-generated text has recognizable tells. Strip these before publishing.

### Forbidden words
delve · showcase · underscore · harness · illuminate · bolster · foster · elevate · embrace · unleash · unlock · empower · daunting · robust · seamless · holistic · vibrant · pivotal · crucial (as filler) · meticulously · remarkable · profound · transformative · groundbreaking · comprehensive (as filler) · leverage · navigate (as metaphor) · realm · landscape (as metaphor) · tapestry · testament to · at the forefront of · smarter · forward-thinking

### Forbidden phrases and sentence patterns
- **Contrastive "not X, but Y":** "It's not just an AI tool, it's a platform." The single loudest AI tell. Rewrite positively.
- **"In today's ever-evolving / fast-paced / rapidly changing world/landscape/era of …"** — banned.
- **"In the realm of …," "In the world of …," "When it comes to …"** — cut.
- **"It's important to note that …," "It's worth noting that …," "As we navigate …"** — cut.
- **"From X to Y, [something] [does something]"** — overused range construction.
- **"Dive into," "deep dive," "let's explore," "let's take a closer look"** — cut.
- **"In conclusion," "In summary," "Ultimately," "At the end of the day"** — substantive statement instead.
- **"A testament to …," "stands as a …," "serves as a …"** — replace copulas with concrete verbs.
- **Tricolons / rule of three:** "adjective, adjective, adjective" or "short phrase, short phrase, and short phrase." LLMs overuse this. Use two-part or four-part constructions instead, or concrete specifics.
- **"This X isn't just Y — it's Z" closing flourishes.** Cut them.
- **Hedging pile-ups:** "generally," "typically," "often," "may," "can," "could," "potentially" stacked. Commit or remove.
- **"Reshape the landscape," "stay ahead of the curve," "navigate the complexities"** — generic-tech-speak; banned.

### Formatting tells
- **Em-dash (—) overuse.** A few are fine in long copy; more than 3–4 is a red flag. Prefer commas, colons, periods, parentheses.
- **Bold in every paragraph.** See §10.
- **Title Case in every H2.** Use sentence case for subtitles: "Why VPC-deployed is stronger than SaaS." Capitalize only the first word and proper nouns.
- **Bullet lists everywhere.** Alternate prose and lists. If three paragraphs in a row are bulleted, rewrite one as prose.
- **Uniform paragraph and sentence length.** Vary deliberately.
- **"Key takeaways" boxes at top and bottom.** Use only when they add genuinely different information.

### Voice tells
- **No contractions** is stiff; **all contractions** is forced-casual. Use them where a person naturally would; skip in press releases and compliance text.
- **Evenhanded hedging on every claim.** We hold positions. If we say in-environment deployment is structurally stronger than SaaS, we don't then write a paragraph saying SaaS is fine actually.
- **Read it out loud.** If it sounds like a corporate AI assistant, it is.

## 9. Talking About Other Organizations

We make claims about other organizations only with public backing. The same principle covers customers, competitors, and the broader market.

### Customers
- **Customers are the heroes.** "WVU Medicine surfaced previously missed HCCs across 25 hospitals" is better than "Martlet AI helped WVU Medicine surface HCCs." We work to make customers visibly successful and put ourselves second. Customers should be proud to read what we write about them.
- **Never disclose confidential customer details** — names, project scope, data volumes, models used, outcomes, financial impact, team sizes — beyond what appears in a public case study on martlet.ai/case-studies/[slug] or in the JSL launch press release for Martlet AI.
- **Do not name an organization as a customer** if there is no public reference. A logo wall on a customer-approved page is fine; a blog post naming them is not.
- **When citing a public case study, link to it.** When citing the WVU Medicine NLP Summit talk, link to the talk page on nlpsummit.org.

### Competitors
- Name and benchmark only against the **strongest competitor(s)** in a category. Goal: show we are the best in the world in regulatory-grade in-environment risk-adjustment AI, regardless of the competitor's size or funding.
  - AI-native pure plays: Apixio, Reveleer, RAAPID, Navina, CodaMetrix, ForeSee, Aptarro
  - Legacy enterprise: Optum (Episource), Solventum, Inovalon, Datavant
  - Hybrid services + software: Vatica Health, Episource, GeBBS, HCC Coders
  - Frontier general-purpose LLMs as a generic-AI baseline: GPT-class, Gemini-class, Claude-class
- Never compare to minor competitors — naming them elevates them.
- When we do compare: benchmark table with specific metrics, methodology cited, link to peer-reviewed paper or reproducible methodology.
- **Pattern to favor:** isolate one weakness per competitor category. AI-native pure plays are mostly cloud SaaS — attack on in-environment deployment. AI-assisted vendors require humans for every output — attack on end-to-end automation. Services bureaus have a structural conflict of interest — attack on incentive alignment and audit risk. Don't try to attack everyone on every axis.

### Negative statements about anyone
- **Do not write negative general statements** unless you can cite a specific source. Avoid "many vendors are conflicted" or "most coding services push the envelope on RAF." These may not be true, may offend, and become less true over time.
- ✅ "OIG found that unsupported diagnoses resulted in $7.5 billion in Medicare Advantage payments in 2023 [link]. Martlet AI addresses this by..."
- ❌ "Most risk-adjustment vendors don't actually validate MEAT evidence."
- **Do not name any organization in a negative context.** Don't write "Vendor X was sued for Y" — they may become a customer. If a regulatory or legal point must be made, cite the source and let it speak; don't editorialize.
- Structural arguments (the "outsourced coding has a conflict of interest" point in our positioning) are made in the abstract — about the category — not about a named vendor.

### Training and validation data
- Never disclose specific sources of training or validation data. Say "a combination of public clinical text and proprietary annotated datasets developed by John Snow Labs."
- Exception: peer-reviewed papers where evaluating against a public test dataset is the point. Triple-check the dataset license allows commercial use and publication before naming it.

### PHI, PII, PCI
- **Zero** PHI, PII, or PCI in anything written for external consumption — text, screenshots, code examples, notebook outputs, images.
- If example data shows names or other PHI-like fields, it must be **synthetic**, with a footnote: *"All patient data shown is synthetically generated for illustration."*

### A note on the John Snow Labs relationship
- John Snow Labs is the corporate parent and funder of Martlet AI. Treat John Snow Labs as a special category — neither a generic third party nor a customer in the conventional sense (though JSL does use the Martlet AI engine in its own coding products — that case study lives on the site).
- When invoking the JSL relationship for credibility, attribute factual claims to JSL's published material — peer-reviewed papers, the launch press release, the johnsnowlabs.com customer roster.
- Do not put words in JSL leadership's mouth. The David Talby launch quote in the press release is published and citable in a JSL-authored context (e.g., third-party press coverage). On the Martlet AI site itself, the leadership voice is Hasham and Ritwik.

## 10. Article & Blog Post Structure (martlet.ai)

### Titles
The title summarizes the whole article. Opposite of clickbait. For every 10 readers of the title, 1 reads the article; we write for the 9 who won't.

- Concrete, specific, numeric where possible.
- ✅ "Why MEAT validation fails on 30% of HCCs in v28 — and what to do about it"
- ✅ "How WVU Medicine surfaced previously missed HCCs across 25 hospitals"
- ❌ "The future of HCC coding"
- ❌ "Introducing Martlet AI 1.5"
- Optimize for SEO — include the category keyword (e.g., "RADV audit," "HCC v28," "risk adjustment AI," "in-house HCC coding").
- Typically 10–16 words when carrying both a number and the "so what."

### Subtitles (H2/H3)
Subtitles summarize the text below them and form a standalone skim path.

- ❌ "Introduction," "Background," "Overview," "Conclusion"
- ✅ "Why outsourced HCC coding is structurally conflicted"
- ✅ "How VPC-deployed AI changes the security review"
- 5–10 words is the sweet spot. Phones display subtitles in big font — they catch the eye first.
- Each H2 should also work as a question someone would ask an AI engine.

### Opening paragraph (first ~80 words)
- Answer **"what's in it for me"** for the risk-adjustment leader, compliance reviewer, or AI governance lead.
- State the operational problem, not the product.
- Include specific numbers or named outcomes where possible.
- Keep it under ~80 words so it fits inside an LLM retrieval window (improves AI-engine citation rates).

### Structure for technical and operational deep-dives
Even for V28 walk-throughs, RADV methodology pieces, or release-driven posts:
1. **Problem framing (H2):** what the problem is, why it isn't trivial, and the non-functional requirements (accuracy, audit-defensibility, in-environment deployment, throughput, cost) any solution must satisfy.
2. **Solution introduction:** what we built and the operational outcome.
3. **Technical or operational detail:** how it works. Internal terms get defined here.
4. **Evidence:** benchmarks, customer validation, CMS source documents linked, reproducibility.
5. **Close:** recap + CTA.

Never open a piece with internal jargon. If the first thing a reader sees is "MEAT-aware multi-pass validation against the v28 mapping" or "the new sampling-extrapolation simulator," they feel they're in the wrong room and leave. **Lead with the use case and benefit.**

### Closing paragraph
- Reiterate the key result or operational implication.
- One clear **call to action**: read the related solution page, schedule a working session, read the related case study, request the compliance packet.

### Hero and supporting images
- Every blog post needs a **strong hero image** that captures the key message in one frame.
- Walk-throughs and benchmark pieces use multiple images — diagrams, real product screenshots, charts, before/after — each with a caption.
- No stock photos of smiling doctors or abstract "AI brain" images. Prefer real product screenshots (the reviewer UI, an evidence packet, a metrics dashboard), real architecture diagrams, and real benchmark charts.

### Bold for scanning
Bold **specific numbers and named outcomes** so they catch the eye on a skim — e.g., **25 hospitals**, **#1 on 12 of 13 benchmarks**, **page-level evidence on every HCC**. Don't overdo it: 1–3 bolded phrases per section. Bolding everything is a classic AI-text tell.

### Length
Operational and technical posts typically 1,200–2,500 words. RADV and compliance pieces can run longer (2,500–4,000) because the audience reads carefully. Release posts can be shorter if title and opening deliver the "what's in it for me."

### FAQ at the end
Substantive articles end with 5–8 Q&As. Each Q is a natural-language question; each A is a standalone 2–4 sentence answer. Schema.org FAQPage markup baked in.

## 11. Thought Leadership (articles in outside outlets)

Same brand voice as our own blog, plus these constraints — most external outlets (Forbes, Fortune, HBR, Healthcare IT News, MedCity News, Becker's, Health Affairs, BuiltIn, etc.) have strict editorial policies.

### Promotional restrictions
- **Do not name "Martlet AI" or our products in body copy** as a sales pitch. The byline establishes affiliation; that's enough.
- **Do not link to martlet.ai or any product page.** No CTAs. No "schedule a call." No "request a demo." Most outlets reject the piece if these appear.
- We can link to **John Snow Labs' peer-reviewed papers, the published WVU Medicine NLP Summit talk, and other research artifacts** where the link supports a factual point — these are research, not marketing.

### Mentioning other companies
- **Disclose any financial relationship.** If we name a public customer, the disclosure goes in writing — typically as a parenthetical or a closing-line note: *"(Disclosure: [Customer] uses risk-adjustment AI from Martlet AI, the author's company, as detailed in [public reference link].)"*
- **Don't name organizations we don't have public backing on.** If we have no public case study and no peer-reviewed/reproducible benchmark, we don't name them — positively or negatively.
- **Never name an organization in a negative context.** No "Vendor X was sued for Y," "Vendor X had a breach," "Vendor X failed to comply with Z." They may become a customer. If the point must be made, cite the public source and stop.
- **The John Snow Labs corporate relationship gets disclosed.** When we write thought leadership and reference JSL's research or stack, the disclosure is "Martlet AI is a wholly-owned John Snow Labs spinoff."

### Statements about the market
- Same rule as §9: no negative generalizations without a citation. Replace opinions with cited statistics.
- ✅ *"OIG found that unsupported diagnoses resulted in $7.5 billion in Medicare Advantage payments in 2023 [link]."*
- ❌ *"Most health plans don't actually validate the HCCs they submit."*

### Voice
- Slightly more measured than our own blog — we are a guest in someone else's publication.
- Lead with the industry insight; let our credibility come from the byline + the quality of the analysis, not from selling.
- The reader should finish thinking *"this author understands risk adjustment"* — and then look up the byline to learn who we are.

### Topic selection
- Subset of §4: only topics where we have public proof. If we can't cite our own customer case study or public CMS / OIG / peer-reviewed material to back the analysis, we don't have the right to write the piece.
- Strongest topic territories for Martlet thought leadership: RADV preparation and the V28 transition; the in-house vs. outsource economics of HCC coding; AI governance for healthcare; the difference between healthcare-specific and general-purpose AI in regulated workflows; what compliance teams should ask AI vendors.

### Disclosures (default closing line)
> *Hasham Ul Haq is the Co-founder and CTO of Martlet AI, a regulatory-grade risk-adjustment AI company and a wholly-owned John Snow Labs spinoff. Martlet AI's technology is used by [N+] health plans, ACOs, and risk-bearing provider organizations.*

Or, by Ritwik Jain:
> *Ritwik Jain is the Co-founder and CRO of Martlet AI, a regulatory-grade risk-adjustment AI company and a wholly-owned John Snow Labs spinoff.*

Or, with a customer reference:
> *(Disclosure: WVU Medicine uses risk-adjustment AI from Martlet AI, the author's company. See the public NLP Summit reference at [link].)*

## 12. Sales Collateral (decks and solution pages)

Sales collateral introduces Martlet AI to prospects who often don't know us. Every deck or solution page must follow the same five-stage flow, in order. Never skip stages 2 and 3 — they are why prospects give us 30 minutes vs. 5.

### Stage 1 — Title (1 slide / page hero)
The title states the problem we solve, in the prospect's own words. Plain, specific, no cleverness.
- ✅ "Retrospective HCC coding with audit-grade evidence on every code"
- ✅ "RADV audit readiness, year-round"
- ❌ "Unlock the Future of Risk Adjustment AI"

A one-line subhead frames the outcome, not the feature: *"Process millions of charts inside your environment with MEAT-aware validation and page-level evidence."*

### Stage 2 — Why listen to us (1–2 slides / above the fold) — *establish credibility before pitching*
Before anything else, prove we are credible. The prospect hasn't heard of us yet and needs to know this is a safe, proven choice — not a small startup making big claims.

Use 4–6 of the differentiator metrics in §13 (proof points): the John Snow Labs spinoff status; the 500+ JSL-stack customers; the WVU Medicine production deployment; the Pacific AI certification; the V28 / payment-year discipline; the in-environment deployment posture.

This slide / section answers: "Are these people credible? Are they real? Do they have the operational track record to do this?"

### Stage 3 — Who's already doing this with us (1 slide / page section) — *de-risk by proving it's been done*
Logos and named case studies of organizations directly relevant to this prospect's problem. Risk-adjustment buyers do not want to be guinea pigs.

- **Pick logos at the prospect's scale.** A pitch to a regional health plan shows logos and case studies of plans of similar scale. A pitch to a 25-hospital system shows WVU Medicine.
- **Pick case studies relevant to the prospect's specific workflow.** A prospective-coding prospect sees the WVU Medicine case study. A retrospective-coding prospect sees the JSL partnership case study (which is fundamentally a retrospective and platform-engine story).
- Each case study includes the named outcome from the public reference (with link if delivered as a web page).

This slide / section answers: "Has someone like me done this with them and succeeded?"

### Stage 4 — Why we solve this better (3–6 slides / main page section) — *now we pitch*
Only after the prospect believes we should be on their shortlist do we describe the solution. **Frame everything as differentiation, not capability.**

- ❌ "We do retrospective HCC coding."
- ✅ "We do retrospective HCC coding more accurately (healthcare-specific medical language models, ranked #1 on 12 of 13 medical benchmarks vs. frontier general-purpose LLMs), inside your environment (no PHI ever leaves your network), and end-to-end (high-confidence majority handled without a human in the loop)."

Every claim in this section is backed by:
- a peer-reviewed metric and link, or
- a public benchmark, or
- a named public case study outcome, or
- a CMS / OIG / regulatory source document linked.

Common differentiation axes for Martlet AI: regulatory-grade accuracy, in-environment deployment, end-to-end automation, reproducibility, integrated three-workflow platform, audit-defensibility, structural cost economics (no success commission, no per-token fees).

### Stage 5 — How we deploy and engage + the "checklist" answers (1–3 slides / page section)
Now we answer the checklist questions every prospect asks before they pass us up the chain internally:
- Deployment options: on-premises, private cloud (AWS / Azure / GCP), Databricks / Snowflake, air-gapped
- How we engage: software license, professional services, support tiers, training, no per-token or per-chart fees, no success commission
- Security and compliance: HIPAA-aligned by deployment model, BAA, security policies mapped to HITRUST/NIST/SOC 2/ISO 27001, Pacific AI certified, and (most importantly) the architectural argument that PHI never leaves the customer environment
- AI governance: model versioning, controlled releases, append-only audit log, bias and red-team testing
- Integrations: EHR (FHIR R4 + named EHR systems in production), HL7, claims systems, document stores
- Pricing model in summary (annual license, scaled by operational volume) — full pricing typically in a follow-up
- Time to first value: realistic timeline for pilot, validation, production

In a deck this is one or two summary slides + an appendix. On a solution page these are short FAQ-style sections low on the page.

### Stage 6 — Call to action
Always crisp, always specific.
- **Deck CTA:** "Schedule a 30-minute working session" / "Run a mock RADV audit on a sample of your data" / "Scope a pilot on one contract or one provider group." Pick the one fit for the buying stage.
- **Web page CTA (above and below the fold):** "Talk to us" / "See it on your charts" / "Request the compliance packet" / "Read the WVU Medicine case study." A solution page should never make the prospect hunt for the next step.

### Length and format
- **Decks:** 8–20 slides for the core flow; longer appendix is fine. One core idea per slide. Visuals over text. Real product screenshots over icons.
- **Solution pages:** the five stages map to the five top sections of the page. Big-number proof bar high on the page. Logos near the top. Benchmark tables in the differentiation section. CTAs repeated.

### What sales collateral never does
- Open with feature lists.
- Open with a long company history or "Our Story."
- Use generic AI/healthcare stock photography.
- Make the prospect read three slides to learn what we do.
- Hide the CTA.

## 13. Evidence Library

Pull from these as appropriate. **Always verify the most current numbers before publishing** — these evolve.

### Inherited from John Snow Labs
- **500+ enterprise customers** on the John Snow Labs healthcare AI stack
- **#1 on 12 of 13 medical benchmarks** vs. frontier general-purpose LLMs (GPT-class, Gemini-class, Claude-class) — current JSL benchmarks
- **30+ peer-reviewed papers** on healthcare-specific medical language models
- **150M+ downloads** of John Snow Labs open-source healthcare AI libraries and models
- **2 billion patient notes** processed at production scale on the JSL stack (Providence de-identification reference)

### Martlet AI specific
- **Live in production at WVU Medicine** — a 25-hospital academic health system, presented at the NLP Summit ("Maximizing Patient Care through AI-Enhanced HCC Code Discovery")
- **John Snow Labs uses Martlet AI's engine** to power its own medical coding products
- **Pacific AI certified** for healthcare AI governance
- **Founded as a John Snow Labs spinoff** with full JSL funding (no venture or debt)
- **Co-founded by Hasham Ul Haq (CTO) and Ritwik Jain (CRO)**

### Operational claims requiring confirmation before publish
These are placeholders that the build spec marks as TODO; they need verified Martlet operational numbers before publication:
- Customer-side HCC capture lift (% over baseline)
- Customer-side coding throughput (charts/FTE/day)
- CDI query reduction (%)
- Suggestion adoption rate (%)
- Cost per chart at million-chart volume
- MEAT validation F1 vs. comparators
- Deployment timeline (engine + EHR integration)

### Architectural claims (verifiable against the product)
- **Runs on-premises, in private cloud, or air-gapped**
- **PHI never leaves the customer's environment**
- **No external AI API calls in the data path**
- **Page-level evidence on every HCC** — chart sentence + encounter ID + DoS + provider + credentials + signature status
- **MEAT-aware validation** with documented Monitor/Evaluate/Assess/Treat criteria
- **Append-only audit log** capturing who acted, what changed, when, with which model version
- **Deterministic, reproducible output** — versioned models, mappings, and prompts; same input under same configuration produces same output
- **V28 mapping** with payment-year discipline; outdated codes blocked at submission

**Replace general benefits with specific metrics.** "Highly accurate" → "ranked #1 on 12 of 13 medical benchmarks." "Widely used" → "in production at WVU Medicine, a 25-hospital health system." "Comprehensive evidence" → "page-level: chart sentence + encounter + DoS + provider + signature."

## 14. SEO + GEO (Generative Engine Optimization)

### SEO
- **Title** is the highest-impact SEO surface. Include the category keyword (HCC coding, risk adjustment, RADV, MEAT, V28, in-house risk adjustment).
- **H2/H3 subtitles** are the next layer. Use question-form subtitles where natural ("Why does outsourced HCC coding fail at audit?").
- **URL slug** short, keyword-rich, hyphenated, matches the title's core phrase. Preserve existing URLs unless explicitly changing.
- **Meta description** 140–160 characters, echoes the opening's "what's in it for me."
- **Internal links** to relevant solution pages, case studies, and prior posts in the first half, not just the bottom.
- **Alt text** on every image, descriptive (not decorative filler).

### GEO
LLMs increasingly intermediate between readers and our content. Make pieces retrievable and citable.
- **Definition-first openings.** First 1–2 sentences of the article, and of each major section, are a self-contained, citable statement. Example: "Martlet AI is a regulatory-grade risk-adjustment AI platform that runs inside the customer's environment to automate HCC coding for Medicare Advantage payers, ACOs, and risk-bearing providers."
- **First paragraph under ~80 words** so it fits in a single retrieval chunk.
- **High information density.** Named entities (workflows, customers, standards, CMS documents) plus specific numbers per paragraph.
- **FAQ section at the end** of substantive articles (5–8 Q&As), with FAQPage schema markup.
- **Prefer text over image** for anything that must be retrievable. Tables in HTML are citable; benchmarks in PNGs are not. Keep PNGs for visual accent and provide the data in text.
- **Structured data:** FAQ, HowTo, Article, Organization schema where appropriate (dev team owns this).
- **Citable claims cite their source.** AI engines weigh sourced claims higher.
- **Frequency over position.** Publish consistently on the core topics — RADV, V28, MEAT, in-house coding economics, healthcare-specific AI vs. general LLMs, AI governance — so AI engines see Martlet AI as the authoritative source.

## 15. Social Posts

Every social post answers **"what's in it for me"** in the first sentence.
- ✅ "OIG just found $7.5B in unsupported diagnoses in 2023 MA payments. Here's how V28 mapping discipline reduces your exposure."
- ❌ "Martlet AI announces new feature release"

Lead with the operational fact or finding the reader cares about, then link. Announcements about Martlet AI itself should still frame the meaning for risk-adjustment leaders, not just the product update.

LinkedIn is the primary social surface. X is secondary. Both: professional register, no emoji, no hashtag soup.

## 16. Content Type Tone Guide

| Type | Tone modifier |
|---|---|
| Solution pages | Confident, proof-dense, skimmable; benchmark tables; risk-adjustment buyer is the reader. Follow §12 sales collateral structure. |
| Compliance page | Same rigor; security, regulatory, and AI governance reviewers are also reading. Architectural arguments + control mappings. |
| Case studies | Customer-first, narrative, outcome-focused; named institution and (where approved) named spokesperson. |
| Own blog / articles | Explanatory, assumes operational and technical literacy; builds to how Martlet AI is relevant. CTA at end. |
| External thought leadership | §11 rules apply: no product mentions, no Martlet AI links, disclose customer relationships and JSL parent relationship, no negative naming. |
| Webinars and recorded sessions | Practical, speaker-credentialed, "what you'll learn" oriented. Full abstract on the page, not a one-liner. |
| Press releases | Formal, third-person, dateline; Hasham or Ritwik quote when leadership voice needed; JSL relationship disclosed in boilerplate. |
| Social (LinkedIn, X) | Professional; lead with the operational fact or finding; link to article/case study. |
| Sales email | Direct, benefit-led, two to three sentences, specific CTA. |

## 17. Mechanics

- Use correct US English.
- Use the Oxford comma.
- Address the reader in the second person ("you," "your"); never "users."
- Short words over long ("use" instead of "utilize"); Anglo-Saxon over Latinate.
- Digits for measurable quantities, percentages, benchmarks. Spell out at sentence start.
- Compound modifiers hyphenated: healthcare-specific, regulatory-grade, purpose-built, in-environment, on-premises, air-gapped, audit-defensible, MEAT-aware, page-level.
- Sentence case for subtitles (H2/H3); title case only when mimicking a formal publication's house style.
- Product names and proper nouns capitalized as set; generic categories lowercase. "Martlet AI" always with the space.
- Acronyms: spell out non-core ones first use ("Risk Adjustment Data Validation (RADV)"). Core ones (HCC, RAF, MEAT, RADV, MA, ACO, CMS, EHR, HIPAA, AI, ML, LLM, NLP) don't need spelling out for the typical reader.
- Double quotes for direct quotes; attribute with name + title + organization.
- Citations: link to the CMS / OIG / peer-reviewed source on the original venue; always name the source publication or document.
- Em-dashes: sparingly.

## 18. Compliance & Safety Language

- Be careful and specific. "MEAT-validated documentation" over "audit-proof" unless the literal claim is defensible.
- AI **automates** workflows and **handles** the high-confidence majority of HCCs; clinicians and coders **review** exceptions and make any clinical-judgment calls. Never imply Martlet AI replaces clinical judgment.
- Name the frameworks: HIPAA (Privacy Rule and Security Rule as relevant), GDPR (data sovereignty), HITRUST CSF, NIST 800-53, ISO 27001, SOC 2 — by their proper names.
- Compliance claims are precise: "policies and controls fully map to the requirements of HITRUST CSF, SOC 2, ISO 27001, and NIST 800-53" — not "compliant with" unless externally certified.
- AI governance claims are precise: "Pacific AI certified," "version-controlled models," "controlled releases with rollback," "append-only audit log," "bias and red-team tested" — each is a defensible statement we can back up.
- Never claim SOC 2, HITRUST, or any other external certification we do not hold. The architectural argument (PHI never leaves the customer's environment, customer's existing controls are what's in effect) is stronger than borrowed credentials.

## 19. Pre-Publish Checklist

### Voice & substance
- [ ] Direct second person ("you," "your")?
- [ ] Reader's operational and technical competence assumed?
- [ ] Every strong claim backed by a number, paper, public reference, CMS source, or named (publicly cited) customer?
- [ ] General benefits replaced with specific metrics?
- [ ] Risk-adjustment-specific language, not generic AI/SaaS?
- [ ] Aggrandizing adjectives removed unless evidence earns them?
- [ ] Long/Latinate words replaced with plain ones?
- [ ] At least one core message (§6) anchored?
- [ ] Leadership quotes attributed to Hasham Ul Haq or Ritwik Jain?
- [ ] No mention of David Talby or other JSL personnel as Martlet AI leadership voice?
- [ ] No "AI-assisted," "AI-powered," "AI copilot" used about Martlet AI?
- [ ] No "startup" or "founder journey" framing?

### Other organizations (§9, §11)
- [ ] No negative generalizations? Any negative claim cited to a specific source?
- [ ] No organization named in a negative context?
- [ ] If competitors named, are they the strongest in the category — with a benchmark table?
- [ ] Customer only named / quoted if there is a public reference linked?
- [ ] Customer framed as the hero?
- [ ] No confidential customer data?
- [ ] No training/validation data sources disclosed beyond "public clinical text and proprietary annotated datasets"?
- [ ] No PHI/PII/PCI; synthetic examples labeled?
- [ ] John Snow Labs corporate relationship disclosed where relevant?

### If thought leadership (§11)
- [ ] No "Martlet AI" or product names in body copy as a pitch?
- [ ] No links to martlet.ai or product pages?
- [ ] Customer relationships disclosed in writing?
- [ ] JSL parent relationship disclosed in author bio?
- [ ] No naming of organizations without public backing?
- [ ] Closing disclosure line included?

### If sales collateral (§12)
- [ ] Title states the problem, not a tagline?
- [ ] Stage 2 (why listen to us) above the fold / in first 2–3 slides?
- [ ] Stage 3 (who's already doing this) before any solution detail?
- [ ] Logos and case studies match the prospect's scale and workflow?
- [ ] Differentiation framing in stage 4 (not feature framing)?
- [ ] Every differentiation claim backed by a peer-reviewed metric, public case study, or CMS source?
- [ ] Deployment / engagement / pricing summary present?
- [ ] CTA crisp and specific?

### Article structure (§10)
- [ ] Title summarizes the article?
- [ ] Subtitles summarize the text below them (not "Introduction" or internal jargon)?
- [ ] Strong hero image — real product, not "AI brain"?
- [ ] Opening answers "what's in it for me" in ~80 words?
- [ ] Operational/technical pieces open with problem framing before solution?
- [ ] Closes with recap + clear CTA?
- [ ] Bolding sparing (≤3 per section)?

### AI-writing check (§8)
- [ ] No banned AI-telltale words?
- [ ] No "not X, but Y" contrastive sentences?
- [ ] No "In today's ever-evolving…" or "In the realm of…" openers?
- [ ] No em-dash overuse?
- [ ] Varied sentence and paragraph length?
- [ ] Sounds like a person when read aloud?

### GEO / SEO (§14)
- [ ] Title and subtitles include category keywords?
- [ ] Definition-first opening for LLM retrieval?
- [ ] High information density?
- [ ] FAQ section at the end?
- [ ] Citable claims linked?
- [ ] Data in text, not only in images?
- [ ] Existing URLs preserved?

### Compliance language (§18)
- [ ] No claim of external certifications we don't hold (SOC 2, HITRUST, etc.)?
- [ ] Pacific AI certification claimed precisely?
- [ ] Architectural argument for security framed as positive (stronger than SaaS), not apologetic?
- [ ] No claims about clinical decision-making?

### Scope (§4)
- [ ] Topic in our expertise and product area (risk adjustment specifically)?
- [ ] Not encroaching on JSL's broader healthcare AI surface area?
- [ ] No "founder journey" / "startup journey" framing?
- [ ] Martlet AI not described as a startup?
