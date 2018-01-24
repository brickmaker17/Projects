import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCoins } from "../../redux/coins";
import "./index.css";

class Header extends Component {
    componentDidMount() {
        this.props.getCoins()
    }
    render() {
        const coins = this.props.coins.map((coin, index) =>
            <Link to={`/coins/${coin.id}`} key={index}><span className={`s-${coin.id}`} key={index}></span>{coin.name}</Link>
        )

        return (
            <div className="nav">
                
                    {coins}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { coins: state.coins }
}
export default connect(mapStateToProps, { getCoins })(Header);
