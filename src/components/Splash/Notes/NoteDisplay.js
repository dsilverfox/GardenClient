import React, {useState, useEffect} from 'react';
import {Button, Container, Row, Col} from 'reactstrap';



const NoteDisplay = (props) => {

    const [note, setNote] = useState([]);
     


    const fetchNotes = () => {
        fetch(`http://localhost:3000/notes/${note.id}`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            }),
        }) 
        
            .then((res) => res.json())
            .then((noteData) => {
                setNote(noteData);
            });
    }

    useEffect(() => {
        // fetchNotes();
    }, [])

    return(
        <Container>
                <Row>
                   
                <Button color='warning' onClick={() => {props.editUpdateNote(note); props.updateOn()}}>Update</Button>
               </Row>
       </Container>
       )
   }

   export default NoteDisplay;