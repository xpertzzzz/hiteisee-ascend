import { useState } from "react";
import { Layout } from "@/components/Layout";
import { X } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", title: "Strategy Workshop", h: "tall" },
  { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80", title: "Leadership Summit", h: "short" },
  { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80", title: "Team Offsite", h: "tall" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80", title: "Annual Conclave", h: "short" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80", title: "Client Roundtable", h: "tall" },
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80", title: "Training Session", h: "short" },
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80", title: "Boardroom Discussion", h: "short" },
  { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80", title: "Award Ceremony", h: "tall" },
];

const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Layout>
      <section className="bg-hero">
        <div className="container-custom py-20 md:py-24 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-3">Gallery</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold animate-fade-up">
            Moments from our <span className="text-gradient-green">journey</span>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setOpen(i)}
                className="reveal group block w-full mb-5 break-inside-avoid relative overflow-hidden rounded-2xl border border-border shadow-soft hover:shadow-elevated transition-all"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${img.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-card font-display text-xl font-semibold translate-y-3 group-hover:translate-y-0 transition-transform duration-300">{img.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] bg-foreground/85 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-6 right-6 h-11 w-11 rounded-full bg-card flex items-center justify-center shadow-elevated hover:scale-105 transition"
          >
            <X size={20} />
          </button>
          <img
            src={images[open].src}
            alt={images[open].title}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-elevated animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
