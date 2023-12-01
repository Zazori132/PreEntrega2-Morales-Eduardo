import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import CartComponent from './components/CartComponent';
import CheckoutComponent from './components/CheckoutComponent';
import ArenaComponent from './components/ArenaComponent';
import JuguetesComponent from './components/JuguetesComponent';
import TransportadorasComponent from './components/TransportadorasComponent';
import AlimentoComponent from './components/AlimentoComponent';

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/checkout" element={<CheckoutComponent />} />
        <Route path="/category/arena" element={<ArenaComponent />} />
        <Route path="/category/juguetes" element={<JuguetesComponent />} />
        <Route path="/category/transportadoras" element={<TransportadorasComponent />} />
        <Route path="/category/alimento" element={<AlimentoComponent />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
