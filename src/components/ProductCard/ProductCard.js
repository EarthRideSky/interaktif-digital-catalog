import React from 'react';
import styles from './ProductCard.module.css';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const ProductCard = ({ product }) => {
  if (!product) {
    return null; // Don't render if no product data is provided
  }

  const handleActionClick = () => {
    console.log(`Action triggered for ${product.id}:`, product.callToAction);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.images.main} alt={product.name} className={styles.productImage} />
        <button className={styles.actionButton} onClick={handleActionClick}>
          <PlusCircleIcon className={styles.actionIcon} />
        </button>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.brand}>{product.brand}</p>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>{product.pricing.currentPrice.toLocaleString('tr-TR')} {product.pricing.currency}</span>
          {product.pricing.originalPrice && (
            <span className={styles.originalPrice}>{product.pricing.originalPrice.toLocaleString('tr-TR')} {product.pricing.currency}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;