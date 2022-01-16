import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import OurGallery from './pages/OurGallery';
import WhenAndWhere from './pages/WhenAndWhere';
import TokenContext from './components/TokenContext';
import { useEffect, useState } from 'react';

function App() {
  const tokenState = useState(null);
  const [token, setToken] = tokenState;

  useEffect(() => {
    const userToken = sessionStorage.getItem('token');
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  return (
    <TokenContext.Provider value={tokenState}>
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

          <Footer />
        </div>
      )}
    </TokenContext.Provider>
  );
}

export default App;
