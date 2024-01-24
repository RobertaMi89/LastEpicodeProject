import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mainReducer from '../reducers/reducer';

// Combina i riduttori se necessario
const rootReducer = combineReducers({
  main: mainReducer,
 
});

// Configura e crea lo store Redux
const store = configureStore({
  reducer: rootReducer,
 
});

// Esporta lo store per utilizzarlo nell'applicazione
export default store;
