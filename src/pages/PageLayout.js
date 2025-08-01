import React from 'react';
import CoverPageLayout from './layouts/CoverPageLayout';
import ProductGridPageLayout from './layouts/ProductGridPageLayout';
import SplitImagePageLayout from './layouts/SplitImagePageLayout';
import CampaignBannerPageLayout from './layouts/CampaignBannerPageLayout';
import ErrorLayout from './layouts/ErrorLayout';
const PageLayout = ({ page }) => {
    switch (page.layoutType) {
        case 'cover_page':
            return <CoverPageLayout content={page.content} />;
        case 'product_grid_2':
        case 'product_grid_4':
            return <ProductGridPageLayout page={page} />;
        case 'split_image_page':
            return <SplitImagePageLayout content={page.content} />;
        case 'campaign_banner_page':
            return <CampaignBannerPageLayout content={page.content} />;
        default:
            return <ErrorLayout layoutType={page.layoutType} />;
    }
};
export default PageLayout;