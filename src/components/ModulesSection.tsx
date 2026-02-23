import { Scissors, Palette, PenTool } from "lucide-react";
import imgSewing from "@/assets/gallery/page3.jpeg";
import imgEmbroidery from "@/assets/gallery/handcraft2.jpeg";
import imgDesign from "@/assets/gallery/page5.jpeg";

const modules = [
{
  icon: Scissors,
  title: "Module 1: Garment Construction & Sewing",
  duration: "6 Months",
  image: imgSewing,
  description: "Master pattern making, drafting, cutting, stitching, and finishing techniques for professional garment construction.",
  topics: ["Pattern Making & Grading", "Computer-Aided Pattern Design", "Garment Construction (Frocks, Skirts, Blouses, Shirts)", "Seams, Pleats, Collars, Sleeves", "Draping Methods", "Fashion Forecasting & Fabric Sourcing"]
},
{
  icon: Palette,
  title: "Module 2: Embroidery",
  duration: "6 Months",
  image: imgEmbroidery,
  description: "Explore hand and machine embroidery, mehendi, fabric painting, needle craft, and decorative techniques like zardosi.",
  topics: ["Mehendi (Arabic, Indian, Dulhan)", "Fabric & Textile Painting", "Hand & Machine Embroidery Stitches", "Patch Work, Quilting & Cut Work", "Smocking, Ribbon & Beadwork", "Zardosi (20–25 Stitches)"]
},
{
  icon: PenTool,
  title: "Module 3: Fashion Design & Illustration",
  duration: "6 Months",
  image: imgDesign,
  description: "Develop skills in fashion illustration, figure drawing, croquis, portfolio development, and design visualization.",
  topics: ["Flat Sketching & Figure Drawing", "Necklines, Collars, Sleeves, Cuffs", "Fabric Rendering (Lace, Leather, Denim)", "Croquis Drawing (8 & 10 Head)", "Thematic Portfolio Development", "Computer-Based Fashion Design"]
}];


const ModulesSection = () => {
  return (
    <section id="modules" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Our Program</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">“From Passion to Profession”

          </h2>
          <p className="font-body text-muted-foreground">
            Three intensive modules covering every aspect of fashion — from construction to creative design.
          </p>
        </div>

        <div className="space-y-16">
          {modules.map((mod, i) =>
          <div
            key={mod.title}
            className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}>

              <div className="lg:w-1/2">
                <img
                src={mod.image}
                alt={mod.title}
                className="w-full h-80 object-cover rounded-sm"
                loading="lazy" />

              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-3">
                  <mod.icon className="text-primary" size={24} strokeWidth={1.5} />
                  <span className="font-body text-xs tracking-widest uppercase text-primary font-semibold">{mod.duration}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{mod.title}</h3>
                <p className="font-body text-muted-foreground mb-6">{mod.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {mod.topics.map((t) =>
                <li key={t} className="font-body text-sm text-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">✦</span> {t}
                    </li>
                )}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Additional Subjects */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-sm bg-card border border-border">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Introduction to Textiles</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Overview of fibres, yarns, filaments, and fabrics. Learn manufacturing methods including weaving, knitting, and non-wovens.
              Fabric identification through burn tests for cotton, silk, wool, linen, chiffon, leather, and more.
            </p>
          </div>
          <div className="p-8 rounded-sm bg-card border border-border">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Digital Marketing</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Instagram marketing, business account setup, hashtags, influencer marketing, and Instagram ads.
              WhatsApp marketing strategies, business features, gateways, automated messaging, and newsletter management.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default ModulesSection;