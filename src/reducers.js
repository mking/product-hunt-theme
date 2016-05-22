import Immutable from 'immutable';
import ProductHuntActionTypes from './constants/ProductHuntActionTypes';

export default function reducer(
  state = Immutable.Map({
    activePostId: null,
    expanded: false,
    filter: 'popular',
    posts: Immutable.List(),
  }),
  action
) {
  switch (action.type) {
    case ProductHuntActionTypes.EXPAND_POSTS: {
      return state.set('posts', Immutable.List());
    }

    case ProductHuntActionTypes.GET_POSTS: {
      return state.set('posts', Immutable.List());
    }

    case ProductHuntActionTypes.GET_POSTS_SUCCESS: {
      return state
        .set('posts', action.posts)
        .set('expanded', false);
    }

    case ProductHuntActionTypes.SET_ACTIVE_POST: {
      return state.set('activePostId', action.id);
    }

    case ProductHuntActionTypes.SET_FILTER: {
      return state.set('filter', action.filter);
    }
      
    default: {
      return state;
    }
  }  
}
