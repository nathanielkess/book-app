import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import counter from './features/counter/counter.reducer';
import auth from './features/auth/auth.reducer';
import users from './features/users/users.reducer';

const logger = createLogger({
  collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth,
  counter,
  users,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware, logger),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
