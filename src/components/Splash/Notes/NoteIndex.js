import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from 'reactstrap';
import NoteTable from './NoteTable';
import NoteEdit from './NoteEdit';

const NoteIndex = (props) => {
const [notes, setNotes] = useState([]);
const [updateActive, setUpdateActive] = useState(false);
const [noteToUpdate, setNoteToUpdate] = useState({});

const fetchNotes = () => {
    fetch('http://localhost:3000/notes/all', {
        method:'GET',
        headers:new Headers({
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Authorization':`Bearer ${props.token}`
        })
    }).then( (res) => res.json())
        .then((noteData)=> {
            setNotes(noteData)
        })
}
useEffect(() => {
    fetchNotes();
}, []);

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
    return (
        <Container>
            <Row>
              
                <Col md='9'>
                    <NoteTable notes={notes} editUpdateNote={editUpdateNote} updateOn={updateOn} fetchNotes={fetchNotes} token={props.token}/>
                </Col>
                {updateActive ? <NoteEdit noteToUpdate={noteToUpdate} updateOff={updateOff} token= {props.token} fetchNotes={fetchNotes}/> : <></>
            }
            </Row>
        </Container>
    )
}

export default NoteIndex;