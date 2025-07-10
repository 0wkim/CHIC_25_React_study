
import {useState} from 'react';

import './App.css';
import Closing from './components/Closing';
import First from './components/First'; 
import Intro from './components/Intro';

function App() {
  const [Introdata] = useState(
    {
      introduce: "정보융합학부 24학번 박서현입니다"
    }
  )
  const [Closingdata] = useState(
    {
      month: "7월 10일 목요일" ,
      day: "폭염주의보. 매우 더움"
    }
  )

  return (
    <>
    <Intro introduce={Introdata.introduce}/>
    <First />
    <Today />
    <Name />
    <Reference />
    <Closing month={Closingdata.month} day={Closingdata.day}/>
    </>
  );
}


function Today() {
  return(
    <article>
        <h2>Today's wheather is :</h2> 
        Sunny
    </article>
  )
}
function Name() {
  return(
     <nav>
        <h3>My name is :</h3> 
        SeoHyeon Park
    </nav>
  )
}
function Reference() {
  return(
     <footer>
        <h4>I am</h4>
        irreplacable
    </footer>
  )
}


export default App;
