import { Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start Your Fashion Journey
          </h2>
          <p className="font-body text-muted-foreground">
            Ready to begin? Contact us today to learn more about admissions and enrollment.
          </p>
        </div>

        <div className="max-w-lg mx-auto space-y-6">
          <a
            href="tel:9844514703"
            className="flex items-center gap-4 p-6 rounded-sm bg-card border border-border hover:border-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
              <Phone className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
            </div>
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Call Us</p>
              <p className="font-display text-xl font-bold text-foreground">9844514703</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 rounded-sm bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <Clock className="text-primary" size={20} />
            </div>
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Program Duration</p>
              <p className="font-display text-xl font-bold text-foreground">18 Months (3 Modules)</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-sm bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <MapPin className="text-primary" size={20} />
            </div>
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Experience</p>
              <p className="font-display text-xl font-bold text-foreground">20+ Years · 10,000+ Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
