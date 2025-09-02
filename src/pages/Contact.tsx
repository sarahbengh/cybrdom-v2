import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "contact@cybrdom.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: " +213 696013858",
      action: "Call Now"
    },

  ];

const faqItems = [
  {
    question: "What IT solutions do you offer?",
    answer: "We provide a wide range of IT services including web and mobile app development, software optimization, UI/UX design, and custom digital solutions tailored to your business needs."
  },
  {
    question: "How quickly can you start a project?",
    answer: "We respond promptly and can begin new projects within a few days, depending on the scope and requirements, ensuring timely delivery and quality results."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely! We offer scalable IT solutions for businesses of all sizes, from startups to established companies, helping them grow efficiently."
  },
  {
    question: "What is your development process?",
    answer: "We follow agile development methodologies with a focus on efficiency and quality, including iterative development, regular feedback loops, and continuous improvement throughout the project."
  }
];


  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            I would love to hear from you. Whather you have a question about my services, 
            want to discuss a potential project, or simply want to say hello, don't hesitate 
            to get in touch. I am here to help and excited to start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="cyber-glow bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="mr-3 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      First Name *
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-background border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-background border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-background border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Company (Optional)
                  </label>
                  <Input 
                    placeholder="Your Company Name" 
                    className="bg-background border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Project Type
                  </label>
                  <select className="w-full px-3 py-2 bg-background border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground">
  <option value="">Select a service</option>
  <option value="web-development">Web Development</option>
  <option value="mobile-development">Mobile App Development</option>
  <option value="ui-ux-design">UI/UX Design</option>
  <option value="it-consulting">IT Consulting</option>
  <option value="other">Other</option>
</select>

                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project or security needs..."
                    className="bg-background border-primary/30 focus:border-primary min-h-[120px]"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow text-background font-semibold group"
                >
                  <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="cyber-glow bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <IconComponent size={24} className="text-background" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="text-sm font-medium text-primary mb-3">{method.contact}</p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-primary/30 hover:border-primary hover:bg-primary/10"
                        >
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Business Hours */}
            <Card className="cyber-glow bg-card/50 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Clock size={24} className="text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Business Hours</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-primary font-medium mt-2">
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="cyber-glow bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="cyber-glow bg-card/30 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Secure Your <span className="gradient-text">Digital Future?</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't wait for a security breach. Let's discuss how we can protect your business today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow text-white font-semibold"
                >
                  Schedule Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  View Our Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;