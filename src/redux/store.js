import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import reduxStorage from './storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const presistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['game'],
};

const persistedReducer = persistReducer(presistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PURGE, PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
