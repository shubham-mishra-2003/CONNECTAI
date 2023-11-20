import Image from "next/image";

interface EmptyProps {
  label: string;
  src: string;
}

export const Empty = ({ label, src }: EmptyProps) => {
  return (
    <div className="h-full p-70 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image className="rounded-[30px]" alt="Empty" fill src={src} />
      </div>
      <p className="mt-2 text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
