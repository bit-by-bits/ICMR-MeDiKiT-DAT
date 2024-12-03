import { UseFormReturn, FieldValues, Path, PathValue } from "react-hook-form";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

type FormFieldSelectProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder: string;
  options: string[];
  form: UseFormReturn<T>;
  disabled?: boolean;
  setStateFxn?: (value: PathValue<T, Path<T>>) => void;
};

const FormFieldSelect = <T extends FieldValues>({
  name,
  label,
  placeholder,
  options,
  form,
  disabled = false,
  setStateFxn
}: FormFieldSelectProps<T>) => {
  const handleValueChange = (value: PathValue<T, Path<T>>) => {
    form.setValue(name, value);
    setStateFxn?.(value);
  };

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              value={field.value ?? ""}
              onValueChange={handleValueChange}
              disabled={disabled}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map(option => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldSelect;