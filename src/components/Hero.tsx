import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foundation-blue/90 via-foundation-blue/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl text-white">
          <div className="mb-6">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              RID Foundation
            </h1>
            <h2 className="text-xl mb-2 font-medium">
              Research and Ideas Development
            </h2>
            <p className="text-lg opacity-90 mb-2">
              রিড ফাউন্ডেশন
            </p>
          </div>
          
          <p className="text-xl leading-relaxed mb-8 opacity-90">
            Dedicated to advancing education, health, research, innovation, and social development 
            across Bangladesh and beyond. Building a brighter future through scientific thinking 
            and community empowerment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/about">
                Learn About Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="donate" size="lg">
              Support Our Mission
              <Heart className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-8 w-8 mx-auto mb-2 text-foundation-gold" />
              <div className="text-2xl font-bold">7</div>
              <div className="text-sm opacity-75">Executive Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-foundation-gold" />
              <div className="text-2xl font-bold">6</div>
              <div className="text-sm opacity-75">Work Areas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Heart className="h-8 w-8 mx-auto mb-2 text-foundation-gold" />
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-75">Objectives</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;