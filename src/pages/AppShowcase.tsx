import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Smartphone, Globe } from "lucide-react";

const AppShowcase = () => {
  const technologies = [
    { name: "React", color: "bg-blue-500" },
    { name: "Flutter", color: "bg-blue-600" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Python", color: "bg-yellow-500" },
    { name: "Dart", color: "bg-red-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Aws", color: "bg-cyan-500" },
    { name: "Tailwind", color: "bg-orange-500" },
    { name: "Next.js", color: "bg-purple-500" }
  ];

  const showcaseApps = [
    {
      title: "Fully Fledged Podcast App",
      description: "Enterprise-grade password manager with military-level encryption and biometric authentication for businesses.",
      technologies: ["Flutter", "Podcast","Server", "Strapi", "Streaming"],
      images: [
        "/podcast.png",
        "/podcast.png",
      ],
      links: {
        github: "https://github.com/cybdom/cybdom_podcast",
        // demo: "https://securevault-demo.com",
        playstore: "https://play.google.com/store"
      }
    },
    {
      title: "Netflixy Movie APP API Integration",
      description: "A Flutter-based movie app integrating APIs to browse, search, and stream your favorite films seamlessly.",
      technologies: ["Flutter","UI","Netflixy","Movie","Api","Integration"],
      images: [
        "netflix1.png",
        "netflix2.png"
      ],
      links: {
        github: "https://github.com/cybdom/netflixy_flutter",
        demo: "Netflixy"
      }
    },
    {
      title: "Transportation App",
      description: "A mobile app that helps users plan, book, and track transportation in real-time, offering route optimization, fare estimates, and seamless navigation.",
      technologies: ["Flutter", "React Native", "Google Maps API"],
      images: [
        "transportation1.png",
        "transportation2.png"
      ],
      links: {
        github: "https://github.com/cybdom/transportation_ui",
        demo: "transportation_ui",
        playstore: "https://play.google.com/store",
        appstore: "https://apps.apple.com"
      }
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="gradient-text">App Showcase</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover our cutting-edge IT applications and solutions. Each project represents our commitment to innovation and excellence in software development.

          </p>

          {/* Technology Bubbles */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {technologies.map((tech, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className={`${tech.color} text-white hover:scale-105 transition-transform duration-200 px-4 py-2 text-sm font-medium cyber-glow`}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>

      {/* Apps Grid */}
<div className="space-y-16">
  {showcaseApps.map((app, index) => (
    <Card
      key={index}
      className="cyber-glow bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300"
    >
      <CardContent className="p-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* App Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                {app.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {app.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {app.technologies.map((tech, techIndex) => (
                <Badge 
                  key={techIndex}
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {app.links.github && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
                  asChild
                >
                  <a href={app.links.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2 group-hover:text-primary" />
                    GitHub
                  </a>
                </Button>
              )}
              
              {app.links.demo && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
                  asChild
                >
                  <a href={app.links.demo} target="_blank" rel="noopener noreferrer">
                    <Globe size={16} className="mr-2 group-hover:text-primary" />
                    Live Demo
                  </a>
                </Button>
              )}
              
              {app.links.playstore && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
                  asChild
                >
                  <a href={app.links.playstore} target="_blank" rel="noopener noreferrer">
                    <Smartphone size={16} className="mr-2 group-hover:text-primary" />
                    Play Store
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* App Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {app.images.map((image, imgIndex) => (
              <div key={imgIndex} className="relative group">
                <img 
                  src={image} 
                  alt={`${app.title} screenshot ${imgIndex + 1}`}
                  className="w-auto max-h-96 mx-auto object-contain rounded-lg cyber-glow transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card/30 rounded-2xl p-8 cyber-glow">
            <h3 className="text-2xl font-bold mb-4">
              Have a <span className="gradient-text">Project in Mind?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your vision to life.
            </p>
           <a href="mailto:contact@cybrdom.com">
  <Button 
    size="lg" 
    className="cyber-glow bg-gradient-primary hover:shadow-glow text-white font-semibold"
  >
    Start Your Project
  </Button>
</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;