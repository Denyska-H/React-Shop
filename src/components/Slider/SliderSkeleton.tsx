import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './SliderSkeleton.module.scss';

const SliderSkeleton: React.FC = (props) => {
  return (
    <ContentLoader
      className={styles.skeletonSlider}
      speed={2}
      width={700}
      height={1000}
      viewBox="0 0 700 1000"
      backgroundColor="#e1e1e1"
      foregroundColor="#e8e8e8"
      {...props}>
      <rect x="1" y="0" rx="0" ry="0" width="700" height="1000" />
    </ContentLoader>
  );
};

export default SliderSkeleton;
