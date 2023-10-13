interface Props {
  badge: string;
  heading: string;
  subheading: string;
}

export default function SectionTop({ badge, heading, subheading }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-sm leading-[20px] p-2 rounded-full text-[#2F9461] bg-[#D9F9E6] w-fit">
        {badge}
      </div>
      <h1 className="text-3xl md:text-5xl md:leading-[58px] font-semibold mt-4 md:mt-8">
        {heading}
      </h1>
      <p className="md:text-lg text-ghost mt-2 md:mt-6">{subheading}</p>
    </div>
  );
}
