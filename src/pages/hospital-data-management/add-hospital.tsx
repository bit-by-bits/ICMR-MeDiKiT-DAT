import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldSelect from "@/components/form/form-field-select";
import states from "@/data/states.json";
import districts from "@/data/districts.json";
import { addHospitalFormSchema } from "@/lib/schema";
import { addHospitalFormValues } from "@/data/default-form-values";
import { useState, useMemo } from "react";

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
    <div className="flex flex-col space-y-6 bg-background">
      <h1 className="text-4xl font-extrabold text-primary">Add Hospital</h1>
      <p className="text-lg text-muted-foreground">
        Please enter the details of the hospital.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

          <Button
            type="submit"
            className="px-6 py-3 bg-primary text-background hover:bg-primary/90"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddHospital;
