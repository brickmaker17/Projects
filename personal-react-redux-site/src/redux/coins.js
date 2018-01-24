import axios from 'axios';

const coins = (prevCoins = [], action) => {
    switch (action.type) {
        case "GET_COINS":
            return action.coins.map((coin, i) => {
                let price = coin.price_usd;
                let prevCoin = prevCoins[i];
                if (prevCoin) {
                    return { ...coin, prices: [...coin.prices, price] }
                } else {
                    return {...coin, prices: [price]}
                }
            });
        default:
            return prevCoins;

    }
}

let coinUrl = "https://api.coinmarketcap.com/v1/ticker/";

export let getCoins = () => {
    return (dispatch) => {
        axios.get(coinUrl)
            .then((response) => {
                dispatch({ type: "GET_COINS", coins: response.data });
            })
            .catch((err) => {
                console.error(err);
            });
    }
}


export default coins;

