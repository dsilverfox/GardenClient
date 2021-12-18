import React, { useState } from 'react';
// import { CardGroup, Col, Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
// import PlantSearch from './PlantSearch';

 const PlantDisplay = (props) => {
    //  const [onePlant, setOnePlant] = useState(false);
    //  const [grabPlant, setGrabPlant] = useState({});

     return(
        //  <div className="Plants">
        //    <CardGroup>
        //        {props.plant.map((plant, index) => {
        //            return (
        //                <Col xs = '12' sm = '10' md = '6' lg = '4' key={index}>
        //                    <Card id={plant.id}/>
        //                      <CardBody>
        //                        <CardImg alt='plant image placeholder'
        //                        src={props.plant.results.imageurl}
        //                        top
        //                        width='100%'/>
        //                        <CardTitle tag= 'h5'>{props.plant.results.tvfname}</CardTitle>
        //                        <CardSubtitle>{props.plant.results.othname}</CardSubtitle>
        //                        <CardText>For more information click the card title.</CardText>
        //                        </CardBody>
        //                    </Col>
        //                    )}
        //         )}
        //     </CardGroup>     
        //  </div>
        <div>
            {/* <p>{results.tvfname}</p> */}
        </div>
     )
 }

 export default PlantDisplay;

{/* {props.plant.results.imageurl}  will be the imagecap for the card
{props.plant.results.tvfname} PRIMARY TITLE: Also, Needs to be a link that will fire the fetchMorePlant. fetchMorePlant will use tvfname here to run the tvfitem fetch so that we can get more data about each plant 
{props.plant.results.othname} SUBTITLE */}