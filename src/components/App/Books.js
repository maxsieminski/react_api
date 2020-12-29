import Book from "./Book"
import logo from "./logo.svg"
import AddBook from "./AddBook"
import EditBook from "./EditBook"
import { useEffect, useState } from "react"
import { fetchData } from "../../common/utils"

export function Books() {
  const [books, setBooks] = useState([])
  const [currentBook, setCurrentBook] = useState({})
  const [editBook, setEditBook] = useState(false)
  const [addBook, setAddBook] = useState(false)

  useEffect(() => {
    updateItems()
  }, [])

  function updateItems() {
    fetchData("books", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((data) => setBooks(data))
      .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Sidebar">
        {books.map((book) => (
          <button
            className="Get-button"
            onClick={() => {
              updateItems()
              setCurrentBook(book)
              setAddBook(false)
              setEditBook(false)
            }}
            key={book.id}
          >
            {book.title}
          </button>
        ))}
        <button
          className="Get-button"
          onClick={() => {
            setAddBook(true)
            setEditBook(false)
          }}
        >
          Add book
        </button>
        <button
          className="Get-button"
          onClick={() => {
            setAddBook(false)
            setEditBook(true)
          }}
        >
          Edit books
        </button>
      </div>
      <div className="Main">
        {!addBook && !editBook && (
          <Book
            id={currentBook.id}
            title={currentBook.title}
            updateItems={updateItems}
          />
        )}
        {addBook && <AddBook updateItems={updateItems} />}
        {editBook && <EditBook updateItems={updateItems} books={books} />}
      </div>
    </div>
  )
}
