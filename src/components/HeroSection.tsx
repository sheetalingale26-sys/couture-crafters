import heroImg from "@/assets/gallery/front_page_1.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Fashion display with mannequins showcasing classic tailoring"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-light mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Established 20+ Years · 10,000+ Students
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-card mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.4s" }}>
          MEDIA Fashion<br />Technologies
        </h1>
        <p className="font-display italic text-2xl md:text-3xl text-card/90 mb-4 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "0.6s" }}>
          "Learn the art of tailoring with precision, creativity, and confidence."
        </p>
        <p className="font-body text-lg text-gold-light/90 mb-8 animate-fade-in-up max-w-xl mx-auto" style={{ animationDelay: "0.8s" }}>
          Master garment construction, embroidery, fashion design & digital marketing with India's trusted fashion institute.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <a href="#modules" className="bg-gold-gradient text-primary-foreground px-8 py-3 rounded-sm font-body font-semibold tracking-wide text-sm uppercase hover:opacity-90 transition-opacity">
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
