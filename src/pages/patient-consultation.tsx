import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookConsultationFormSchema } from "@/lib/schema";
import { bookConsultationFormValues } from "@/utils/defaultValues";
import FormWrapper from "@/components/form/form-wrapper";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldSelect from "@/components/form/form-field-select";
import FormFieldDate from "@/components/form/form-field-date";
import FormFieldTextarea from "@/components/form/form-field-textarea";
import {
  useHospitalOptions,
  useDepartmentOptions,
  useDoctorOptions
} from "@/utils/useOptions";
import { z } from "zod";

type BookConsultationFormValues = z.infer<typeof bookConsultationFormSchema>;

const PatientConsultation = () => {
  const form = useForm<BookConsultationFormValues>({
    resolver: zodResolver(bookConsultationFormSchema),
    defaultValues: bookConsultationFormValues
  });

  const [selectedHospital, setSelectedHospital] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  const hospitalOptions = useHospitalOptions();
  const departmentOptions = useDepartmentOptions(selectedHospital);
  const doctorOptions = useDoctorOptions(selectedHospital, selectedDepartment);

  const onSubmit: SubmitHandler<BookConsultationFormValues> = values => {
    console.log("Consultation Details:", values);
  };

  return (
    <FormWrapper
      form={form}
      onSubmit={onSubmit}
      title="Book Patient Consultation"
      description="Please provide details to book a doctor for consultation."
    >
      <FormFieldSelect
        name="hospitalName"
        label="Hospital"
        placeholder="Select Hospital"
        options={hospitalOptions}
        form={form}
        setStateFxn={setSelectedHospital}
      />
      <FormFieldSelect
        name="departmentName"
        label="Department"
        placeholder={
          selectedHospital
            ? "Select Department"
            : "Please select a hospital first"
        }
        options={departmentOptions}
        form={form}
        disabled={!selectedHospital}
        setStateFxn={setSelectedDepartment}
      />
      <FormFieldSelect
        name="doctorName"
        label="Doctor"
        placeholder={
          selectedDepartment
            ? "Select Doctor"
            : "Please select a department first"
        }
        options={doctorOptions}
        form={form}
        disabled={!selectedDepartment}
      />
      <FormFieldInput
        name="patientName"
        label="Patient Name"
        placeholder="Enter Patient Name"
        form={form}
      />
      <FormFieldDate
        name="consultationDate"
        label="Consultation Date"
        placeholder="Pick a date"
        form={form}
      />
      <FormFieldTextarea
        name="description"
        label="Description"
        placeholder="Enter consultation details"
        form={form}
      />
    </FormWrapper>
  );
};

export default PatientConsultation;
