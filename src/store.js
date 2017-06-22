import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import auth from './model/auth/auth.reducer';
import users from './model/users/users.reducer';
import { books, booksRead, booksSearch, bookNetworkDetails } from './model/books/books.reducer';
// import { search } from './model/book-search/book-search.reducer';
import { chat } from './model/chats/chats.reducer';

const logger = createLogger({
  collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth,
  users,
  books,
  booksRead,
  booksSearch,
  bookNetworkDetails,
  chat,
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
