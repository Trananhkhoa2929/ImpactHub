# Team AI Usage Log

## Group Information

**Project:** ImpactHub  
**Group:** T04  
**Week:** 3 (PA1 – Project Proposal & Plan)  

| No. | Full name | Student ID |
|---|---|---|
| 1 | Nguyễn Trần Phương Thúy | 24127248 |
| 2 | Hồng Gia Bảo | 24127328 |
| 3 | Trần Anh Khoa | 24127424 |
| 4 | Lê Nho Duy Phước | 24127508 |

---

## 1. AI Usage Overview

In Week 3, the team used AI only for planning and documentation work on PA1. No code was written with AI this week. Each member used an AI assistant on the PA1 sections they were responsible for:

- **Drafting:** the feature table (MoSCoW) and out-of-scope list, the C4 System Context diagram, the technology stack and operating environment, the test plan and test cases, the risk register, and the cost estimate.
- **Reviewing:** the project overview, the WBS and Gantt timeline, the effort estimation, and the consistency of numbers across PA1 sections.

All AI output was treated as a draft. Each member checked it against PA0, the PA1 template and rubric, and the team's own constraints before using it.

## 2. AI Usage Summary

| Member | AI-Assisted Areas | AI Tools |
|---|---|---|
| Nguyễn Trần Phương Thúy | Project overview (vision, problem statement, scope); WBS structure and Gantt timeline; bottom-up effort estimation; consistency of RE values, cost and milestones with PA0 | ChatGPT (OpenAI, GPT-6) |
| Hồng Gia Bảo | Risk register and Risk Exposure analysis; technology stack and operating environment; human resources and cost estimate | Gemini (Google, Gemini 2.5) |
| Trần Anh Khoa | Test plan strategy (objectives, scope, entry/exit criteria, defect management); test design and test cases (equivalence partitioning, decision tables) | ChatGPT (OpenAI) |
| Lê Nho Duy Phước | Scope and key features (MoSCoW table, out-of-scope list); preliminary architecture (C4 System Context diagram in PlantUML) | Claude (Anthropic, Claude Opus 5.5) |

> Each entry in an individual log may summarize multiple AI interactions related to one task. This summary focuses on areas of AI assistance rather than counting prompts or log entries.

## 3. AI Usage Highlights

This section highlights the team's most significant AI-assisted tasks. For full prompts, responses, modifications, and verification details, refer to the individual logs linked below.

| Member | Task / Feature | AI Contribution | Source Log |
|---|---|---|---|
| Nguyễn Trần Phương Thúy | Effort estimation and plan consistency | Recommended replacing the phase-level estimate with a bottom-up estimate based on Level-3 WBS work packages, and pointed out where to recheck RE values, costs and milestones against PA0. The team rebuilt the estimate per work package and aggregated it by phase. | [Log 03](./24127248.md#log-03--project-plan-consistency-and-estimation-review) |
| Nguyễn Trần Phương Thúy | WBS and Gantt timeline | Suggested clearer task descriptions, better milestone alignment and a more visible critical path. The team kept these changes but rejected turning the prototype into a separate phase. | [Log 01](./24127248.md#log-01--wbs-structure-timeline-and-risk-management-review) |
| Hồng Gia Bảo | Risk management | Provided a 1–5 Probability/Loss scale and five ImpactHub-specific risks with RE values and mitigations. The team reassigned risk owners to match team roles. | [Log 01](./24127328.md#log-01--project-risk-management--exposure-analysis) |
| Hồng Gia Bảo | Cost estimate | Drafted the cost table (360 person-hours × 100,000 VND/hour = 36,000,000 VND, with 0 VND for free-tier infrastructure). The team aligned it with the team contract and Section 4.3. | [Log 03](./24127328.md#log-03--cost-estimation--financial-logic-adjustment) |
| Trần Anh Khoa | Test cases and decision tables | Generated test scenarios and decision tables for login, campaign approval and demo-wallet donations, including boundary cases. The team rewrote them to match WBS IDs 4.2.1–4.3.7 and the 5 Must-have features. | [Log 02](./24127424.md#log-02--drafting-test-cases-and-decision-tables) |
| Lê Nho Duy Phước | Scope and key features | Drafted 13 features (F01–F13) with MoSCoW priorities and 6 out-of-scope items, including the demo-wallet approach for donations. The team adjusted the wording to match PA0. | [Log 01](./24127508.md#log-01--scope-and-key-features) |
| Lê Nho Duy Phước | C4 System Context diagram | Produced a C4-PlantUML diagram with 4 user roles and 3 external systems, and explained how to render it. The rendered diagram was used in PA1. | [Log 02](./24127508.md#log-02--preliminary-architecture) |

## 4. AI Usage Evaluation

### 4.1. AI Contributions

AI helped mostly with structure and first drafts. It gave the team ready-made table layouts and frameworks (the MoSCoW feature table, the 1–5 risk scale with RE = P × L, the test plan outline, decision tables, the C4-PlantUML diagram, the cost table), which saved time on formatting. The most valuable contribution was in review. AI showed that the original phase-level effort estimate could not be traced to individual tasks, which led the team to switch to bottom-up estimation. It also pointed out where milestones, WBS deliverables and the Must-have features needed to be checked against PA0.

### 4.2. Limitations and Issues

- **Scope beyond the project:** AI often suggested more than an academic project with free-tier hosting needs. Examples include Docker/Kubernetes deployment, performance testing and broad browser matrices, real-time WebSocket and live payment test cases, enterprise risk frameworks, paid cloud tiers and licences, extra features, and overly ambitious objectives.
- **Misread deliverables:** AI suggested treating the interactive prototype as a separate phase and expecting a fully working system by Weeks 6–7, which did not match the team's plan.
- **Generic output:** Wording, risk owners, tool lists and the bug-tracking workflow were generic. Members had to rewrite them to match the team's terminology, roles, tools (GitHub Projects, Figma, VS Code, Postman) and demo-wallet logic.
- **Numbers needed reconciling:** Effort hours, costs and RE values had to be rechecked so that they agreed across the team contract, Section 4.3 and the WBS.

### 4.3. Human Review and Verification

Each member reviewed AI output before using it:

- **Against PA0:** features, user groups, out-of-scope items, actors, external systems and the 5 Must-have features were compared with PA0.
- **Against the PA1 template and rubric:** section structure, the risk matrix, the WBS and milestones, and the C4 Context level (people and external systems only) were checked.
- **Numerical checks:** RE values were recalculated with P × L. Person-hours were traced to Level-3 work packages and summed. The total effort and cost were compared with the team contract (4 members × 9 hours/week × 10 weeks) and Section 4.3.
- **Feasibility checks:** the Must-have scope, test coverage and free-tier hosting were checked against the team's available time and skills.

Suggestions that did not fit the scope or constraints were rejected and recorded in the individual logs. Should/Could priorities were reviewed with the whole team.

### 4.4. Overall Assessment

AI use in Week 3 was effective for speeding up PA1. It worked best as a drafting aid and a second reviewer, not as a source of final content. Every output still needed changes to fit ImpactHub's scope, roles and constraints. Lessons learned:

- Give AI the PA0 context and the rubric up front, so its suggestions stay within scope.
- Always recheck numbers (effort, cost, RE) across sections, because AI does not keep them consistent on its own.
- Record what was rejected and why, so the team can use the same scope boundaries in later PAs.

## 5. Appendix

### Individual AI Logs

- [Nguyễn Trần Phương Thúy (24127248) – AI Usage Log](./24127248.md)
- [Hồng Gia Bảo (24127328) – AI Usage Log](./24127328.md)
- [Trần Anh Khoa (24127424) – AI Usage Log](./24127424.md)
- [Lê Nho Duy Phước (24127508) – AI Usage Log](./24127508.md)
