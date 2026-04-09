import React from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { categories, products } from '../data';

export function CategoryPage() {
  const { id } = useParams();
  const category = categories.find(c => c.id === id);
  const categoryProducts = products.filter(p => p.categoryId === id);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-light tracking-[0.2em] uppercase text-zinc-900 mb-6">Collection Not Found</h2>
        <Link to="/" className="text-sm font-bold tracking-widest uppercase border-b border-zinc-900 pb-1">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen pt-20">
      {/* Category Header */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-light tracking-[0.3em] uppercase text-zinc-900 mb-6"
        >
          {category.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed"
        >
          {category.description}
        </motion.p>
      </section>

      {/* Product Grid */}
      <section className="max-w-[1600px] mx-auto px-6 pb-32">
        {categoryProducts.length === 0 ? (
          <div className="text-center py-32 text-zinc-400 uppercase tracking-widest text-sm">
            New pieces arriving soon.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {categoryProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-zinc-100 aspect-[3/4] mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay for quick action */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-black text-xs font-bold tracking-widest uppercase py-3 px-8 shadow-sm">
                      View Details
                    </span>
                  </div>
                </Link>
                
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-lg font-light tracking-wide uppercase text-zinc-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-zinc-400 tracking-widest uppercase mt-auto">
                    Contact for Pricing
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
