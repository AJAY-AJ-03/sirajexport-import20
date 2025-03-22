import React from 'react';
import { Target, Eye, Users, Award, Star, TrendingUp, MessageCircle } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

interface RuskProduct {
  id: string;
  name: string;
  weight: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&q=80&w=400",
    bio: "25+ years of experience in FMCG distribution and brand management"
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Operations Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Former head of operations at major retail chains across South India"
  },
  {
    id: 3,
    name: "Arun Patel",
    position: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "15+ years of experience in brand development and market expansion"
  }
];

const values = [
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our operations"
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building strong, lasting relationships with brands and retailers"
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Embracing new technologies and distribution methods"
  }
];

const features = [
  {
    icon: Star,
    title: "Premium Quality",
    description: "Made with finest ingredients and traditional recipes"
  },
  {
    icon: Award,
    title: "Food Safety",
    description: "FSSAI certified with strict quality controls"
  },
  {
    icon: Target,
    title: "Perfect Packaging",
    description: "Ensures freshness and longer shelf life"
  },
  {
    icon: Eye,
    title: "Customer Choice",
    description: "Trusted by millions across India"
  }
];

const ruskProducts = [
  {
    id: "tin-3kg",
    name: "Dhonthiyapper Premium Rusk",
    weight: "3kg Tin",
    image: "/rusk/RuskTin.jpg"
  },
  {
    id: "pocket-220g",
    name: "Dhonthiyapper Classic Rusk",
    weight: "220g Pocket",
    image: "/rusk/DhonthiyapperPremiumRusk.jpeg"
  },
  {
    id: "pocket-410g",
    name: "Dhonthiyapper Family Rusk",
    weight: "410g Pocket",
    image: "/rusk/WheatFlourRuskSp.jpg"
  },
  {
    id: "pocket-10",
    name: "Dhonthiyapper Mini Rusk",
    weight: "Single Serve Pocket",
    image: "/rusk/DhonthiyapperPremiumRusk.jpeg"
  }
];

function FineFoods() {
  const handleWhatsAppEnquiry = () => {
    const message = "Hi, I'm interested in Dhonthiyapper Fine Foods products. Could you please provide more information about your rusk products, pricing, and bulk order options?";
    const whatsappNumber = "918531859695";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center ">
        <div 
          className="absolute inset-0 bg-black/40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=2000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">Dhonthiyapper Fine Foods</h1>
            <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">
              Experience the perfect blend of tradition and taste with our premium quality rusks. 
              Crafted with care and baked to perfection, our rusks are the ideal companion for your tea time.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-amber-600 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Premium Rusk Collection</h2>
            <button
              onClick={handleWhatsAppEnquiry}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Enquire on WhatsApp</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ruskProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {product.weight}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{product.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Become a Distributor</h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8">
              Join our network of successful distributors and bring the taste of Dhonthiyapper to your region.
            </p>
            <button 
              onClick={handleWhatsAppEnquiry}
              className="w-full sm:w-auto bg-white text-amber-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Contact Sales Team</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FineFoods;