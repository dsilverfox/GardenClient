import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import NoteCreate from './NoteCreate';
import NoteTable from './NoteTable';
import NoteEdit from '/NoteEdit';


const NoteIndex = (props) => {

    const [notes, setNotes] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [noteToUpdate, setNoteToUpdate] = useState({});

    const fetchNotes = () => {
        fetch('http://localhost:3000/note/', {
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
                    <NoteTable notes={notes} fetchNotes={fetchNotes} token={props.token}  editUpdateNote={ editUpdateNote } updateOn={updateOn}/>
                </Col>
                {updateActive ? <NoteEdit noteToUpdate={noteToUpdate} updateOff={updateOff} token={props.token} fetcNotes={fetchNotes}/> : <div></div>} 
            </Row>
    </Container>
    )
}

export default NoteIndex;