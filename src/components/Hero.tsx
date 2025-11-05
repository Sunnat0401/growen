import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";
import HeroBg from "/bggg.jpg";
interface HeroProps {
  t: any;
}

export function Hero({ t }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0">
        <img 
          src={HeroBg} 
          alt="Agriculture farming" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg2djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-scale-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t.hero.subtitle}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6">
            <Button 
              size="icon" 
              className="w-[200px] h-[50px]   transition-all duration-300 bg-transparent"
              // onClick={() => document.getElementById('detection')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <img src="/Apple.svg" alt="Apple.svg" />
            </Button>
            <Button 
            size="icon"
              variant="outline"
              className="w-[200px] h-[50px]  transition-all duration-300"
              // onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <img src="/Google.svg" alt="Google.svg" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
