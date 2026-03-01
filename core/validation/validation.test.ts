import assert from "node:assert/strict";
import { test } from "node:test";

import { validateArtifact } from "./schema.validation";

const validIdeaBrief = {
  problem_statement: "Users struggle to align product intent across teams.",
  target_user: {
    role: "PM",
    context: "Product planning meetings",
    pain_frequency: "daily"
  },
  trigger_event: "A launch review highlights misalignment.",
  current_workaround: "Manual syncs and scattered notes.",
  desired_outcome: "A single source of truth for intent.",
  success_metric: {
    metric: "Alignment score",
    baseline: 2,
    target: 4
  },
  constraints: {
    time: null,
    budget: null,
    tech: null,
    regulatory: null
  },
  assumptions: ["Teams will adopt structured artifacts."],
  open_questions: ["Which teams should pilot first?"],
  confidence_score: 3
};

const validPRD = {
  overview: {
    objective: "Ensure intent alignment across teams.",
    in_scope: ["Artifact validation", "Deterministic gating"],
    out_of_scope: ["Realtime chat"]
  },
  user_personas: [
    {
      name: "Product Lead",
      description: "Owns roadmap and enforcement standards.",
      primary: true
    }
  ],
  requirements: [
    {
      logicalId: "REQ-1",
      version: 1,
      status: "active",
      scope: "mvp",
      description: "System validates artifacts against schemas.",
      acceptanceCriteria: ["Validation rejects invalid payloads."]
    }
  ],
  success_criteria: [
    {
      metric: "Validation accuracy",
      measurement_method: "Schema pass rate on test corpus",
      success_threshold: "100%"
    }
  ]
};

test("valid IdeaBrief passes", () => {
  const result = validateArtifact("idea", validIdeaBrief);
  assert.equal(result.valid, true);
  if (result.valid) {
    assert.equal(result.data.problem_statement, validIdeaBrief.problem_statement);
  }
});

test("invalid IdeaBrief fails", () => {
  const result = validateArtifact("idea", {
    ...validIdeaBrief,
    problem_statement: "short"
  });
  assert.equal(result.valid, false);
  if (!result.valid) {
    assert.ok(result.errors.length > 0);
  }
});

test("valid PRD passes", () => {
  const result = validateArtifact("prd", validPRD);
  assert.equal(result.valid, true);
  if (result.valid) {
    assert.equal(result.data.requirements.length, 1);
  }
});

test("PRD missing requirements fails", () => {
  const { requirements, ...invalidPRD } = validPRD;
  const result = validateArtifact("prd", invalidPRD);
  assert.equal(result.valid, false);
  if (!result.valid) {
    assert.ok(result.errors.length > 0);
  }
});
