

import './App.css';
import First from './components/First'; 

function App() {
  return (
    <>
    <First />
    <Today />
    <Name />
    <Reference />
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

function Intro() {
  return(
    <>
    <div class="intro">
      <h3>안녕하세요 제 이름은</h3>
      박서현
   </div>
   </>
  )
}

function Close(){
  return(
    <>
    <div class="close">
      <h4>오늘은</h4>
      2025-07-10
      <h5>날씨는</h5>
      맑음입니다
    </div>
    </>
  )
}
export default App;
