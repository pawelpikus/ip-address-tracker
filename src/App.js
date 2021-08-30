import './App.css';
import Card from "./Card"
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function App() {
  const position = [51.505, -0.09]
  return (
    <>  
      <div className="background-pattern"></div>
      
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
             A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      
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
