import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Film, Music, Paintbrush, Users, Globe } from "lucide-react";

const Cultural = () => {
  const initiatives = [
    {
      title: "Short Films & Street Drama",
      description: "Produce short films, street drama, Jari Sari, Gomvira, Pala song on issues such as science fiction, social norms/values, health care, education, environment, gender empowerment, and climate change.",
      icon: Film,
    },
    {
      title: "Arts & Crafts",
      description: "Hands-on support for arts and crafts programs promoting creativity and preserving traditional artistic heritage of Bangladesh.",
      icon: Paintbrush,
    },
    {
      title: "Cultural E-Content",
      description: "Develop e-contents on cultural issues and publicize through online and offline platforms to uplift existing cultural status of the society.",
      icon: Palette,
    },
    {
      title: "Traditional Cultural Groups",
      description: "Form local traditional cultural groups and anthropological/indigenous group formations for livelihood improvement and cultural cohesion.",
      icon: Users,
    },
    {
      title: "Learning & Exchange Visits",
      description: "Organize learning and exchange visits to promote cultural understanding and preserve traditions across communities.",
      icon: Globe,
    },
    {
      title: "Music & Performance",
      description: "Supporting traditional and contemporary music performances to preserve Bangladesh's rich cultural heritage.",
      icon: Music,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <Palette className="h-12 w-12 mb-4 text-foundation-gold" />
              <h1 className="text-4xl font-bold mb-4">Cultural Initiatives</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Preserving and promoting cultural heritage while fostering artistic expression,
                creativity, and cultural cohesion across communities in Bangladesh.
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
                      <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-3">
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

export default Cultural;
