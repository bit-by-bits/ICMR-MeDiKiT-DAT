import { useState, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoctorFormSchema } from "@/lib/schema";
import { addDoctorFormValues } from "@/lib/default-values";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldSelect from "@/components/form/form-field-select";
import FormWrapper from "@/components/form/form-wrapper";
import hospitals from "@/data/hospitals.json";
import departments from "@/data/departments.json";
import { z } from "zod";

type AddDoctorFormValues = z.infer<typeof addDoctorFormSchema>;

const useDepartmentOptions = (selectedHospital: string) => {
  return useMemo(() => {
    return selectedHospital
      ? departments
          .filter(department => department.hospitalName === selectedHospital)
          .map(department => ({
            value: department.departmentName,
            label: department.departmentName
          }))
      : [];
  }, [selectedHospital]);
};

const AddDoctor = () => {
  const form = useForm<AddDoctorFormValues>({
    resolver: zodResolver(addDoctorFormSchema),
    defaultValues: addDoctorFormValues
  });

  const [selectedHospital, setSelectedHospital] = useState<string>("");
  const departmentOptions = useDepartmentOptions(selectedHospital);

  const hospitalOptions = useMemo(
    () =>
      hospitals.map(hospital => ({
        value: hospital.hospitalName,
        label: `${hospital.hospitalName} - ${hospital.state}, ${hospital.district}`
      })),
    []
  );

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
