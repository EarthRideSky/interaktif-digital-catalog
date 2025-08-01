import React from 'react';
import CoverPageLayout from './layouts/CoverPageLayout';
import ProductGridPageLayout from './layouts/ProductGridPageLayout';
import ErrorLayout from './layouts/ErrorLayout';
const PageLayout = ({ page }) => {
    switch (page.layoutType) {
        case 'cover_page':
            return <CoverPageLayout content={page.content} />;
        case 'product_grid_2':
            return <ProductGridPageLayout content={page.content} />;
        default:
            return <ErrorLayout layoutType={page.layoutType} />;
    }
};
export default PageLayout;