import { z } from "zod";
import { RequirementSchema } from "./requirement.schema";

export const PRDSchema = z.object({
  overview: z.object({
    objective: z.string().min(5),
    in_scope: z.array(z.string()).min(1),
    out_of_scope: z.array(z.string()).min(1)
  }),
  user_personas: z
    .array(
      z.object({
        name: z.string().min(2),
        description: z.string().min(5),
        primary: z.boolean()
      })
    )
    .min(1),
  requirements: z.array(RequirementSchema).min(1),
  non_functional_requirements: z
    .array(
      z.object({
        category: z.enum([
          "performance",
          "security",
          "usability",
          "compliance",
          "scalability"
        ]),
        requirement: z.string().min(5)
      })
    )
    .optional(),
  dependencies: z
    .array(
      z.object({
        type: z.enum(["team", "system", "vendor"]),
        description: z.string().min(5),
        risk_level: z.enum(["low", "medium", "high"])
      })
    )
    .optional(),
  success_criteria: z
    .array(
      z.object({
        metric: z.string().min(3),
        measurement_method: z.string().min(5),
        success_threshold: z.union([z.string(), z.number()])
      })
    )
    .min(1)
});

export type PRD = z.infer<typeof PRDSchema>;
