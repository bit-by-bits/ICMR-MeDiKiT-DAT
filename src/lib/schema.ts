import { z } from "zod";

const createStringSchema = (fieldName: string, min: number, max: number) =>
  z
    .string()
    .min(min, {
      message: `${fieldName} must be at least ${min} characters long`
    })
    .max(max, {
      message: `${fieldName} must be at most ${max} characters long`
    });

const createRequiredStringSchema = (fieldName: string, min: number) =>
  z.string().min(min, {
    message: `${fieldName} is required and must be at least ${min} characters`
  });

const pinSchema = z
  .string()
  .length(6, { message: "Pin must be exactly 6 digits" })
  .regex(/^\d+$/, { message: "Pin must contain only numeric values" });

const descriptionSchema = createStringSchema("Description", 10, 500);
const categorySchema = createRequiredStringSchema("Category", 3);

const fileSchema = z
  .instanceof(File, { message: "Uploaded file must be valid" })
  .refine(file => file.size <= 10 * 1024 * 1024, {
    message: "File size must be less than 10MB"
  });

const dateSchema = (direction: "past" | "future", fieldName: string) =>
  z
    .date()
    .refine(
      val => (direction === "past" ? val <= new Date() : val >= new Date()),
      {
        message: `${fieldName} must be ${direction === "past" ? "in the past or today" : "today or later"}`
      }
    );

const createFormSchema = (schema: Record<string, z.ZodTypeAny>) =>
  z.object(schema);

export const labFormSchema = createFormSchema({
  hospitalName: createRequiredStringSchema("Hospital Name", 2),
  laboratoryName: createRequiredStringSchema("Laboratory Name", 2),
  state: createRequiredStringSchema("State", 2),
  district: createRequiredStringSchema("District", 2),
  pin: pinSchema
});

export const addHospitalFormSchema = labFormSchema;

export const addDepartmentFormSchema = createFormSchema({
  hospitalName: createRequiredStringSchema("Hospital Name", 2),
  departmentName: createRequiredStringSchema("Department Name", 2)
});

export const addDoctorFormSchema = createFormSchema({
  doctorName: createStringSchema("Doctor Name", 3, 100),
  hospitalName: createRequiredStringSchema("Hospital Name", 2),
  departmentName: createRequiredStringSchema("Department Name", 2)
});

export const addDiseaseFormSchema = createFormSchema({
  diseaseName: createStringSchema("Disease Name", 3, 100),
  description: descriptionSchema,
  category: categorySchema
});

export const addMedicineFormSchema = createFormSchema({
  medicineName: createStringSchema("Medicine Name", 3, 100),
  hospitalName: createRequiredStringSchema("Hospital Name", 2),
  departmentName: createRequiredStringSchema("Department Name", 2),
  description: descriptionSchema
});

export const addTestFormSchema = createFormSchema({
  hospitalId: createRequiredStringSchema("Hospital", 2),
  labId: createRequiredStringSchema("Laboratory", 2),
  patientId: createRequiredStringSchema("Patient", 2),
  testType: createRequiredStringSchema("Test Type", 2),
  testName: createStringSchema("Test Name", 3, 100),
  testDate: dateSchema("past", "Test Date"),
  testResult: createStringSchema("Test Result", 5, 500),
  testFile: fileSchema
});

export const registerPatientFormSchema = createFormSchema({
  patientName: createStringSchema("Patient Name", 3, 100),
  dateOfBirth: dateSchema("past", "Date of Birth"),
  gender: createRequiredStringSchema("Gender", 1),
  contactNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Contact number must be exactly 10 digits" }),
  address: createStringSchema("Address", 5, 100),
  state: createRequiredStringSchema("State", 2),
  district: createRequiredStringSchema("District", 2),
  pin: pinSchema,
  medicalHistory: z
    .string()
    .max(1000, { message: "Medical history cannot exceed 1000 characters" })
    .optional()
});

export const bookConsultationFormSchema = createFormSchema({
  hospitalName: createRequiredStringSchema("Hospital", 1),
  departmentName: createRequiredStringSchema("Department", 1),
  doctorName: createRequiredStringSchema("Doctor", 1),
  patientName: createStringSchema("Patient Name", 3, 100),
  consultationDate: dateSchema("future", "Consultation Date"),
  description: descriptionSchema
});
