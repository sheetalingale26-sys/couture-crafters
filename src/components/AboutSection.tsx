import { Award, Users, BookOpen, Clock } from "lucide-react";

const stats = [
  { icon: Clock, label: "Years of Excellence", value: "20+" },
  { icon: Users, label: "Students Trained", value: "10,000+" },
  { icon: BookOpen, label: "Comprehensive Modules", value: "3" },
  { icon: Award, label: "Industry Recognition", value: "Trusted" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">About Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Crafting Fashion Futures Since 2005
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            MEDIA Fashion Technologies has been shaping the careers of aspiring fashion professionals for over two decades.
            Our comprehensive 18-month program covers garment construction, embroidery, fashion illustration, textile science, and digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-sm bg-background border border-border">
              <s.icon className="mx-auto mb-3 text-primary" size={28} strokeWidth={1.5} />
              <p className="font-display text-3xl font-bold text-foreground mb-1">{s.value}</p>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
