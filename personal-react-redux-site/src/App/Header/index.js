import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoins } from "../../redux/coins";
import "./index.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }
    }
    componentDidMount() {
        this.props.getCoins()
    }
    handleSearch = (e) => {
        let { value } = e.target;
        this.setState({
            searchTerm: value
        })
    }

    render() {
        const coinList = this.props.coins.filter((coin) => {
            return coin.name.toLowerCase().includes(this.state.searchTerm);
        }).map((coin, index) =>
            <li key={index}><Link to={`/coins/${coin.id}`} key={index}><span className={`s-${coin.id}`} key={index}></span>{coin.name}</Link></li>
            )


        // const coinFilter = this.props.coins.filter((coin, index) => {
        // return coin.name.indexof(`${coin}`) >= 0
        // })
        return (
            <div>
                <input value={this.state.searchTerm} type="text" placeholder="Search" onChange={this.handleSearch} />
                <div className="view">
                    <ul className="nav">
                        {coinList}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { coins: state.coins }
}
export default connect(mapStateToProps, { getCoins })(Header);
