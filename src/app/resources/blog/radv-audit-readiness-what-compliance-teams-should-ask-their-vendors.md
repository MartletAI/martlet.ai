# RADV Audit Readiness: What Compliance Teams Should Ask Their Vendors

**Date:** 12.15.2025  
**Thumbnail:** /assets/blog/radv-audit-readiness-what-compliance-teams-should-ask-their-vendors.png 
**Tag:** Product
**Authors:**
*   Ritwik Jain
*   Hasham Ul Haq

**Would every risk-adjusted diagnosis in your pipeline hold up under a full-population Risk Adjustment Data Validation (RADV) audit?**

The CMS now uses statistically valid sampling and applies the results to the entire contract, which means that even a few chart errors can lead to large payment recoveries.

Moreover, under the Hierarchical Condition Category (HCC) V28 model, diagnosis mappings have been reorganized. Some diagnosis codes that qualified in previous years no longer qualify, which makes precise, well-supported documentation critical.

Meeting this higher standard requires more than manual checks. Compliance teams need systems that automatically block outdated codes, keep permanent and verifiable logs of users and evidence, and ensure that PHI stays within their own infrastructure from the start.

This guide walks you through practical questions to help you assess whether a vendor can meet these requirements and stand up to audit scrutiny.

---

## **Compliance Gaps That Put RAF Revenue and Audit Defense at Risk**

Before you compare vendors, identify the exact issues that lead auditors to flag errors, require repayments, and delay results. The most common gaps include:

### **Invalid or Non-Compliant Source Records**
In a RADV audit, a diagnosis only counts if a valid medical record backs it. CMS defines a valid record as one that meets all of the following conditions:
*   Legibly signed and dated by a qualified provider
*   Documents a face-to-face encounter during the data-collection year
*   Comes from an acceptable source such as an inpatient hospital record, hospital outpatient record, or physician/practitioner note
*   Contains the provider’s credentials
*   Is free from missing or incorrect dates, missing signatures, or other documentation errors

CMS will not accept records from phone calls, portal messages, lab-only visits, or superbills. If a record fails these standards, the related HCC is removed from the member’s risk score, which lowers Risk Adjustment Factor (RAF) and risks reducing your payment.

### **Evidence Must Be Clear, Specific, and Easy to Retrieve**
Even if a record meets all the requirements above, it will not survive a RADV audit unless the diagnosis is documented unequivocally. CMS expects the supporting chart to show the exact statement containing:
*   The diagnosis
*   The date of service
*   The author’s name
*   The provider’s credentials

All of this must come from an acceptable face-to-face source in the correct year.

If CMS allows an attestation, it must be on their own form and completed by the clinician who treated the patient. Any other attestation will be rejected. Moreover, you should be able to pull the complete packet for any audited HCC quickly to avoid missing CMS deadlines.

### **Mapping Must Match the Payment Year’s Model**
Accurate mapping from ICD-10 codes to HCCs depends on using the rules for the correct payment year. CMS updates both the mapping tables and the model software annually. If your system uses last year’s logic, it can assign the wrong HCC, inflate a member’s risk score, and expose your plan in a RADV audit.

In v28, CMS reorganized several categories and applied “constraining,” which means related diabetes HCCs now carry the same payment weight. At the same time, many diagnosis codes that mapped to payment HCCs under v24 were removed entirely from payment categories in v28.

Suppose your mapping engine still relies on outdated crosswalks. In that case, it can submit HCCs that no longer qualify, leading to overstatements in risk and recoveries that multiply when CMS applies sample errors across your contract.

### **Audit Trails Must Be Tamper-Proof and Complete**
HIPAA’s Security Rule requires audit controls that capture every action in systems containing electronic protected health information (PHI). It should also safeguard data from improper alteration or destruction.

Federal retention requirements require Medicare Advantage organizations to keep these records for at least ten years. Therefore, an audit log should be both immutable and time-stamped, creating a permanent history of coding decisions. At a minimum, it needs to record:
*   The name of the person who accepted the diagnosis
*   The name of the person who rejected the diagnosis
*   The name of the person who modified the diagnosis
*   The date and time of each action
*   The original value and the updated value
*   The payment-year model version in effect at the time

If even one of these details is missing, it becomes harder to show how and why a coding decision was made.

### **Every RAF Change Must Be Traceable**
An audit trail captures the actions taken in the system. RAF traceability goes further by showing how those actions (and other factors) changed a member’s risk score. In a RADV audit, CMS can recalculate and rerun risk scores for payment recovery, so you must be able to point to the exact reason for every shift.

That means connecting the change to its source:
*   New or corrected documentation from a provider
*   A coding decision that added, removed, or revised a diagnosis
*   A change in the payment-year model that altered how a diagnosis maps to an HCC

You also need to separate changes driven by model updates from those caused by coder actions to defend the accuracy of the revised score or prove that it reflects valid, allowable risk.

---

## **Technical constraints that block scalable, audit-ready coding**
Even with sound policies, technical barriers can slow teams down and create audit risks.

#### **Manual review cannot keep up with audit volume**
RADV requires a valid, face-to-face, signed, and dated encounter note for each audited HCC. Much of that evidence lives in unstructured text or scanned images. Manually reviewing records cannot keep pace at scale, allowing gaps to go unnoticed until an audit exposes them.

#### **Fragmented file types break workflow consistency**
Plans handle a mix of large PDFs, faxes, images, and free text that often lack standardized USCDI data elements. One patient’s discharge summary might be a faxed PDF with the diagnosis buried in a scanned image, while another record for the same patient could be a structured EHR export with ICD-10 codes in discrete fields.

When each format is processed in a separate system, reviewers have to switch tools and follow different workflows to find and confirm the evidence. This fragmentation causes inconsistent results, makes it difficult to apply the same evidence standards across records, and slows audit responses when speed matters most.

#### **Generic LLMs miss payment-year logic and MEAT proof**
Defensible coding depends on using the correct payment-year HCC model and meeting documentation sfficiency standards such as MEAT (monitor, evaluate, assess, treat). Generic large language models (LLMs) are not designed to apply v28 mappings, keep versioned crosswalks, or produce a traceable rationale linked to the exact chart passage.

Without these safeguards, their suggestions may appear correct but will not stand up to an audit.

#### **Off-network tools stall in legal and security review**
Processing PHI with external services requires a Business Associate Agreement (BAA) and full HIPAA Security Rule safeguards. Tools that route data off-network often face long legal reviews or outright blocks. Delays in approval translate into delays in closing evidence gaps before CMS examines the charts.

---

## **Critical questions to vet an audit-ready HCC coding platform**
With the risks and technical constraints, the next step is due diligence. One approach is to invest in an HCC coding platform specialized to overcome the bottlenecks mentioned above.

However, selecting the right platforms requires asking the relevant questions that help separate the platform’s marketing claims from capabilities you can defend in an RADV audit. The following questions can be used as a guideline.

### **Can every HCC suggestion be traced to the exact sentence, provider name, and date in the patient record?**
You should be able to pull up, in one click, everything an auditor would need without piecing it together yourself. That means the exact sentence in the chart that contains:

*   The diagnosis
*   The encounter ID
*   The date of service
*   The provider’s name and credentials
*   Whether the note is signed or not

All of this should be stored in a way that cannot be changed later and should be ready to export in the same format that CMS will accept.

### **Does the platform automatically apply CMS updates when ICD-10 to HCC mappings change?**
You should not be responsible for tracking every change in HCC version 28. The platform should automatically apply the correct payment-year model, use the official CMS mappings for that year, and prevent submission of any code that no longer qualifies for payment.

Each report should display the mapping version that was used, and the system should allow you to rerun past data using the rules that were in place for that specific year.

### **How are over-coding risks detected before submission?**
You need to identify problems before the claim is sent. The platform should flag records that have missing provider signatures, incorrect dates, credentials that do not match the provider, or sources that the CMS will not accept.

It should also detect patterns that are often challenged in audits, such as diagnoses coming from Health Risk Assessments (HRAs) without a corresponding service record.

Any record that is flagged should be routed into a compliance review queue, and the system should provide a clear record of when the issue was resolved and what action was taken.

### **Are outputs deterministic and independently validated?**
When you process the same clinical note using the same settings, you should receive the same output every time. The platform should save the model version and the mapping version that were used for the run, attach this information to the output, and allow you to reproduce the exact result whenever needed.

Ask the vendor to provide proof that their results have been tested against independent benchmarks or reviewed by outside experts. Keep copies of those test results in your audit documentation to provide evidence of accuracy if CMS requests it.

### **Does the platform support a single audit trail across text notes, scanned documents, and medical images?**
For audit defense, you need a continuous chain of custody. Every HCC must point to the exact source and its location, whether it is a note section, a page, and coordinates in a scanned PDF, or a DICOM header and frame in an image. When using OCR to extract text from scanned or faxed records, the system should also store the confidence score and page reference. The same validation checks for face-to-face status, date of service, and provider credentials should apply consistently across all formats.

Audit defense requires a single, unbroken chain of custody. Each HCC should be linked to its exact source and location, whether that is a note section, a PDF page, and coordinates, or a header and frame.

When you extract data from these unstructured sources, you might need to store confidence scores and page references, and the same validation rules should apply across all formats for face-to-face status, date of service, and provider credentials.

### **What does the audit log record, and how is integrity guaranteed?**
An auditor will want to know who made a change, what was changed, when it happened, and why it was done. The platform should capture each of these details, along with a link to the supporting evidence.

The log must be write-once so it cannot be altered after the fact. You should be able to export the log in a standard format such as CSV or JSON, and it must be stored for the full period required by your record retention policy.

### **Does the system learn from reviewer corrections and use that feedback to improve future predictions?**
The feedback process must be measurable and reliable. The system should record every acceptance, rejection, or edit from a reviewer as labeled data. The vendor should provide proof that this feedback improves accuracy, as evidenced by measurable increases in precision and recall.

You should also receive metrics that show how often reviewers agree on the same decision and alerts if the model’s accuracy starts to degrade. Safeguards should include a

documented change control process, required approval before any new model is put into use, and the ability to return to a previous version if accuracy declines.

### **Is the system built to process large volumes of notes overnight so we can meet tight audit timelines?**
The platform must process high volumes of notes quickly and consistently. The vendor should provide verified metrics showing how many notes it can process per hour for each supported file format. The system should be able to increase capacity when needed and meet service levels that match your audit deadlines.

It should have a reliable queue to manage incoming files and allow processing to resume after a failure without losing data. Moreover, dashboards should provide a real-time view of ingestion, extraction, and coding so you can track progress as it happens.

### **Can the entire platform run inside your infrastructure without sending PHI externally?**
If your policy says that PHI cannot leave your network, the vendor’s answer should be “yes” with no exceptions. The complete process, including OCR, Natural Language Processing (NLP), and coding rules, should run on your own servers or in your private cloud environment.

If the platform uses any external service, it must be covered by a signed HIPAA BAA. You should also expect encryption that meets Federal Information Processing Standards (FIPS), strict controls over who can access encryption keys, and the option to run in a fully isolated network with no internet connection if your policies require it.

---

## **Does Martlet AI offer all the features you need in one secure platform?**
If the earlier questions set the standard, here is how Martlet AI meets them in one place you can run, secure, and defend.

### **Stay aligned with CMS rules all year**
Martlet AI automatically applies the latest payment-year rules as soon as CMS issues an update. It switches to the correct ICD-10 to HCC crosswalk, blocks codes that no longer qualify, and provides release notes showing exactly what changed and why. This keeps submissions aligned with current requirements and reduces the risk of resubmissions or audit findings.

### **Have audit-ready evidence for every HCC**
Every HCC is linked to the exact sentence in the patient’s chart, along with the encounter ID, provider name, credentials, and the date of documentation. For scanned records, Martlet AI also captures the page number and location on the page. All of this information can be exported instantly in a complete, audit-ready packet.

### **Turn reviewer actions into higher accuracy**
Every acceptance, rejection, or edit from a reviewer is stored as training data. The system uses this feedback to improve accuracy and reduce the number of records that need manual review. Model updates follow a documented change control process, pass quality checks before being deployed, and can be rolled back to a previous version if needed.

### **Launch new projects without waiting for labeled data**
Martlet AI uses domain-specific models and a zero-shot interface to launch new annotation projects immediately. Prompt templates are version-controlled and approved before use, and each output is linked directly to its prompt. This allows rapid startup while maintaining full traceability for audit purposes.

### **Review all formats in one consistent workflow**
Text notes, scanned PDFs, and medical images are processed in a single workflow using the same taxonomy and validation rules. Optical Character Recognition (OCR) includes confidence scores and page references so reviewers can quickly assess the reliability of each extraction.

### **Keep all PHI secure in your environment**
The platform runs entirely within your on-premises environment or private cloud. No data leaves your system during processing. All information is encrypted during transfer and while stored. BAAs are available when connectors are used, and air-gapped deployment is supported for environments that require full isolation.

### **Scale at enterprise volume**
Martlet AI processes large batches of mixed-format records overnight, scoring each chart for certainty so only low-certainty cases go to human review. A unified ingestion system with automatic retries keeps files moving, ensuring deadlines are met without creating backlogs.

### **Preserve audit integrity from start to finish**
This scale is matched by full traceability. Every coding decision is stored in an append-only log that links each HCC to its exact evidence and source file. A single audit trail spans text notes, scanned PDFs, and medical images, keeping the chain of custody intact when records move between formats.

### **Deliver consistent and verifiable results**
With the chain of custody preserved, Martlet AI ensures that the same chart processed under the same conditions will always produce the same result. Versioned mappings, controlled model releases, and rollback options protect quality, while documented test results give auditors clear proof of accuracy.

### **Reduce over-coding risk before submission**
Consistency is paired with prevention. The system flags codes with weak or incomplete evidence, routing them to compliance review, and applies current v28 rules to block outdated or remapped codes. This reduces the chance of audit findings and the costly repayments that can follow extrapolation.

---

## **Turning Compliance Pressure into Operational Advantage**

Full-population RADV audits and HCC v28 have turned compliance from a once-a-year task into something you must manage every day. That constant pressure can work in your favor when your workflow is built to handle it.

Modern systems remove manual handoffs, keep the proof next to every decision, and focus reviewers on the few cases that need judgment instead of sending them through stacks of PDFs. With the right process, you can ensure audit preparation becomes part of normal operations instead of a last-minute scramble.

Martlet AI gives compliance teams the tools to make audit readiness part of daily operations:
* Links every code to clear, verifiable evidence for instant retrieval during audits
* Improves accuracy by learning from reviewer corrections without breaking governance
* Processes high volumes of records entirely within your infrastructure to protect patient information
* Delivers faster audit readiness, clearer accountability, and predictable costs

To see how these capabilities would work with your own data, timelines, and security requirements, schedule a custom demo tailored to your audit plan.

---

## **Regulatory Pressure Has Made Speed and Evidence Non-Negotiable**
**(Introduction)**

* CMS’s Risk Adjustment Data Validation (RADV) Final Rule mandates full-population audits and extrapolated repayments
* Hierarchical Condition Category (HCC) v28 eliminates thousands of codes and tightens the rules for documentation specificity
* Monitor, Evaluate, Assess/Address, Treat (MEAT) validation is now a prerequisite for every risk-adjusted diagnosis
* Protected Health Information must remain protected under HIPAA and state privacy laws, limiting the use of cloud AI tools
* Compliance teams need to deliver audit-grade evidence across every format, faster than ever

---

## **Compliance Gaps That Put RAF Revenue and Audit Defense at Risk**
* Every HCC must be linked to the exact sentence, author, and date from a face-to-face note
* Diagnosis mapping must always reflect the latest CMS logic and versioned crosswalks
* Tamper-proof logs are required to track who accepted, rejected, or modified each code
* Compliance officers must trace Risk Adjustment Factor (RAF) score shifts to specific documentation decisions

---

## **Technical Constraints That Block Scalable, Audit-Ready Coding**
* Manual chart reviews cannot keep up with enterprise-scale audit volume
* Fragmented systems for PDFs, text, and images create inconsistent review workflows
* Generic LLMs lack updated code logic and cannot meet MEAT or traceability requirements
* Tools that move PHI off-network are delayed or rejected by legal and IT security teams

---

## **Critical Questions to Vet an Audit-Ready HCC Coding Platform**
* Does the platform automatically apply CMS updates when ICD-10 to HCC mappings change?
* Can every HCC suggestion be traced to the exact sentence, provider name, and date in the patient record?
* Does the system learn from reviewer corrections and use that feedback to improve future predictions?
* Can we start new annotation projects immediately using zero-shot prompts, without needing labeled data?
* Can we generate structured, audit-ready logs that show who accepted or rejected each code and why?
* Does the platform support a single audit trail across text notes, scanned documents, and medical images?
* Can the full platform, including LLM predictions, run securely within our infrastructure without sending PHI externally?
* Is the system built to process large volumes of notes overnight so we can meet tight audit timelines?

---

## **Does Martlet AI Offer All the Features You Need in One Secure Platform?**
* HCC mappings and hierarchy rules are automatically updated to stay aligned with the latest CMS guidance
* Each submitted HCC is linked to a specific sentence in the medical note, along with the provider’s name and the date of documentation
* Reviewer decisions are recorded and used to retrain the model overnight through built-in active learning · Domain models and zero-shot UI cut weeks of manual labeling to days
* Text notes, scanned PDFs, and medical images are processed in a single system using a shared taxonomy and audit trail
* The platform runs fully on-premises or in a private cloud to ensure that no PHI leaves your secure environment

---

## **Turning Compliance Pressure into Operational Advantage (Conclusion)**
* Full-population RADV audits and HCC v28 rules raise the bar for documentation, traceability, and coding precision
* Regulatory pressures give you the chance to modernize workflows and replace manual, fragmented processes
* An effective platform like Martlet AI can close long-standing gaps like linking HCCs to specific evidence, learning from corrections, and scaling review securely
* Martlet AI unifies these capabilities in a single, audit-ready system built for compliance, scale, and speed
* With Martlet AI, compliance teams can meet regulatory expectations, reduce project timelines, and protect RAF revenue without risking PHI exposure
* Book a demo here