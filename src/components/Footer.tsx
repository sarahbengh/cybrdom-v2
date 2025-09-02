const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-card/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground">
            Made with ❤️ by{" "}
            <span className="text-primary font-medium">@cybrdom</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cybrdom. All rights reserved. | Algeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
