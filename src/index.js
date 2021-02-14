import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App";
import ErrorFeedback from "./components/ui/ErrorFeedback";
import * as serviceWorker from "./serviceWorker";
import "typeface-montserrat";
import "bootstrap-4-grid/css/grid.min.css";
import { handleError, resetError } from "./utils/errorUtil";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFeedback}
      onError={handleError}
      onReset={resetError}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// PWA support
serviceWorker.register();
