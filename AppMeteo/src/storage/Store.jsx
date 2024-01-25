import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { weatherReducer } from "./WeatherSlice";
import { backgroundReducer } from "./BackgroundChangerSlice";

const rootReducer = combineReducers({
  weather: weatherReducer,
  background: backgroundReducer, // Assegna il tuo reducer a una chiave nel root state
  // Altri reducer, se presenti, possono essere aggiunti qui
});

export const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
