import classNames from 'classnames';
import React from 'react';
import styles from './ButtonLink.scss';

class ButtonLink extends React.Component {
  static propTypes = {
    buttonStyle: React.PropTypes.oneOf(['link', 'outline', 'solid']),
    className: React.PropTypes.string,
    color: React.PropTypes.oneOf(['black', 'gray']),
    contentClassName: React.PropTypes.string,
    href: React.PropTypes.string,
    icon: React.PropTypes.node,
    target: React.PropTypes.string,
    title: React.PropTypes.node,
    type: React.PropTypes.string,
  };
  
  static defaultProps = {
    buttonStyle: 'outline',
    color: 'gray',
    type: 'button',
  };

  render() {
    const {
      buttonStyle,
      className,
      color,
      href,
      icon,
      target,
      title,
      type,
    } = this.props;

    const component = href ? 'a' : 'button';
    
    return React.createElement(component, {
      children: (
        <div className={styles.content}>
          {icon && React.cloneElement(icon, {
            className: classNames(styles.icon, icon.props.className),
          })}
          {title}
        </div>
      ),
      className: classNames(
        styles.buttonLink,
        styles[`buttonLink--${color}`],
        styles[`buttonLink--${buttonStyle}`],
        className
      ),
      href,
      target,
      type,
    });
  }
}

export default ButtonLink; 
