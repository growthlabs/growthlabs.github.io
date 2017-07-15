import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
    
      <div className="App " style={{textAlign:"left"}}>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
          <br /> <br /> 
          <ul className="nav nav-tabs">
               <li role="presentation"> <Link to='/map'   className="btn btn-lg"> Map</Link> </li>

  <li role="presentation"> <Link to='/props'   className="btn btn-lg"> Props</Link> </li>
  <li role="presentation"> <Link to='/events'   className="btn btn-lg"> Events</Link> </li>
  <li role="presentation"> <Link to='/funcclass'   className="btn btn-lg"> Class vs Functional</Link> </li>
  <li role="presentation"> <Link to='/funcclass'   className="btn btn-lg"> States</Link> </li>

</ul>
           
          {this.props.children}

          
          </div>
         </div> 
      </div>
    );
  }
}



export default App;
