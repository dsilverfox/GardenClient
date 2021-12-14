import React from 'react';
import {Table, Button} from 'reactstrap';

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
                <tr key={index}>
                    <th scope='row'>{note.id}</th>
                    <td>{note.title}</td>
                    <td>
                        <Button color='warning' onClick={() => {props.editUpdateNote(note); props.updateOn()}}>Update</Button>
                        <Button color='danger' onClick={() => {deleteNote(note)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    } 

    return (
        <>
        <h3>My Plant Notes</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {noteMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default NoteTable