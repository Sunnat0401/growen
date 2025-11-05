import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, PawPrint, Upload } from "lucide-react";
import plantImage from "@/assets/plant-disease.jpg";
import animalImage from "/anim.jpg";

interface DetectionSectionProps {
  t: any;
}

export function DetectionSection({ t }: DetectionSectionProps) {
  // const handleDetection = (type: 'plant' | 'animal') => {
  //   // Placeholder for file upload functionality
  //   const input = document.createElement('input');
  //   input.type = 'file';
  //   input.accept = 'image/*';
  //   input.onchange = (e) => {
  //     const file = (e.target as HTMLInputElement).files?.[0];
  //     if (file) {
  //       console.log(`Detecting ${type} disease for:`, file.name);
  //       // TODO: Implement actual detection logic
  //     }
  //   };
  //   input.click();
  // };

  return (
    <section id="detection" className="py-16 sm:py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
            {t.detection.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 group animate-fade-in border-2 hover:border-primary/30 overflow-hidden">
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden">
                  <img 
                    src={plantImage} 
                    alt="Plant disease detection" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent flex items-end justify-center pb-3">
                    <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm">
                      <Leaf className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold">{t.detection.plant.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{t.detection.plant.description}</p>
                </div>
                
                <Button 
                  // onClick={() => handleDetection('plant')}
                  className="w-full group/btn bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300"
                  size="lg"
                >
                  <Upload className="mr-2 h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                  {t.detection.plant.button}
                </Button>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 group animate-fade-in border-2 hover:border-primary/30 overflow-hidden">
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden">
                  <img 
                    src={animalImage} 
                    alt="Animal health detection" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent flex items-end justify-center pb-3">
                    <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm">
                      <PawPrint className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold">{t.detection.animal.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{t.detection.animal.description}</p>
                </div>
                
                <Button 
                  // onClick={() => handleDetection('animal')}
                  className="w-full group/btn bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300"
                  size="lg"
                >
                  <Upload className="mr-2 h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                  {t.detection.animal.button}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
