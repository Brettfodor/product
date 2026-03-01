import { z } from "zod";

export const ArchitectureSchema = z.object({
  system_overview: z.string().min(10),
  components: z
    .array(
      z.object({
        name: z.string().min(2),
        responsibility: z.string().min(5),
        type: z.enum(["frontend", "backend", "service", "external"])
      })
    )
    .min(1),
  data_entities: z
    .array(
      z.object({
        name: z.string().min(2),
        description: z.string().min(5),
        source_of_truth: z.string().min(2)
      })
    )
    .optional(),
  data_flows: z
    .array(
      z.object({
        from: z.string().min(2),
        to: z.string().min(2),
        description: z.string().min(5),
        sync_type: z.enum(["sync", "async"])
      })
    )
    .optional(),
  integration_points: z
    .array(
      z.object({
        system: z.string().min(2),
        method: z.enum(["api", "webhook", "batch"]),
        risk_notes: z.string().nullable()
      })
    )
    .optional(),
  architectural_decisions: z
    .array(
      z.object({
        decision: z.string().min(5),
        rationale: z.string().min(5),
        tradeoffs: z.array(z.string().min(3)).min(1)
      })
    )
    .min(1),
  known_risks: z
    .array(
      z.object({
        risk: z.string().min(5),
        impact: z.enum(["low", "medium", "high"]),
        mitigation: z.string().min(5)
      })
    )
    .min(1)
});

export type ArchitecturePlan = z.infer<typeof ArchitectureSchema>;
