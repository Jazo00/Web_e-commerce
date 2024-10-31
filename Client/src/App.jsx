// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingLayout, SettingsLayout } from './components/Layout';
import Home from './pages/LandingPages/Home';
import About from './pages/LandingPages/About';
import ShopNow from './pages/LandingPages/ShopNow';
import TradeEvents from './pages/LandingPages/TradeEvents';
import BiddingZone from './pages/LandingPages/BiddingZone';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import TradeDeals from './pages/LandingPages/TradeDeals';
import Profile from './pages/Settings/Profile';
import NotFound from './Utils/NotFound';
import ItemView from './components/other/ItemView';
import LoginSeller from './pages/auth/seller/loginSeller';
import RegisterSeller from './pages/auth/seller/RegistrationSeller'; 
import SellerCentre from "./pages/auth/seller/seller_centre";


import 'flowbite';

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Seller Parts 
            Note: Not sure where these should go or stay sa hierarchy ng folders.
          */}
        <Route path="/login-seller" element={<LoginSeller />} />
        <Route path="/register-seller" element={<RegisterSeller />} />
        <Route path="/seller-centre" element={<SellerCentre />} />

        {/* Landing Layout Routes with Navbar and Footer */}
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop-now" element={<ShopNow />} />
          <Route path="/shop-now/:id" element={<ItemView />} />
          <Route path="/trade-deals" element={<TradeDeals />} />
          <Route path="/trade-events" element={<TradeEvents />} />
          <Route path="/bidding-zone" element={<BiddingZone />} />
          
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
          
          {/* Settings Layout for Account Pages */}
          <Route path="/account" element={<SettingsLayout />}>
            <Route index element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
