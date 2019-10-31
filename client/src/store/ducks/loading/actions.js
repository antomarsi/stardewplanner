import { action } from "typesafe-actions";
import { LoadingTypes } from "./types";

export const SetLoading = (id, message) =>
  action(LoadingTypes.SET_LOADING, { id, message });

export const RemoveLoading = id => action(LoadingTypes.REMOVE_LOADING, { id });
