import React, { useMemo } from 'react';
import useCatalogData from '../../hooks/useCatalogData';
import ProductCard from '../../components/ProductCard/ProductCard';
const ProductGridPageLayout = ({ content }) => {
    const { title, productIds } = content;
    const { products: allProducts } = useCatalogData();
    const pageProducts = useMemo(() => {
        if (!productIds || !allProducts) return [];
        return allProducts.filter(product => productIds.includes(product.id));
    }, [productIds, allProducts]);
    return (
        <div className="w-full h-full p-8 md:p-16 overflow-y-auto bg-primary-light">
            <h2 className="font-display text-4xl font-bold text-text-light-bg mb-12 text-center">
                {title}
            </h2>
            <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {pageProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default ProductGridPageLayout;