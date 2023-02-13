import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts";
import UserContextProvider from "./contexts/UserContextProvider";
import { Home } from "./pages";

const App = () => {
  return (
    <UserContextProvider>
      <RootLayout>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </RootLayout>
    </UserContextProvider>
  );
};

export default App;
