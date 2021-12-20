import React, {useState} from "react";
import "../Notes.css";
import "bootstrap/dist/css/bootstrap.css";
import { Modal, Button, UncontrolledAlert } from "reactstrap";
import {
  Row,
  Col,
  CardBody,
  Card,
  CardGroup,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const NoteTable = (props) => {
  const deleteNote = (note) => {
    console.log(note);
    fetch(`http://localhost:3000/notes/delete/${note.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    }).then(() => props.fetchNotes());
  };

  

  const noteMapper = () => {
    return props.notes.map((note, index) => {
      return (
        <Card className='card' >
          <CardImg
            alt="Card image cap"
            src="https://images.unsplash.com/photo-1587334274328-64186a80aeee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80"
            top
            width="50%"
          />
          <CardBody className="cardBody">
            <CardTitle tag="h5">{note.title}</CardTitle>
            <CardText>{note.noteBody}</CardText>
            <Button
              className="edit"
              id="warning"
              onClick={() => {
                props.editUpdateNote(note);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              className="delete"
              id='danger'
              onClick={() => {
                const confirmBox = 
                window.confirm(
                "Do you really want to delete this Note?"
                
              )
              if (confirmBox === true) {
                deleteNote(note);
              }}
            }
            >
              Delete
            </Button>
          </CardBody>
        </Card>
      );
    });
  };

  return (
    <div className="cardGroup" >{noteMapper()}</div>
  );
};

export default NoteTable;