import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App input={false} />
    <App input={["a", "b", "c", "d"]} />
    <App input={"Anything else:"} />
  </StrictMode>
);
