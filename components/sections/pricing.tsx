"use client";

import { useState } from "react";
import PricingCard from "../cards/pricing-card";
import SectionTop from "../section-top";
import cn from "classnames";

const data = [
  {
    type: "Basic",
    price: "19",
    description: "Lorem ipsum dolor sit amet consectetur",
    badge: "",
    includes: ["Unlimited Projects", "Basic Support", "10 GB Storage"],
  },
  {
    type: "Pro",
    price: "39",
    description: "Lorem ipsum dolor sit amet consectetur",
    badge: "Most popular",
    includes: [
      "Advanced Reporting",
      "Priority Support",
      "25 GB Storage",
      "Commercial license",
    ],
  },
  {
    type: "Enterprise",
    price: "79",
    description: "Lorem ipsum dolor sit amet consectetur",
    badge: "",
    includes: [
      "Custom Workflows",
      "24/7 Support",
      "Unlimited Storage",
      "Commercial license",
    ],
  },
];

type BillingInterval = "year" | "month";

export default function Pricing() {
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");
  return (
    <section className="pt-16">
      <div className="container">
        <SectionTop
          badge="Pricing Plans"
          heading="Flexible Pricing to Fit Your Needs"
          subheading="Choose the Plan That Suits You Best"
        />
        <div className="w-fit flex items-center gap-4 mx-auto p-1.5 rounded-xl bg-[#2f2b430d] mt-3">
          <button
            onClick={() => setBillingInterval("month")}
            type="button"
            className={cn(
              "w-[90px] text-sm rounded-[10px] py-2 px-2.5 font-semibold text-ghost",
              billingInterval === "month" ? "text-white bg-primary" : ""
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingInterval("year")}
            type="button"
            className={cn(
              "w-[90px] text-sm  rounded-[10px] py-2 px-2.5 font-semibold text-ghost",
              billingInterval === "year" ? "text-white bg-primary" : ""
            )}
          >
            Yearly
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 md:py-16">
          {data.map((item, _) => (
            <PricingCard key={_} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
