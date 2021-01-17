import React from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Search = ({onInputChange, onSubmitchange, callback}) => {
    return(
        <div className="m-3 flex flex-column justify-center w-90">
            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Control onChange={onInputChange} type="search" placeholder="Kolkata" />
                <Form.Text className="text-light">
                    Get to know the weather of your favourite place.
                </Form.Text>
                </Form.Group>
                <Button onClick={onSubmitchange} variant="primary" className="btn-lg m-2">Search</Button>
            </Form>
        </div>
    );
}




export default Search;

