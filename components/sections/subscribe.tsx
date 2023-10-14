import Image from "next/image";
import SubscribeForm from "../form/subscribe-form";

export default function Subscribe() {
  return (
    <section className="py-24">
      <div className="container flex flex-col items-center gap-5 text-center">
        <h1 className="text-2xl md:text-[32px] text-primary font-semibold">
          Subscribe to our weekly newsletter
        </h1>
        <SubscribeForm />
        <div>
          <div className="flex items-center justify-center ">
            <Image
              src="/avatar-1.png"
              alt="avatar"
              width={32}
              height={32}
              className=" border border-white -mr-3 rounded-full"
            />
            <Image
              src="/avatar-2.png"
              alt="avatar"
              width={32}
              height={32}
              className=" border border-white -mr-3 rounded-full"
            />
            <Image
              src="/avatar-3.png"
              alt="avatar"
              width={32}
              height={32}
              className=" border border-white -mr-3 rounded-full"
            />
            <Image
              src="/avatar-1.png"
              alt="avatar"
              width={32}
              height={32}
              className=" border border-white -mr-3 rounded-full "
            />
          </div>
          <p className="text-sm text-ghost mt-3">Over 1k happy subscribers</p>
        </div>
      </div>
    </section>
  );
}
