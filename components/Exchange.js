import { useState, useEffect} from 'react';
import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Exchange() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [page, setPage] = useState(50)
  
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.coingecko.com/api/v3/exchanges?per_page=${page}`).then((response) => 
      response.json()).then((data) => { 
      setData(data)
      setLoading(false)
      }).catch(err => console.log(err))
  }, [page])
  
  
  function showAll() {
    setPage(page + 50)
    if (page == 250) {
      setPage(50)
    }
  }
  
  
  if (loading) return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center text-[1.8rem] font-DM">
    <p>Please wait...</p>
    </div>
    )
  
  return (
   <div className="min-h-[100vh] w-[100%] flex flex-col items-center my-5">
   {data ? data.map(item => {
     return (
   
     <div key={item.id} className="w-[22rem] h-[8.5rem] mt-5 text-black rounded-xl py-3 px-4 flex flex-col items-center shadow-md justify-between font-DM transition-all duration-500 bg-white">
     <div className="w-[100%] flex items-center justify-between">
     <div className="flex items-center">
     <div className="h-[35px] w-[35px] overflow-hidden flex items-center">
     {item.trust_score_rank}
     </div>
     <div className="h-[35px] w-[35px] rounded-full overflow-hidden">
     <Image src={item.image} height="35px" width="35px" layout="fixed" objectFit="cover" alt="icon"/>
     </div>
     
     </div>
     <div className="flex flex-col justify-between items-end">
     <div className="text-[15px] text-black rounded-lg font-bold transition-all duration-500 hover:bg-white hover:text-black">
    <p>
     {item.name}
     </p>
     </div>
     
     <div className="text-[14px]">
{item.trade_volume_24h_btc.toLocaleString()} BTC
     </div>
     <div className="text-[12px]">
      <i className="text-[14px] bi bi-arrow-left-right"></i> 24H VOL.
     </div>
     </div>
     </div>
     <div className="w-[100%] h-[2.5rem] mt-1  border-2 border-black bg-gray-800 text-white rounded-full flex justify-center items-center transition-all duration-500 hover:bg-white hover:text-black">
     <a href={item.url}>
     <p>Go to {item.name}</p>
     </a>
     </div>
     
     </div>
     
     
     

    
     
  
     
  
     )
   }) : (<div className="h-[100vh] w-[100%] flex justify-center items-center text-[1.8rem] font-DM">
    <p>Exchanges pending...</p>
    </div>)}
       <button id="Show All" className="border-2 bg-gray-800 mt-5 text-white border-black rounded-md px-5 h-[2rem] hover:bg-white hover:text-black" onClick={() => showAll()}>{page == 250 ? "Show Less" : "Show More"}</button>
   </div>
  )
}
