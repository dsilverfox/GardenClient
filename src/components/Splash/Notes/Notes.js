import React, {useState, useEffect} from 'react';
import {Button, Container, Row, Col} from 'reactstrap';
import NoteCreate from './NoteComponents/NoteCreate';
import NoteTable from './NoteComponents/NoteView';
import NoteEdit from './NoteComponents/NoteEdit';
import APIURL from '../../../helpers/environment';


const NoteIndex = (props) => {

    const [notes, setNotes] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [noteToUpdate, setNoteToUpdate] = useState({}); 
    const [displayOne, setDisplayOne] = useState(false);
  
    const [grabNote, setGrabNote] = useState({});

    const fetchNotes = () => {
        fetch(`http://${APIURL}/notes/all`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            }),
        }) 
        
            .then((res) => res.json())
            .then((noteData) => {
                setNotes(noteData);
            });
    }

    useEffect(() => {
        fetchNotes();
    }, [])
    
    
    const editUpdateNote = (note) => {
        setNoteToUpdate(note);
        console.log(note);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    return(
        <div>
       
     <Container>
             <Row>
                <Col md='3'>
                    <NoteCreate fetchNotes={fetchNotes} token={props.token}/>
                </Col>
                <Col md='9'>
                {notes.length > 0 ? 
                    <NoteTable notes={notes} editUpdateNote={editUpdateNote} updateOn={updateOn} fetchNotes={fetchNotes} token={props.token}/> : <div>You haven't created any notes yet!</div>}
                </Col>
                {updateActive ? <NoteEdit noteToUpdate={noteToUpdate} updateOff={updateOff} token={props.token} fetchNotes={fetchNotes}/> : <div></div>} 
            </Row>
    </Container></div>
    )
}

export default NoteIndex;