import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import { weatherReducer } from "./WeatherSlice";

const rootReducer = combineReducers({
  weather: weatherReducer, // Assegna il tuo reducer a una chiave nel root state
  // Altri reducer, se presenti, possono essere aggiunti qui
});

const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (state) => state;

export default store;
