import { z } from "zod";

export const IdeaBriefSchema = z.object({
  problem_statement: z.string().min(10),
  target_user: z.object({
    role: z.string().min(2),
    context: z.string().min(5),
    pain_frequency: z.enum(["daily", "weekly", "monthly", "rare"])
  }),
  trigger_event: z.string().min(5),
  current_workaround: z.string().min(5),
  desired_outcome: z.string().min(5),
  success_metric: z.object({
    metric: z.string().min(3),
    baseline: z.union([z.string(), z.number()]).nullable(),
    target: z.union([z.string(), z.number()])
  }),
  constraints: z.object({
    time: z.string().nullable(),
    budget: z.string().nullable(),
    tech: z.array(z.string()).nullable(),
    regulatory: z.array(z.string()).nullable()
  }),
  assumptions: z.array(z.string().min(5)).min(1),
  open_questions: z.array(z.string()).optional(),
  confidence_score: z.number().int().min(1).max(5)
});

export type IdeaBrief = z.infer<typeof IdeaBriefSchema>;
