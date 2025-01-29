import React, { useState } from "react";
import AxiosInstance from "../AxiosInstance";
import NavbarNew from '../NavbarNew'
import Footer from '../Footer'



const Hotel = ({ userEmail }) => {
  const [Penthouse, setPenthouse] = useState(0);
  const [DoubleBed, setDoubleBed] = useState(0);
  const [SingleBed, setSingleBed] = useState(0);

  const PENTHOUSE_PRICE = 50; 
  const DOUBLEBED_PRICE = 20;
  const SINGLEBED_PRICE = 10;


  const totalCost =
    Penthouse * PENTHOUSE_PRICE +
    DoubleBed * DOUBLEBED_PRICE +
    SingleBed * SINGLEBED_PRICE;

  const handleCheckout = () => {
    const data = {
      penthouse_tickets: Penthouse,
      doublebed_tickets: DoubleBed,
      singlebed_tickets: SingleBed,
      total_cost: totalCost,
      email: userEmail,
    };

    AxiosInstance.post("/api/tickets/", data)
      .then((response) => {
        alert("Hotel purchased successfully!");
    
        setPenthouse(0);
        setDoubleBed(0);
        setSingleBed(0);
      })
      .catch((error) => {
        console.error("Error purchasing hotel:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
    <NavbarNew/>
    <div className="max-w  p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Purchase Hotel</h1>
      <div className="md:text-right ">number of nights</div>
      <div className="space-y-4">
        {/* Penthouse */}
        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Penthouse</label>
          <input
            type="number"
            min="0"
            value={Penthouse}
            onChange={(e) => setPenthouse(Number(e.target.value))}
            className="w-16 p-2 border rounded"
          />
        </div>

        {/* Double Bed */}
        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Double Bed</label>
          <input
            type="number"
            min="0"
            value={DoubleBed}
            onChange={(e) => setDoubleBed(Number(e.target.value))}
            className="w-16 p-2 border rounded"
          />
        </div>

        {/* Singe Bed */}
        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Singe Bed</label>
          <input
            type="number"
            min="0"
            value={SingleBed}
            onChange={(e) => setSingleBed(Number(e.target.value))}
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
    <Footer/>
    </>
  );
};

export default Hotel;
