import { ControllerRenderProps } from "react-hook-form";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldInputProps {
  name: string;
  label: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
}

const FormFieldInput = ({
  name,
  label,
  placeholder,
  form
}: FormFieldInputProps) => (
  <FormField
    name={name}
    control={form.control}
    render={({ field }: { field: ControllerRenderProps }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            value={typeof field.value === "boolean" ? "" : field.value}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormFieldInput;
