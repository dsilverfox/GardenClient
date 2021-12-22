/* eslint-disable no-whitespace-before-property */
import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../../../helpers/environment';

const NoteEdit = (props) => {
    const [editTitle, setEditTitle] = useState (props.noteToUpdate.title);
    const [editDate, setEditDate] = useState (props.noteToUpdate.datePlanted);
    const [editWater, setEditWater] = useState (props.noteToUpdate.waterSched);
    const [editLight, setEditLight] = useState (props.noteToUpdate.light);
    const [editTemp, setEditTemp] = useState (props.noteToUpdate.temp);
    const [editBody, setEditBody] = useState (props.noteToUpdate.noteBody);

    const noteUpdate = (event, note) => {
        event.preventDefault();
        fetch(`${APIURL}/notes/${props.noteToUpdate.id}`, {
            method:'PUT',
            body:JSON.stringify({
                note:{
                    title: editTitle,
                    datePlanted: editDate, 
                    waterSched: editWater,
                    light:editLight,
                    temp:editTemp,
                    noteBody:editBody
                }
            }),
            headers:new Headers ({
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${props.token}`
            })
        }) .then ((res) => {
            props.fetchNotes();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit Note</ModalHeader>
            <ModalBody>
                <Form onSubmit= {(e) => noteUpdate(e) }>
                    <FormGroup>
                        <Label htmlFor='result'>Edit Title</Label>
                        <Input name='result' value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='result'>Edit Date</Label>
                        <Input name='description' value={editDate} onChange={(e) => setEditDate(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='result'>Edit Water</Label>
                        <Input name='definition' value={editWater} onChange={(e) => setEditWater(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='result'>Edit Light</Label>
                        <Input name='description' value={editLight} onChange={(e) => setEditLight(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='result'>Edit Temp</Label>
                        <Input name='description' value={editTemp} onChange={(e) => setEditTemp(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='result'>Edit Note Body</Label>
                        <Input name='description' value={editBody} onChange={(e) => setEditBody(e.target.value)}/>
                    </FormGroup>
                    <Button type='submit'>Update Note</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default NoteEdit;