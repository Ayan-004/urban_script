import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export const Navbar = () => {
    const totalItems = useCartStore((state) => state.totalItems());

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-transparent pointer-events-none mix-blend-difference text-white">
            <div className="pointer-events-auto">
                <Link to="/" className="text-2xl font-bold tracking-tighter uppercase">
                    Urban Script
                </Link>
            </div>

            <div className="pointer-events-auto">
                <Link to="/cart" className="flex items-center gap-2 group">
                    <span className="text-sm font-medium hidden md:block group-hover:underline decoration-1 underline-offset-4">CART</span>
                    <div className="relative">
                        <ShoppingBag strokeWidth={1.5} size={24} />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">
                                {totalItems}
                            </span>
                        )}
                    </div>
                </Link>
            </div>
        </nav>
    );
};
