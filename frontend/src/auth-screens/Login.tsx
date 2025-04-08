"use client";
// zod modules
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// react modules
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// axios modules
import axios from "axios";

// shadcn modules
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// zod schema
const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Fill in username." })
    .max(50, { message: "Must not exceed beyond 50 characters." }),
  password: z.string().min(1, { message: "Password is required." }),
});

// login form
function LoginForm() {
  // define use navigate hook
  const navigate = useNavigate();
  // define server error use state hook
  const [serverError, setServerError] = useState<string | null>(null);

  // define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // on submmit async function
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // do something
    try {
      setServerError(null);
      console.log("Login success", values);

      // navigate to home
      navigate("/");
    } catch (error: any) {
      setServerError("Something went wrong. Please try again.");
      console.error("Login error:", error);
    }
  }

  // render login form

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* username field */}
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

          {/* password field */}
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

          {/* login button */}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <Separator className="my-4" />

        {/* go to register page */}
        <div>
          <p className="text-sm  leading-none text-center">
            New to Affitnity?{" "}
            <Link to="/register" className=" font-medium hover:underline">
              Register here.
            </Link>
          </p>
        </div>
      </Form>
    </>
  );
}

// login screen
export default function Login() {
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

      {/* login form */}
      <LoginForm></LoginForm>
    </>
  );
}
