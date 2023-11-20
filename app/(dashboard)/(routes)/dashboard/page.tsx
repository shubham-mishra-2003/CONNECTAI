"use client";

import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Code2,
  Image,
  MessageCircle,
  Music,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Chat with AI",
    icon: MessageCircle,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/conversation",
  },
  {
    label: "Code by AI",
    icon: Code2,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/code",
  },
  {
    label: "Images by AI",
    icon: Image,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/image",
  },
  {
    label: "Video by AI",
    icon: Video,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/video",
  },
  {
    label: "Music by AI",
    icon: Music,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    href: "/music",
  },
];

const Dashboard = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-0 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Experience the emergence of AI in creations.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black-5/10 flex items-center justify-between hover:shadow-md  transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={`p-2 w-fit rounded-md ${tool.bgColor}`}>
                <tool.icon className={`w-8 h-8 ${tool.color}`} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
