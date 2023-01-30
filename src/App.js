import {useState} from "react"
import {Navbar,Container,Nav,Form,Button,Row,Col} from 'react-bootstrap';
import './App.css';
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'
import Board from './routes/Board.js'
import axios from 'axios'

function App() {

  let [shoes] = useState()
  let navigate = useNavigate();

  
  return (
    <div className="App">

      

        
      <Navbar className='snow-bar'>
        <Container>
          <Navbar.Brand href="/" className="vill" >SnowVillage</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/qualification')}}>스펙게시판</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/review')}}>합격후기게시판</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/question')}}>질문게시판</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="검색"
              placeholder="검색"
              className="me-2"
              aria-label="검색"
            />
            <Button variant="outline-secondary">search</Button>
          </Form>
          <div className="wrap">
            <ul className="submain">
              <li className="sign-in">
                <a href="signin">sign in</a>
              </li>
              <li className="sign-up">
                <a href="signup">sign up</a>
              </li>
            </ul>
          </div>        
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Routes>
      <Route path="/" element={<div className="container">
        <div className="row">
          <div className="col-md-4">
             <Link to ="/qualification">
               <img className="qual" alt="qualification" src={process.env.PUBLIC_URL + "img/스펙.jpg"}></img>
             </Link>  
            <h4 className="board">스펙게시판</h4>            
          </div>
          <div className="col-md-4">
             <Link to ="/review">
               <img className="review" alt="review" src={process.env.PUBLIC_URL + "img/합격후기.jpg"}></img>
             </Link>      
            <h4 className="board">합격후기게시판</h4>           
          </div>   
          <div className="col-md-4">
             <Link to ="/question">
               <img className="question" alt="question" src={process.env.PUBLIC_URL + "img/질문.jpg"}></img>
             </Link>              
            <h4 className="board">질문게시판</h4>
          </div>          
        </div>
      </div>} />
        <Route path="/qualification" element={<Board/>}/>
        <Route path="review" element={<Board/>}/>
        <Route path="question" element={<Board/>}/>
        <Route path="*" element={<div>없는 페이지</div>}/>
        
        
            
      </Routes>

      


      
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보</h4>
    </div>
  )
}

export default App;
