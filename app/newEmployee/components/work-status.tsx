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
import { z } from "zod";

const FormSchema = z.object({
  id_number: z.string(),
  role: z.string(),
  previous_training: z.string(),
  finished_date: z.string(),
  dbs_number: z.string(),
  updated_dbs_number: z.string(),
});

const WorkStatus = () => {
  const { setCurrentStep } = useAddNewEmployee();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id_number: "",
      role: "",
      previous_training: "",
      finished_date: "",
      dbs_number: "",
      updated_dbs_number: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setCurrentStep(3);
  };

  return (
    <Form {...form}>
      <form
        className="w-full flex flex-col gap-4 mt-10 bg-white border border-gray-400 p-10 shadow-sm rounded-lg"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="id_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="ID Number"
                  {...field}
                  autoComplete="id_number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Role"
                  {...field}
                  autoComplete="role"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="previous_training"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Previous Training"
                  autoComplete="previous_training"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="finished_date"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Finshed Date"
                  autoComplete="finished_date"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dbs_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="DBS number"
                  autoComplete="dbs_number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="updated_dbs_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Updated DBS"
                  autoComplete="updated_dbs_number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            type="button"
            onClick={() =>{ 
              setCurrentStep(1)
            } 
          }
          >
            Previous
          </Button>
          <Button variant="default" type="submit">
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default WorkStatus;
