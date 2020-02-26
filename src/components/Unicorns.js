import React, { Component } from 'react';
import List from './List';
import ReactPaginate from 'react-paginate';

import axios from 'axios';

export default class Unicorns extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            offset: 0,
            pageCount: 0
        };

        this.loadCommentsFromServer = this.loadDataFromServer.bind(this);
        this.deleteUnicorn = this.deleteUnicorn.bind(this);
    }

    componentDidMount() {
        this.loadDataFromServer();
    }

    loadDataFromServer() {
        axios.get('/api/v1/count').then(
            response => this.setState(
                {
                    pageCount: Math.ceil(response.data.total / 30)
                }
            )
        ).catch(e => console.log(e));

        axios.get(`/unicorns?skip=${this.state.offset}&limit=30`).then(
            response => this.setState(
                {
                    data: response.data
                }
            )
        ).catch(e => console.log(e));
    }


    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 30);

        this.state.offset = offset;
        this.loadDataFromServer();
    };

    deleteUnicorn(id) {
        axios.delete('/unicorns/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            data: this.state.data.filter(el => el.id !== id)
        });
    }

    render() {
        return (
            <div>
                <List data={this.state.data} delete={this.deleteUnicorn} />

                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        );
    }
}
