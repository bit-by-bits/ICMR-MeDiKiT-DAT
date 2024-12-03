import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addHospitalFormSchema } from "@/lib/schema";
import { addHospitalFormValues } from "@/lib/defaultValues";
import { z } from "zod";
import FormWrapper from "@/components/form/form-wrapper";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldSelect from "@/components/form/form-field-select";
import { useDistrictOptions, useStateOptions } from "@/lib/useOptions";

type AddHospitalFormValues = z.infer<typeof addHospitalFormSchema>;

const AddHospital = () => {
  const form = useForm<AddHospitalFormValues>({
    resolver: zodResolver(addHospitalFormSchema),
    defaultValues: addHospitalFormValues
  });

  const [selectedState, setSelectedState] = useState<string>("");

  const stateOptions = useStateOptions();
  const districtOptions = useDistrictOptions(selectedState);

  const onSubmit: SubmitHandler<AddHospitalFormValues> = values => {
    console.log(values);
  };

  return (
    <FormWrapper
      form={form}
      onSubmit={onSubmit}
      title="Add Hospital"
      description="Please enter the details of the hospital."
    >
      <FormFieldInput
        name="hospitalName"
        label="Hospital Name"
        placeholder="Enter Hospital Name"
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

export default AddHospital;
