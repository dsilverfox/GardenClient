import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'reactstrap';
import NoteCreate from './NoteCreate';
import NoteTable from './NoteTable';
import NoteEdit from './NoteEdit';


const NoteIndex = (props) => {

    const [notes, setNotes] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [noteToUpdate, setNoteToUpdate] = useState({});

    const fetchNotes = () => {
        fetch('http://localhost:3000/notes/all', {
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
     <Container>
             <Row>
                <Col md='3'>
                    <NoteCreate fetchNotes={fetchNotes} token={props.token}/>
                </Col>
                <Col md='9'>
                {notes.length > 0 ? 
                    <NoteTable notes={notes} editUpdateNote={editUpdateNote} updateOn={updateOn} 
                    fetchNotes={fetchNotes} token={props.token}/> : <div>You haven't created any notes yet!</div>}
                </Col>
                {updateActive ? <NoteEdit noteToUpdate={noteToUpdate} updateOff={updateOff} token={props.token} 
                fetchNotes={fetchNotes}/> : <div></div>} 
            </Row>
    </Container>
    )
}

export default NoteIndex;