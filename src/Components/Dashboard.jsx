import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import { BookSearch } from './BookSearch';

export class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount(){
    // You should fetch de books from http://localhost:5000/books
    // and store them in your state
    axios.get("http://localhost:5000/books")
      .then(response => {
          this.setState({books: response.data});
      })
      .catch(error => {
          console.log(error)
      });
  }

  render() {
    return (
      <div>
        <h3>All Books</h3>
          <BookSearch />
        <br />
        <hr />

        <div className="grid grid-pad">

          {this.state.books.map(book => (
            <Link key={book.id} to={`/detail/${book.id}`} className="col-1-4">
              <div className="module hero">
                <h4>{book.title}</h4>
              </div>
            </Link>
          ))}

        </div>
      </div>
    );
  }
}
