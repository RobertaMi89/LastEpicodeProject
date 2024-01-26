import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { weatherReducer } from "./WeatherSlice";
import { backgroundReducer } from "./BackgroundChangerSlice";

const rootReducer = combineReducers({
  weather: weatherReducer,
  background: backgroundReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
