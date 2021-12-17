import React from 'react';
import {InputGroup} from 'reactstrap';
import {FormControl} from 'react-bootstrap'


const PlantSearch = () => {

    return (
        <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
    )
}

export default PlantSearch;