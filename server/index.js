const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const e = require("express");
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  try {
  const data = JSON.parse(fs.readFileSync("books.json", "utf-8"));
  res.status(200).json({
    message: "Books Data",
    data
  });
} catch (error) {
    console.log(error)
}
    });

app.post("/addbook", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("books.json", "utf-8"));
    const newBook = req.body;
    data.push(newBook);

    fs.writeFileSync("books.json", JSON.stringify(data, null, 2));
  
    res.status(200).json({
      message: "New Book Added",
      newBook: newBook,
    });
  } catch (error) {
    console.log(error);
  }
})


app.listen(1337, () => {
    console.log("Server is running on port 1337");
});