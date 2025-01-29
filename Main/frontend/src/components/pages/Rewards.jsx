import { useState, useEffect } from "react";
import AxiosInstance from "../AxiosInstance"; // Axios instance to communicate with backend
import NavbarNew from "../NavbarNew";
import Footer from "../Footer";

const Rewards = () => {
  const [totalTickets, setTotalTickets] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTotalTickets = async () => {
      try {
        const response = await AxiosInstance.get("/api/rewards/"); // Fetch total tickets from backend
        setTotalTickets(response.data.total_tickets);
      } catch (err) {
        setError("Failed to fetch ticket count. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTotalTickets();
  }, []);

  if (loading) return <div className="text-center">Loading rewards...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div>
      <NavbarNew />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Rewards</h1>
        <div className="text-lg">
          <p>
            You have purchased a total of <strong>{totalTickets}</strong>{" "}
            tickets!
          </p>
        </div>
        {/* Display additional rewards info if desired */}
      </div>
      <Footer />
    </div>
  );
};

export default Rewards;
