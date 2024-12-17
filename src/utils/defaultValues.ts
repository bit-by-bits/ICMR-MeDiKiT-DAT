const createEmptyFormValues = <
  T extends Record<string, string | number | null>
>(
  fields: T
): T => {
  return Object.keys(fields).reduce((acc, field) => {
    acc[field as keyof T] = fields[field as keyof T];
    return acc;
  }, {} as T);
};

export const labFormValues = createEmptyFormValues({
  hospitalName: "",
  laboratoryName: "",
  state: "",
  district: "",
  pin: ""
});

export const addHospitalFormValues = createEmptyFormValues({
  hospitalName: "",
  state: "",
  district: "",
  pin: ""
});

export const addDepartmentFormValues = createEmptyFormValues({
  hospitalName: "",
  departmentName: ""
});

export const addDoctorFormValues = createEmptyFormValues({
  doctorName: "",
  hospitalName: "",
  departmentName: ""
});

export const addDiseaseFormValues = createEmptyFormValues({
  diseaseName: "",
  description: "",
  category: ""
});

export const addMedicineFormValues = createEmptyFormValues({
  medicineName: "",
  hospitalName: "",
  departmentName: "",
  description: ""
});

export const addTestFormValues = createEmptyFormValues({
  hospitalId: "",
  labId: "",
  patientId: "",
  testType: "",
  testName: "",
  testDate: null,
  testResult: "",
  testFile: null
});

export const registerPatientFormValues = createEmptyFormValues({
  patientName: "",
  dateOfBirth: null,
  gender: "",
  contactNumber: "",
  address: "",
  state: "",
  district: "",
  pin: "",
  medicalHistory: ""
});

export const bookConsultationFormValues = createEmptyFormValues({
  hospitalName: "",
  departmentName: "",
  doctorName: "",
  patientName: "",
  consultationDate: null,
  description: ""
});
