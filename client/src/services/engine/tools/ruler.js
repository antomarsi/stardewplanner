import Tool from "./tool_base";
import { faRuler } from "@fortawesome/free-solid-svg-icons";

class Ruler extends Tool {
  constructor() {
    super("Ruler", faRuler, "R");
  }
}

export default Ruler;
