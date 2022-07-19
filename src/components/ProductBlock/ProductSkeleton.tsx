import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './ProductSkeleton.module.scss';

const ProductSkeleton: React.FC = (props) => {
  return (
    <ContentLoader
      className={styles.product}
      speed={2}
      width={1500}
      height={1000}
      viewBox="0 0 1500 1000"
      backgroundColor="#e1e1e1"
      foregroundColor="#e8e8e8"
      {...props}>
      <rect x="0" y="0" rx="0" ry="0" width="722" height="1030" />
      <rect x="780" y="0" rx="0" ry="0" width="214" height="30" />
      <rect x="780" y="51" rx="0" ry="0" width="123" height="18" />
      <rect x="780" y="90" rx="0" ry="0" width="710" height="50" />
      <rect x="780" y="163" rx="0" ry="0" width="341" height="50" />
      <rect x="1151" y="163" rx="0" ry="0" width="341" height="50" />
      <rect x="780" y="232" rx="0" ry="0" width="123" height="18" />
      <rect x="780" y="275" rx="0" ry="0" width="710" height="19" />
      <rect x="780" y="318" rx="0" ry="0" width="710" height="19" />
    </ContentLoader>
  );
};

export default ProductSkeleton;
