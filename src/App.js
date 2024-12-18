import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Signin from './components/signin';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
