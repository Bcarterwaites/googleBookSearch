import axios from "axios";

export default {
    // Call to google books API
getBooks: () => {
    return axios.get("/api/books");
},
searchBooks: (title) => {
    return axios.post("/search", {title: title});

},
addBookToDB: (bookData) => {
    return axios.post("/api/books", bookData)
},
deleteBook: (id) => {
    return axios.delete(`/api/books/${id}`);
}

}