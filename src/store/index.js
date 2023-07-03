import { legacy_createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import allReducers from './reducers';

const myStore = legacy_createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

export default myStore;