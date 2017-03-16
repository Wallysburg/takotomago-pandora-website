import React, { Component, PropTypes } from 'react';

import styles from './styles.module.css';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlideIndex: 0,
    };
    this.changeSlide = this.changeSlide.bind(this);
  }

  changeSlide() {
    this.setState({
      activeSlideIndex: this.props.images.length - 1 === this.state.activeSlideIndex ? 0 : this.state.activeSlideIndex + 1,
    });
  }

  render() {
    return (
      <div className={styles.macbook}>
        <a className={styles.content} onClick={this.changeSlide} tabIndex={-1}>
          {this.props.images.map((image, index) => (
            <img
              src={image.src}
              key={image.description}
              alt={`${image.description} page screenshot ${index}`}
              className={this.state.activeSlideIndex === index ? styles.active : null}
            />
          ))}
          <span className={styles.button}>
            <img src={'img/right-arrow.svg'} alt="Arrow icon" />
          </span>
        </a>
      </div>
    );
  }
}
