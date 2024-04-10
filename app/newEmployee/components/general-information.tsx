import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAddNewEmployee from "@/hooks/use-add-newEmployee";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { date, z } from "zod";

const FormSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  date_of_birth: z.string(),
  gender: z.enum(["Male", "Female", "Other", ""]),
  email: z.string(),
  phonenumber: z.string(),
  nationality: z.string(),
  residency_type: z.string(),
  expiry_date: z.string(),
  postal_code: z.string(),
  address: z.string(),
});

const GeneralInformation = () => {
  const { setCurrentStep } = useAddNewEmployee();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      date_of_birth: "",
      gender: "",
      email: "",
      nationality: "",
      residency_type: "",
      expiry_date: "",
      postal_code: "",
      address: "",
      phonenumber: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setCurrentStep(2);
  };

  return (
    <Form {...form}>
      <form
        className="w-full flex flex-col gap-4 mt-10 bg-white border border-gray-400 p-10 shadow-sm rounded-lg"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="w-[45%]">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="First Name"
                    {...field}
                    autoComplete="firstname"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="w-[45%]">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    {...field}
                    autoComplete="lastname"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="date_of_birth"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="date"
                  placeholder="Date of Birth"
                  autoComplete="date_of_birth"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Gender"
                  autoComplete="gender"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="E-mail"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phonenumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  autoComplete="phonenumber"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nationality"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Nationality"
                  autoComplete="nationality"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <header className="opacity-75 flex items-center justify-between">
          <span className="border-b border-gray-400 opacity-50 w-[63%] inline-block ml-auto"></span>
          <h3 className="inline-block text-xs">
            Not Applicatble if you are the citizen of the UK{" "}
          </h3>
        </header>
        <FormField
          control={form.control}
          name="residency_type"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Residency Type"
                  autoComplete="residency_type"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expiry_date"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="date"
                  placeholder="Expiry Date "
                  autoComplete="expiry_date"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="postal_code"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Postal Code"
                  autoComplete="postal_code"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Address"
                  autoComplete="address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="default" className="mt-8" type="submit">
          Next
        </Button>
      </form>
    </Form>
  );
};

export default GeneralInformation;
