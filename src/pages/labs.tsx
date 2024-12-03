import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, UseFormReturn } from "react-hook-form";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldSelect from "@/components/form/form-field-select";
import { labFormSchema } from "@/lib/schema";
import { useState } from "react";
import { labFormValues } from "@/utils/defaultValues";
import FormWrapper from "@/components/form/form-wrapper";
import { useDistrictOptions, useStateOptions } from "@/utils/useOptions";

type LabFormValues = z.infer<typeof labFormSchema>;

const Labs = () => {
  const form: UseFormReturn<LabFormValues> = useForm<LabFormValues>({
    resolver: zodResolver(labFormSchema),
    defaultValues: labFormValues
  });

  const [selectedState, setSelectedState] = useState<string>("");

  const stateOptions = useStateOptions();
  const districtOptions = useDistrictOptions(selectedState);

  const onSubmit: SubmitHandler<LabFormValues> = values => {
    console.log(values);
  };

  return (
    <FormWrapper
      form={form}
      onSubmit={onSubmit}
      title="Add Laboratory Details"
      description="Please enter the details of the hospital and laboratory."
    >
      <FormFieldInput
        name="hospitalName"
        label="Hospital Name"
        placeholder="Enter Hospital Name"
        form={form}
      />
      <FormFieldInput
        name="laboratoryName"
        label="Laboratory Name"
        placeholder="Enter Laboratory Name"
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
        label="Pin"
        placeholder="Enter Pin (6 digits)"
        form={form}
      />
    </FormWrapper>
  );
};

export default Labs;
