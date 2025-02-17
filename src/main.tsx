import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "./components/ui/provider.tsx";
import { App } from "./App.tsx";
import { LightMode } from "./components/ui/color-mode.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <LightMode>
        <App />
      </LightMode>
    </Provider>
  </StrictMode>
);
