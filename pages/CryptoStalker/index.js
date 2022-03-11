import Head from "next/head";
import Link from "next/link";
import Script from "next/script";


export const getStaticProps = async () => {
    /*var apikey = {
        key: '29cc6e59-e086-466c-8585-84a93e626a37'
    }*/
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true');
    const globalDataHomeRes = await fetch('https://api.coingecko.com/api/v3/global')
    const data = await res.json();
    const globalDataHome = await globalDataHomeRes.json()

    return {
        props: { coins: data,
        globalDataHome}
    }
}



const Crypto = ({ coins, globalDataHome }) => {
    return ( 
        <>
        <Head>
            <title>CryptoStalker | Coins</title>
        </Head>
        <div>
            <p >Market Change={Math.round(globalDataHome.data.market_cap_change_percentage_24h_usd)}% |Active Currencies={globalDataHome.data.active_cryptocurrencies}| | Markets={globalDataHome.data.markets} | BTCDominance={Math.round(globalDataHome.data.market_cap_percentage.btc)}% | ETHDominance={Math.round(globalDataHome.data.market_cap_percentage.eth)}% </p>
            <h1>
                Top 100 cryptocurrencies
            </h1>
                  {coins.map(coin => (
               <Link href={'/CryptoStalker/' + coin.id} key={coin.id}>
                   <a>
                      <table className="table">
                          <thead>
                          <tr>
                              <th>Rank</th>
                              <th>Logo </th>
                              <th> Coin</th>
                              <th>Price</th>
                              <th>Symbol</th>
                              <th>Market Capital</th>
                              <th>Price Change</th>
                          </tr>
                          </thead>
                              <tr>
                          <td>{coin.market_cap_rank}</td>
                          <div className="img-cointainer">
                          <img src={coin.image}></img>
                          </div>
                          <td>{coin.name}</td>
                          <td>${coin.current_price}</td>
                          <td>{coin.symbol}</td>
                          <td>${coin.market_cap}</td>
                          <td>{coin.price_change_percentage_24h}</td>
                          </tr>
                      </table>
                   </a>
                   </Link>
           ))}
        </div>
        </>
     );
}
 
export default Crypto; 