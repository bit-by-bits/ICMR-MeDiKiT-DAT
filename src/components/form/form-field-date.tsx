import { UseFormReturn, FieldValues, Path, PathValue } from "react-hook-form";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormFieldDateProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder: string;
  form: UseFormReturn<T>;
  disabled?: boolean;
  setStateFxn?: (value: PathValue<T, Path<T>>) => void;
};

const FormFieldDate = <T extends FieldValues>({
  name,
  label,
  placeholder,
  form,
  disabled = false,
  setStateFxn
}: FormFieldDateProps<T>) => {
  const handleValueChange = (newValue: PathValue<T, Path<T>>) => {
    form.setValue(name, newValue);
    setStateFxn?.(newValue);
  };

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="date"
              placeholder={placeholder}
              value={field.value ?? ""}
              disabled={disabled}
              onChange={e =>
                handleValueChange(e.target.value as PathValue<T, Path<T>>)
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldDate;
