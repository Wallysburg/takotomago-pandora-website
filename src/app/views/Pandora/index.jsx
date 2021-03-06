import React from 'react';
import styles from './styles.module.css';
import Iframe from './../../components/iframe';

const PandoraVideo = () => (
  <div className={styles.page}>
    <div className={styles.background}>

        <Iframe iframe = "iframe"
        src={'https://www.youtube.com/embed/DBojgkka1j8?controls=0&showinfo=0&rel=0&autoplay=1&loop=1'}
        height={'100%'}
        width={'100%'}
        />
    </div>
  </div>
);

export default PandoraVideo;
