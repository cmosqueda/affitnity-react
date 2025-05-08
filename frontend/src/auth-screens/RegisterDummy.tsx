//  register screen
"use client";
// zod modules
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// react modules
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// axios modules
// import axios from "axios";

// shadcn modules
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { authApi } from "@/api/auth";

// zod schema
const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .max(50, { message: "Must not exceed beyond 50 characters." }),
  first_name: z.string().min(1, { message: "First name is required." }),
  last_name: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
  // confirm_password: z.string().min(1, { message: "Must confirm password." }),
});

// login form component
function RegisterForm() {
  // define navigate hook
  const navigate = useNavigate();

  // define server error use state hook
  // const [serverError, setServerError] = useState<string | null>(null);

  // define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      // confirm_password: "",
    },
  });

  // async on submmit function
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // do something
    try {
      // setServerError(null);
      await authApi("/users/register/", values);
      console.log("sumakses", values);

      // go to home page
      navigate("/");
    } catch (error: any) {
      // setServerError("Something went wrong. Please try again.");
      console.error("hindi sumakses:", error);
    }
  }

  // aysa, diri ko nag stop, kailangan nako ma apply ang sa register

  // render login form
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* register form structure
          -> first name | last name
          -> username | email
          -> password
          */}

          {/* first name and last name */}
          <div className="flex flex-row space-x-3">
            {/* first name field*/}
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  {/* <FormDescription>Enter your first name.</FormDescription> */}
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />

            {/* last name field*/}
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  {/* <FormDescription>Enter your last name.</FormDescription> */}
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
          </div>

          {/* email and username */}
          <div className="flex flex-row space-x-3">
            {/* username field*/}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  {/* <FormDescription>Enter your username.</FormDescription> */}
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />

            {/* email field*/}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  {/* <FormDescription>Enter your username.</FormDescription> */}
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
          </div>

          {/* password field*/}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                {/* <FormDescription>Enter your password.</FormDescription> */}
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />

          {/* confirm pass field*/}
          {/* ommitted */}

          {/* register button */}
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
        <Separator className="my-4" />

        {/* go to login page */}
        <div>
          <p className="text-sm  leading-none text-center">
            Already have an account?{" "}
            <Link to="/login-v2" className=" font-medium hover:underline">
              Login here.
            </Link>
          </p>
        </div>
      </Form>
    </>
  );
}

// login screen
export default function RegisterDummy() {
  return (
    <>
      {/* heading and subheading */}
      <div className="flex flex-col items-center space-y-2 my-6">
        {/* logo */}

        {/* heading */}
        <p className="text-4xl font-bold leading-none">Affitnity</p>

        {/* subheading */}
        <p className="text-sm">Your fitness companion.</p>
      </div>

      {/* register form */}
      <RegisterForm></RegisterForm>
    </>
  );
}
