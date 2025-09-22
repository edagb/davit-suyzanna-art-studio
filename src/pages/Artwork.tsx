import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Artwork = () => {
  const [activeArtist, setActiveArtist] = useState<"davit" | "syuzanna">("davit");

  // Placeholder artwork data - would be replaced with real data
  const artworks = {
    davit: [
      {
        id: 1,
        title: "Still Life with Pomegranates",
        year: "2023",
        medium: "Oil on Canvas",
        dimensions: "60x80 cm",
        image: "/api/placeholder/400/300"
      },
      {
        id: 2,
        title: "Classical Composition",
        year: "2023",
        medium: "Oil on Canvas", 
        dimensions: "50x70 cm",
        image: "/api/placeholder/400/300"
      },
      {
        id: 3,
        title: "Fruit Arrangement",
        year: "2022",
        medium: "Oil on Canvas",
        dimensions: "45x60 cm", 
        image: "/api/placeholder/400/300"
      }
    ],
    syuzanna: [
      {
        id: 4,
        title: "Floral Studies",
        year: "2023",
        medium: "Oil on Canvas",
        dimensions: "40x50 cm",
        image: "/api/placeholder/400/300"
      },
      {
        id: 5,
        title: "Light and Shadow",
        year: "2023", 
        medium: "Oil on Canvas",
        dimensions: "55x75 cm",
        image: "/api/placeholder/400/300"
      },
      {
        id: 6,
        title: "Nature's Bounty",
        year: "2022",
        medium: "Oil on Canvas",
        dimensions: "50x65 cm",
        image: "/api/placeholder/400/300"
      }
    ]
  };

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Artwork
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the beautiful creations from both artists
            </p>
          </div>

          {/* Artist Selection Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-card rounded-lg p-2 shadow-soft">
              <Button
                variant={activeArtist === "davit" ? "default" : "ghost"}
                onClick={() => setActiveArtist("davit")}
                className="mr-2"
              >
                Davit Davtyan
              </Button>
              <Button
                variant={activeArtist === "syuzanna" ? "default" : "ghost"}
                onClick={() => setActiveArtist("syuzanna")}
              >
                Syuzanna Tarverdyan
              </Button>
            </div>
          </div>

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks[activeArtist].map((artwork) => (
              <div key={artwork.id} className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="aspect-[4/3] bg-muted">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {artwork.title}
                  </h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{artwork.year}</p>
                    <p>{artwork.medium}</p>
                    <p>{artwork.dimensions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Artwork;