import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Palette, 
  GraduationCap, 
  Heart, 
  Wheat, 
  TreePine,
  ArrowRight 
} from "lucide-react";

const AreasOfWork = () => {
  const areas = [
    {
      title: "Social Development",
      description: "Empowering communities through poverty reduction, enterprise development, and social welfare programs.",
      icon: Users,
      href: "/area-of-work/social",
      color: "text-foundation-blue"
    },
    {
      title: "Cultural Initiatives",
      description: "Preserving and promoting cultural heritage while fostering artistic expression and creativity.",
      icon: Palette,
      href: "/area-of-work/cultural",
      color: "text-foundation-green"
    },
    {
      title: "Educational Excellence",
      description: "Advancing STEM and HEAL-oriented education systems with international standards and innovative curricula.",
      icon: GraduationCap,
      href: "/area-of-work/educational",
      color: "text-foundation-gold"
    },
    {
      title: "Health Care",
      description: "Establishing model clinics, hospitals, and specialized care centers for comprehensive healthcare services.",
      icon: Heart,
      href: "/area-of-work/healthcare",
      color: "text-destructive"
    },
    {
      title: "Agricultural Innovation",
      description: "Promoting organic farming, cooperative systems, and tele-advice programs for sustainable agriculture.",
      icon: Wheat,
      href: "/area-of-work/agricultural",
      color: "text-foundation-green"
    },
    {
      title: "Environment & Natural Resources",
      description: "Climate adaptation research and sustainable natural resource management for environmental protection.",
      icon: TreePine,
      href: "/area-of-work/environment",
      color: "text-secondary"
    }
  ];

  return (
    <section id="areas-of-work" className="py-16 bg-gradient-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foundation-navy mb-4">
            Our Areas of Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We focus on six key areas to create comprehensive impact across Bangladesh, 
            addressing the most critical needs of our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <IconComponent className={`h-8 w-8 text-white`} />
                  </div>
                  <CardTitle className="text-xl text-foundation-navy group-hover:text-primary transition-colors">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="group/btn text-primary hover:text-primary-foreground hover:bg-primary"
                    asChild
                  >
                    <Link to={area.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AreasOfWork;