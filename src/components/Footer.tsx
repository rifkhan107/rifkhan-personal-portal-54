
import { Heart } from "lucide-react";
import AnimatedRMLogo from "./ui/AnimatedRMLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-accent relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <AnimatedRMLogo size={50} />
            <div className="ml-2">
              <span className="font-rockybilly text-xl md:text-3xl">Mohamed Rifkhan</span>
              <p className="text-sm text-foreground/60 mt-1">
                DevOps Engineer • Cloud Specialist • Cloud Engineer
              </p>
            </div>
          </div>
          
          <div className="flex items-center text-foreground/70">
            <p className="text-sm">
              © {currentYear} • Crafted with 
              <Heart className="inline-block w-4 h-4 mx-1 text-rifkhan" />
              in Sri Lanka 🇱🇰
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
