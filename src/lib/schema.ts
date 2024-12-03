import { z } from "zod";

const nameSchema = (fieldName: string) =>
  z
    .string()
    .min(3)
    .max(100, {
      message: `${fieldName} must be at least 3 characters and at most 100 characters`
    });

const requiredNameSchema = (fieldName: string) =>
  z.string().min(2, { message: `${fieldName} is required` });

const pinSchema = z
  .string()
  .length(6, { message: "Pin must be exactly 6 digits" })
  .regex(/^\d+$/, { message: "Pin must be numeric" });

const descriptionSchema = z
  .string()
  .min(10, { message: "Description must be at least 10 characters" })
  .max(500, { message: "Description must be less than 500 characters" });

const categorySchema = z.string().min(3, { message: "Category is required" });

const createFormSchema = (schema: Record<string, z.ZodTypeAny>) =>
  z.object(schema);

export const labFormSchema = createFormSchema({
  hospitalName: requiredNameSchema("Hospital Name"),
  laboratoryName: requiredNameSchema("Laboratory Name"),
  state: requiredNameSchema("State"),
  district: requiredNameSchema("District"),
  pin: pinSchema
});

export const addHospitalFormSchema = createFormSchema({
  hospitalName: requiredNameSchema("Hospital Name"),
  state: requiredNameSchema("State"),
  district: requiredNameSchema("District"),
  pin: pinSchema
});

export const addDepartmentFormSchema = createFormSchema({
  hospitalName: requiredNameSchema("Hospital Name"),
  departmentName: requiredNameSchema("Department Name")
});

export const addDoctorFormSchema = createFormSchema({
  doctorName: nameSchema("Doctor Name"),
  hospitalName: requiredNameSchema("Hospital Name"),
  departmentName: requiredNameSchema("Department Name")
});

export const addDiseaseFormSchema = createFormSchema({
  diseaseName: nameSchema("Disease Name"),
  description: descriptionSchema,
  category: categorySchema
});

export const addMedicineFormSchema = createFormSchema({
  medicineName: nameSchema("Medicine Name"),
  hospitalName: requiredNameSchema("Hospital Name"),
  departmentName: requiredNameSchema("Department Name"),
  description: descriptionSchema
});

export const addTestFormSchema = createFormSchema({
  hospitalId: requiredNameSchema("Hospital"),
  labId: requiredNameSchema("Laboratory"),
  patientId: requiredNameSchema("Patient"),
  testType: requiredNameSchema("Test Type"),
  testName: nameSchema("Test Name"),
  testDate: z.date().refine(val => val <= new Date(), {
    message: "Test date must be in the past or today"
  }),
  testResult: z
    .string()
    .min(5, { message: "Test Result must be at least 5 characters" })
    .max(500, { message: "Test Result must be less than 500 characters" }),
  testFile: z
    .instanceof(File, { message: "Test file must be a valid file" })
    .refine(file => file.size <= 10 * 1024 * 1024, {
      message: "File size must be less than 10MB"
    })
});
