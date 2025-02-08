import './Card.css';

function Card({ user }) {
    return <div className="Card">
        <div className="Card-Details">
            <img src='./logo512.png' className="Card-Image" />
        </div>
        <div className='Card-DetailText'>
            <h3 className="Card-Header">{user.fullName}</h3>
            <h4 className="Card-SubHeader">{user.occupation}</h4>
        </div>


    </div>

}

export default Card;