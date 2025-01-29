import { useState, useEffect } from "react";
import AxiosInstance from "../AxiosInstance";
import NavbarNew from "../NavbarNew";
import Footer from "../Footer";

const Bookings = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await AxiosInstance.get("/tickets/");
        const currentDate = new Date();

        // Filter tickets to show only those with a future or today's date
        const filteredTickets = response.data.filter((ticket) => {
          const ticketDate = new Date(ticket.ticket_date);
          return ticketDate >= currentDate;
        });

        setTickets(filteredTickets);
      } catch (err) {
        setError("Failed to fetch tickets. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) return <div className="text-center">Loading bookings...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div>
      <NavbarNew />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Bookings</h1>

        {/* Tickets List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {tickets.map((ticket) => (
            <div key={ticket.ticket_id} className="p-4 border rounded shadow">
              <h2 className="font-bold">Ticket ID: {ticket.ticket_id}</h2>
              <p>Type: {ticket.ticket_type}</p>
              <p>Date: {ticket.ticket_date}</p>
              <p>User: {ticket.user}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;
