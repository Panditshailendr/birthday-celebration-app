import galleryImages from "@/data/gallery-images";

interface PhotoGalleryProps {
  onImageClick: (image: { src: string; caption: string }) => void;
}

export default function PhotoGallery({ onImageClick }: PhotoGalleryProps) {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-dancing text-center text-white mb-16">Our Beautiful Memories 📸</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="gallery-item group cursor-pointer"
              onClick={() => onImageClick({ src: image.fullSrc, caption: image.caption })}
            >
              <img 
                src={image.src} 
                alt={image.caption} 
                className="rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
