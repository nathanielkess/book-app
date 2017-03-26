import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import counter from './containers/counter/counter.reducer';

const logger = createLogger({
  collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  counter,
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export default store;
