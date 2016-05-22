import classNames from 'classnames';
import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import LinearGroup from './LinearGroup';
import React from 'react';
import styles from './NavSidebar.scss';

class NavSidebar extends React.Component {
  static propTypes = {
    activeLink: React.PropTypes.string,
    className: React.PropTypes.string,
    sections: ImmutablePropTypes.list.isRequired,
  };

  static defaultProps = {
    activeLink: '/',
    sections: Immutable.List([
      Immutable.Map({
        links: Immutable.List([
          Immutable.Map({
            name: 'Home',
            url: '/',
          }),
          Immutable.Map({
            name: 'Collections',
            url: '/collections',
          }),
          Immutable.Map({
            name: 'LIVE Chats',
            url: '/live',
          }),
          Immutable.Map({
            name: 'Shop',
            url: '/shop',
          }),
        ]),
      }),
      Immutable.Map({
        name: 'Categories',
        links: Immutable.List([
          Immutable.Map({
            name: 'Tech',
            url: '/tech',
          }),
          Immutable.Map({
            name: 'Games',
            url: '/games',
          }),
          Immutable.Map({
            name: 'Books',
            url: '/books',
          }),
          Immutable.Map({
            name: 'Podcasts',
            url: '/podcasts',
          }),
        ]),
      }),
      Immutable.Map({
        name: 'Topics',
        links: Immutable.List([
          Immutable.Map({
            name: 'Analytics',
            url: '/topics/analytics',
          }),
          Immutable.Map({
            name: 'Education',
            url: '/topics/education',
          }),
          Immutable.Map({
            name: 'Maps',
            url: '/topics/maps',
          }),
          Immutable.Map({
            name: 'Marketing',
            url: '/topics/marketing',
          }),
          Immutable.Map({
            name: 'Productivity',
            url: '/topics/productivity',
          }),
          Immutable.Map({
            name: 'Travel',
            url: '/topics/travel',
          }),
        ]),
      }),
    ]),
  };

  render() {
    const {
      activeLink,
      className,
      sections,
    } = this.props;

    return (
      <LinearGroup
        className={classNames(
          styles.container,
          className
        )}
        orientation="vertical"
        spacing={48}
      >
        {sections.map((section, sectionIndex) => {
          return (
            <div
              className={styles.section}
              key={sectionIndex}
            >
              {section.get('name') && <div className={styles.sectionHeader}>
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
                      href={link.get('url')}
                      key={linkIndex}
                    >
                      {link.get('name')}
                    </a>
                  );
                })}
              </LinearGroup>
            </div>
          );
        })}
      </LinearGroup>
    );
  }
}

export default NavSidebar;
