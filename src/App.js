import React, { Component } from 'react';
import './App.css';

const name = 'Nimantha Nadeeraka';
const green ='#FF2345';
const mystyle ={color:green , 'font-size':'50px'}
const defaultTextColour = {color:'red'};
const defaultStyles = {
  color: 'red',
  fontFamily: 'verdana'
};


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
  render()
  {
    return(<div style={{...defaultStyles,display:'inline-block'}}>
      <image/>
      <h3>Playlist Name</h3>
      <ul>
      <li>Playlist 1</li>
      </ul>
      
      </div>)
  }
}

class Jkroling extends Component
{
  render()
  {
    return(<div>
      <p style={defaultTextColour}>Number Text    Number Text</p>
      
      </div>)
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style={mystyle}>{name}</h1>
      <Jkroling />
      <Filter/>
      <Playlist/>
      < Playlist / >
      < Playlist / >
      
        </div>
    );
  }
}

export default App;
