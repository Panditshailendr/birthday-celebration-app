import { useEffect } from "react";

const timelineItems = [
  {
    title: "First Spark ✨",
    description: "When a small comment became the beginning of forever...",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    side: "left"
  },
  {
    title: "Success Partners 🚀",
    description: "Planning our future, conquering dreams together...",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    side: "right"
  },
  {
    title: "Forever Promise 💍",
    description: "Your smile became my reason to live...",
    image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    side: "left"
  }
];

export default function LoveTimeline() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "-translate-x-12");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-dancing text-center text-white mb-16">Our Love Story 💖</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-deep to-rose-gold"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline-item flex items-center opacity-0 -translate-x-12 transition-all duration-1000">
                {item.side === "left" ? (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                        <h3 className="text-xl font-dancing text-rose-gold mb-2">{item.title}</h3>
                        <p className="text-white text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-rose-deep rounded-full border-4 border-white relative z-10 flex-shrink-0"></div>
                    <div className="w-1/2 pl-8">
                      <img src={item.image} alt={item.title} className="rounded-lg shadow-lg" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8">
                      <img src={item.image} alt={item.title} className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-8 h-8 bg-rose-deep rounded-full border-4 border-white relative z-10 flex-shrink-0"></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                        <h3 className="text-xl font-dancing text-rose-gold mb-2">{item.title}</h3>
                        <p className="text-white text-sm">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
