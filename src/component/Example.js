import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { add } from '../redux/action';

function Example() {
  const [show, setShow] = useState(false);
  const [title,settitle] = useState("");
  const [Poster,setposter] = useState("");
  const [Description,setdescription] = useState("");
  const [rating,setrating] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch();
  const handleSubmit = ()=>{
  dispatch(add({title,poster:Poster,description:Description,rating,id:Math.random()}))
  handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{marginTop:"20px"}}>
        ADD MOVIE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ajouter un titre de film"
                autoFocus
                onChange={(e)=>settitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>poster</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ajouter un image"
                autoFocus
                onChange={(e)=>setposter(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ajouter une description"
                autoFocus
                onChange={(e)=>setdescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ajouter une note pour film"
                autoFocus
                onChange={(e)=>setrating(e.target.value)}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;