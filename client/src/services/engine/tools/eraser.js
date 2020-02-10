import Tool from "./tool_base";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

class Eraser extends Tool {
  constructor() {
    super("Eraser", faEraser, "E");
  }
}

export default Eraser;
