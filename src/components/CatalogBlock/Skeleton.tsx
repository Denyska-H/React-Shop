import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './Skeleton.module.scss';

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className={styles.skeleton}
    speed={2}
   
    backgroundColor="#e1e1e1"
    foregroundColor="#e8e8e8"
    {...props}>
    <rect x="0" y="0" rx="0" ry="0" width="450" height="653" />
    <rect x="0" y="664" rx="11" ry="11" width="453" height="13" />
    <rect x="0" y="694" rx="11" ry="11" width="453" height="13" />
    <rect x="0" y="724" rx="11" ry="11" width="453" height="13" />
  </ContentLoader>
);

export default Skeleton;
