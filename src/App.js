
import './App.css';
import Navbar from './components/Navbar';
// import './components/Navbar.css'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Shop from './components/Shop';
import ShopCategory from './components/ShopCategory';
import Product from './components/Product';

import LoginSignup from './components/LoginSignup';
import Footer from './components/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'
import ShopState from './Context/ShopState';
import Carts from './components/Carts';


function App() {
  return (
    <ShopState>
    <div className="App">
      
 
  
     <Router>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category={'men'}/> }/>
      <Route path='/womens' element={<ShopCategory  banner={women_banner} category={'women'}/>}/>
      <Route path='/kids' element={<ShopCategory  banner={kids_banner} category={'kid'}/>}/>
      <Route path='/product' element={<Product />}>
        <Route path=':ProductId' element={<Product />} />
      </Route>

      <Route path='/cart' element={<Carts/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
     
      
     </Routes>
     <Footer/>
     </Router>

     
    </div>
    </ShopState>
  );
}

export default App;
