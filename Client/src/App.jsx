import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LandingLayout, SettingsLayout} from './components/Layout';
import Home from './pages/LandingPages/Home';
import About from './pages/LandingPages/About';
import ShopNow from './pages/LandingPages/ShopNow';
import TradeEvents from './pages/LandingPages/TradeEvents';
import BiddingZone from './pages/LandingPages/BiddingZone';
import Login from './pages/auth/Login'; 
import 'flowbite';

import Register from './pages/auth/Register';
import TradeDeals from './pages/LandingPages/TradeDeals';
import Profile from './pages/Settings/Profile';
import NotFound from './Utils/NotFound';
import ItemView from './components/other/ItemView';
import LoginSeller from './pages/auth/seller/loginSeller';
import RegisterSeller from './pages/auth/seller/RegistrationSeller';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login-seller' element={<LoginSeller />} />
        <Route path='/register-seller' element={<RegisterSeller />} />


        {/* Routes wrapped in Navbar and Footer */}
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop-now" element={<ShopNow />} />
          <Route path="/shop-now/:id" element={<ItemView />} />
          <Route path="/trade-deals" element={<TradeDeals />} />
          <Route path="/trade-events" element={<TradeEvents />} />
          <Route path="/bidding-zone" element={<BiddingZone />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/account" element={<SettingsLayout />}>
              <Route index element={<Profile />} />
          </Route>
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
