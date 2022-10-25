import React from "react";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Notes = (props) => {
  const deleteNote = () => {
    props.onselect(props.id);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <br />
      <h1>{props.content}</h1>
      <Button onClick={deleteNote} className="dbtn">
        <DeleteOutlineIcon className="delbtn" />
      </Button>
    </div>
  );
};

export default Notes;
