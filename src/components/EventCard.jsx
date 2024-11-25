import PropTypes from "prop-types";

const EventCard = ({ title, image, price, timestamp }) => {
  return (
    <div className="eventCard">
      <div className="eventTitle">{title}</div>
      <div className="eventImage">
        <img src={image} alt="" />
      </div>
      <div className="eventDetails">
        <div className="date">Date: {}</div>
        <div className="time">Time: {}</div>
        <div className="price">Admission: ${price}</div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  timestamp: PropTypes.object,
};
export default EventCard;
