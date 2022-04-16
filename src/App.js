import './App.css';
import { Provider } from './context/context';
import Routes from './routes';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
