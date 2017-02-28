import React from 'react';
import styles from './styles.module.css';
import parallaxMouseMoveLayer from './../react-parallax-utilities/parallax-mouseMove-layer';

const ParallaxPage = () => (
  <div className={styles.container}>
    <parallaxMouseMoveLayer className={styles.layer1}>
      <parallaxMouseMoveLayer className={styles.layer2}>
        <parallaxMouseMoveLayer className={styles.layer3}>
        </parallaxMouseMoveLayer>
      </parallaxMouseMoveLayer>
    </parallaxMouseMoveLayer>

  </div>
);

export default ParallaxPage;
