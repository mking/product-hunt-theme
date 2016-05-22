import classNames from 'classnames';
import isNil from 'lodash/isNil';
import React from 'react';
import styles from './ButtonLink.scss';

class ButtonLink extends React.Component {
  static propTypes = {
    buttonStyle: React.PropTypes.oneOf(['link', 'outline', 'solid', 'text']).isRequired,
    className: React.PropTypes.string,
    color: React.PropTypes.oneOf(['black', 'gray']).isRequired,
    contentClassName: React.PropTypes.string,
    href: React.PropTypes.string,
    icon: React.PropTypes.node,
    style: React.PropTypes.object,
    target: React.PropTypes.string,
    title: React.PropTypes.node,
    type: React.PropTypes.string,
  };
  
  static defaultProps = {
    type: 'button',
  };

  render() {
    const {
      buttonStyle,
      className,
      color,
      href,
      icon,
      style,
      target,
      title,
      type,
    } = this.props;

    const component = href ? 'a' : 'button';

    return React.createElement(component, {
      children: (
        <div className={styles.content}>
          {icon && React.cloneElement(icon, {
            className: classNames(
              styles.icon,
              !isNil(title) && styles['icon--title'],
              icon.props.className
            ),
          })}
          <span className={styles.title}>
            {title}
          </span>
        </div>
      ),
      className: classNames(
        styles.buttonLink,
        styles[`buttonLink--${color}`],
        styles[`buttonLink--${buttonStyle}`],
        className
      ),
      href,
      style,
      target,
      type,
    });
  }
}

export default ButtonLink; 
