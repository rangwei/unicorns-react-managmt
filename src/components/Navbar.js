import React, { Component } from 'react';

export default class Navbar extends Component {

    render() {
        return (
            <div>

                <header className="mui-appbar mui--z1">
                    <div className="mui-container">
                        <table>
                            <tr className="mui--appbar-height">
                                <td className="mui--text-title">RANG</td>
                                <td className="mui--text-right">
                                    <ul className="mui-list--inline mui--text-body2">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/create">Create</a></li>
                                        
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                </header>
            </div>
        );
    }

}