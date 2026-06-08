import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import EveryStep from "@/components/EveryStep";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Edit each section in src/components/<Name>.tsx */}
        <Hero />
        <About />
        <Approach />
        <Services />
        <EveryStep />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ScrollReveal />
    </>
  );
}
