import { AnimatePresence, motion } from 'framer-motion';
import { useToastStore } from '../store/useToastStore';
import { X } from 'lucide-react';

export const ToastContainer = () => {
    const { toasts, removeToast } = useToastStore();

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4 pointer-events-none">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="pointer-events-auto min-w-[300px] bg-black text-white p-4 border border-zinc-800 shadow-xl flex items-center justify-between"
                    >
                        <span className="text-sm font-medium tracking-wide">{toast.message}</span>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="text-zinc-400 hover:text-white transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
