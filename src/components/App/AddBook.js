import React, { useState } from "react"
import { fetchData } from "../../common/utils"

export function AddBook(props) {
  const [newBook, setNewBook] = useState({ title: "", authors: "" })

  function importBook() {
    const requestParams = {
      method: "POST",
      body: {
        title: newBook.title,
        authors: newBook.authors,
      },
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }

    fetchData("books", requestParams)
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <p>Add new book</p>
      <input
        id="newBook"
        onChange={(title) => {
          setNewBook({ title: title.target.value, authors: newBook.authors })
        }}
        type="text"
      ></input>
      <br />
      <input
        id="newBook"
        onChange={(authors) => {
          setNewBook({
            title: newBook.title,
            authors: `Authors: ${authors.target.value}`,
          })
        }}
        type="number"
      ></input>
      <br />
      <button
        className="Login-button"
        onClick={() => {
          importBook()
          props.updateItems()
        }}
      >
        OK
      </button>
    </div>
  )
}

export default AddBook
