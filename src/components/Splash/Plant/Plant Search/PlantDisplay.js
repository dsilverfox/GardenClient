import React  from 'react';
import './PlantDisplay.css';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';


const PlantDisplay = (props) => {

    return (
        <div className="plants">
             <Card className="plantCard" >
                <CardImg className="Image" top width="100%" src= {props.plant.imageurl} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Database Name: {props.plant.tfvname}</CardTitle>
                        <CardSubtitle>Botanical Name: {props.plant.botname}</CardSubtitle>
                        <CardText>Also known as: {props.plant.othname}.</CardText>
                    </CardBody>
            </Card> 
        </div>

    )
}

export default PlantDisplay;

