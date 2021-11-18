import React, {useState} from 'react';
import { Container, Row, Col, Button, Table, Modal, Card } from 'react-bootstrap';

import TodoList from 'components/TodoList';

const Discussion = ({}) => {
  const [lists, setLists] = useState([
    { id: 1, title: "이런 문제에 대해 대구시가 관심을 가져야", content: "- 아파트 정문 입구 안전문이 없어 외부에 노출되어 아무나 드나들 수 있으므로 도난과 주민 안전사고 위험 다분 \n- 수도관이 노후 하고 외부로 노출되어 있어 겨울철이 되면 동파 현상이 자주 발생 \n- 정식 경로당이 없어 정부로부터 지원받는 혜택이 전혀 없음 \n- 외벽이 노후 되어 빗물이 방안으로 스며드는 가정이 있으며 천정에 빗물이 새어 들어와 도배지를 적시는 경우가 있음\n- 환경이 열악한 관계로 외국인들이 많이 거주하고 있으며 주인은 외부로 많이 이주한 상태", release: "2021-11-21 13:35:00", liked: true },
  ]);

  lists.reverse()

  const [show, setShow] = useState(false);
  const [md, setMd] = useState(lists[0]);
  const [fullscreen, setFullscreen] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // const handleDelete = (movie) => {
  //   const newMovies = movies.filter(m => m.id !== movie.id);
  //   setLists(newMovies);
  // }

  const clickRow = (movie) => {
    setFullscreen(true);
    setMd(movie);
    handleShow();
  }

  return(
   <div>
     <br />
     <h1 style={{textAlign: "center"}}> 토론방 </h1>

     <Button style={{float:"right"}} onClick={() =>{}}>주제등록</Button>
     
     <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>등록시간</th>
            {/* <th>좋아요</th> */}
            {/* <th>삭제</th> */}
          </tr>
        </thead>
        <tbody>
          {lists.map(item =>
            <tr key={item.id} onClick={()=>{clickRow(item)}}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.release}</td>
              {/* <td><Like liked={item.liked} onClick={() => handleLike(item)} /></td> */}
              {/* <td><button onClick={() => handleDelete(item)}>Delete</button></td> */}
            </tr>
          )}
        </tbody>
      </Table>
      <Modal 
        size="lg"
        show={show} 
        // fullscreen={fullscreen}
        onHide={handleClose}
        scrollable={true}
        // dialogClassName="modal-90w"
        // aria-labelledby="example-custom-modal-styling-title"
        
      >
          
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <p style={{fontSize:"24px"}}>
              {md.title}
            </p>
            <p style={{fontSize:"8px", float:"right"}}>
              <text style={{color:"gray"}}>등록일: {md.release} </text>
            </p>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{whiteSpace:"pre-wrap"}}>
          <p style={{fontSize:"12px"}}>
            {md.content}
          </p>
          <Table>
            <thead>
              <tr>
                <th>댓글</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <Card>
                <Card.Header style={{fontSize:"12px"}}>nohuhut****</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p style={{fontSize:"12px"}}>
                      동의합니다.
                    </p>
                    <footer className="blockquote-footer" style={{fontSize:"12px"}}>
                      <cite title="Source Title">2021-11-22 14:20:20</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
              </tr>
              <tr>
              <Card>
                <Card.Header style={{fontSize:"12px"}}>apaApa****</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p style={{fontSize:"12px"}}>
                      정말 하루빨리 해결됐으면 좋겠네요ㅠ
                    </p>
                    <footer className="blockquote-footer" style={{fontSize:"12px"}}>
                      <cite title="Source Title">2021-11-23 11:10:20</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
              </tr>
              <br />
              <Button variant="primary" onClick={() => {}}>
            참여하기
          </Button>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
   </div>
  );
};

export default Discussion;