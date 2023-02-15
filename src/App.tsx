import { Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts";
import { UserContext } from "./contexts/UserContextProvider";
import { Home } from "./pages";
import { useContext } from "react";

const App = () => {
  const user = useContext(UserContext);

  if (!user) return <h1 className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h1>;

  return (
    <RootLayout>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
