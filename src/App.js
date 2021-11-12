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
          <PrivateRoute path="/shop">
            <Contact />
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
          {/* <PrivateRoute exact path="/events/:id">
              <Readmore></Readmore>
            </PrivateRoute> */}
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
