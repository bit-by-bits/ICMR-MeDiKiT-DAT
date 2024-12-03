import { z } from "zod";

const pinSchema = z
  .string()
  .length(6, { message: "Pin must be exactly 6 digits" })
  .regex(/^\d+$/, { message: "Pin must be numeric" });

const nameSchema = z.string().min(2, { message: "This field is required" });

export const labFormSchema = z.object({
  hospitalName: nameSchema.refine(val => val.length >= 2, {
    message: "Hospital Name is required"
  }),
  laboratoryName: nameSchema.refine(val => val.length >= 2, {
    message: "Laboratory Name is required"
  }),
  state: nameSchema,
  district: nameSchema,
  pin: pinSchema
});

export const addHospitalFormSchema = z.object({
  hospitalName: nameSchema.refine(val => val.length >= 2, {
    message: "Hospital Name is required"
  }),
  state: nameSchema,
  district: nameSchema,
  pin: pinSchema
});
