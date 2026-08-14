import { useState, useEffect } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { getGalleryImages, type GalleryImage } from "@/lib/galleryData";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    setGalleryImages(getGalleryImages());
  }, []);

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category || "Other")))];

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => (img.category || "Other") === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const currentSelectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Our Gallery"
        subtitle="A visual journey through our events, programs, and memorable moments."
        theme="gallery"
      />

      <section className="py-16 bg-background">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* Filter Tabs */}
          <div className="mb-10 flex flex-col items-center gap-5">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/8 border border-primary/15">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-bold text-foreground tracking-wide">
                {filteredImages.length} Moments Captured
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedIndex(null);
                  }}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold border ${
                    activeCategory === category
                      ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                      : "bg-white text-slate-600 border-blue-100 hover:border-primary/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredImages.map((img, index) => (
              <div
                key={img.id}
                className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer border border-blue-100 bg-blue-50/30 mb-4 inline-block w-full hover:shadow-md"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-auto block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100">
                  <p className="text-white text-[11px] md:text-xs font-semibold leading-snug line-clamp-2">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {currentSelectedImage && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8"
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentSelectedImage.src}
              alt={currentSelectedImage.title}
              className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-5 text-center">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
                {currentSelectedImage.title}
              </h3>
              <p className="text-white/50 text-xs font-bold mt-2 uppercase tracking-widest">
                {selectedIndex !== null ? selectedIndex + 1 : 0} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
