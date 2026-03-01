import { z } from "zod";

export const RequirementSchema = z.object({
  logicalId: z.string().regex(/^REQ-\d+$/),
  version: z.number().int().positive(),
  status: z.enum(["active", "superseded", "deprecated"]),
  scope: z.enum(["mvp", "post-mvp"]),
  description: z.string().min(10),
  acceptanceCriteria: z.array(z.string().min(5)).min(1),
  supersedes: z.string().optional(),
  supersededBy: z.string().optional(),
  changeReason: z.string().optional()
});

export type Requirement = z.infer<typeof RequirementSchema>;
