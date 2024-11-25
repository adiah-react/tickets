import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase.config";

const Tickets = () => {
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState(null);

  useEffect(() => {
    const fetchUserTickets = async () => {
      const ticketsRef = collection(db, "tickets");

      const q = query(ticketsRef, where("userRef", "==", auth.currentUser.uid));

      const querySnap = await getDocs(q);

      let tickets = [];

      querySnap.forEach((doc) => {
        return tickets.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setTickets(tickets);
      setLoading(false);
    };

    fetchUserTickets();
  }, []);

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Tickets</p>
      </header>
      {!loading && tickets?.length > 0 && (
        <>
          <p className="listingText">Your Tickets</p>
          <ul className="listingsList">
            {/* {tickets.map((ticket) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                  onDelete={() => onDelete(listing.id)}
                  onEdit={() => onEdit(listing.id)}
                />
              ))} */}
          </ul>
        </>
      )}
    </div>
  );
};
export default Tickets;
