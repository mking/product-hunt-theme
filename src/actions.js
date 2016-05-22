import Immutable from 'immutable';
import ProductHuntActionTypes from './constants/ProductHuntActionTypes';
import ProductHuntWebAPIUtils from './utils/ProductHuntWebAPIUtils';

export function getPosts(options) {
  return dispatch => {
    dispatch({
      type: ProductHuntActionTypes.GET_POSTS,
    });
    
    return ProductHuntWebAPIUtils.getPosts(Immutable.Map({
      filter: options.get('filter'),
    })).then(posts => {
      dispatch({
        type: ProductHuntActionTypes.GET_POSTS_SUCCESS,
        posts,
      });
    });
  };
}

export function expandPosts(options) {
  return {
    type: ProductHuntActionTypes.EXPAND_POSTS,
    expanded: options.get('expanded'),
  };
}

export function setActivePost(options) {
  return {
    type: ProductHuntActionTypes.SET_ACTIVE_POST,
    id: options.get('id'),
  };
}

export function setFilter(options) {
  return {
    type: ProductHuntActionTypes.SET_FILTER,
    filter: options.get('filter'),
  };
}
