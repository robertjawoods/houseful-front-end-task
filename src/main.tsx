import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Providers } from "./utils";

if (!import.meta.env.PROD) {
  // improves performance by only importing in development
  const axe = await import("@axe-core/react").then((m) => m.default);

  axe(React, ReactDOM, 1000);
}

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("../server/browser");

  // worker.start() returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>
  );
});
