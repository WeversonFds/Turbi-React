import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

// IMPORTANTO STORES
import contacts from './lists/contacts'
import loading from './commom/loading'
import alert from './commom/alert'
const reducers = combineReducers({
  contacts: contacts,
  loading: loading,
  alert: alert
});

const persistConfig = {
  key: 'root',
  storage,// local storage
  whitelist: ['contacts'],
  blacklist: ['loading','alert']
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
