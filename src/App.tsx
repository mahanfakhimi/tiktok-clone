import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./components/layouts";
import { paths } from "./constants/paths";
import { Home } from "./pages";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path={paths.HOME} element={<Home />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
