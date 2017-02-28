import React, { Component, PropTypes } from 'react';

export default class ParallaxContainer extends Component {


  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    perspective: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.perspective = this.props.perspective || '1px';
  }

  render() {
    const parallaxContainterStyle = {
      perspective: this.perspective,
      overflowX: 'hidden',
      overflowY: 'auto',
    };

    return (
      <div className={this.props.className} style={parallaxContainterStyle}>
        { this.props.children }
      </div>
    );
  }
}

