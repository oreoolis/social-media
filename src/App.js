import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from './components/title';
import Links from './components/links';
import OtherSocials from './components/otherSocials';
import Footer from './components/footer';



function App() {
  return (
    <div>
      <Title />
      <Links/>
      <OtherSocials/>
      <Footer/>

    </div>
  );
}

export default App;
