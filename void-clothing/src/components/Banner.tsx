import { motion } from 'framer-motion';

export const Banner = () => {
    return (
        <div className="w-full bg-black text-white py-3 overflow-hidden whitespace-nowrap border-y border-white/10 relative z-20">
            {/* 
              We need a container that is wide enough to scroll. 
              We'll duplicate the text enough times to ensure a smooth loop.
            */}
            <motion.div
                className="flex items-center gap-8 text-sm font-bold tracking-widest uppercase"
                animate={{ x: [0, -1000] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                }}
            >
                {/* Content repeated multiple times for seamless loop */}
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="flex items-center gap-8">
                        <span>Free Shipping Worldwide</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>New Collection Dropping Soon</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>Limited Stock Available</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    </span>
                ))}
            </motion.div>
        </div>
    );
};
