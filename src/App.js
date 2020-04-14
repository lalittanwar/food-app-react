import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Cart from './components/Cart';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Detail from './components/Detail';
import { ProductProvider } from "./components/Context";
import {foodList} from '../src/components/Data';


function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={Cart} />
            <ProductProvider value={foodList}>
              <Route path="/detail" exact component={Detail} />
            </ProductProvider>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
