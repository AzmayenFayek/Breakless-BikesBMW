import {
  BrowserRouter as Router, Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Navbar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';
import NotFound from './Components/Pages/NotFound/NotFound';
import Admin from './Components/Pages/Admin/Admin';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
import AddBikes from './Components/Pages/AddBikes/AddBikes';
import AllBikes from './Components/Pages/AllBikes/AllBikes';
import BikeDetails from './Components/Pages/BikeDetails/BikeDetails';
import BuyNow from './Components/Pages/BuyNow/BuyNow';
import MyOrder from './Components/Pages/MyOrder/MyOrder';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/addBikes">

            <AddBikes />

          </Route>
          <PrivateRoute exact path="/allBikes">
            <Navbar />
            <AllBikes />
            <Footer />
          </PrivateRoute>
          <PrivateRoute exact path="/myOrder">
            <Navbar />
            <MyOrder />
            <Footer />
          </PrivateRoute>
          <PrivateRoute exact path="/bikes/:id">
            <BikeDetails />
          </PrivateRoute>
          <PrivateRoute exact path="/buyNow/:id">
            <BuyNow />
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>


          <Route exact path="/admin">
            <Admin></Admin>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
