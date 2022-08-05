import Navbar from '../../components/Navbar'
import parse from 'html-react-parser';
import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Detail({ coin }) {
  
  const devHigh = 'w-[4rem] h-[4rem] rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-[17px] whitespace-nowrap'
  
  const devMed = 'w-[4rem] h-[4rem] rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-[17px] whitespace-nowrap'
  
  const devLow = 'w-[4rem] h-[4rem] rounded-full bg-red-400 flex items-center justify-center text-white font-bold text-[17px] whitespace-nowrap'
  
  var url = coin.links.homepage.toString().split( ',' );
  var block = coin.links.blockchain_site.toString().split( ',' );
 
  return (
    <>
      <Head>
        <title>{coin.name} - blockpeek</title>
        <meta name="description" content={coin.id} />
      </Head>
   <div className="bg-[#F9F5EB]">
   <Navbar title="details" />
   <div className="w-[100%] flex flex-col items-center font-DM">
   
    <div className="w-[22rem] h-[14rem] flex items-center justify-center">
    <div className="w-[19rem] flex items-center justify-center">
    <div className="w-[7rem] h-[7rem]">
    <Image src={coin.image.large} height="6rem" width="6rem" layout="responsive" objectFit="contain" alt="pict" />
    </div>
    
    <div className="h-[7rem] w-[7rem] font-bold text-[30px] text-center flex items-center mx-5">
    {coin.name}
    </div>
    </div>
    </div>
    <div className="bg-white p-5">
    <div id="SupplyContainer" className="w-[22rem] h-[13rem] flex items-center justify-between gap-2 rounded-md md:w-[26rem]">
    
    <div className="flex flex-col h-[13rem] shadow-md rounded-md px-5 items-center bg-white justify-center">
    <p className="font-bold">Dev Score</p>
    <div className={(coin.developer_score < 75 && coin.developer_score > 60) ? devMed : (coin.developer_score < 60) ? devLow : devHigh}>
    {(coin.developer_score === 0) ? "--" : coin.developer_score.toFixed(2)}
    </div>
    
    <p className="font-bold whitespace-nowrap">Community Score</p>
    <div className={(coin.community_score < 75 && coin.community_score > 60) ? devMed : (coin.community_score < 60) ? devLow : devHigh}>
    {(coin.community_score === 0) ? "--" : coin.community_score.toFixed(2)}
    </div>
    </div>
    
    <div className="flex flex-col h-[13rem] shadow-md bg-white rounded-md p-4 justify-evenly items-center grow text-[13px] overflow-hidden md:justify-between md:text-[16px] whitespace-nowrap">
    
    <div className="flex flex-col items-center">
    <p className="font-bold">Max Supply</p>
    <div>
    {(coin.market_data.max_supply == null) ? "Data not found" : `${coin.market_data.max_supply.toLocaleString()} ${coin.symbol.toUpperCase()}`}
    </div>
    </div>
    
    <div className="flex flex-col items-center">
    <p className="font-bold">Total Supply</p>
    <div>
    {coin.market_data.total_supply ? `${coin.market_data.total_supply.toLocaleString()} ${coin.symbol.toUpperCase()}` : "Data not found"}
    </div>
    </div>
    
    <div className="flex flex-col items-center">
    <p className="font-bold">Circulating Supply</p>
    <div>
    {coin.market_data.circulating_supply ? `${coin.market_data.circulating_supply.toLocaleString()} ${coin.symbol.toUpperCase()}` : "Data not found"}
    </div>
    </div>
    
    </div>
    
    </div>
    
    <div id="secondCard" className="w-[22rem] h-[7rem] bg-white p-5 mt-2 flex justify-between shadow-md  font-DM font-bold overflow-hidden rounded-md text-[12px] md:w-[26rem]">
    <div className="flex flex-col justify-between h-[100%]">
    
    <div className="w-[10rem] h-[2rem] text-green-500 border-2 border-green-500 rounded-md items-center p-1 gap-1 flex justify-center transition-all duration-500 whitespace-nowrap hover:scale-[1.05]">
     <i className="bi bi-caret-up-fill"></i> 
     <p>24H HIGH : ${coin.market_data.high_24h.usd ? coin.market_data.high_24h.usd.toLocaleString() : "No data"}</p>
    </div>
    <div className="w-[10rem] h-[2rem] p-1 border-2 border-red-400 rounded-md justify-center items-center gap-1 flex text-red-400 transition-all duration-500 whitespace-nowrap hover:scale-[1.05]">
    <i className="bi bi-caret-down-fill"></i> 
    <p>24H LOW : ${coin.market_data.high_24h.usd ? coin.market_data.low_24h.usd.toLocaleString() : "No data"}</p>
    </div>
    </div>
    <div className="flex ml-2 grow flex-col items-center bg-green-400 justify-center text-white rounded-md text-[16px] transition-all duration-500 whitespace-nowrap hover:scale-[1.05]">
    <p>ALL TIME HIGH</p>
    <p>${coin.market_data.ath.usd ? coin.market_data.ath.usd.toLocaleString() : "No data"}</p>
    </div>
    </div>
    
    <div id="thirdCard" className="w-[22rem] h-[10rem] bg-white mt-2 flex items-center shadow-md font-DM font-bold overflow-hidden rounded-md md:w-[26rem]">
    
    <div id="first-col" className="h-[8rem] w-[100%] p-5 flex flex-col gap-2 justify-center items-start md:items-center md:justify-center">
    
    <div id="website" className="flex gap-2 items-center">
    <i className="bi bi-globe text-[1.5rem]"></i>
    <a href={url[0] ? url[0] : ''}><p className="text-[14px] hover:underline">{(url[0]) ? url[0] : "No website available"}</p>
    </a>
    </div>
    
    <div id="blockchain" className="flex gap-2 items-center">
    <i className="bi bi-box text-[1.5rem]"></i>
    <a href={block[0] ? block[0] : ''}><p className="text-[14px] whitespace-nowrap w-[12rem] overflow-hidden hover:underline">{(block[0]) ? block[0] : "No website available"}</p>
    </a>
    </div>
    
    <div id="twitter" className="flex gap-2 items-center">
    <i className="bi bi-twitter text-sky-500 text-[1.5rem]"></i>
    <a href={`https://mobile.twitter.com/${coin.links.twitter_screen_name}`}>
    <p className="text-[14px] hover:underline">{(coin.links.twitter_screen_name) ? coin.links.twitter_screen_name : "No twitter account"}</p>
    </a>
    </div>
    </div>
    </div>
   
    <div className="w-[22rem] m-5 md:w-[26rem]">
    <div className="font-bold text-[2rem]">
    Description
    </div>
    <div className="text-[1.1rem]">
    {coin.description.en ? parse(coin.description.en) : "No Description Yet"}
    </div>
    </div>
    
    </div>
    </div>
    </div>
   </>
  )
}

export async function getServerSideProps(param) {
  const { id } = param.query
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`);
  
  const data = await res.json();
    
    return {
        props: {
            coin: data
        }
    };
    
}

