import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faCoffee} />
      <p>this is a test</p>
    </div>
  );
}

export default App;
