import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoctorFormSchema } from "@/lib/schema";
import { addDoctorFormValues } from "@/utils/defaultValues";
import FormWrapper from "@/components/form/form-wrapper";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldSelect from "@/components/form/form-field-select";
import { z } from "zod";
import { useDepartmentOptions, useHospitalOptions } from "@/utils/useOptions";

type AddDoctorFormValues = z.infer<typeof addDoctorFormSchema>;

const AddDoctor = () => {
  const form = useForm<AddDoctorFormValues>({
    resolver: zodResolver(addDoctorFormSchema),
    defaultValues: addDoctorFormValues
  });

  const [selectedHospital, setSelectedHospital] = useState<string>("");

  const hospitalOptions = useHospitalOptions();
  const departmentOptions = useDepartmentOptions(selectedHospital);

  const onSubmit: SubmitHandler<AddDoctorFormValues> = values => {
    console.log(values);
  };

  return (
    <FormWrapper
      form={form}
      onSubmit={onSubmit}
      title="Add Doctor"
      description="Please enter the details of the doctor."
    >
      <FormFieldSelect
        name="hospitalName"
        label="Hospital Name"
        placeholder="Select Hospital"
        options={hospitalOptions}
        form={form}
        setStateFxn={setSelectedHospital}
      />
      <FormFieldSelect
        name="departmentName"
        label="Department Name"
        placeholder={
          selectedHospital
            ? "Select Department"
            : "Please select a hospital first"
        }
        options={departmentOptions}
        form={form}
        disabled={!selectedHospital}
      />
      <FormFieldInput
        name="doctorName"
        label="Doctor Name"
        placeholder="Enter Doctor's Name"
        form={form}
      />
    </FormWrapper>
  );
};

export default AddDoctor;
