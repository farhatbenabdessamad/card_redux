import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { edit } from '../redux/action';

function Editmovies({movie}) {
  const [show, setShow] = useState(false);
  const [title,settitle] = useState(movie.title);
  const [Poster,setposter] = useState(movie.poster);
  const [Description,setdescription] = useState(movie.description);
  const [rating,setrating] = useState(movie.rating);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch();
  const handleSubmit = ()=>{
 dispatch (edit(movie.id, {id:movie.id, title, poster: Poster, description:Description, rating})) 
handleClose()
}

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{marginTop:"20px"}}>
        EDIT MOVIE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={movie.title}
                autoFocus
                onChange={(e)=>settitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>poster</Form.Label>
              <Form.Control
                type="text"
                defaultValue={movie.poster}
                autoFocus
                onChange={(e)=>setposter(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                defaultValue={movie.description}
                autoFocus
                onChange={(e)=>setdescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                defaultValue={movie.rating}
                autoFocus
                onChange={(e)=>setrating(e.target.value)}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Editmovies;