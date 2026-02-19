import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AreasOfWork from "@/components/AreasOfWork";
import ExecutiveCommittee from "@/components/ExecutiveCommittee";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <AreasOfWork />
        <ExecutiveCommittee />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
