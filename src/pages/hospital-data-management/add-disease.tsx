import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDiseaseFormSchema } from "@/lib/schema";
import { addDiseaseFormValues } from "@/lib/defaultValues";
import FormWrapper from "@/components/form/form-wrapper";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldTextArea from "@/components/form/form-field-textarea";
import FormFieldSelect from "@/components/form/form-field-select";
import { z } from "zod";

type AddDiseaseFormValues = z.infer<typeof addDiseaseFormSchema>;

const useCategoryOptions = () => [
  "Cardiovascular",
  "Endocrine",
  "Respiratory",
  "Orthopedic",
  "Oncology",
  "Nephrology",
  "Neurology",
  "Infectious Diseases",
  "Rheumatology",
  "Gastroenterology",
  "Hematology",
  "Dermatology"
];

const AddDisease = () => {
  const form = useForm<AddDiseaseFormValues>({
    resolver: zodResolver(addDiseaseFormSchema),
    defaultValues: addDiseaseFormValues
  });

  const categoryOptions = useCategoryOptions();

  const onSubmit: SubmitHandler<AddDiseaseFormValues> = values => {
    console.log(values);
  };

  return (
    <FormWrapper
      form={form}
      onSubmit={onSubmit}
      title="Add Disease"
      description="Please enter the details of the disease."
    >
      <FormFieldInput
        name="diseaseName"
        label="Disease Name"
        placeholder="Enter Disease Name"
        form={form}
      />
      <FormFieldTextArea
        name="description"
        label="Description"
        placeholder="Enter Disease Description"
        form={form}
      />
      <FormFieldSelect
        name="category"
        label="Category"
        placeholder="Select Disease Category"
        options={categoryOptions}
        form={form}
      />
    </FormWrapper>
  );
};

export default AddDisease;
