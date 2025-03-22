import React from "react";
import {
  ArrowRight,
  Store,
  MapPin,
  Building2,
  Truck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const coverageAreas = [
    {
      name: "Vedaranyam",
      description:
        "Main distribution center and headquarters, serving the coastal region with comprehensive coverage",
      image:
        "/areas/vedharanyam.avif",
      stats: {
        retailers: "100+",
        population: "50,000+",
      },
    },
    {
      name: "Muthupet",
      description:
        "Strategic hub connecting the lagoon region, specializing in retail distribution",
      image:
        "/areas/muthupet.png",
      stats: {
        retailers: "75+",
        population: "30,000+",
      },
    },
    {
      name: "Thiruthuraipoondi",
      description:
        "Central distribution point for agricultural markets and retail networks",
      image:
        "/areas/Thiruthuraipoondi.jpg",
      stats: {
        retailers: "80+",
        population: "35,000+",
      },
    },
    {
      name: "Nagapattinam",
      description:
        "Major urban center with extensive retail and wholesale distribution network",
      image:
        "/areas/Nagapatinam.jpg",
      stats: {
        retailers: "150+",
        population: "100,000+",
      },
    },
  ];
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage:
            'url("/siraj-agency-background.avif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="text-purple-400"> Siraj Agency</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              Your trusted partner in quality products and fine foods
              distribution.
            </p>
          </div>
        </div>
      </section>



      {/* Main Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Fine Foods Category */}
            <Link
              to="/fine-foods"
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-800/90 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative p-12 min-h-[400px] flex flex-col justify-between">
                <div>
                  <img
                    src="/finefoodlogo.jpg"
                    alt="Fine Foods Logo"
                    className="h-16 w-auto object-contain mb-6"
                  />
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Fine Foods
                  </h3>
                  <p className="text-white/90 text-lg">
                  Experience the authentic quality of Dhonthiyapper products. Our premium range is crafted with tradition and excellence, making it perfect for every occasion.
                  </p>
                </div>
                <div className="flex items-center text-white mt-8 group-hover:translate-x-2 transition-transform">
                  <span className="text-lg font-semibold">
                    Explore Fine Foods
                  </span>
                  <ArrowRight className="ml-2 h-6 w-6" />
                </div>
              </div>
            </Link>
            {/* Products Category */}
            <Link
              to="/products"
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-purple-800/90 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative p-12 min-h-[400px] flex flex-col justify-between">
                <div>
                <img
                    src="/siraj-agency-logo.jpg"
                    alt="Fine Foods Logo"
                    className="h-16 w-auto object-contain mb-6"
                  />
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Products
                  </h3>
                  <p className="text-white/90 text-lg">
                    Explore our extensive range of premium brands and products.
                    From household essentials to personal care items, discover
                    quality products that enhance your daily life.
                  </p>
                </div>
                <div className="flex items-center text-white mt-8 group-hover:translate-x-2 transition-transform">
                  <span className="text-lg font-semibold">Explore Products</span>
                  <ArrowRight className="ml-2 h-6 w-6" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

            {/* Area Coverage Section */}
            <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              Strategically located across Tamil Nadu's key regions, we ensure
              efficient distribution and reliable service to our valued
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageAreas.map((area, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-[300px]">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent">
                    <div className="absolute bottom-0 p-8 w-full">
                      <div className="flex items-center mb-3">
                        <MapPin className="h-6 w-6 text-purple-400 mr-2" />
                        <h3 className="text-2xl font-bold text-white">
                          {area.name}
                        </h3>
                      </div>
                      <p className="text-gray-200 mb-4 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
