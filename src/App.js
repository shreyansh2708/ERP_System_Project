import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/DashBoard Component/Dashboard';
import ProductList from './Components/ProductManagement Component/ProductList';
import Orders from './Components/OrderManagement Component/Orders'
import OrderCalendar from './Components/OrderCalendar Component/OrderCalendar';
import Header from './Components/Header Component/Header';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<div><Header /><Dashboard /></div>} />
        <Route path='/productManagement' element={<div><Header /><ProductList /></div>} />
        <Route path='/orderManagement' element={<div><Header /><Orders /></div>} />
        <Route path='/calendar' element={<div><Header /><OrderCalendar /></div>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
