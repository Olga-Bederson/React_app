import './App.css';
import {Message} from "./components/Message/index_message";

const appText = "Hello!";

function App() {
  return (
    <div className="App">
      <Message text={appText}/>
    </div>
  );
}

export default App;
