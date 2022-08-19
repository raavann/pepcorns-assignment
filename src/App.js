import './App.css';
import Main from './components/main/main.js';
import Header from './components/header/header.js';
import Middle from './components/middle/middle.js';
function App() {
  return (
    <div className="App" id='grid'>
      <Header />
      <Middle />
      <Main />  

    </div>
  );
}

export default App;
