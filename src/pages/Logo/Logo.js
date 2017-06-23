import React, { Component } from 'react';
import SmallSwatch from '../../components/ColorSwatches/SmallSwatch/SmallSwatch';
import List from '../../components/Layout/List/List';
import { FlexRow, FlexColumn, FlexObject } from '../../components/Layout/Flex';
import LogoAsset from '../../components/Layout/LogoAsset/LogoAsset';
import './Logo.css';
import TestLogo1 from './img/TEST_LOGO1.PNG'
import TestLogo2 from './img/TEST_LOGO2.PNG'
import TestLogo3 from './img/TEST_LOGO3.PNG'
import Footer from '../../components/Footer/Footer';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <h1>Logo</h1>
        <FlexColumn>
          <FlexRow>
            <FlexObject flex={3} >
              <LogoAsset logoName='NETE Basic Logo' src={TestLogo1} />
            </FlexObject>
            <List listName="Acceptable Colors:">
              <SmallSwatch color="#205493" />
              <SmallSwatch color="#FFFFFF" border={1} />
            </List>
          </FlexRow>

          <FlexRow>
            <FlexObject flex={3} >
              <LogoAsset logoName={'NETE N Logo'} src={TestLogo2} />
            </FlexObject>
            <List listName="Acceptable Colors:">
              <SmallSwatch color="#205493" />
              <SmallSwatch color="#FFFFFF" border={1} />
            </List>
          </FlexRow>

          <FlexRow>
            <FlexObject flex={3} >
              <LogoAsset logoName={'NETE Solutions Logo'} src={TestLogo3} />
            </FlexObject>
            <List listName="Acceptable Colors:">
              <SmallSwatch color="#205493" />
              <SmallSwatch color="#FFFFFF" border={1} />
              <SmallSwatch color="#DFDFDF" />
            </List>
          </FlexRow>
        </FlexColumn>
        <Footer
          afterTitle={'BASICS'} afterContent={'Typography'} afterLink={'/Typography'}
        />
      </div>
    );
  }
}

export default Logo;
