import './App.css';
import Card from "./Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { Map, Marker, ZoomControl } from "pigeon-maps"



function App() {
  
  return (
    <>  
      <div className="background-pattern"></div>
      
      <div className="leaflet-container">
        <Map defaultCenter={[50.879, 4.6997]} defaultZoom={13}>
          <Marker width={50} anchor={[50.879, 4.6997]} />
          <ZoomControl />
        </Map>
      </div>
      
      <div className="container">
        <header className="header">
          <h1 className="title">IP Address Tracker</h1>
        </header>
        <main className="main">
            <form onSubmit="" className="form">
              <input 
                type="text" 
                name="search-ip" 
                id="search-ip"
                placeholder="e.g. 192.168.1.106"/>
              <button className="submit"><FontAwesomeIcon icon={faGreaterThan} /></button>
            </form>
            
        </main>
        <Card />
        
      </div> 
      
      

    </>
  )
}

export default App;
