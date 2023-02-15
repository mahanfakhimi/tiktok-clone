import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginContextProvider, UserContextProvider } from "./contexts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <UserContextProvider>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
