import classNames from 'classnames';
import Immutable from 'immutable';
import React from 'react';
import styles from './LinearGroup.scss';

class LinearGroup extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    orientation: React.PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
    spacing: React.PropTypes.number.isRequired,
  };
  
  static defaultProps = {
    spacing: 0,
  };
  
  render() {
    const {
      children,
      className,
      orientation,
      spacing,
    } = this.props;

    return (
      <div
        className={classNames(
          styles.container,
          styles[`container--${orientation}`],
          className
        )}
      >
        {Immutable.List(React.Children.toArray(children)).map((child, i) => {
          return React.cloneElement(child, {
            className: classNames(styles.child, child.props.className),
            style: {
              [orientation === 'vertical' ? 'marginTop' : 'marginLeft']: i !== 0 && spacing,
              ...child.props.style,
            },
          });
        })}
      </div>
    ); 
  }
}

export default LinearGroup; 
