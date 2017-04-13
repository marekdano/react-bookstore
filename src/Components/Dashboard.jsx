import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { BookSearch } from './BookSearch';
import { fetchBooks } from '../actions/index';

class Dashboard extends React.Component {

  componentWillMount() {
    this.props.onGetBooks();
  }

  render() {
    return (
      <div className="container">
        <h3>All Books</h3>
        <BookSearch />
        <br />
        <hr />

        {this.props.isFetching && <h3>Loading...</h3>}

        <div className="grid grid-pad">

          {this.props.books.map(book => (
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

const mapStateToProps = (state) => {
  return { 
    books: state.books.all,
    isFetching: state.books.isFetching 
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBooks: () => {
      dispatch(fetchBooks());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
