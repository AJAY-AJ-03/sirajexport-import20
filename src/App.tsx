import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import FineFoods from "./pages/FineFoods";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { WhatsAppIcon } from "./components/WhatsAppIcon";

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918531859695', '_blank');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-black/95 backdrop-blur-sm shadow-md fixed w-full z-50">
          <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <img
                  src="/siraj-agency-logo.jpg"
                  alt="Siraj Agency Logo"
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                />
                <span className="ml-2 text-lg sm:text-xl font-bold text-white">
                  Siraj Export & Import
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  to="/"
                  className="text-white hover:text-purple-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:text-purple-600 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:text-purple-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-200 ease-out"></div>
                <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-200 ease-out"></div>
                <div className="w-6 h-0.5 bg-white transition-all duration-200 ease-out"></div>
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-white/10 animate-fade-in">
                <Link
                  to="/"
                  className="block py-2.5 text-white hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block py-2.5 text-white hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block py-2.5 text-white hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/fine-foods" element={<FineFoods />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#20BA5C] transition-all duration-300 z-50 group active:scale-95"
          aria-label="Contact on WhatsApp"
        >
          <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute right-full mr-3 bg-black/90 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            Chat with us
          </span>
        </button>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;