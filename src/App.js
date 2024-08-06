import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
function App() {
  return (
    <Router>
     <Routes>
      <Route element={<MainPage/>} path='/home'/>
     </Routes>
    </Router>
  );
}

export default App;
