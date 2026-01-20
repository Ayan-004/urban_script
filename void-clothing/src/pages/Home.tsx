import { Hero } from '../components/Hero';
import { Banner } from '../components/Banner';
import { ProductGrid } from '../components/ProductGrid';
import { products } from '../data/products';

export const Home = () => {
    return (
        <main>
            <Hero />
            <Banner />
            <ProductGrid products={products} />
        </main>
    );
};
