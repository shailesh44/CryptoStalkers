import Script from "next/script";
import Head from "next/head";

export const getStaticPaths = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true');
    const data = await res.json();

    const paths = data.map(coin => {
        return {
            params: {pageno: coin.id.toString(),
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id= context.params.pageno;
    const coinDetailRes = await fetch('https://api.coingecko.com/api/v3/coins/' + id)
    const globalDataRes = await fetch('https://api.coingecko.com/api/v3/global')
    const coinDetail = await coinDetailRes.json()
    const globalData = await globalDataRes.json()
    /*console.log(data)*/
    return{
        props: {  coinDetail,
            globalData
        }
    }
}

const Details = ({coinDetail, globalData }) => {
    return ( 
        <>
        <Head>
         <title>{coinDetail.name}</title>
        </Head>
        <div> 
<Script src="https://widgets.coingecko.com/coingecko-coin-market-ticker-list-widget.js" />
<coingecko-coin-market-ticker-list-widget  coin-id={coinDetail.id} currency="usd" locale="en"></coingecko-coin-market-ticker-list-widget>
        
<Script src="https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js" />
<coingecko-coin-price-chart-widget  coin-id={coinDetail.id} currency="usd" height="500" locale="en"></coingecko-coin-price-chart-widget>

            <div key={coinDetail.id}> 
            <p><b>Coin description:</b><br></br>{coinDetail.description.en}</p>
           
           <Script src="https://widgets.coingecko.com/coingecko-coin-converter-widget.js" />
<coingecko-coin-converter-widget  coin-id={coinDetail.id} currency="inr" background-color="#ffffff" font-color="#4c4c4c" locale="en"></coingecko-coin-converter-widget>
           
        </div>
       
      </div> 
      </>
     );
     
}
 
export default Details;
