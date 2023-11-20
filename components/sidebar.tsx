"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  ImageIcon,
  MessageCircle,
  VideoIcon,
  Music2Icon,
  Code2,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-blue-500",
  },
  {
    label: "Chat with AI",
    icon: MessageCircle,
    href: "/conversation",
    color: "text-pink-700",
  },
  {
    label: "Generate code",
    icon: Code2,
    href: "/code",
    color: "text-emerald-500",
  },
  {
    label: "Generate Images",
    icon: ImageIcon,
    href: "/image",
    color: "text-orange-700",
  },
  {
    label: "Generate videos",
    icon: VideoIcon,
    href: "/video",
    color: "text-violet-500",
  },
  {
    label: "Generate music",
    icon: Music2Icon,
    href: "/music",
    color: "text-green-700",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="flex items-center px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className="flex w-[100px] items-center pl-3 mb-14"
        >
          <div className="relative w-[90px] h-[90px]">
            <Image
              className="logo"
              style={{
                borderRadius: "50%",
                boxShadow: "0px 0px 30px #00aff0",
              }}
              alt="Logo"
              fill
              src="/logo.png"
            />
          </div>
        </Link>
        <h1 className="mt-[-60px] font-sans text-[23px] absolute right-2 font-bold">
          Connect<span className="ml-[5px] text-blue-500">AI</span>
        </h1>
      </div>
      <div className="space-y-1">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={`text-sm group flex p-3 w-full font-medium cursor-pointer hover:bg-white/20 rounded-lg transition ${
              pathname === route.href ? "text-white bg-blue-500/30" : "text-zinc-400"
            }`}
          >
            <div className="flex items-center px-[50px] w-full">
              <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
              {route.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
