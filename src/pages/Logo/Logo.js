import React, { Component } from 'react';
import SmallSwatch from '../../components/ColorSwatches/SmallSwatch/SmallSwatch';
import List from '../../components/Layout/List/List';
import { FlexRow, FlexColumn, FlexObject } from '../../components/Layout/Flex';
import LogoAsset from '../../components/Layout/LogoAsset/LogoAsset';
import './Logo.css';
import Logo1 from './img/netelogo.png'
import Logo2 from './img/logon.png'
import Logo3 from './img/netepblogo.png'
import Footer from '../../components/Footer/Footer';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <h1>Logo</h1>
        <FlexColumn>
          <FlexRow>
            <FlexObject flex={4} >
              <LogoAsset logoName='NETE Basic Logo' src={Logo1} />
            </FlexObject>
            <List listName="Acceptable Colors:">
              <SmallSwatch color="#205493" />
              <SmallSwatch color="#FFFFFF" border={1} />
            </List>
          </FlexRow>

          <FlexRow>
            <FlexObject flex={4} >
              <LogoAsset logoName={'NETE N Logo'} src={Logo2} />
            </FlexObject>
            <List listName="Acceptable Colors:">
              <SmallSwatch color="#205493" />
              <SmallSwatch color="#FFFFFF" border={1} />
            </List>
          </FlexRow>

          <FlexRow>
            <FlexObject flex={4} >
              <LogoAsset logoName={'NETE Solutions Logo'} src={Logo3} />
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
