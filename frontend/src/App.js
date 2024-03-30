import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Shopcategory from './Pages/Shopcategory.jsx'
import Shop from './Pages/Shop.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import LoginSingup from './Pages/loginSingup.jsx'
import Footer from './components/Footer/Footer.jsx'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'


function App() {
  return(
   <BrowserRouter>   
    <Navbar></Navbar>
<Routes>
  <Route path='/' element={<Shop />} />
<Route path=':productId' element={<Product />} />

  <Route path='/Men' element={<Shopcategory   banner={men_banner}  category="men" />} />
  <Route path='/Women' element={<Shopcategory  banner={women_banner}  category="women" />} />
  <Route path='/Kids' element={<Shopcategory  banner={kids_banner}  category="kid" />} />


<Route path='/cart' element={<Cart />} />
<Route path='/login' element={<LoginSingup />} />

</Routes>
<Footer/>
</BrowserRouter>

  )
}

export default App;
