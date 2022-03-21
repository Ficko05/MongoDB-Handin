import './App.css';
//import NameForm from './Components/form';
import CrudForm from './Components/crud';




function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://draywilliams.com/wp-content/uploads/2020/05/imageedit_56_5278557772.png"} className="App-logo" alt="logo" />

        
          <CrudForm />
        

      </header>
    </div>
  );
}

export default App;