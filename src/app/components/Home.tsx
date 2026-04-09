import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { categories } from '../data';

export function Home() {
  const heroImage = "https://images.unsplash.com/photo-1768825210694-85b9ccef2260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzc1NzM1NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src={heroImage} 
          alt="Spring/Summer Collection" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        <div className="relative z-20 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.3em] uppercase mb-6 drop-shadow-lg"
          >
            The New Classic
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-white text-sm md:text-base tracking-widest uppercase mb-12"
          >
            Spring / Summer Collection
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              to="/category/women"
              className="inline-block bg-white text-black px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
            >
              Discover
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-zinc-900">
            Explore Collections
          </h2>
          <div className="w-12 h-[1px] bg-zinc-300 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {categories.map((category, index) => (
            <Link 
              key={category.id} 
              to={`/category/${category.id}`}
              className="group relative block overflow-hidden aspect-[4/5] md:aspect-square bg-zinc-100"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/30" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-light tracking-[0.2em] uppercase mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm tracking-widest max-w-xs hidden md:block">
                    {category.description}
                  </p>
                </div>
                <div className="text-white text-sm tracking-widest uppercase pb-1 border-b border-transparent group-hover:border-white transition-colors">
                  Explore
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Service Highlight */}
      <section className="bg-zinc-100 py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-zinc-900 mb-6">
            Bespoke Client Experience
          </h2>
          <p className="text-zinc-600 font-light leading-relaxed mb-10 max-w-lg">
            Our pieces are an investment in timeless elegance. We invite you to contact our Client Advisors to discuss pricing, availability, and personalized styling recommendations.
          </p>
          <Link 
            to="/contact"
            className="inline-block border border-zinc-900 text-zinc-900 px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-zinc-900 hover:text-white transition-all duration-300"
          >
            Contact Advisor
          </Link>
        </div>
      </section>
    </div>
  );
}
