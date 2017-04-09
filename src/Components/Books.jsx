import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBooks, deleteBook } from '../actions/index';

class Books extends Component {

  componentWillMount() {
    console.log("Props Books in componentWillMount: ", this.props);
    this.props.onGetBooks();
  }

  componentDidMount() {
    console.log("Props in Books in componentDidMount: ", this.props);
    //this.refreshList();
  }

  // refreshList = () => {
  //   // Get the book list @ http://localhost:5000/books
  //   axios.get("http://localhost:5000/books")
  //     .then(response => {
  //       this.setState({books: response.data});
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     });
  // };

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
    console.log("Props in Books: ", this.props);
    return (
      <div>
        <h2>My Library</h2>
        <div>
          {/*<label>Book's title:</label>
          <input
            type="text"
            value={this.state.inputContent}
            onChange={(e) => this.setState({inputContent: e.target.value})}
          />
          <button onClick={this.add}>
            Add
          </button>*/}
        </div>
        <br />
        <hr />
        <ul className="books">
          {this.props.books.map(book => (
            <li
              key={book.id}
              className={this.props.selectedBook && this.props.selectedBook.id === book.id && 'selected'}
              //onClick={() => this.setState({selectedBook: book})}
            >
              <span className="badge">{book.id}</span>
              {book.title}
              <button
                className="delete"
                onClick={() => this.props.onDeleteBook(book.id)}
              >x
              </button>
            </li>
          ))}
        </ul>

        {/*{this.state.selectedBook &&
        <div>
          <h2>
            {this.state.selectedBook.title} is my favorite book
          </h2>
          <Link to={`/detail/${this.state.selectedBook.id}`}>View details</Link>
        </div>
        }*/}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("State in Books: ", state);
  return { 
    books: state.books.all,
    book: state.books.book 
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBooks: () => {
      dispatch(fetchBooks())
    },
    onDeleteBook: (id) => {
      dispatch(deleteBook(id))
    }
  }
}

//export default connect(mapStateToProps, {fetchBooks})(Books);
export default connect(mapStateToProps, mapDispatchToProps)(Books);