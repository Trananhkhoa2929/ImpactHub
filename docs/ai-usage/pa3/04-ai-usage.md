# Team AI Usage Log

## Group Information

**Project:** ImpactHub – PA3 (Software Design)  
**Group:** T04  
**Week:** 7–8  

| No. | Full name | Student ID |
|---|---|---|
| 1 | Nguyễn Trần Phương Thúy | 24127248 |
| 2 | Hồng Gia Bảo | 24127328 |
| 3 | Trần Anh Khoa | 24127424 |
| 4 | Lê Nho Duy Phước | 24127508 |

---

## 1. AI Usage Overview

In weeks 7–8 the team used AI tools for the software design phase (PA3), for the weekly status reports, and for the revision of PA1 that is submitted with PA3. AI was used to draft and review architecture diagrams (C4 levels 1 and 2), the domain model, class diagrams, class specifications, sequence and state machine diagrams, the data design (ERD, table specifications, normalisation, indexes), the screen list, screen specifications and accessibility checklist, and the traceability update. AI was also used to check the consistency of PA3 with PA1, PA2 and the WBS, to prepare automated ID and traceability checks, to run independent reviews of the merged PA3 document, and to draft or check the Week 7 and Week 8 status reports. The tools used were ChatGPT and Claude (including Claude Code with review subagents and the Figma connector). AI was not used for implementation or testing in this phase.

## 2. AI Usage Summary

| Member | AI-Assisted Areas | AI Tools |
|---|---|---|
| Nguyễn Trần Phương Thúy | C4 Level 2 container diagram; cross-document consistency of PA3; screen list and screen flow (§7.1); screen specifications and accessibility checklist (§7.2–7.3); traceability update (§8); documentation structure and requirements change control (§7–10) | ChatGPT |
| Hồng Gia Bảo | Architectural style (§3.1); domain model (§4.1); class diagram (§4.2) and ERD (§5.1); data design (§5); check of the Week 7 status report | Claude (Anthropic) |
| Trần Anh Khoa | Review of the domain model (§4.1) and class diagrams (§4.2); class specifications (§4.3); sequence diagrams (§4.4); state machine diagrams (§4.5); design principles and patterns (§4.6); Week 7 and Week 8 status reports | ChatGPT |
| Lê Nho Duy Phước | C4 System Context diagram (§3.2); PA1 revision after TA feedback; PA3 review preparation (PA2 baseline extraction, ID check script, grading criteria); review and correction of the merged PA3; Figma dialogs for UC-19 and UC-20 | Claude Opus 5.5 via Claude Code; review subagents Claude Sonnet 5.5 and Claude Fable 5.2; Figma connector |

> Each entry in an individual log may summarize multiple AI interactions related to one task. This summary focuses on areas of AI assistance rather than counting prompts or log entries.

## 3. AI Usage Highlights

This section highlights the team's most significant AI-assisted tasks. For full prompts, responses, modifications, and verification details, refer to the individual logs linked below.

| Member | Task / Feature | AI Contribution | Source Log |
|---|---|---|---|
| Nguyễn Trần Phương Thúy | C4 Level 2 container diagram | ChatGPT proposed a three-tier architecture (React web app, Node.js/Express REST API, PostgreSQL) with Cloudinary as an external service. The three containers were kept; grouped actors were separated, and merging email and the payment gateway into one external system was rejected. | [Log 01](./24127248.md#log-01--designing-and-reviewing-the-c4-container-diagram) |
| Nguyễn Trần Phương Thúy | Requirements-to-design traceability | ChatGPT found generic screen references and an incomplete mapping for FR-02.4. An incorrect requirement ID it proposed was rejected, and FR-02.4 was recorded as a design coverage gap. | [Log 05](./24127248.md#log-05--evaluating-requirements-to-design-traceability) |
| Hồng Gia Bảo | Architectural style | Claude turned the draft into two tables (styles and justification against NFR, BR and constraints) and corrected the team size from 5 to 4 members. | [Log 01](./24127328.md#log-01--writing-the-architectural-style) |
| Hồng Gia Bảo | Class diagram and ERD | Claude drew the class diagram in seven packages following the lecture 07 steps and an ERD with 12 tables and 17 foreign keys; both were redrawn in the lecture 07 notation. | [Log 03](./24127328.md#log-03--class-diagram-and-erd) |
| Trần Anh Khoa | Sequence diagrams | ChatGPT proposed sequence diagrams for UC-02, UC-07, UC-10, UC-13 and UC-16. Operation names and exception flows were aligned with the class diagrams; external payment steps were left out because donations are simulated. | [Log 04](./24127424.md#log-04--preparing-sequence-diagrams) |
| Trần Anh Khoa | State machine diagrams | ChatGPT proposed the campaign life cycle and PostReport moderation states; transitions were adjusted to the approval, editing and moderation rules of PA2. | [Log 05](./24127424.md#log-05--preparing-state-machine-diagrams) |
| Lê Nho Duy Phước | PA3 review preparation | Claude extracted the PA2 baseline into a structured file, wrote a script that reports unknown IDs and non-canonical names (found 8 of 8 planted errors), and drafted 43 checkable PA3 criteria for team approval. | [Log 03](./24127508.md#log-03--pa3-preparation-traceability-check-and-grading-criteria) |
| Lê Nho Duy Phước | Review of the merged PA3 and new UC-19/UC-20 screens | Claude rebuilt the document from one design model and redrew or added 18 diagrams; seven independent review rounds reported 92 findings, of which 81 were fixed after team decisions and declared in Section 8; three Figma dialog frames were added for UC-19 and UC-20. | [Log 04](./24127508.md#log-04--review-of-the-merged-pa3-and-the-new-uc-19uc-20-screens) |

> Include only meaningful examples. Update the links to match the actual headings in each developer's log.

## 4. AI Usage Evaluation

### 4.1. AI Contributions

- **Drafting design artefacts.** AI produced first drafts of the C4 diagrams, domain model, class diagrams, class specifications, sequence and state machine diagrams, ERD and table specifications, which the members then aligned with PA2 and the lecture 07 notation.
- **Consistency and traceability checks.** AI pointed out inconsistencies between PA3 and PA2 (campaign life cycle, requirement IDs, interface coverage), a missing "report a post" use case needed by UC-14 and BR-05, and the design gap for FR-02.4.
- **Automated and independent review.** A script built with AI checks every ID against the PA2 baseline, and separate reviewer agents reviewed the merged PA3 in seven rounds, finding cross-section contradictions such as token contents, lock mechanisms and missing screens for new Must use cases.
- **Project management.** AI helped draft and check the Week 7 and Week 8 status reports, including the Week 9 plan for PA4, and pointed out risks that had disappeared without being closed.

### 4.2. Limitations and Issues

- AI suggestions sometimes relied on assumptions not supported by PA1 or PA2, for example grouping different actors together, deriving mobile screen IDs from desktop IDs, or merging independent external systems.
- AI proposed identifiers that do not exist in the baseline (an incorrect requirement ID in the traceability matrix, a reference to ADR-004 when PA3 had only ADR-001 to ADR-003).
- AI sometimes expanded the scope or departed from the template: new requirements, formatting that broke the PA3 section structure, design assumptions (at most 4 images per post, `pg_trgm` for search) that still need team confirmation.
- AI-generated design text was not consistent across sections on the first pass: each independent review of the merged PA3 still found between 8 and 18 issues.
- AI cannot confirm facts outside the documents, such as GitHub statistics, actual meeting discussions or real accessibility compliance.

### 4.3. Human Review and Verification

- Every member checked AI output against the PA2 baseline (FR, BR, NFR, UC and acceptance criteria), PA1, the WBS and the lecture 07 guidelines before using it.
- Suggestions without evidence in the earlier documents were kept as pending review instead of being applied; changes to system behaviour or scope (UC-19, UC-20, FR-04.5, BR-20, BR-21, UC-13 E5, UC-15 E4) were applied only after team decisions and are declared in PA3 Section 8.
- Machine checks were used where possible: an ID and traceability script on the final PDF, and reviewer agents that were separate from the agent that wrote the content.
- Items that could not be verified were left open rather than filled in: direct verification of Figma hyperlinks, responsive and keyboard testing, unverified GitHub metrics and draft meeting notes.
- Some fields in the individual logs are still to be completed by their authors (the `[CONFIRM]` markers in 24127328 and the Kept, Changed, Rejected and Verification fields in 24127508); this summary uses only the parts already written.

### 4.4. Overall Assessment

AI was effective for producing first drafts of diagrams and specifications and for finding inconsistencies across a long document, which saved time in the design phase. Its output could not be used without review: it introduced unsupported IDs, assumptions and scope changes, and the merged design needed several review rounds before the sections agreed with one another. The main lessons for the next phases are to check every ID and rule against the baseline, to record scope changes only through team decisions in the change table, and to keep checks that can be repeated by a script or an independent reviewer.

## 5. Appendix

### Individual AI Logs

- [Nguyễn Trần Phương Thúy – AI Usage Log](./24127248.md)
- [Hồng Gia Bảo – AI Usage Log](./24127328.md)
- [Trần Anh Khoa – AI Usage Log](./24127424.md)
- [Lê Nho Duy Phước – AI Usage Log](./24127508.md)
