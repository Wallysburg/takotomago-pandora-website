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
         <p>Tako Tomago is an artist based in <a href="https://www.google.com/maps/place/Los+Angeles,+CA/@34.0201812,-118.6919205,10z/data=!3m1!4b1!4m5!3m4!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0522342!4d-118.2436849">LA</a>.</p>
         <br/>
         <p>You can listen to his music <a href="http://soundcloud.com/takotomago">Here</a>.</p>
          <br/>
         <p>You can read about upcoming releases <a href="http://soundcloud.com/takotomago">Here</a>.</p>
         <br/>
         <p>Upcoming <a href="http://twitter.com/takotomago">Releases</a>.</p>
         <br/>
         <p>You can talk to him <a href="mailto:takotomago@gmail.com?Subject=Hello">Here</a>.</p>
         <br/>
        </div>
      </div>
    </div>

);

export default IndexPage;
