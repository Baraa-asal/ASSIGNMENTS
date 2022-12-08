import logo from './logo.svg';
import './App.css';
import MyNewComponent from './components/MyNewComponent'


function App() {
  return (
    <div className="App">
      <h1>I am sleepy</h1>
      <ul>
        <li>I want to sleep</li>
        <li>Sleep is what I want</li>
        <li>I also need a hug</li>
      </ul>

      <MyNewComponent firstname = {'baraa'} lastname = {'aboasal'} status = {true}> </MyNewComponent>
    </div>
  );
}

export default App;
