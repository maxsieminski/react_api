import React, { useState } from "react"
import { fetchData } from "../../common/utils"

export function EditBook(props) {
  const [updatedBook, setUpdatedBook] = useState({ title: "", authors: "" })
  const [id, setId] = useState(0)

  function updateBook() {
    const requestParams = {
      method: "PUT",
      body: {
        title: updatedBook.title,
        authors: updatedBook.authors,
      },
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }

    fetchData(`books/${id}`, requestParams)
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <p>Edit book</p>
      <select
        onChange={(option) => {
          setId(option.target.selectedIndex + 1)
        }}
      >
        {props.books.map((book) => (
          <option key={book.id}>{book.title}</option>
        ))}
      </select>
      <br />
      <input
        id="newBook"
        onChange={(title) => {
          setUpdatedBook({
            title: title.target.value,
            authors: updateBook.authors,
          })
        }}
        type="text"
      ></input>
      <br />
      <input
        id="newBook"
        onChange={(authors) => {
          setUpdatedBook({
            title: updatedBook.title,
            authors: `Authors: ${authors.target.value}`,
          })
        }}
        type="number"
      ></input>
      <br />
      <button
        className="Login-button"
        onClick={() => {
          updateBook()
          props.updateItems()
        }}
      >
        OK
      </button>
    </div>
  )
}

export default EditBook
