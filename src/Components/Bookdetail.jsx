import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBook, updateBook } from '../actions/index';
import { reduxForm, Field } from 'redux-form';

class BookDetail extends Component {

  componentWillMount(){
    this.props.onGetBook(this.props.match.params.id) 
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { book, handleSubmit } = this.props;

    return (
      book ?
        <div>
          <h2>{book.title} details!</h2>
          <form onSubmit={handleSubmit(this.props.onUpdateBook)}>
            <div>
              <label>id: </label>
              {book.id}
            </div>
            <label>Book's title:</label>
            <div>
              <Field name="title" 
                  component="input"           
                  type="text"
                  placeholder="Title" />
            </div>
            <label>Category:</label>
            <div>
              <Field name="category" 
                  component="input"
                  type="text"
                  placeholder="Category" />
            </div>
            <button type="submit">Save</button>
          </form>
          <button onClick={this.goBack}>Back</button>
        </div>
        :
        <div />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    book: state.books.book,
    initialValues: state.books.book
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBook: (id, book) => {
      dispatch(fetchBook(id))   
    },
    onUpdateBook: (book) => {
      dispatch(updateBook(book.id, book))
    }
  }
}

BookDetail = reduxForm({
  form: 'newBookForm',
}, mapStateToProps, mapDispatchToProps)(BookDetail);

BookDetail = connect(mapStateToProps, mapDispatchToProps)(BookDetail);

export default BookDetail;

