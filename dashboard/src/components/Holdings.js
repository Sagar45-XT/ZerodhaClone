import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// Import VerticalGraph if you're using it
import {VerticalGraph} from './VerticalGraph';  // Add this import

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const token = localStorage.getItem("token");
        // if (!token) {
        //   window.location.replace("http://localhost:3001/login");
        //   return;
        // }

        const response = await axios.get("https://zerodhaapp-tjq6.onrender.com/allHoldings", {
          headers: { 
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        });

        if (response.data) {
          setAllHoldings(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Holdings fetch error:", error);
        if (error.response?.status === 401) {
          toast.error("Session expired. Please login again.");
          // setTimeout(() => {
          //   window.location.replace("https://main.dluda969rbph4.amplifyapp.com/login");
          // }, 2000);
        } else {
          toast.error("Failed to fetch holdings");
        }
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  if (loading) {
    return <div>Loading holdings...</div>;
  }

  // Define data for the VerticalGraph
  const data = {
    labels: allHoldings.map((holding) => holding.name),
    datasets: [
      {
        // Add your dataset configuration here
        data: allHoldings.map((holding) => holding.quantity),
        // Add other required properties
      }
    ]
  };




  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>29,875.<span>55</span>{" "}</h5>
          <p>Total Investment</p>
        </div>
        <div className="col">
          <h5>31,428.<span>95</span>{" "}</h5>
          <p>Current Value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)<span>55</span>{" "}</h5>
          <p>P&L</p>
        </div>
      </div>
      < VerticalGraph data={data} />
    </>
  );
};

export default Holdings;