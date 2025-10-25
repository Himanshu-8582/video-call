
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing.jsx'
import AuthenticationPage from './pages/Authentication.jsx'
import {AuthProvider} from './contexts/AuthContext.jsx'
import VideoMeetComponent from './pages/VideoMeetComponent.jsx';
import Home from './pages/Home.jsx';
import History from './pages/History.jsx';


function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/auth' element={<AuthenticationPage />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/history' element={<History/>}></Route>
            <Route path='/:url' element={<VideoMeetComponent />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App;
