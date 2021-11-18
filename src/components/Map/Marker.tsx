import React from 'react';
import '../../css/Marker2.css';

const Marker = (props: any) => {
    const { color, name, id, isHidden } = props;
    return (
      // <div hidden={isHidden}>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
          onClick={()=> {}}
        />
        // <div className="pulse" />
        // <div>
          
        // </div>
      // </div>
    );
  };

  export default Marker;