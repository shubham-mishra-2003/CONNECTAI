import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex bg-[#111827] justify-center items-center h-full">
      <SignIn />
    </div>
  );
}
