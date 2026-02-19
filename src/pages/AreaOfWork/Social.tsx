import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, HandHeart, ShieldCheck, Lightbulb, GraduationCap } from "lucide-react";

const Social = () => {
  const initiatives = [
    {
      title: "Social Business & Entrepreneurship",
      description: "Develop and operate social enterprises, Income Generating Activities (IGAs), and entrepreneurial ventures to raise funds and empower target populations.",
      icon: Briefcase,
    },
    {
      title: "Welfare Fund",
      description: "Develop a welfare fund to undertake humanitarian or charitable programs for the poor and underprivileged, as well as provide financial assistance to foundation members.",
      icon: HandHeart,
    },
    {
      title: "Vocational Training",
      description: "Training on vocational skills, advanced improvement training, and skill development including block batik, dressmaking, motor cycle repairing, house wiring, refrigerator repairing, etc.",
      icon: GraduationCap,
    },
    {
      title: "Rights-Based Approach",
      description: "Advocating for land rights, water-body rights, hat bazar, khal, beel, and ensuring marginalized communities have access to their entitlements.",
      icon: ShieldCheck,
    },
    {
      title: "Community Empowerment",
      description: "Facilitate the empowerment of underprivileged children and youth by offering education, training, and guidance in life skills to integrate them into the skilled workforce.",
      icon: Users,
    },
    {
      title: "Awareness & Orientation",
      description: "Conducting awareness programs, orientation sessions, learning visits, and group formations for community development and elimination of superstitions.",
      icon: Lightbulb,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-primary text-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <Users className="h-12 w-12 mb-4 text-foundation-gold" />
              <h1 className="text-4xl font-bold mb-4">Social Development</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Empowering communities through poverty reduction, enterprise development, welfare programs,
                and initiatives for women and youth empowerment while eliminating superstitions from society.
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
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
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

export default Social;
