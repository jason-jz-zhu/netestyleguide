import React, {Component} from 'react';
import './Collapse.css';

class Collapse extends Component
{
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

toggle = (e) => {
  this.setState({ visible: !this.state.visible });
}

  render(){
    return (
      <div className="Collapse">
        <h2 className="category-header">{this.props.header}
          <div className="toggler" onClick={this.toggle}>{this.state.visible ? `-` : `+`}</div>
        </h2>
        <div
          className="collapser"
          style={this.state.visible ? {maxHeight: '100vh', opacity: 1} : {maxHeight: '0', opacity:0}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Collapse;
