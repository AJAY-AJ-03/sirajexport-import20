import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    emailjs.sendForm(
      "service_9hc5n4p", 
      "template_a2j9w2c", 
      e.currentTarget, 
      "jf4HFQRbLw01HhhHi"
    )
    .then(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      setError("❌ Failed to send message. Please try again later.");
      setIsSubmitting(false);
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-purple-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 h-full flex items-center relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/90">
              Get in touch with us for any inquiries or support. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Contact Form */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 flex items-center justify-center space-x-2 transition duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Message sent successfully!
                  </div>
                )}

                {error && (
                  <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                    {error}
                  </div>
                )}
              </div>

              {/* Google Maps */}
              <div className="relative h-[400px] md:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.5476666666665!2d79.82953106668401!3d10.374199221690581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIyJzI3LjEiTiA3OcKwNDknNDYuMyJF!5e0!3m2!1sen!2sin!4v1624451234567!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError("");
    
//     emailjs.sendForm(
//       "service_9hc5n4p", 
//       "template_a2j9w2c", 
//       e.currentTarget, 
//       "jf4HFQRbLw01HhhHi"
//     )
//     .then(() => {
//       setIsSubmitted(true);
//       setIsSubmitting(false);
//       setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//       setTimeout(() => setIsSubmitted(false), 5000);
//     })
//     .catch((err) => {
//       console.error("Error sending email:", err);
//       setError("❌ Failed to send message. Please try again later.");
//       setIsSubmitting(false);
//     });
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
//           <div className="p-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <input
//                 type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//               <input
//                 type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//               <input
//                 type="tel" name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//               <input
//                 type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//               <textarea
//                 name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows={4} required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               ></textarea>
//               <button
//                 type="submit" disabled={isSubmitting}
//                 className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 flex items-center justify-center space-x-2 transition duration-300"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Loader2 className="h-5 w-5 animate-spin" />
//                     <span>Sending...</span>
//                   </>
//                 ) : (
//                   <>
//                     <Send className="h-5 w-5" />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </button>
//             </form>

//             {isSubmitted && (
//               <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
//                 <CheckCircle className="h-5 w-5 mr-2" />
//                 Message sent successfully!
//               </div>
//             )}

//             {error && (
//               <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
//                 {error}
//               </div>
//             )}
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
