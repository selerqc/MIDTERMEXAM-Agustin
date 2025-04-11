import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../pages/Viewbooks.css";
function Viewbooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      await axios
        .get("http://localhost:1337")
        .then((response) => {
          setBooks(response.data.data);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchBooks();
  }, []);
  return (
    <div>
      <Navbar />
      {books && (
        <div className="viewbooks">
          <div className="books-table">
            <h1>LIST OF BOOKS INCLUDED</h1>
            <TableContainer
              component={Paper}
              style={{ backgroundColor: "#f5f5f5" }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Book ID</TableCell>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Author&nbsp;</TableCell>
                    <TableCell align="left">Publication Year&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {books.map((books) => (
                    <TableRow
                      key={books.bookId}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}>
                      <TableCell component="th" scope="row">
                        {books.bookId}
                      </TableCell>
                      <TableCell align="left">{books.title}</TableCell>
                      <TableCell align="left">{books.author}</TableCell>
                      <TableCell align="left">
                        {books.publicationYear}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
      {!books && (
        <div className="empty-books">
          <h1>No Books Available</h1>
        </div>
      )}
    </div>
  );
}

export default Viewbooks;
