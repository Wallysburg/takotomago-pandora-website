import React from 'react';

import styles from './styles.module.css';

// import logoImage from './img/Logo.png';

const Logo = () => (
      <div className={styles.logoContainer}>
        <img className={styles.logoImage} src={'img/Logo.png'} />
      </div>
);

export default Logo;
