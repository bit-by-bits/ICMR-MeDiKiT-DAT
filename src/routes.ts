const createAppPaths = () => ({
  base: "/app",
  home: "/app/home",
  tests: "/app/tests",
  labs: "/app/labs",
  registerPatient: "/app/register-patient",
  patientConsultation: "/app/patient-consultation",
  adminHelp: "/app/admin-help",
  patientHelp: "/app/patient-help",
  settings: "/app/settings",
  hospitalDataManagement: {
    base: "/app/hospital-data-management",
    addHospital: "/app/hospital-data-management/add-hospital",
    addDepartment: "/app/hospital-data-management/add-department",
    addDoctor: "/app/hospital-data-management/add-doctor",
    addDisease: "/app/hospital-data-management/add-disease",
    addMedicine: "/app/hospital-data-management/add-medicine"
  }
});

const createAuthPaths = () => ({
  base: "/auth",
  login: "/auth/login",
  forgotPassword: "/auth/forgot-password",
  google: "/auth/google",
  signUp: "/auth/signup"
});

const createAPIPaths = () => ({
  base: "/api"
});

export const URLs = {
  auth: createAuthPaths(),
  app: createAppPaths(),
  api: createAPIPaths()
};
