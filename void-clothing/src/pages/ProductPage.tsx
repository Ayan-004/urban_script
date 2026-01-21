import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCartStore } from '../store/useCartStore';
import { useToastStore } from '../store/useToastStore';
import { motion } from 'framer-motion';

export const ProductPage = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    const addItem = useCartStore((state) => state.addItem);
    const addToast = useToastStore((state) => state.addToast);

    const handleAddToCart = () => {
        addItem(product!);
        addToast(`Added ${product!.name} to cart`);
    };

    if (!product) {
        return <div className="h-screen flex items-center justify-center">Product not found</div>;
    }

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="h-[50vh] md:h-screen bg-accent relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="h-auto md:h-screen flex flex-col justify-center px-8 md:px-24 py-12 bg-background text-foreground">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">{product.name}</h1>
                        <p className="text-2xl font-medium text-zinc-500">₹{product.price.toLocaleString('en-IN')}</p>
                    </div>

                    <div className="prose prose-zinc">
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Constructed from premium heavyweight cotton.
                            Designed for the modern urban environment. quality, durability, and minimalism.
                            Features a relaxed fit with dropped shoulders and raw hem details.
                            <br /><br />
                            Material: 100% Organic Cotton.<br />
                            Made in India.
                        </p>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="w-full md:w-auto px-12 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors duration-300"
                    >
                        Add to Cart
                    </button>
                </motion.div>
            </div>
        </div>
    );
};
