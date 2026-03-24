import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { CostCalculator } from "./components/CostCalculator";
import { Partners } from "./components/Partners";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Stats />
      <CostCalculator />
      <Partners />
      <Footer />
    </div>
  );
}
