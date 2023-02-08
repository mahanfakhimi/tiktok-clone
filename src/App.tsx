import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./components/layouts";
import { Home } from "./pages";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
