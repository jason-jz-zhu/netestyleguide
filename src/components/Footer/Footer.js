import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
  const scrollFunction = (event) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="footer">
      <div className="nav-footer">
        { /* pre page button */  }
        <div style={props.preTitle !== undefined && props.preContent.length > 8 ? { width: '100px' } : { width: '60px' } }>
          {props.preTitle !== undefined ?
            <Link to={props.preLink}  onClick={scrollFunction}>
              <h2>
                <div className="top-gray">{props.preTitle}</div> <div className="bottom-black">{props.preContent}</div>
              </h2>
            </Link> : null}
        </div>
        { /* left angule mark */  }
        <div className="left-angle">
          {props.preTitle !== undefined ?
            <i className="fa fa-angle-left fa-3x" aria-hidden="true"></i> : null}
        </div>
        { /* the verticality line */  }
        <div className="vLine" />
        { /* right angule mark */  }
        <div className="right-angle">
          <i className="fa fa-angle-right fa-3x" aria-hidden="true"></i>
        </div>
        { /* next page button */  }
        <div className="next-page">
          {props.afterTitle !== undefined ?
            <Link to={props.afterLink} onClick={scrollFunction}>
              <h2>
                <div className="top-gray">{props.afterTitle}</div> <div className="bottom-black">{props.afterContent}</div>
              </h2>
            </Link> : null}
        </div>
      </div>
      <div className="divider">
        <span className="hLine" />
      </div>
      <div className="sub-footer">
        <h2>Last modified on </h2>
      </div>
    </div>
  );
};

Footer.propTypes = {
  preTitle: PropTypes.string,
  preContent: PropTypes.string,
  preLink: PropTypes.string,
  afterTitle: PropTypes.string,
  afterContent: PropTypes.string,
  afterLink: PropTypes.string,
}

export default Footer;
