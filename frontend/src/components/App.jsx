import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import routes from './routes/routes';
import MainPage from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import CameraPage from './pages/CameraPage';
import GalleryPage from './pages/GalleryPage';

const App = () => (
  <Router>
      <Routes>
        <Route path={routes.root()} element={<MainPage />} />
        <Route path={routes.camera()} element={<CameraPage />} />
        <Route path={routes.gallery()} element={<GalleryPage />} />
      </Routes>
  </Router>
);

export default App;
