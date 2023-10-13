import { Icons } from "../icons";
import cn from "classnames";

interface PricingProps {
  type: string;
  price: string;
  description: string;
  badge: string;
  includes: string[];
}

export default function PricingCard({
  type,
  price,
  description,
  badge,
  includes,
}: PricingProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-3xl border border-[#2f2b431a] flex flex-col justify-between bg-white shadow",
        type === "Pro" ? "bg-gradient-radial" : ""
      )}
    >
      <div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="font-medium text-primary">{type}</span>
            {badge && (
              <span
                className={cn(
                  "text-sm leading-[20px] px-2 py-1 rounded-full text-[#2F9461] bg-[#D9F9E6]",
                  type === "Pro" ? "!bg-white text-black" : ""
                )}
              >
                {badge}
              </span>
            )}
          </div>
          <h2 className="text-5xl font-semibold text-primary">
            ${price}
            <span className="text-base font-medium text-ghost">/month</span>
          </h2>
          <p className="text-ghost">{description}</p>
        </div>
        <div className="h-[1px] bg-[#2f2b431a] my-6" />
        <div>
          <ul className="flex flex-col gap-4 font-medium">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Icons.checkline width="24" height="24" /> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="h-[1px] bg-[#2f2b431a] my-6 " />
        <button
          className={cn(
            "w-full border border-[#2f2b431a] py-3 px-4 bg-white rounded-xl font-medium transition-all duration-200 hover:!bg-gray-800 hover:text-white",
            type === "Pro"
              ? "border-none !bg-primary text-white hover:!bg-gray-800"
              : ""
          )}
        >
          Get started
        </button>
      </div>
    </div>
  );
}
