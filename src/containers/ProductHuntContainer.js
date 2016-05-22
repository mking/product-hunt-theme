import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ProductHunt from '../components/ProductHunt';
import React from 'react';

import {
  expandPosts,
  getPosts,
  setActivePost,
  setFilter,
} from '../actions';

class ProductHuntContainer extends React.Component {
  static propTypes = {
    activePostId: React.PropTypes.number,
    baseURL: React.PropTypes.string,
    className: React.PropTypes.string,
    expanded: React.PropTypes.bool,
    filter: React.PropTypes.string,
    onExpand: React.PropTypes.func,
    onGetPosts: React.PropTypes.func,
    onSetActivePost: React.PropTypes.func,
    onSetFilter: React.PropTypes.func,
    posts: ImmutablePropTypes.list,
  };

  static defaultProps = {
    baseURL: 'https://www.producthunt.com',
  };

  constructor(props) {
    super(props);
    
    this.handleExpand = this.handleExpand.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handlePostEnter = this.handlePostEnter.bind(this);
    this.handlePostLeave = this.handlePostLeave.bind(this);
  }

  componentDidMount() {
    this.props.onGetPosts(Immutable.Map({
      filter: this.props.filter,
    }));
  }

  handleExpand() {
    this.props.onExpand(Immutable.Map({
      expanded: true,
    }));
  }

  handleFilterChange(filter) {
    this.props.onSetFilter(Immutable.Map({
      filter,
    }));
    this.props.onGetPosts(Immutable.Map({
      filter,
    }));
  }

  handlePostEnter(id) {
    this.props.onSetActivePost(Immutable.Map({
      id,
    }));
  }

  handlePostLeave() {
    this.props.onSetActivePost(Immutable.Map({
      id: null,
    }));
  }

  render() {
    const {
      activePostId,
      baseURL,
      className,
      expanded,
      filter,
      posts,
    } = this.props;

    return (
      <ProductHunt
        activePostId={activePostId}
        baseURL={baseURL}
        className={className}
        expanded={expanded}
        filter={filter}
        onExpand={this.handleExpand}
        onFilterChange={this.handleFilterChange}
        onPostEnter={this.handlePostEnter}
        onPostLeave={this.handlePostLeave}
        posts={posts}
      />
    );
  }
}

const selector = createSelector(
  state => state.productHunt.get('filter'),
  state => state.productHunt.get('posts'),
  state => state.productHunt.get('expanded'),
  state => state.productHunt.get('activePostId'),
  (filter, posts, expanded, activePostId) => ({
    activePostId,
    expanded,
    filter,
    posts,
  })
);

export default connect(selector, dispatch => {
  return bindActionCreators({
    onExpand: expandPosts,
    onGetPosts: getPosts,
    onSetActivePost: setActivePost,
    onSetFilter: setFilter,
  }, dispatch);
})(ProductHuntContainer);
