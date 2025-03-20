import React from 'react';
import { ArrowRight, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
              Your trusted partner in quality products and fine foods distribution.
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
                    src="/fine-foods-logo.png" 
                    alt="Fine Foods Logo" 
                    className="h-16 w-auto object-contain mb-6"
                  />
                  <h3 className="text-3xl font-bold text-white mb-4">Fine Foods</h3>
                  <p className="text-white/90 text-lg">
                    Experience the authentic taste of Dhonthiyapper Rusk. Our premium quality snacks are perfect for every occasion, crafted with tradition and excellence.
                  </p>
                </div>
                <div className="flex items-center text-white mt-8 group-hover:translate-x-2 transition-transform">
                  <span className="text-lg font-semibold">Explore Fine Foods</span>
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
                  <Store className="h-16 w-16 text-white mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">Products</h3>
                  <p className="text-white/90 text-lg">
                    Explore our extensive range of premium brands and products. From household essentials to personal care items, discover quality products that enhance your daily life.
                  </p>
                </div>
                <div className="flex items-center text-white mt-8 group-hover:translate-x-2 transition-transform">
                  <span className="text-lg font-semibold">Browse Products</span>
                  <ArrowRight className="ml-2 h-6 w-6" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;