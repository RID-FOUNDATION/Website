import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, Store, Sprout, Phone, Users, FileText } from "lucide-react";

const Agricultural = () => {
  const initiatives = [
    {
      title: "Agricultural Research",
      description: "Research on agricultural production and market systems to develop and disseminate new ideas and technologies in the fields of production and marketing.",
      icon: Wheat,
    },
    {
      title: "Market Collection Centres",
      description: "Establish market collection centres where producer groups can easily access products and sell their produce at a fair price, ensuring farmers get fair value.",
      icon: Store,
    },
    {
      title: "Organic & Integrated Farming",
      description: "Promote organic farming, integrated farming, and natural food security as the most effective ways to build poor community resilience and sustainable agriculture.",
      icon: Sprout,
    },
    {
      title: "Tele-Advice for Farmers",
      description: "Establish a 'Tele-advice' program aimed at providing assistance to farmers in addressing their prevailing concerns through digital communication.",
      icon: Phone,
    },
    {
      title: "Farmer Advocacy & Registration",
      description: "Advocacy and liaisons for cards and registration of farmers and fishermen groups. Support for crop insurance through policy review and reform.",
      icon: FileText,
    },
    {
      title: "IGA & Entrepreneurship",
      description: "Create opportunities for Income Generating Activities (IGA) and entrepreneurship development. Common interest group formation for livelihood improvement.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-amber-700 to-yellow-600 text-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <Wheat className="h-12 w-12 mb-4 text-foundation-gold" />
              <h1 className="text-4xl font-bold mb-4">Agricultural Innovation</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Promoting organic farming, cooperative systems, tele-advice programs, and fair market access
                for sustainable agriculture and farmer empowerment across Bangladesh.
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
                      <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-3">
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

export default Agricultural;
