import React, { useState } from 'react';
import useCatalogData from '../hooks/useCatalogData';

// --- PLACEHOLDER COMPONENTS ---
// These will be replaced by actual components in subsequent steps.
const PageLayout = ({ page }) => (
  <div className="flex items-center justify-center h-full text-white text-2xl font-display">
    Rendering Page: {page.pageId} ({page.layoutType})
  </div>
);
const NavigationControls = (props) => (
  <div className="absolute bottom-0 left-0 w-full p-8 text-center text-white font-mono">
    Navigation Controls Placeholder
  </div>
);
// --- END PLACEHOLDERS ---

const CatalogContainer = () => {
    const { pages } = useCatalogData();
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    if (!pages || pages.length === 0) {
      return <div className="flex items-center justify-center h-screen text-accent font-bold text-2xl">Error: No pages found in catalog data.</div>;
    }

    const totalPages = pages.length;
    const currentPageData = pages[currentPageIndex];

    const goToNextPage = () => {
        setCurrentPageIndex(prevIndex => Math.min(prevIndex + 1, totalPages - 1));
    };

    const goToPreviousPage = () => {
        setCurrentPageIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <PageLayout page={currentPageData} />
            <NavigationControls
                currentPage={currentPageIndex + 1}
                totalPages={totalPages}
                onNext={goToNextPage}
                onPrev={goToPreviousPage}
                isNextDisabled={currentPageIndex >= totalPages - 1}
                isPrevDisabled={currentPageIndex <= 0}
            />
        </div>
    );
};

export default CatalogContainer;