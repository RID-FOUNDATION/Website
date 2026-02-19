import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TreePine, CloudRain, Recycle, Radio, Leaf, Mountain } from "lucide-react";

const Environment = () => {
  const initiatives = [
    {
      title: "Climate Change Adaptation",
      description: "Swamp tree plantation for village protection from waves, shelter for fish and birds for conserved biodiversity, natural feed assurance, and increasing fish habitat.",
      icon: TreePine,
    },
    {
      title: "Climate-Smart Technology",
      description: "Promotion and demonstration of climate-smart technologies. Research on strategies for adapting to the impacts of climate change through integration of smart solutions.",
      icon: Leaf,
    },
    {
      title: "Early Warning Systems",
      description: "Flash flood, heavy rain, drought, thunderstorm forecast weather information and early warning systems through digitalized messages, community meetings, sirens, and community radio.",
      icon: CloudRain,
    },
    {
      title: "Urban Waste Management",
      description: "Urban wastage management and utilization in the City Corporation, Pourasouva, and Union Parishad for cleaner and sustainable urban environments.",
      icon: Recycle,
    },
    {
      title: "Natural Resource Identification",
      description: "Training on identification and utilization of natural resources, hands-on support, learning visits, and group formations for sustainable resource management.",
      icon: Mountain,
    },
    {
      title: "Community Awareness",
      description: "Awareness and orientation programs on environmental conservation, climate change impacts, and sustainable practices for local communities.",
      icon: Radio,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <TreePine className="h-12 w-12 mb-4 text-foundation-gold" />
              <h1 className="text-4xl font-bold mb-4">Environment & Natural Resources</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Climate adaptation research and sustainable natural resource management for
                environmental protection and community resilience across Bangladesh.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-foundation-navy mb-8 text-center">Our Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiatives.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Card key={i} className="shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg text-foundation-navy">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Environment;
