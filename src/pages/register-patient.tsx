import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import FormWrapper from "@/components/form/form-wrapper";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldSelect from "@/components/form/form-field-select";
import FormFieldTextArea from "@/components/form/form-field-textarea";
import FormFieldDate from "@/components/form/form-field-date";
import {
  useDistrictOptions,
  useGenderOptions,
  useStateOptions
} from "@/utils/useOptions";
import { registerPatientFormSchema } from "@/lib/schema";
import { registerPatientFormValues } from "@/utils/defaultValues";

type RegisterPatientFormValues = z.infer<typeof registerPatientFormSchema>;

const RegisterPatient = () => {
  const form = useForm<RegisterPatientFormValues>({
    resolver: zodResolver(registerPatientFormSchema),
    defaultValues: registerPatientFormValues
  });

  const [selectedState, setSelectedState] = useState<string>("");

  const stateOptions = useStateOptions();
  const districtOptions = useDistrictOptions(selectedState);
  const genderOptions = useGenderOptions();

  const onSubmit: SubmitHandler<RegisterPatientFormValues> = values => {
    console.log("Submitted Values:", values);
  };

  return (
    <FormWrapper
      form={form}
      onSubmit={onSubmit}
      title="Register Patient"
      description="Please fill in the details to register a new patient."
    >
      <FormFieldInput
        name="patientName"
        label="Patient Name"
        placeholder="Enter Patient Name"
        form={form}
      />

      <FormFieldDate
        name="dateOfBirth"
        label="Date of Birth"
        placeholder="Select Date of Birth"
        form={form}
      />

      <FormFieldSelect
        name="gender"
        label="Gender"
        placeholder="Select Gender"
        options={genderOptions}
        form={form}
      />

      <FormFieldInput
        name="contactNumber"
        label="Contact Number"
        placeholder="Enter 10-digit Contact Number"
        form={form}
      />

      <FormFieldTextArea
        name="address"
        label="Address"
        placeholder="Enter Patient Address"
        form={form}
      />

      <FormFieldSelect
        name="state"
        label="State"
        placeholder="Select State"
        options={stateOptions}
        form={form}
        setStateFxn={setSelectedState}
      />

      <FormFieldSelect
        name="district"
        label="District"
        placeholder={
          selectedState ? "Select District" : "Please select a state first"
        }
        options={districtOptions}
        form={form}
        disabled={!selectedState}
      />

      <FormFieldInput
        name="pin"
        label="Pin Code"
        placeholder="Enter 6-digit Pin Code"
        form={form}
      />

      <FormFieldTextArea
        name="medicalHistory"
        label="Medical History"
        placeholder="Enter medical history (optional)"
        form={form}
      />
    </FormWrapper>
  );
};

export default RegisterPatient;
