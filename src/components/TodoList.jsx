import { useState, useRef } from 'react'
import { Button, InputGroup, FormControl, Navbar, ListGroup, Container, Form} from 'react-bootstrap'
import { CheckLg, XLg } from 'react-bootstrap-icons'
import ReactTooltip from "react-tooltip";

export default function TodoList(props) {
  const {todos, setTodos} = props
  const [text, setText] = useState("")
  const [complete, setComplete] = useState(false)
  
  const handleTextOnChange = (e) => {
      setText(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const updateTodos = [...todos, text]
    setTodos(updateTodos)
    console.log(text);
    setText("")
  }

    const handleClick = (item) => {
      const updateTodos = todos.filter(x => x !== item)
      setTodos(updateTodos)
    }
  
  // const selectedTask = useRef()

  const handleCompleted = (e, task) => {

    console.log(completedTodo);
    console.log(e.target)
    if (complete === false) {
      setComplete(true)
      e.target.parentElement.firstChild.style.textDecoration = "line-through"
    } else {
      e.target.parentElement.firstChild.style.textDecoration = "none"
      setComplete(false)
    }
  }
  
  return (
    <div className="task-input">
      <Navbar bg="light" expand="lg">
  <Container fluid>
      <InputGroup className="p-1 " >
        <InputGroup.Text placeholder='Add a new task...'>
          Define your task
        </InputGroup.Text>
        <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" value={text} onChange={handleTextOnChange} />
        <Button variant="primary" type="submit" onClick={handleSubmit}> add task </Button>
      </InputGroup>
  </Container>
</Navbar>

<ListGroup as="ul" className="pt-4">
  {todos.map((task, i) => {
    return (
      <ListGroup.Item as="li" key={i} index={i} className="d-flex bd-highlight example-parent">
        <h5 className="pt-2 flex-grow-1 col-example" >{task}</h5>

          {<Button variant={complete ? 'success' : 'warning'} onClick={ handleCompleted } >{!complete ? (<> Pending! </>) : ( <> <CheckLg /> Completed </>)}</Button>}{' '}
    
          {<Button variant="outline-danger"  className="ms-2" onClick={() => { handleClick(task) }} data-tip data-for="deletionTip"><XLg /> Delete</Button>}
          <ReactTooltip id="deletionTip" place="top" effect="solid"> Delete Task!
          </ReactTooltip>

      </ListGroup.Item>
    )
  })}
</ListGroup>
      </div>
  )
}