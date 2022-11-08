// import logo from './logo.svg';
import { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [crypto, setcrypto] = useState("");
  const handleChange=(e)=>{
    // selectElement = document.querySelector('#select1');
    // output = selectElement.options[selectElement.selectedIndex].value;
    // console.log(e.target.value)
    setcrypto(e.target.value);
  }

  useEffect(() => {
    if(crypto!==""){
      fetch(`https://api.coincap.io/v2/assets/${crypto}`)
      .then(result=>{return result.json()})
      .then(data=> console.log(data))
    }
  }, [crypto])
  
    
  return (
    <>
      <div className="container text-center">
        <h1 className="my-3">crypto-sell-notifier</h1>
        <select id="select1" className="form-select" aria-label="Default select example" onChange={handleChange} defaultValue={'DEFAULT'} >
          <option value="DEFAULT" disabled >Open this select menu</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Etherium</option>
          <option value="dogecoin">DogeCoin</option>
        </select>
      </div>
    </>
  );
}

export default App;
