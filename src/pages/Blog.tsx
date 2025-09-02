import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Cybersecurity: AI-Powered Threat Detection",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we detect and respond to cyber threats in real-time.",
      author: "Amazigh Halzoun",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Security",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      featured: true
    },
    {
      title: "Zero Trust Architecture: A Complete Implementation Guide",
      excerpt: "Learn how to implement a zero trust security model in your organization with practical steps and best practices.",
      author: "Sarah Bengherbi",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Network Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop"
    },
    {
      title: "Blockchain Security: Protecting Decentralized Applications",
      excerpt: "Discover common vulnerabilities in smart contracts and how to secure your DeFi applications against attacks.",
      author: "Amazigh Halzoun",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Blockchain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop"
    },
    {
      title: "Cloud Security Best Practices for Remote Teams",
      excerpt: "Essential security measures every remote team should implement to protect sensitive data in the cloud.",
      author: "Sarah Bengherbi",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Cloud Security",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop"
    },
    {
      title: "Penetration Testing 101: Finding Vulnerabilities Before Hackers Do",
      excerpt: "A beginner's guide to ethical hacking and how penetration testing can strengthen your security posture.",
      author: "Amazigh Halzoun",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "Penetration Testing",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop"
    },
    {
      title: "The Human Factor: Social Engineering Attack Prevention",
      excerpt: "Understanding social engineering tactics and training your team to recognize and prevent these attacks.",
      author: "Sarah Bengherbi",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Social Engineering",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop"
    }
  ];

  const categories = ["All", "AI Security", "Network Security", "Blockchain", "Cloud Security", "Penetration Testing", "Social Engineering"];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Cybersecurity <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the latest cybersecurity trends, threats, and solutions. 
            Our expert insights help you protect your digital assets.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 transition-all duration-200 ${
                index === 0 
                  ? "bg-gradient-primary text-white cyber-glow" 
                  : "border-primary/30 hover:border-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="cyber-glow bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-primary text-background">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-3 border-primary/30 text-primary">
                  {blogPosts[0].category}
                </Badge>
                <CardTitle className="text-2xl sm:text-3xl mb-4 text-foreground">
                  {blogPosts[0].title}
                </CardTitle>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                </div>
                <Button className="w-fit bg-gradient-primary hover:shadow-glow text-background group">
                  Read Article
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="cyber-glow bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <Badge variant="outline" className="w-fit mb-3 border-primary/30 text-primary">
                  {post.category}
                </Badge>
                
                <CardTitle className="text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="cyber-glow bg-card/30 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
               Stay Updated with  
<span className="gradient-text"> Cybrdom </span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest IT solutions, app development tips, and digital innovation insights delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                />
                <Button className="bg-gradient-primary hover:shadow-glow text-white px-6">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;