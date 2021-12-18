import React from 'react';
import { Form, Label, Input, Button } from 'reactstrap';


const PlantSearch = (props) => {

    return (
      <Form onSubmit={props.fetchPlant}>
        <Label htmlFor='plantsearch'>Search</Label>
        <Input id="plantsearch" 
      type='text'
      placeholder="Search"
      onChange = {(e) => props.setSearch(e.target.value)}
        value={props.search}
        />
        
       <Button type ='submit'>Search</Button>
      </Form>

    )
}

export default PlantSearch;