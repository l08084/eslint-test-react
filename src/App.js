import logo from './logo.svg';
import './App.css';

function App() {
  var abc = 'aaa';

  const oranges = ['ripe orange A ', 'green orange B', 'ripe orange C'];

  let ripe_oranges = oranges.filter((fruit) => fruit.match(/(?<=ripe )orange/));
  console.log(ripe_oranges);

  const re = new RegExp('(?<=ripe )orange');

  ripe_oranges = oranges.filter((fruit) => fruit.match(re));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
