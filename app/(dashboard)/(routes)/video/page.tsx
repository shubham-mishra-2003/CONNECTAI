"use client";

import { useState } from "react";
import * as z from "zod";
import axios from "axios";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/ui/input";
import { Video } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import toast from "react-hot-toast";

const VideoPage = () => {
  const router = useRouter();
  const [video, setVideo] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);

      const response = await axios.post("api/video", values);

      setVideo(response.data[0]);

      form.reset();
    } catch (error) {
      console.log("[AXIOS_ERROR]", error);
      toast.error("Out of API credits");
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Video by AI"
        description="Get your thought visualised into video"
        icon={Video}
        iconColor="text-yellow-500"
        bgColor="bg-yellow-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) =>
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Type to get video"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading &&
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>}
          {!video &&
            !isLoading &&
            <Empty src="/emptyvideo.jpeg" label="No video generated yet..." />}
          {video &&
            <video
              className="w-full aspect-ratio mt-8 rounded-lg border bg-black"
              controls
            >
              <source src={video} />
            </video>}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
