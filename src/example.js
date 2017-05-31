import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      items: []
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  filter(e){
    this.setState({filter: e.target.value})
  }
  componentWillMount() {
    fetch( 'http://swapi.co/api/people/?format=json' )
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}) )
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    let items = this.state.items;
    if(this.state.filter){
      items = items.filter( item =>
        item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/>
          <Widget update={this.update}/>
          <Button>React</Button>
          <br/>
          {this.state.txt}
        </p>
        <input type="text"
        onChange={this.filter.bind(this)}/>
        {items.map(item =>
          <Person key={item.name} person={item} />)}
        {this.props.children}
      </div>
    );
  }
}
const Person = (props) => <h4>{props.person.name}</h4>
// const App = () => <h1>Hello stateless</h1>

// App.propTypes = {
//   txt: React.propTypes.string.isRequired
// }

// App.defaultProps= {
//   txt: 'default txt'
// }

const Widget = (props) => <input type="text" onChange={props.update}/>
const Button = (props) => <button>{props.children}</button>

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component) {
    if(!(propName in props)) {
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6) {
      return new Error(`${propName} was too short`)
    }
  }
}

export default App;
