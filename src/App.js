import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import OurGallery from './pages/OurGallery';
import WhenAndWhere from './pages/WhenAndWhere';

function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <OurGallery />
      <WhenAndWhere />
    </div>
  );
}

export default App;
