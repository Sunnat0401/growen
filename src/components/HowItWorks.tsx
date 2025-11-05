import { Card } from "@/components/ui/card";
import { Upload, Brain, CheckCircle } from "lucide-react";
import step1Image from "@/assets/step1-upload.jpg";
import step2Image from "@/assets/step2-analyze.jpg";
import step3Image from "@/assets/step3-results.jpg";

interface HowItWorksProps {
  t: any;
}

export function HowItWorks({ t }: HowItWorksProps) {
  const steps = [
    {
      icon: Upload,
      image: step1Image,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: Brain,
      image: step2Image,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      icon: CheckCircle,
      image: step3Image,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
      color: "from-green-500/20 to-green-600/20",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
            {t.howItWorks.title}
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="p-6 sm:p-8 hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 group animate-fade-in-up border-2 hover:border-primary/20 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden mb-2">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent flex items-end justify-center pb-2">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} backdrop-blur-sm`}>
                        <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
                      {index + 1}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
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
