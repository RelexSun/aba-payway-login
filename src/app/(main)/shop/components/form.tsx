"use client";

import { PostShopInput, PostShopSchema } from "@/actions/shop/post/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { DropzoneOptions } from "react-dropzone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/ui/extension/file-upload";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { postShop } from "@/actions/shop/post";
import { toast } from "sonner";
import { useActiveUser } from "@/zustand/user-store";
import Image from "next/image";
import { uploadFile } from "@/actions/shop/post/upload";

export default function ShopForm() {
  const { user } = useActiveUser();
  const [pending, startTransition] = useTransition();
  const form = useForm<PostShopInput>({
    resolver: zodResolver(PostShopSchema),
  });
  const [file, setFile] = useState<File | null>(null);

  const onSubmit: SubmitHandler<PostShopInput> = (input) => {
    if (!user?.id) {
      toast.error("User ID is missing. Please log in.", {
        position: "top-right",
        style: {
          fontSize: "11pt",
        },
      });
      return;
    }

    startTransition(async () => {
      let fileUrl = null;
      if (file) {
        const upload = await uploadFile(file);
        if (!upload || !upload.secure_url) {
          toast.error("File upload failed", {
            position: "top-right",
            style: {
              fontSize: "11pt",
            },
          });
          return;
        }
        fileUrl = upload.secure_url;
      }
      const req = { ...input, user_id: user.id, img_url: fileUrl };
      const { error, data } = await postShop(req);
      if (!data) {
        toast.error(error?.message, {
          position: "top-right",
          style: {
            fontSize: "11pt",
          },
        });
      } else {
        toast.success("Post success!", {
          position: "top-right",
          style: {
            fontSize: "11pt",
          },
        });
        window.location.reload();
      }
    });
  };

  const dropzone = {
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    multiple: false, // Only allow single file
    maxFiles: 1, // Limit to one file
    maxSize: 1 * 1024 * 1024, // Max size 1 MB
  } satisfies DropzoneOptions;

  return (
    <>
      <div className="">
        <h3 className="text-[26px] font-bold mt-3">Create Shop</h3>
        <div className="flex flex-col md:flex-row gap-10 items-center mt-5">
          <div className="w-full md:w-1/2">
            <FileUploader
              value={file ? [file] : []}
              onValueChange={(files) =>
                files ? setFile(files[0]) : setFile(null)
              }
              dropzoneOptions={dropzone}
            >
              <FileInput>
                <div className="flex items-center justify-center h-32 w-full border bg-background rounded-md">
                  <p className="text-gray-400">Drop a file here</p>
                </div>
              </FileInput>
              <FileUploaderContent className="flex items-center flex-row gap-2">
                {file && (
                  <FileUploaderItem
                    index={1}
                    className="size-20 p-0 rounded-md overflow-hidden"
                    aria-roledescription={`file containing ${file.name}`}
                  >
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      height={80}
                      width={80}
                      className="size-20 p-0"
                    />
                  </FileUploaderItem>
                )}
              </FileUploaderContent>
            </FileUploader>
          </div>
          <div className="w-full md:w-1/2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3"
              >
                <div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-400 text-[12px]">
                          Shop Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-400 text-[12px]">
                          Location
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" disabled={pending}>
                  {pending && <Loader2 className="size-4 animate-spin mx-2" />}
                  Create Shop
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
