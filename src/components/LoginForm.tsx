"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { toast } from "./ui/use-toast";

const formSchema = z.object({
  emailAddress: z.string().email().min(2, {
    message: "Invalid email",
  }),
  password: z.string().min(2, {
    message: "Invalid password",
  }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });

  const onSubmit = () => {};

  return (
    <div className="w-[280px]">
      <h3 className="text-[26px] font-bold mt-3">Sign In</h3>
      <div className="h-[30px] mb-3"></div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-400 text-[12px]">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-400 text-[12px]">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <Button type="submit" className="mt-2">
              Sign In
            </Button>
            <span className="text-[12px] mt-3 font-semibold text-cyan-500">
              Forgot password?
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
