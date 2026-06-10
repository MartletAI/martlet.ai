# AI Didn't Fix HCC Coding—It Made It Harder; This is How to Fix It | Martlet AI

**Date:** 04.09.2026  
**Thumbnail:** /assets/blog/ai-didnt-fix-hcc-coding.jpg  
**Description:** Discover why AI solutions have made HCC coding harder, not easier, and learn how purpose-built healthcare AI can restore accuracy, trust, and compliance.  
**MetaTitle:** AI Made HCC Coding Harder—Here's How to Fix It | Martlet AI
**Tag:** Insights
**DefinedTermName:** Hierarchical Condition Category (HCC) Coding
**DefinedTermDescription:** A risk adjustment mechanism used in Medicare Advantage and value-based care where diagnoses are grouped into risk categories to predict future healthcare costs and determine reimbursement amounts.

# AI Didn't Fix HCC Coding—It Made It Harder; This is How to Fix It

*Guest article by Ritwik Jain, Co-Founder and CRO at Martlet AI, and Senior Director at John Snow Labs*

Hierarchical Condition Category (HCC) coding is one of the areas in healthcare where AI is the obvious solution. On paper, it makes perfect sense. Use it to scan charts, identify diagnoses, group them into risk categories, and more efficiently predict future healthcare costs. In Medicare Advantage and value-based care, where risk adjustment directly impacts reimbursement, it sounds like a natural fit. But reality tells a very different story.

## Understanding the Real Problem

If you want to understand what is actually happening in HCC coding today, you have to go beyond conference panels and vendor presentations. You have to go straight to the source: speak to the coders reviewing charts late into the evening, the CDI teams trying to close documentation gaps, and the physicians clicking through alerts in already overloaded clinic schedules.

Over the past year, building [Martlet AI](https://www.martlet.ai/) has been an exercise in listening to these testimonies. Across payers and health systems, one theme kept coming up consistently: **most AI solutions in the HCC space are creating burnout, not reducing it.** That realization is an uncomfortable, but important one.

## The Burnout Epidemic: AI as Interruption

Instead of simplifying workflows, many AI tools are overwhelming clinicians and coders with low-quality outputs. Providers describe being inundated with suggestions at the point of care that lack context or clinical relevance. After enough weak recommendations, trust erodes, alerts become noise, and the system that was meant to assist starts to feel like an interruption.

Coders share similar frustrations. Retrospective reviews are often flooded with false positives and low-precision suspects. Instead of eliminating manual work, AI shifts it. Coders become validators of questionable output, spending valuable time dismissing conditions that should never have surfaced in the first place.

We recently spoke with an Accountable Care Organization that experimented with a general-purpose large language model (LLM) for HCC suspecting. **Nearly 70% of the AI-generated suspects were rejected by providers.** That's not a marginal tuning issue, but a clear indicator that the system fundamentally does not understand the clinical workflow it's trying to augment.

When clinicians repeatedly override AI, frustration builds quickly. This breeds a lack of trust and eventually burnout, creating adoption to stall. But the deeper issue is that HCC coding has too often been treated like a generic natural language processing (NLP) problem. A growing number of vendors are building solutions on top of general-purpose LLMs and attempting to adapt them to healthcare through prompting alone.

## Why Generic AI Doesn't Work for HCC

To put it simply, this doesn't work. HCC coding is not a chatbot exercise — it's a **high-precision, high-stakes reimbursement discipline.** Every diagnosis submitted affects Risk Adjustment Factor (RAF) scores. Every unsupported condition carries audit exposure, and every error has financial consequences.

General-purpose LLMs are remarkable tools, but they were never designed for the clinical nuance, regulatory constraints, and documentation rigor required under the Centers for Medicare & Medicaid Services (CMS) reimbursement rules. In other words, in risk adjustment, **"almost right" is still wrong.**

Another troubling pattern we've observed is **"unlinked chart harvesting."** Some systems scan years of historical documentation and surface every condition they can find, regardless of whether it's clearly tied to a documented encounter. The suspect lists may look impressive, but the burden of validation falls back on coders. Which encounter supports this diagnosis? Was the condition assessed and managed? Would the organization stand behind it in a Risk Adjustment Data Validation (RADV) audit?

As audit scrutiny increases, defensibility is no longer optional. Diagnoses must be supported by medical record documentation and clearly linked to legitimate encounters. When AI outputs are not encounter-aware, organizations do not just assume inefficiency — **they assume risk.**

## What Responsible AI in HCC Coding Looks Like

So what does responsible AI in HCC coding actually look like?

It starts with acknowledging that this is not a generic problem. It requires:

- **Models trained on real, de-identified patient charts** — not internet data
- **Healthcare-specific NLP** and proprietary AI systems built for clinical reasoning
- **Continuous tuning** based on real-world coding workflows and feedback from providers and compliance teams
- **A validation-first mindset** before anything reaches production

The goal shouldn't be to generate more suspects. It's to **generate better ones.** This means diagnoses that are encounter-linked, clinically supported, and defensible before they're ever submitted.

### Real-World Proof Points

In one health system serving roughly 100,000 patients, longitudinal chart analysis combined with real-time, encounter-specific suggestions led to a provider selection rate of approximately **70%.** That number reflects trust. Providers don't select recommendations they don't believe in.

In another case, a health plan reviewing its CMS submissions for the 2024 and 2025 payment years uncovered more than **2,000 undercoded or missed HCCs**, each tied to defensible documentation. The outcome was not just a measurable revenue lift, but greater confidence heading into audits. These results weren't from bigger models or more aggressive prompting. They came from **understanding the complexity of the use case and building the technology accordingly.**

## The Bottom Line: Accuracy as Product

HCC coding isn't the place for experimentation. It is **infrastructure-level technology that directly affects revenue integrity and compliance exposure.** At its core, HCC is about trust — among clinicians and technology, compliance teams and submitted codes, and payers and regulators. Any system, AI or otherwise, that can't clearly provide that doesn't belong anywhere near reimbursement.

**AI can absolutely improve HCC coding.** But only if it is:
- Built specifically for healthcare
- Validated to the core
- Designed to work with clinicians and coders, not against them

In this space, accuracy is not a feature. It is the entire product.

## What Leaders Should Look For

Start by asking whether the system was purpose-built for risk adjustment or simply adapted from a general-purpose model. Demand encounter-linked, evidence-traceable outputs, not broad historical harvesting. Examine how false positives are controlled and how provider trust is measured in real-world settings. And most importantly, ensure compliance and audit defensibility were built into the architecture from day one.

**In HCC coding, precision isn't optional. It's protection.**

---

*About Ritwik Jain: Ritwik is Co-Founder and Chief Revenue Officer at Martlet AI, where he leads go-to-market strategy for healthcare-specific AI solutions. He is also Senior Director at John Snow Labs, a leading provider of clinical NLP for healthcare organizations. His work focuses on building AI systems that work for healthcare, not the other way around.*
