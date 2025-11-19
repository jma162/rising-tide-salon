'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('error', () => {
        console.error('Video failed to load');
        setVideoError(true);
      });
      video.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
        setVideoError(false);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="font-serif text-2xl font-bold text-[#1a1a1a]">
              Rising Tide
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#d4af37] transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-[#d4af37] transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-[#d4af37] transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-[#d4af37] transition-colors">Contact</a>
              <a 
                href="https://book.squareup.com/appointments/kx5dwpxk04vvfe/location/LPEFK1CK9FV8R/services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#d4af37] text-white rounded-full hover:bg-[#b8941f] transition-colors"
              >
                Book Now
              </a>
            </div>
            <button className="md:hidden text-gray-700 font-medium">
              Menu
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ zIndex: 0 }}
          onError={() => setVideoError(true)}
          onLoadedData={() => setVideoError(false)}
        >
          <source src="https://videos.pexels.com/video-files/3044083/3044083-hd_1920_1080_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4" type="video/mp4" />
          {/* Alternative video sources if Pexels doesn't work */}
          <source src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback background gradient - shows if video fails */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#f5f5f5] via-white to-[#fafafa] z-0 transition-opacity duration-500 ${videoError ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 z-[1]"></div>
        <div className="absolute inset-0 bg-[#d4af37]/5 z-[1]"></div>
        
        <div className="relative z-[2] max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] mb-6 leading-tight">
            Rising Tide
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-4 font-light">
            Hair Salon & Skin Care
          </p>
          <p className="text-lg sm:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Where luxury meets expertise. Experience premium beauty treatments in an elegant, modern environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://book.squareup.com/appointments/kx5dwpxk04vvfe/location/LPEFK1CK9FV8R/services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#d4af37] text-white rounded-full hover:bg-[#b8941f] transition-all transform hover:scale-105 text-lg font-medium shadow-lg"
            >
              Book Appointment
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-white text-[#1a1a1a] rounded-full border-2 border-[#d4af37] hover:bg-[#d4af37] hover:text-white transition-all text-lg font-medium"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive beauty solutions tailored to your unique style and needs
            </p>
          </div>

          {/* Haircuts & Styling */}
          <div className="mb-12">
            <div className="mb-6">
              <div className="w-16 h-px bg-[#d4af37] mb-3"></div>
              <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">Haircuts & Styling</h3>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
              {[
                { name: 'Hair Cutting', price: '$50.00', duration: '30 min' },
                { name: "Women's Haircut", price: '$35.00', duration: '30 min' },
                { name: "Men's Haircut", price: '$32.00', duration: '30 min' },
                { name: "Child's Haircut (10 yrs and under)", price: '$32.00', duration: '30 min' },
                { name: 'Styling & Blow Outs', price: '$35.00', duration: '30 min' },
                { name: 'Wash + Blow Out', price: '$50.00', duration: '30 min' },
                { name: 'Love Signature Blow Out', description: 'ideal for long, thick or curly hair', price: '$60.00', duration: '30 min' },
                { name: 'Ultimate Blow Out', description: 'includes custom treatment, wash + blow out', price: '$85.00', duration: '30 min' },
                { name: 'Formal Styling', description: 'Bridal Booking Information please ask for details', price: '$35.00', duration: '30 min' },
              ].map((service, idx) => (
                <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                      {service.description && <p className="text-sm text-gray-500">{service.description}</p>}
                    </div>
                    <div className="text-right ml-4">
                      <div className="font-semibold text-[#d4af37]">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hair Coloring */}
          <div className="mb-12">
            <div className="mb-6">
              <div className="w-16 h-px bg-[#d4af37] mb-3"></div>
              <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">Hair Coloring</h3>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
              {[
                { name: 'Hair Coloring', description: 'Glaze Refresh', price: '$50.00', duration: '30 min' },
                { name: 'Root Retouch', price: '$56.00', duration: '30 min' },
                { name: 'Root Retouch + Glaze', price: '$90.00', duration: '30 min' },
                { name: 'Face Frame Highlights + Glaze', price: '$140.00', duration: '30 min' },
                { name: 'Half Head Highlights + Glaze', price: '$165.00', duration: '30 min' },
                { name: 'Full Head Highlights + Glaze', price: '$200.00', duration: '30 min' },
                { name: 'Teasylights + Glaze', price: 'Free', duration: '30 min' },
                { name: 'Organic Color Line', price: 'Free', duration: '30 min' },
              ].map((service, idx) => (
                <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                      {service.description && <p className="text-sm text-gray-500">{service.description}</p>}
                    </div>
                    <div className="text-right ml-4">
                      <div className="font-semibold text-[#d4af37]">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hair Treatments */}
          <div className="mb-12">
            <div className="mb-6">
              <div className="w-16 h-px bg-[#d4af37] mb-3"></div>
              <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">Hair Treatments</h3>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
              {[
                { name: 'Hair Treatments', description: 'Ultimate Repair/Ultimate Smooth Bond Builder Metal Detox Scalp Care', price: '$25.00', duration: '30 min' },
                { name: 'Express Keratin Smoothing', price: '$100.00', duration: '30 min' },
                { name: 'Full Keratin Smoothing', price: '$300.00', duration: '30 min' },
              ].map((service, idx) => (
                <div key={idx} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                      {service.description && <p className="text-sm text-gray-500">{service.description}</p>}
                    </div>
                    <div className="text-right ml-4">
                      <div className="font-semibold text-[#d4af37]">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Most Popular Packages */}
          <div className="mb-12">
            <div className="mb-6">
              <div className="w-16 h-px bg-[#d4af37] mb-3"></div>
              <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">Most Popular Packages</h3>
            </div>
            <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#d4af37]/5 rounded-xl border-2 border-[#d4af37]/20 p-6">
              <div className="space-y-4">
                {[
                  { name: "Women's Haircut + Ultimate Treatment", price: '$75.00', duration: '30 min' },
                  { name: 'Face Frame Highlight, Root Retouch, Glaze + Women\'s Haircut', price: '$196.00', duration: '30 min' },
                  { name: 'Half Head Highlight, Glaze, Ultimate Treatment + Blow Out', price: '$210.00', duration: '30 min' },
                  { name: 'Full Head Highlight, Glaze, Bond Builder + Women\'s Haircut', price: '$240.00', duration: '30 min' },
                ].map((service, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{service.name}</h4>
                      </div>
                      <div className="text-right ml-4">
                        <div className="font-semibold text-[#d4af37]">{service.price}</div>
                        <div className="text-sm text-gray-500">{service.duration}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
                About Rising Tide
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                At Rising Tide, we believe that beauty is an art form. Our expert team combines years of experience 
                with the latest techniques and premium products to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We create a serene, luxurious environment where every client feels pampered and leaves feeling 
                confident and beautiful. Your transformation is our passion.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-3xl font-bold text-[#d4af37] mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#d4af37] mb-2">5000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-2xl p-8 flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <p className="text-2xl font-serif italic leading-relaxed">"Where beauty meets excellence"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4">
              Book Your Appointment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to experience the Rising Tide difference? Get in touch with us today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <div className="w-8 h-px bg-[#d4af37] mb-3"></div>
                <h3 className="font-semibold text-lg mb-2 text-[#1a1a1a]">Phone</h3>
                <p className="text-gray-600">(267) 467-2228</p>
              </div>

              <div>
                <div className="w-8 h-px bg-[#d4af37] mb-3"></div>
                <h3 className="font-semibold text-lg mb-2 text-[#1a1a1a]">Email</h3>
                <p className="text-gray-600">info@risingtidesalon.com</p>
              </div>

              <div>
                <div className="w-8 h-px bg-[#d4af37] mb-3"></div>
                <h3 className="font-semibold text-lg mb-2 text-[#1a1a1a]">Location</h3>
                <p className="text-gray-600">6901 Bustleton Ave<br />Philadelphia, PA 19149</p>
              </div>

              <div>
                <div className="w-8 h-px bg-[#d4af37] mb-3"></div>
                <h3 className="font-semibold text-lg mb-2 text-[#1a1a1a]">Hours</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Monday: 9:30 AM - 7:00 PM</p>
                  <p>Tuesday: 9:30 AM - 7:00 PM</p>
                  <p>Wednesday: <span className="text-gray-400">Closed</span></p>
                  <p>Thursday: 9:30 AM - 7:00 PM</p>
                  <p>Friday: 9:30 AM - 7:00 PM</p>
                  <p>Saturday: 9:30 AM - 7:00 PM</p>
                  <p>Sunday: 9:30 AM - 7:00 PM</p>
                </div>
              </div>
              
              <div className="pt-4">
                <a 
                  href="https://book.squareup.com/appointments/kx5dwpxk04vvfe/location/LPEFK1CK9FV8R/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-8 py-4 bg-[#d4af37] text-white rounded-full hover:bg-[#b8941f] transition-all transform hover:scale-105 text-lg font-medium shadow-lg text-center"
                >
                  Book Online Now
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                    placeholder="(267) 467-2228"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your desired service..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-[#d4af37] text-white rounded-full hover:bg-[#b8941f] transition-all transform hover:scale-105 text-lg font-medium shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">Rising Tide</h3>
              <p className="text-gray-400">
                Premium hair salon and skin care services. Your beauty is our passion.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-[#d4af37] transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rising Tide Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
