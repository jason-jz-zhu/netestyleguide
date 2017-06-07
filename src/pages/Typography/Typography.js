import React, { Component } from 'react';
import TypeFace from '../../components/Typography/TypeFace/TypeFace';
import './Typography.css';
import Footer from '../../components/Footer/Footer';

class Typography extends Component {
  render() {
    return (
      <div className="Typography">
        <h1>Typography</h1>
        <div className="type-category">
          <h2 className="category-header">Titles and Headers</h2>
          <TypeFace font="Avenir Next Condensed" weights={[['ultralight',200],['regular',400]]}/>
          <TypeFace font="Maven Pro"/>
        </div>
        <div className="type-category">
          <h2 className="category-header">Sub Headers</h2>
          <TypeFace font="Roboto" weights={[['light', 300],['regular',400]]}/>
        </div>
        <div className="type-category">
          <h2 className="category-header">Body</h2>
          <TypeFace font="Open Sans" weights={ [['light', 300],['regular',400]]}/>
          <TypeFace font="Lato" weights={ [['light', 300],['regular',400]]}/>
        </div>
        <div className="type-category">
          <h2 className="category-header">Numbers</h2>
          <TypeFace font="Avenir Next" weights={ [['light', 300]]}/>
          <TypeFace font="Work Sans" weights={ [['extralight', 200]]}/>
        </div>
        <Footer
          preTitle={'BASICS'} preContent={'Colors'} preLink={'/Colors'}
          afterTitle={'BASICS'} afterContent={'Icons'} afterLink={'/Icons'}
        />
      </div>
    );
  }
}

export default Typography;
