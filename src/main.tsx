import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginModalContextProvider, UserContextProvider } from "./contexts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <UserContextProvider>
      <LoginModalContextProvider>
        <App />
      </LoginModalContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
