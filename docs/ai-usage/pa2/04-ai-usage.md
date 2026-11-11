# Team AI Usage Log

## Group Information

**Project:** ImpactHub  
**Group:** T04  
**Week:** 4–6 (PA2 – Software Requirements Specification)  

| No. | Full name | Student ID |
|---|---|---|
| 1 | Nguyễn Trần Phương Thúy | 24127248 |
| 2 | Hồng Gia Bảo | 24127328 |
| 3 | Trần Anh Khoa | 24127424 |
| 4 | Lê Nho Duy Phước | 24127508 |

---

## 1. AI Usage Overview

In Weeks 4–6, the team used AI for requirements and documentation work on PA2. No production code was written with AI. Each member used an AI assistant on the SRS sections they were responsible for:

- **Drafting:** the SRS introduction and problem statement, actors and use cases, use case descriptions (UC-10 to UC-13), acceptance criteria, and the Figma mockups and interactive prototype.
- **Reviewing:** the use case diagram, the RTM mappings, the consistency of the whole SRS with PA0 and PA1, and the Requirements Review record (Section 10) that set the baseline.
- **Project management:** correcting the Week 6 status report after peer-review feedback.

All AI output was treated as a draft and checked against PA0, the submitted PA1, the PA2 rubric and the team's decisions before use.

## 2. AI Usage Summary

| Member | AI-Assisted Areas | AI Tools |
|---|---|---|
| Nguyễn Trần Phương Thúy | Requirements Review consolidation and review activity table (Section 10); acceptance criteria (IDs, Given–When–Then, negative scenarios); prompt for connecting Figma screens into an interactive prototype | ChatGPT (OpenAI, GPT-6) |
| Hồng Gia Bảo | Week 6 status report and error checklist corrections; requirements review of FR-01–FR-07 and NFR-01–NFR-05 with the baseline statement | Gemini (Google, Gemini 3 Flash) |
| Trần Anh Khoa | Actors and use case list; use case diagram review; UC-10 to UC-13 (campaign management and approval); RTM check; Requirements Review table | ChatGPT (OpenAI) |
| Lê Nho Duy Phước | Main component library and FL-05 donation mockups; accessibility and mobile layouts; SRS Sections 2–3; SRS consistency review; Requirements Review record and baseline edits; "All Screen" Figma prototype | Claude (Anthropic, Claude Opus 5.5 / Claude Fable 5) via Claude Code with the Figma connector |

> Each entry in an individual log may summarize multiple AI interactions related to one task. This summary focuses on areas of AI assistance rather than counting prompts or log entries.

## 3. AI Usage Highlights

This section highlights the team's most significant AI-assisted tasks. For full prompts, responses, modifications, and verification details, refer to the individual logs linked below.

| Member | Task / Feature | AI Contribution | Source Log |
|---|---|---|---|
| Nguyễn Trần Phương Thúy | Acceptance criteria | Suggested unique IDs, the Given–When–Then format and negative scenarios (invalid input, unauthorized actions, failed transactions). The member aligned them with the FRs and use cases and dropped out-of-scope scenarios. | [Log 03](./24127248.md#log-03--acceptance-criteria-improvement) |
| Nguyễn Trần Phương Thúy | Requirements Review consolidation | Proposed a consolidated review record with issues, resolutions and baseline status. Unrelated issues were kept separate, and AI summaries were not taken as proof that issues were resolved. | [Log 01](./24127248.md#log-01--requirements-review-consolidation) |
| Hồng Gia Bảo | Week 6 status report | Identified 12 errors from peer feedback (phase consistency, PR metrics, W5 risk tracking), corrected the PR metrics and WBS numbering, and structured the risk tracking checklist. The member adjusted the wording to the repository conventions. | [Log 01](./24127328.md#log-01--weekly-status-report-w6-error-correction) |
| Hồng Gia Bảo | Requirement review synthesis | Drafted a review of FR-01–FR-07 and NFR-01–NFR-05 with a findings mapping table, measurable verification methods and the baseline statement. The member rejected the verbose narrative and set the in-charge metadata. | [Log 02](./24127328.md#log-02--pa2-requirement-review-synthesis) |
| Trần Anh Khoa | Campaign use cases (UC-10 to UC-13) | Suggested main, alternative and exception flows. The member set the campaign statuses to match the business rules and removed identity verification (internal review only). | [Log 03](./24127424.md#log-03--writing-campaign-management-use-cases) |
| Trần Anh Khoa | RTM check | Found missing and incorrect FR–UC–screen mappings; mappings were corrected against the team documents. | [Log 05](./24127424.md#log-05--checking-the-requirements-traceability-matrix) |
| Lê Nho Duy Phước | FL-05 mockups aligned with PA1 | Found that the donation flow used a real payment gateway instead of the PA1 demo wallet and reworked the screens. The member rejected keeping the gateway, following risk decision R03-02. | [Log 03](./24127508.md#log-03--aligning-fl-05-mockups-with-pa1-demo-wallet) |
| Lê Nho Duy Phước | Requirements Review record (Section 10) | Recorded 38 issues mapped to requirement IDs (fixed / fixed in baseline / deferred to PA3) and a checklist of edits, then applied it to PA2.docx in validated stages. The member made the four judgement calls. | [Log 08](./24127508.md#log-08--final-requirements-review-and-review-record-section-10) |

> Include only meaningful examples. Update the links to match the actual headings in each developer's log.

## 4. AI Usage Evaluation

### 4.1. AI Contributions

AI saved the most time on structure and consistency. It provided formats for use case descriptions, Given–When–Then acceptance criteria and the review record, and it built the Figma screens and prototype links. Its most valuable contribution was cross-checking: it found conflicts between the SRS draft and PA0/PA1 (missing FRs for Must features, "real-time" wording, the payment gateway in the mockups, wrong RTM mappings), which the team then fixed before the baseline.

### 4.2. Limitations and Issues

- **Scope creep:** AI suggested features outside PA1, such as an external payment gateway, official identity verification, extra actors, use cases, relationships and UI redesigns.
- **Wrong or unsupported facts:** some suggested review dates, reviewers and issues had no source. Two consistency findings were wrong and were withdrawn after checking the submitted PA1.
- **Generic output:** acceptance scenarios, use case names and descriptions had to be rewritten to match ImpactHub's roles and business rules.
- **Limits of automated checks:** prototype links and docx files were checked by script and schema validation, not always by clicking through Present mode or opening the file in Word.

### 4.3. Human Review and Verification

- **Against earlier PAs:** use cases, features, roles and mockups were compared with PA0 and the submitted PA1 (`T04-PA1.pdf`).
- **Internal consistency:** FRs, use cases, business rules, acceptance criteria, the RTM and the Figma screens were cross-checked by requirement ID.
- **Evidence for the review record:** dates, participants and issues were taken from the W4–W6 status reports and team documents. Issues without a decision were marked as deferred to PA3, not resolved.
- **Prototype checks:** screenshots of every screen, a WCAG contrast audit, and script counts of frames and prototype links.

Suggestions that did not fit the scope or had no source were rejected and recorded in the individual logs.

### 4.4. Overall Assessment

AI use in PA2 was effective. It worked best as a drafter and a consistency reviewer, not as a source of final requirements. Lessons learned:

- Give AI the submitted PA1 and the rubric first; working from secondary sources (such as old AI logs) produced wrong findings.
- Never record an AI-proposed change as done until it has been applied and checked in the document.
- Keep requirement IDs stable and trace every review item to a source, so the baseline can be checked in PA3.

## 5. Appendix

### Individual AI Logs

- [Nguyễn Trần Phương Thúy (24127248) – AI Usage Log](./24127248.md)
- [Hồng Gia Bảo (24127328) – AI Usage Log](./24127328.md)
- [Trần Anh Khoa (24127424) – AI Usage Log](./24127424.md)
- [Lê Nho Duy Phước (24127508) – AI Usage Log](./24127508.md)
