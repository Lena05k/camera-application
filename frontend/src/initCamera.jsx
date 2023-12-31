import App from './components/App';
import { ApiContext } from './core/contexts/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const initCamera = async () => {

  return (
    <ApiContext.Provider>
      <App />
    </ApiContext.Provider>
  );
};

export default initCamera;
