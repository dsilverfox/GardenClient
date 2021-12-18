import React, { useEffect, useState } from 'react';
// import { CardGroup, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


const PlantDisplay = (props) => {
    const [toggle, setToggle] = useState(false);

    useEffect(() =>{
    if(props.plant === null){
        return;
    } else {
        setToggle(true);
    }
    return () => {
        setToggle(false);
    }, [props.plant]})

    return (
        <div className="Plants">
            { toggle ?
            <div>
            <h1>Plant Information</h1>
            <ul className='plantInfo'>
                <li>{`This plants tfvname is: ${props.plant.tfvname}.`}</li>
                <li>{`This plants botanical name is: ${props.plant.botname}.`}</li>
                <li>{`This plants other names are: ${props.plant.othname}.`}</li>
                <li>{`A picture is: ${props.plant.imageurl}.`} </li>
            </ul> </div> : <p>Nothing to display</p> }
        </div>

    )
}

export default PlantDisplay;

