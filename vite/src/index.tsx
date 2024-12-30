import "./styles.scss";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./components/hello";

const root = createRoot(document.getElementById("root"));

root.render(<HelloComponent />);