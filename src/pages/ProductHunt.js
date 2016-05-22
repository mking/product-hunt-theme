import classNames from 'classnames';
import NavHeader from '../components/NavHeader';
import React from 'react';
import styles from './ProductHunt.scss';

class ProductHunt extends React.Component {
  static propTypes = {
    baseURL: React.PropTypes.string,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
  };

  render() {
    const {
      baseURL,
      children,
      className,
    } = this.props;

    return (
      <div className={classNames(styles.container, className)}>
        <NavHeader
          baseURL={baseURL}
          className={styles.header}
        />
        {React.cloneElement(children, {
          className: classNames(styles.child, children.props.className),
        })}
      </div>
    );
  }
}

export default ProductHunt; 
