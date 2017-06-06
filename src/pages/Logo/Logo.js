import React, { Component } from 'react';
import SmallSwatch from '../../components/ColorSwatches/SmallSwatch/SmallSwatch';
import List from '../../components/Layout/List/List';
import { FlexRow, FlexColumn, FlexObject } from '../../components/Layout/Flex';
import PlaceHolderImage from '../../components/Layout/PlaceHolderImage/PlaceHolderImage';
import './Logo.css';
import Footer from '../../components/Footer/Footer';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <h1>Logo</h1>
        <FlexColumn>
          <FlexRow>
            <FlexObject flex={4} >
              <figure>
                <PlaceHolderImage width="450px" height="140px" />
                <figcaption>NETE Basic Logo</figcaption>
              </figure>
            </FlexObject>
            <List listName="Acceptable Colors:">
              <SmallSwatch color="#205493" />
              <SmallSwatch color="#FFFFFF" border={1} />
            </List>
          </FlexRow>

          <FlexRow>
            <FlexObject flex={4} >
              <figure>
                <PlaceHolderImage width="140px" height="140px" />
                <figcaption>NETE N Logo</figcaption>
              </figure>
            </FlexObject>
            <List listName="Acceptable Colors:">
              <SmallSwatch color="#205493" />
              <SmallSwatch color="#FFFFFF" border={1} />
            </List>
          </FlexRow>

          <FlexRow>
            <FlexObject flex={4} >
              <figure>
                <PlaceHolderImage width="450px" height="150px"/>
                <figcaption>NETE Solutions Logo</figcaption>
              </figure>
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
