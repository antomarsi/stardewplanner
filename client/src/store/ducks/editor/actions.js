import { action } from "typesafe-actions";
import { EditorTypes } from "./types";

export const ToggleSidebar = () => action(EditorTypes.TOGGLE_SIDEBAR);

export const SelectItem = item => action(EditorTypes.SELECT_ITEM, item);
