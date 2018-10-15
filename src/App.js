import React, { Component } from 'react';
import './App.css';


const myOb = {
  name: 'Spotify',
  user:'Albus Dumbeldo',
  mystyle : {
    color: 'green',
    'fontSize': '50px'
    },
defaultStyles :{
  color: '#a93f76',
  fontFamily: 'verdana'
},

}
 
class App extends Component {
  
  constructor(props)
  {
    super(props);
    this.state ={user:{}}
  }
  componentDidMount()
  {
    setTimeout(()=>{
       this.setState({
         user: myOb.name
       });
    },10000);
   
  }
  render() {
    return ( <div className = "App" >
      <h1 style = { myOb.mystyle} > {myOb.name} </h1> 
      <Jkroling user={this.state.user} / >
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
    this.state ={serverFakeData:myOb.user}
  }
  render()
  {
    return(<div style={{...myOb.defaultStyles,display:'inline-block'}}>
     
       <h3> {this.state.serverFakeData+"'s  "}
      Playlist  </h3>
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
