import classNames from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';
import LinearGroup from './LinearGroup';
import React from 'react';
import styles from './NavSection.scss';

class NavSection extends React.Component {
  static propTypes = {
    activeLink: React.PropTypes.string,
    baseURL: React.PropTypes.string,
    className: React.PropTypes.string,
    section: ImmutablePropTypes.map.isRequired,
    style: React.PropTypes.object,
  };

  render() {
    const {
      activeLink,
      baseURL,
      className,
      section,
      style,
    } = this.props;

    return (
      <div
        className={classNames(styles.section, className)}
        style={style}
      >
        {section.get('name') && <div className={styles.header}>
          {section.get('name')}
        </div>}
        <LinearGroup
          className={styles.links}
          orientation="vertical"
          spacing={10}
        >
          {section.get('links').map((link, linkIndex) => {
            return (
              <a
                className={classNames(
                  styles.link,
                  activeLink === link.get('url') && styles['link--active']
                )}
                href={`${baseURL}${link.get('url')}`}
                key={linkIndex}
              >
                {link.get('name')}
              </a>
            );
          })}
        </LinearGroup>
      </div>
    );
  }
}

export default NavSection;
