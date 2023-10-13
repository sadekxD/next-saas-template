export default function Hero() {
  return (
    <section className="py-16 md:py-[148px] bg-[url('/dot-background.png')] bg-cover bg-center">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-5xl leading-relaxed md:text-[64px] md:leading-[92px] max-w-[768px] font-bold text-primary tracking-[-1.28px]">
          Make Your Life Easier with OptiFlow
        </h1>

        <p className="text-base text-ghost max-w-[500px] mt-4 md:mt-6 tracking-[-0.28px] leading-7 font-medium">
          No matter what project you're working on, we've got you covered with
          the best wireframe kits for any platform.
        </p>

        <button className="rounded-xl px-4 py-3 shadow text-white bg-primary mt-4 md:mt-8">
          Try for Free
        </button>
      </div>
    </section>
  );
}
