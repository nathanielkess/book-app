import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import auth from './model/auth/auth.reducer';
import users from './model/users/users.reducer';
import { books, booksRead } from './model/books/books.reducer';
import { search } from './model/book-search/book-search.reducer';

const logger = createLogger({
  collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth,
  users,
  books,
  booksRead,
  search,
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
