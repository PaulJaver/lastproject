import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './components/Inicio';
import ListarProductos from './components/ListarProductos';
import AgregarProducto from './components/AgregarProducto';
import Footer from './components/common/Footer';
import NavLine from './components/common/NavLine';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Router>
     <NavLine></NavLine>
     <Switch>
       <Route exact path='/'>
         <Inicio></Inicio>
       </Route>
       <Route exact path='/productos'>
        <ListarProductos></ListarProductos>
       </Route>
       <Route exact path='/productos/nuevo'>
        <AgregarProducto></AgregarProducto>
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
  );
}

export default App;
