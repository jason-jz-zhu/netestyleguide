import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import './LogoAsset.css';


// creates a grey box to represent an image
const LogoAsset = (props) => {
  return (
    <figure >
      <a href={props.src} download style={{position: 'relative'}}>
        <div className="hover-icon" >
          <FontIcon className="material-icons" color='#FFF'>file_download</FontIcon>
        </div>
        <img src={props.src} alt="Logo"/>
      </a>
      <figcaption>{props.logoName}</figcaption>
    </figure>
  );
};

LogoAsset.propTypes = {
  logoName: PropTypes.string,
  src: PropTypes.string,
};

LogoAsset.defaultProps = {
  logoName: '',
  src: '',
};

export default LogoAsset;
