import ButtonLink from './ButtonLink';
import classNames from 'classnames';
import Immutable from 'immutable';
import LinearGroup from './LinearGroup';
import React from 'react';
import styles from './DateHeader.scss';

class DateHeader extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    date: React.PropTypes.string,
    filter: React.PropTypes.string,
    onFilterChange: React.PropTypes.func,
  };
  
  render() {
    const { className, date, filter, onFilterChange } = this.props;

    const links = Immutable.List([
      Immutable.Map({
        id: 'popular',
        name: 'Popular',
      }),
      Immutable.Map({
        id: 'newest',
        name: 'Newest',
      }),
    ]);
    
    return (
      <div className={classNames(styles.container, className)}>
        <div className={styles.outline}>
          {date}
          <LinearGroup
            orientation="horizontal"
            spacing={20}
          >
            {filter && links.map((link, i) => {
              return (
                <ButtonLink
                  buttonStyle="link"
                  className={styles.link}
                  color={filter === link.get('id') ? 'black' : 'gray'}
                  key={i}
                  onClick={() => onFilterChange(link.get('id'))}
                  title={link.get('name')}
                />
              );
            })}
          </LinearGroup>
        </div>
      </div>
    );
  }
}

export default DateHeader;
