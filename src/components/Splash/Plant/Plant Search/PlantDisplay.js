import React  from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './PlantDisplay.css';

const PlantDisplay = (props) => {

    return (
        <div className="Plants">
             <Card className="plantCard" key="id">
                <CardImg top width="100%" src={props.plant.imageurl} alt="Card image cap" />
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

