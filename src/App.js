// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './components/Header';
import Section_1 from './components/Section_1';
// import Section_2 from './components/Section_2';
// import Section_3 from './components/Section_3';
// import Footer from './components/Footer';
import './style.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default function App(){
  return(
    <div>
      <Header/>
      <Section_1/>
      {/* <Section_2/> */}
      {/* <Section_3/> */}
      {/* <Footer/> */}
    </div>
  );
}
