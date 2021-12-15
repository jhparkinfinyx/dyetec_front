import React, { useState } from 'react';
import { observer } from "mobx-react";

import { Container, Row, Col, Spinner, Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import '../css/UploadTool.css';

import useStore from 'stores/useStore';

import FabricService from '../services/FabricService';

import SpinnerButton from './SpinnerButton';

import GalleryItem from './Board/GalleryItem';

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


const UploadTool = observer(({}) => {

	const { fabricStore } = useStore();
	
	// 담을 state
	const [selectedFile, setSelectedFile] = useState(null);
	const [isButtonOn, setIsButtonON] = useState(false);
	const [uploadedImg, setUploadedImg] = useState([]);
	
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

		// const fileName = selectedFile.name.substr(0, selectedFile.name.lastIndexOf(".")); // + ".jpg";
		
		formData.append("file", selectedFile, selectedFile.name);
		// formData.append("name", fileName);
		
		setIsButtonON(true);
		FabricService.uploadImage(formData).then(res => {
			console.log(res);
			alert(res['data'].message);

			// succ
			if(res['data'].isSuccess === 1) {
				setUploadedImg(res['data'].img);
				fabricStore.setUploadedImg(res['data'].img);
				fabricStore.addImage(res['data'].img);
			}
			
			// fabricStore.setFabricList(res['data'][0]);
		}).catch(e => {
			console.log(e);
		}).finally(() => {
			setIsButtonON(false);
		});
  };

  return (
	<Div>
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="form-group files color">
						<label>이미지 파일 선택</label>
						<div className="row">
							<div className="col-sm-8">
								<input type="file" className="form-control" name="file" accept="image/*" onChange={handleFileChange.bind(this)}/>
								{/* <input type="file" name="file" onChange={handleFileChange.bind(this)}/> */}
							</div>
							<div className="col-sm-4">
								<SpinnerButton click={handleFileUpload} disabled={isButtonOn} name={'업로드'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Div>
)});

export default UploadTool;







