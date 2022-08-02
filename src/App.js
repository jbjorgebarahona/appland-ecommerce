
import './App.css';
import Header from './componentes/Header';


import Home  from './Pages/Home';
import Checkout from './Pages/Checkout';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
          <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
              
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
             
                <Checkout/>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
