import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./components/layouts";
import UserProvider from "./contexts/UserProvider";
import { Home } from "./pages";

const App = () => {
  return (
    <UserProvider>
      <RootLayout>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </RootLayout>
    </UserProvider>
  );
};

export default App;
