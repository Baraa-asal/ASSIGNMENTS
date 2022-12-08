import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card firstname = {"Jane"} lastname = {"Doe"} age={23} haircolor = {"brown"}></Card>
      <Card firstname = {"Jane"} lastname = {"Doe"} age={23} haircolor = {"brown"}>2</Card>
      <Card firstname = {"Jane"} lastname = {"Doe"} age={23} haircolor = {"brown"}>3</Card>
      <Card firstname = {"Jane"} lastname = {"Doe"} age={23} haircolor = {"brown"}>4</Card>
    </div>
  );
}

export default App;
