import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
  <div className="flex min-h-screen flex-col text-slate-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
