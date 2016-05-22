import classNames from 'classnames';
import ConstraintComponent from '../components/ConstraintComponent';
import React from 'react';
import styles from './SearchPage.scss';

class SearchPage extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    search: React.PropTypes.string,
  };

  render() {
    const {
      className,
      search,
    } = this.props;

    return (
      <ConstraintComponent className={classNames(styles.container, className)}>
        <div className={styles.mainContent}>
          Results for "{search}"
        </div>
      </ConstraintComponent>
    );
  }
}

export default SearchPage; 
