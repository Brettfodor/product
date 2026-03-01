import { z } from "zod";

export const QARiskSchema = z.object({
  critical_paths: z.array(z.string()).min(1),
  test_scenarios: z
    .array(
      z.object({
        scenario: z.string().min(5),
        expected_behavior: z.string().min(5),
        linked_requirement_ids: z
          .array(z.string().regex(/^REQ-\d+(\.v\d+)?$/))
          .min(1)
      })
    )
    .min(1),
  edge_cases: z
    .array(
      z.object({
        description: z.string().min(5),
        likelihood: z.enum(["low", "medium", "high"]),
        impact: z.enum(["low", "medium", "high"])
      })
    )
    .optional(),
  assumption_breaks: z
    .array(
      z.object({
        assumption: z.string().min(5),
        failure_effect: z.string().min(5),
        mitigation: z.string().min(5)
      })
    )
    .min(1),
  monitoring_signals: z
    .array(
      z.object({
        signal: z.string().min(3),
        indicates: z.string().min(5)
      })
    )
    .optional()
});

export type QARiskPlan = z.infer<typeof QARiskSchema>;
