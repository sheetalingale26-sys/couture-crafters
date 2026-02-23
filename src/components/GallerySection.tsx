import { useState } from "react";
import { X } from "lucide-react";

import img1 from "@/assets/gallery/art_on_cloth.jpeg";
import img2 from "@/assets/gallery/baby_dress.jpeg";
import img3 from "@/assets/gallery/doll_art.jpeg";
import img4 from "@/assets/gallery/handcraft2.jpeg";
import img5 from "@/assets/gallery/mehandi.jpeg";
import img6 from "@/assets/gallery/page3.jpeg";
import img7 from "@/assets/gallery/page4.jpeg";
import img8 from "@/assets/gallery/page5.jpeg";
import img9 from "@/assets/gallery/front_page_1.jpeg";
import img10 from "@/assets/gallery/sewing_class.png";
import img11 from "@/assets/gallery/cushions.png";
import img12 from "@/assets/gallery/green_dress.png";

const images = [
  { src: img1, alt: "Fabric painting with floral design" },
  { src: img2, alt: "Baby dress in pink tulle" },
  { src: img3, alt: "Designer doll with rose gown" },
  { src: img4, alt: "Zardosi embroidery with pearls" },
  { src: img5, alt: "Intricate mehendi design" },
  { src: img6, alt: "Student working on garment" },
  { src: img7, alt: "Fabric cutting process" },
  { src: img8, alt: "Fashion illustration sketch" },
  { src: img9, alt: "Classic cut fashion display" },
  { src: img10, alt: "Students in sewing class" },
  { src: img11, alt: "Decorative smocked cushions" },
  { src: img12, alt: "Baby in green bow dress" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Student Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Gallery</h2>
          <p className="font-body text-muted-foreground">
            A glimpse into the beautiful creations by our talented students.
          </p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="block w-full overflow-hidden rounded-sm group cursor-pointer break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-card hover:text-primary transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-h-[85vh] max-w-full object-contain rounded-sm animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
