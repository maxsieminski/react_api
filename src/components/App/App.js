import { useEffect, useState } from "react"
import "./App.css"
import { fetchData } from "../../common/utils"
import logo from "./logo.svg"

function App() {
  const [books, setBooks] = useState([])
  const [currentBook, setCurrentBook] = useState({})

  useEffect(() => {
    fetchData("books").then((data) => setBooks(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Sidebar">
        {books.map((book) => (
          <button
            className="Get-button"
            onClick={() => setCurrentBook(book)}
            key={book.id}
          >
            {book.title}
          </button>
        ))}
      </div>
      <div className="Main">{currentBook.title}</div>
    </div>
  )
}

export default App
