import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Globe, Target, Eye, Heart, Scale, Lightbulb, Users } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();

  // Support deep-linking to sections on this page (e.g. /about#core-values)
  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (!hash) return;

    // Delay slightly so the DOM is ready before scrolling
    const t = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);

    return () => window.clearTimeout(t);
  }, [location.hash]);

  const coreValues = [
    "Social justice & honesty",
    "Explore and address the root cause",
    "Empathy and integrity",
    "Mutual respect",
    "Scientific outlook/minded",
  ];

  const strategicObjectives = [
    "Innovation and creativity",
    "Research and development (Social/action research/Adaptation trial)",
    "Stakeholder engagement",
    "Organization and leadership",
    "Marginal Farmer Bargaining and negotiation capacity",
    "Institution development",
    "Digitalization and use of technology in all thematic areas",
    "Youth involvement and value transfer",
    "Social business",
  ];

  const crossCuttingIssues = [
    "Good Governance",
    "Gender empowerment",
    "Safeguard",
    "Digital outreach (Technology)",
    "Online access",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-primary text-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">About RID Foundation</h1>
              <p className="text-lg opacity-90">Research and Ideas Development | রিড ফাউন্ডেশন</p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                RID Foundation (Research and Ideas Development) is a non-governmental, non-profit, non-political, voluntary, and charitable organization dedicated to fostering education, health, and compassionate care for the elderly in Bangladesh. Registered under the Societies Registration Act, XXI of 1860, the Foundation was established with a vision to transform research and innovative ideas into real-world solutions that improve lives and strengthen communities.
              </p>
              <p>
                At the heart of our mission lies a deep belief that education and health are the cornerstones of human dignity and sustainable development. We work to promote STEM (Science, Technology, Engineering & Mathematics) and HEAL (Health, Education, Administration & Literacy) education across all levels—enhancing quality learning, encouraging scientific thinking, and nurturing creativity among young minds.
              </p>
              <p>
                In the field of health, the Foundation is committed to ensuring access to standard healthcare services for all, especially for vulnerable groups such as women, children, and the elderly. We plan to establish model clinics, hospitals, and specialized centers dedicated to maternal and child health, preventive care, and community well-being.
              </p>
              <p>
                Recognizing the growing need for elderly support, RID Foundation is establishing a long-term care and old age home to provide not just shelter, but dignity, comfort, and companionship for senior citizens.
              </p>
              <p>
                Through our work, we aim to build a society where education enlightens, health empowers, and humanity embraces all ages. The RID Foundation continues to stand as a beacon of hope—driven by innovation, guided by compassion, and committed to creating a better tomorrow for all.
              </p>
            </div>
          </div>
        </section>

        {/* Location & Operations */}
        <section className="py-16 bg-gradient-card">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-foundation-blue" />
                    <CardTitle className="text-foundation-navy">Registered Office</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    491, Paschim Nakhalpara<br />
                    Tejgoan, Dhaka 1215<br />
                    Bangladesh
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-card border-0">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-6 w-6 text-foundation-green" />
                    <CardTitle className="text-foundation-navy">Operational Area</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Operating throughout Bangladesh with plans to establish branch offices anywhere in Bangladesh and abroad, as decided by the Foundation's Executive Committee.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="mission-vision" className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card id="our-vision" className="shadow-card border-0">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-6 w-6 text-foundation-gold" />
                    <CardTitle className="text-foundation-navy">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a compassionate and enlightened society where quality education, accessible healthcare, and sustainable development for every citizen.
                  </p>
                </CardContent>
              </Card>
              <Card id="our-mission" className="shadow-card border-0">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-foundation-blue" />
                    <CardTitle className="text-foundation-navy">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to promote quality education, social, cultural, agricultural, environmental, accessible healthcare, and respectful care for the citizens by exploring root causes and driving evidence-based solutions. We act with empathy, integrity, and mutual respect to create a just and inclusive society.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Core Values */}
            <Card id="core-values" className="shadow-card border-0 mb-8">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-foundation-green" />
                  <CardTitle className="text-foundation-navy">Core Values</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coreValues.map((v, i) => (
                    <li key={i} className="flex items-center space-x-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-foundation-gold rounded-full flex-shrink-0" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Strategic Objectives */}
            <Card id="strategic-objectives-purpose" className="shadow-card border-0 mb-8">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-6 w-6 text-foundation-gold" />
                  <CardTitle className="text-foundation-navy">Strategic Objectives & Purpose</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {strategicObjectives.map((o, i) => (
                    <li key={i} className="flex items-center space-x-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-foundation-blue rounded-full flex-shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Cross-cutting Issues */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Scale className="h-6 w-6 text-secondary" />
                  <CardTitle className="text-foundation-navy">Cross-cutting Issues</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {crossCuttingIssues.map((c, i) => (
                    <li key={i} className="flex items-center space-x-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
