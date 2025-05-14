"use client";
// zod modules
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// react modules
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// shadcn modules
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// import { authApi } from "@/api/auth";
import { useAuth } from "@/AuthContext";
import { Separator } from "@/components/ui/separator";

// zod schema
const formSchema = z
  .object({
    first_name: z.string().min(1, { message: "First name is required." }),
    last_name: z.string().min(1, { message: "Last name is required." }),
    username: z.string().min(1, { message: "Username is required." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z.string().min(1, { message: "Please confirm your password." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function RegisterForm() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await register(values);
      navigate("/");
    } catch (error: any) {
      console.error("Register failed:", error?.message);
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 mb-10">
        {/* <div className="mb-4">
          <p className="text-[30px] font-bold text-center">
            Af<span style={{ color: "#FCA311" }}>fit</span>nity
          </p>
        </div> */}

        {/* form */}
        <Card className=" w-full mx-auto my-36 p-5 rounded-lg shadow-xl shadow-ash/20 mb-36 md:max-w-97">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl mb-1 font-aeonik font-semibold">
              <h1>
                Let's Get You <span className="text-brand">Started</span>
              </h1>
            </CardTitle>
            <CardDescription className="font-manrope text-gray-500 text-[12px]">
              Create your first account for your first workout and diet routine
            </CardDescription>
          </CardHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="First Name"
                          className="border focus-visible:ring-3 focus-visible:ring-[#FCA311]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Last Name"
                          className="border focus-visible:ring-3 focus-visible:ring-[#FCA311]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="yourUsername123"
                        className="border focus-visible:ring-3 focus-visible:ring-[#FCA311]"
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="example@domain.com"
                        className="border focus-visible:ring-3 focus-visible:ring-[#FCA311]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        className="border focus-visible:ring-3 focus-visible:ring-[#FCA311]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Repeat password"
                        className="border focus-visible:ring-3 focus-visible:ring-[#FCA311]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* register button  */}
              <Button type="submit" className="bg-[#FCA311] text-white hover:bg-[#F3C623] w-full">
                Create account
              </Button>
            </form>
          </Form>

          <Separator></Separator>

          {/* go to login page */}
          <CardFooter className="flex justify-center">
            <p className="font-dmsans text-xs leading-none text-center">
              Already have an account?{" "}
              <Link to="/login-v2" className="text-brand hover:underline font-medium">
                Login now.
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
