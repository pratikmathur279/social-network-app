import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Tab.css';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { 
      onClick,
      props: {
        activeTab,
        label,
        count
      },
    } = this;

    let className = 'tablistitem';

    if (activeTab === label) {
      className += ' tablistactive';
    }

    return (
      <p className={[classes.tablistitem, activeTab===label ? classes.tablistactive  : ''].join(' ')} onClick={onClick}>
        {label} <span>{count}</span>
      </p>
    );
  }
}


export default Tab;