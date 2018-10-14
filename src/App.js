import React, { Component } from 'react';
import './App.css';


const myOb = {
  name: 'Nimantha Nadeeraka',
  mystyle : {
    color: '#FF2345',
    'font-size': '50px'
    },
defaultStyles :{
  color: 'red',
  fontFamily: 'verdana'
},

}
 
class App extends Component {
  
  constructor(props)
  {
    super(props);
    this.state ={name:myOb.name}
  }
  render() {
    return ( <div className = "App" >
      <h1 style = { myOb.mystyle} > {myOb.name} </h1> 
      <Jkroling name={this.state.name} / >
      <Filter / >
      <Playlist />


      </div>
    );
  }
}

class Filter extends Component
{
  render()
  {
    return(<div><input type='text' />
    <button>Filter</button>
    </div>)
  }

}

class Playlist extends Component
{
  constructor(props)
  {
    super(props);
    this.state ={serverFakeData:myOb.name}
  }
  render()
  {
    return(<div style={{...myOb.defaultStyles,display:'inline-block'}}>
      <image/>
       <h3> {this.state.serverFakeData}
      Playlist Name </h3>
      <ul>
      <li>Playlist 1</li>
      </ul>
      <ul >
        <li> Playlist 1 </li> 
        </ul>
        <ul>
          <li> Playlist 1 </li> 
          </ul>

      
      </div>)
  }
}

class Jkroling extends Component
{
  render()
  {
    return(<div>
      <p style={myOb.defaultTextColour}>
      { this.props.state && this.props.state.name }
      Number Text Number Text < /p>
      
      </div>)
  }
}




export default App;
