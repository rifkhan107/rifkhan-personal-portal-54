
import AnimatedCard from "@/components/ui/AnimatedCard";
import Terminal from "@/components/ui/Terminal";
import { Cloud, Globe, User } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(3);
  
  useEffect(() => {
    // Calculate years of experience (starting from 3 years in 2024)
    const startYear = 2025;
    const startExperience = 3;
    const currentYear = new Date().getFullYear();
    const calculatedYears = startExperience + (currentYear - startYear);
    
    setYearsOfExperience(calculatedYears);
  }, []);

  return (
    <section
      id="about"
      className="py-20 md:py-28 relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="chip mb-4">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <AnimatedCard className="glass-card rounded-2xl p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
            <Terminal />
          </AnimatedCard>
          
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <AnimatedCard className="glass-card rounded-2xl p-6 flex items-start space-x-4 transition-all hover:translate-x-1">
              <div className="rounded-full bg-rifkhan/10 p-3 text-rifkhan">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Cloud Expert</h4>
                <p className="text-foreground/70">
                  With {yearsOfExperience}+ years of experience specializing in AWS and Azure cloud platforms, 
                  designing and implementing secure, scalable, and cost-effective cloud solutions.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard className="glass-card rounded-2xl p-6 flex items-start space-x-4 transition-all hover:translate-x-1">
              <div className="rounded-full bg-rifkhan/10 p-3 text-rifkhan">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Community Builder</h4>
                <p className="text-foreground/70">
                  Actively contributing to the tech community as an AWS Community Builder and 
                  cybersecurity practitioner, sharing knowledge and best practices.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard className="glass-card rounded-2xl p-6 flex items-start space-x-4 transition-all hover:translate-x-1">
              <div className="rounded-full bg-rifkhan/10 p-3 text-rifkhan">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Global Perspective</h4>
                <p className="text-foreground/70">
                  Working with international teams and clients to deliver DevOps solutions that
                  meet diverse business needs across different industries and regions.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
