import React from 'react';
import '../../css/SpeechBubble.css';

const SpeechBubble = (props: any) => {
    const { color, name, id } = props;
    return (
      // <div className="speech-bubble"></div>

      <div className="si-wrapper-top si-has-border" style={{marginLeft: "0px",  marginTop: "0px"}}>
        <div className="si-shadow-wrapper-top">
        <div className="si-frame si-shadow-frame"></div>
        <div className="si-shadow-pointer-top">
        <div className="si-shadow-inner-pointer-top"></div>
        </div>
      </div>
      <div className="si-frame si-content-wrapper">
      <button type="button" className="si-close-button">×</button>
      <div className="si-content" style={{maxWidth: "1163px", maxHeight: "779px"}}>Click anywhere on the map to change my position!</div></div>
      
      <div className="si-pointer-top si-pointer-border-top"></div>
        <div className="si-pointer-top si-pointer-bg-top" style={{borderWidth: "15px", marginBottom: "0px", top: "-1px"}}>
        </div>
      </div>
      
    );
  };

  export default SpeechBubble;