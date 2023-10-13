import Copyrights from "@/components/copyright";
import Footer from "@/components/footer";
import LoginButton from "@/components/login-button";
import Demo from "@/components/sections/demo";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import Pricing from "@/components/sections/pricing";
import Subscribe from "@/components/sections/subscribe";
import Testimonial from "@/components/sections/testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Demo />
      <Features />
      <Pricing />
      <Testimonial />
      <Subscribe />
      <Footer />
      <Copyrights />
    </main>
  );
}
