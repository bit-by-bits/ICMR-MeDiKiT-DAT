import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import states from "@/data/states.json";

const formSchema = z.object({
  hospitalName: z.string().min(2, { message: "Hospital Name is required" }),
  laboratoryName: z.string().min(2, { message: "Laboratory Name is required" }),
  state: z.string().min(2, { message: "State is required" }),
  district: z.string().min(2, { message: "District is required" }),
  city: z.string().min(2, { message: "City is required" }),
  pin: z
    .string()
    .length(6, { message: "Pin must be exactly 6 digits" })
    .regex(/^\d+$/, { message: "Pin must be numeric" })
});

export const description = "";

const Labs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hospitalName: "",
      laboratoryName: "",
      state: "",
      district: "",
      city: "",
      pin: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
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
          <FormField
            control={form.control}
            name="hospitalName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hospital Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Hospital Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="laboratoryName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Laboratory Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Laboratory Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="Enter State" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>District</FormLabel>
                <FormControl>
                  <Input placeholder="Enter District" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pin</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Pin (6 digits)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
