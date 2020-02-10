import Tool from "./tool_base";
import { faFill } from "@fortawesome/free-solid-svg-icons";

class Fill extends Tool {
  constructor() {
    super("Fill", faFill, "F");
  }
}

export default Fill;
