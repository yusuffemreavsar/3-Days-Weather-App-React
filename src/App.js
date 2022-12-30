import './App.css';
import Container from './components/Container';
import {SearchProvider} from "./Context/SearchContext"
import { WeatherProvider } from './Context/WeatherContext';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        
          <WeatherProvider>
           <Container/>      
          </WeatherProvider>
        
      </SearchProvider>
    </div>
  );
}

export default App;
