import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
