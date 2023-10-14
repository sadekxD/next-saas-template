import PricingCard from "../cards/pricing-card";
import SectionTop from "../section-top";

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

export default function Pricing() {
  return (
    <section className="pt-16">
      <div className="container">
        <SectionTop
          badge="Pricing Plans"
          heading="Flexible Pricing to Fit Your Needs"
          subheading="Choose the Plan That Suits You Best"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 md:py-16">
          {data.map((item, _) => (
            <PricingCard key={_} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
