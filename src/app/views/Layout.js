import React from 'react';
import styles from './styles.module.css';
import '../assets/css/reset.css';

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  render() {
    return (
      <div className={styles.appContainer}>
        <div className={styles.appContent}>{this.props.children}</div>
      </div>
    );
  }
});

export default Layout;
