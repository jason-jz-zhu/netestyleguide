import React, { Component } from 'react';
import TypeFace from '../../components/Typography/TypeFace/TypeFace';
import Collapse from '../../components/Layout/Collapse/Collapse';
import './Typography.css';
import Footer from '../../components/Footer/Footer';

class Typography extends Component {
  render() {
    return (
      <div className="Typography">
        <h1>Typography</h1>
        <Collapse header="Titles and Headers">
          <TypeFace font="Avenir Next Condensed" weights={[['ultralight',200],['regular',400]]}/>
          <TypeFace font="Maven Pro"/>
        </Collapse>
        <Collapse header="Sub Headers">
          <TypeFace font="Roboto" weights={[['light', 300],['regular',400]]}/>
        </Collapse>
        <Collapse header="Body">
          <TypeFace font="Open Sans" weights={ [['light', 300],['regular',400]]}/>
          <TypeFace font="Lato" weights={ [['light', 300],['regular',400]]}/>
        </Collapse>
        <Collapse header="Numbers">
          <TypeFace font="Avenir Next" weights={ [['light', 300]]}/>
          <TypeFace font="Work Sans" weights={ [['extralight', 200]]}/>
        </Collapse>

        <Footer
          preTitle={'BASICS'} preContent={'Colors'} preLink={'/Colors'}
          afterTitle={'BASICS'} afterContent={'Icons'} afterLink={'/Icons'}
        />
      </div>
    );
  }
}

export default Typography;
