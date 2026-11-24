import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Features from "@/components/features";
import Categories from "@/components/categories";
import HowItWorks from "@/components/how-it-works";
import ComingSoon from "@/components/coming-soon";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Categories />
        <HowItWorks />
        <About />
        <ComingSoon />
      </main>
      <Footer />
    </>
  );
}
