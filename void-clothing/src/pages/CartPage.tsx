import { useCartStore } from '../store/useCartStore';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartPage = () => {
    const { items, removeItem, subtotal } = useCartStore();
    const total = subtotal();

    if (items.length === 0) {
        return (
            <div className="min-h-screen pt-32 px-6 md:px-12 flex flex-col items-center justify-center space-y-6">
                <h1 className="text-4xl font-bold uppercase tracking-tighter">Cart Empty</h1>
                <Link to="/" className="border-b border-white pb-1 hover:text-zinc-400 transition-colors">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 px-6 md:px-12 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12">Your Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-6 p-4 border border-zinc-100 bg-white text-black items-center">
                            <div className="w-24 h-32 bg-accent shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold uppercase tracking-tight">{item.name}</h3>
                                    <button onClick={() => removeItem(item.id)} className="text-zinc-400 hover:text-black transition-colors">
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                                <p className="text-zinc-500 mb-2">₹{item.price.toLocaleString('en-IN')}</p>
                                <div className="text-sm font-medium">Qty: {item.quantity}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-zinc-50 text-black p-8 sticky top-32">
                        <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">Summary</h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-lg">
                                <span className="text-zinc-600">Subtotal</span>
                                <span className="font-bold">₹{total.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between text-lg">
                                <span className="text-zinc-600">Shipping</span>
                                <span className="text-sm uppercase">Calculated at checkout</span>
                            </div>
                        </div>

                        <div className="border-t border-black pt-6 mb-8 flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>₹{total.toLocaleString('en-IN')}</span>
                        </div>

                        <button className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
