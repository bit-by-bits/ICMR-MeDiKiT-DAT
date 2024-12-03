import { z } from "zod";

// Helper function for validating required names
const requiredNameSchema = (fieldName: string) =>
  z.string().min(2, { message: `${fieldName} is required` });

// Pin validation
const pinSchema = z
  .string()
  .length(6, { message: "Pin must be exactly 6 digits" })
  .regex(/^\d+$/, { message: "Pin must be numeric" });

// Doctor name validation
const doctorNameSchema = z
  .string()
  .min(3, { message: "Doctor Name should be at least 3 characters long." })
  .max(100, { message: "Doctor Name should be at most 100 characters long." });

// Form schemas
export const labFormSchema = z.object({
  hospitalName: requiredNameSchema("Hospital Name"),
  laboratoryName: requiredNameSchema("Laboratory Name"),
  state: requiredNameSchema("State"),
  district: requiredNameSchema("District"),
  pin: pinSchema
});

export const addHospitalFormSchema = z.object({
  hospitalName: requiredNameSchema("Hospital Name"),
  state: requiredNameSchema("State"),
  district: requiredNameSchema("District"),
  pin: pinSchema
});

export const addDepartmentFormSchema = z.object({
  hospitalName: requiredNameSchema("Hospital Name"),
  departmentName: requiredNameSchema("Department Name")
});

export const addDoctorFormSchema = z.object({
  doctorName: doctorNameSchema,
  hospitalName: requiredNameSchema("Hospital Name"),
  departmentName: requiredNameSchema("Department Name")
});
