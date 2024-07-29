import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row ,DropdownButton} from 'react-bootstrap';
function Todoform({ addTodo, editTodo, currentTodo }) {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    if (currentTodo) {
      setTodo(currentTodo);
    } else {
      setTodo([]);
    }
  }, [currentTodo]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.name || !todo.description) {
      setError("feilds are req");
    } else {
      if (currentTodo) {
        editTodo(todo);
      } else {
        addTodo(todo);
      }
      setTodo([]);
    }


  };
  return (
    <>
      <h3>My ToDo</h3>
      <section className='first-section'>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col sm={3}>
              <Form.Group>

                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={todo.name}
                  onChange={handleChange}

                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group>

                <Form.Control
                  type="text"
                  name="description"
                  value={todo.description}
                  onChange={handleChange}
                  placeholder="Description"

                />
              </Form.Group>
            </Col>

            <Col sm={2} className="d-flex align-items-end">
              <Button variant="success" type="submit" className="w-100">
                Add To do
              </Button>
            </Col>



          </Row>
        </Form>
      </section>


    </>
  )
}

export default Todoform