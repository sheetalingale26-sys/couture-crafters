const Footer = () => {
  return (
    <footer className="py-10 bg-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-lg font-bold text-card mb-2">
          <span className="text-gold-gradient">MEDIA</span> Fashion Technologies
        </p>
        <p className="font-body text-sm text-muted-foreground mb-4">
          Shaping Fashion Professionals for Over 20 Years
        </p>
        <a href="tel:9844971818" className="font-body text-sm text-gold-light hover:underline">
          📞 9844971818
        </a>
        <p className="font-body text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} MEDIA Fashion Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
