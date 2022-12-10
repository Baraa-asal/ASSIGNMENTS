import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  const persons = [
    {"firstname": "Baraa", "lastname": "AboAsal", "age": 26, "haircolor": "Red"},
    {"firstname": "Afnan", "lastname": "AboAsal", "age": 20, "haircolor": "Black"},
    {"firstname": "Bayan", "lastname": "AboAsal", "age": 22, "haircolor": "Black"},
    {"firstname": "Yaseen", "lastname": "AboAsal", "age": 19, "haircolor": "Blonde"}
  ]
  return ( //in the return, im trying to return a jsx syntax, so if i want to write pure js, i need to use curly braces
    <div className="App">
      {
      persons.map(person => <Card key = {person.firstname + person.lastname} {...person}/>) 
      //the key thing is due to an error that occured with me in the console
      }
    </div>
  );
}

export default App;
