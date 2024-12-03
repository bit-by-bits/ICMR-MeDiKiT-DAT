import { useState, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldSelect from "@/components/form/form-field-select";
import FormWrapper from "@/components/form/form-wrapper";
import { addHospitalFormSchema } from "@/lib/schema";
import { addHospitalFormValues } from "@/lib/default-values";
import states from "@/data/states.json";
import districts from "@/data/districts.json";

type AddHospitalFormValues = z.infer<typeof addHospitalFormSchema>;

const useDistrictOptions = (selectedState: string) => {
  return useMemo(() => {
    return selectedState
      ? districts[selectedState as keyof typeof districts] || []
      : [];
  }, [selectedState]);
};

const AddHospital = () => {
  const form = useForm<AddHospitalFormValues>({
    resolver: zodResolver(addHospitalFormSchema),
    defaultValues: addHospitalFormValues
  });

  const [selectedState, setSelectedState] = useState<string>("");
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
        options={states}
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
