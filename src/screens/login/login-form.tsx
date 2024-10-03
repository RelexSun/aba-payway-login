"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginInput, LoginSchema } from "@/actions/login/login-schema";
import { useTransition } from "react";
import { login } from "@/actions/login";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/common/constants/routes";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const form = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginInput> = (input) => {
    startTransition(async () => {
      const { error, data } = await login(input);

      if (!data) {
        toast.error(error?.message, {
          position: "top-right",
          style: {
            fontSize: "11pt",
          },
        });
      } else {
        toast.success(`Welcome back!`, {
          position: "top-right",
          style: {
            fontSize: "11pt",
          },
        });

        router.push(ROUTES.HOME);
      }
    });
  };

  return (
    <div className="w-[280px]">
      <h3 className="text-[26px] font-bold mt-3">Sign In</h3>
      <div className="h-[30px] mb-3"></div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <FormField
              control={form.control}
              name="email"
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
            <Button type="submit" className="mt-2" disabled={pending}>
              {pending && <Loader2 className="size-4 animate-spin mx-2" />} Sign
              In
            </Button>
            <Link
              className="text-[12px] mt-3 font-semibold text-cyan-500"
              href={ROUTES.REGISTER}
            >
              Create an account
            </Link>
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
