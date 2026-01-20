import { Link } from 'react-router-dom';
import type { Product } from '../store/useCartStore';

interface ProductGridProps {
    products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
    return (
        <div id="featured" className="py-24 px-6 md:px-12 bg-background text-foreground">
            <h2 className="text-4xl font-bold tracking-tighter uppercase mb-12">Latest Drops</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                {products.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`} className="group block">
                        <div className="relative aspect-[3/4] overflow-hidden bg-accent mb-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay or Badge could go here */}
                        </div>
                        <div className="flex justify-between items-baseline">
                            <h3 className="text-lg font-bold uppercase tracking-tight group-hover:underline decoration-1 underline-offset-4">{product.name}</h3>
                            <span className="text-sm font-medium text-zinc-500">₹{product.price.toLocaleString('en-IN')}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
