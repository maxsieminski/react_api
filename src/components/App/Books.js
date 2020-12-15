import logo from "./logo.svg"
import { useEffect, useState } from "react"
import { fetchData } from "../../common/utils"

export function Books() {
  const [books, setBooks] = useState([])
  const [currentBook, setCurrentBook] = useState({})

  useEffect(() => {
    fetchData("books", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((data) => setBooks(data))
      .catch((error) => console.log(error))
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
