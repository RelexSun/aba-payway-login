"use client";

import { LoginInput, LoginSchema } from "@/actions/login/login-schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const Profile = () => {
  const form = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });
  return (
    <Form {...form}>
      <form action="" className="space-y-10">
        <div>
          <FormField
            control={form.control}
            name="email" // change to username
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px]">Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" type="username" {...field} />
                </FormControl>
                <FormDescription>You can change your username.</FormDescription>
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
                <FormLabel className="text-[14px]">Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormDescription>You can change your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button>Update Profile</Button>
      </form>
    </Form>
  );
};

export default Profile;
