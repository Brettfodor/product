# PRODUCT CONSTITUTION

## Purpose

This product exists to **enforce product intent** so teams build what they actually mean to build.

It is not an AI toy, a chat app, or a code generator.
It is a **Product Operating System** that governs how ideas become execution.

If this product ever prioritizes speed of output over clarity of intent, it has failed.

---

## What This Product Is

This product is:

- A **team-based Product OS**
- A system for producing **versioned, structured product artifacts**
- A deterministic **orchestration engine** that enforces order, validity, and alignment
- A governance layer that connects **product intent to engineering execution**
- An intelligence layer that detects **drift, volatility, and delivery risk**

It encodes senior product judgment into software.

---

## What This Product Is NOT

This product is explicitly **not**:

- ❌ A chat interface
- ❌ A vibe-coding tool
- ❌ A code editor or IDE
- ❌ A task manager or Kanban board
- ❌ A free-form documentation system
- ❌ A brainstorming playground
- ❌ A replacement for human decision-making

If users can bypass structure to “just try something,” the product has failed.

---

## Core Non-Negotiable Principles

### 1. Artifacts Are the Source of Truth
All intent is represented as **structured, versioned artifacts**.

Code, comments, chats, and PRs are downstream.
They are never authoritative.

---

### 2. No Code Before Intent Is Valid
Code may not be generated, validated, or approved unless:

- All upstream artifacts are valid
- Requirements are current (not superseded)
- Scope is explicitly defined

Speed without intent is waste.

---

### 3. Immutability Over Convenience
Artifacts are **never edited in place**.

Any meaningful change:
- Creates a new version
- Supersedes the old one
- Triggers downstream invalidation

History must be preserved. Drift must be visible.

---

### 4. Deterministic Enforcement
The system must behave deterministically:

- Same inputs → same outputs
- Same changes → same invalidations
- No hidden heuristics
- No silent passes

If the system cannot explain why it blocked something, it must not block it.

---

### 5. Blocking Is a Feature, Not a Bug
The system is allowed — and expected — to block progress.

Blocking must always include:
1. What changed
2. Why it matters
3. Exactly what to do next

Removing blocking to “improve UX” is forbidden.

---

### 6. No Free-Form Escape Hatches
Users may not bypass:
- Stages
- Validation
- Versioning
- Invalidation

Overrides must be:
- Explicit
- Justified
- Logged
- Risk-scored

Silent overrides are prohibited.

---

### 7. Requirements Are Versioned Contracts
Requirements are treated like APIs:

- Each has a stable logical ID
- Each change creates a new version
- Superseded requirements cannot be implemented
- Deprecated requirements cannot be referenced

Code must declare which requirement versions it implements.

---

### 8. Change Must Propagate
Any upstream change must deterministically propagate downstream.

If:
- A success metric changes
- A requirement is superseded
- An assumption is invalidated

Then:
- Dependent artifacts must be revalidated
- The system must force reconciliation

Silent misalignment is unacceptable.

---

### 9. AI Is a Servant, Not an Authority
AI agents:
- Produce artifacts
- Never decide policy
- Never relax constraints
- Never invent structure

If an AI output violates a schema or invariant, it is invalid by definition.

---

### 10. Structure Over Comfort
This product optimizes for:
- Correctness
- Clarity
- Alignment
- Long-term velocity

It does not optimize for:
- Dopamine
- Fun
- Lowest friction
- Immediate gratification

Discomfort is often a signal of enforced clarity.

---

## Design Constraints

- No feature may ship without a clear link to intent enforcement
- No UI may allow bypassing orchestration rules
- No integration may weaken artifact authority
- No convenience feature may reduce traceability

If a feature does not strengthen the intent → execution chain, it does not belong.

---

## Cursor / Implementation Rules

When using AI coding tools:

- Cursor must not invent product behavior
- Cursor must implement exactly what is defined in `/product/`
- Cursor may not modify this document
- Cursor may not relax constraints “for usability”
- Cursor must be treated as a junior engineer

All reasoning about product behavior happens outside Cursor.

---

## Failure Conditions

This product is considered broken if:

- Users can generate code without valid artifacts
- Requirements can be silently edited
- Drift can occur without detection
- PRs can merge while misaligned with intent
- Blocking occurs without explanation
- Speed is favored over correctness

Any of the above must be treated as a critical defect.

---

## The Promise

If this system says:
“This is what we are building”

Then:
- Everyone can trust it
- Everyone can execute against it
- Everyone can see when it changes
- No one is surprised later

That is the standard.

---

## Final Statement

This product exists to protect teams from:
- Ambiguity
- Drift
- Late surprises
- Rework
- Building the wrong thing confidently

If it ever becomes easier to move fast than to move right,
this constitution has been violated.