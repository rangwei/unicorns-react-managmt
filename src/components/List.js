import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div id="content-wrapper" class="mui--text-center">
                <div class="mui--appbar-height"></div>
                <br />
                <br />
                <div class="mui--text-display3">Global Unicorn</div>
                <br />
                <br />
                <table className="mui-table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>country</td>
                            <td>last_funding_on</td>
                            <td>total_equity_funding</td>
                            <td>founded_on</td>
                            <td>category</td>
                            <td>post_money_val</td>
                            <td>operation</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.props.data.map(
                                u => <tr>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.country}</td>
                                    <td>{u.last_funding_on}</td>
                                    <td>{u.total_equity_funding}</td>
                                    <td>{u.founded_on}</td>
                                    <td>{u.category}</td>
                                    <td>{u.post_money_val}</td>
                                    <Link to={"/edit/" + u.id}>edit</Link> | <a href="#" onClick={() => { this.props.delete(u.id) }}>delete</a>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}