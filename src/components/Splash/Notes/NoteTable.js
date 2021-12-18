import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Table, Button, Container} from 'reactstrap';
import { CardBody, Card, CardGroup, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';


const NoteTable = (props) => {
    const deleteNote = (note) => {
        console.log(note)
        fetch(`http://localhost:3000/notes/${note.id}`, {
            method:'DELETE',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization':`Bearer ${props.token}`
            })
        })
        .then(() => props.fetchNotes())
    }

    const noteMapper = () => {
        return props.notes.map((note, index) => {
            return(
    <CardGroup>
    <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {note.title}
      </CardTitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button color='warning' onClick={() => {props.editUpdateNote(note); props.updateOn()}}>Update</Button>
            <Button color='danger' onClick={() => {deleteNote(note)}}>Delete</Button>
    </CardBody>
  </Card>
</CardGroup>
                

)})}


    return (
        <div>
            {noteMapper()};
        </div>



     
    )
}

export default NoteTable;