import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Monitor, Trophy, Library, Lightbulb } from "lucide-react";

const Educational = () => {
  const initiatives = [
    {
      title: "Research on Education Systems",
      description: "Research/action research on the existing education system up to the Secondary / Higher Secondary / Higher education level and come up with advocacy issues regarding the content of the curriculum, appropriate system for teaching method and the examination system by proven research findings.",
      icon: Lightbulb,
    },
    {
      title: "Model Institutes",
      description: "Establish model institutes with a unique education system in Bangladesh that adheres to international standards, scientific, universal and unique education systems and policy.",
      icon: GraduationCap,
    },
    {
      title: "Library Development",
      description: "Establish and improve existing private library management. Establish libraries (both physical and digital) to help people develop a scientific and positive outlook.",
      icon: Library,
    },
    {
      title: "Reading & Scientific Outlook",
      description: "Encourage the reading practice of different types of books which create and increase positive thinking. Promote a scientific outlook in all aspects of life.",
      icon: BookOpen,
    },
    {
      title: "Student Competitions & Olympiads",
      description: "Organize different competitive events and Olympiad-like events on Math, Sciences, literature, leadership, social norms, human rights, cultural, environmental, ethical, arts & crafts to encourage students to become ideal assets of the country.",
      icon: Trophy,
    },
    {
      title: "Digital Learning",
      description: "Digital library, e-school, online training, and e-learning content development based on research findings to publicize upgraded education curriculum and appropriate teaching systems.",
      icon: Monitor,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-primary text-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <GraduationCap className="h-12 w-12 mb-4 text-foundation-gold" />
              <h1 className="text-4xl font-bold mb-4">Educational Excellence</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Advancing STEM and HEAL-oriented education systems with international standards,
                innovative curricula, and research-driven approaches to transform learning in Bangladesh.
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

export default Educational;
