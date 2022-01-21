import './App.css';
import Accueil from "./pages/Accueil"
import AzureaLimousines from "./pages/AzureaLimousines.jsx"
import AzureaServices from "./pages/AzureaServices"
import StTrop from './pages/SaintTropez';
import Footer from './pages/Footer'



function App() {
  return (
    <div className="App">
       <Accueil/>
       <AzureaLimousines/>
       <AzureaServices/>
       <StTrop/>
       <Footer/>
    </div>
  );
}

export default App;
