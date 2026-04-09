import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, TreeDeciduous, ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Header = () => (
  <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            C
          </div>
          <span className="font-['Outfit'] font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Connect
          </span>
        </div>
        
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Login</button>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5">
            Register
          </button>
        </div>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50 -z-10" />
    <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl -z-10" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
          Empowering Education, Communication, and 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Personal Growth</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          One platform connecting online education, English learning, and self-growth services. 
          Discover your potential with our comprehensive suite of platforms.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#services" className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors shadow-xl shadow-gray-900/20 flex items-center gap-2 group inline-block">
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const ServiceCard = ({ title, description, icon: Icon, link, buttonText, colors, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative group bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full`}
  >
    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
      <Icon className={`w-8 h-8 ${colors.icon}`} />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Outfit']">{title}</h3>
    <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
      {description}
    </p>
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl font-medium transition-all duration-300 ${colors.buttonbg} ${colors.buttontext} hover:opacity-90 hover:shadow-lg`}
    >
      {buttonText}
      <ArrowRight className="w-5 h-5 ml-2" />
    </a>
  </motion.div>
);

const Services = () => {
  const platforms = [
    {
      title: "Faculties Online",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      icon: GraduationCap,
      link: "https://www.facultiesonline.com/",
      buttonText: "Visit Faculties Online",
      colors: {
        bg: "from-blue-500 to-blue-600",
        icon: "text-white",
        buttonbg: "bg-blue-50 text-blue-700",
        buttontext: "text-blue-700 hover:bg-blue-600 hover:text-white"
      }
    },
    {
      title: "English Faculties",
      description: "Master the English language with modern educational design, structured courses, and professional guidance. Categories include UI/UX Design, Web Development, and Digital Marketing.",
      icon: BookOpen,
      link: "#",
      buttonText: "Visit English Faculties",
      colors: {
        bg: "from-slate-700 to-indigo-900",
        icon: "text-white",
        buttonbg: "bg-indigo-50",
        buttontext: "text-indigo-900 hover:bg-indigo-900 hover:text-white"
      }
    },
    {
      title: "Kalpvrukshaa",
      description: "Focus on mindfulness, spirituality, manifestation, gratitude practice, self-growth, and positive transformation. Manifest Your Best Life with our expert guidance.",
      icon: TreeDeciduous,
      link: "#",
      buttonText: "Visit Kalpvrukshaa",
      colors: {
        bg: "from-red-600 to-yellow-600",
        icon: "text-white",
        buttonbg: "bg-red-50",
        buttontext: "text-red-700 hover:bg-red-600 hover:text-white"
      }
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Outfit']">Our Platforms</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the platform that aligns with your educational and personal growth goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {platforms.map((platform, index) => (
            <ServiceCard key={platform.title} {...platform} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="font-['Outfit'] font-bold text-xl text-white">Connect</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-sm">
            Empowering Education, Communication, and Personal Growth. Your centralized hub for lifelong learning and self-improvement.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 font-['Outfit']">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 font-['Outfit']">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <span>info@example.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span>123 Innovation Drive, Tech City</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Connect Platform. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const Testimonials = () => (
  <section className="py-24 bg-gray-50 border-t border-gray-100 placeholder-placeholder">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Outfit']">What Our Users Say</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from the people who have transformed their lives through our platforms.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Sarah L.", role: "Student", text: "Faculties Online changed my learning experience entirely!" },
          { name: "John D.", role: "Professional", text: "English Faculties helped me secure my dream job abroad." },
          { name: "Elena M.", role: "Wellness Coach", text: "Kalpvrukshaa is a sanctuary for manifestation and growth." }
        ].map((testimonial, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
          >
            <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                {testimonial.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SearchAndNewsletter = () => (
  <section id="contact" className="py-24 bg-gradient-to-br from-indigo-900 to-blue-900 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 className="text-4xl font-bold text-white mb-6 font-['Outfit']">Stay Connected With Us</h2>
      <p className="text-indigo-200 mb-10 text-lg">
        Subscribe to our newsletter and never miss an update on new courses, coaching sessions, and platform features.
      </p>
      <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="flex-grow px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/30 whitespace-nowrap"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Testimonials />
        <SearchAndNewsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
