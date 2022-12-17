import './App.css';
import Hello from './Hello';
import Home from './Home';
import Login from './Login';
import Student from './Student';
function App() {
  return (
    <div className="App">
      <Hello/>
      <Home/>  
      <Login/>
      <Student studentsrollno='121' studentname="Abhipsa"/>
    </div>
  );
}

export default App;

