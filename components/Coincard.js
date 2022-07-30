import { useState, useEffect } from 'react';
import Coins from './Coins';


export default function Coincard() {
  const [loading, setLoading] = useState(false)
  const [loadtext, setLoadtext] = useState("Please Wait...")
  const [data, setData] = useState(null)
  const [coin, setCoin] = useState(20)
  const [filterData, setFilterData] = useState(data)
  const [page, setPage] = useState(1)
  
  const searchHandler = (e) => {
    setLoadtext("List Loading..")
    setCoin(250)
    
    let value = e.target.value.toLowerCase();
    let result = data.filter((coin) => {
      return coin.name.toLowerCase().includes(value)
    });
    setFilterData(result);
  }
  
  function reset() {
    setPage(1)
    setCoin(20)
  }
  
  function nextPage() {
    setPage(page + 1)
    if (coin == 250) {
      setCoin(20)
    }
  }
  
  function prevPage() {
    setPage(page - 1)
    if (coin == 250) {
      setCoin(20)
    }
  }
  
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coin}&page=${page}&sparkline=false&price_change_percentage=price_change_percentage_24h`).then((response) => 
      response.json()).then((data) => { 
      setData(data)
      setFilterData(data)
      setLoading(false)
      setLoadtext("Please Wait...") 
      }).catch(err => console.log(err))
  }, [page, coin])
  
  
  
  if (loading) return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center text-[1.8rem] font-DM">
    <p>{loadtext}</p>
    </div>
    )
    
  if (!data) return (
     <div className="h-[100vh] w-[100%] flex justify-center text-[1.8rem] items-center font-DM">
      <p>Data Pending..</p>
    </div>
    )
  
  return ( 
    <>
    <div className="w-[100%] min-h-[90vh] py-5 flex flex-col items-center">
    
    <div className="bg-white flex rounded-md justify-between px-5 items-center w-[20rem] h-[3rem] shadow-sm">
    <input className="w-[90%] h-[100%] outline-none px-5" placeholder="Search here... (Max 250)" onChange={searchHandler}/>
    <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center">
    <i className="bi bi-search"></i>
    </div>
    </div>
   
   {filterData ? filterData.map(item => {
     return (
     <>
  
       <Coins key={item.id} id={item.id} name={item.name} price={item.current_price} image={item.image} rank ={item.market_cap_rank} market={item.market_cap} priceMove={item.price_change_percentage_24h}/>
      
       </>
     )
   }) : (<div className="h-[100vh] w-[100%] flex justify-center items-center text-[1.8rem] font-DM">
    <p>Coins pending...</p>
    </div>)}
   
     <div className="flex mt-5 justify-between items-center p-5 w-[22rem] h-[3rem] font-DMp">
   <button disabled={page == 1} id="prevButt" className="border-2 bg-gray-800 text-white border-black rounded-md px-5 h-[2rem] hover:bg-white hover:text-black" onClick={prevPage}>Prev</button>
   
   <button id="resetButt" className="border-2 border-black bg-gray-800 text-white rounded-md px-5 h-[2rem] hover:bg-white hover:text-black" onClick={() => reset()}>{(page > 15) ? "Reset" : "Reset"}</button>
   
   <button disabled={page == 100} id="nextButt" className="border-2 bg-gray-800 text-white border-black rounded-md px-5 h-[2rem] hover:bg-white hover:text-black" onClick={nextPage}>Next</button>
   </div>
  
   </div>
   </>
  )
}
