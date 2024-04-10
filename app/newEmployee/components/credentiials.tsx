import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAddNewEmployee from "@/hooks/use-add-newEmployee";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  cv: z.any(),
  refernce1_firstname: z.string(),
  refernce1_lastname: z.string(),
  refernce1_phonenumber: z.string(),
  refernce1_address: z.string(),
  refernce2_firstname: z.string(),
  refernce2_lastname: z.string(),
  refernce2_phonenumber: z.string(),
  refernce2_address: z.string(),
});

const Credentiials = () => {
  const { setCurrentStep } = useAddNewEmployee();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      refernce1_firstname: "",
      refernce1_lastname: "",
      refernce1_phonenumber: "",
      refernce1_address: "",
      refernce2_firstname: "",
      refernce2_lastname: "",
      refernce2_address: "",
      refernce2_phonenumber: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("heree");
    setCurrentStep(4);
  };

  return (
    <Form {...form}>
      <form
        className="w-full flex flex-col gap-4 mt-10 bg-white border border-gray-400 p-10 shadow-sm rounded-lg"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="cv"
          render={({ field }) => (
            <div className="flex flex-col gap-2">
              <Label className="flex items-center justify-between">
                <span>CV </span>
                <p className="font-bold">Upload </p>
              </Label>

              <div className=" flex flex-col space-y-4 items-center mt-0 w-4/5 md:w-[350px] m-auto h-[15vh] bg-gray-400/10 border border-primary-light rounded-md border-dashed focus:ring focus:border-zinc-900 ">
                <div className="relative cursor-pointer w-full h-full">
                  <div className="opacity-50 p-4 order-1 text-center">
                    <CloudArrowUpIcon className="w-6 h-6 m-auto cursor-pointer" />
                    <span className="relative bg-primary-light  text-black rounded-md py-2 px-4 mb-2">
                      Upload CV
                    </span>
                  </div>
                  <FormItem>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf,.docx"
                        {...field}
                        className="opacity-0 absolute z-10 left-0 h-[15vh] bg-red-300 top-0 cursor-pointer"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              </div>
              <span className="relative text-center bg-primary-light  text-black rounded-md py-2 px-4 mb-2">
                Browse files
              </span>
            </div>
          )}
        />

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="refernce1_firstname"
            render={({ field }) => (
              <FormItem className="w-[45%]">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="First Name"
                    {...field}
                    autoComplete="refernce1_firstname"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="refernce1_lastname"
            render={({ field }) => (
              <FormItem className="w-[45%]">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    {...field}
                    autoComplete="refernce1_lastname"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="refernce1_phonenumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Phone Number"
                  {...field}
                  autoComplete="refernce1_phonenumber"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="refernce1_address"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="House Address"
                  {...field}
                  autoComplete="refernce1_address"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-2 justify-between">
          <hr className="inline-block min-w-[80%]" />
          <p className="inline-block text-xs opacity-75 w-fit">Reference 2</p>
        </div>
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="refernce2_firstname"
            render={({ field }) => (
              <FormItem className="w-[45%]">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="First Name"
                    {...field}
                    autoComplete="refernce2_firstname"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="refernce2_lastname"
            render={({ field }) => (
              <FormItem className="w-[45%]">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    {...field}
                    autoComplete="refernce2_lastname"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="refernce2_phonenumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Phone Number"
                  {...field}
                  autoComplete="refernce2_phonenumber"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="refernce2_address"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="House Address"
                  {...field}
                  autoComplete="refernce2_address"
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
            onClick={() => {
              setCurrentStep(2);
            }}
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

export default Credentiials;
