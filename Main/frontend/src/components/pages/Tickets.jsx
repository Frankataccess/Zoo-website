import { useState, useEffect } from "react";
import AxiosInstance from "../AxiosInstance";
import NavbarNew from "../NavbarNew";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [ticketDate, setTicketDate] = useState("");
  const [ticketAmount, setTicketAmount] = useState({
    family: 0,
    adult: 0,
    child: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Ticket prices
  const ticketPrices = {
    family: 30,
    adult: 20,
    child: 10,
  };

  const calculateTotalCost = () => {
    return (
      ticketAmount.family * ticketPrices.family +
      ticketAmount.adult * ticketPrices.adult +
      ticketAmount.child * ticketPrices.child
    );
  };

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await AxiosInstance.get("/tickets/");
        setTickets(response.data);
      } catch (err) {
        setError("Failed to fetch tickets. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const bookTickets = async (e) => {
    e.preventDefault();

    // Check if at least one ticket type is selected with a quantity
    if (
      ticketAmount.family === 0 &&
      ticketAmount.adult === 0 &&
      ticketAmount.child === 0
    ) {
      setError("Please select at least one ticket.");
      return;
    }

    // Prepare ticket data for submission
    const ticketsData = [];

    if (ticketAmount.family > 0) {
      ticketsData.push({
        ticket_type: "family",
        ticket_date: ticketDate,
        quantity: ticketAmount.family,
      });
    }
    if (ticketAmount.adult > 0) {
      ticketsData.push({
        ticket_type: "adult",
        ticket_date: ticketDate,
        quantity: ticketAmount.adult,
      });
    }
    if (ticketAmount.child > 0) {
      ticketsData.push({
        ticket_type: "child",
        ticket_date: ticketDate,
        quantity: ticketAmount.child,
      });
    }

    try {
      // Send multiple tickets to the backend
      const response = await AxiosInstance.post("/tickets/", {
        tickets: ticketsData,
      });
      console.log("Tickets created:", response.data);
      setTickets((prev) => [...prev, ...response.data]); // Add the new tickets to the list
      setTicketAmount({ family: 0, adult: 0, child: 0 });
      setTicketDate("");
      setError(null);
    } catch (err) {
      console.error(
        "Error booking tickets:",
        err.response?.data || err.message
      );
      setError(
        err.response?.data || "Failed to book tickets. Please try again."
      );
    }

    navigate("/bookings");
  };

  if (loading) return <div className="text-center">Loading tickets...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <>
      <NavbarNew />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Tickets</h1>

        {/* Ticket Booking Form */}
        <form className="mb-8" onSubmit={bookTickets}>
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Available Ticket Types</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="mr-2">Family £30</span>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="w-20 p-2 border rounded"
                    value={ticketAmount.family}
                    onChange={(e) =>
                      setTicketAmount({
                        ...ticketAmount,
                        family: Math.max(0, e.target.value),
                      })
                    }
                    min="0"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="mr-2">Adult £20</span>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="w-20 p-2 border rounded"
                    value={ticketAmount.adult}
                    onChange={(e) =>
                      setTicketAmount({
                        ...ticketAmount,
                        adult: Math.max(0, e.target.value),
                      })
                    }
                    min="0"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="mr-2">Child £10</span>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="w-20 p-2 border rounded"
                    value={ticketAmount.child}
                    onChange={(e) =>
                      setTicketAmount({
                        ...ticketAmount,
                        child: Math.max(0, e.target.value),
                      })
                    }
                    min="0"
                  />
                </div>
              </div>
            </div>
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

          {/* Total Cost */}
          <div className="mb-6 text-lg font-semibold">
            <p>Total Cost: £{calculateTotalCost()}</p>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Book Tickets
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Tickets;
