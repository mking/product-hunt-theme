import ButtonLink from './ButtonLink';
import classNames from 'classnames';
import ConstraintComponent from './ConstraintComponent';
import LinearGroup from './LinearGroup';
import React from 'react';
import SearchContainer from '../containers/SearchInputContainer';
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
      <ConstraintComponent
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
            <SearchContainer />
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
      </ConstraintComponent>
    );
  }
}

export default NavHeader;
