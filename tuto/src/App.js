import Nihaha from './Nihaha.js'
import './App.css';


function dhia(){
  return 7;
}

function sayHello(){
  alert("Hello Dhia")
}

let a = dhia(); 

const elmStyle = {
  backgroundColor: "black",
  color: "white", 
  width: "200px"
};


export default function App() {
  return (
    <div className="App">
      <h1 style={elmStyle} >dhia the {a}th</h1>
      <Nihaha/>
      <button onClick={sayHello} > OK </button>
    
    </div>
  );
}




