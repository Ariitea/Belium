import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-20">
      {/* Header */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto border-b border-zinc-200">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-light tracking-[0.3em] uppercase text-zinc-900 mb-6"
        >
          Client Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed text-sm md:text-base tracking-widest uppercase"
        >
          We are here to assist you with inquiries, appointments, and styling advice.
        </motion.p>
      </section>

      {/* Content */}
      <section className="max-w-[1600px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-16"
          >
            <div>
              <h2 className="text-xl font-light tracking-[0.2em] uppercase text-zinc-900 mb-8 pb-4 border-b border-zinc-200">
                Contact Information
              </h2>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-6 text-zinc-400 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-900 mb-2">Telephone</h3>
                    <p className="text-zinc-500 text-sm tracking-widest font-light">+1 (800) 123-4567</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-6 text-zinc-400 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-900 mb-2">Email</h3>
                    <p className="text-zinc-500 text-sm tracking-widest font-light">clientservices@atelier.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 mr-6 text-zinc-400 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-900 mb-2">Hours</h3>
                    <p className="text-zinc-500 text-sm tracking-widest font-light">Monday - Friday: 9AM - 8PM EST</p>
                    <p className="text-zinc-500 text-sm tracking-widest font-light">Saturday: 10AM - 6PM EST</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-light tracking-[0.2em] uppercase text-zinc-900 mb-8 pb-4 border-b border-zinc-200">
                Flagship Boutique
              </h2>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-6 text-zinc-400 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-900 mb-2">New York</h3>
                    <p className="text-zinc-500 text-sm tracking-widest font-light leading-relaxed">
                      727 5th Avenue<br/>
                      New York, NY 10022<br/>
                      United States
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-10 md:p-14 shadow-sm border border-zinc-100"
          >
            <h2 className="text-xl font-light tracking-[0.2em] uppercase text-zinc-900 mb-8 text-center">
              Send an Inquiry
            </h2>
            <form className="space-y-8" onSubmit={(e) => {
              e.preventDefault();
              alert('Message sent successfully. Our team will contact you soon.');
              e.currentTarget.reset();
            }}>
              <div>
                <label htmlFor="inquiry-type" className="block text-xs font-bold tracking-widest uppercase text-zinc-400 mb-3">Topic</label>
                <select 
                  id="inquiry-type" 
                  className="w-full bg-transparent border-b border-zinc-300 py-3 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors uppercase tracking-widest appearance-none"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select Inquiry Type</option>
                  <option value="pricing">Pricing & Availability</option>
                  <option value="appointment">Book Appointment</option>
                  <option value="styling">Styling Advice</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-bold tracking-widest uppercase text-zinc-400 mb-3">First Name</label>
                  <input 
                    type="text" 
                    id="first-name" 
                    required
                    className="w-full bg-transparent border-b border-zinc-300 py-2 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-bold tracking-widest uppercase text-zinc-400 mb-3">Last Name</label>
                  <input 
                    type="text" 
                    id="last-name" 
                    required
                    className="w-full bg-transparent border-b border-zinc-300 py-2 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-zinc-400 mb-3">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-transparent border-b border-zinc-300 py-2 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-zinc-400 mb-3">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-zinc-300 py-2 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-zinc-900 text-white py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-black transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
