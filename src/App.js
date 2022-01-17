import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import OurGallery from "./pages/OurGallery";
import WhenAndWhere from "./pages/WhenAndWhere";
import Rsvp from "./pages/Rsvp";

import TokenContext from "./components/TokenContext";
import { useEffect, useState } from "react";

function App() {
  const tokenState = useState(false);
  const userDataSate = useState(null);

  const [token, setToken] = tokenState;
  const [userData, setUserData] = userDataSate;

  const providerData = { token, setToken, userData, setUserData };

  useEffect(() => {
    const userToken = sessionStorage.getItem("token");
    const userData = sessionStorage.getItem("userData");

    if (userToken && userData) {
      setToken(userToken);
      setUserData(JSON.parse(userData));
    }
  }, []);

  return (
    <TokenContext.Provider value={providerData}>
      {!token ? (
        <div>
          <Navbar />
          <Home />
        </div>
      ) : (
        <div>
          <Navbar />

          <Home />
          <WhenAndWhere />
          <OurGallery />
          <Rsvp />

          <Footer />
        </div>
      )}
    </TokenContext.Provider>
  );
}

export default App;
