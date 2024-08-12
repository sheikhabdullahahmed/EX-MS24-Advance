// import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import themeReducer from './theme'




// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, themeReducer)

// export const store = configureStore({
//   reducer: persistedReducer
// })

// const persistor = persistStore(store)

// export {persistor}











import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import countSlice from './countSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, countSlice);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
