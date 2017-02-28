import React from 'react';
import styles from './styles.module.css';
import Logo from './../../components/logo';
import Arrow from './../../components/arrow';

import ParallaxPage from './../../components/parallaxPage';
import ParallaxScrollLayer from './../../components/react-parallax-utilities/parallax-multiDirectional-layer';
import ParallaxMouseMove from './../../components/react-parallax-utilities/parallax-mouseMove-layer';

const Menu = require('react-burger-menu').slide;

import Pandora from '../Pandora';

const IndexPage = () => (
    <div>
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
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
      <div className={styles.pageContainer}>
        <div className={styles.textContainer} >
         <p>TakoTomago</p>
         <br/>
         <p>LA</p>
          <br/>
         <p>Soundcloud</p>
         <br/>
         <p>Facebook</p>
         <br/>
        </div>
      </div>
    </div>

);

export default IndexPage;
