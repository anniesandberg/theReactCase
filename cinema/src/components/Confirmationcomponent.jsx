
const Confirmationcomponent = (props) => {
    return (  
        <div>
            <h2 className="thankYou">Tack för din bokning!</h2>
            <div className="confirmedBooking">
                <p>Film: {props.props.chosenMovie[0].movie}</p>
                <p>Tid: {props.props.chosenTime[0].time}:00</p>
                <p>Platsnummer: {props.props.marked.map(seat => (seat.id + 1) + ', ')}</p>
            </div>
        </div>
    );
}
 
export default Confirmationcomponent;