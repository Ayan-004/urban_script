import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-6 md:px-12 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div className="space-y-4">
                    <Link to="/" className="text-2xl font-bold tracking-tighter uppercase block">
                        Urban Script
                    </Link>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Redefining streetwear with a minimalist approach. Quality fabrics, timeless cuts, and void-inspired aesthetics.
                    </p>
                </div>

                {/* Shop Links */}
                <div>
                    <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Shop</h3>
                    <ul className="space-y-2 text-sm text-zinc-400">
                        <li><Link to="/" className="hover:text-white transition-colors">All Products</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">New Arrivals</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">Accessories</Link></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Support</h3>
                    <ul className="space-y-2 text-sm text-zinc-400">
                        <li><Link to="/" className="hover:text-white transition-colors">FAQ</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">Contact Us</Link></li>
                        <li><Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Newsletter / Social */}
                <div>
                    <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Connect</h3>
                    <div className="flex gap-4 mb-6">
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Mail size={20} /></a>
                    </div>
                    <p className="text-zinc-500 text-xs">
                        © {new Date().getFullYear()} Urban Script. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};
