import { action } from "typesafe-actions";
import { HomeRenders } from "./types";

export const fetchRequest = () => action(HomeRenders.FETCH_REQUEST);

export const fetchSuccess = data => action(HomeRenders.FETCH_SUCCESS, data);
export const fetchError = (title, message) =>
  action(HomeRenders.FETCH_ERROR, { title, message });