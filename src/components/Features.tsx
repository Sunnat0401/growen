import { Card } from "@/components/ui/card";
import { Target, Zap, Database } from "lucide-react";
import accuracyImage from "@/assets/feature-accuracy.jpg";
import speedImage from "@/assets/feature-speed.jpg";
import databaseImage from "@/assets/feature-database.jpg";

interface FeaturesProps {
  t: any;
}

export function Features({ t }: FeaturesProps) {
  const features = [
    {
      icon: Target,
      image: accuracyImage,
      title: t.features.accuracy.title,
      description: t.features.accuracy.description,
    },
    {
      icon: Zap,
      image: speedImage,
      title: t.features.speed.title,
      description: t.features.speed.description,
    },
    {
      icon: Database,
      image: databaseImage,
      title: t.features.comprehensive.title,
      description: t.features.comprehensive.description,
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
            {t.features.title}
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 sm:p-8 hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 group animate-fade-in border-2 hover:border-primary/20 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden mb-2">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent flex items-end justify-center pb-2">
                      <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm group-hover:scale-110 transition-all duration-300">
                        <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
