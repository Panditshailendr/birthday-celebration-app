import { useState, useEffect } from "react";

interface LightboxProps {
  image: { src: string; caption: string } | null;
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (image) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 lightbox flex items-center justify-center z-50">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative max-w-4xl max-h-full p-4">
        <img 
          src={image.src} 
          alt={image.caption}
          className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in-95 duration-500"
        />
        <div className="text-white text-center mt-4 text-lg font-dancing">
          {image.caption}
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
}
