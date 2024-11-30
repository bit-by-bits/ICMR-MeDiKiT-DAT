import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/labs/form-input-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import states from "@/data/states.json";
import districts from "@/data/districts.json";
import { useState, useEffect } from "react";

const formSchema: z.ZodObject<{ [key: string]: z.ZodString }> = z.object({
  hospitalName: z.string().min(2, { message: "Hospital Name is required" }),
  laboratoryName: z.string().min(2, { message: "Laboratory Name is required" }),
  state: z.string().min(2, { message: "State is required" }),
  district: z.string().min(2, { message: "District is required" }),
  pin: z
    .string()
    .length(6, { message: "Pin must be exactly 6 digits" })
    .regex(/^\d+$/, { message: "Pin must be numeric" })
});

type FormValues = z.infer<typeof formSchema>;

const useDistricts = (selectedState: string) => {
  const [districtOptions, setDistrictOptions] = useState<string[]>([]);

  useEffect(() => {
    if (selectedState) {
      setDistrictOptions(
        districts[selectedState as keyof typeof districts] || []
      );
    } else {
      setDistrictOptions([]);
    }
  }, [selectedState]);

  return districtOptions;
};

const Labs = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hospitalName: "",
      laboratoryName: "",
      state: "",
      district: "",
      pin: ""
    }
  });

  const onSubmit: SubmitHandler<FormValues> = values => {
    console.log(values);
  };

  const [selectedState, setSelectedState] = useState<string>("");
  const districtOptions = useDistricts(selectedState);

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
          <FormInputField
            name="hospitalName"
            label="Hospital Name"
            placeholder="Enter Hospital Name"
            form={form}
          />
          <FormInputField
            name="laboratoryName"
            label="Laboratory Name"
            placeholder="Enter Laboratory Name"
            form={form}
          />

          <div className="form-field">
            <label htmlFor="state" className="block text-lg font-semibold">
              State
            </label>
            <Select
              value={selectedState}
              onValueChange={(value: string) => {
                setSelectedState(value);
                form.setValue("state", value);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                {states.map(state => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="form-field">
            <label htmlFor="district" className="block text-lg font-semibold">
              District
            </label>
            <Select
              value={form.getValues("district")}
              onValueChange={(value: string) =>
                form.setValue("district", value)
              }
              disabled={!selectedState}
            >
              <SelectTrigger>
                <SelectValue
                  placeholder={
                    selectedState
                      ? "Select District"
                      : "Please select a state first"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {districtOptions.length > 0 ? (
                  districtOptions.map(district => (
                    <SelectItem key={district} value={district}>
                      {district}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="no-district" disabled>
                    Please select a state first
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>

          <FormInputField
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
