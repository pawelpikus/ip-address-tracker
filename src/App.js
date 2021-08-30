import './App.css';
import Card from "./Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <>  
      <div className="background-pattern"></div>
      <div className="map"></div>
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
              <button className="submit"><FontAwesomeIcon icon={faCompass} /></button>
            </form>
            
        </main>
        <Card />
        
      </div> 
      
      

    </>
  )
}

export default App;
