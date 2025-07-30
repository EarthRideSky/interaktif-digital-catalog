import catalogData from '../data/catalog_data.json';

/**
 * Custom hook to provide static catalog data.
 * This hook centralizes data access by importing the JSON file directly
 * and returning it for use in any component.
 * @returns {object} The complete, parsed catalog data object.
 */
const useCatalogData = () => {
    return catalogData;
};

export default useCatalogData;