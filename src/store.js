import { applyMiddleware, combineReducers, createStore } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import reducer from './reducers';
import thunk from 'redux-thunk';

const logger = createLogger({
  actionTransformer: action => Immutable.Map(action).toJS(),
  stateTransformer: state => Immutable.Map(state).toJS(),
});

export default createStore(
  combineReducers({
    productHunt: reducer,
  }),
  undefined,
  applyMiddleware(thunk, logger)
);
