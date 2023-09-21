import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { asyncWithLDProvider, LDContext } from "launchdarkly-react-client-sdk";

(async () => {
  // Set clientSideID to your own Client-side ID. You can find this in
  // your LaunchDarkly portal under Account settings / Projects
  const context: LDContext = {
    kind: "user",
    key: "test-user-1",
    operation_id: "1d588c7e-8e38-4420-bcc1-5d2c65b04797",
  };

  const LDProvider = await asyncWithLDProvider({
    // ************************************************************
    // 👉 The clientSideID was sent in the text of the support ticket:
    // ************************************************************
    clientSideID: "<PASTE_CLIENT_SIDE_ID_HERE>",
    context,
  });

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <LDProvider>
          <App />
        </LDProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
})();
