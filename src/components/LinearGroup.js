import classNames from 'classnames';
import Immutable from 'immutable';
import React from 'react';
import styles from './LinearGroup.scss';

class LinearGroup extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    hasOuterSpacing: React.PropTypes.bool,
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
      hasOuterSpacing,
      orientation,
      spacing,
    } = this.props;

    const childList = Immutable.List(React.Children.toArray(children));

    return (
      <div
        className={classNames(
          styles.container,
          styles[`container--${orientation}`],
          className
        )}
      >
        {childList.map((child, i) => {
          return React.cloneElement(child, {
            className: classNames(styles.child, child.props.className),
            style: {
              [orientation === 'vertical' ? 'marginTop' : 'marginLeft']:
                (i !== 0 || hasOuterSpacing) && spacing,
              [orientation === 'vertical' ? 'marginBottom' : 'marginRight']:
                hasOuterSpacing && i === childList.size && spacing,
              ...child.props.style,
            },
          });
        })}
      </div>
    ); 
  }
}

export default LinearGroup; 
