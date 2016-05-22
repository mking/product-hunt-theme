import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Immutable from 'immutable';
import React from 'react';
import SearchInput from '../components/SearchInput';

import {
  setSearch,
} from '../actions';

class SearchInputContainer extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    onSearchChange: React.PropTypes.func,
    search: React.PropTypes.string,
    style: React.PropTypes.object,
  };
  
  constructor(props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(search) {
    this.props.onSearchChange(Immutable.Map({
      search,
    }));
  }


  render() {
    const {
      className,
      search,
      style,
    } = this.props;
    
    return (
      <SearchInput
        className={className}
        onSearchChange={this.handleSearchChange}
        search={search}
        style={style}
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

export default connect(selector, dispatch => {
  return bindActionCreators({
    onSearchChange: setSearch,
  }, dispatch);
})(SearchInputContainer);
