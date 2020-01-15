/// <reference no-default-lib="true"/>
import React from "react";
import NoteItem from "./NoteItem/NoteItem";
import { makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { NotesListProps } from "../../ts-types/ts-types";

const useStyles = makeStyles((theme: Theme) => ({
  notesList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
}));

type Props = NotesListProps;

const NotesList: React.FC<Props> = ({
  notes,
  removeNote,
  editNote,
  getActiveTag,
  getActiveCategory,
  activeTag,
  activeCategory,
  searchValue,
}) => {
  const newNotes = [...notes]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .reverse();

  const classes = useStyles();

  return (
    <List className={classes.notesList}>
      {activeTag !== "" || activeCategory !== ""
        ? newNotes.map(note =>
            note.tags.some(t => t.tag === activeTag) ||
            note.categories.some(t => t.categoryValue === activeCategory) ? (
              <NoteItem
                note={note.text}
                id={note.id}
                key={note.id}
                tags={note.tags}
                categories={note.categories}
                color={note.color}
                date={note.date}
                removeNote={removeNote}
                editNote={editNote}
                getActiveCategory={getActiveCategory}
                getActiveTag={getActiveTag}
              />
            ) : null
          )
        : newNotes.map(note =>
            note.text.toLowerCase().includes(searchValue.toLowerCase()) ? (
              <NoteItem
                note={note.text}
                id={note.id}
                key={note.id}
                tags={note.tags}
                categories={note.categories}
                color={note.color}
                date={note.date}
                removeNote={removeNote}
                editNote={editNote}
                getActiveCategory={getActiveCategory}
                getActiveTag={getActiveTag}
              />
            ) : null
          )}
    </List>
  );
};

export default NotesList;
