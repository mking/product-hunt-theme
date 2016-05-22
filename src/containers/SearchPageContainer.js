import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import React from 'react';
import SearchPage from '../pages/SearchPage';

class SearchPageContainer extends React.Component {
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
      <SearchPage
        className={className}
        search={search}
      />
    );
  }
}

const selector = createSelector(
  state => state.productHunt.get('search'),
  search => ({
    search,
  })
);

export default connect(selector)(SearchPageContainer);
