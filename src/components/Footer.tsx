import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Heart } from "lucide-react";
import ridLogo from "@/assets/rid-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foundation-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Foundation Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={ridLogo} alt="RID Foundation Logo" className="h-10 w-10 brightness-0 invert" />
              <div>
                <div className="text-lg font-bold">RID Foundation</div>
                <div className="text-sm opacity-75">রিড ফাউন্ডেশন</div>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              Research and Ideas Development Foundation - Dedicated to advancing education, 
              health, research, innovation, and social development across Bangladesh and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/about" className="block text-sm opacity-75 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/about#mission-vision" className="block text-sm opacity-75 hover:opacity-100 transition-opacity">
                Mission & Vision
              </Link>
              <Link to="/membership" className="block text-sm opacity-75 hover:opacity-100 transition-opacity">
                Membership
              </Link>
              <Link to="/donate" className="block text-sm opacity-75 hover:opacity-100 transition-opacity">
                Donate
              </Link>
            </nav>
          </div>

          {/* Areas of Work */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Areas of Work</h3>
            <nav className="space-y-2">
              <Link to="/area-of-work/social" className="block text-sm opacity-75 hover:opacity-100 transition-opacity">
                Social Development
              </Link>
              <Link to="/area-of-work/educational" className="block text-sm opacity-75 hover:opacity-100 transition-opacity">
                Educational Excellence
              </Link>
              <Link to="/area-of-work/healthcare" className="block text-sm opacity-75 hover:opacity-100 transition-opacity">
                Health Care
              </Link>
              <Link to="/area-of-work/agricultural" className="block text-sm opacity-75 hover:opacity-100 transition-opacity">
                Agricultural Innovation
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-foundation-gold flex-shrink-0" />
                <div className="text-sm opacity-75">
                  491, Paschim Nakhalpara<br />
                  Tejgoan, Dhaka 1215<br />
                  Bangladesh
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-foundation-gold" />
                <span className="text-sm opacity-75">info@ridfoundation.org</span>
              </div>
            </div>
            <Button variant="donate" size="sm" className="w-full">
              <Heart className="mr-2 h-4 w-4" />
              Support Our Mission
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © 2024 RID Foundation. All rights reserved. A non-profit organization dedicated to social development.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;