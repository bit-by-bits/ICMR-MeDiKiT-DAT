import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, UseFormReturn } from "react-hook-form";
import FormFieldInput from "@/components/form/form-field-input";
import FormFieldSelect from "@/components/form/form-field-select";
import FormFieldDate from "@/components/form/form-field-date";
import FormFieldFile from "@/components/form/form-field-file";
import { addTestFormSchema } from "@/lib/schema";
import { addTestFormValues } from "@/lib/defaultValues";
import testTypes from "@/data/test-types.json";
import FormWrapper from "@/components/form/form-wrapper";
import { useHospitalOptions, useLabOptions } from "@/lib/useOptions";

type TestFormValues = z.infer<typeof addTestFormSchema>;

const Tests = () => {
  const form: UseFormReturn<TestFormValues> = useForm<TestFormValues>({
    resolver: zodResolver(addTestFormSchema),
    defaultValues: addTestFormValues
  });

  const [selectedHospital, setSelectedHospital] = useState<string>("");

  const hospitalsOptions = useHospitalOptions();
  const labOptions = useLabOptions(selectedHospital);

  const onSubmit: SubmitHandler<TestFormValues> = values => {
    console.log(values);
  };

  return (
    <FormWrapper
      form={form}
      onSubmit={onSubmit}
      title="Add New Test Record"
      description="Please enter the details of the test and upload the test file."
    >
      <FormFieldSelect
        name="hospitalId"
        label="Hospital"
        placeholder="Select Hospital"
        options={hospitalsOptions}
        form={form}
        setStateFxn={setSelectedHospital}
      />
      <FormFieldSelect
        name="labId"
        label="Lab"
        placeholder="Select Lab"
        options={labOptions}
        form={form}
        disabled={!selectedHospital}
      />
      <FormFieldSelect
        name="patientId"
        label="Patient"
        placeholder="Select Patient"
        options={[]}
        form={form}
      />
      <FormFieldSelect
        name="testType"
        label="Test Type"
        placeholder="Select Test Type"
        options={testTypes}
        form={form}
      />
      <FormFieldInput
        name="testName"
        label="Test Name"
        placeholder="Enter Test Name"
        form={form}
      />
      <FormFieldDate
        name="testDate"
        label="Test Date"
        placeholder="Select Test Date"
        form={form}
      />
      <FormFieldInput
        name="testResult"
        label="Test Result"
        placeholder="Enter Test Result"
        form={form}
      />
      <FormFieldFile
        name="testFile"
        label="Test File"
        form={form}
        accept="application/pdf, image/*"
      />
    </FormWrapper>
  );
};

export default Tests;
