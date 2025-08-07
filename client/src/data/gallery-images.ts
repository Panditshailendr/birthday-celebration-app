// Gallery Images Data
// To customize your memories gallery:
// 1. Replace the image URLs with your own image URLs
// 2. Adjust the captions to match your memories
// 3. Add or remove images as needed
// 4. For best results, use images with similar aspect ratios

export interface GalleryImage {
  id: number;
  src: string;        // Thumbnail image URL (smaller size for grid)
  fullSrc: string;    // Full size image URL (for lightbox view)
  caption: string;    // Caption for the image
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://i.postimg.cc/HnH1wXwT/IMG-20250803-WA0015.jpg",
    fullSrc: "https://i.postimg.cc/HnH1wXwT/IMG-20250803-WA0015.jpg",
    caption: "Our first laugh together"
  },
  {
    id: 2,
    src: "https://i.postimg.cc/02QHLV2L/IMG-20250803-WA0014.jpg",
    fullSrc: "https://i.postimg.cc/02QHLV2L/IMG-20250803-WA0014.jpg",
    caption: "Walking into forever"
  },
  {
    id: 3,
    src: "https://i.postimg.cc/FsCs4Cbc/IMG-20250803-WA0012.jpg",
    fullSrc: "https://i.postimg.cc/FsCs4Cbc/IMG-20250803-WA0012.jpg",
    caption: "Safe in your arms"
  },
  {
    id: 4,
    src: "https://i.postimg.cc/KcrRd5sr/IMG-20250803-WA0013.jpg",
    fullSrc: "https://i.postimg.cc/KcrRd5sr/IMG-20250803-WA0013.jpg",
    caption: "Make a wish, my love"
  },
  {
    id: 5,
    src: "https://i.postimg.cc/T3kbBc1H/IMG-20250803-WA0003.jpg",
    fullSrc: "https://i.postimg.cc/T3kbBc1H/IMG-20250803-WA0003.jpg",
    caption: "Celebrating you always"
  },
  {
    id: 6,
    src: "https://i.postimg.cc/nhnKyzkM/IMG-20250803-WA0016.jpg",
    fullSrc: "https://i.postimg.cc/nhnKyzkM/IMG-20250803-WA0016.jpg",
    caption: "Every day is a gift with you"
  },
  {
    id: 7,
    src: "https://i.postimg.cc/tCknVz3C/IMG-20250803-WA0007.jpg",
    fullSrc: "https://i.postimg.cc/tCknVz3C/IMG-20250803-WA0007.jpg",
    caption: "Dancing through life together"
  },
  {
    id: 8,
    src: "https://i.postimg.cc/7Pmq3tWc/IMG-20250803-WA0011.jpg",
    fullSrc: "https://i.postimg.cc/7Pmq3tWc/IMG-20250803-WA0011.jpg",
    caption: "Your laughter is my favorite sound"
  }
];

export default galleryImages;