import classNames from 'classnames';
import React from 'react';
import styles from './ConstraintComponent.scss';

class ConstraintComponent extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    maxWidth: React.PropTypes.number.isRequired,
  };
  
  static defaultProps = {
    maxWidth: 1100,
  };
  
  render() {
    const { children, className, maxWidth } = this.props;
    
    return (
      <div className={classNames(styles.container, className)}>
        {React.cloneElement(children, {
          className: classNames(styles.child, children.props.className),
          style: {
            maxWidth,
            ...children.props.style,
          },
        })}
      </div>
    );
  }
}

export default ConstraintComponent;
