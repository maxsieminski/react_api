const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const fs = require("fs")
const app = express()

const database = __dirname + "/database.json"

let data = JSON.parse(fs.readFileSync(database, "utf8"))["books"]

function getData() {
  data = JSON.parse(fs.readFileSync(database, "utf8"))["books"]
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app
  .route("/books")
  .get(function (req, res) {
    getData()
    res.send(data)
  })
  .post(function (req, res) {
    fs.writeFile(
      database,
      JSON.stringify({
        books: data.concat({
          id: data.length + 1,
          title: req.body.title,
          authors: req.body.authors,
        }),
      }),
      (error) => {
        if (error) console.log(error)
      },
    )
    getData()
    res.send(data)
  })

app
  .route("/books/:id")
  .get(function (req, res) {
    getData()
    res.send(data[req.params.id - 1])
  })
  .put(function (req, res) {
    if (req.body.title) {
      data[req.params.id - 1]["title"] = req.body.title
    }
    if (req.body.authors) {
      data[req.params.id - 1]["authors"] = req.body.authors
    }
    fs.writeFileSync(
      database,
      JSON.stringify({
        books: data,
      }),
    )
    getData()
    res.send(data)
  })
  .delete(function (req, res) {
    for (let i = req.params.id - 1; i < data.length; i++) {
      data[i].id -= 1
    }

    data.splice(req.params.id - 1, 1)
    fs.writeFileSync(
      database,
      JSON.stringify({
        books: data,
      }),
    )
    getData()
    res.send(data)
  })

app.listen(8000, () => {
  console.log(`server is listening on port 8000`)
})
