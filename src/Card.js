import "./Card.css"

export default function Card(props){
    return (
        <div className="card">
            <p className="label">ip address</p>
            <p className="data">102.212.174.101</p>
            <p className="label">location</p>
            <p className="data">Brooklyn, NY 10001</p>
            <p className="label">timezone</p>
            <p className="data">UTC-05:00</p>
            <p className="label">isp</p>
            <p className="data">SpaceX Starlink</p>
        </div>
    )
}