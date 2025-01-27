import React, { useState } from "react";
import AxiosInstance from "../AxiosInstance";
import NavbarNew from '../NavbarNew'


const Tickets = ({ userEmail }) => {
  const [familyTickets, setFamilyTickets] = useState(0);
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);

  const FAMILY_PRICE = 50; 
  const ADULT_PRICE = 20;
  const CHILD_PRICE = 10;


  const totalCost =
    familyTickets * FAMILY_PRICE +
    adultTickets * ADULT_PRICE +
    childTickets * CHILD_PRICE;

  const handleCheckout = () => {
    const data = {
      family_tickets: familyTickets,
      adult_tickets: adultTickets,
      child_tickets: childTickets,
      total_cost: totalCost,
      email: userEmail,
    };

    AxiosInstance.post("/api/tickets/", data)
      .then((response) => {
        alert("Tickets purchased successfully!");
    
        setFamilyTickets(0);
        setAdultTickets(0);
        setChildTickets(0);
      })
      .catch((error) => {
        console.error("Error purchasing tickets:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
    <NavbarNew/>
    <div className="max-w  p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Purchase Tickets</h1>
      <div className="space-y-4">
        {/* Family Tickets */}
        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Family Tickets</label>
          <input
            type="number"
            min="0"
            value={familyTickets}
            onChange={(e) => setFamilyTickets(Number(e.target.value))}
            className="w-16 p-2 border rounded"
          />
        </div>

        {/* Adult Tickets */}
        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Adult Tickets</label>
          <input
            type="number"
            min="0"
            value={adultTickets}
            onChange={(e) => setAdultTickets(Number(e.target.value))}
            className="w-16 p-2 border rounded"
          />
        </div>

        {/* Child Tickets */}
        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Child Tickets</label>
          <input
            type="number"
            min="0"
            value={childTickets}
            onChange={(e) => setChildTickets(Number(e.target.value))}
            className="w-16 p-2 border rounded"
          />
        </div>
      </div>

      {/* Total Cost */}
      <div className="mt-6 text-lg font-semibold">
        Total Cost: ${totalCost}
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Checkout
      </button>
    </div>
    </>
  );
};

export default Tickets;
