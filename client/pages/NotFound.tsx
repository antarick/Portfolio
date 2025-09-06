import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <main className="section pt-32">
        <div className="text-center">
          <h1 className="font-display text-5xl font-extrabold">404</h1>
          <p className="mt-3 text-muted-foreground">Page not found</p>
          <a
            href="/"
            className="mt-6 inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Return Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
