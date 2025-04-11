import React from "react";
import Navbar from "../pages/Navbar";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import "../pages/AddBooks.css";
function AddBooks() {
  const [bookData, setBookData] = useState({
    bookId: "",
    title: "",
    author: "",
    publicationYear: "",
  });

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      bookData.bookId === "" ||
      bookData.title === "" ||
      bookData.author === "" ||
      bookData.publicationYear === ""
    ) {
      alert("Please fill all fields");
      return;
    }
    await axios
      .post("http://localhost:1337/addbook", bookData)
      .then((res) => {
        alert(res.data.message);

        setBookData({
          bookId: "",
          title: "",
          author: "",
          publicationYear: "",
        });
      })
      .catch((error) => {
        alert("Error Adding Book");
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="addbooks">
        <Box className="add-box">
          <h2 className="add-header">ADD BOOKS</h2>
          <TextField
            name="bookId"
            className="text-field"
            placeholder="Book ID"
            value={bookData.bookId}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="title"
            className="text-field"
            placeholder="Title"
            value={bookData.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="author"
            className="text-field"
            placeholder="Author"
            value={bookData.author}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="publicationYear"
            className="text-field"
            placeholder="Publication Year"
            value={bookData.publicationYear}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            className="submit-button"
            onClick={handleSubmit}>
            Add Book
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default AddBooks;
