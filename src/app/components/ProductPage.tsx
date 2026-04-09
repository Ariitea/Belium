import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X } from 'lucide-react';
import { products } from '../data';

export function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-light tracking-[0.2em] uppercase text-zinc-900 mb-6">Product Not Found</h2>
        <Link to="/" className="text-sm font-bold tracking-widest uppercase border-b border-zinc-900 pb-1">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-20 pb-32">
      {/* Breadcrumb */}
      <nav className="max-w-[1600px] mx-auto px-6 py-6 flex items-center text-xs tracking-widest uppercase text-zinc-400">
        <Link to="/" className="hover:text-zinc-900 transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <Link to={`/category/${product.categoryId}`} className="hover:text-zinc-900 transition-colors">{product.categoryId}</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <span className="text-zinc-900">{product.name}</span>
      </nav>

      <div className="max-w-[1600px] mx-auto px-6 flex flex-col lg:flex-row gap-16 xl:gap-24">
        {/* Product Images */}
        <div className="flex-1 space-y-4">
          {product.images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-zinc-100 aspect-[3/4] overflow-hidden"
            >
              <img 
                src={img} 
                alt={`${product.name} view ${idx + 1}`} 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          ))}
        </div>

        {/* Product Details (Sticky) */}
        <div className="flex-1 lg:w-1/3 xl:w-1/4">
          <div className="sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-zinc-900 mb-6">
                {product.name}
              </h1>
              
              <div className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-10 pb-6 border-b border-zinc-200">
                Contact Client Services for Pricing
              </div>

              <div className="mb-10 text-zinc-600 font-light leading-relaxed text-sm">
                <p className="mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-zinc-400">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Action */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-zinc-900 text-white py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-black transition-colors mb-6 shadow-xl shadow-black/10"
              >
                Inquire About Piece
              </button>

              <div className="text-xs text-zinc-500 uppercase tracking-widest text-center leading-loose">
                <p>Complimentary Shipping & Returns</p>
                <p>Bespoke Packaging Included</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white w-full max-w-lg relative flex flex-col shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-zinc-900 transition-colors z-10"
              >
                <X className="w-6 h-6" strokeWidth={1} />
              </button>

              <div className="p-10 md:p-14 border-b border-zinc-100 text-center relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900" />
                 <h2 className="text-xl font-light tracking-[0.2em] uppercase text-zinc-900 mb-2">
                   Client Services
                 </h2>
                 <p className="text-xs text-zinc-500 tracking-widest uppercase">
                   Inquiry: {product.name}
                 </p>
              </div>

              <form className="p-10 md:p-14 space-y-8" onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your inquiry. A Client Advisor will contact you shortly.');
                setIsModalOpen(false);
              }}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase text-zinc-400 mb-3">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-transparent border-b border-zinc-300 py-2 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                    />
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
                    <label htmlFor="phone" className="block text-xs font-bold tracking-widest uppercase text-zinc-400 mb-3">Phone (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-transparent border-b border-zinc-300 py-2 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-zinc-400 mb-3">Message</label>
                    <textarea 
                      id="message" 
                      rows={3}
                      defaultValue={`I am interested in purchasing the ${product.name} and would like to request pricing and availability information.`}
                      className="w-full bg-transparent border-b border-zinc-300 py-2 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-zinc-900 text-white py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-black transition-colors"
                  >
                    Submit Inquiry
                  </button>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest text-center mt-6 leading-relaxed">
                    By submitting, you agree to our Privacy Policy. Our team typically responds within 24 hours.
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
