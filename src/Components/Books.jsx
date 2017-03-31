import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class Books extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      inputContent: "",
      selectedBook: null
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    // Get the book list @ http://localhost:5000/books
    axios.get("http://localhost:5000/books")
      .then(response => {
        this.setState({books: response.data});
      })
      .catch(error => {
        console.log(error)
      });
  };

  add = () => {
    // Add your new book to http://localhost:5000/books 
    // json server will create an id for you if you don't provide one
    axios.post("http://localhost:5000/books", {
      title: this.state.inputContent
      })
      .then(response => {
        console.log(response);
        this.setState({books: [...this.state.books, response.data]})
      })
      .catch(error => {
        console.log(error)
      });
  };

  remove = (bookId) => {
   // Remove the book from the list by http://localhost:5000/books/bookId
   axios.delete(`http://localhost:5000/books/${bookId}`)
     .then(() => {
       const books = this.state.books.filter((book) => {
         return book.id !== bookId;
       });
       this.setState({ books });
     })
     .catch(error => {
       console.log(error)
     });
  };

  render() {
    return (
      <div>
        <h2>My Library</h2>
        <div>
          <label>Book's title:</label>
          <input
            type="text"
            value={this.state.inputContent}
            onChange={(e) => this.setState({inputContent: e.target.value})}
          />
          <button onClick={this.add}>
            Add
          </button>
        </div>
        <br />
        <hr />
        <ul className="books">
          {this.state.books.map(book => (
            <li
              key={book.id}
              className={this.state.selectedBook && this.state.selectedBook.id === book.id && 'selected'}
              onClick={() => this.setState({selectedBook: book})}
            >
              <span className="badge">{book.id}</span>
              {book.title}
              <button
                className="delete"
                onClick={() => this.remove(book.id)}
              >x
              </button>
            </li>
          ))}
        </ul>

        {this.state.selectedBook &&
        <div>
          <h2>
            {this.state.selectedBook.title} is my favorite book
          </h2>
          <Link to={`/detail/${this.state.selectedBook.id}`}>View details</Link>
        </div>
        }
      </div>
    );
  }
}
