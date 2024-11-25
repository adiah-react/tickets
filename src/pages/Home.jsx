import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import calendarImg from "../assets/img/calendar.jpg";
import EventCard from "../components/EventCard";
import Spinner from "../components/Spinner";
import { db } from "../firebase.config";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsRef = collection(db, "events");

      const q = query(eventsRef, orderBy("timestamp", "desc"));
      const querySnap = await getDocs(q);

      const events = [];
      querySnap.forEach((doc) => {
        return events.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setEvents(events);
      setLoading(false);
    };

    fetchEvents();
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome back</p>
      </header>

      <img src={calendarImg} alt="" className="heroImg" />

      <p className="homeIntro">Here are your upcoming events:</p>

      <div className="eventsContainer">
        {loading ? (
          <Spinner />
        ) : events && events.length > 0 ? (
          <Slider {...settings}>
            {events.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                image={event.img}
                price={event.price}
                timestamp={event.timestamp}
              ></EventCard>
            ))}
          </Slider>
        ) : (
          <p>No events</p>
        )}
      </div>
    </div>
  );
};
export default Home;
