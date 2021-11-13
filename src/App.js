import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import BuyingModal from './Pages/BuyingModal/BuyingModal';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explores from './Pages/Explore/Explores/Explores';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/explores">
            <Explores></Explores>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/buyingModal">
            <BuyingModal></BuyingModal>
          </Route>
        </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
