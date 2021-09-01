import './App.css';
import Card from "./Card"
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { Map, Marker } from "pigeon-maps"

function App() {
  
  const ValidIpAddressRegex = "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"
  const ValidDomainNameRegex = "(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]"

  const API_KEY = '' //enter your API KEY from Apify.com
  const [query, setQuery] = useState("")
  const [ipData, setIpData] = useState()
  const [center, setCenter] = useState([50, 23])
  const [zoom, setZoom] = useState(11)


  function isDomainName(str){
    return RegExp(/^\p{L}/,'u').test(str)
  }

  const getInitialLocation = async () =>{

    try{
      const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}`)
      const initialLocationData = await response.json()
      setIpData(initialLocationData)
      setCenter([initialLocationData.location.lat, initialLocationData.location.lng])
      
    } catch(err){
      console.log(err)
    }
  }
  
  useEffect(() => {
    getInitialLocation()
  }, [])
  
  const getLocation = async (e) =>{
    e.preventDefault()
    try{
      const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${!isDomainName(query)?query: ''}&domain=${isDomainName(query)? query: ''}`)
    const locationData = await response.json()
    setIpData(locationData)
    setQuery('')
    setCenter([locationData.location.lat, locationData.location.lng]) 
    
    } catch(err){
      console.log(err)
    }
    
  }
  
  return (
    <>  
      <div className="background-pattern"></div>
      <div className="map-container">
        <Map 
          center={center} 
          zoom={zoom} 
          onBoundsChanged={(center, zoom) => { 
            setCenter(center) 
            setZoom(zoom)}}
          animate={true}>
          <Marker width={50} anchor={center} />
        </Map>
      </div>
      
      <div className="container">
        <header className="header">
          <h1 className="title">IP Address Tracker</h1>
        </header>
        <main className="main">
            <form onSubmit={getLocation} className="form">
              <input 
                type="text" 
                name="search-ip" 
                id="search-ip"
                pattern = {isDomainName(query)? ValidDomainNameRegex : ValidIpAddressRegex}
                placeholder="Search any IP address or domain name"
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>
              <button className="submit"><FontAwesomeIcon icon={faGreaterThan}/></button>
            </form>
        </main>
          {ipData ? <Card ipData={ipData}/> : <div>Loading...</div>}
      </div> 
    </>
  )
}

export default App;
