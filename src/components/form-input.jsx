import { useState } from "react"
import Input from "./input"
import style from "../styles/form-input.module.css"

const FormInput = ({ updateNotes, search, updateQuery }) => {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")

  const createNote = (event) => {
    event.preventDefault()
    const timestamp = new Date().toISOString()

    updateNotes((notes) => [
      ...notes,
      {
        id: timestamp,
        title,
        body: note,
        archived: false,
        createdAt: timestamp,
      },
    ])
  }

  return (
    <form id="catatan" className={style.form} onSubmit={createNote}>
      <h2 className={style.heading}>
        Tambah Catatan{" "}
        <span className="nprinsley-text-glitchan">&#128218;</span>
      </h2>
      <small className={style.small}>
        <Input
          value={search}
          onChange={updateQuery}
          type="search"
          id="search_note"
          name="search_note"
          placeholder="Temukan catatan..."
        />
      </small>
      <Input
        value={title}
        onChange={setTitle}
        type="text"
        placeholder="Judul catatan"
        id="title"
        name="title"
        required
      />
      <Input
        value={note}
        onChange={setNote}
        type="textarea"
        placeholder="Tuliskan catatan..."
        id="note"
        name="note"
        required
      />
      <Input type="submit" id="submit_form" value="Tambahkan" />
    </form>
  )
}

export default FormInput
