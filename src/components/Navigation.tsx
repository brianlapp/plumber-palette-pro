import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/6b4d1817-8c91-4db5-9784-737b0347e368.png"
              alt="Melville's Plumbing"
              className="h-10 w-auto"
            />
            <span className="font-bold text-primary hidden sm:block">Melville's Plumbing</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost">Services</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" className="block">
              <Button variant="ghost" className="w-full text-left justify-start">
                Home
              </Button>
            </Link>
            <Link to="/services" className="block">
              <Button variant="ghost" className="w-full text-left justify-start">
                Services
              </Button>
            </Link>
            <Link to="/about" className="block">
              <Button variant="ghost" className="w-full text-left justify-start">
                About
              </Button>
            </Link>
            <Link to="/contact" className="block">
              <Button variant="ghost" className="w-full text-left justify-start">
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};