import React, { useState } from 'react';
import { CardGroup, Col, Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';

 const PlantDisplay = (props) => {
    //  const [onePlant, setOnePlant] = useState(false);
    //  const [grabPlant, setGrabPlant] = useState({});

     return(
         <div className="Plants">
           <CardGroup>
               {props.plant.results.map((plant, index) => {
                   return (
                       <Col xs = '12' sm = '10' md = '6' lg = '4' key={index}>
                           <Card id={results.id}/>
                               <CardImg alt='plant image placeholder'
                               src={props.plant.results.imageurl}
                               top
                               width='100%'/>
                               <CardTitle tag= 'h5'>{props.plant.results.tvfname}</CardTitle>
                               <CardSubtitle>{props.plant.results.othname}</CardSubtitle>
                               <CardBody>
                                   <CardText>For more information click the card title.</CardText>
                               </CardBody>
                           </Card>
                       </Col>
                    )
                </CardGroup>
            </div>
               })}
                 <li>{props.plant.results.imageurl}</li> {/*will be the imagecap for the card*/}
                 <li>{props.plant.results.tvfname}</li> {/*PRIMARY TITLE: Also, Needs to be a link that will fire the fetchMorePlant. fetchMorePlant will use tvfname here to run the tvfitem fetch so that we can get more data about each plant */}
                 <li>{props.plant.results.othname}</li> {/*SUBTITLE */}
            </CardGroup>     
         </div>
     )
 }

 export default PlantDisplay;