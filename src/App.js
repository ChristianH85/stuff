import React , { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './apiFunc/api'
import SearchForm from './components/Forms/SearchForm';
import Info from './components/Info/Info';
import LineChart from './components/Charts/LineChart';
function App() {
  const[info,setInfo]=useState('')
  // useEffect(()=>{
    
  // },[])
  const handleSingleSearch= async(query)=>{
   let results= await Api.searchCrypto(query)
   setInfo(results.data[0])
  }
  return (
    <div className="App">
      <SearchForm handleSingleSearch={handleSingleSearch} />
      {info?<Info info={info}/>:null}
      {info.sparkline_in_7d? <LineChart chData={info.sparkline_in_7d.price}/>:null}
    </div>
  );
}

export default App;
