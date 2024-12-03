import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDepartmentFormSchema } from "@/lib/schema";
import { addDepartmentFormValues } from "@/lib/default-values";
import FormWrapper from "@/components/form/form-wrapper";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldSelect from "@/components/form/form-field-select";
import hospitals from "@/data/hospitals.json";

const AddDepartment = () => {
  const form = useForm({
    resolver: zodResolver(addDepartmentFormSchema),
    defaultValues: addDepartmentFormValues
  });

  const onSubmit: SubmitHandler<typeof addDepartmentFormValues> = values => {
    console.log(values);
  };

  const hospitalOptions = hospitals.map(hospital => ({
    value: hospital.hospitalName,
    label: `${hospital.hospitalName} - ${hospital.state}, ${hospital.district}`
  }));

  return (
    <FormWrapper
      form={form}
      onSubmit={onSubmit}
      title="Add Department"
      description="Please enter the details of the department."
    >
      <FormFieldSelect
        name="hospitalName"
        label="Hospital Name"
        placeholder="Select Hospital"
        options={hospitalOptions}
        form={form}
      />
      <FormFieldInput
        name="departmentName"
        label="Department Name"
        placeholder="Enter Department Name"
        form={form}
      />
    </FormWrapper>
  );
};

export default AddDepartment;
