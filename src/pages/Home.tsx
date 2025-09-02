import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Mail, Phone, MapPin } from "lucide-react";

const Home = () => {
const teamMembers = [
  {
    name: "Amazigh Halzoun",
    role: "Full Stack Developer",
    image: "/Amazigh.jpg", // image dans public
    description:
"Full stack developer with a passion for Flutter, building modern and scalable mobile and web applications.",  
  portfolio: "amazigh.dev",
  },
  {
    name: "Sarah Bengherbi",
    role: "Frontend Specialist",
    image: "/Sarah.jpg", // image dans public
    description:
      "Frontend specialist passionate about crafting smooth user experiences with React and Tailwind.",
    portfolio: "sarah.dev",
  },
];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block">Hello,</span>
                  <span className="block gradient-text">I'm Cybrdom!</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Your freelance partner for smart IT solutions. We design,
                  build, and optimize digital services to help your business
                  grow and stay ahead in a connected world.
                </p>
              </div>
             <a href="mailto:contact@cybrdom.com">
  <Button
    size="lg"
    className="mt-6 cyber-glow bg-gradient-primary hover:shadow-glow text-white font-semibold px-8 py-4 text-lg"
  >
    Let's Work Together
  </Button>
</a>


              
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10 float-animation">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=600&fit=crop"
                  alt="Cybersecurity Network"
                  className="w-full h-auto rounded-2xl cyber-glow"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two passionate developers dedicated to delivering secure,
              innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="cyber-glow bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary/30"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>

                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
                      asChild
                    >
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink
                          size={16}
                          className="mr-2 group-hover:text-primary"
                        />
                        Portfolio
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to <span className="gradient-text">Connect?</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I would love to hear from you. Whether you have a question about
              my services, want to discuss a potential project, or simply want
              to say hello, don't hesitate to get in touch. I am here to help
              and excited to start a conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  {/* Gmail Button */}
  <a href="mailto:contact@cybrdom.com">
    <Button
      size="lg"
      className="cyber-glow bg-gradient-primary hover:shadow-glow text-white font-semibold"
    >
      <Mail className="mr-2" size={20} />
      Get In Touch
    </Button>
  </a>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/213696013858"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="outline"
      size="lg"
      className="border-primary/30 hover:border-primary hover:bg-primary/10"
    >
      <Phone className="mr-2" size={20} />
      Schedule a Call
    </Button>
  </a>
</div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
