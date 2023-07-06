import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import routes from '../routes';
// import 'react-toastify/dist/ReactToastify.css';
import Home from './home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Camera from "./home/pages/Camera";

const App = () => (
  <Router>
    <div className="container-fluid h-100">
      <Routes>
        <Route path={routes.root()} element={<Home />} />
        <Route path={routes.camera()} element={<Camera />} />
      </Routes>
    </div>
  </Router>
);

export default App;
