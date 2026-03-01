import { z } from "zod";
import { ArchitectureSchema, type ArchitecturePlan } from "../../product/schemas/architecture.schema";
import { DeliverySchema, type DeliveryPlan } from "../../product/schemas/delivery.schema";
import { IdeaBriefSchema, type IdeaBrief } from "../../product/schemas/ideaBrief.schema";
import { PRDSchema, type PRD } from "../../product/schemas/prd.schema";
import { QARiskSchema, type QARiskPlan } from "../../product/schemas/qaRisk.schema";

export type ArtifactType = "idea" | "prd" | "architecture" | "delivery" | "qa";

type ArtifactTypeToData = {
  idea: IdeaBrief;
  prd: PRD;
  architecture: ArchitecturePlan;
  delivery: DeliveryPlan;
  qa: QARiskPlan;
};

export type ValidationSuccess<T> = {
  valid: true;
  data: T;
};

export type ValidationFailure = {
  valid: false;
  errors: z.ZodIssue[];
};

export type ValidationResult<T> = ValidationSuccess<T> | ValidationFailure;

const schemaByType: Record<ArtifactType, z.ZodTypeAny> = {
  idea: IdeaBriefSchema,
  prd: PRDSchema,
  architecture: ArchitectureSchema,
  delivery: DeliverySchema,
  qa: QARiskSchema
};

export const validateArtifact = <T extends ArtifactType>(
  type: T,
  payload: unknown
): ValidationResult<ArtifactTypeToData[T]> => {
  const schema = schemaByType[type];
  if (!schema) {
    throw new Error(`Unsupported artifact type: ${type}`);
  }

  const result = schema.safeParse(payload);
  if (result.success) {
    return { valid: true, data: result.data };
  }

  return { valid: false, errors: result.error.issues };
};
