import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { weatherReducer } from "./WeatherSlice";
import { backgroundReducer } from "./BackgroundChangerSlice";

// Combino i reducer specifici in un rootReducer
const rootReducer = combineReducers({
  weather: weatherReducer,
  background: backgroundReducer,
});

// Configuro uno store Redux utilizzando il rootReducer
export const store = configureStore({
  reducer: rootReducer,
});

// Esporto gli hook useDispatch e useSelector, che sono "pre-configurati" per utilizzare lo store creato
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
