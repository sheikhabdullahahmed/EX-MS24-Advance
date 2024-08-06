import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import theme from './theme'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, theme)

const store = configureStore({
  reducer: persistReducer,
})


const persistor = persistStore(store)

export { store, persistor }

