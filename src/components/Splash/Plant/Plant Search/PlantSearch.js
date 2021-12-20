import React, { useState } from 'react';
import { Form, Label, Input, Button } from 'reactstrap';
import {Collapse} from 'react-bootstrap';



const PlantSearch = (props) => {
  const [open, setOpen] = useState(false);
  // const [search, setSearch] = useState([]);

    return (
      <div>
      <Button 
      id = 'searchExpand'
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}
    >
      Click to Search
    </Button>
    <Collapse in={open} dimension="width">
      <Form onSubmit={props.fetchPlant} className="searchInput">
        <Input id="plantsearch" 
      type='text'
      placeholder="Search"
      onChange = {(e) => props.setSearch(e.target.value)}
        value={props.search}
        />
        
      <Button type ='submit'>Search</Button>
      </Form>
      </Collapse>
      </div>


  )
}

export default PlantSearch;