import './App.css';
import Accueil from "./pages/Accueil"
import AzureaLimousines from "./pages/AzureaLimousines.jsx"
import "../src/style/accueil.css"
import "../src/style/azureaLimousines.css"

function App() {
  return (
    <div className="App">
       <Accueil/>
       <AzureaLimousines/>
    </div>
  );
}

export default App;
