import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested } from '../../actions';
import { compose } from '../../utils';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const { bookStoreService, booksLoaded, booksRequested } = this.props;
        booksRequested();
        bookStoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const { books, loading } = this.props;
        if (loading){
            return <Spinner />
        }
        return(
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={ book.id }><BookListItem book={ book }/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ books, loading }) => {
    return { books, loading };
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
