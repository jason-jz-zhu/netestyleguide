import React, { Component } from 'react';
import BigSwatch from '../../components/ColorSwatches/BigSwatch/BigSwatch';
import RowSwatch from '../../components/ColorSwatches/RowSwatch/RowSwatch';
import './Colors.css';
import Footer from '../../components/Footer/Footer';

class Colors extends Component {
  render() {
    return (
      <div className="Colors">
        <h1>Colors</h1>
        <div>
          <h2>{`NETE's Standard Palette`}</h2>
          <p>{`This palette should be used in all non web-based client deliverables and supporting presentation materials.`}</p>
          <div className="bigSwatch-container">
            <BigSwatch color="#205493" colorName="NETE Blue" rgbValue="32,84,148" hexValue="#205493" />
            <BigSwatch color="#4A4A4A" colorName="Mine Shaft" rgbValue="74,74,74" hexValue="#4A4A4A" />
            <BigSwatch color="#DEDEDE" colorName="Alto" rgbValue="222,222,222" hexValue="#DEDEDE" />
            <BigSwatch color="#FFFFFF" colorName="White" rgbValue="255,255,255" hexValue="#FFFFFF" border={1} />
          </div>
        </div>
        <div>
          <h2>{`NETE's Web-based Palette`}</h2>
          <p>{`This palette should be used in all web-based client deliverables and supporting presentation materials. This palette is not extensive, but should be used as a guide if including other colors in your soloution.`}</p>
          <div className="rowSwatch-container">
            <RowSwatch color="#205493" colorName="NETE Blue" rgbValue="32,84,148" hexValue="#205493" />
            <RowSwatch color="#DEDEDE" colorName="Light Font" rgbValue="222,222,222" hexValue="#DEDEDE" />
            <RowSwatch color="#4A4A4A" colorName="Dark Font" rgbValue="74,74,74" hexValue="#4A4A4A" />
            <RowSwatch color="#FFBC51" colorName="Yellow" rgbValue="255,188,81" hexValue="#FFBC51" />
            <RowSwatch color="#FC6668" colorName="Red" rgbValue="205,109,109" hexValue="#FC6668" />
            <RowSwatch color="#AFD389" colorName="Green" rgbValue="175,210,137" hexValue="#AFD389" />
            <RowSwatch color="#FFFFFF" colorName="White" rgbValue="255,255,255" hexValue="#FFFFFF" border={1} />
          </div>
        </div>
        <Footer
          preTitle={'BASICS'} preContent={'Logos'} preLink={'/Logo'}
          afterTitle={'BASICS'} afterContent={'Typography'} afterLink={'/Typography'}
        />
      </div>
    );
  }
}

export default Colors;
