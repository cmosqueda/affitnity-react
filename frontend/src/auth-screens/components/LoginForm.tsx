"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// react hooks
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// shadcn
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

// use auth api
import { useAuth } from "@/AuthContext";

// zod
const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Fill in username" })
    .max(50, { message: "Must not exceed beyond 50 characters" }),
  password: z.string().min(1, { message: "Password is required." }),
});

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  // define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // on submit async function

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await login(values);
      navigate("/");
    } catch (error: any) {
      console.error("Login failed:", error?.message);
    }
  }

  //   Form
  //      form onsubmit
  //          FormField => field
  //              FormItem
  //                  FormLabel
  //                  FormControl
  //                      Input
  //                     FormMessage
  return (
    <>
      {/* Login Form title */}
      <div className="text-center text-2xl w-full mx-auto my-36 p-5 rounded-lg shadow-xl mb-36 md:max-w-96">
        <h1 className="mb-1 font-semibold">
          Welcome, <span className="">User</span>
        </h1>
        <p className="text-gray-500 text-[12px] mb-3">
          Please login your account to proceed
          <br />
          your diet and workout.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* username field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] ">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      {...field}
                      className="text-[13.5px] border focus-visible:ring-2"
                    />
                  </FormControl>
                  <FormMessage className="text-left text-red-600 text-xs"></FormMessage>
                </FormItem>
              )}
            />

            {/* password field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px]">Password</FormLabel>
                  <FormControl className="text-[13.5px] focus-visible:ring-2 ">
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage className="text-left text-red-600 text-xs"></FormMessage>
                </FormItem>
              )}
            />

            {/* login button */}
            <Button type="submit" className="w-full text-white hover:bg-amber-600 md:max-w-96">
              Login
            </Button>
          </form>

          <Separator className="my-4" />

          {/* go to register page */}
          <div className="text-xs">
            <p className="leading-none text-center">
              New to Affitnity?{" "}
              <Link to={"/register"} className="font-medium hover:underline">
                Register here.
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
}
