"use client";
// zod modules
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// react modules
import { useForm } from "react-hook-form";
import { useState } from "react";

// axios modules
import axios from "axios";

// shadcn form component
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// zod schema
const formSchema = z.object({
  testText: z.string().min(1, "Fill in message."),
});

// axios api
const TEST_API = axios.create({
  baseURL: "http://localhost:8000",
  //   withCredentials: true,
});

// TEST_API.post("/users/test-post/", {
//   testText: "test message",
// })
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// use api to consume
const useApi = (url: string = "/users/test-post/", data: { [key: string]: any }) => {
  return TEST_API.post(url, data)
    .then((res) => {
      console.log(res.data);
      console.log("Wow sumakses ang connection sa frontend at backend!");
    })
    .catch((err) => {
      console.log("Sorry, ikaw ay hindi sumakses. Padayon sa step by the step na pag debug.");
      console.error(err.message);
    });
};

// test form shadcn component
function TestForm() {
  // define server error state
  const [serverError, setServerError] = useState<string | null>(null);

  // define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      testText: "",
    },
  });

  // on submit async function
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // do something
    try {
      setServerError(null);
      await useApi("/users/test-post/", values);
    } catch (error: any) {
      setServerError("Something went wrong. Please try again.");
      console.error(error);
    }
    // prints server err
    console.log("Server error:", serverError);
  }

  // render test form
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* message field */}
          <FormField
            control={form.control}
            name="testText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Test Form</FormLabel>
                <FormControl>
                  <Input placeholder="Message" {...field}></Input>
                </FormControl>
                <FormDescription>Enter your message.</FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />

          {/* submit message button */}
          <Button type="submit" className="w-full">
            Submit Message
          </Button>
        </form>
      </Form>
    </>
  );
}

// test axios screen function
export default function TestAxios() {
  return (
    <>
      {/* heading and subheading */}
      <div className="flex flex-col items-center space-y-2 my-6">
        {/* heading */}
        <p className="text-4xl font-bold leading-none">Test Axios</p>
      </div>

      {/* render test form */}
      <TestForm></TestForm>
    </>
  );
}
