import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { ROUTES } from "@/common/constants/routes";
import { Loader2 } from "lucide-react";
import { RegisterInput, RegisterSchema } from "@/actions/register/schema";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconCalendar } from "@tabler/icons-react";
import { register } from "@/actions/register";
import { GENDER } from "@/common/enum/gender-enum";

export default function RegisterForm() {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterInput> = (input) => {
    startTransition(async () => {
      const { error, data } = await register(input);

      if (!data) {
        toast.error(error?.message, {
          position: "top-right",
          style: {
            fontSize: "11pt",
          },
        });
      } else {
        toast.success(`Registered!`, {
          position: "top-right",
          style: {
            fontSize: "11pt",
          },
        });
        router.push(ROUTES.LOGIN);
      }
    });
  };

  return (
    <div className="">
      <h1 className="font-[600] text-[30px] text-center mb-4">Register</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex gap-10">
            <div>
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px]">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        type="username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px]">First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        type="username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <IconCalendar className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px]">Age</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Age"
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px]">Gender</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value={GENDER.MALE}>
                            {GENDER.MALE}
                          </SelectItem>
                          <SelectItem value={GENDER.FEMALE}>
                            {GENDER.FEMALE}
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button type="submit" className="mt-2" disabled={pending}>
              {pending && <Loader2 className="size-4 animate-spin mx-2" />}
              Create an account
            </Button>
            <Link
              className="text-[12px] mt-3 font-semibold text-cyan-500"
              href={ROUTES.LOGIN}
            >
              Already have an account
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
