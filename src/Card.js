import "./Card.css"

export default function Card({ipData}){
    
    
    return ipData.location ?( 
        
        <div className="card">
            <div className='col'>
                <p className="label">ip address</p>
                <p className="data">{ipData.ip}</p>
            </div>
            <div className='col'>
                <p className="label">location</p>
                <p className="data">{ipData.location.city}, {ipData.location.country}</p>
            </div>
            <div className='col'>
                <p className="label">timezone</p>
                <p className="data">UTC {ipData.location.timezone}</p>
            </div>
            <div className='col'>
                <p className="label">isp</p>
                <p className="data">{ipData.isp}</p>
            </div>
        </div>
        ) : (<div className='card'>
                <p>Please provide data in correct format.</p> 
            </div>)

}