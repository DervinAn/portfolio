import { Button } from "@/components/ui/button-simple";
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown, Code } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import anasProfile from "../../assets/anas_profile.jpg";

export function Hero() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-2 flex items-center">
              <div className="h-1 w-10 bg-primary mr-3"></div>
              <p className="text-sm font-medium text-primary">Hello! I'm Anas Namaoui, an Android developer</p>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">[Android]</span><br />
              Mobile Developer<span className="text-primary blink">_</span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I’m an Android developer with 3+ years of experience building scalable applications with Kotlin, Jetpack Compose, MVVM, and Clean Architecture. As co-founder of Qimora Agency, I turn client needs into software solutions. I’m currently pursuing a master’s in Strategic Management of Information Systems at ENSM, Koléa, Tipaza.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a href="#contact" className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition-colors">
                <span>Get in touch</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url} 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              
              <Button 
                variant="ghost"
                size="sm"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary font-medium flex items-center"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>SEE MORE</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 absolute inset-0 rounded-xl transform rotate-3"></div>
              <img 
                src={anasProfile} 
                alt="Anas Namaoui" 
                className="relative z-10 rounded-xl object-cover w-full max-w-md mx-auto shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-full shadow-lg z-20">
                <Code className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
