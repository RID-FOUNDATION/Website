import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Hospital, Brain, Baby, Stethoscope, Phone } from "lucide-react";

const Healthcare = () => {
  const initiatives = [
    {
      title: "Model Clinics & Hospitals",
      description: "Establish model clinics and hospitals to provide standard healthcare services. Foundation also establishes centers for children, mothers, and the geriatric population.",
      icon: Hospital,
    },
    {
      title: "Health Research",
      description: "Research on several health issues including non-communicative diseases management, eye care, reproductive health and lactating mother counselling.",
      icon: Stethoscope,
    },
    {
      title: "Mental & Adolescent Health",
      description: "Mental health support, adolescent health care and education on hygienic preventive activities, caregiving, and geriatric care programs.",
      icon: Brain,
    },
    {
      title: "Maternal & Child Health",
      description: "Specialized centers dedicated to maternal and child health, preventive care, and community well-being with awareness and orientation programs.",
      icon: Baby,
    },
    {
      title: "Nutrition & Training",
      description: "Training on the importance of diversified and healthy diets, hands-on support, learning visits, and group formation for community health.",
      icon: Heart,
    },
    {
      title: "Telemedicine",
      description: "Leveraging technology to provide remote healthcare consultation and services to communities across Bangladesh.",
      icon: Phone,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <Heart className="h-12 w-12 mb-4 text-foundation-gold" />
              <h1 className="text-4xl font-bold mb-4">Health Care</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Ensuring access to standard healthcare services for all, especially for vulnerable groups
                such as women, children, and the elderly. Our vision extends beyond treatment—it's about
                awareness, compassion, and empowerment.
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
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-3">
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

export default Healthcare;
