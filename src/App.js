import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movielist from './component/Movielist';
import Example from './component/Example';
function App() {
  return (
    <div className="App">
      <Example/>
     <Movielist/>
    </div>
  );
}

export default App;
