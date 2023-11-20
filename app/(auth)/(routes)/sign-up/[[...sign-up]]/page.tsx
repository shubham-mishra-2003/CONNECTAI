import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex bg-[#111827] h-full justify-center items-center h-full">
      <SignUp />
    </div>
  );
}
