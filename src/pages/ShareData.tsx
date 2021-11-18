import React, {useState} from 'react';
import { Container, Row, Col, Button, Table, Modal, Card } from 'react-bootstrap';

import TodoList from 'components/TodoList';

const ShareData = ({}) => {
  const [lists, setLists] = useState([
    { id: 1, title: "낡고 오래된 저층주거지의 집수리를 지원하는 \'서울가꿈주택\' 집수리 보조사업", content: "- 지원내용 : 2019년 500호에 이어 2021년 100억 원을 투입해 주택성능개선지원구역 내 준공 후 20년 이상 경과한 단독주택(다중·다가구주택 포함)이나 공동주택(다세대·연립주택)이 단열‧방수 등 주택 성능개선 공사를 할 경우 공사비용의 최대 50%까지 집수시 보조금을 지원\n* 주택성능개선지원구역은 ‘서울특별시 저층주거지 집수리 지원에 관한 조례’ 제6조에 따라 지정하는 구역으로, 1월 기준 총 141개소가 지정되어 있음(재개발, 재건축 등 개발(예정)지역 제외)\n- 특     징 : 2021년부터는 도시 미관 공사나 창호‧단열 등 에너지효율 개선 공사 시 지원금을 추가로 지급함", 
    release: "2021-11-21 15:35:00", liked: true },
    { id: 2, title: "노후주거지 목동 \“엄지마을\”···\'도시재생+가로주택\' 국내 첫 사례", content: "[관리형 주거환경개선사업구역···”아파트 선호” 주민 의견 반영 사례] _ 2022년 착공 엄지마을은 목2동 6만8317㎡ 일원, 534가구 규모로, 구역 내 건축물 70% 이상이 20년 이상 노후 주택들로 구성돼 있다. 주거환경을 비롯해 열약한 기반시설과 안전시설 정비가 필요한 상황으로, 지난 2021년 1월 7일 '관리형 주거환경개선사업구역'으로 지정고시됐다.\n\n엄지마을 정비계획은 도로포장, 벽화 및 조명설치 등 기존의 소극적 방식에서 벗어나 주거환경개선사업 구역 내에서 가로주택 등 소규모 정비사업을 함께 추진하는 서울 내 첫 번째 사례다. 이 같은 변화는 아파트 등 공동주택 유형을 선호하는 주민들의 요구가 반영된 결과다. 도시재생이라는 큰 틀을 유지하면서도 '가로주택정비사업'을 접목해 일부 노후주택은 철거 후 약 300가구 규모의 새 아파트(공동주택)를 신축한다. 가로주택정비사업이 추진되는 구역은 엄지마을 전체 부지의 약 24.3%(1만6625㎡) 규모로 나머지 구역의 노후주택은 가꿈주택사업을 통해 수선·보강한다.  핵심은 전면철거가 아닌 리모델링 등을 통해 기존 주택을 고쳐쓰는 개념이다. 또한 마을의 중심가로에는 바닥조명을 활용한 보도-차도 분리 디자인을 적용해 보행자 안전을 강화한다. 계단 정비, CCTV 설치, 쓰레기 무단투기지역 개선 등이 진행되고, 주민 공동체 활성화 거점이 될 쉼터와 공동이용시설도 신규로 조성한다.\n\"양천구 엄지마을은 저층주거지의 물리적·사회적 재생에 방점을 뒀으며, 주거환경개선사업 구역 내에 가로주택정비사업을 접목하는 국내 첫 사례\＂에 큰 의미가 있다.", 
    release: "2021-11-21 15:35:00", liked: true }
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
     <h1 style={{textAlign: "center"}}> 자료방 </h1>


     <Button style={{float:"right"}} onClick={() =>{}}>글쓰기</Button>
     
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
                      자료 감사합니다.
                    </p>
                    <footer className="blockquote-footer" style={{fontSize:"12px"}}>
                      <cite title="Source Title">2021-11-25 14:20:20</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
              </tr>
              <br />
              <Button variant="primary" onClick={() => {}}>
            댓글 추가
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

export default ShareData;