
function Input(props) {
  return (
    <div>
      <input placeholder='enter somethings'></input>
      <p>{props.name}</p>
      <h3>{props.age}</h3>
    </div>
  )
}

export default Input
