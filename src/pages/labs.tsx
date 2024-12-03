import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldSelect from "@/components/form/form-field-select";
import { labFormSchema } from "@/lib/schema";
import { useState, useMemo } from "react";
import states from "@/data/states.json";
import districts from "@/data/districts.json";
import { labFormValues } from "@/lib/default-values";


type LabFormValues = z.infer<typeof labFormSchema>;

const useDistrictOptions = (selectedState: string) => {
  return useMemo(() => {
    return selectedState
      ? districts[selectedState as keyof typeof districts] || []
      : [];
  }, [selectedState]);
};

const Labs = () => {
  const form: UseFormReturn<LabFormValues> = useForm<LabFormValues>({
    resolver: zodResolver(labFormSchema),
    defaultValues: labFormValues
  });

  const [selectedState, setSelectedState] = useState<string>("");
  const districtOptions = useDistrictOptions(selectedState);

  const onSubmit: SubmitHandler<LabFormValues> = values => {
    console.log(values);
  };

  return (
    <div className="flex flex-col space-y-6 bg-background">
      <h1 className="text-4xl font-extrabold text-primary">
        Add Laboratory Details
      </h1>
      <p className="text-lg text-muted-foreground">
        Please enter the details of the hospital and laboratory.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

export default Labs;
