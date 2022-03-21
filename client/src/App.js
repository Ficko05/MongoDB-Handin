import './App.css';
import NameForm from './form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={"https://draywilliams.com/wp-content/uploads/2020/05/imageedit_56_5278557772.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NameForm/>
      </header>
    </div>
  );
}

export default App;