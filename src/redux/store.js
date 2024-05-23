import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
}); //configureStore automatically connects with redux dev tools - we don't need "const enhancer = devToolsEnhancer();" anymore

export const persistor = persistStore(store);
