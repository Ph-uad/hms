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
import { zodResolver } from "@hookform/resolvers/zod";
import { Ghost } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  passport: z.any().refine((files) => files?.length == 1, "File is required."),
  resident_card_front: z
    .any()
    .refine((files) => files?.length == 1, "File is required."),
  resident_card_back: z
    .any()
    .refine((files) => files?.length == 1, "File is required."),
  passport_front: z
    .any()
    .refine((files) => files?.length == 1, "File is required."),
  passport_back: z
    .any()
    .refine((files) => files?.length == 1, "File is required."),
});

const FileUpload = () => {
  const { setCurrentStep } = useAddNewEmployee();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      passport: "",
      resident_card_front: "",
      resident_card_back: "",
      passport_front: "",
      passport_back: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("heree");
  };

  return (
    <Form {...form}>
      <form
        className="w-full flex flex-col gap-4 mt-10 bg-white border border-gray-400 p-10 shadow-sm rounded-lg"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-between border-b border-gray-700">
          <Label>Passport Photograph</Label>
          <div className="relative cursor-pointer">
            <Button variant="ghost" className="font-extrabold underline">
              Upload
            </Button>
            <FormField
              control={form.control}
              name="passport"
              render={({ field }) => (
                <FormItem className="absolute top-0 opacity-0 cursor-pointer">
                  <FormControl className="flex items-center">
                    <Input
                      type="file"
                      accept=".jpeg,image/jpeg,image/png,image/webp,image/avif,image/heic"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-gray-700">
          <Label>Ressident Card (Front)</Label>
          <div className="relative cursor-pointer">
            <Button variant="ghost" className="font-extrabold underline">
              Upload
            </Button>
            <FormField
              control={form.control}
              name="resident_card_front"
              render={({ field }) => (
                <FormItem className="absolute top-0 opacity-0 cursor-pointer">
                  <Label>Ressident Card (Front)</Label>
                  <FormControl className="flex items-center">
                    <Input
                      type="file"
                      placeholder=""
                      {...field}
                      accept=".jpeg,image/jpeg,image/png,image/webp,image/avif,image/heic"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-gray-700">
          <Label>Ressident Card (Back)</Label>
          <div className="relative cursor-pointer">
            <Button variant="ghost" className="font-extrabold underline">
              Upload
            </Button>

            <FormField
              control={form.control}
              name="resident_card_back"
              render={({ field }) => (
                <FormItem className="absolute top-0 opacity-0 cursor-pointer">
                  <FormControl className="flex items-center">
                    <Input
                      type="file"
                      placeholder=""
                      {...field}
                      accept=".jpeg,image/jpeg,image/png,image/webp,image/avif,image/heic"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-gray-700">
          <Label>Passport (Front)</Label>
          <div className="relative cursor-pointer">
            <Button variant="ghost" className="font-extrabold underline">
              Upload
            </Button>

            <FormField
              control={form.control}
              name="passport_front"
              render={({ field }) => (
                <FormItem className="absolute top-0 opacity-0 cursor-pointer">
                  <FormControl className="flex items-center">
                    <Input
                      type="file"
                      placeholder=""
                      {...field}
                      accept=".jpeg,image/jpeg,image/png,image/webp,image/avif,image/heic"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-gray-700">
          <Label>Passport (Back)</Label>
          <div className="relative cursor-pointer">
            <Button variant="ghost" className="font-extrabold underline">
              Upload
            </Button>

            <FormField
              control={form.control}
              name="passport_back"
              render={({ field }) => (
                <FormItem className="absolute top-0 opacity-0 cursor-pointer">
                  <FormControl className="flex items-center">
                    <Input
                      type="file"
                      placeholder=""
                      {...field}
                      accept=".jpeg,image/jpeg,image/png,image/webp,image/avif,image/heic"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            type="button"
            onClick={() => {
              setCurrentStep(3);
            }}
          >
            Previous
          </Button>

          <Button variant="default" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FileUpload;
