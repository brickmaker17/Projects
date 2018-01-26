import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCoins } from "../../redux/coins";
import Chart from 'chart.js';
import "./index.css";
// import index from 'redux-thunk';


class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: ""
        }
    }
    // componentDidMount() {
        // console.log(this.props.getCoins);
        // // clearInterval(this.interval);
        // this.interval = setInterval(this.props.getCoins, 5000)
    // }

    render() {
        let { coins } = this.props;
        let { id } = this.props.match.params;
        let currentCoin = coins.filter(coin => coin.id === id)[0] || { name: "", prices: [], rank: "" };
        return (
            <div>
                <h1 className="body-head">{currentCoin.name}</h1>
                <h2 className="body-sub">Rank #{currentCoin.rank}</h2>
                <p className="body-price">Prices ${currentCoin.prices}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { coins: state.coins }
}
export default connect(mapStateToProps, { getCoins })(Coin);