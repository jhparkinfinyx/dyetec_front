import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }

  .arrow_box {
    display: none;
    position: absolute;
    width: 100px;
    padding: 8px;
    left: 0;
    margin-top: 12px;
    margin-left: -45px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    background: #333;
    color: #fff;
    font-size: 14px;
  }
  
  .arrow_box:after {
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -10px;
    border: solid transparent;
    border-color: rgba(51, 51, 51, 0);
    border-bottom-color: #333;
    border-width: 10px;
    pointer-events: none;
    content: ' ';
  }
  
  // span:hover + p.arrow_box {
  //   display: block;
  // }
`;

const BubbleDiv = styled.div`
  width: 12px;
  height: 12px;
  // margin: 20px auto;
  // margin: 5px auto;
  // background: #f3f3f3;
  // border: 1px solid #d8d8d8;
  text-align: center;

  div {
    position: relative;
    display: inline-block;
  }
  
  span {
    display: flex;
    // width: 200px;
    padding: 6px;
    cursor: pointer;
  }

  // text {
  //   font-size: 10px;
  // }
  
  span:hover + p.arrow_box {
    display: block;
  }
`;

let today = new Date(); 

const Marker2 = (props: any) => {
  const { color, place, id, isHidden, onClick } = props;

  
  return (
    // <div hidden={isHidden}>
      <Wrapper
        className="pin bounce"
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={place.name}
        onClick={onClick}
      >
        <BubbleDiv>
          <div>
            <span> </span>
            <p className="arrow_box">
              <text style={{"fontSize": "10px"}}>[{place.name ? place.name : "이름미상"}]</text><br />
              <text style={{"fontSize": "6px"}}>연식: {place.year === "" || place.year === 0 ? "미상" : today.getFullYear() - place.year+"년"}</text><br />
              <text style={{"fontSize": "6px"}}>층수: {place.floor === "" || place.floor === 0 ? "미상" : place.floor+"층"}</text><br />
              <text style={{"fontSize": "6px"}}>인구수: {place.population === "" || place.population === 0 ? "미상" : place.population+"명"}</text><br />
              <text style={{"fontSize": "6px"}}>지역: {place.state}</text>
            </p>
          </div>
        </BubbleDiv>
      </Wrapper>
      // </div>
  );
};

export default Marker2;

// const Marker2 = ({ text, onClick }) => (
//   <Wrapper
//     onClick={onClick}
//   >{text}</Wrapper>
// );

// Marker2.defaultProps = {
//   onClick: null,
// };

// Marker2.propTypes = {
//   onClick: PropTypes.func,
//   text: PropTypes.string.isRequired,
// };

// export default Marker2;
