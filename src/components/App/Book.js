import { fetchData } from "../../common/utils"

export function Book(props) {
  function deleteBook() {
    const requestParams = {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }

    fetchData(`books/${props.id}`, requestParams)
      .then((data) => data)
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <p>{props.title}</p>
      <br />
      {props.title && (
        <button
          className="Login-button"
          onClick={() => {
            deleteBook()
            props.updateItems()
          }}
        >
          Delete
        </button>
      )}
    </div>
  )
}

export default Book
