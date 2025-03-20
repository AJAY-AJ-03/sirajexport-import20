import React from 'react';
import { Target, Eye, Users, Award, Star, TrendingUp } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
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

function AboutUs() {
  return (
    <div >
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-purple-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl leading-relaxed">
              Since 1995, we've been connecting India's favorite brands with millions of consumers, 
              building lasting partnerships and delivering excellence in distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-purple-600" />
                <h2 className="text-3xl font-bold ml-4">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To revolutionize brand distribution in India by creating seamless connections 
                between manufacturers and consumers, while maintaining the highest standards 
                of service and reliability.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-purple-600" />
                <h2 className="text-3xl font-bold ml-4">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become India's most trusted brand representation agency by 2030, 
                known for our innovation, reliability, and commitment to excellence 
                in every aspect of distribution and brand management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <value.icon className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-lg leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mt-2">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6">
                <h3 className="text-4xl font-bold text-purple-600 mb-2">25+</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-bold text-purple-600 mb-2">500+</h3>
                <p className="text-gray-600">Partner Stores</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-bold text-purple-600 mb-2">50M+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-bold text-purple-600 mb-2">15+</h3>
                <p className="text-gray-600">Major Brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;