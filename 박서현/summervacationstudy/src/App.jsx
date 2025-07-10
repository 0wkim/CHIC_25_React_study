

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

export default App;
