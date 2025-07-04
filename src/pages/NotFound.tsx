
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-4">
            <Link 
              to="/" 
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg inline-block"
            >
              Return to Home
            </Link>
            <div>
              <Link to="/services" className="text-green-600 hover:text-green-700 mx-2">Services</Link>
              <span className="text-gray-400">|</span>
              <Link to="/about" className="text-green-600 hover:text-green-700 mx-2">About</Link>
              <span className="text-gray-400">|</span>
              <Link to="/contact" className="text-green-600 hover:text-green-700 mx-2">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
