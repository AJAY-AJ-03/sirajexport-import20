import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle
} from 'lucide-react';

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  details: string[];
}

interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  email: string;
  timing: string;
  image: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 123 456 7890", "+91 098 765 4321"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@brandmaster.com", "support@brandmaster.com"]
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"]
  }
];

const officeLocations: OfficeLocation[] = [
  {
    city: "Chennai",
    address: "123 Anna Nagar, Chennai, Tamil Nadu 600040",
    phone: "+91 123 456 7890",
    email: "chennai@brandmaster.com",
    timing: "9:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000"
  },
  {
    city: "Mumbai",
    address: "456 Bandra West, Mumbai, Maharashtra 400050",
    phone: "+91 098 765 4321",
    email: "mumbai@brandmaster.com",
    timing: "9:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    city: "Delhi",
    address: "789 Connaught Place, New Delhi 110001",
    phone: "+91 456 789 0123",
    email: "delhi@brandmaster.com",
    timing: "9:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1000"
  }
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-purple-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl leading-relaxed">
              Have questions about our products or services? We're here to help.
              Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="inline-block p-4 bg-purple-100 rounded-full mb-6">
                  <info.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Message sent successfully!
                  </div>
                )}
              </div>
              <div className="relative h-[300px] lg:h-full">
                <div className="absolute inset-0">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.5444444444445!2d79.82954199999999!3d10.374178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIyJzI3LjAiTiA3OcKwNDknNDYuNCJF!5e0!3m2!1sen!2sin!4v1628523544976!5m2!1sen!2sin`}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={office.image}
                    alt={`${office.city} Office`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{office.city}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-600" />
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <p className="text-gray-600">{office.email}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <p className="text-gray-600">{office.timing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Facebook className="h-6 w-6 text-purple-600" />
            </a>
            <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Twitter className="h-6 w-6 text-purple-600" />
            </a>
            <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Instagram className="h-6 w-6 text-purple-600" />
            </a>
            <a href="#" className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Linkedin className="h-6 w-6 text-purple-600" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;