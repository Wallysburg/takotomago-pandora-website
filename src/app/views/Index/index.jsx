import React from 'react';
import styles from './styles.module.css';
import Logo from './../../components/logo';
import Arrow from './../../components/arrow';

import ParallaxPage from './../../components/parallaxPage';
import ParallaxScrollLayer from './../../components/react-parallax-utilities/parallax-multiDirectional-layer';
import ParallaxMouseMove from './../../components/react-parallax-utilities/parallax-mouseMove-layer';

import Pandora from '../Pandora';

const IndexPage = () => (
    <div>
      <div className={styles.pageContainer}>
        <div className={styles.logoContainer} >
            <ParallaxMouseMove movementStrength={40}>
              <ParallaxScrollLayer className={styles.logo} scrollDirection={'down'} contentSpeedDivision={2.5}>
                <Logo/>
              </ParallaxScrollLayer>
            </ParallaxMouseMove>
        </div>
        <div className={styles.arrowContainer} >
          <Arrow/>
        </div>
      </div>
      <Pandora/>
      <div className={styles.pageContainer2}>
        <div className={styles.textContainer} >
         <p>Tako Tomago is an artist based in Los Angeles, California.</p>
         <br/>
         <p>You can listen to his music here.</p>
          <br/>
         <p>You can read about upcoming releases here.</p>
         <br/>
         <p>You can talk to him here.</p>
         <br/>
        </div>
      </div>
    </div>

);

export default IndexPage;
