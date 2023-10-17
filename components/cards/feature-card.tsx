interface CardProps {
  icon: any;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: CardProps) {
  return (
    <div className="flex-1 border rounded-3xl md:rounded-[32px] bg-white p-6 md:p-12 flex flex-col gap-2 md:gap-4">
      {icon}
      <h3 className="text-lg md:text-2xl font-semibold whitespace-nowrap">
        {title}
      </h3>
      <p className="text-[15px] md:text-base leading-6 text-ghost">
        {description}
      </p>
    </div>
  );
}
