import { Facebook, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Davit Social */}
          <div className="text-center">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Davit Davtyan
            </h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Davit Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Davit Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="text-center">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Location
            </h3>
            <div className="flex justify-center items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>

          {/* Syuzanna Social */}
          <div className="text-center">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Syuzanna Tarverdyan
            </h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Syuzanna Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Syuzanna Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Davit & Syuzanna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;