import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayInformation from './components/DisplayInformation'

class App extends Component{
  state={
    name :'Shark',
    address :"ktm",
    phone: "12324",
    status:true
  }

  render() {
    let { name, address, phone, status} = this.state
    return (
     <div>
        <DisplayInformation
          name={name}
          address={address}
          phone={phone}
          status ={status}
        />  
    </div>
    )
  }
}
export default App;













// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

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

// export default App;
