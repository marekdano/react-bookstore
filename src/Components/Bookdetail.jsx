import React, {Component} from 'react';
import axios from 'axios';

export class BookDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: {
                id: 0,
                title: ""
            },
        };
    }

    componentDidMount(){
        this.fetchBook(this.props.match.params.id);
    }

    fetchBook = (id) => {
        // Get the book details at http://localhost:5000/books/id
        axios.get(`http://localhost:5000/books/${id}`)
            .then(response => {
                this.setState({book: response.data});
            })
            .catch(error => {
                console.log(error)
            });
    };

    update = (event) => {
        this.setState({
            book: {
                ...this.state.book,
                title: event.target.value
            }
        });
    }

    save = () => {
        // Update the book details at http://localhost:5000/books/id 
        const {book} = this.state;

        axios.put(`http://localhost:5000/books/${book.id}`, {
                title: book.title
            })
            .then(response => {
                this.setState({book: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    };

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        const {book} = this.state;
    
        return (
            book ?
                <div >
                    <h2>{book.title} details!</h2>
                    <div>
                        <label>id: </label>{book.id}</div>
                    <div>
                        <label>Title: </label>
                        <input value={book.title} onChange={this.update} placeholder="title"/>
                    </div>
                    <button onClick={this.goBack}>Back</button>
                    <button onClick={this.save}>Save</button>
                </div>
                :
                <div />
        );
    }
};
