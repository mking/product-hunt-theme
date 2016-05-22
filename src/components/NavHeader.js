import ButtonLink from './ButtonLink';
import classNames from 'classnames';
import LinearGroup from './LinearGroup';
import React from 'react';
import SizeConstraint from './SizeConstraint';
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
      <SizeConstraint
        className={classNames(styles.header, className)}
      >
        <div className={styles.headerContent}>
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
              icon={<i
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
      </SizeConstraint>
    );
  }
}

export default NavHeader;
