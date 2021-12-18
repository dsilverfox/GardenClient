import React, { useState } from 'react';
import { Form, Label, Input, Button } from 'reactstrap';



const PlantSearch = (props) => {
  // const [search, setSearch] = useState([]);

  return (
    <Form onSubmit={props.fetchPlant}>
      <Label htmlFor='plantsearch'>Search</Label>
      <Input id="plantsearch"
        type='text'
        placeholder="Search"
        onChange={(e) => {
          console.log("setting plant");
          props.setSearch(e.target.value)
        }}
        value={props.search}
      />

      <Button type='submit'>Search</Button>
    </Form>

  )
}

export default PlantSearch;