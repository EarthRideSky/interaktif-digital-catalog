import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

/**
 * A stateless UI component for catalog navigation.
 * Displays navigation buttons and the current page status.
 *
 * @param {object} props - The component props.
 * @param {number} props.currentPage - The current page number to display.
 * @param {number} props.totalPages - The total number of pages in the catalog.
 * @param {function} props.onNext - Callback function triggered on 'Next' button click.
 * @param {function} props.onPrev - Callback function triggered on 'Previous' button click.
 * @param {boolean} props.isNextDisabled - Determines if the 'Next' button is disabled.
 * @param {boolean} props.isPrevDisabled - Determines if the 'Previous' button is disabled.
 */
const NavigationControls = ({ currentPage, totalPages, onNext, onPrev, isNextDisabled, isPrevDisabled }) => {
    // Base classes for navigation buttons for consistency.
    const buttonBaseClasses = 'p-2 rounded-full transition-colors duration-300 ease-in-out';
    // Classes applied when a button is active (not disabled).
    const buttonActiveClasses = 'text-accent hover:bg-accent hover:text-primary-dark';
    // Classes applied when a button is disabled.
    const buttonDisabledClasses = 'opacity-40 cursor-not-allowed text-gray-500';

    return (
        <div className="fixed bottom-0 left-0 w-full p-4 bg-primary-dark/80 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Previous Page Button */}
                <button
                    onClick={onPrev}
                    disabled={isPrevDisabled}
                    className={`${buttonBaseClasses} ${isPrevDisabled ? buttonDisabledClasses : buttonActiveClasses}`}
                    aria-label="Previous Page"
                >
                    <ArrowLeftIcon className="h-6 w-6" />
                </button>

                {/* Page Number Display */}
                <div className="text-text-dark-bg font-mono tracking-widest text-sm">
                    {currentPage} / {totalPages}
                </div>

                {/* Next Page Button */}
                <button
                    onClick={onNext}
                    disabled={isNextDisabled}
                    className={`${buttonBaseClasses} ${isNextDisabled ? buttonDisabledClasses : buttonActiveClasses}`}
                    aria-label="Next Page"
                >
                    <ArrowRightIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default NavigationControls;