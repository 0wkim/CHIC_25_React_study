import {useState} from 'react';

function Intro(props) {
  return(
    <>
    <div class="intro">
      <h3>안녕하세요 제 이름은</h3>
      {props.introduce}
   </div>
   </>
  )
}

export default Intro;