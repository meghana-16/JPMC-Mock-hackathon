import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Container} from 'react-bootstrap';
import './App.css';
import Home from './components/home';
import Header from './components/navbar';
import Foot from './components/footer';
import Signin from './components/signin';
import Signup from './components/signup';
import AddProductsForm from './components/donar/addProductsForm';
import DonatedList from './components/donar/donatedList';
import Profile1 from './components/donar/profile1';
import Feedback from './components/donee/feedback';
import Profile2 from './components/donee/profile2';
import RequestedProducts from './components/donee/requestedProducts';
import DisplayCards1 from './components/products/displayCards1';
import Search from './components/products/search';

function App() {
  return (
    <Container fluid>
      <Router>
        <Header/>
        <Routes>
        <Route
          path="/"
          exact
          element={<Home/>}
        />
        <Route
          path="/signin"
          element={<Signin/>}
        />
        <Route
          path="/signup"
          element={<Signup/>}
        />
        <Route
          path="/addProductsForm"
          element={<AddProductsForm/>}
        />
        <Route
          path="/donatedList"
          element={<DonatedList/>}
        />
        <Route
          path="/profile1"
          element={<Profile1/>}
        />
        <Route
          path="/feedback"
          element={<Feedback/>}
        />
        <Route
          path="/profile2"
          element={<Profile2/>}
        />
        <Route
          path="/requestedProducts"
          element={<RequestedProducts/>}
        />
        <Route
          path="/displayCards1"
          element={<DisplayCards1/>}
        />
        <Route
          path="/search"
          element={<Search/>}
        />
        </Routes>
        <Foot/>
      </Router> 
      
    </Container>
  );
}

export default App;
