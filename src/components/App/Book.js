import { fetchData } from "../../common/utils"

export function Book(props) {
  function deleteBook() {
    const requestParams = {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }

    fetchData(`books/${props.currentBook.id}`, requestParams)
      .then((data) => {
        props.updateItems()
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <p>{props.currentBook.title}</p>
      <br />
      {props.currentBook.title && (
        <button
          className="Login-button"
          onClick={() => {
            deleteBook()
          }}
        >
          Delete
        </button>
      )}
    </div>
  )
}

export default Book
