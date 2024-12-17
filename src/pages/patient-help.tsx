import HelpTabsWrapper from "@/components/help/help-tabs-wrapper";

const patientTabs = [
  {
    value: "register-patient",
    title: "Register Patient",
    steps: [
      {
        title: "Fill in the Patient's Personal Details",
        description:
          "Enter the patient's name, date of birth, gender, contact number, and address in the respective fields."
      },
      {
        title: "Select State and District",
        description:
          "Choose the patient's state and district from the dropdowns to specify their location."
      },
      {
        title: "Enter the Pin Code",
        description:
          "Fill in the patient's 6-digit pin code for accurate location data."
      },
      {
        title: "Enter Medical History",
        description:
          "Provide the patient's medical history (optional) in the medical history field."
      },
      {
        title: "Submit the Registration Form",
        description:
          "Once all details are filled in, click the 'Submit' button to register the patient."
      }
    ]
  },
  {
    value: "book-consultation",
    title: "Book Patient Consultation",
    steps: [
      {
        title: "Select the Hospital",
        description:
          "Choose the hospital where the patient will consult with the doctor from the 'Hospital' dropdown."
      },
      {
        title: "Select the Department",
        description:
          "After selecting the hospital, choose the relevant department from the 'Department' dropdown."
      },
      {
        title: "Select the Doctor",
        description:
          "Choose the doctor for the consultation from the 'Doctor' dropdown."
      },
      {
        title: "Enter the Patient's Name",
        description:
          "Fill in the patient's name for the consultation appointment."
      },
      {
        title: "Select Consultation Date",
        description:
          "Pick the date for the consultation from the 'Consultation Date' field."
      },
      {
        title: "Provide Description",
        description:
          "Enter any relevant details for the consultation, such as symptoms or concerns."
      },
      {
        title: "Submit the Consultation Booking",
        description:
          "Click the 'Submit' button to confirm the consultation booking."
      }
    ]
  }
];

const PatientHelp = () => {
  return (
    <HelpTabsWrapper
      tabs={patientTabs}
      defaultValue="register-patient"
      wrapperTitle="Patient Help"
      wrapperDescription="This guide explains the steps to register a new patient and book a consultation."
    />
  );
};

export default PatientHelp;
  