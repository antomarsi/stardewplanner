import Tool from "./tool_base";
import { faBrush } from "@fortawesome/free-solid-svg-icons";

class Brush extends Tool {
  constructor() {
    super("Brush", faBrush, "B");
  }
}

export default Brush;
