import logo from './logo.svg';
import './App.css';
import { Router, Link } from '@reach/router';
import Welcome from './components/Welcome';
import NumberOrWord from './components/NumberOrWord';
import NumberOrWordStyling from './components/NumberOrWordStyling';
import NumberOrWordRepeated from './components/NumberOrWordRepeated';

function App() {
  return (
    <div className="App">
        <Router>
          <Welcome path = "/home"/>
          <NumberOrWord path = "/:input"/>
          <NumberOrWordStyling path = "/:input/:fontColor/:bgColor"/>
          <NumberOrWordRepeated path = "/:input/:fontColor/:bgColor/:times"/>
        </Router>
    </div>
  );
}

export default App;
