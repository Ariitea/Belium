import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, Search } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { categories } from '../data';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#FAFAFA]/90 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -ml-2 text-zinc-900"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Desktop Nav (Left) */}
          <nav className="hidden md:flex items-center space-x-8 flex-1">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                to={`/category/${cat.id}`}
                className="text-sm font-medium tracking-wide uppercase hover:text-zinc-500 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          {/* Logo (Center) */}
          <Link to="/" className="text-2xl tracking-[0.2em] font-bold uppercase flex-shrink-0">
            Belium
          </Link>

          {/* Actions (Right) */}
          <div className="flex items-center justify-end space-x-6 flex-1">
            <button className="text-zinc-900 hover:text-zinc-500 transition-colors" aria-label="Search">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            {/*<Link to="/contact" className="hidden md:block text-sm font-medium tracking-wide uppercase hover:text-zinc-500 transition-colors">
              Contact
            </Link>*/}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <Link to="/" className="text-2xl tracking-[0.2em] font-bold uppercase">
                  Belium
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-zinc-900"
                >
                  <X className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </div>
              
              <nav className="flex flex-col space-y-6 flex-1">
                {categories.map((cat) => (
                  <Link 
                    key={cat.id} 
                    to={`/category/${cat.id}`}
                    className="text-3xl font-light tracking-wide uppercase"
                  >
                    {cat.name}
                  </Link>
                ))}
                <div className="pt-8 mt-8 border-t border-zinc-200">
                  <Link 
                    to="/contact"
                    className="text-lg font-medium tracking-wide uppercase text-zinc-500"
                  >
                    Client Services
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-16 px-6 mt-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Belium</h3>
            <p className="text-sm text-zinc-500 max-w-xs">
              Luxury trusted by connoisseurs worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-6 text-zinc-900">Collections</h4>
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.id}`} className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-6 text-zinc-900">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Boutique Appointments</a></li>
              <li><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Care Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-6 text-zinc-900">Newsletter</h4>
            <p className="text-sm text-zinc-500 mb-4">Subscribe to receive updates on new arrivals and exclusive events.</p>
            <div className="flex border-b border-zinc-300 pb-2">
              <input 
                type="email" 
                placeholder="email address" 
                className="bg-transparent text-sm w-full focus:outline-none placeholder-zinc-400"
              />
              <button className="text-xs font-bold tracking-widest uppercase text-zinc-900 ml-4 hover:text-zinc-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto mt-16 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Belium. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-900 transition-colors">Legal</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
