import { useState, useEffect } from "react"
import { FormInput, Header, SectionNotes, Footer } from "./components"
import style from "./styles/app.module.css"
import { getInitialData } from "./utils"

function App() {
  const [query, setQuery] = useState("")
  const [searchNotes, setSearchNotes] = useState([])
  const [notes, setNotes] = useState(getInitialData())

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived)
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived)

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    )
  }, [query, notes])

  return (
    <>
      <Header />
      <main className={style.main}>
        <FormInput
          search={query}
          updateQuery={setQuery}
          updateNotes={setNotes}
        />
        <SectionNotes
          label="Catatan Aktif"
          notes={activeNotes}
          setNotes={setNotes}
        />
        <div id="arsip">
          <SectionNotes
            label="Catatan Arsip"
            notes={archivedNotes}
            setNotes={setNotes}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
