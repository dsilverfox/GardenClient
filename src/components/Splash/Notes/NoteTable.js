import React, { useEffect } from 'react';
import {Table, Button} from 'reactstrap';

const NoteTable = (props) => {
    const deleteNote= (note) => {
        fetch(`http://localhost:3000/note/delete/${note.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`

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
                <td>{note.datePlanted}</td>
                <td>{note.waterSched}</td>
                <td>{note.light}</td>
                <td>{note.temp}</td>
                <td>{note.noteBody}</td>
                <td>
                    <Button color='warning' onClick={()=> {props.editUpdatedNote(note); props.updateOn()}}>Update Note</Button>
                    <Button color='danger' onClick={()=> {deleteNote(note)}}>Delete Note</Button>
                </td>
            </tr>
            );
        });
    };
    
    return(
        <div>
            <h3>Plant Note History</h3>
            <hr/>
            <Table striped>
                <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Date Planted</th>
                <th>Water Schedule</th>
                <th>Light Intake?</th>
                <th>Plant Tempturate Environment</th>
                <th>Comments</th>
            </tr>
            </thead>
            <tbody>
                {noteMapper()}
            </tbody>
            </Table>
        </div>
    )
}

export default NoteTable;