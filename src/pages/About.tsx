import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About the Artists
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the talented duo behind these extraordinary works of art
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Davit Davtyan */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-8 shadow-soft">
                <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                  Davit Davtyan
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Davit Davtyan is a masterful artist whose work reflects a deep understanding 
                    of classical techniques combined with contemporary vision. His paintings 
                    demonstrate exceptional skill in capturing light, texture, and emotion.
                  </p>
                  <p>
                    With years of dedicated practice and study, Davit has developed a distinctive 
                    style that bridges traditional and modern artistic expressions. His still life 
                    compositions are particularly renowned for their rich colors and meticulous attention to detail.
                  </p>
                  <p>
                    Born with an innate artistic talent, Davit continues to push the boundaries 
                    of his craft, creating works that speak to the soul and inspire viewers 
                    to see beauty in everyday objects.
                  </p>
                </div>
              </div>
            </div>

            {/* Syuzanna Tarverdyan */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-8 shadow-soft">
                <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                  Syuzanna Tarverdyan
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Syuzanna Tarverdyan brings a unique perspective to the artistic partnership, 
                    with her own distinctive approach to color, composition, and subject matter. 
                    Her work demonstrates a refined sensitivity to beauty and form.
                  </p>
                  <p>
                    Her artistic journey has been marked by continuous exploration and growth, 
                    resulting in a body of work that is both technically proficient and 
                    emotionally resonant. Syuzanna's paintings often feature delicate interplays 
                    of light and shadow.
                  </p>
                  <p>
                    As an artist, Syuzanna is committed to creating works that not only please 
                    the eye but also evoke deep emotional responses, making each piece a 
                    window into the artist's soul and a mirror for the viewer's own experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;