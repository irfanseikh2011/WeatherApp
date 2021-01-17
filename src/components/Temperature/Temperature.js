import React from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from '../Clock/Clock';
import Date from '../Date/Date';



const Temperature = ({state}) => {

    return(
        <div className="" >
            <Card style={{width: '18rem',height:'25rem'}} >
            <Card className="d-flex     justify-content-start">
                <Card.Header as="h5">{state.data.name}{state.data.cod===200 ? ","+state.data.sys.country: "Kolkata,IN"}
                <Date/>
                <Clock/> 
                </Card.Header>
            </Card>
                <Card.Body className="d-flex     justify-content-center align-center">
                <Card.Title>Special title treatment</Card.Title>
            </Card.Body>
            </Card>
        </div>
    );
}

export default Temperature;


// //*{
// if(state.isLoaded=== true){
//     if(state.cityMatched === true){
//         print(degree)

//     }else{
    // print(not found city)

// }

// }*//