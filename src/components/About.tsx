import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Globe, Target, Scale } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foundation-navy mb-4">
            About RID Foundation
          </h2>
           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            RID Foundation (Research and Ideas Development) is a non-governmental, non-profit, non-political, voluntary, 
            and charitable organization dedicated to fostering education, health, and compassionate care for the elderly 
            in Bangladesh. We transform research and innovative ideas into real-world solutions that improve lives and 
            strengthen communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-card border-0">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <MapPin className="h-6 w-6 text-foundation-blue" />
                <CardTitle className="text-foundation-navy">Our Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                <strong>Registered Office:</strong><br />
                491, Paschim Nakhalpara<br />
                Tejgoan, Dhaka 1215<br />
                Bangladesh
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <Globe className="h-6 w-6 text-foundation-green" />
                <CardTitle className="text-foundation-navy">Operational Area</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Operating throughout Bangladesh with plans to establish branch offices 
                anywhere in Bangladesh and abroad, as decided by the Foundation's Executive Committee.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-card border-0">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <Target className="h-6 w-6 text-foundation-gold" />
                <CardTitle className="text-foundation-navy">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
             <CardDescription className="text-base leading-relaxed">
                Our mission is to promote quality education, social, cultural, agricultural, environmental, 
                accessible healthcare, and respectful care for the citizens by exploring root causes and 
                driving evidence-based solutions. We act with empathy, integrity, and mutual respect.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <Scale className="h-6 w-6 text-foundation-blue" />
                <CardTitle className="text-foundation-navy">Our Values</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
             <CardDescription className="text-base leading-relaxed">
                Social justice & honesty, exploring root causes, empathy and integrity, 
                mutual respect, and a scientific outlook guide everything we do.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-card rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foundation-navy mb-4">
            Foundation Name
          </h3>
          <div className="space-y-3">
            <p className="text-lg">
              <strong>English:</strong> RID Foundation (Research and Ideas Development)
            </p>
            <p className="text-lg">
              <strong>Bangla:</strong> রিড ফাউন্ডেশন
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;