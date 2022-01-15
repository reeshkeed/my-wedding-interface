import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import OurGallery from "./pages/OurGallery";
import WhenAndWhere from "./pages/WhenAndWhere";
import useToken from "./components/useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />

        <Home />
        <WhenAndWhere />
        <OurGallery />

        <Footer />
      </div>
    );
  }
}

export default App;
