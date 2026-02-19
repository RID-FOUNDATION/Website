import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Shield, Briefcase, Calculator, User } from "lucide-react";

const ExecutiveCommittee = () => {
  const members = [
    {
      name: "Bilkis Begum",
      designation: "Chairperson",
      icon: Crown,
      color: "bg-foundation-blue text-white"
    },
    {
      name: "Tuton Saha",
      designation: "Vice-chairperson",
      icon: Shield,
      color: "bg-foundation-green text-white"
    },
    {
      name: "AFM Amir Uddin",
      designation: "Executive Director",
      icon: Briefcase,
      color: "bg-foundation-gold text-white"
    },
    {
      name: "Ali Nayeem",
      designation: "Treasurer",
      icon: Calculator,
      color: "bg-accent text-white"
    },
    {
      name: "Tahera Begum Jolly",
      designation: "Member",
      icon: User,
      color: "bg-secondary text-white"
    },
    {
      name: "Mazibul Haque",
      designation: "Member",
      icon: User,
      color: "bg-secondary text-white"
    },
    {
      name: "Al Hossain Chisty",
      designation: "Member",
      icon: User,
      color: "bg-secondary text-white"
    }
  ];

  return (
    <section id="executive-committee" className="py-16 bg-gradient-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foundation-navy mb-4">
            Executive Committee
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated leadership team working together to advance the foundation's mission 
            and drive positive change in communities across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-card">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center ${member.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg text-foundation-navy group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    {member.designation}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 bg-background rounded-lg p-8">
          <h3 className="text-xl font-bold text-foundation-navy mb-4 text-center">
            Committee Structure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-foundation-blue">2</div>
              <div className="text-sm text-muted-foreground">Year Tenure</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-foundation-green">7</div>
              <div className="text-sm text-muted-foreground">Current Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-foundation-gold">15</div>
              <div className="text-sm text-muted-foreground">Maximum Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCommittee;