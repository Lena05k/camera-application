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

const App = () => (
  <Router>
    <div className="d-flex flex-column h-100">
      <Routes>
        <Route path={routes.root()}>
          <Route path={routes.home()} element={<Home />} />
        </Route>
      </Routes>
    </div>
  </Router>
);

export default App;
