import { GENDER } from "@/common/enum/gender-enum";
import { z } from "zod";

export const RegisterSchema = z
  .object({
    email: z
      .string({ required_error: "Please provide an email" })
      .email({ message: "Please provide a valid email" }),
    password: z
      .string({ required_error: "Please provide a password" })
      .min(6, { message: "Password must be at least 6 characters long" })
      .max(64, { message: "Password must be at most 64 characters long" }),
    confirmPassword: z
      .string({ required_error: "Please confirm your password" })
      .min(6, {
        message: "Confirm password must be at least 6 characters long",
      })
      .max(64, {
        message: "Confirm password must be at most 64 characters long",
      }),
    lastname: z.string({ required_error: "Please provide your last name" }),
    firstname: z.string({ required_error: "Please provide your first name" }),
    username: z.string({ required_error: "Please provide a username" }),
    age: z
      .number({ required_error: "Please provide your age" })
      .min(0, { message: "Age must be a positive number" }),
    gender: z.enum([GENDER.FEMALE, GENDER.MALE], {
      required_error: "Please select a gender",
    }),
    phone_number: z
      .string({ required_error: "Please provide a phone number" })
      .min(10, { message: "Phone number must be at least 10 digits" })
      .regex(/^[0-9]{10,15}$/, "Invalid phone number"),
    dob: z.date({ required_error: "Please provide a Date of Birth" }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    }
  );

export const RegisterResponseSchema = z.object({
  email: z.string(),
  username: z.string(),
  lastname: z.string(),
  firstname: z.string(),
  password: z.string(),
  age: z.number(),
  gender: z.enum([GENDER.FEMALE, GENDER.MALE]),
  dob: z.string(),
  phone_number: z.string(),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type RegisterResponse = z.infer<typeof RegisterResponseSchema>;
