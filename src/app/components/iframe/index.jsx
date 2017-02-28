import React from 'react';

const IframeComponent = (props) => {

  const Iframe = props.iframe;

  return (
    <div>
      <Iframe src={props.src} height={props.height} width={props.width} allowFullScreen/>
    </div>
  );
};

IframeComponent.propTypes = {
  iframe: React.PropTypes.any,
  src: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string
};

export default IframeComponent;
