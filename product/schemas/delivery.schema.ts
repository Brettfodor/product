import { z } from "zod";

export const DeliverySchema = z.object({
  mvp_definition: z.object({
    included_capabilities: z.array(z.string()).min(1),
    excluded_capabilities: z.array(z.string()).min(1)
  }),
  phases: z
    .array(
      z.object({
        phase_name: z.string().min(2),
        goal: z.string().min(5),
        included_features: z.array(z.string()).min(1)
      })
    )
    .min(1),
  effort_estimates: z
    .array(
      z.object({
        area: z.string().min(2),
        complexity: z.enum(["low", "medium", "high"]),
        notes: z.string().nullable()
      })
    )
    .optional(),
  milestones: z
    .array(
      z.object({
        milestone: z.string().min(2),
        success_condition: z.string().min(5)
      })
    )
    .min(1),
  de_scoping_triggers: z.array(z.string()).min(1)
});

export type DeliveryPlan = z.infer<typeof DeliverySchema>;
