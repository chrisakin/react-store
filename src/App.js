import React from 'react';
import Products from './Products.js';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div >
        <header className="App-header"><h1>Product List App</h1></header>
        <section className="body">
          <Products ></Products>
          <footer>
       <p> © 2020 Christopher Akintade</p>
      </footer>
        </section>
        
      </div>
      
    );
  }
} 

export default App;