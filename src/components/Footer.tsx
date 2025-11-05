import { Leaf } from "lucide-react";

interface FooterProps {
  t: any;
}

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-muted/30 border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-primary/10 p-2 rounded-xl">
                <Leaf className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Growen
              </span>
            </div>
            
            <p className="text-sm sm:text-base text-muted-foreground max-w-md">
              {t.footer.description}
            </p>
            
            <div className="pt-4 sm:pt-6 border-t border-border w-full">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © {currentYear} Growen. {t.footer.rights}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
