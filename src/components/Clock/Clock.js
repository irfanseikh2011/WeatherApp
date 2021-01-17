import React  from 'react';
import LiveClock from "react-live-clock";
 
class Clock extends React.Component {
    render() {
        return(
            <h6>
                <LiveClock format="hh:mm:ss a" ticking />
            </h6>
        )
    }
}


export default Clock;