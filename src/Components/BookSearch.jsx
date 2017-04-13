import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class BookSearch extends Component {

    constructor(props){
        super(props);
        this.state = {
            books: [],
        }
    }

    search = (event) => {
        // You can fetch the books at this url http://localhost:5000/books?q=yourSearchTerm
        const query = event.target.value;
        
        axios.get(`http://localhost:5000/books?q=${query}`)
            .then(response => {
                this.setState({books: response.data});
            })
            .catch(error => {
                console.log(error)
            });
    };

    render(){
        const books = this.state.books.map(book => {
            return (
                <div key={book.id} className="search-result">
                    <Link to={`/detail/${book.id}`}>
                        {book.title}
                    </Link>
                </div>
            )
        });
        return (
            <div id="search-component">
                <h4>Search your library</h4>
                <input id="search-box" onKeyUp={this.search} />
                <div>
                    {books}
                </div>
            </div>
        );
    }
}
