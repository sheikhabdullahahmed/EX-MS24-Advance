import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import themeSilce from './themeSlice'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, themeSilce)

const store = configureStore({
  reducer: persistReducer,
})


const persistor = persistStore(store)

export { store, persistor }