import React, { Component, PropTypes } from 'react';

export default class ParallaxGroup extends Component {


  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const parallaxGroupStyle = {
      position: 'relative',
      transformStyle: 'preserve-3d',
    };

    return (
      <div className={this.props.className} style={parallaxGroupStyle}>
        { this.props.children }
      </div>
    );
  }
}
