import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { UseFormReturn, FieldValues } from "react-hook-form";

interface FormWrapperProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  onSubmit: (values: T) => void;
  children: ReactNode;
  title: string;
  description: string;
}

const FormWrapper = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  title,
  description
}: FormWrapperProps<T>) => (
  <div className="flex flex-col space-y-6 bg-background">
    <h1 className="text-4xl font-extrabold text-primary">{title}</h1>
    <p className="text-lg text-muted-foreground">{description}</p>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {children}
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

export default FormWrapper;
