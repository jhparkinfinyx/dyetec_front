import React, {useState} from 'react';
import { observer } from "mobx-react";
import { Container, Row, Col, DropdownButton, Dropdown, ToggleButton } from 'react-bootstrap';
import styled from 'styled-components';

import useStore from '../stores/useStore';


const FilterList =  observer( () => {
  const { oldDataStore } = useStore();

  const onClickItem = (idx, i) => {
    // alert(`${idx},${i}`);
    oldDataStore.setFilterList(idx, i);
  };
  
  const ItemComponent = ({idx, list}) => {
    
    return (
      list.map((v, i, a) => {        
        return <Dropdown.Item as="button" onClick={() => {onClickItem(idx, i)}}>{v}</Dropdown.Item>
      })
      // <Dropdown.Item as="button" onClick={() => {onClickItem(v)}}>{v}</Dropdown.Item>
    )
  }

  const isMarker = oldDataStore.getMarkerFlag;
  const setMarker = (checked) => {
    oldDataStore.setMarkerFlag(checked);
  }
  // const [checked, setChecked] = useState(false);
  // const [radioValue, setRadioValue] = useState('1');

  return (
    <Row>{
    oldDataStore.getFilterList.map((value, idx, arr) => {
      
      return(
        <Col>
          <DropdownButton id="filter-list-dropdown" title={value.title+":"+value.list[value.selected]} variant="white">
            <ItemComponent idx={idx} list={value.list} />
          </DropdownButton>
        </Col>
      )
    })
    }
    <Col>
    위치표시: 
    <ToggleButton
        className="mb-2"
        style={{"margin":"1px"}}
        size="sm"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={isMarker}
        value="1"
        onChange={(e) => setMarker(e.currentTarget.checked)}
      >
        {isMarker ? 'ON' : 'OFF'}
      </ToggleButton>
      </Col>
    </Row>
  );
});

export default FilterList;