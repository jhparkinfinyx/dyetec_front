import React, { useState } from 'react';
import { observer } from "mobx-react";
import styled from 'styled-components';
import '../css/SearchTool.css';

const Form = styled.div`
  display: flex;
  margin-top: 20px;
	
  @media (min-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

const SearchTool = () => {
  
  return (
    <Form>
      <form action="" name="frm" className="search-tool search-tool-v2 search-tool-v1" method="get" style={{width:"100%"}} >
					<ol className="filter">
						<li>
							<div className="sort">분류1</div>
							<select name="cate1" id="cate1" onChange={() => {}}>
								<option value="">선택</option>
																			<option value="2">
											편성물(knit)											</option>
																					<option value="108">
											천연											</option>
																					<option value="109">
											재생											</option>
																					<option value="110">
											합성											</option>
																					<option value="111">
											기타											</option>
																	</select>
						</li>

						<li>
							<div className="sort">분류2</div>
							<select name="cate2" id="cate2" onChange={() => {}}>
								<option value="">선택</option>
															</select>
						</li>
					</ol>
					<div className="search-area">
						<input type="text" name="search" id="" placeholder="검색" className="inp-search" onKeyPress={() => {}} onChange={() => {}} />
						<button type="submit" className="btn-search"></button>
					</div>
					</form>
    </Form>
)};

export default SearchTool;







