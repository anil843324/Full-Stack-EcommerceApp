
import './App.css';
import Header from './component/Home/Header'
import Home from './component/Home/Home';
import WebFont from "webfontloader";
import { useEffect } from 'react';
function App() {


  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });


  }, []);





  return (
    <div className="App">

      <Header />
      <Home />


    </div>
  );
}

export default App;
