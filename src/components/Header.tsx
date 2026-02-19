import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ridLogo from "@/assets/rid-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const areaOfWorkItems = [
    { title: "Social", href: "/area-of-work/social" },
    { title: "Cultural", href: "/area-of-work/cultural" },
    { title: "Educational", href: "/area-of-work/educational" },
    { title: "Health Care", href: "/area-of-work/healthcare" },
    { title: "Agricultural", href: "/area-of-work/agricultural" },
    { title: "Environment & Natural Resources", href: "/area-of-work/environment" },
  ];

  // These items link to sections within the About Us page.
  const missionVisionItems = [
    { title: "Our Vision", href: "/about#our-vision" },
    { title: "Our Mission", href: "/about#our-mission" },
    { title: "Core Values", href: "/about#core-values" },
    { title: "Strategic Objectives & Purpose", href: "/about#strategic-objectives-purpose" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-card">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={ridLogo} alt="RID Foundation Logo" className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foundation-blue">RID Foundation</span>
            <span className="text-xs text-muted-foreground hidden sm:block">Research and Ideas Development</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="text-sm font-medium"
                onClick={() => scrollToSection("areas-of-work")}
              >
                Area of Work
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {areaOfWorkItems.map((item) => (
                    <NavigationMenuLink key={item.title} asChild>
                      <Link
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.title}</div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="text-sm font-medium"
                onClick={() => {
                  // Take users directly to the Mission & Vision section on the About page.
                  navigate("/about#mission-vision");
                }}
              >
                Mission & Vision
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[300px] gap-3 p-4">
                  {missionVisionItems.map((item) => (
                    <NavigationMenuLink key={item.title} asChild>
                      <Link
                        to={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.title}</div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/donate" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                  Donate
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background p-4">
          <nav className="space-y-3">
            <Link to="/" className="block py-2 text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block py-2 text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Area of Work</div>
              <div className="ml-4 space-y-2">
                {areaOfWorkItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block py-1 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Mission & Vision</div>
              <div className="ml-4 space-y-2">
                {missionVisionItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block py-1 text-sm hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/donate" className="block py-2 text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;