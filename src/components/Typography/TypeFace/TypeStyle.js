import React from 'react';
import PropTypes from 'prop-types';
import List from '../../Layout/List/List';
import { FlexRow,  FlexObject } from '../../Layout/Flex';

const TypeStyle = (props) => (
  <div className="type-style" style={{ fontFamily:props.font, fontWeight: props.weight[1], marginBottom: '1.5em'}}>
    <FlexRow>
      <FlexObject>
        <div style={{fontSize:'4em', lineHeight:1}}>Aa</div>
      </FlexObject>
      <FlexObject flex={3}>
        <div>{`ABCDEFGHIJKLMNOPQRSTUVWXYZ`}</div>
        <div>{`abcdefghijklmnopqrstuvwxyz`}</div>
        <div>{`1234567890(,.;:?!$&*)`}</div>
      </FlexObject>
      <List listName={props.font} flex={2} style={{paddingLeft: '1em', borderLeft: '1px solid #DEDEDE', fontSize:'0.8em',}}>
        <div style={{ fontWeight: '400',}}>
          <div>Weight: <b>{props.weight[0]}</b></div>
          <div>Style: <b>{props.styleName}</b></div>
        </div>
      </List>
    </FlexRow>
  </div>

);

TypeStyle.propTypes = {
  font : PropTypes.string.isRequired,
  weight: PropTypes.array,
  styleName: PropTypes.string,
};

TypeStyle.defaultProps = {
  weight: ['regular',400],
  styleName: 'normal'
}
export default TypeStyle;
