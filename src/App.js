import React, {useState} from 'react';
import Icons from './components/Icons.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Card, CardBody, Container, Button, Col ,Row} from "reactstrap";

const itmeArray = new Array(9).fill("empty")

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

    const reloadGame = () => {
      setIsCross(false);
      setWinMessage("");
      itmeArray.fill("empty",0,8);
    }

    const checkIsWinner = () => {
        if (itmeArray[0]=== itmeArray[1] && itmeArray[0] === itmeArray[2] && itmeArray[0] !== "empty" ) {
              setWinMessage(`${itmeArray[0]} is winner`)
        } else if(itmeArray[3]=== itmeArray[4] && itmeArray[3] === itmeArray[5] && itmeArray[3] !== "empty")
        {
          setWinMessage(`${itmeArray[3]} is winner`)
        } else if(itmeArray[6]=== itmeArray[7] && itmeArray[6] === itmeArray[8] && itmeArray[6] !== "empty")
        {
          setWinMessage(`${itmeArray[6]} is winner`)
        } else if(itmeArray[0]=== itmeArray[3] && itmeArray[0] === itmeArray[6] && itmeArray[0] !== "empty")
        {
          setWinMessage(`${itmeArray[0]} is winner`)
        } else if(itmeArray[1]=== itmeArray[4] && itmeArray[1] === itmeArray[7] && itmeArray[1] !== "empty")
        {
          setWinMessage(`${itmeArray[1]} is winner`)
        }else if(itmeArray[2]=== itmeArray[5] && itmeArray[2] === itmeArray[8] && itmeArray[2] !== "empty")
        {
          setWinMessage(`${itmeArray[2]} is winner`)
        }else if(itmeArray[0]=== itmeArray[4] && itmeArray[0] === itmeArray[8] && itmeArray[0] !== "empty")
        {
          setWinMessage(`${itmeArray[0]} is winner`)
        }else if(itmeArray[2]=== itmeArray[4] && itmeArray[2] === itmeArray[6] && itmeArray[2] !== "empty")
        {
          setWinMessage(`${itmeArray[2]} is winner`)
        }
    }

    const changeItem = (itemNumber) =>{
      if (winMessage) {
        return toast(winMessage, {type : "success"})
      }
      if (itmeArray[itemNumber] === "empty") {
          itmeArray[itemNumber] = isCross ? "cross" : "circle"
          setIsCross(!isCross)
      }else{
        return toast("already filled", {type: "error"})
      }
      checkIsWinner();
    }


  return (
    <Container className='p-5 '>
      <ToastContainer position='bottom-center'/>
      <Row>
        <Col md= {6} className="offset-md-3 ">
          {winMessage ? (<div className='mb-2 mt-2 '>
            <h1 className="text-success text-uppercase text-center">
              {winMessage}
            </h1>
            <Button color='success' block onClick={reloadGame}>Reload</Button>
          </div>) : ( <h1 className='text-center text-warning' >
                  {isCross ? "Cross" : "Circle" } turns
          </h1> ) }
          <div className='grid'>
            {itmeArray.map((item, ind)=> (
              <Card color='warning' onClick={ () => changeItem(ind)  } >
                <CardBody className='box' >
                  <Icons name ={item}/>
                </CardBody>
              </Card>
            ) )}
          </div>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
