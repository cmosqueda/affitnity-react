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
      {/* Login Form Title */}
      <div className="text-center text-2xl w-full mx-auto my-36 p-5 rounded-lg shadow-xl shadow-ash/20 mb-36 md:max-w-97">
        <h1 className="mb-1 font-aeonik font-semibold">
          Welcome,<span className="text-brand"> User</span>
        </h1>
        <p className="font-manrope text-gray-500 text-[12px] mb-3">
          Please login your account to proceed
          <br />
          your diet and workout
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* username field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-dmsans text-[14px] text-moss-black">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      {...field}
                      // className={cn(
                      //   "text-[13.5px] font-manrope border focus-visible:ring-2", // Always apply base border width and ring
                      //   fieldState.error
                      //     ? "border-red-700 focus-visible:ring-red-500"
                      //     : "border-moss-black focus-visible:ring-brand"
                      // )}
                      className="text-[13.5px] font-manrope border focus-visible:ring-2 focus-visible:ring-brand"
                    />
                  </FormControl>
                  <FormMessage className="text-left text-red-600 font-dmsans text-xs"></FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-dmsans text-[14px] text-moss-black">Password</FormLabel>
                  <FormControl className="text-[13.5px] font-manrope focus-visible:ring-2 focus-visible:ring-brand">
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage className="text-left text-red-600 font-dmsans text-xs"></FormMessage>
                </FormItem>
              )}
            />

            {/* login button */}
            <Button
              type="submit"
              className="font-dmsans w-full text-snow-white bg-brand hover:bg-amber-600 md:max-w-97"
            >
              Login
            </Button>
          </form>

          <Separator className="my-4" />

          {/* go to register page */}
          <div className="font-dmsans text-xs">
            <p className="leading-none text-center">
              New to Affitnity?{" "}
              <Link to="/register" className="font-medium text-brand hover:underline">
                Register here.
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
}
