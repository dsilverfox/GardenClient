import React, { useState } from 'react';
import { CardGroup, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


 const PlantDisplay = (props) => {

     return(
         <div className="Plants">
           <CardGroup>
               {props.plant.map((plant, index) => {
                   return (
                       <Col xs = '12' sm = '10' md = '6' lg = '4' key={index}>
                           <Card id={plant.id}/>
                             <CardBody>
                               <CardImg alt='plant image placeholder'
                               src={props.plant.results.imageurl}
                               top
                               width='100%'/>
                               <CardTitle tag= 'h5'>{props.plant.results.tvfname}</CardTitle>
                               <CardSubtitle>{props.plant.results.othname}</CardSubtitle>
                               </CardBody>
                           </Col>
                           )}
                )}
            </CardGroup>     
         </div>

     )
 }

 export default PlantDisplay;

