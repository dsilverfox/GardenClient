import React from "react";
import "./Notes.css";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Button, Container } from "reactstrap";
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
            src="https://picsum.photos/318/180"
            top
            width="50%"
          />
          <CardBody className="cardBody">
            <CardTitle tag="h5">{note.title}</CardTitle>
            <CardText>{note.noteBody}</CardText>
            <Button
              color="warning"
              onClick={() => {
                props.editUpdateNote(note);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              color="danger"
              onClick={() => {
                deleteNote(note);
              }}
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
