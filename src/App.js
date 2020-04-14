import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Cart from './components/Cart';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Detail from './components/Detail';
import {ProductProvider} from "./components/Context";
import {foodList} from '../src/components/Data';


function App() {

  return (
    <div className="App">
      <ProductProvider>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/detail" exact component={Detail} />
            </Switch>
          </div>
        </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
