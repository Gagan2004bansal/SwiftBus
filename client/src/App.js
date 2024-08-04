import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './Account/Login';
import Signup from './Account/Signup';
import Landing from './components/Landing';

function App() {
  const isLoggedIn = window.localStorage.getItem('isLoggedIn');
  const userType = window.localStorage.getItem('userType');
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        {/* Unauthorised Route */}
        {!isLoggedIn && <>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </>
        }
        {/* ProtectedRoute Put Here */}
        <Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {userType !== 'admin' ?
            (<></>) :
            (<></>)}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
