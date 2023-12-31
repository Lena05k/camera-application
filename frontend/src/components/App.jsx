import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import routes from './routes/routes';
import MainPage from './pages/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import CameraPage from './pages/CameraPage/CameraPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ReportPage from './pages/RepostPage/ReportPage';

const App = () => {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    axios.get('/api').then(
      (response) => response.json()
    ).then(
      (data) => setBackendData(data)
    );
  }, []);

  return (
    <Router>
      <Routes>
        <Route path={routes.root()} element={<MainPage />} />
        <Route path={routes.camera()} element={<CameraPage />} />
        <Route path={routes.gallery()} element={<GalleryPage />} />
        <Route path={routes.report()} element={<ReportPage />} />
      </Routes>
    </Router>
  );
};

export default App;
