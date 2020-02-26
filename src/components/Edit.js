import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);

        this.onChangeCountry = this.onChangeCountry.bind(this);

        this.onChangeLastFundingOn = this.onChangeLastFundingOn.bind(this);

        this.onChangeTotalEquityFunding = this.onChangeTotalEquityFunding.bind(this);

        this.onChangeFoundedOn = this.onChangeFoundedOn.bind(this);

        this.onChangeCategory = this.onChangeCategory.bind(this);

        this.onChangeMoneyVal = this.onChangeMoneyVal.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            country: '',
            last_funding_on: 2000,
            total_equity_funding: 0,
            founded_on: '',
            category: '',
            post_money_val: 0
        }
    }

    onChangeName(e) {
        this.setState(
            { name: e.target.value }
        );
    }

    onChangeCountry(e) {
        this.setState(
            { country: e.target.value }
        );
    }

    onChangeLastFundingOn(e) {
        this.setState(
            { last_funding_on: e.target.value }
        );
    }

    onChangeTotalEquityFunding(e) {
        this.setState(
            { total_equity_funding: e.target.value }
        );
    }

    onChangeFoundedOn(e) {
        this.setState(
            { founded_on: e.target.value }
        );
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }

    onChangeMoneyVal(e) {
        this.setState(
            {
                post_money_val: e.target.value
            }
        );
    }
    onSubmit(e) {

        e.preventDefault();

        const unicorn = {
            name: this.state.name,
            country: this.state.country,
            last_funding_on: this.state.last_funding_on,
            total_equity_funding: this.state.total_equity_funding,
            founded_on: this.state.founded_on,
            category: this.state.category,
            post_money_val: this.state.post_money_val
        };

        console.log(unicorn);

        axios.patch(`http://localhost:1337/unicorns/${this.props.match.params.id}`, unicorn).then(
            res => console.log(res)
        );

        window.location = '/';
    }

    componentDidMount() {
        // this.props.match.params.id

        axios.get('http://localhost:1337/unicorns/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    country: response.data.country,
                    last_funding_on: response.data.last_funding_on,
                    total_equity_funding: response.data.total_equity_funding,
                    founded_on: response.data.founded_on,
                    category: response.data.category,
                    post_money_val: response.data.post_money_val
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (

            <div id="content-wrapper" class="mui--text-center">
                <div class="mui--appbar-height"></div>
                <br />
                <br />
                <div class="mui--text-display3">Create Unicorn</div>
                <br />
                <br />

                <form className="mui-form" onSubmit={this.onSubmit}>

                    <legend>Unicorn</legend>

                    <legend>{this.props.match.params.id}</legend>

                    <legend>Name</legend>
                    <div className="mui-textfield">
                        <input id="name" type="text" name="" value={this.state.name} onChange={this.onChangeName} />
                    </div>

                    <legend>Country</legend>

                    <div className="mui-textfield">
                        <input id="country" type="text" name="" value={this.state.country} onChange={this.onChangeCountry} />
                    </div>

                    <legend>Last funding on</legend>

                    <div className="mui-textfield">
                        <input id="last_funding_on" type="text" name="" value={this.state.last_funding_on} onChange={this.onChangeLastFundingOn} />
                    </div>


                    <legend>total equity funding</legend>

                    <div className="mui-textfield">
                        <input id="total_equity_funding" type="text" name="" value={this.state.total_equity_funding} onChange={this.onChangeTotalEquityFunding} />
                    </div>


                    <legend>founded on</legend>


                    <div className="mui-textfield">
                        <input id="founded_on" type="text" name="" value={this.state.founded_on} onChange={this.onChangeFoundedOn} />
                    </div>

                    <legend>category</legend>


                    <div className="mui-textfield">
                        <input id="category" type="text" name="" value={this.state.category} onChange={this.onChangeCategory} />
                    </div>

                    <legend>post money val</legend>

                    <div className="mui-textfield">
                        <input id="post_money_val" type="text" name="" value={this.state.post_money_val} onChange={this.onChangeMoneyVal} />
                    </div>

                    <button className="mui-btn mui-btn--raised" type="submit">Save</button>
                </form>

            </div>
        );
    }
}