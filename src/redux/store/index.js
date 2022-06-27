/**
 * Store
 */
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from '../reducers/index';
import rootSaga from '../../network/sagas';

/**
 *
 * @returns
 */
const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['loginReducer'],
  };
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};

export default configureStore;
