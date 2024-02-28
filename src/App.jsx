import {Outlet} from "react-router-dom";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <main className="bg-green-200">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default App;
