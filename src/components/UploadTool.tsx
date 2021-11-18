import React, { useState } from 'react';
import { observer } from "mobx-react";

import styled from 'styled-components';
import '../css/UploadTool.css';


import UploadService from '../services/UploadService';

import SpinnerButton from './SpinnerButton';


const Div = styled.div`
  display: flex;
  margin-top: 20px;
	
  @media (min-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

const Input = styled.input`
`;


const UploadTool = () => {
  // 출처: https://chooworld.com/2021/05/26/react%EC%97%90%EC%84%9C-%ED%8C%8C%EC%9D%BC%EC%98%AC%EB%A6%AC%EA%B8%B0-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84-2021-04-16-%EA%B8%88/
	// 담을 state
  const [selectedFile, setSelectedFile] = useState(null);
	const [isButtonOn, setIsButtonON] = useState(false);
	
  // onChange역할
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
 
  // formData라는 instance에 담아 보냄
  const handleFileUpload = () => {
    const formData = new FormData();

		if(selectedFile === null) {
			return alert('사진 파일을 선택해주세요.')
		}

    formData.append("file", selectedFile, selectedFile.name);
		
		setIsButtonON(true);
		UploadService.uploadImage(formData).then(res => {
      console.log(res);
    }).catch(e => {
      console.log(e);
    }).finally(() => {
			setIsButtonON(false);
		});
  };

  return (
    // <Div>
		// 	<Input type="file" onChange={handleFileChange} />
    //   <Button onClick={handleFileUpload}>업로드</Button>
		// </Div>

		// 출처: https://www.devglan.com/react-js/file-upload-react-spring-rest
		<Div>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="form-group files color">
							<label>이미지 파일 업로드</label>
								<div className="row">
									<div className="col-sm-8">
										<input type="file" className="form-control" name="file" accept="image/*" onChange={handleFileChange.bind(this)}/>
										{/* <input type="file" name="file" onChange={handleFileChange.bind(this)}/> */}
									</div>
									<div className="col-sm-4">
										<SpinnerButton click={handleFileUpload} disabled={isButtonOn} name={'검색'} />
									</div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</Div>
)};

export default UploadTool;







