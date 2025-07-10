function Closing(props){
  return(
    <>
    <div class="close">
      <h4>오늘은 2025년</h4>
      {props.month}
      <h5>날씨는</h5>
      {props.day}
    </div>
    </>
  )
}

export default Closing;