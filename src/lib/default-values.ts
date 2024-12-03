const createEmptyFormValues = (fields: string[]) => {
  return fields.reduce(
    (acc, field) => {
      acc[field] = "";
      return acc;
    },
    {} as Record<string, string>
  );
};

export const labFormValues = createEmptyFormValues([
  "hospitalName",
  "laboratoryName",
  "state",
  "district",
  "pin"
]);

export const addHospitalFormValues = createEmptyFormValues([
  "hospitalName",
  "state",
  "district",
  "pin"
]);

export const addDepartmentFormValues = createEmptyFormValues([
  "hospitalName",
  "departmentName"
]);

export const addDoctorFormValues = createEmptyFormValues([
  "doctorName",
  "hospitalName",
  "departmentName"
]);

export const addDiseaseFormValues = createEmptyFormValues([
  "diseaseName",
  "description",
  "category"
]);

export const addMedicineFormValues = createEmptyFormValues([
  "medicineName",
  "hospitalName",
  "departmentName",
  "description"
]);
