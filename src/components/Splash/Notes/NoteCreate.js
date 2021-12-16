import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'

const NoteCreate = (props) => {
    const [title, setTitle] = useState('');
    const [datePlanted, setDatePlanted] = useState([]);
    const [waterSched, setWaterSched] = useState('');
    const [light, setLight] = useState('');
    const [temp, setTemp] = useState(0);
    const [noteBody, setNoteBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/notes/create', {
            method: "POST",
            body: JSON.stringify({
                note: {
                    title: title,
                    datePlanted: datePlanted,
                    waterSched: waterSched,
                    light: light,
                    temp: temp,
                    noteBody: noteBody
                },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': `Bearer ${props.token}`
            }),
        })

        .then((res) => res.json())
        .then((noteData) => {
            console.log(noteData);
            setTitle('');
            setDatePlanted();
            setWaterSched('');
            setLight('');
            setTemp();
            setNoteBody('');
            props.fetchNotes();
        });
    }

    return (
        <div>
            <h3>Create a Plant Note</h3>
            <Form onSubmit={handleSubmit} className='table'>
                <FormGroup className="Textentry">
                    <Label htmlFor="title">Plant Title:</Label>
                    <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} id="title" />
                </FormGroup>
                <FormGroup className="Textentry">
                    <Label htmlFor="datePlanted">Date Planted:</Label>
                    <select className='calendar' type="select" name="datePlanted" value={datePlanted} 
                    //<imput got calander goes here. what schlader calandar? 
                    onChange={(e) => setDatePlanted(e.target.value)} id="datePlanted">
                    </select>
                </FormGroup>
                <FormGroup className="Textentry">
                    <Label htmlFor="waterSched">Water Schedule:</Label>
                    <input name="waterSched" value={waterSched} onChange={(e) => setWaterSched(e.target.value)} id="waterSched"/>
                </FormGroup>
                <FormGroup className="Textentry">
                    <Label htmlFor="light">Light Intake?</Label>
                    <imput name="light" value={light} onChange={(e) => setLight(e.target.value)} id="light" />
                </FormGroup>
                <FormGroup className="Textentry">
                    <Label htmlFor="temp">Plant Tempturate Environment</Label>
                    <input name="temp" value={temp} onChange={(e) => setTemp(e.target.value)} id="temp" />
                </FormGroup>
                <FormGroup className="Textentry">
                    <Label htmlFor="noteBody">Comments</Label>
                    <input name="noteBody" value={noteBody} onChange={(e) => setNoteBody(e.target.value)} id="noteBody" />
                </FormGroup>
                <Button type="sumbit" className="buttonstyle">Click to Submit Note</Button>
            </Form>
        </div>
    );

}


export default NoteCreate;