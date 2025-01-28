import { useState, useEffect } from 'react';
import AxiosInstance from '../AxiosInstance';
import NavbarNew from '../NavbarNew'
import Navbar from '../NavbarNew';

const Tickets = () => {
  const [tickets, setTickets] = useState([]); 
  const [ticketType, setTicketType] = useState(''); 
  const [ticketDate, setTicketDate] = useState(''); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await AxiosInstance.get('/tickets/');
        setTickets(response.data);
      } catch (err) {
        setError('Failed to fetch tickets. Please try again.');
      } finally {
        setLoading(false); 
      }
    };

    fetchTickets();
  }, []);

  const bookTicket = async (e) => {
    e.preventDefault();
    console.log('Booking ticket with data:', { ticket_type: ticketType, ticket_date: ticketDate });

    try {
        const response = await AxiosInstance.post('/tickets/', {
            ticket_type: ticketType,
            ticket_date: ticketDate,  
        });
        console.log('Ticket created:', response.data);
        setTickets((prev) => [...prev, response.data]);
        setTicketType('');
        setTicketDate('');
        setError(null);
    } catch (err) {
        console.error('Error booking ticket:', err.response?.data || err.message);
        setError(err.response?.data || 'Failed to book ticket. Please try again.');
    }
};

  if (loading) return <div className="text-center">Loading tickets...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <>
    <NavbarNew/>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Tickets</h1>

      {/* Ticket Booking Form */}
      <form className="mb-8" onSubmit={bookTicket}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Ticket Type</label>
          <select
            className="w-full border rounded p-2"
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
            required
          >
            <option value="">Select Type</option>
            <option value="family">Family</option>
            <option value="adult">Adult</option>
            <option value="child">Child</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Date</label>
          <input
            type="date"
            className="w-full border rounded p-2"
            value={ticketDate}
            onChange={(e) => setTicketDate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Book Ticket
        </button>
      </form>

      {/* Tickets List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tickets.map((ticket) => (
          <div key={ticket.ticket_id} className="p-4 border rounded shadow">
            <h2 className="font-bold">Ticket ID: {ticket.ticket_id}</h2>
            <p>Type: {ticket.ticket_type}</p>
            <p>Date: {ticket.ticket_date}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Tickets;
