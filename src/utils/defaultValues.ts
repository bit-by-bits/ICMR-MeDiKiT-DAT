type FormFields = Record<string, string | number | null>;

const createEmptyFormValues = <T extends FormFields>(fields: T): T => {
  return Object.keys(fields).reduce((acc, field) => {
    acc[field as keyof T] = fields[field as keyof T];
    return acc;
  }, {} as T);
};

const createFormValues = <T extends FormFields>(fields: T) =>
  createEmptyFormValues(fields);

export const labFormValues = createFormValues({
  hospitalName: "",
  laboratoryName: "",
  state: "",
  district: "",
  pin: ""
});

export const addHospitalFormValues = createFormValues({
  hospitalName: "",
  state: "",
  district: "",
  pin: ""
});

export const addDepartmentFormValues = createFormValues({
  hospitalName: "",
  departmentName: ""
});

export const addDoctorFormValues = createFormValues({
  doctorName: "",
  hospitalName: "",
  departmentName: ""
});

export const addDiseaseFormValues = createFormValues({
  diseaseName: "",
  description: "",
  category: ""
});

export const addMedicineFormValues = createFormValues({
  medicineName: "",
  hospitalName: "",
  departmentName: "",
  description: ""
});

export const addTestFormValues = createFormValues({
  hospitalId: "",
  labId: "",
  patientId: "",
  testType: "",
  testName: "",
  testDate: null,
  testResult: "",
  testFile: null
});

export const registerPatientFormValues = createFormValues({
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

export const bookConsultationFormValues = createFormValues({
  hospitalName: "",
  departmentName: "",
  doctorName: "",
  patientName: "",
  consultationDate: null,
  description: ""
});
