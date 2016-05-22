import ButtonLink from './ButtonLink';
import classNames from 'classnames';
import LinearGroup from './LinearGroup';
import React from 'react';
import styles from './NavHeader.scss';

class NavHeader extends React.Component {
  static propTypes = {
    baseURL: React.PropTypes.string,
    className: React.PropTypes.string,
  };
  
  render() {
    const {
      baseURL,
      className,
    } = this.props;
    
    return (
      <div className={classNames(styles.header, className)}>
        <LinearGroup
          orientation="horizontal"
          spacing={10}
        >
          <a
            className={styles.logoLink}
            href={baseURL}
          >
            <img
              className={styles.logoImage}
              src={require('../images/logo.svg')}
            />
          </a>
        </LinearGroup>
        <LinearGroup
          orientation="horizontal"
          spacing={10}
        >
          <ButtonLink
            buttonStyle="text"
            color="gray"
            title={<i
              className={classNames(
                'fa',
                'fa-ellipsis-h'
              )}
            />}
          />
          <ButtonLink
            buttonStyle="text"
            color="gray"
            href="/login"
            title="Login"
          />
        </LinearGroup>
      </div>
    );
  }
}

export default NavHeader;
