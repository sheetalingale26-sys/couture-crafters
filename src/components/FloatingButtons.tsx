import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <a
        href="tel:9844971818"
        className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Call us"
      >
        <Phone className="text-primary-foreground" size={22} />
      </a>
      <a
        href="https://wa.me/919844971818"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142_70%_40%)] flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="text-white" size={22} />
      </a>
    </div>
  );
};

export default FloatingButtons;
