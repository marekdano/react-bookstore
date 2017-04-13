
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field, reset } from 'redux-form';
import { 
  fetchBooks, 
  deleteBook, 
  selectBook, 
  fetchBook,
  createBook } from '../actions/index';

class Books extends Component {
  
  componentWillMount() {
    this.props.onGetBooks();
  }

  renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={placeholder} type={type}/>
        {touched && error && <span className="message-error">{error}</span>}
      </div>
    </div>
  )

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div>
        <h2>My Library</h2>
        <div>        
          <form onSubmit={handleSubmit(this.props.onSubmit)}>
            <div>
              <Field name="title" 
                component={this.renderField} 
                type="text"
                label="Book's title" 
                placeholder="Title" />
              <button type="submit" disabled={pristine || submitting}>Add</button>
            </div>  
          </form>
        </div>
        <br />
        <hr />

        {this.props.isFetching && <h3>Loading...</h3>}
        
        <ul className="books">
          {this.props.books.map(book => (
            <li
              key={book.id}
              className={this.props.book && this.props.book.id === book.id && 'selected'}
              onClick={() => this.props.onGetBook(book.id)}
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

        {this.props.book &&
        <div>
          <h2>
            {this.props.book.title} is my favorite book
          </h2>
          <Link to={`/detail/${this.props.book.id}`}>View details</Link>
        </div>
        }

      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title required';
  }

  return errors;
}

const mapStateToProps = (state) => {
  return { 
    books: state.books.all,
    book: state.books.book, 
    isFetching: state.books.isFetching 
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBooks: () => {
      dispatch(fetchBooks());
    },
    onDeleteBook: (id) => {
      dispatch(selectBook(id));
      dispatch(deleteBook(id));
    },
    onGetBook: (id) => {
      dispatch(fetchBook(id));
    },
    onSubmit: (book) => {
      dispatch(createBook(book));
      dispatch(reset('BookForm'));
    }
  }
}

// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
Books = reduxForm({
  form: 'BookForm',
  validate
}, {}, mapDispatchToProps)(Books);

// Pass methods {fetchBooks, selectBook, fetchBook, createBook} 
// instead of creating mapDispatchToProps as a 2nd argument.
// export default connect(mapStateToProps, {fetchBooks})(Books);

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
Books = connect(mapStateToProps, mapDispatchToProps)(Books);

export default Books;