import { useState, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addMedicineFormSchema } from "@/lib/schema";
import { addMedicineFormValues } from "@/lib/default-values";
import FormWrapper from "@/components/form/form-wrapper";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldSelect from "@/components/form/form-field-select";
import FormFieldTextArea from "@/components/form/form-field-textarea";
import hospitals from "@/data/hospitals.json";
import departments from "@/data/departments.json";
import { z } from "zod";

type AddMedicineFormValues = z.infer<typeof addMedicineFormSchema>;

const useDepartmentOptions = (selectedHospital: string | boolean) => {
  return useMemo(() => {
    if (!selectedHospital) return [];
    return departments
      .filter(department => department.hospitalName === selectedHospital)
      .map(department => ({
        value: department.departmentName,
        label: department.departmentName
      }));
  }, [selectedHospital]);
};

const AddMedicine = () => {
  const form = useForm<AddMedicineFormValues>({
    resolver: zodResolver(addMedicineFormSchema),
    defaultValues: addMedicineFormValues
  });

  const [selectedHospital, setSelectedHospital] = useState<string | boolean>(
    ""
  );

  const hospitalOptions = hospitals.map(hospital => ({
    value: hospital.hospitalName,
    label: `${hospital.hospitalName} - ${hospital.state}, ${hospital.district}`
  }));

  const departmentOptions = useDepartmentOptions(selectedHospital);

  const onSubmit: SubmitHandler<AddMedicineFormValues> = values => {
    console.log(values);
  };

  return (
    <FormWrapper
      form={form}
      onSubmit={onSubmit}
      title="Add Medicine"
      description="Please enter the details of the medicine."
    >
      <FormFieldInput
        name="medicineName"
        label="Medicine Name"
        placeholder="Enter Medicine Name"
        form={form}
      />

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

      <FormFieldTextArea
        name="description"
        label="Description"
        placeholder="Enter a brief description of the medicine"
        form={form}
      />
    </FormWrapper>
  );
};

export default AddMedicine;
