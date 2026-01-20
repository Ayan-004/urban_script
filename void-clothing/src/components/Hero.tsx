import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
            <div className="absolute inset-0 z-0">
                {/* Abstract/Minimalist Background - can be replaced with an image later */}
                <div className="w-full h-full bg-[#f4f4f5] opacity-50" />
            </div>

            <div className="relative z-10 text-center space-y-8 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter uppercase"
                >
                    Urban
                    <br />
                    Script
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <a
                        href="#featured"
                        className="inline-block border border-black px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300 pointer-events-auto"
                    >
                        Shop Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
