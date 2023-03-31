import React, { useRef } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { v4 as uuid4 } from "uuid"

export default function Login({ onIdSubmit }){
    const idref = useRef()

    function handleSubmit(e){
        e.preventDefault();

        onIdSubmit(idref.current.value)
    }

    function createNewId(){
        onIdSubmit(uuid4())
    }
    
    return(
        <Container className="align-items-center d-flex" style={{height: '100vh'}}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter ID</Form.Label>
                    <Form.Control type="text" ref={idref} required></Form.Control>
                </Form.Group>
                <Button type="text" className="m-2">Login</Button>
                <Button onClick={createNewId} variant="secondary">Create A New Id</Button>
            </Form>
        </Container>
    )
}