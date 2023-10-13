import TestimonialCard from "../cards/testimonial-card";
import { Icons } from "../icons";
import SectionTop from "../section-top";
import Slider from "../slider";

export default function Testimonial() {
  return (
    <section className="relative pt-16">
      <div className="absolute right-0 -top-2/4 min-w-[50vw] min-h-[100vh] bg-gradient-radial blur-[300px] -z-10" />
      <div className="container">
        <SectionTop
          badge="Testimonials"
          heading="What Our Customers Are Saying"
          subheading="See Why WorkFlowPro Is Trusted by Businesses Worldwide"
        />
        <div className="pt-16 pb-6 flex items-center flex-wrap gap-6">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
      {/* <Slider>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Slider> */}
      {/* <div className="container">
        <div className="flex justify-end gap-6">
          <button className="p-2.5 rounded-full bg-white border">
            <Icons.arrowLeft />
          </button>
          <button className="p-2.5 rounded-full bg-white border">
            <Icons.arrowRight />
          </button>
        </div>
      </div> */}
    </section>
  );
}
