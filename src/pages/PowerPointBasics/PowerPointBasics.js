import React, { Component } from 'react';
import SmallSwatch from '../../components/ColorSwatches/SmallSwatch/SmallSwatch';
import List from '../../components/Layout/List/List';
import { FlexRow, FlexColumn, FlexObject } from '../../components/Layout/Flex';
import PlaceHolderImage from '../../components/Layout/PlaceHolderImage/PlaceHolderImage';
import './PowerPointBasics.css';

class PowerPointBasics extends Component {
  render() {
    return (
      <div className="PowerPointBasics">
        <h1>PowerPoint</h1>
        <div>
          <h2>NETE PowerPoint Styling</h2>
          <FlexRow>
            <List listName="Slide Size:">540px &times; 960px</List>
            <List listName="Background Colors:">
              <SmallSwatch color="#205493" />
              <SmallSwatch color="#FFFFFF" border={1}/>
              <SmallSwatch color="#DEDEDE" />
            </List>
            <List listName="Fonts:" flex={2}>
              <div>TITLE: Avenir Next Condensed</div>
              <div>SLIDE HEADER: Avenir Next Condensed</div>
              <div>BODY: Open Sans</div>
            </List>
            <List listName="Fontsize:">{`> 24 point font`}</List>
          </FlexRow>
        </div>

        <div>
          <h2>{`PowerPoint Do's:`}</h2>
          <FlexRow>
            <FlexObject flex={1}>
              <ul>
                <li>Do include NETE Branding on title slides</li>
                <li>Do tell a story</li>
                <li>Do include headers on each slide</li>
                <li>Do include title slides for each section</li>
                <li>Do highlight important information by bolding or styling in a different color</li>
                <li>Do keep slides as simplistic as possible</li>
                <li>Do make sure all font is larger than 24 point</li>
                <li>Do follow the style guide</li>
                <li>Do include one thought per slide</li>
              </ul>
            </FlexObject>

            <FlexObject flex={1}>
              <figure>
                <PlaceHolderImage width="300px" height="150px" />
                <figcaption>Example</figcaption>
              </figure>
            </FlexObject>

          </FlexRow>
        </div>
        <div>
          <h2>{`PowerPoint Don'ts:`}</h2>
          <FlexRow>
            <FlexObject flex={1}>
              <ul>
                <li>Don't put too much content on the slides</li>
                <li>Don't include font smaller than 24 point</li>
                <li>Don't use oudated style templates</li>
                <li>Don't use bullet points</li>
              </ul>
            </FlexObject>
            <FlexObject flex={1}>
              <figure>
                <PlaceHolderImage width="200px" height="100px" />
                <figcaption>Example</figcaption>
              </figure>
            </FlexObject>

          </FlexRow>
        </div>
      </div>

    );
  }
}

export default PowerPointBasics;
