"use client";

import { UpdateInput, UpdateSchema } from "@/actions/update-me/update-schema";
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
import { SubmitHandler, useForm } from "react-hook-form";
import { updateMe } from "@/actions/update-me";
import { startTransition, useState } from "react";
import { toast } from "sonner";

const Profile = () => {
  const form = useForm<UpdateInput>({
    resolver: zodResolver(UpdateSchema),
  });

  const onSubmit: SubmitHandler<UpdateInput> = (input) => {
    startTransition(async () => {
      const { error, ok } = await updateMe(input);
      if (ok) {
        toast.success("Update success", {
          position: "top-right",
          style: {
            fontSize: "11pt",
          },
        });
        window.location.reload();
      } else {
        toast.error(error?.message, {
          position: "top-right",
          style: {
            fontSize: "11pt",
          },
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <div>
          <FormField
            control={form.control}
            name="username"
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
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px]">Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone number" type="tel" {...field} />
                </FormControl>
                <FormDescription>
                  You can change your phone number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Update Profile</Button>
      </form>
    </Form>
  );
};

export default Profile;
