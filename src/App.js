import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.css';
import Home from './comp/Home'
import Login from './comp/Login'
import Nav from './comp/Nav'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="bg-dark text-danger container text-center">
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;