import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import routes from './routes/routes';
// import 'react-toastify/dist/ReactToastify.css';
import MainPage from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import CameraPage from './pages/CameraPage';

const App = () => (
  <Router>
      <Routes>
        <Route path={routes.root()} element={<MainPage />} />
        <Route path={routes.camera()} element={<CameraPage />} />
      </Routes>
  </Router>
);

export default App;
