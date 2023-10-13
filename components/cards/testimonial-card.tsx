import Image from "next/image";
import { Companies } from "../icons";

export default function TestimonialCard() {
  return (
    <div className="flex-1 max-w-[384px] w-full border rounded-3xl bg-white p-6 flex flex-col gap-12">
      <div>
        <Companies.google />
      </div>
      <div>
        <p className="text-lg font-medium leading-[32px] text-primary">
          I have been using them for a year now. Everything is detailed and well
          organized and, of course, damn beautiful.
        </p>
      </div>
      <div>
        <Image src="/avatar-1.png" alt="avatar" width={48} height={48} />
        <div className="mt-4">
          <h5 className="font-medium text-primary">Elon Mask</h5>
          <p className="text-sm text-ghost">Genius, billionaire, playboy</p>
        </div>
      </div>
    </div>
  );
}
