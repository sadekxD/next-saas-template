import FeatureCard from "../cards/feature-card";
import SectionTop from "../section-top";

const data = [
  {
    title: "Task Management",
    description:
      "Effortlessly manage tasks, set deadlines, and collaborate in real-time with team members.",
  },
  {
    title: "Document Collaboration",
    description:
      "Securely share, edit, and collaborate on documents with version control and direct feedback.",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Gain productivity insights, track progress with visual data, and optimize workflows effectively.",
  },
];

export default function Features() {
  return (
    <section className="relative pt-12 md:pt-16">
      <div className="absolute -translate-x-2/4 -top-2/4 min-w-[50vw] min-h-[100vh] bg-gradient-radial blur-[300px] -z-10" />
      <div className="container">
        <SectionTop
          badge="Features and Benefits"
          heading="Why Choose OptiFlow?"
          subheading="Discover the Benefits of Our Powerful Software"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 md:py-16">
          {data.map((item, _) => (
            <FeatureCard key={_} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
