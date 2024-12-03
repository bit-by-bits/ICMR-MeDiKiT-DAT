import { UseFormReturn, FieldValues, Path, PathValue } from "react-hook-form";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormFieldFileProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  form: UseFormReturn<T>;
  accept?: string;
  disabled?: boolean;
  setStateFxn?: (value: PathValue<T, Path<T>>) => void;
};

const FormFieldFile = <T extends FieldValues>({
  name,
  label,
  form,
  accept = "",
  disabled = false,
  setStateFxn
}: FormFieldFileProps<T>) => {
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
              type="file"
              accept={accept}
              disabled={disabled}
              onChange={e => {
                const file = e.target.files?.[0];
                if (file) {
                  handleValueChange(file as PathValue<T, Path<T>>);
                }
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldFile;
