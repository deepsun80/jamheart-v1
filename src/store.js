import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';
import ReduxPromise from 'redux-promise';


export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(reduxThunk)(ReduxPromise));
  return store;
}
